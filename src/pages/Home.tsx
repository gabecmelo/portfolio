import { useState } from "react"
import GlobalSettings from "../components/GlobalSettings/GlobalSettings"
import ProfileCard from "../components/ProfileCard"
import SettingsButton from "../components/Trades/SettingsButton"

function Home() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="text-white z-10">
    <ProfileCard />
    <SettingsButton setShowSettings={setShowSettings} showSettings={showSettings} />
    <GlobalSettings setShowSettings={setShowSettings} showSettings={showSettings} />
    </div>
  )
}

export default Home