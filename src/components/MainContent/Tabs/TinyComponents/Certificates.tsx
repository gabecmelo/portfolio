import { Link } from 'react-router-dom';

function Certificates() {
  return (
    <div className="flex flex-col gap-14">
      <div>
        <p className="text-default-gray">2023</p>
        <p className="text-2xl font-inter-light">
          Certificado de Desenvolvimento Front-end on{' '}
          <span className="text-green-primary underline">
            <Link target="_blank" to="https://www.betrybe.com/">
              Trybe
            </Link>
          </span>
          <br />
          <Link
            target="_blank"
            to="https://www.credential.net/211b2d93-632a-4b14-8af1-ce942547425f"
          >
            <span className="text-default-gray text-lg underline">
              Acesse o certificado aqui
            </span>
          </Link>
        </p>
      </div>
      <div>
        <p className="text-default-gray">2023</p>
        <p className="text-2xl font-inter-light">
          Certificado de Fundamentos do Desenvolvimento Web on{' '}
          <span className="text-green-primary underline">
            <Link target="_blank" to="https://www.betrybe.com/">
              Trybe
            </Link>
          </span>
          <br />
          <Link
            target="_blank"
            to="https://www.credential.net/858394cd-9d31-40b5-a312-d8f027e75c4b#gs.1d9s9x"
          >
            <span className="text-default-gray text-lg underline">
              Acesse o certificado aqui
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Certificates;
