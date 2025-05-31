import { LogOut, Settings, User } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";

const UserModal = () => {
  return (
    <div className="min-h-screen bg-gray-700 p-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" className="text-white hover:bg-gray-600">
            <User className="w-4 h-4 mr-2" />
            Profile
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56 p-0" align="start">
          <div className="p-4">
            <div className="font-semibold text-lg mb-4">John Doe</div>
            <div className="space-y-1">
              <Button
                variant="ghost"
                className="w-full justify-start h-auto p-3 font-normal"
              >
                <User className="w-5 h-5 mr-3" />
                My profile
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start h-auto p-3 font-normal"
              >
                <Settings className="w-5 h-5 mr-3" />
                Settings
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start h-auto p-3 font-normal"
              >
                <LogOut className="w-5 h-5 mr-3" />
                Log Out
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default UserModal;
