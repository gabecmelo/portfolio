import { useState } from 'react';
import { Link } from 'react-router-dom';

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
      <Link to={projectUrl} target="_blank">
        <img className="rounded-3xl" src={imgUrl} alt={name} />
        <ul className="flex gap-3 relative bottom-16 left-6">
          {tecnologies.map((tecnologie) => (
            <li
              className={`px-4 py-2 rounded-full font-inter-light transition-all ease-in-out duration-300
            ${slow ? 'bg-zinc-800 text-white' : 'bg-white text-black'}`}
            >
              {tecnologie}
            </li>
          ))}
        </ul>
      </Link>
      <Link className="relative bottom-10" to={projectUrl} target="_blank">
        <p
          className={`font-inter-light text-start mt-6 text-2xl w-max ${
            slow ? 'slow' : 'no-slow'
          }`}
        >
          {name}
        </p>
      </Link>
    </div>
  );
}

export default Project;
