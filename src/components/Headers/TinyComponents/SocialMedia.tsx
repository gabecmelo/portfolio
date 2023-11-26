import { Link } from 'react-router-dom';

type SocialMediaProps = {
  icon: JSX.Element;
  link: string;
};

function SocialMedia({ icon, link }: SocialMediaProps) {
  return (
    <Link className="media-link transition-all" to={link} target="_blank">
      {icon}
    </Link>
  );
}

export default SocialMedia;
