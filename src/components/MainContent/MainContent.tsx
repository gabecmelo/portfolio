import About from '../Tabs/About';
import Introduction from '../Tabs/Introduction';
import Resume from '../Tabs/Resume';
import Skills from '../Tabs/Skills';

function MainContent() {
  return (
    <div
      className="flex flex-col items-start w-8/12
      relative left-1/2 ml-24 gap-14
      max-2xl:left-1/3
      top-16 max-xl:w-1/2 max-xl:left-1/3 max-xl:ml-20
      max-md:left-0 max-md:top-36 max-md:w-full max-md:ml-0"
    >
      <Introduction />
      <About />
      <Resume />
      <Skills />
    </div>
  );
}

export default MainContent;
