import React from 'react'

function Education() {
  return (
    <div>

      <section className="text-gray-600 body-font bg-gray-50">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-800 mb-4">Education</h1>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col items-center">

              <div className="flex-grow p-4 bg-white shadow rounded border-t-4 border-blue-700 w-full">
                <h2 className="text-gray-800 text-2xl title-font font-medium mb-3">Graduation</h2>
                <p className="leading-relaxed text-xl tracking-tight text-blue-800">B.Tech.(IIEST SHIBPUR)</p>
                <p className="mb-1">Information Technology</p>
                <p className="">CGPA (UPTO 6<sup>th</sup>Sem): 7.84 </p>
                <p className="my-1">Coursework: DSA, DBMS , OS  OS & Others</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col items-center">
              <div className="flex-grow p-4 bg-white shadow rounded border-t-4 border-green-400 w-full">
                <h2 className="text-gray-800 text-2xl title-font font-medium mb-3">Intermediate</h2>
                <p className="leading-relaxed text-xl tracking-tight text-blue-800">VVM Fatehpur</p>
                <p className="">Percentage : 90.6 % </p>
                <p className="my-1">Coursework: Physics, Maths, Chemistry , Hindi, English</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col items-center">
              <div className="flex-grow p-4 bg-white shadow rounded border-t-4 border-red-400">
                <h2 className="text-gray-800 text-2xl title-font font-medium mb-3">Highschool</h2>

                <p className="leading-relaxed text-xl tracking-tight text-blue-800">VVM Fatehpur</p>
                <p className="">Percentage : 93.16 % </p>
                <p className="my-1">Coursework: Science, Sc.Science, Maths, Hindi, English</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Education
