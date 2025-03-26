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
  const [isPaused, setIsPaused] = useState(false); // Default to playing state
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPaused) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log('Play prevented:', error);
          });
        }
      } else {
        videoRef.current.pause();
      }
      setIsPaused(!isPaused);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPaused(false);
    const handlePause = () => setIsPaused(true);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    // Force play on component mount with user interaction simulation
    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('Autoplay prevented:', error);
          setIsPaused(true);
        });
      }
    };

    // Try immediate play
    playVideo();

    // Fallback play attempt after a short delay
    setTimeout(playVideo, 500);

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

      {/* Play/pause button - Moved up by 10px on mobile */}
      <button
        onClick={togglePlayPause}
        className="absolute bottom-32 md:bottom-24 right-4 flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-full"
        aria-label={isPaused ? 'Play video' : 'Pause video'}
      >
        <span className="text-white text-base font-medium">
          {isPaused ? 'Play' : 'Pause'}
        </span>
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
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
