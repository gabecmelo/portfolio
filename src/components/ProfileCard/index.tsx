import { Link } from "react-router-dom"
import SocialMedias from "./SocialMedias"

function ProfileCard() {
  return (
    <div className="fixed left-5 top-17 border-1 default-gray
                    rounded-4xl p-14 flex flex-col max-w-m z-10
                    text-black dark:text-white">
      <div className="flex justify-between mb-8 ">
        <h1 className="text-5xl font-semibold">Gabe</h1>
        <p className="text-right text-sm">Desenvolvedor <br /> Front-End</p>
      </div>
      <img className="max-w-xxs mb-12 rounded-3xl " src="https://a.imagem.app/oBg7fT.png" alt="Gabriel Melo" />
      <div className="flex flex-col gap-2 mb-6">
        <h2 className="text-2xl font-light">contatogabemelo@gmail.com</h2>
        <h2 className="text-2xl font-light">Maringá, PR</h2>
      </div>
      <span className="text-default-gray font-light">
        {'Inspiração do Design: '}
        <Link className="credit-link" target="_blank" to="https://wpriverthemes.com/HTML/drake/home6.html#home">Drake</Link>
      </span>
      <SocialMedias />
    </div>
  )
}

export default ProfileCard