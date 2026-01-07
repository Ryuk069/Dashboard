import { createFileRoute, Outlet } from "@tanstack/react-router";
import Header from "../../components/layout/header";
import Sidebar from "../../components/layout/sidebar";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,

});

function RouteComponent() {
  const [sbcollapsed, setSbcollapsed] = useState(false);

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <>
      <div
        className={`${
          sbcollapsed ? "lg:gap-3" : ""
        } min-h-screen flex dark:bg-gray-800`}
      >
        <div
          className={`${
            sbcollapsed
              ? "overflow-y-hidden"
              : "overflow-y-scroll scrollbar-thin scroll-container"
          } bg-[#f4f7f6] dark:bg-black flex h-screen dark:text-white`}
        >
          <Sidebar sbc={sbcollapsed} toggle={setSbcollapsed} />
        </div>

        <div className="flex-1 flex flex-col overflow-hidden gap-4 lg:overflow-y-scroll scrollbar-thin scroll-container">
          <Header sbc={sbcollapsed} toggle={setSbcollapsed} />
          <main className="flex-1 bg-[#f4f7f6] dark:bg-black dark:text-white overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
