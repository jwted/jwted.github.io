import './NavbarCss.css'
function Navbar() {

  return (
    <>
      <div className='flex w-screen px-20' id='navbar'>
        <h2 className='name'>João Pais</h2>
          <div className='box px-2 py-1'>
            <button className='px-2 max-h-6 btn_trans '>Info</button>
            <button className='px-2 max-h-6 btn_trans'>Work</button>
          </div>
        <h4>Resume</h4>
      </div>
    </>
  )
}

export default Navbar
