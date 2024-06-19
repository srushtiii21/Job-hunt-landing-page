import React from 'react'

function Navbar() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px:4">
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
            <a>Find Project</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
          </li>
        <li>
          <a>Find Freelancer</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li>
            <a>Why Prilans</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
          <li><a>Enterprise</a></li>
          </li>
      </ul>
    </div>
    <a className="text-2xl font-bold cursor-pointer">Prilans</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <details>
          <summary>Find Project</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
        </li>
      <li>
        <details>
          <summary>Find Freelancer</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li>
      <details>
          <summary>Why Prilans</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Enterprise</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <div className="flex space-x-2">
    <a className="bg-white text-black px-3 py-2 rounded-xl hover:bg-slate-800 duration-300 cursor-pointer border">Login</a>
    <a className="bg-black text-white px-3 py-2 rounded-xl hover:bg-slate-800 duration-300 cursor-pointer">Join</a>
    </div>
  </div>

</div>
    </div>
  )
}

export default Navbar
