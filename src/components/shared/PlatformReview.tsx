import { Button } from "../ui/button";

const PlatformReview = () => {
  return (
    <div className="p-3 border-[1px] border-ButtonBGPrimary rounded-xl space-y-1.5 font-DMsans">
      <h1 className="text-[15px] sm:text-lg font-semibold">Enjoying Our Platform?</h1>
      <p className="text-xs sm:text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      <Button className="py-3 px-4 bg-BorderHighlight hover:bg-BorderHighlight w-full text-sm  sm:text-[15px]">
        Review
      </Button>
    </div>
  );
};

export default PlatformReview;
