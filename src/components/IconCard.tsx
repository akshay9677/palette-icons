import { useCallback, useEffect, useMemo, useState } from "react";
import download from "downloadjs";
import { toast } from "sonner";

type IconCardProps = {
  svg: { name: string; svg: string };
};

const IconButtons = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <div
      className="text-xs bg-border-primary hover:opacity-70 active:translate-y-1 p-1 rounded-lg w-full flex items-center justify-center h-full transition-all"
      onClick={onClick}
    >
      {label}
    </div>
  );
};

const IconCard: React.FC<IconCardProps> = ({ svg }) => {
  const [iconState, setIconState] = useState<"" | "copied" | "downloaded">("");

  useEffect(() => {
    if (iconState !== "") {
      setTimeout(() => {
        setIconState("");
      }, 3000);
    }
  }, [iconState]);

  const downloadSvg = useCallback(
    ({ svg, name }: { name: string; svg: string }) => {
      setIconState("downloaded");
      download(svg, `${name}`, "image/svg+xml");
    },
    []
  );

  const copySvg = useCallback(({ svg }: { name: string; svg: string }) => {
    setIconState("copied");
    navigator.clipboard.writeText(svg).then(() => {
      toast("Copied Svg !");
    });
  }, []);

  const isActionDone = useMemo(() => {
    return iconState !== "";
  }, [iconState]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-24 h-24 items-center justify-center flex border border-content-tertiary/30 rounded-xl relative group overflow-hidden cursor-pointer">
        {!isActionDone && (
          <div className="group-hover:opacity-100 opacity-0 backdrop-blur-sm absolute w-full h-full flex flex-col items-center justify-center gap-2 p-2 transition-all">
            <IconButtons label="Copy Svg" onClick={() => copySvg(svg)} />
            <IconButtons label="Download" onClick={() => downloadSvg(svg)} />
          </div>
        )}
        <div
          className={`w-6 h-6 transition-transform duration-500 ${
            isActionDone ? "animate-slide-up" : "animate-slide-down"
          }`}
          dangerouslySetInnerHTML={{ __html: svg.svg }}
        />

        {isActionDone && (
          <div
            className={`transition-all pt-2 ${
              isActionDone ? "animate-fade-in" : "opacity-0"
            } overflow-hidden text-xs text-brand-primary-1`}
          >
            {iconState === "copied" ? "Copied !" : "Done !"}
          </div>
        )}
      </div>
      <div className="text-xs w-full flex justify-center pt-2">
        {svg.name.replace(".svg", "")}
      </div>
    </div>
  );
};

export default IconCard;
