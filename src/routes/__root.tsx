import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useEffect } from "react";

const RootLayout = () => {

    useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
};

export const Route = createRootRoute({
  component: RootLayout,
});
