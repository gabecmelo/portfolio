import { Link } from 'react-router-dom';
import SocialMedias from './SocialMedias';
import HireMe from './HireMe';
import { motion } from 'framer-motion';

function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="fixed left-5 top-17 border-1 default-gray
                    rounded-4xl p-14 flex flex-col max-w-m z-0
                    text-black dark:text-white max-lg:z-0 max-lg:max-w-xs max-lg:p-8
                    max-md:relative max-md:max-w-lg max-sm:w-80"
    >
      <div className="flex justify-between mb-8 ">
        <h1 className="text-5xl font-semibold">Gabe</h1>
        <p className="text-right text-sm">
          Desenvolvedor <br /> Full-Stack
        </p>
      </div>
      <img
        className="max-w-xxs mb-12 rounded-3xl "
        src="https://a.imagem.app/oBg7fT.png"
        alt="Gabriel Melo"
      />
      <h2 className="text-xl font-light mb-2 ">contatogabemelo@gmail.com</h2>
      <h2 className="text-2xl font-light mb-6">Maringá, PR</h2>
      <span className="text-default-gray font-light mb-6">
        {'Inspiração do Design: '}
        <Link
          className="credit-link"
          target="_blank"
          to="https://wpriverthemes.com/HTML/drake/home6.html#home"
        >
          Drake
        </Link>
      </span>
      <SocialMedias />
      <HireMe />
    </motion.div>
  );
}

export default ProfileCard;
