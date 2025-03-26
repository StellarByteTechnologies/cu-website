'use client';
import React, { useState, useRef, useEffect } from 'react';

interface HeroComponentProps {
  videoSrc: string;
  title: string;
  description: string;
  className?: string;
}

const HeroComponent: React.FC<HeroComponentProps> = ({
  videoSrc,
  title,
  description,
  className = '',
}) => {
  const [isPaused, setIsPaused] = useState(true); // Start paused to show play button
  const [isIOS, setIsIOS] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check if device is iOS
  useEffect(() => {
    const iOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    setIsIOS(iOS);
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPaused) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsPaused(false))
            .catch((error) => console.log('Play failed:', error));
        }
      } else {
        videoRef.current.pause();
        setIsPaused(true);
      }
    }
  };

  // Handle initial play
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const handlePlay = () => setIsPaused(false);
    const handlePause = () => setIsPaused(true);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    // User-initiated play attempt
    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPaused(false))
          .catch((error) => {
            console.log('Autoplay prevented:', error);
            setIsPaused(true);
          });
      }
    };

    // Add click/touch event to the entire hero section for iOS
    if (isIOS) {
      container.addEventListener('click', playVideo, { once: true });
      container.addEventListener('touchend', playVideo, { once: true });
    } else {
      // Try autoplay on non-iOS
      playVideo();
    }

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      if (isIOS) {
        container.removeEventListener('click', playVideo);
        container.removeEventListener('touchend', playVideo);
      }
    };
  }, [isIOS]);

  return (
    <div
      ref={containerRef}
      className={`w-full relative overflow-hidden ${className}`}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        playsInline
        muted
        loop
        aria-hidden="true"
      />

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-16 lg:px-20 max-w-[1327px] mx-auto">
        <div className="max-w-[700px]">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight text-white">
            {title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-normal mt-4 text-white">
            {description}
          </p>
        </div>
      </div>

      {/* iOS tap to play overlay */}
      {isIOS && isPaused && (
        <div
          className="absolute inset-0 bg-black/20 flex items-center justify-center z-10"
          onClick={togglePlayPause}
        >
          <div className="bg-white/30 backdrop-blur-sm p-4 rounded-full">
            <span className="text-white text-5xl">▶</span>
          </div>
        </div>
      )}

      {/* Smaller button on mobile */}
      <button
        onClick={togglePlayPause}
        className="absolute right-4 md:right-8 bottom-24 flex items-center gap-2 md:gap-3 bg-black/30 backdrop-blur-sm px-2 md:px-3 py-1 md:py-2 rounded-full"
        aria-label={isPaused ? 'Play video' : 'Pause video'}
      >
        <span className="text-white text-sm md:text-xl font-medium">
          {isPaused ? 'Play' : 'Pause'}
        </span>
        <div className="w-6 h-6 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center">
          {isPaused ? (
            <span className="text-black font-bold text-xs md:text-base ml-0.5">
              ▶
            </span>
          ) : (
            <span className="text-black font-bold text-xs md:text-base">
              II
            </span>
          )}
        </div>
      </button>
    </div>
  );
};

export default HeroComponent;
