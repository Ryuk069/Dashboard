import { useNavigate, useRouterState } from "@tanstack/react-router";
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
import { useEffect, useState } from "react";

type SidebarProps = {
  sbc: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const menuItems = [
  {
    id: "Dashboard",
    icon: House,
    label: "My Dashboard",
    path: "/",
  },
  {
    id: "Application",
    icon: MessageSquareDot,
    label: "Applications",
    showMenu: false,
    submenu: [
      { id: "todo", label: "ToDo", path: "/application/todo" },
      { id: "weather", label: "Weather App" },
      { id: "calender", label: "Calender" },
      { id: "chat", label: "Chat app" },
      { id: "Blog", label: "Blogs" },
      { id: "Social", label: "Social App" },
      { id: "File-Manager", label: "File Manager" },
      { id: "Contact", label: "Contacts" },
    ],
  },
  {
    id: "Account",
    icon: IdCard,
    label: "Account",
    showMenu: false,
    submenu: [
      { id: "settings", label: "Settings" },
      { id: "Invoice", label: "Invoice List" },
      { id: "create-invoice", label: "Settings" },
      { id: "Billing", label: "Billings" },
    ],
  },
  {
    id: "domain",
    icon: GlobeLock,
    label: "Domains",
    path: "/domain",
  },
  {
    id: "Databases",
    icon: Database,
    label: "Databases",
    path: "/databases",
  },
  {
    id: "Metrics",
    icon: ChartSpline,
    label: "Metric",
    path: "/metric",
  },
  {
    id: "Security",
    icon: DoorClosedLocked,
    label: "Security",
    path: "/security",
  },
];

const Sidebar: React.FC<SidebarProps> = ({ sbc }) => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState<string[]>(["Dashboard"]);
  const [activeSubMenu, setActiveSubMenu] = useState<string[]>([]);
  const { location } = useRouterState();

  const pathname = location.pathname;

  useEffect(() => {
    menuItems.forEach((item) => {
      if (item.path === pathname) {
        setActiveMenu([item.id]);
      }
    });
  }, [pathname]);

  function handleMenu(itemID: any) {
    if (activeMenu.includes(itemID) && !activeSubMenu.includes(itemID)) {
      // alert("noob")
      return;
    } else {
      const parentItem = menuItems.find((item) => item.id === itemID);
      console.log(parentItem);
      
      if (parentItem?.submenu) {
        if (activeSubMenu.includes(itemID)) {
          setActiveSubMenu((prev) => prev.filter((item) => item !== itemID));
          setActiveMenu((prev) => prev.filter((item) => item !== itemID));
        } else {
          setActiveSubMenu((prev) => [...prev, itemID]);
          setActiveMenu((prev) => [...prev, itemID]);
        }
      } else {
        setActiveMenu([itemID]);
        navigate({ to: `${parentItem?.path}` });
        setActiveSubMenu([]);
      }
    }
  }

  return (
    <div
      className={`${
        sbc ? "w-20" : "w-60"
      } flex flex-col relative z-10 border-slate-200 transition-all duration-300 ease-in-out`}
    >
      <div className="p-6 border-b border-slate-200/50">
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

      <nav className="flex-1 p-4 overflow-y-clip">
        {menuItems.map((item) => {
          return (
            <div
              key={item.id}
              className={`w-full relative border-b-2 dark:border-slate-400`}
            >
              <button
                className={`${
                  activeMenu.includes(item.id)
                    ? "text-[#0ad793]"
                    : "dark:text-white hover:text-[#0ad793]"
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
                <div
                  className={`${
                    sbc ? "hidden" : ""
                  } flex flex-col justify-around pb-3`}
                >
                  {item?.submenu?.map((submenuitem) => {
                    return (
                      <div key={submenuitem.id} className="flex pl-5 gap-5 relative ">
                        <div className="border border-[#0ad793]"></div>
                        <div className=" flex-1 cursor-pointer mb-2 hover:text-[#0ad793]" onClick={() =>handleMenu(submenuitem.id)}>{submenuitem.label}</div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="p-1 border-t border-slate-200/50">
        <div className="flex items-center justify-center p-2 rounded-2xl">
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
