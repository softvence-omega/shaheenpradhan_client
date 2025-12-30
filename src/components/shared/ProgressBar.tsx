import * as React from "react";
import { Progress } from "@/components/ui/progress";

interface ProgressDemoProps {
  progressLevel: number; // pass in 0–100
  className?: string;
}

const ProgressDemo = ({ progressLevel, className }: ProgressDemoProps) => {
  const [progress, setProgress] = React.useState<number>(0);

  React.useEffect(() => {
    const animation = setTimeout(() => {
      setProgress(progressLevel);
    }, 200); // slight delay for smoother mounting

    return () => clearTimeout(animation);
  }, [progressLevel]);

  return (
    <Progress
      value={progress}
      className={`transition-all duration-700 ease-in-out ${className}`}
    />
  );
};

export default ProgressDemo;
