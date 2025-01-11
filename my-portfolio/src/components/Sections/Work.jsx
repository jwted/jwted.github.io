import "./Work.css";
function Work() {
  return (
    <>
      <section className="work mt-20">
        <h1>My Work</h1>
        <div className="my-12" id='card'> 
          

          <div className="intro">
            <h1 className="title">AllerGenius</h1>
            <p className="subtitle">Empowering you to enjoy every meal safely and confidently, no matter your needs. </p>
          </div>
          <div className="flex mt-12">
       {/*  <div className="flex justify-">
          <div className="workImage flex">
          
          <img id='' src="src\assets\svg\logo.svg" alt="" />
          <img src="src\assets\svg\behance.svg" alt="" />
          <img src="src\assets\svg\onboard.svg" alt="" />
          </div>
          
          <div className="m-6">
          <p>
          AllerGenius is probably the project I&apos;m most proud of, even
          though the design is really simple. The entire process, from the
          creation of the idea to the last line of code, was carried out by
          me and another friend. It is an application that scans barcodes
          and, depending on the user&apos;s allergies, indicates whether the
          product is safe for consumption. The backend was made with a REST
          API made by us and the frontend was made using React Native.
          </p>
          </div> 
          </div> */}


        <div className="leftside md:shrink-0 flex justify-evenly">
        <img id='' src="src\assets\svg\logo.svg" alt="" />
          <img src="src\assets\svg\behance.svg" alt="" />
          <img src="src\assets\svg\onboard.svg" alt="" />
        </div>

        <div className="rightside">
        <p>
          AllerGenius is probably the project I&apos;m most proud of, even
          though the design is really simple. The entire process, from the
          creation of the idea to the last line of code, was carried out by
          me and another friend. It is an application that scans barcodes
          and, depending on the user&apos;s allergies, indicates whether the
          product is safe for consumption. The backend was made with a REST
          API made by us and the frontend was made using React Native.
          </p>
          </div>
        </div>
          </div>
      </section>
    </>
  );
}

export default Work;
