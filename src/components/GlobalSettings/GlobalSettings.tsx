function GlobalSettings() {
  
  const resetColor = () => {
    const r = document.querySelector(':root') as HTMLElement;
    r.style.setProperty('--primary_color_green', '#28e98c')
  }

  const changeColor = (color: string) => {
    const r = document.querySelector(':root') as HTMLElement;
    r.style.setProperty('--primary_color_green', `var(--primary_color_${color})`)
  }

  return (
    <div className=" bg-transparent w-full h-full  top-0 left-0 z-10">
      <div className="flex flex-col justify-center z-20 absolute h-full w-4/6 right-0 top-0 text-black dark:text-white bg-gray-default overflow-x-hidden max-xl:w-7/12 max-lg:w-1/2 max-md:w-full max-lg:items-center">
        <div className="ml-32 flex flex-col justify-between max-lg:-ml-7 max-lg:items-center max-lg:w-1/2">
          <h1 className=" text-start text-3xl font-light mb-20">Configuração</h1>
          <p className="text-start text-sm mb-12">COLORS</p>
        </div>
        <div className="ml-32 flex gap-7 flex-wrap max-lg:ml-0 max-lg:items-center max-lg:w-1/2">
            <a onClick={resetColor} className="block bg-default rounded-full w-8 h-8" href="#"></a>
            <a onClick={() => changeColor('yellow')} className="block bg-yellow-500 rounded-full w-8 h-8" href="#"></a>
            <a onClick={() => changeColor('orange')} className="block bg-orange-500 rounded-full w-8 h-8" href="#"></a>
            <a onClick={() => changeColor('blue')} className="block bg-blue-primary rounded-full w-8 h-8" href="#"></a>
            <a onClick={() => changeColor('gray')} className="block bg-gray-300 rounded-full w-8 h-8" href="#"></a>
            <a onClick={() => changeColor('dark_blue')} className="block bg-dark-blue-primary rounded-full w-8 h-8" href="#"></a>
            <a onClick={() => changeColor('red')} className="block bg-red-primary rounded-full w-8 h-8" href="#"></a>
            <a onClick={() => changeColor('pink')} className="block bg-pink-300 rounded-full w-8 h-8" href="#"></a>
          </div>
      </div>
    </div>
  )
}

export default GlobalSettings;
