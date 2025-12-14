import { Menu, Search, Filter, Moon } from "lucide-react";

const Header = () => {
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
    <div className="bg-white/80 border-b border-slate-200/50 dark:bg-black">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 cursor-pointer dark:text-slate-300 dark:hover:bg-slate-800 transition-colors ">
            <Menu className="w-5 h-5" />
          </button>
          <div className="hidden md:block">
            <h1 className="text-2xl font-black text-slate-800 dark:text-white">
              Dashboard
            </h1>
            <p className="">Welcome Back Ryuk here whats happening today</p>
          </div>
        </div>
        <div className="flex-1 max-w-md mx-8">
          <div className="relative border-2 ">
            <Search className="w-4 h-4 absolute left-3  top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search anything ..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <button>
              <Filter />
            </button>
            <button
              className="border-2 p-1 rounded-full cursor-pointer bg-slate-50"
              onClick={changeTheme}
            >
              <Moon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
