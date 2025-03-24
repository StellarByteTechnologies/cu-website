'use client';
import React, { useEffect, useRef, useState } from 'react';

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  controls?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
}

const LazyVideo: React.FC<LazyVideoProps> = ({
  src,
  poster,
  className = '',
  controls = true,
  autoPlay = false,
  muted = true,
  loop = false,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      controls={controls}
      autoPlay={autoPlay && isVisible}
      muted={muted}
      loop={loop}
      playsInline
      preload="none"
    >
      {isVisible && <source src={src} type="video/mp4" />}
      Your browser does not support video playback.
    </video>
  );
};

export default LazyVideo;
