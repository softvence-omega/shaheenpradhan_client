import Search from "@/assets/icon/Search";
import SuperPower from "@/assets/icon/SuperPower";
import User from "@/assets/icon/User";

const HeaderSecondPart = () => {
  return (
    <section
      style={{
        background:
          "radial-gradient(44.79% 103.81% at 50% 86.28%, #8559CA 0%, #241041 100%), var(--BG-Button-BG-Secondary, #33274D)",
      }}
      className=" py-16 text-white text-center font-DMsans"
    >
      <div className="max-w-xl mx-auto mb-12 px-4">
        <h2 className="text-2xl sm:text-[28px] md:text-[48px] leading-[120%] font-medium font-sans">
          Three Easy Steps to Get <br /> Your Assistant
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4 place-items-center">
        {/* Step 1 */}
        <div className="flex flex-col items-center justify-center text-center h-full space-y-4">
          <Search className="w-8 h-8 bg-yellow-50/80 p-1 rounded-md" />
          <p className="text-sm sm:text-[16px] md:text-xl font-medium max-w-[200px]">
            Browse Assistant With The Power of AI Filters
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center justify-center text-center h-full space-y-4">
          <User className="w-8 h-8 bg-[#FFF8D4] p-1 rounded-md" />
          <p className="text-sm sm:text-[16px] font-medium max-w-[200px]">
            Meet Your Assistant Online Before Booking
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center justify-center text-center h-full space-y-4">
          <SuperPower className="w-8 h-8 bg-[#FFEDEB] p-1 rounded-md" />
          <p className="text-sm sm:text-[16px] font-medium max-w-[200px]">
            Book, Pay And Superpower Your Day
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeaderSecondPart;
