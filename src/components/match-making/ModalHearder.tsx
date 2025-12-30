import img from "@/assets/images/Robot.png";
import search from "@/assets/icons/search.svg";
const ModalHeader = () => {
    return (
        <div className="flex items-start justify-between">
            <img src={search} />
            <div className="flex-1 mx-2">
                <h2 className="text-xl md:text-2xl font-bold">AI Matchmaker</h2>
                <p className="text-gray-700 text-sm md:text-base my-2">
                    Hi, I'm Adminity Anna – Let's find your perfect human executive
                    assistant with my AI powers!
                </p>
            </div>
            <img src={img} />
        </div>
    );
};

export default ModalHeader;