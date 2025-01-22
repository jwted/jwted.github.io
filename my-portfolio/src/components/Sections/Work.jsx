import "./Work.css";
function Work() {
  return (
    <>
      <section className="work mt-20">
        <h1>My Work</h1>
        <div className="my-12 h-auto" id="card">
          <div className="intro">
            <div className="flex justify-between">
              <h1 className="title">AllerGenius</h1>
              <div className="flex w-1/6 justify-evenly">

              <svg
                className="githubIcon h-12 w-12 mt-8 "
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0,0,256,256"
                >
                <g
                  fill="currentColor"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="2"
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
                  <g transform="scale(8.53333,8.53333)">
                    <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path>
                  </g>
                </g>
              </svg>
              <svg
              className="githubIcon h-12 w-12 mt-8"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0,0,256,256"
              >
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
              </svg>
                  </div>
            </div>
            <p className="subtitle">
              Empowering you to enjoy every meal safely and confidently, no
              matter your needs.
            </p>
          </div>
          <div className="flex flex-wrap ">
            <div className="pc:w-1/5 tablet:w-full   phone:w-full tablet:m-auto">
              <img src="src\assets/AllerLogo.png" alt="" />
            </div>

            <div className="leading-snug text-sm flex-wrap tablet:w-full pc:w-3/5 m-12 ">
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
