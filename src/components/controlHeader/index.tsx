import {
  VscChromeMaximize,
  VscChromeMinimize,
  VscChromeClose,
} from "react-icons/vsc";

import { getCurrentWindow } from "@tauri-apps/api/window";

const ControlIcon = ({ type }: { type: "maximize" | "minimize" | "close" }) => {
  const icons = {
    minimize: <VscChromeMinimize className="text-white" />,
    maximize: <VscChromeMaximize />,
    close: <VscChromeClose />,
  };

  return (
    <div
      className="h-full px-2 flex items-center hover:bg-indigo-950"
      onClick={async () => {
        await getCurrentWindow()[type]();
      }}
    >
      {icons[type]}
    </div>
  );
};

export const ControlHeader = () => {
  return (
    <div className="flex w-full h-8 bg-[#0D0017] fixed text-white items-center">
      <div className="grow flex" />
      <div className="flex h-full">
        <ControlIcon type="minimize" />
        <ControlIcon type="maximize" />
        <ControlIcon type="close" />
      </div>
    </div>
  );
};
