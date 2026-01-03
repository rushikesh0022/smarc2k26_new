
import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  label: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration = 2000, suffix = "", label }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = 0;
    const increment = end / (duration / 16); // 60fps roughly

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, hasAnimated]);

  return (
    <div ref={elementRef} className="flex flex-col items-center p-6 bg-navy-800/50 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 group">
      <div className="text-4xl md:text-5xl font-extrabold font-display text-primary group-hover:scale-110 transition-transform duration-300">
        {count}{suffix}
      </div>
      <div className="text-xs md:text-sm font-semibold tracking-widest text-gray-400 uppercase mt-2">
        {label}
      </div>
    </div>
  );
};

export default Counter;
