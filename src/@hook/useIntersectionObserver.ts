import { useEffect, useState, useRef } from "react";

const DEFAULT_OPTIONS = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

export function useIntersectionObserver({
  observeInfinite = false,
  options = {},
}: {
  observeInfinite?: boolean;
  options?: {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number;
  };
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting && !observeInfinite)
          observer.unobserve(entry.target);
      },
      { ...DEFAULT_OPTIONS, ...options }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return { isVisible, ref };
}
