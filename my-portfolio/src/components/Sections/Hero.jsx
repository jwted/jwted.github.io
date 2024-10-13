import './HeroCss.css'
function Hero () {

 let works = []

 
  return (
    
    
    <>

<div className=" flex items-center content">
      <div className="text-start text-white p-8 bebas">
        <h1 className="text-7xl md:text-9xl font-bold phrase1">
          Sometimes I make
        </h1>
        
        <div  className='typewriter thick text-7xl md:text-9xl font-bold phrase1 mb-3'>
          <span></span>
        </div>
          
        <h1 className="text-6xl md:text-7xl" id="phrase2">
          usually out of caffeine
        </h1>
      </div>
      <div className='red'>
        <ul>
          <li><a>He</a></li>
        </ul>
      </div>
</div>

  <div className='flex size px-8'>
    <button id='button'>Check my work <img id='arrow' src="./src/assets/arrow.svg" /> </button>
    
  </div>
  
  </>
  )
}

export default Hero
