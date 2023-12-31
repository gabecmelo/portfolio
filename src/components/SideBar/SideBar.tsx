import { AiOutlineHome, AiFillBuild } from 'react-icons/ai';
import { GoPerson } from 'react-icons/go';
import { BiBriefcase } from 'react-icons/bi';
import { PiSquaresFour } from 'react-icons/pi';
import { HashLink as Link } from 'react-router-hash-link';
import { motion } from 'framer-motion';

type SideBarProps = {
  local: string;
  setLocal: (setting: string) => void;
  mouse: string;
  setMouse: (setting: string) => void;
};

function SideBar({ setLocal, local, mouse, setMouse }: SideBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="z-10 flex bg-black flex-col gap-6 fixed right-18 top-80 rounded-full border default-gray p-4 text-default-gray max-lg:hidden"
    >
      <Link
        to="#home"
        smooth
        onMouseOver={() => setMouse('home')}
        onMouseOut={() => setMouse('')}
        onClick={() => setLocal('home')}
        className={`home-icon ${local === 'home' ? 'text-green-primary' : ''}`}
      >
        <AiOutlineHome size={20} />
      </Link>
      {mouse === 'home' && (
        <span className="absolute right-12 top-3 tooltip">Início</span>
      )}
      <Link
        to="#about"
        smooth
        onMouseOver={() => setMouse('about')}
        onMouseOut={() => setMouse('')}
        onClick={() => setLocal('about')}
        className={`home-icon ${local === 'about' ? 'text-green-primary' : ''}`}
      >
        <GoPerson size={20} />
      </Link>
      {mouse === 'about' && (
        <span className="absolute right-12 top-14 tooltip">Sobre</span>
      )}
      <Link
        to="#resume"
        smooth
        onMouseOver={() => setMouse('resume')}
        onMouseOut={() => setMouse('')}
        onClick={() => setLocal('resume')}
        className={`home-icon ${
          local === 'resume' ? 'text-green-primary' : ''
        }`}
      >
        <BiBriefcase size={20} />
      </Link>
      {mouse === 'resume' && (
        <span className="absolute right-12 top-26 tooltip">Currículo</span>
      )}
      <Link
        to="#skills"
        smooth
        onMouseOver={() => setMouse('skills')}
        onMouseOut={() => setMouse('')}
        onClick={() => setLocal('skills')}
        className={`home-icon ${
          local === 'skills' ? 'text-green-primary' : ''
        }`}
      >
        <AiFillBuild size={20} />
      </Link>
      {mouse === 'skills' && (
        <span className="absolute right-12 top-36 tooltip">Habilidades</span>
      )}
      <Link
        to="#projects"
        smooth
        onMouseOver={() => setMouse('projects')}
        onMouseOut={() => setMouse('')}
        onClick={() => setLocal('projects')}
        className={`home-icon ${
          local === 'projects' ? 'text-green-primary' : ''
        }`}
      >
        <PiSquaresFour size={20} />
      </Link>
      {mouse === 'projects' && (
        <span className="absolute right-12 top-46 tooltip">Projetos</span>
      )}
    </motion.div>
  );
}

export default SideBar;
