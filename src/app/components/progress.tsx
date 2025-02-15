import { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(prevProgress => prevProgress + 10); // Use functional update
      } else {
        clearInterval(interval); // Stop when progress reaches 100%
      }
    }, 1000);

        return () => clearInterval(interval); // Clear interval on unmount

  }, [progress]); // Add progress as a dependency to restart interval if progress was manually changed

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div
        className="bg-blue-600 h-2.5 rounded-full transition-width duration-500 ease-in-out" 
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;