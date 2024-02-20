import { BUBBLE_CLASSNAME } from '../../../assets/utils';
import { PiSquaresFour } from 'react-icons/pi';
import Project from './Project';
import Reveal from './Reveal';

function Projects() {
  return (
    <div className="flex flex-col gap-5 text-start max-sm: w-screen" id="projects">
      <div className={BUBBLE_CLASSNAME}>
        <PiSquaresFour size={15} /> Projetos
      </div>
      <Reveal>
        <h1 className="text-5xl font-inter-light mb-4">
          <span className="text-green-primary">Projetos</span> em destaque
        </h1>
      </Reveal>
      <Project
        projectUrl="https://gabecmelo.github.io/Flexbox-Froggy"
        imgUrl="https://uploaddeimagens.com.br/images/004/664/619/full/Screenshot_from_2023-11-14_16-16-48.png?1699989556"
        name="Flexbox Froggy - Treino de CSS Flexbox"
        tecnologies={['HTML', 'CSS', 'JavaScript']}
      />
      <Project
        projectUrl="https://github.com/gabecmelo/store-manager"
        imgUrl="https://uploaddeimagens.com.br/images/004/681/029/full/Screenshot_from_2023-12-03_11-18-46.png?1701613147"
        name="Store Manager - API RESTful para lojas"
        tecnologies={['JavaScript', 'Node.js', 'MySQL']}
      />
    </div>
  );
}

export default Projects;
