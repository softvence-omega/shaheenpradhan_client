import "@/index.css";

import { Button } from "./components/ui/button";

function App() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div>
      <Button variant="default">Click Me</Button>
    </div>
  );
}

export default App;
