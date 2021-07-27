import React from 'react'

function Experience() {
  return (
    <div>
      <section className="text-gray-600 body-font bg-gray-50">
        <div className="container px-5 pb-24 pt-6 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-800 mb-4">Experience</h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="company" className="flex-shrink-0 rounded w-48 h-48 shadow-lg object-cover object-center sm:mb-0 mb-4" src="https://media-exp3.licdn.com/dms/image/C560BAQGgkQmCA7PpVg/company-logo_200_200/0/1618734809963?e=1633564800&v=beta&t=Psn4Z5-5UHxuJMRvWXb4QprBOipcMuBJvI2PBR-CUDc" />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-2xl text-gray-900">Co-Founder</h2>
                  <h3 className="text-gray-500 mb-3">Sep 2020 – Present |Remote (India)</h3>
                  <p className="mb-4">Created 18+ Readymade templates with latest technologies and having some modern-features like dark-mode , responsiveness.</p>

                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="company" className="flex-shrink-0 rounded w-48 h-48 shadow-lg object-cover object-center sm:mb-0 mb-4" src="https://ik.imagekit.io/vpa3fwqdnd/instruo_sDJyf0PdE.jpg" />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-2xl text-gray-900">UI/UX Designer</h2>
                  <h3 className="text-gray-500 mb-3">Nov-2020 |SHIBPUR</h3>
                  <p className="mb-4">Collaborated with Instruo design team to create designs and wireframes for Desktop and Mobile application.</p>

                </div>
              </div>
            </div>


          </div>
        </div>
      </section>







    </div>
  )
}

export default Experience
