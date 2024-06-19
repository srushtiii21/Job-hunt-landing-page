import React from 'react'

const stats = [
    { id: 1, name: 'Active Freelancers', value: '135,980+' },
    { id: 2, name: 'Open Projects', value: '477,880+' },
    { id: 3, name: 'Companies', value: '32,900+' },
  ]

function User() {
  return (
    <>
    <div>
        <h1 className="text-center font-bold text-4xl">What Users Say <br />About Us</h1>
        <h2 className="font-regular text-center text-xl">Read their testimonials to gain insights into how we've made a positive <br />impact on their overall business success.</h2>
        <h2 className="font-bold text-2xl text-center justify-start">The project quality at Prilans is better than on other freelancing <br />websites! The clients publish detailed project descriptions <br />and define what skills they are looking for. They are also ready to <br />pay good price for the suitable freelancers.</h2>
        <h2 className="text-left font-bold">Jann Johnson</h2>
        <h2 className="text-left font-semi-bold">Member since 2012</h2>
        <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
    </div>
    </>
  )
}

export default User
