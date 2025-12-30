import { Link } from "react-router-dom";
import TitleAndSubTitle from "../shared/TitleAndSubTitle";
import Wrapper from "../shared/Wrapper";
import { Button } from "../ui/button";
import square from "@/assets/icon/square.svg";
import target from "@/assets/icon/target.svg";
import king from "@/assets/icon/king.svg";
import kingbg from "@/assets/icon/kingbg.png";

const UnlockPotential = () => {
    return (
        <Wrapper>
            <div className="py-[30px] md:py-[70px]">
                <TitleAndSubTitle title="Unlock Your Potential: The Adminity Career Pathway" subTitle="We are committed to the growth of our assistants. Our tiered training and certification program provides a clear career ladder, ensuring our clients partner with motivated, skilled, and professional talent at every level." />
                <Link to="/signup">
                    <Button className="sm:min-w-[168px] h-[50px] px-4 py-2 text-[16px] bg-ButtonBGSecondary cursor-pointer rounded-[8px] mt-4 md:mt-8">Join out network</Button>
                </Link>
                <div className="flex flex-col md:flex-row gap-5 md:mt-[80px]">
                    <div className="flex-1 p-5 border-[1px] border-gray-900/10 rounded-md shadow-sm space-y-2">
                        <div className="bg-[#E6DDF8] h-[48px] w-[48px] flex items-center justify-center rounded-[30%]">
                            <img src={square} alt="PA Foundations" className="w-6 h-6 md:w-8 md:h-8" />
                        </div>
                        <h1 className="text-lg md:text-[28px] font-medium">
                            Personal Assistant (PA) Foundations
                        </h1>
                        <p className="text-sm md:text-[16px] text-[#4D4D4D]">
                            For those starting their journey, Adminity offers practical training in
                            organization, communication, and digital tools-building the professional
                            foundation every outstanding PA needs.
                        </p>
                    </div>

                    <div className="flex-1 p-5 border-[1px] border-gray-900/10 rounded-md shadow-sm space-y-2">
                        <div className="bg-[#FFEDEB] h-[48px] w-[48px] flex items-center justify-center rounded-[30%]">
                            <img src={target} alt="EA Mastery" className="w-6 h-6 md:w-8 md:h-8" />
                        </div>
                        <h1 className="text-lg md:text-[28px] font-medium">
                            Executive Assistant (EA) Mastery
                        </h1>
                        <p className="text-sm md:text-[16px] text-[#4D4D4D]">
                            Take your career to the next level with advanced training in stakeholder
                            management, project coordination, and strategic thinking. Our certification
                            ensures you stand out as a trusted partner to senior leaders.
                        </p>
                    </div>

                    <div className="flex-1 p-5 border-[1px] border-gray-900/10 rounded-md shadow-sm space-y-2">
                        <div className="bg-[#FFF8D4] h-[48px] w-[48px] flex items-center justify-center rounded-[30%]">
                            <img src={king} className="w-6 h-6 md:w-8 md:h-8 " />
                        </div>
                        <h1 className="text-lg md:text-[28px] font-medium">
                            Chief of Staff (CoS) Pathway
                        </h1>
                        <p className="text-sm md:text-[16px] text-[#4D4D4D]">
                            For experienced EAs ready to step into strategic leadership, Adminity
                            provides exclusive programs in executive decision-support,
                            cross-functional management, and organizational strategy-preparing you to
                            thrive as a Chief of Staff.
                        </p>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default UnlockPotential