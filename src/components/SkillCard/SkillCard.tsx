import { ReactElement } from 'react';
import Reveal from '../MainContent/Tabs/Reveal';

type SkillCardProps = {
  icon: ReactElement;
  name: string;
};

function SkillCard({ icon, name }: SkillCardProps) {
  return (
    <Reveal>
      <div>
        <div className="border-2 h-56 px-12 py-10 default-gray rounded-full mb-4 skill max-sm:px-10 ">
          {icon}
          <h2 className="text-xl mt-3 text-green-primary">{name}</h2>
        </div>
      </div>
    </Reveal>
  );
}

export default SkillCard;
