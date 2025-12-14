import { Zap } from "lucide-react";
import ryuk from "../../assets/Ryuk.jpg";

const Sidebar = () => {
  return (
    <div className="bg-slate-100 border-r flex flex-col relative z-10 border-slate-200 dark:bg-black">
      <div className="p-6 border-b border-slate-200/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg bg-linear-to-r from-blue-600  to-purple-600" >
            <Zap className="w-6 h-6 text-white"/>
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800 dark:text-white/80">Neura</h1>
            <p className="text-xs text-slate-500 dark:text-gray-300">Admin Panel</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto"></nav>

      <div className="p-4 border-t border-slate-200/50 ">
        <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50">
          <img
            src={ryuk}
            alt=""
            className="w-10 h-10 rounded-full ring-2 ring-blue-200 "
          />
          <div className="flex-1 min-w-0">
            <div className="flex-1 min-w-0"></div>
            <p className="text-sm font-medium text-slate-800">Ryuk</p>
            <p className="text-xs text-slate-500">Administrator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
