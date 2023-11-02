import { ReactElement } from "react"

type SkillCardProps = {
  icon: ReactElement
  name: string
}

function SkillCard({ icon, name }: SkillCardProps) {
  return (
    <div>
      <div className="border-2 h-56 px-12 py-10 rounded-full default-gray mb-4 skill">
        {icon}
        <h2 className="text-xl mt-3 text-green-primary">{name}</h2>
      </div>
    </div>
  )
}

export default SkillCard;