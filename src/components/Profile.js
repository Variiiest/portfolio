import React from 'react'

function Profile() {
  return (
    <div>
      <section className="relative pb-20 font-lex bg-gradient-to-b from-blue-100 to-gray-50">
        <div className="container px-4 mx-auto pt-12">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
              <h2 className="mt-8 mb-6 lg:mb-12 text-4xl lg:text-5xl font-semibold" data-config-id="header">Hi, I'm Varish Gautam</h2>
              <div className="max-w-lg mb-6 lg:mb-12">
                <p className="text-xl text-gray-500">I am intrigued by what makes people great and what drives them. Creative and fast learner, I love detailed learning and having in depth-knowledge come up with new-idea and solutions.</p>
              </div>
              <div className="flex flex-wrap">
                <a className="inline-block btn-primary" href="https://github.com/Variiiest" rel="noopener noreferrer" target="_blank">Check Github Profile</a>
              </div>
            </div>
            <div className="relative w-full md:w-1/2 px-4">

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile
