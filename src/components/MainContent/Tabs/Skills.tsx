import { AiFillBuild, AiOutlineConsoleSql } from 'react-icons/ai';
import {
  BiLogoReact,
  BiLogoNodejs,
  BiLogoAngular,
  BiLogoDocker,
  BiLogoTailwindCss,
} from 'react-icons/bi';
import { BUBBLE_CLASSNAME } from '../../../assets/utils';
import SkillCard from '../../SkillCard/SkillCard';
import Reveal from './Reveal';

function Skills() {
  return (
    <div className="flex flex-col gap-5 text-start" id="skills">
      <div className={BUBBLE_CLASSNAME}>
        <AiFillBuild size={15} /> HABILIDADES
      </div>
      <div className="flex flex-col gap-16 text-left max-sm:gap-8">
        <Reveal>
          <h1 className="text-5xl font-inter-light">
            Minhas principais
            <span className="text-green-primary"> habilidades</span>
          </h1>
        </Reveal>
        <div className="flex flex-wrap gap-5 text-center ml-auto">
          <SkillCard icon={<BiLogoReact size={80} />} name="React" />
          <SkillCard icon={<BiLogoAngular size={80} />} name="Angular" />
          <SkillCard icon={<BiLogoNodejs size={80} />} name="Node.js" />
          <SkillCard icon={<BiLogoDocker size={80} />} name="Docker" />
          <SkillCard icon={<AiOutlineConsoleSql size={80} />} name="SQL" />
          <SkillCard icon={<BiLogoTailwindCss size={80} />} name="Tailwind" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
