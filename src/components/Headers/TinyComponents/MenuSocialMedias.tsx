import SocialMedia from './SocialMedia';
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillGithub,
} from 'react-icons/ai';

function MenuSocialMedias() {
  return (
    <ul className="flex flex-row gap-3">
      <SocialMedia
        icon={<AiOutlineInstagram size={18} />}
        link="https://www.instagram.com/https.gabbee/"
      />
      <SocialMedia
        icon={<AiOutlineTwitter size={18} />}
        link="https://twitter.com/Gabezzk"
      />
      <SocialMedia
        icon={<AiFillGithub size={18} />}
        link="https://github.com/gabecmelo"
      />
    </ul>
  );
}

export default MenuSocialMedias;
