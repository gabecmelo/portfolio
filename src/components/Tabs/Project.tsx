import { useState } from 'react';
import { Link } from 'react-router-dom';

type ProjectProps = {
  projectUrl: string;
  imgUrl: string;
  name: string;
};

function Project({ projectUrl, imgUrl, name }: ProjectProps) {
  const [slow, setSlow] = useState(false);

  return (
    <div
      className="mb-16"
      onMouseEnter={() => setSlow(true)}
      onMouseLeave={() => setSlow(false)}
    >
      <Link to={projectUrl} target="_blank">
        <img className="rounded-3xl" src={imgUrl} alt={name} />
      </Link>
      <Link to={projectUrl} target="_blank">
        <p
          className={`font-inter-light text-start mt-6 text-2xl w-max ${
            slow ? 'slow' : ''
          }`}
        >
          {name}
        </p>
      </Link>
    </div>
  );
}

export default Project;
