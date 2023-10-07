import { ImWhatsapp } from 'react-icons/im'
import { Link } from 'react-router-dom'

function HireMe() {
  return (
    <Link target='_blank' to="https://wa.me/5544991540786" className="flex items-center justify-center gap-3 text-l bg-green-primary text-black text-center rounded-full h-14 hover-hire">
          <ImWhatsapp className="text-xl" /> CONTATE-ME!
    </Link>
  )
}

export default HireMe