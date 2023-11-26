import About from './Tabs/About';
import Reveal from './Tabs/Reveal';
import Introduction from './Tabs/Introduction';
import Projects from './Tabs/Projects';
import Resume from './Tabs/Resume';
import Skills from './Tabs/Skills';
import ContentHeader from './ContentHeader';

function MainContent() {
  return (
    <>
      <ContentHeader route="home" />
      <div
        className="flex flex-col items-start w-8/12
      relative left-1/2 ml-24 gap-14
      max-2xl:left-1/3
      top-16 max-xl:w-1/2 max-xl:left-1/3 max-xl:ml-20
      max-md:left-0 max-md:top-36 max-md:w-full max-md:ml-0"
      >
        <Reveal>{<Introduction />}</Reveal>
        <ContentHeader route="about" />
        <Reveal>{<About />}</Reveal>
        <ContentHeader route="resume" />
        <Reveal>{<Resume />}</Reveal>
        <ContentHeader route="skills" />
        <Reveal>{<Skills />}</Reveal>
        <ContentHeader route="projects" />
        <Reveal>{<Projects />}</Reveal>
      </div>
    </>
  );
}

export default MainContent;
