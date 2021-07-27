import React, { Component } from 'react'

export class Awards extends Component {
  render() {
    return (
      <div>
        <section className="text-gray-800 body-font py-4 sm:px-12 px-2 bg-gray-50">
          <div className="container flex flex-col items-center px-5 py-12 mx-auto md:flex-row lg:px-8 bg-gradient-to-b from-blue-100 to-white shadow rounded">
            <div className="flex flex-col w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:items-start md:mb-0">
              <h1 className="mb-2 text-2xl tracking-tighter text-left text-blue-900 title-font">
                Awards
              </h1>
              <h1 className="mb-8 mt-4 text-3xl tracking-tighter text-left text-gray-900 lg:text-3xl title-font">
                Hyland Hackathon  Kolkata (3<sup>rd</sup> Rank)
              </h1>
              <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
                <div className="flex flex-col items-start p-4 mb-6 text-left md:w-1/2 md:mb-0">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-5 text-white bg-gradient-to-b from-blue-600 to-red-300 shadow rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" classname="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokelinecap="round" strokelinejoin="round" strokewidth="{2}" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h2 className="mb-3 text-2xl font-medium tracking-tighter text-gray-700 title-font">
                      Frontend
                    </h2>
                    <p className="text-base leading-relaxed">Designed a web-application frontend to search symptoms and precautions by disease name having lab-test booking and doctor booking facilities.</p>
                  </div>
                </div>
                <div className="flex flex-col items-start p-4 mb-6 text-left md:w-1/2 md:mb-0">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-5 text-white bg-gradient-to-b from-blue-600 to-red-300 shadow rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" classname="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokelinecap="round" strokelinejoin="round" strokewidth="{2}" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h2 className="mb-3 text-2xl font-medium tracking-tighter text-gray-700 title-font">
                      Collaboration
                    </h2>
                    <p className="text-base leading-relaxed">Collaborated with 3 members from Ideation to development stage.Mainly performed frontend developement and Learned Axios.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap mt-6">
                <a className="inline-block btn-primary" href="https://the-grid2.netlify.app/" rel="noopener noreferrer" target="_blank" >Check Live</a>
              </div>
            </div>
            <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
              <img className="object-cover object-center rounded-lg shadow-lg" alt="project" src="https://ik.imagekit.io/vpa3fwqdnd/pic_bHI8iavE4.JPG" />
            </div>
          </div>
        </section>

      </div>
    )
  }
}

export default Awards
