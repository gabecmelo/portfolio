import { Link } from "react-router-dom"
import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub, AiOutlineInstagram } from "react-icons/ai"

function SocialMedias() {
  return (
    <ul className="flex gap-2 mb-8 justify-center">
      <li><Link className="social-media-link" to=""><AiOutlineTwitter/></Link></li>
      <li><Link className="social-media-link" to=""><AiFillLinkedin /></Link></li>
      <li><Link className="social-media-link" to=""><AiFillGithub /></Link></li>
      <li><Link className="social-media-link" to=""><AiOutlineInstagram /></Link></li>
    </ul>
  )
}

export default SocialMedias