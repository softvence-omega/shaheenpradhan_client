import * as React from "react";
import { Progress } from "@/components/ui/progress";
interface ProgressDemoProps {
  progressLevel: number;
  className?: string;
}
const ProgressDemo = ({ progressLevel, className }: ProgressDemoProps) => {
  const [progress, setProgress] = React.useState<number>(progressLevel);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, [progressLevel]);

  return <Progress value={progress} className={className} />;
};

export default ProgressDemo;
