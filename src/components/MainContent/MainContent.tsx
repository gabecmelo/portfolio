import About from '../Tabs/About'
import Introduction from '../Tabs/Introduction'
import Resume from '../Tabs/Resume'
import Skills from '../Tabs/Skills'

function MainContent() {
  return (
    <div className='flex flex-col items-start w-1/2 relative left-1/3 ml-24 gap-14 top-16 max-xl:w-1/3 max-md:left-0 max-md:top-36'>
      <Introduction />
      <About />
      <Resume />
      <Skills />
    </div>
  )
}

export default MainContent