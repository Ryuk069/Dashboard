import {
  Zap,
  House,
  MessageSquareDot,
  IdCard,
  GlobeLock,
  Database,
  ChartSpline,
  DoorClosedLocked,
  ChevronRight,
  CalendarCheck2,
  Files,
  MessageSquareText,
  Power,
} from "lucide-react";
import { useState } from "react";

type SidebarProps = {
  sbc: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
};


const menuItems = [
  {
    id: "Dashboard",
    icon: House,
    label: "My Dashboard",
  },
  {
    id: "Application",
    icon: MessageSquareDot,
    label: "Applications",
    showMenu: false,
    submenu: [
      { id: "todo", label: "ToDo" },
      { id: "t", label: "ToDo" },
      { id: "to", label: "ToDo" },
      { id: "tod", label: "ToDo" },
      { id: "too", label: "ToDo" },
    ],
  },
  {
    id: "Account",
    icon: IdCard,
    label: "Account",
    showMenu: false,
    submenu: [{ id: "setting", label: "Settings" }],
  },
  {
    id: "Domain",
    icon: GlobeLock,
    label: "Domains",
  },
  {
    id: "Databases",
    icon: Database,
    label: "Databases",
  },
  {
    id: "Metrics",
    icon: ChartSpline,
    label: "Metric",
  },
  {
    id: "Security",
    icon: DoorClosedLocked,
    label: "Security",
  },
];

const Sidebar: React.FC<SidebarProps> = ({ sbc }) => {

  const [activeMenu,setActiveMenu] = useState<string[]>(["Dashboard"])
  const [activeSubMenu,setActiveSubMenu] = useState<string[]>([])

  console.log(activeMenu);
  console.log(activeSubMenu);
  
  function handleMenu(itemID: any) {
    if (activeMenu.includes(itemID) && !activeSubMenu.includes(itemID)) {
      // alert("noob")
      return;
    } else {
      const parentItem = menuItems.find((item) => item.id === itemID);
  
      if (parentItem?.submenu) {
        if(activeSubMenu.includes(itemID)){
             setActiveSubMenu(prev => prev.filter(item => item !== itemID));
             setActiveMenu(prev => prev.filter(item => item !== itemID))
        }else{

          setActiveSubMenu(prev => [...prev,itemID])
          setActiveMenu(prev => [...prev, itemID]);
        }
      } else {
        setActiveMenu([itemID]);
        setActiveSubMenu([]);
      }
    }
  }

  return (
    <div
      className={`${
        sbc ? "w-20" : "w-60"
      } bg-slate-100 border-r flex flex-col relative z-10 border-slate-200 dark:bg-black transition-all duration-300 ease-in-out`}
    >
      <div className="p-6 border-b border-slate-200/50 bg-slate-50 dark:bg-black">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg bg-linear-to-r from-blue-600  to-purple-600">
            <Zap className="w-6 h-6 text-white" />
          </div>
          {!sbc && (
            <div className="flex-1">
              <h1 className="text-xl font-bold text-slate-800 dark:text-white/80 text-nowrap">
                Server Admin
              </h1>
              <p className="text-xs text-slate-500 dark:text-gray-300">Admin</p>
            </div>
          )}
        </div>
      </div>

      <nav className="flex-1 p-4 overflow-y-auto overflow-x-hidden bg-slate-50 dark:bg-black">
        {menuItems.map((item) => {
          return (
            <div
              key={item.id}
              className={`w-full relative border-b-2 dark:border-slate-400`}
            >
              <button
                className={`${
                  activeMenu.includes(item.id)
                    ? "text-red-700"
                    : "dark:text-white hover:text-red-700"
                } w-full flex items-center gap-2 p-3 cursor-pointer`}
                onClick={() => handleMenu(item.id)}
              >
                <div>
                  <item.icon className="" />
                </div>
                {!sbc && <div className={`text-nowrap`}>{item.label}</div>}
                {item.submenu && !sbc && (
                  <div
                    className={`${
                      activeSubMenu.includes(item.id) ? "rotate-90" : ""
                    } absolute right-2`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </div>
                )}
              </button>

              {activeSubMenu.includes(item.id) && (
                <div className={`${sbc ? "hidden" : "" } bg-red-300 flex flex-col items-center`}>
                  {item?.submenu?.map((submenuitem) => {
                    return (
                      <div key={submenuitem.id}>
                        <div>{submenuitem.id}</div>
                        <div>{submenuitem.label}</div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="p-1 border-t border-slate-200/50 bg-slate-50 dark:bg-black">
        <div className="flex items-center justify-center p-2 rounded-2xl dark:border-2">
          <ul
            className={`${
              sbc ? "flex-col gap-5" : ""
            } flex flex-1  items-center justify-around overflow-x-hidden dark:text-white dark:border-2 p-2 rounded-lg`}
          >
            <li>
              <CalendarCheck2 />
            </li>
            <li>
              <Files />
            </li>
            <li>
              <MessageSquareText />
            </li>
            <li>
              <Power />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
