import Sidebar from "./components/layout/sidebar";
import Header from "./components/layout/header";
import "./App.css";
import { useState } from "react";

const App: React.FC = () => {
  const [sbcollapsed, setSbcollapsed] = useState<boolean>(false);

  if (localStorage.theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  console.log(sbcollapsed);

  return (
    <div className="min-h-screen flex">
      <div className="flex h-screen">
        <Sidebar sbc={sbcollapsed} toggle={setSbcollapsed}/>
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header sbc={sbcollapsed} toggle={setSbcollapsed} />
        <div className="flex-1 bg-amber-50 dark:bg-black "></div>
      </div>
    </div>
  );
};

export default App;
