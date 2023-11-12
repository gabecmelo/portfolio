import { BiBriefcase } from 'react-icons/bi';
import { BUBBLE_CLASSNAME } from '../../assets/utils';
import { Link } from 'react-router-dom';

function Resume() {
  return (
    <>
      <div className={BUBBLE_CLASSNAME}>
        <BiBriefcase size={15} /> CURRICULO
      </div>
      <h1 className="text-5xl font-inter-light">
        Educação & <span className="text-green-primary">Experiência</span>
      </h1>
      <div className="text-start ml-20">
        <div className="mb-20">
          <p className="text-default-gray mb-8">2022 - Presente</p>
          <div className="flex flex-col gap-6">
            <p className="text-2xl font-inter-light">
              Desenvolvedor Front-End Freelancer
            </p>
          </div>
        </div>
        <div>
          <p className="text-default-gray mb-8">2023 - 2024</p>
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
      </div>
    </>
  );
}

export default Resume;
