import InfoList from "./components/Infos/InfoList";

const shortInfoData = [
  { context: "Yunes", color: "green", icon: "user" },
  { context: "30 C", color: "mauve", icon: "sun" },
  {
    context: "3:32 AM",
    color: "peach",
    icon: "time",
  },
  {
    context: "Nov 14",
    color: "pink",
    icon: "calendar",
  },
];

export default function Header() {
  return (
    <header className="flex flex-col w-full h-full md:items-center justify-center">
      <pre className="font-splineSansBold text-clip text-ctp-blue text-xs md:text-xl xl:text-2xl relative text-center">
        {`
███╗   ███╗ █████╗ ███████╗ █████╗ 
████╗ ████║██╔══██╗██╔════╝██╔══██╗
██╔████╔██║███████║███████╗███████║
██║╚██╔╝██║██╔══██║╚════██║██╔══██║
██║ ╚═╝ ██║██║  ██║███████║██║  ██║
╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
    `}
      </pre>
      <InfoList infos={shortInfoData} />
    </header>
  );
}
