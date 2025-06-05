import { useLocation } from "react-router-dom";
import { Home, Search, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { id: 1, label: "Home", icon: Home, href: "/user/home" },
  {
    id: 2,
    label: "Search",
    icon: Search,
    href: "/user/find-assistant-matcher",
  },
  { id: 3, label: "Calendar", icon: Calendar, href: "/user/current-booking" },
  { id: 4, label: "Profile", icon: User, href: "/user/setting" },
];

const MobileNavBar = () => {
  const location = useLocation();
  const activeId = navItems.find((item) => item.href === location.pathname)?.id;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E5E5] flex justify-around items-center h-16 shadow-sm z-50">
      {navItems.map(({ id, label, icon: Icon, href }) => (
        <Link to={href} key={id}>
          <div
            className={`flex flex-col items-center justify-center p-2 rounded-xl transition ${
              activeId === id
                ? "bg-purple-100 text-purple-600"
                : "text-gray-700"
            }`}
          >
            <Icon className="w-6 h-6" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MobileNavBar;
