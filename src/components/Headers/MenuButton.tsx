import { FaGripLines } from 'react-icons/fa6';
import { motion } from 'framer-motion';

type MenuButtonProps = {
  showMenu: boolean;
  setShowMenu: (setting: boolean) => void;
};

function MenuButton({ showMenu, setShowMenu }: MenuButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.button
        variants={{
          hover: {
            scale: 1.1,
            transition: {
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 0.3,
            },
          },
        }}
        whileHover="hover"
        onClick={() => setShowMenu(!showMenu)}
        className="menu-button max-md:fixed max-lg:top-8 max-lg:right-4"
      >
        <FaGripLines size={23} />
      </motion.button>
    </motion.div>
  );
}

export default MenuButton;
