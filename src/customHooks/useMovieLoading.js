import { useState, useEffect } from "react";

export function useMovieLoading(initialDelay = 1000) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, initialDelay);

    return () => clearTimeout(timer);
  }, [initialDelay]);

  return loading;
}