import { AiFillBuild } from 'react-icons/ai'
import { BiLogoReact } from 'react-icons/bi'
import { BUBBLE_CLASSNAME } from '../../assets/utils'
import SkillCard from '../SkillCard/SkillCard'

function Skills() {
  return (
    <>
      <div className={BUBBLE_CLASSNAME}>
        <AiFillBuild size={15} /> HABILIDADES
      </div>
      <h1 className='text-5xl font-inter-light'>Minhas <span className='text-green-primary'>Habilidades</span></h1>
    <SkillCard icon={<BiLogoReact size={80}/>} name='React'/>
    </>
  )
}

export default Skills