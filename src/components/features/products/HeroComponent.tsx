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
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePause = () => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPaused(!isPaused);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePause = () => setIsPaused(true);
    const handlePlay = () => setIsPaused(false);

    video.addEventListener('pause', handlePause);
    video.addEventListener('play', handlePlay);

    return () => {
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('play', handlePlay);
    };
  }, []);

  return (
    <div className={`w-full relative overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-20 max-w-[1327px] mx-auto">
        <div className="max-w-[700px]">
          <h1 className="text-6xl md:text-7xl font-semibold leading-tight text-white">
            {title}
          </h1>
          <p className="text-xl md:text-2xl font-normal mt-4 text-white">
            {description}
          </p>

          {/* Mobile play button */}
          <button
            onClick={togglePause}
            className="absolute right-4 bottom-16 flex md:hidden items-center gap-3"
            aria-label={isPaused ? 'Play video' : 'Pause video'}
          >
            <span className="text-white text-xl font-medium">
              {isPaused ? 'Play' : 'Pause'}
            </span>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              {isPaused ? (
                <span className="text-black font-bold ml-1">▶</span>
              ) : (
                <span className="text-black font-bold">II</span>
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Desktop pause button */}
      <button
        onClick={togglePause}
        className="absolute right-8 bottom-32 hidden md:flex items-center gap-3"
        aria-label={isPaused ? 'Play video' : 'Pause video'}
      >
        <span className="text-white text-xl font-medium">
          {isPaused ? 'Play' : 'Pause'}
        </span>
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          {isPaused ? (
            <span className="text-black font-bold ml-1">▶</span>
          ) : (
            <span className="text-black font-bold">II</span>
          )}
        </div>
      </button>
    </div>
  );
};

export default HeroComponent;
