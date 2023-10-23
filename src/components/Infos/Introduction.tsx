import { AiOutlineHome } from 'react-icons/ai'
import { HiArrowDown } from 'react-icons/hi'
import { Link } from 'react-router-dom'

function Introduction() {
  return (
    <div className='flex flex-col items-start w-1/2 absolute left-1/3 ml-24 gap-14 top-16'>
      <div className='flex border rounded-full px-7 py-2 items-center gap-2 default-gray font-light text-xs font-inter-light'>
        <AiOutlineHome size={15} /> INTRODUÇÃO
      </div>
      <div className='text-7xl text-start font-light leading-plus font-inter'>
        <p>Um Olá de <span className='text-green-primary'>Gabriel, <br /></span>Desenvolvedor Web <br />Front-End</p>
      </div>
      <div className='text-left'>
        <p className='text-default-gray font-inter'>
          Desenvolvo aplicações Web com React e outras ferramentas. <br />Simples assim!
        </p>
        <Link
          className='flex w-44 h-44 absolute right-52 bottom-44 justify-center items-center border rounded-full default-gray'
          to="#projects">
          < HiArrowDown size={40} />
        </Link>

        <div className='mt-64 font-inter-light flex gap-32'>
          <h2 className='text-green-primary text-7xl'>
            1+
          </h2>
          <h2 className='text-green-primary text-7xl'>
            20+
          </h2>
        </div>
        <div className='mt-6 text-default-gray font-inter flex gap-28'>
          <div>
            <p>Anos de <br />experiência</p>
          </div>
          <div>
            <p>Projetos completos <br />no Brasil</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction