import { AiOutlineHome, AiFillBuild } from 'react-icons/ai'
import { GoPerson } from 'react-icons/go'
import { BiBriefcase } from 'react-icons/bi'
import { PiSquaresFour } from 'react-icons/pi'
import { Link } from 'react-router-dom'

type MenuProps = {
  showMenu: boolean
  setShowMenu: (setting: boolean) => void
}

function Menu({ setShowMenu, showMenu }: MenuProps) {

  return (
    <>
      <div onClick={() => setShowMenu(!showMenu)}
        style={{ pointerEvents: showMenu ? 'auto' : 'none' }}
        className={`bg-transparent w-full h-full top-0 left-0 z-10 absolute ${showMenu ? 'fade-in' : 'fade-out'}`} />
      <div className={`flex flex-col absolute right-0 top-0 w-1/5 h-full bg-gray-default text-left
        gap-8 z-20 text-default-gray bg-gray-default overflow-x-hidden pl-20 pt-20
        max-xl:w-7/12 max-lg:w-1/2 max-md:w-full max-lg:items-center transition-all
      ${showMenu ? 'slide-in-from-right fade-in' : 'slide-out-from-right hidden'}`}>
        <h1 className='text-xl'>Menu</h1>
        <div className='flex flex-col gap-6'>
          <Link to="#home" className='flex gap-3'><AiOutlineHome size={20} /> Início</Link>
          <Link to="#about" className='flex gap-3'><GoPerson size={20} /> Sobre</Link>
          <Link to="#resume" className='flex gap-3'><BiBriefcase size={20} /> Currículo</Link>
          <Link to="#skills" className='flex gap-3'><AiFillBuild size={20} /> Habilidades</Link>
          <Link to="#projects" className='flex gap-3'><PiSquaresFour size={20} /> Projetos</Link>
        </div>
        <div>
          social
        </div>
      </div>
    </>
  )
}

export default Menu
