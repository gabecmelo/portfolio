import { AiOutlineHome, AiFillBuild } from 'react-icons/ai';
import { GoPerson } from 'react-icons/go';
import { BiBriefcase } from 'react-icons/bi';
import { PiSquaresFour } from 'react-icons/pi';
import { HashLink as Link } from 'react-router-hash-link';
import { CgClose } from 'react-icons/cg';
import MenuSocialMedias from './TinyComponents/MenuSocialMedias';

type MenuProps = {
  showMenu: boolean;
  setShowMenu: (setting: boolean) => void;
  local: string;
  setLocal: (setting: string) => void;
};

function Menu({ setShowMenu, showMenu, setLocal, local }: MenuProps) {
  return (
    <>
      <div
        onClick={() => setShowMenu(!showMenu)}
        style={{ pointerEvents: showMenu ? 'auto' : 'none' }}
        className={`bg-transparent w-full h-full top-0 left-0 z-10 fixed ${
          showMenu ? 'fade-in' : 'fade-out'
        }`}
      />
      <div
        className={`flex flex-col fixed right-0 top-0 w-1/5 h-full bg-gray-default text-left
        gap-8 z-20 text-default-gray bg-gray-default overflow-x-hidden pl-20 pt-20
        max-xl:w-7/12 max-lg:w-1/2 max-md:w-full max-lg:items-center transition-all
      ${
        showMenu ? 'slide-in-from-right fade-in' : 'slide-out-from-right hidden'
      }`}
      >
        <h1 className="text-xl">Menu</h1>
        <div className="flex flex-col gap-6 mb-10">
          <Link
            to="#home"
            smooth
            onClick={() => setLocal('home')}
            className={`home-icon ${
              local === 'home' ? 'text-green-primary' : ''
            }`}
          >
            <AiOutlineHome size={20} /> Início
          </Link>
          <Link
            to="#about"
            smooth
            onClick={() => setLocal('about')}
            className={`home-icon ${
              local === 'about' ? 'text-green-primary' : ''
            }`}
          >
            <GoPerson size={20} /> Sobre
          </Link>
          <Link
            to="#resume"
            smooth
            onClick={() => setLocal('resume')}
            className={`home-icon ${
              local === 'resume' ? 'text-green-primary' : ''
            }`}
          >
            <BiBriefcase size={20} /> Currículo
          </Link>
          <Link
            to="#skills"
            smooth
            onClick={() => setLocal('skills')}
            className={`home-icon ${
              local === 'skills' ? 'text-green-primary' : ''
            }`}
          >
            <AiFillBuild size={20} /> Habilidades
          </Link>
          <Link
            to="#projects"
            smooth
            onClick={() => setLocal('projects')}
            className={`home-icon ${
              local === 'projects' ? 'text-green-primary' : ''
            }`}
          >
            <PiSquaresFour size={20} /> Projetos
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h1>Social</h1>
          <MenuSocialMedias />
        </div>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className={`absolute right-5 top-6 ${showMenu ? 'flex' : 'hidden'}`}
        >
          <CgClose size={20} />
        </button>
      </div>
    </>
  );
}

export default Menu;
