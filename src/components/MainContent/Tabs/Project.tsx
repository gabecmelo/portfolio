import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';

type ProjectProps = {
  projectUrl: string;
  imgUrl: string;
  name: string;
  tecnologies: Array<string>;
};

function Project({ projectUrl, imgUrl, name, tecnologies }: ProjectProps) {
  const [slow, setSlow] = useState(false);

  return (
    <div onMouseEnter={() => setSlow(true)} onMouseLeave={() => setSlow(false)}>
      <Reveal>
        <Link to={projectUrl} target="_blank">
          <img className="rounded-3xl" src={imgUrl} alt={name} />
          <ul className="flex gap-3 relative bottom-16 left-6">
            {tecnologies.map((tecnologie, index) => (
              <li
                key={index}
                className={`px-4 py-2 rounded-full font-inter-light 
                ${slow ? 'project-tag-slow' : 'project-tag-no-slow'}`}
              >
                {tecnologie}
              </li>
            ))}
          </ul>
        </Link>
      </Reveal>
      <Link className="relative bottom-10" to={projectUrl} target="_blank">
        <h1
          className={`font-inter-light text-start mt-6 text-2xl w-max max-sm:text-lg ${
            slow ? 'slow' : 'no-slow'
          }`}
        >
          {name}
        </h1>
      </Link>
    </div>
  );
}

export default Project;
