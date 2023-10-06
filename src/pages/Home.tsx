import GlobalSettings from "../components/GlobalSettings/GlobalSettings"
import ProfileCard from "../components/ProfileCard"
import Settings from "../components/Trades/Settings"

function Home() {

  return (
    <div className="text-white">
    <ProfileCard />
    <Settings />
    <GlobalSettings />
    </div>
  )
}

export default Home