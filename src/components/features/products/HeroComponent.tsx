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
  const [isPaused, setIsPaused] = useState(false); // Start with playing state
  const videoRef = useRef<HTMLVideoElement>(null);

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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPaused(false);
    const handlePause = () => setIsPaused(true);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    // Aggressive autoplay for iOS Safari
    const playVideo = async () => {
      try {
        await video.play();
        setIsPaused(false);
      } catch (err) {
        console.log('Autoplay prevented:', err);
        setIsPaused(true);
      }
    };

    // Try to play immediately
    playVideo();

    // Also try on user interaction simulation
    document.addEventListener(
      'touchstart',
      function onFirstTouch() {
        playVideo();
        document.removeEventListener('touchstart', onFirstTouch);
      },
      { once: true }
    );

    // Try multiple times with increasing delays
    setTimeout(playVideo, 300);
    setTimeout(playVideo, 1000);
    setTimeout(playVideo, 2000);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  return (
    <div className={`w-full relative overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        playsInline
        muted
        loop
        preload="auto"
        aria-hidden="true"
      />

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

      {/* Button with background */}
      <button
        onClick={togglePlayPause}
        className="absolute right-8 bottom-24 flex items-center gap-3 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-full"
        aria-label={isPaused ? 'Play video' : 'Pause video'}
      >
        <span className="text-white text-xl font-medium">
          {isPaused ? 'Play' : 'Pause'}
        </span>
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          {isPaused ? (
            <span className="text-black font-bold ml-0.5">▶</span>
          ) : (
            <span className="text-black font-bold">II</span>
          )}
        </div>
      </button>
    </div>
  );
};

export default HeroComponent;
