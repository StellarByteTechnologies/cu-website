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
  const [isPaused, setIsPaused] = useState(true); // Start with paused state for Safari
  const videoRef = useRef<HTMLVideoElement>(null);

  // Function to handle play/pause
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPaused) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsPaused(false))
            .catch((error) => {
              console.log('Autoplay prevented:', error);
              setIsPaused(true);
            });
        }
      } else {
        videoRef.current.pause();
        setIsPaused(true);
      }
    }
  };

  // Detect playback state changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPaused(false);
    const handlePause = () => setIsPaused(true);
    const handleEnded = () => setIsPaused(true);

    video.addEventListener('play', handlePlay);
    video.addEventListener('playing', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    //  play on load
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.log('Initial autoplay prevented:', error);
        setIsPaused(true);
      });
    }

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('playing', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div className={`w-full relative overflow-hidden ${className}`}>
      {/* Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        muted
        loop
        playsInline
        poster="/images/video-poster.jpg" // Add a poster image
        aria-hidden="true"
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-16 lg:px-20 max-w-[1327px] mx-auto">
        {/* Title and description */}
        <div className="max-w-[700px]">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight text-white">
            {title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-normal mt-4 text-white">
            {description}
          </p>
        </div>
      </div>

      {isPaused && (
        <button
          onClick={togglePlayPause}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-black/50 flex items-center justify-center md:hidden"
          aria-label="Play video"
        >
          <span className="text-white text-4xl">▶</span>
        </button>
      )}

      {/* Control button at bottom */}
      <button
        onClick={togglePlayPause}
        className="absolute bottom-8 right-4 flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-full"
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
