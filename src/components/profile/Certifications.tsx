import { Button } from "../ui/button";

const Certifications = () => {
  return (
    <div className="px-4 py-6 sm:py-5 md:px-8">
      <div className="pt-4 space-y-3">
        <p className="bg-white  text-sm sm:text-[15px] px-3 py-0.5 uppercase border-[1px] border-gary-900/80 rounded-xl w-fit">
          Experience
        </p>
        <h1 className="  font-semibold text-sm sm:text-lg">
          Certifications That Enhance My Expertise
        </h1>
      </div>
      {/* VIEW CARDS */}
      <div className="space-y-3 py-4">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 lg:items-center justify-between bg-pink-100 p-4 rounded-xl border-[1px] border-gary-500/10">
          <div className="flex flex-col space-y-1">
            <h1 className="text-lg sm:text-2=xl font-semibold">
              Certified Executive Assistant (CEA)
            </h1>
            <div className="flex items-center">
              <p className="text-xs sm:text-sm font-light">Issued Oct 2023</p>.
              <p className="text-xs sm:text-sm font-light">
                The Institute of Executive Assistants
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            className="text-sm sm:text-[15px] bg-gary-900/10 border-[1px] border-pink-300/30 hover:bg-white w-full lg:w-28 py-5"
          >
            View
          </Button>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 lg:items-center justify-between bg-pink-100 p-4 rounded-xl border-[1px] border-gary-500/10">
          <div className="flex flex-col space-y-1">
            <h1 className="text-lg sm:text-2=xl font-semibold">
              Certified Executive Assistant (CEA)
            </h1>
            <div className="flex items-center">
              <p className="text-xs sm:text-sm font-light">Issued Oct 2023</p>.
              <p className="text-xs sm:text-sm font-light">
                The Institute of Executive Assistants
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            className="text-sm sm:text-[15px] bg-gary-900/10 border-[1px] border-pink-300/30 hover:bg-white w-full lg:w-28 py-5"
          >
            View
          </Button>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 lg:items-center justify-between bg-pink-100 p-4 rounded-xl border-[1px] border-gary-500/10">
          <div className="flex flex-col space-y-1">
            <h1 className="text-lg sm:text-2=xl font-semibold">
              Certified Executive Assistant (CEA)
            </h1>
            <div className="flex items-center">
              <p className="text-xs sm:text-sm font-light">Issued Oct 2023</p>.
              <p className="text-xs sm:text-sm font-light">
                The Institute of Executive Assistants
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            className="text-sm sm:text-[15px] bg-gary-900/10 border-[1px] border-pink-300/30 hover:bg-white w-full lg:w-28 py-5"
          >
            View
          </Button>
        </div>
       
      </div>
    </div>
  );
};

export default Certifications;
