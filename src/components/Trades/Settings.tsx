import { FiSettings } from 'react-icons/fi'

function Settings() {
  return (
    <button className="text-default-gray rounded-md flex justify-center items-center bg-zinc-800 w-11 h-11 absolute top-10 left-0 z-10"><FiSettings className="animate-spin" size={18}/></button>
  )
}

export default Settings;