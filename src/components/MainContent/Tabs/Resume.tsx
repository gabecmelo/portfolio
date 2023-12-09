import { BiBriefcase } from 'react-icons/bi';
import { BUBBLE_CLASSNAME } from '../../../assets/utils';
import Reveal from './Reveal';
import Certificates from './TinyComponents/Certificates';

function Resume() {
  return (
    <div className="flex flex-col gap-5 text-start max-sm:w-screen">
      <div className={BUBBLE_CLASSNAME}>
        <BiBriefcase size={15} /> CURRICULO
      </div>
      <Reveal>
        <h1 className="text-5xl font-inter-light mb-12">
          Educação & <span className="text-green-primary">Experiência</span>
        </h1>
      </Reveal>

      <div className="text-start ml-20 max-md:ml-0">
        <Reveal>
          <div className="mb-20">
            <p className="text-default-gray mb-4">2022 - Presente</p>
            <div className="flex flex-col gap-6">
              <p className="text-2xl font-inter-light">
                Desenvolvedor Front-End Freelancer
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <Certificates />
        </Reveal>
      </div>
    </div>
  );
}

export default Resume;
