import { AiOutlineHome } from 'react-icons/ai';
import { HiArrowDown } from 'react-icons/hi';
import { HashLink as Link } from 'react-router-hash-link';
import { BUBBLE_CLASSNAME } from '../../../assets/utils';
import Reveal from './Reveal';

function Introduction() {
  return (
    <div className="flex flex-col text-start">
      <div className={BUBBLE_CLASSNAME}>
        <AiOutlineHome size={15} /> INTRODUÇÃO
      </div>
      <Reveal>
        <div className="text-7xl text-start font-light leading-plus font-inter max-xl:text-6xl max-sm:text-5xl">
          <p>
            Um Olá de <span className="text-green-primary">Gabriel</span>,
            <br />
            Desenvolvedor Web <br />
            Full-Stack
          </p>
        </div>
      </Reveal>
      <div className="text-left">
        <Reveal>
          <p className="text-default-gray font-inter">
            Desenvolvo aplicações Web com React, Angular e outras ferramentas.
            <br /> Além disso, utilizo Docker, SQL e também Node.js em projetos
            no Back-End.
            <br />
            Simples assim!
          </p>
        </Reveal>
        <Link
          className="flex w-44 h-44 ml-56 mt-16
          justify-center items-center border
          rounded-full default-gray max-sm:ml-32"
          to="#projects"
          smooth
        >
          <div className="animate-spi n">
            <img
              className="scale-90"
              src="https://i.ibb.co/fqCnKkg/Portfolio-Projects-image-fundo-transparente.png"
              alt=""
            />
          </div>
          <HiArrowDown className="absolute" size={40} />
        </Link>

        <Reveal>
          <>
            <div className="mt-24 font-inter-light flex gap-32">
              <h2 className="text-green-primary text-7xl">1+</h2>
              <h2 className="text-green-primary text-7xl">20+</h2>
            </div>
            <div className="mt-6 text-default-gray font-inter flex gap-28">
              <div>
                <p>
                  Anos de <br />
                  experiência
                </p>
              </div>
              <div>
                <p>
                  Projetos completos <br />
                  no Brasil
                </p>
              </div>
            </div>
          </>
        </Reveal>
      </div>
    </div>
  );
}

export default Introduction;
