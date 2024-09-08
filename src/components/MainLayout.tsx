"use client";

import { useState } from "react";
import Header from "./Header";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isDark, setDark] = useState(false);
  return (
    <div
      className={`${
        isDark ? "theme-dark" : "theme-light"
      } bg-container-primary text-content-primary h-screen w-full overflow-hidden`}
    >
      <Header
        isDark={isDark}
        toggleTheme={() => setDark((prevVal) => !prevVal)}
      />
      {children}
    </div>
  );
};

export default MainLayout;
