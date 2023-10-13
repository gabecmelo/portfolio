import { useState } from "react"
import GlobalSettings from "../components/Headers/GlobalSettings"
import ProfileCard from "../components/ProfileCard"
import SettingsButton from "../components/Headers/SettingsButton"
import MenuButton from "../components/Headers/MenuButton";
import Menu from "../components/Headers/Menu";

function Home() {
  const [showSettings, setShowSettings] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="text-white z-10">
    <ProfileCard />
    <SettingsButton setShowSettings={setShowSettings} showSettings={showSettings} />
    <GlobalSettings setShowSettings={setShowSettings} showSettings={showSettings} />
    <MenuButton setShowMenu={setShowMenu} showMenu={showMenu} />
    <Menu setShowMenu={setShowMenu} showMenu={showMenu}/>
    </div>
  )
}

export default Home