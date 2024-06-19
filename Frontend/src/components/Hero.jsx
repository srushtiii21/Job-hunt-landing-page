import React from 'react'
import search from "../../public/search.jpg";
function Hero() {
  return (
<>
<div className="max-w-screen-2xl container mx-auto md:px-20 px:4 flex flex-col md:flex-row">
    <div className="w-full md:w-1/2 mt-12 md:mt-32">
    <div className="relative rounded-full- px-3 py-1 text-sm leading-6 text-green-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Latest Release.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Global invoicing <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
    <div className="space-y-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Find<img src={search} className="w-10 h-10" alt=""/>Projects Opportunities.
            Boost Your Career.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Unlock opportunities to earn reliable and stable
            income,all while working from home.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-black 600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                I want to work
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Do you want to hire <span aria-hidden="true">→</span>
              </a>
            </div>
    </div>
    </div>
    <div className="w-full md:w-1/2">

    <div className="card card-compact w-100 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Congratulations!</h2>
    <p>You’re accepted to work on a project Akmal
    Nasrulloh.</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>

<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h3 className="card-title">Project 1</h3>
    <div className="flex flex-col gap-4 w-52">
    <div className="skeleton h-4 w-21"></div>
  <div className="skeleton h-4 w-28"></div>
</div>
    <div className="card-actions justify-end">
      <button className="btn bg-black text-white">Apply Now</button>
    </div>
  </div>
</div>

<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Project 2</h2>
    <div className="flex flex-col gap-4 w-52">
    <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
</div>
    <div className="card-actions justify-end">
    <button className="btn relative rounded-xl" disabled="disabled">Applied</button>
    </div>
  </div>
</div>

<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Harry Picaso</h2>
    <p>UI/UX Designer</p>
    <div className="card-actions justify-end">
      <button className="btn bg-black text-white">Hire Now</button>
    </div>
  </div>
</div>

</div>
</div>
<div className="card w-full bg-60 image-full">
  
  <div className="card-body ">
    <h2 className="card-title ">
      
    </h2>
    <p>Interactive demo</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
</>
  )
}

export default Hero
