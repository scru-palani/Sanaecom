import React, { useState } from 'react';

const About = () => {
   const [cartItems] = useState([]);
   const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
   const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
   const [searchTerm, setSearchTerm] = useState('');
  
 
   return (
     <div className="min-h-screen flex flex-col">
       {/* Navigation Bar */}
       <nav className="bg-blue-600 text-white p-4">
         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
           <a href="/"><div className="text-2xl font-bold mb-4 md:mb-0">Sana Ecommerce
           </div></a>
           
           {/* Search Bar */}
           <div className="w-full md:w-64 mb-4 md:mb-0">
             <div className="relative">
               <input 
                 type="text" 
                 placeholder="Search products..." 
                 className="w-full px-4 py-2 bg-white text-gray-700 rounded-md"
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
               />
               <button className="absolute right-0 top-0 h-full px-4 text-gray-600">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                 </svg>
               </button>
             </div>
           </div>
           
           <div className="hidden md:flex space-x-6">
             <a href="/" className="hover:text-blue-200">Home</a>
             <a href="About" className="hover:text-blue-200">About</a>
             
             {/* Services Dropdown */}
             <div className="relative">
               <button 
                 className="hover:text-blue-200 flex items-center"
                 onClick={() => {
                   setIsServiceDropdownOpen(!isServiceDropdownOpen);
                   setIsProductDropdownOpen(false);
                 }}
               >
                 Services
                 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                 </svg>
               </button>
               {isServiceDropdownOpen && (
                 <div className="absolute z-10 bg-white text-gray-800 shadow-lg rounded-md mt-2 py-2 w-48">
                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">Service 1</a>
                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">Service 2</a>
                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">Service 3</a>
                 </div>
               )}
             </div>
             
       {/* Products Dropdown */}
       <div className="relative">
              <button 
                className="hover:text-blue-200 flex items-center"
                onClick={() => {
                  setIsProductDropdownOpen(!isProductDropdownOpen);
                  setIsServiceDropdownOpen(false);
                }}
              >
                Products
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isProductDropdownOpen && (
                <div className="absolute z-10 bg-white text-gray-800 shadow-lg rounded-md mt-2 py-2 w-48">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Category 1</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Category 2</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Category 3</a>
                </div>
              )}
            </div>
            
             
             <a href="#" className="hover:text-blue-200">Portfolio</a>
             <a href="#" className="hover:text-blue-200">Contact Us</a>
           </div>
           
           {/* Cart Icon */}
           <div className="relative">
             <button className="flex items-center hover:text-blue-200">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
               </svg>
               {cartItems.length > 0 && (
                 <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                   {cartItems.length}
                 </span>
               )}
             </button>
           </div>
           
           {/* Mobile Menu Button */}
           <div className="md:hidden">
             <button className="focus:outline-none">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
               </svg>
             </button>
           </div>
         </div>
       </nav>
 
 
       {/* Footer */}
       <footer className="bg-gray-800 text-white py-8 mt-auto">
         <div className="container mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div>
              <a href="/"><h3 className="text-xl font-bold mb-4">Sana Ecommerce</h3></a>
               <p className="mb-4">Quality products at affordable prices.</p>
               <div className="flex space-x-4">
                 <a href="#" className="hover:text-blue-400">
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                   </svg>
                 </a>
                 <a href="#" className="hover:text-blue-400">
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"></path>
                   </svg>
                 </a>
                 <a href="#" className="hover:text-blue-400">
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                     <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                   </svg>
                 </a>
               </div>
             </div>
             <div>
             <h3 className="text-xl font-bold mb-4">Quick Links</h3>
               <ul className="space-y-2">
                 <li><a href="/" className="hover:text-blue-400">Home</a></li>
                 <li><a href="About" className="hover:text-blue-400">About</a></li>
                 <li><a href="#" className="hover:text-blue-400">Services</a></li>
                 <li><a href="#" className="hover:text-blue-400">Products</a></li>
                 <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
               </ul>
             </div>
             <div>
               <h3 className="text-xl font-bold mb-4">Contact Info</h3>
               <p className="mb-2">Tamilnadu, India</p>
               <p className="mb-2">sanaworkers@gmail.com</p>
               <p className="mb-2">+91 8825935236</p>
             </div>
           </div>
           <div className="border-t border-gray-700 mt-8 pt-6 text-center">
             <p>&copy; {new Date().getFullYear()} <a href="google.com" target='blank'>Sana Industry</a>. All rights reserved.</p>
           </div>
         </div>
       </footer>
     </div>
   );
 };
 

export default About;