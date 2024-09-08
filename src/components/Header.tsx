import Image from "next/image";
import SunIcon from "public/icons/sun.svg";
import MoonIcon from "public/icons/moon.svg";
import TwitterLogo from "public/app/twitter.svg";

type HeaderProps = {
  isDark: boolean;
  toggleTheme: () => void;
};

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  return (
    <div className="w-full flex justify-center border-b border-border-secondary">
      <div className="max-w-6xl w-full p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/brand/logo.svg" alt="logo" height={30} width={30} />
          <div className="text-lg font-semibold tracking-tight text-content-secondary">
            Palette Design
          </div>
          <div className="flex text-xs border border-border-primary p-1 rounded-md px-2 bg-border-secondary/40">
            v2.0
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://twitter.com/intent/tweet?text=Check%20out%20Palette icon%20by%20%40_akshay_kannan_%20https%3A%2F%2Fakshaykannan.tech%20"
            target="_blank"
            className="flex items-center gap-2 cursor-pointer border border-border-primary hover:border-content-tertiary/70 py-1 px-2 rounded-lg transition-all hover:-translate-y-0.5 active:translate-y-0 hover:shadow-md"
          >
            <div className="text-sm">Share on</div>
            <TwitterLogo className="w-3 h-3" />
          </a>
          <div className="border-[0.5px] h-5 border-border-primary"></div>
          <div
            className="cursor-pointer hover:rotate-12 transition-all"
            onClick={toggleTheme}
          >
            {isDark ? (
              <SunIcon className="w-6 h-6" />
            ) : (
              <MoonIcon className="w-6 h-6" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
