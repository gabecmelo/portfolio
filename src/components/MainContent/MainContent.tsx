import { AiOutlineHome } from 'react-icons/ai'

function MainContent() {
  return (
    <div className='flex flex-col items-start w-1/2 absolute left-1/3 gap-14 top-16'>
      <div className='flex border rounded-full px-7 py-2 items-center gap-2 default-gray font-light text-xs font-inter-light'>
        <AiOutlineHome size={15} /> INTRODUÇÃO
      </div>
      <div className='text-7xl text-start font-light leading-plus font-inter'>
        <p>Um Olá de <span className='text-green-primary'>Gabriel</span>,</p>
        <p>Desenvolvedor Web</p>
        <p>Front-End</p>
      </div>
      <div className='text-left'>
        <p className='text-default-gray font-inter'>
          Desenvolvo aplicações Web com React e outras ferramentas.
        </p>
        <p className='text-default-gray font-inter'>
          Simples assim!
        </p>
      </div>
    </div>
  )
}

export default MainContent