import { useMedia } from "react-use";
import background_desktop from "/images/bg-header-desktop.svg";
import background_mobile from "/images/bg-header-mobile.svg";

export default function Header() {
  const desktopScreen = useMedia("(min-width: 640px)");

  return (
    <header className="w-full bg-DesaturatedDarkCyan">
      <img
        src={desktopScreen ? background_desktop : background_mobile}
        alt="background"
        className="w-full"
      />
    </header>
  );
}
