import React from 'react'
const Navbar = () => {
  return (
    <>
      <ul className="p-6 flex   bg-gradient-to-r from-blue-200 via-blue-500 border-b-2 border-blue-700">

        <li className="mr-6">
          <a href="/" className="text-blue-500 hover:text-blue-800">
            {" "}
            Home
          </a>
        </li>

        <li className="mr-6">
          <a href="/" className="text-blue-500 hover:text-blue-800">
            {" "}
            About
          </a>
        </li>

        <li className="mr-6">
          <a href="/" className="text-blue-500 hover:text-blue-800">
            {" "}
            Contact US
          </a>
        </li>

        <li className="mr-6">
          <a href="/" className="cursor-not-allowed text-grey-500 hover:text-grey-800">
            {" "}
            Disable
          </a>
        </li>
      </ul>
    </>
  )
}

export default Navbar;