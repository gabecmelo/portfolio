import { Link } from "react-router-dom"
import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub, AiOutlineInstagram } from "react-icons/ai"

function SocialMedias() {
  return (
    <ul className="flex gap-2 mb-8 justify-center">
      <li><Link className="social-media-link" target="_blank" to="https://twitter.com/Gabezzk"><AiOutlineTwitter/></Link></li>
      <li><Link className="social-media-link" target="_blank" to="https://www.linkedin.com/in/gabrielc-melo/"><AiFillLinkedin /></Link></li>
      <li><Link className="social-media-link" target="_blank" to="https://github.com/gabecmelo"><AiFillGithub /></Link></li>
      <li><Link className="social-media-link" target="_blank" to="https://www.instagram.com/https.gabbee/"><AiOutlineInstagram /></Link></li>
    </ul>
  )
}

export default SocialMedias