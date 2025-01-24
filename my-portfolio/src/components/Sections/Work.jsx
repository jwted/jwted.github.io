import "./Work.css";
function Work() {
  return (
    <>
      <section className="work mt-20">
        <h1 className="max-phone:text-3xl text-5xl">My Work</h1>
        <div className="my-12 h-auto" id="card">
          <div className="intro">
            <div className="flex justify-between">
              <h1 className="title">AllerGenius</h1>
              <div className="flex w-1/6 justify-evenly">
              <svg className="githubIcon h-12 w-12 mt-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
<a href="https://www.behance.net/gallery/189129547/Allergenius">
<path fill="currentColor" d="M24 43L16 20 32 20z"></path><path fill="currentColor" d="M24 43L42 20 32 20z"></path><path fill="currentColor" d="M37 5L42 20 32 20z"></path><path fill="currentColor" d="M24 43L42 20 45 28z"></path><path fill="currentColor" d="M24 43L6 20 16 20z"></path><path fill="currentColor" d="M11 5L6 20 16 20z"></path><path fill="currentColor" d="M24 43L6 20 3 28z"></path>
</a></svg>
              <svg
              className="githubIcon h-12 w-12 mt-8"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0,0,256,256"
              >
                <a href="https://www.behance.net/gallery/189129547/Allergenius">
                <g
                  fill="currentColor"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                >
                  <g transform="scale(8,8)">
                    <path d="M1,6.75v18.5h8.9375c0.82813,0 6.53125,-0.16797 6.53125,-5.375c0,-3.25391 -2.23828,-4.35937 -3.375,-4.6875c0.83594,-0.39453 2.5,-1.33203 2.5,-3.84375c0,-1.39844 -0.19922,-4.59375 -5.90625,-4.59375zM21.375,8.46875v1.6875h6.90625v-1.6875zM5.0625,9.90625h3.8125c0.35938,0 2.78125,-0.19141 2.78125,2.125c0,1.98047 -1.75,2.1875 -2.46875,2.1875h-4.125zM25,11.6875c-5.22266,0 -6.3125,4.53516 -6.3125,6.5c0,5.83203 4.78125,6.5 6.3125,6.5c4.12891,0 5.30078,-2.67187 5.78125,-4.15625h-3c-0.11719,0.38281 -0.99219,1.625 -2.65625,1.625c-2.78906,0 -3.03125,-2.17969 -3.03125,-3.15625h8.875c0.17969,-3.375 -1.29687,-7.3125 -5.96875,-7.3125zM24.90625,14.21875c0.83203,0 1.50391,0.24219 1.90625,0.6875c0.40234,0.44922 0.69922,1.10547 0.78125,1.96875h-5.5c0.01563,-0.23828 0.07031,-0.51172 0.15625,-0.8125c0.08594,-0.30859 0.21875,-0.60156 0.4375,-0.875c0.21875,-0.26953 0.52344,-0.50391 0.875,-0.6875c0.35938,-0.1875 0.80469,-0.28125 1.34375,-0.28125zM5.0625,17h4.40625c0.875,0 2.9375,0.13672 2.9375,2.65625c0,2.44141 -2.59766,2.4375 -3,2.4375h-4.34375z"></path>
                  </g>
                </g>
                </a>
              </svg>
                  </div>
            </div>
            <p className="max-phone:text-sm subtitle">
              Empowering you to enjoy every meal safely and confidently, no
              matter your needs.
            </p>
          </div>
          <div className="flex flex-wrap ">
            <div className="pc:w-1/5 tablet:w-full   phone:w-full tablet:m-auto">
              <img src="src\assets/AllerLogo.png" alt="" />
            </div>

            <div className="max-phone:text-sm text-xl leading-snug text-sm flex-wrap tablet:w-full pc:w-3/5 m-12 ">
              <p>
                AllerGenius is probably the project I&apos;m most proud of, even
                though the design is really simple. The entire process, from the
                creation of the idea to the last line of code, was carried out
                by me and another friend. It is an application that scans
                barcodes and, depending on the user&apos;s allergies, indicates
                whether the product is safe for consumption. The backend was
                made with a REST API made by us and the frontend was made using
                React Native. For more details visit the project's page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
