import IconsList from "@/components/IconsList";
import path from "path";
import fs from "fs";

export default function Home() {
  const iconsDirectory = path.join(process.cwd(), "public/icons");
  const svgFiles = fs
    .readdirSync(iconsDirectory)
    .filter((file) => file.endsWith(".svg"));

  const svgList = svgFiles.map((fileName) => {
    return {
      svg: fs.readFileSync(path.join(iconsDirectory, fileName), "utf8"),
      name: fileName,
    };
  });

  return (
    <div
      className="w-full flex justify-center overflow-scroll"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <div className="max-w-2xl w-full flex flex-col items-center py-10">
        <div className="text-5xl font-bold tracking-tight">
          {"Open source icons"}
        </div>
        <div className="text-5xl font-bold tracking-tight text-content-tertiary mt-2">
          Updated weekly.
        </div>

        <div className="text-center mt-6">
          Introducing the{" "}
          <a
            href="https://ak-palette.netlify.app/"
            target="_blank"
            className="text-brand-primary-2 hover:opacity-60 transition-all"
          >
            Palette Design System
          </a>{" "}
          Icon Library – a fully open-source, ever-growing collection of icons.
          New, randomly generated icons added weekly to spark creativity and
          keep your projects fresh!
        </div>
        <IconsList svgList={svgList} count={svgList.length} />

        <div className="w-full border-t border-border-secondary py-3 flex justify-center">
          <div className="text-xs">
            Designed & developed by{" "}
            <a
              href="https://x.com/_akshay_kannan_"
              target="_blank"
              className="text-brand-primary-2 hover:opacity-60 transition-all"
            >
              @_akshay_kannan_
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
