import { BiBriefcase } from 'react-icons/bi'
import { BUBBLE_CLASSNAME } from '../../assets/utils'

function Resume() {
  return (
    <>
      <div className={BUBBLE_CLASSNAME}>
        <BiBriefcase size={15} /> CURRICULO
      </div>
      <h1 className='text-5xl font-inter-light'>Educação &  <span className='text-green-primary'>Experiência</span></h1>
      <div className='text-start ml-20'>
        <p className='text-default-gray mb-8'>
          2022 - Presente
        </p>
        <div className='flex flex-col gap-6'>
          <>
            <p className='text-2xl font-inter-light'>Desenvolvedor Full-Stack</p>

          </>
          <p className='text-2xl font-inter-light'>Desenvolvedor Front-End</p>
        </div>
      </div>
    </>
  )
}

export default Resume