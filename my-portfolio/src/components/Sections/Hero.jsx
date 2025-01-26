import './HeroCss.css'
import Arrow from '../../../dist/assets/arrow.svg'
function Hero () {

 let works = []

 
  return (
    
    
    <div className=''>

  <div className='mb-40 pt-20'>
<div className="flex items-center content">
      <div className="text-start text-white p-8 bebas">
        <h1 className="text-5xl phone:text-5xl pc:text-7xl tablet:text-6xl font-bold phrase1">
          Sometimes I make
        </h1>
        
        <div  className='text-6xl typewriter thick phone:text-7xl tablet:text-7xl pc:text-9xl font-bold phrase1 mb-3'>
          <span></span>
        </div>
          
        <h1 className="text-3xl phone:text-4xl tablet:text-6xl pc:text-6xl" id="phrase2">
          usually out of caffeine
        </h1>
      </div>
      
</div>

  <div className='flex size px-8'>
    <a href="#work"><button id='button'>Check my work <img id='arrow' src={arrow} /> </button></a>
    
  </div>


  </div>
  
  </div>
  )
}

export default Hero
