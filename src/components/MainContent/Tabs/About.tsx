import { GoPerson } from 'react-icons/go';
import { BUBBLE_CLASSNAME } from '../../../assets/utils';
import Reveal from './Reveal';

function About() {
  return (
    <div className="flex flex-col gap-5 text-start max-sm:w-screen">
      <div className={BUBBLE_CLASSNAME}>
        <GoPerson size={15} /> SOBRE
      </div>
      <Reveal>
        <h1 className="text-start text-5xl leading-tight font-light">
          Todo ótimo site começa com uma história{' '}
          <span className="text-green-primary">ainda melhor</span>
        </h1>
      </Reveal>
      <div className="text-start flex flex-col gap-5">
        <Reveal>
          <p className="text-default-gray font-inter">
            Desde os meus 7 anos, eu era apaixonado por tecnologia, e adorava
            jogar, comecei a aprender Inglês sozinho para poder ler as
            informações que eles continham, depois, aprendi a fazer jogos
            simples quando tinha apenas 11 anos, desde então, o Inglês e o
            Espanhol são uma parte importante da minha vida.
          </p>
        </Reveal>
        <Reveal>
          <p className="text-default-gray font-inter">
            Estudei para a faculdade de medicina durante 2 anos, e entrei para a
            lista de espera da UFBA em 2022
          </p>
        </Reveal>
        <Reveal>
          <p className="text-default-gray font-inter">
            Após entrar na lista de espera, encontrei um curso de JavaScript do
            professor Gustavo Guanabara, após assistir às aulas, então, percebi
            que eu era apaixonado por programação e tecnologia, nesse momento
            então, eu desisti da Medicina para poder me tornar um grande
            programador.
          </p>
        </Reveal>
        <Reveal>
          <p className="text-default-gray font-inter">
            Hoje, sou um Desenvolvedor Web Front-End, especializado em React e
            se especializando em Back-End, participei do curso CS50 de Ciência
            da Computação, oferecido pela universidade de Harvard e atualmente
            estou estudando e aplicando meus conhecimentos em Python, Node.js e
            SQL.
          </p>
        </Reveal>
      </div>
    </div>
  );
}

export default About;
