import { useState } from 'react';
import GlobalSettings from '../components/Headers/GlobalSettings';
import ProfileCard from '../components/ProfileCard';
import SettingsButton from '../components/Headers/SettingsButton';
import MenuButton from '../components/Headers/MenuButton';
import Menu from '../components/Headers/Menu';
import SideBar from '../components/SideBar/SideBar';
import MainContent from '../components/MainContent/MainContent';

function Home() {
  const [showSettings, setShowSettings] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [local, setLocal] = useState('home');
  const [mouse, setMouse] = useState('');

  /* const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen w-screen absolute left-0 top-0">
        <h1 className="text-white text-5xl font-inter-light">Carregando...</h1>
      </div>
    );
  }
 */
  return (
    <div className="text-white z-10">
      <ProfileCard />
      <SettingsButton
        setShowSettings={setShowSettings}
        showSettings={showSettings}
      />
      <GlobalSettings
        setShowSettings={setShowSettings}
        showSettings={showSettings}
      />
      <MenuButton setShowMenu={setShowMenu} showMenu={showMenu} />
      <Menu
        local={local}
        setLocal={setLocal}
        setShowMenu={setShowMenu}
        showMenu={showMenu}
      />
      <SideBar
        local={local}
        setLocal={setLocal}
        mouse={mouse}
        setMouse={setMouse}
      />
      <MainContent />
    </div>
  );
}

export default Home;
