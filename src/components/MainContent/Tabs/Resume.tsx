import { BiBriefcase } from 'react-icons/bi';
import { BUBBLE_CLASSNAME } from '../../../assets/utils';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';

function Resume() {
  return (
    <div className="flex flex-col gap-5 text-start">
      <div className={BUBBLE_CLASSNAME}>
        <BiBriefcase size={15} /> CURRICULO
      </div>
      <Reveal>
        <h1 className="text-5xl font-inter-light mb-12">
          Educação & <span className="text-green-primary">Experiência</span>
        </h1>
      </Reveal>

      <div className="text-start ml-20">
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
          <div>
            <p className="text-default-gray mb-4">2023 - 2024</p>
            <div className="flex flex-col gap-6">
              <p className="text-2xl font-inter-light">
                Certificado de Desenvolvimento Full-Stack on{' '}
                <span className="text-green-primary underline">
                  <Link target="_blank" to="https://www.betrybe.com/">
                    Trybe
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default Resume;
