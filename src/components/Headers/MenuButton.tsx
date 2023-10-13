import { FaGripLines } from 'react-icons/fa6'

type MenuButtonProps = {
  showMenu: boolean
  setShowMenu:(setting: boolean) => void
}

function MenuButton({showMenu, setShowMenu}: MenuButtonProps) {
  
  return (
    <button 
    onClick={() => setShowMenu(!showMenu)}
    className='menu-button'>
      <FaGripLines size={23} />
    </button>
  )
}

export default MenuButton;
