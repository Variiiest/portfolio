import React, { Component } from 'react'
export class Footer extends Component {
  render() {
    return (
      <div>

        <footer className="text-gray-200 body-font bg-blue-800">
          <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <a href="#_" className="flex items-center md:justify-start justify-center">
                <span className="p-2 bg-gradient-to-b from-pink-300 to-green-300 rounded text-2xl font-bold text-white">VG</span>
              </a>
              <p className="mt-2 text-sm text-gray-200">An another frontend guy...</p>
            </div>
            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div className="lg:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-200 text-xl mb-3">Services</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a href="https://github.com/Variiiest" rel="noopener noreferrer" target="_blank" className="text-white hover:text-gray-100">Github</a>
                  </li>
                  <li>
                    <a href="https://www.lolgoal.com/" rel="noopener noreferrer" target="_blank" className="text-white hover:text-gray-100">LolGoal</a>
                  </li>

                </nav>
              </div>
              <div className="lg:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-200 text-xl mb-3">Social</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a href="https://www.linkedin.com/in/varishgautam/" rel="noopener noreferrer" target="_blank" className="text-white hover:text-gray-100">Linkedin</a>
                  </li>
                  <li>
                    <a href="https://medium.com/@varishgautamvari" rel="noopener noreferrer" target="_blank" className="text-white hover:text-gray-100">Medium</a>
                  </li>

                </nav>
              </div>

            </div>
          </div>

        </footer>
        <div className="mx-auto py-4 flex flex-wrap flex-col sm:flex-row justify-center text-center bg-blue-600"><p className="text-gray-200 text-sm text-center">© 2021-2022
          <a href="#_" rel="noopener noreferrer" className="text-gray-100 ml-1" target="_blank">Designed By Varish Gautam</a>
        </p></div>
      </div>
    )
  }
}

export default Footer
