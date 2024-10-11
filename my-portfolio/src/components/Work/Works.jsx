import './WorkCss.css'
function Work() {

 let works = []

 
  return (
    
    
    <>

<div className="flex items-center justify-center content"> {/* Assuming you have a dark background */}
      <div className="text-start text-white p-8">
        <h1 className="text-7xl md:text-9xl font-bold mb-4" id="phrase1">
          Sometimes I make things
        </h1>
        <h1 className="text-6xl md:text-7xl" id="phrase2">
          usually out of caffeine
        </h1>
      </div>
      <ul>
        {works.forEach(work => {

          <li><a href='${work}'></a></li>
        })}
      </ul>
    </div>
    </>
  )
}

export default Work
