import { Boxes, Expand, Globe, Menu, Moon, Settings } from "lucide-react";

type HeaderProps = {
  sbc: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<HeaderProps> = ({ sbc, toggle }) => {
  
  
  function changeTheme() {
    const isDark = document.documentElement.classList.contains("dark");

    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  }

  return (
    <div className="bg-[#f4f7f6] border-b p-3 flex items-center border-slate-200/50 dark:bg-black">
      <div className="flex items-center w-full gap-5 justify-between md:justify-center bg-[#f4f7f6] dark:bg-black">
        <div className="flex items-center space-x-1">
          <button onClick={()=>{toggle(!sbc)}} className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 cursor-pointer dark:text-slate-300 dark:hover:bg-slate-800 transition-colors ">
            <Menu className="w-7 h-7" />
          </button>
          <h1 className="text-3xl dark:text-white">Luno</h1>
        </div>
        <div className="flex-1 hidden md:block">
          <input
            type="text"
            placeholder="Search anything ..."
            className="w-full px-4 py-2.5 bg-white border-slate-200 rounded text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
        <div className="flex items-center justify-end gap-2">
          <button className="border-2 p-1 cursor-pointer dark:text-white block max-lg:hidden">
            Notification
          </button>
          <button className="border-2 p-1 cursor-pointer dark:text-white hidden lg:inline">
            <Expand />
          </button>
          <button className="border-2 p-1 cursor-pointer dark:text-white">
            <Globe />
          </button>
          <button className="border-2 p-1 cursor-pointer dark:text-white">
            <Boxes />
          </button>
          <button
            className="border-2 p-1 cursor-pointer bg-slate-50 dark:border-blue-600 dark:text-white dark:bg-black"
            onClick={changeTheme}
          >
            <Moon />
          </button>
          <button
            className="border-2 p-1 cursor-pointer bg-slate-50 dark:border-blue-600 dark:text-white dark:bg-black"
            onClick={changeTheme}
          >
            <Moon />
          </button>
          <button className="border-2 p-1 cursor-pointer dark:text-white">
            <Settings />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
