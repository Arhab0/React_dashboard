import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";

import "./App.css";
import Navbar from "./components/Navbar.jsx";
import ThemeSetting from "./components/ThemeSetting.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Ecommerce from "./pages/Ecommerce.jsx";
import Orders from "./pages/Orders.jsx";
import Employees from "./pages/Employees.jsx";
import Customers from "./pages/Customers.jsx";
import Calendar from "./pages/Calendar.jsx";
import Line from "./pages/Charts/Line.jsx";
import Area from "./pages/Charts/Area.jsx";
import Bar from "./pages/Charts/Bar.jsx";
import Pie from "./pages/Charts/Pie.jsx";
import Financial from "./pages/Charts/Financial.jsx";
import ColorMapping from "./pages/Charts/ColorMapping.jsx";
import Pyramid from "./pages/Charts/Pyramid.jsx";
import Stacked from "./pages/Charts/Stacked.jsx";

import { useStateContext } from "./contexts/contextProvider.jsx";

import Tooltip from "@mui/material/Tooltip";

function App() {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  return (
    <>
      <div className={currentMode === "Dark" ? "dark" : ""}>
        <BrowserRouter>
          <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4 z-[1000px]">
              <Tooltip>
                <div>
                  <button
                    type="button"
                    onClick={() => setThemeSettings(true)}
                    style={{ background: currentColor }}
                    className="text-3xl text-white hover:bg-light-gray rounded-full hover:drop-shadow-xl p-3"
                  >
                    <FiSettings />
                  </button>
                </div>
              </Tooltip>
            </div>
            {
              // activeMenu ?
              // (
              //   <div className='fixed w-72 sidebar dark:bg-secondary-dark-bg bg-white'>
              //     <Sidebar/>
              //   </div>
              // )
              // :
              // (
              //   <div className='w-0 dark:bg-secondary-dark-bg'>
              //    <Sidebar/>
              //   </div>
              // )
              activeMenu && (
                <divs className="fixed w-72 sidebar dark:bg-secondary-dark-bg bg-white">
                  <Sidebar />
                </divs>
              )
            }
            <div
              className={`dark:bg-main-dark-bg bg-min-bg min-h-screen w-full ${
                activeMenu ? "md:ml-72" : ""
              }`}
            >
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                <Navbar />
              </div>
              <div>
                {themeSettings && <ThemeSetting />}

                <Routes>
                  <Route path="/" element={<Ecommerce />} />
                  <Route path="/Ecommerce" element={<Ecommerce />} />

                  <Route path="/orders" element={<Orders />} />
                  <Route path="/employees" element={<Employees />} />
                  <Route path="/customers" element={<Customers />} />

                  <Route path="/calendar" element={<Calendar />} />

                  <Route path="/line" element={<Line />} />
                  <Route path="/area" element={<Area />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/financial" element={<Financial />} />
                  <Route path="/color-mapping" element={<ColorMapping />} />
                  <Route path="/pyramid" element={<Pyramid />} />
                  <Route path="/stacked" element={<Stacked />} />
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
