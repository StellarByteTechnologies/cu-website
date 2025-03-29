'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeroComponentProps {
  videoSrc: string;
  title: string;
  description: string;
  className?: string;
}

// Define type for cleanup functions
type CleanupFunction = (() => void) | undefined;

const HeroComponent: React.FC<HeroComponentProps> = ({
  videoSrc,
  title,
  description,
  className = '',
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Split title into lines for animation
  const titleLines = title.split(' ');

  const attemptPlayVideo = () => {
    if (!videoRef.current) return;

    const playPromise = videoRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPaused(false))
        .catch((err) => {
          console.log('Play attempt failed:', err);
          setIsPaused(true);
        });
    }
  };

  const togglePlayPause = () => {
    if (!videoRef.current) return;

    if (isPaused) {
      attemptPlayVideo();
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Sync state with video events
    const handlePlay = () => setIsPaused(false);
    const handlePause = () => setIsPaused(true);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    // Try multiple strategies to autoplay with explicit typing
    const playStrategies: Array<() => CleanupFunction> = [
      // Strategy 1: Immediate play attempt
      () => {
        attemptPlayVideo();
        return undefined;
      },

      // Strategy 2: Add loadeddata event listener
      () => {
        const loadHandler = () => attemptPlayVideo();
        video.addEventListener('loadeddata', loadHandler, { once: true });
        return () => video.removeEventListener('loadeddata', loadHandler);
      },

      // Strategy 3: Detect any user interaction
      () => {
        const interactionHandler = () => attemptPlayVideo();
        const events = ['touchstart', 'touchend', 'click', 'scroll', 'keydown'];

        events.forEach((event) => {
          document.addEventListener(event, interactionHandler, { once: true });
        });

        return () => {
          events.forEach((event) => {
            document.removeEventListener(event, interactionHandler);
          });
        };
      },

      // Strategy 4: Attempt play after delays
      () => {
        const timers = [
          setTimeout(attemptPlayVideo, 100),
          setTimeout(attemptPlayVideo, 500),
          setTimeout(attemptPlayVideo, 1000),
        ];

        return () => timers.forEach((timer) => clearTimeout(timer));
      },

      // Strategy 5: Use IntersectionObserver
      () => {
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              attemptPlayVideo();
            }
          },
          { threshold: 0.1 }
        );

        if (video) {
          observer.observe(video);
        }

        return () => observer.disconnect();
      },
    ];

    // Execute all strategies with proper typing
    const cleanupFunctions: CleanupFunction[] = playStrategies.map((strategy) =>
      strategy()
    );

    // Cleanup function with proper type checking
    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);

      cleanupFunctions.forEach((cleanup) => {
        if (cleanup) cleanup();
      });
    };
  }, []);

  return (
    <div className={`w-full relative overflow-hidden ${className}`}>
      {/* Subtle gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent z-10"></div>

      {/* Video element */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover scale-[1.02]" // Slight scale to avoid white edges during motion
        src={videoSrc}
        autoPlay
        playsInline
        muted
        loop
        preload="auto"
        aria-hidden="true"
      />

      {/* Text Content with staggered animation */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 md:px-16 lg:px-20 max-w-[1327px] mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="max-w-[700px]"
        >
          <div className="overflow-hidden">
            {titleLines.map((line, index) => (
              <motion.span
                key={index}
                className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight text-white inline-block mr-4"
                variants={{
                  hidden: { y: 100, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.7,
                      ease: [0.33, 1, 0.68, 1], // cubic-bezier curve for smooth motion
                    },
                  },
                }}
              >
                {line}
              </motion.span>
            ))}
          </div>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl font-normal mt-4 text-white"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.4,
                  duration: 0.6,
                },
              },
            }}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>

      {/* Play/Pause button with animation */}
      <motion.button
        onClick={togglePlayPause}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute right-4 md:right-8 bottom-24 flex items-center gap-2 md:gap-3 bg-black/30 backdrop-blur-sm px-2 md:px-3 py-1 md:py-2 rounded-full z-20"
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
      </motion.button>
    </div>
  );
};

export default HeroComponent;
