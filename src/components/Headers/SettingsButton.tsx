import { FiSettings } from 'react-icons/fi';
import { motion } from 'framer-motion';

type SettingsProps = {
  setShowSettings: (setting: boolean) => void;
  showSettings: boolean;
};

function SettingsButton({ setShowSettings, showSettings }: SettingsProps) {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      onClick={() => setShowSettings(!showSettings)}
      className="text-default-gray rounded-md flex justify-center items-center bg-zinc-800 w-11 h-11 fixed top-10 left-0 z-10"
    >
      <FiSettings className="animate-spin" size={18} />
    </motion.button>
  );
}

export default SettingsButton;
