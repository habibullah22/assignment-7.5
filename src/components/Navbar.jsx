import React from "react";

const Navbar = () => {
  return (
   (
    <div>
      <nav className="px-8 py-4 w-full container mx-auto flex justify-between items-center shadow-md ">
        <h1 className="md:text-xl text-sm font-bold">CS — Ticket System</h1>

       
        <div className="md:flex hidden items-center gap-6">
          <a href="#" className="text-gray-600">Home</a>
          <a href="#" className="text-gray-600">FAQ</a>
          <a href="#" className="text-gray-600">Changelog</a>
          <a href="#" className="text-gray-600">Blog</a>
          <a href="#" className="text-gray-600">Download</a>
          <a href="#" className="text-gray-600">Contact</a>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
            + New Ticket
          </button>
        </div>

    
    
      </nav>

    
      {open && (
        <div className="md:hidden px-8 pb-4 flex flex-col gap-3">
          <a href="#" className="text-gray-600">Home</a>
          <a href="#" className="text-gray-600">FAQ</a>
          <a href="#" className="text-gray-600">Changelog</a>
          <a href="#" className="text-gray-600">Blog</a>
          <a href="#" className="text-gray-600">Download</a>
          <a href="#" className="text-gray-600">Contact</a>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg w-fit">
            + New Ticket
          </button>
        </div>
      )}
    </div>
  ));
};

export default Navbar;
<h1>Navbar</h1>;
