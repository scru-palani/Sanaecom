import React, { useState } from 'react';

const Portfolio = () => {
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
             <a href="about" className="hover:text-blue-200">About</a>
             
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
                   <a href=" services" className="block px-4 py-2 hover:bg-gray-100">Service 1</a>
                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">Service 2</a>
                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">Service 3</a>
                 </div>
               )}
             </div>
             
       {/* Products Dropdown */}
       <a href="products" className="hover:text-blue-200">Products</a>
             <a href="portfolio" className="hover:text-blue-200">Portfolio</a>
             <a href="contact" className="hover:text-blue-200">Contact Us</a>
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
 
  {/* Main Content */}
  <main className="flex-grow py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <section className="mb-12">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Portfolio</h1>
            <p className="text-2xl font-bold mb-4 text-gray-800">React Developer, Digital Marketing Specialist, Graphic Desiner</p>
            <p className="text-gray-600 mb-4">
            To work in a competitive environment on challenging
          assignments to utilize my knowledge & talents for 
          the enhancement of the organization and my personal  
          fronts. Strong skills include React, Php, and JavaScript
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              My Skill
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <img src="react.png" alt="image" className="w-100 h-48 py-2 px-6 object-cover rounded-lg" />
                <p className="text-xl px-6 font-semibold mb-2">React</p>
              </div>
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <img src="netlify.png" alt="image" className="w-100 h-48 py-2 px-6 object-cover rounded-lg" />
                <p className="text-xl px-6 font-semibold mb-2">Netlify</p>
              </div>
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <img src="experience.png" alt="image" className="w-100 h-48 py-2 px-6 object-cover rounded-lg" />
                <p className="text-xl px-6 font-semibold mb-2">Experience</p>
              </div>
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <img src="javascript.png" alt="image" className="w-100 h-48 py-2 px-6 object-cover rounded-lg" />
                <p className="text-xl px-6 font-semibold mb-2">Javascript</p>
              </div>
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <img src="teamwork.png" alt="image" className="w-100 h-48 py-2 px-6 object-cover rounded-lg" />
                <p className="text-xl px-6 font-semibold mb-2">Teamwork</p>
              </div>
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <img src="problem-solving.png" alt="image" className="w-100 h-48 py-2 px-6 object-cover rounded-lg" />
                <p className="text-xl px-6 font-semibold mb-2">Problem Solving</p>
              </div>
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <img src="nodejs.png" alt="image" className="w-100 h-48 py-2 px-6 object-cover rounded-lg" />
                <p className="text-xl px-6 font-semibold mb-2">Nodejs</p>
              </div>
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <img src="github.png" alt="image" className="w-100 h-48 py-2 px-6 object-cover rounded-lg" />
                <p className="text-xl px-6 font-semibold mb-2">Github</p>
              </div>
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <img src="creativity.png" alt="image" className="w-100 h-48 py-2 px-6 object-cover rounded-lg" />
                <p className="text-xl px-6 font-semibold mb-2">Creativity</p>
              </div>
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <img src="css-3.png" alt="image" className="w-100 h-48 py-2 px-6 object-cover rounded-lg" />
                <p className="text-xl px-6 font-semibold mb-2">Css</p>
              </div>
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <img src="html.png" alt="image" className="w-100 h-48 py-2 px-6 object-cover rounded-lg" />
                <p className="text-xl px-6 font-semibold mb-2">Html</p>
              </div>
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <img src="time-management.png" alt="image" className="w-100 h-48 py-2 px-6 object-cover rounded-lg" />
                <p className="text-xl px-5 font-semibold mb-2">Time Management</p>
              </div>
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <img src="mobile.jpeg" alt="image" className="w-100 h-48 py-2 px-6 object-cover rounded-lg" />
                <p className="text-xl px-6 font-semibold mb-2">Design</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Our Project
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2">Ecommerce</h3>
                <p className="text-gray-600">
                I’m palanikumar, a web developer and digital marketing with a strong
              grasp of web technologies. I graduated
              from Alagappa University. 
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2">Event Management System</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  quam velit.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2">Library Management system</h3>
                <a href="" className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  quam velit.
                </a>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <p className="text-2xl font-bold mb-4 text-gray-800">About</p>
            <p className="text-gray-600 mb-4">
            I’m palanikumar, a web developer and digital marketing with a strong
              grasp of web technologies. I graduated
              from Alagappa University. where I mastered the art of pair programming and collaborative
              coding. My unique experience at Microverse, working remotely and
              collaboratively on projects with tight deadlines, sets me apart.
              In a short time, I’ve acquired expertise in various technologies,
              as showcased on my GitHub profile. I have successfully completed
              more than 10 projects, some of which were collaborative efforts,
              demonstrating my ability to work effectively as part of a team
              while delivering high-quality results. This experience has not
              only honed my technical skills but also strengthened my
              communication, time management, and problem-solving abilities,
              making me a valuable asset in any professional setting.
            </p>
          </section>

        </div>
      </main>



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
                 <li><a href="about" className="hover:text-blue-400">About</a></li>
                 <li><a href="#" className="hover:text-blue-400">Services</a></li>
                 <li><a href="products" className="hover:text-blue-400">Products</a></li>
                 <li><a href="contact" className="hover:text-blue-400">Contact Us</a></li>
               </ul>
             </div>
             <div>
               <h3 className="text-xl font-bold mb-4">Contact Info</h3>
               <p className="mb-2">Tamilnadu, India</p>
               <p className="mb-2">sanaworkers@gmail.com</p>
               <p className="mb-2">+91 8888888888</p>
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
 

export default Portfolio;