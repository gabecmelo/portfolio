import { BUBBLE_CLASSNAME } from '../../assets/utils';
import { PiSquaresFour } from 'react-icons/pi';
import Project from './Project';

function Projects() {
  return (
    <div className="flex flex-col gap-5 text-start">
      <div className={BUBBLE_CLASSNAME}>
        <PiSquaresFour size={15} /> Projetos
      </div>
      <h1 className="text-5xl font-inter-light mb-4">
        <span className="text-green-primary">Projetos</span> em destaque
      </h1>
      <Project
        projectUrl="https://gabecmelo.github.io/Flexbox-Froggy"
        imgUrl="https://uploaddeimagens.com.br/images/004/664/619/full/Screenshot_from_2023-11-14_16-16-48.png?1699989556"
        name="Flexbox Froggy - Treino de CSS Flexbox"
        tecnologies={['HTML', 'CSS', 'JavaScript']}
      />
      <Project
        projectUrl="https://gabecmelo.github.io/TrybeTunes/"
        imgUrl="https://uploaddeimagens.com.br/images/004/666/542/full/Screenshot_from_2023-11-16_17-32-19.png?1700166759"
        name="TrybeTunes - App de músicas"
        tecnologies={['React', 'TypeScript', 'CSS']}
      />
    </div>
  );
}

export default Projects;
