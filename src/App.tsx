import Sidebar from "./components/layout/sidebar.js";
import Header from "./components/layout/header.js";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="min-h-screen flex">
        <div className="flex h-screen">
          <Sidebar />
        </div>
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <div className="flex-1 bg-amber-50 dark:bg-black">

          </div>
        </div>
      </div>
    </>
  );
};

export default App;
