import React, { useState } from "react";

const Contact = () => {
  const [cartItems] = useState([]);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", url: "/" },
    { name: "About", url: "/About" },
    { name: "Services", url: "/services" },
    { name: "Products", url: "/Products" },
    { name: "Contact", url: "/Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex items-center justify-between py-4">
          <a href="/" className="flex items-center space-x-2">
            <img
              src="/Sanaelogo.svg" // Replace with your actual logo path
              alt="Sana Ecom Logo"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <span className="hidden md:inline text-sm sm:text-2xl font-bold">
              Sana Ecom
            </span>
          </a>
          {/* Search Bar */}
          <div className="w-full w-full flex justify-center md:w-64 mb-4 md:mb-0 ">
            <div className="relative w-40 sm:w-64">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-3 py-1 text-sm bg-white text-gray-700 rounded-md pr-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="absolute right-0 top-0 h-full px-2 text-gray-600">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-blue-200">
              Home
            </a>
            <a href="about" className="hover:text-blue-200">
              About
            </a>

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
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {isServiceDropdownOpen && (
                <div className="absolute z-10 bg-white text-gray-800 shadow-lg rounded-md mt-2 py-2 w-48">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Service 1
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Service 2
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Service 3
                  </a>
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
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {isProductDropdownOpen && (
                <div className="relative">
                  <div className="absolute z-10 bg-white text-gray-800 shadow-lg rounded-md mt-2 py-2 w-48">
                    {categories.map((category) => (
                      <button
                        key={category}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        onClick={() => setActiveCategory(category)} // Updates the selected category
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/*   <a href="portfolio" className="hover:text-blue-200">
              Portfolio
            </a> */}

            <a href="contact" className="hover:text-blue-200">
              Contact Us
            </a>
          </div>
          {/* Cart Icon */}
          <div className="relative">
            <button className="flex items-center hover:text-blue-200">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden relative">
            {/* Logo & Hamburger */}
            <div className="p-4 flex justify-between items-center">
              {/* Hamburger Icon */}
              <button
                className="focus:outline-none"
                onClick={() => setMenuOpen(true)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Dropdown Menu */}
            <div
              className={`fixed top-0 left-0 w-full bg-white z-50 shadow-md transition-transform duration-500 ease-in-out transform ${
                menuOpen ? "translate-y-0" : "-translate-y-full"
              }`}
            >
              {/* Header with Logo & Close */}
              <div className="flex items-center justify-between p-4 border-b">
                <a href="/">
                  <img src="/Sanaelogo.svg" alt="Logo" className="w-10 h-10" />{" "}
                </a>
                {/* Logo again inside menu */}
                <button
                  onClick={() => setMenuOpen(false)}
                  className="animate-swing hover:rotate-12"
                >
                  <svg
                    className="w-6 h-6 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Scrollable Menu */}
              <nav className="flex flex-col space-y-4 p-4 h-[calc(50vh-60px)] overflow-y-auto">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-800 text-lg hover:text-blue-600"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <section className="mb-12">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
              Contact Us
            </h1>
            <a
              href="https://celadon-youtiao-d42f8f.netlify.app/"
              target="_blank"
            >
              <p className="text-2xl text-gray-800 mb-4">
                M. Palanikumar React Developer
              </p>
              <p className="text-gray-600 mb-4">
                I am a skilled professional with over 1 year of experience in
                React and PHP development, along with expertise as a Digital
                Brand Strategist and Graphic Designer. I build dynamic,
                user-centric web applications, solve real-world problems with
                clean code, and design engaging digital experiences that align
                with brand goals. With a strong foundation in full-stack
                development and creative strategy, I thrive in collaborative,
                fast-paced environments where innovation meets impact. My
                passion lies in turning complex challenges into intuitive,
                functional, and visually appealing solutions that drive growth
                for both businesses and users.
              </p>{" "}
            </a>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 ">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2">
                  Website Development Services
                </h3>
                <ul className="text-gray-600 list-disc list-inside space-y-1">
                  <li>MERN Stack: MongoDB, Express.js, React, Node.js</li>
                  <li>LAMP Stack: Linux, Apache, MySQL, PHP</li>
                  <li>Deployment: Vercel, Netlify</li>
                  <li>Git & GitHub version control</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2">
                  Digital Marketing Services
                </h3>
                <div className="space-y-8 text-gray-700">
                  {/* SEO */}
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      🔍 Search Engine Optimization (SEO)
                    </h3>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                      <li>On-page SEO (meta tags, headings, alt text)</li>
                      <li>
                        Technical SEO (site speed, schema markup, sitemaps)
                      </li>
                      <li>Keyword research & competitor analysis</li>
                      <li>Link building strategies</li>
                      <li>Google Search Console setup</li>
                      <li>SEO audits & reporting</li>
                    </ul>
                  </div>

                  {/* SEM */}
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      🎯 Search Engine Marketing (SEM)
                    </h3>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                      <li>Google Ads (Search, Display, Video)</li>
                      <li>Bing Ads setup</li>
                      <li>Campaign planning & keyword bidding</li>
                      <li>A/B testing ad creatives</li>
                      <li>Conversion tracking & ROI analysis</li>
                    </ul>
                  </div>

                  {/* SMM */}
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      📱 Social Media Marketing (SMM)
                    </h3>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                      <li>Facebook, Instagram, LinkedIn, Twitter marketing</li>
                      <li>Paid advertising (Meta Ads Manager, LinkedIn Ads)</li>
                      <li>Content calendars & strategy</li>
                      <li>Hashtag optimization</li>
                      <li>Influencer outreach & collaboration</li>
                    </ul>
                  </div>

                  {/* Email Marketing */}
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      📧 Email Marketing
                    </h3>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                      <li>
                        Email campaign design & automation (Mailchimp,
                        Sendinblue, Klaviyo)
                      </li>
                      <li>List segmentation</li>
                      <li>A/B testing subject lines & CTAs</li>
                      <li>Drip campaigns</li>
                      <li>Analytics (open rate, click-through, bounce rate)</li>
                    </ul>
                  </div>

                  {/* Analytics */}
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      📊 Analytics & Reporting
                    </h3>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                      <li>Google Analytics (GA4)</li>
                      <li>Google Tag Manager</li>
                      <li>Conversion rate optimization (CRO)</li>
                      <li>Dashboard creation (Looker Studio, Excel, etc.)</li>
                    </ul>
                  </div>

                  {/* E-Commerce Marketing */}
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      🛍️ E-Commerce Marketing
                    </h3>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                      <li>Product feed optimization (Google Shopping)</li>
                      <li>Shopify / WooCommerce marketing setup</li>
                      <li>Abandoned cart recovery strategies</li>
                      <li>Seasonal & retargeting campaigns</li>
                    </ul>
                  </div>

                  {/* Content Marketing */}
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      🧠 Content Marketing
                    </h3>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                      <li>Blog strategy & SEO writing</li>
                      <li>Copywriting for ads & landing pages</li>
                      <li>Video marketing (YouTube optimization)</li>
                      <li>Visual content tools (Canva, Figma, Adobe)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="space-y-4 text-gray-700">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    🎨 Logo Designing
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Brand research and competitor analysis</li>
                    <li>Typography and font pairing expertise</li>
                    <li>Vector design using Adobe Illustrator / Figma</li>
                    <li>Scalable logo creation (responsive logos)</li>
                    <li>Color theory and palette selection</li>
                    <li>Monogram, wordmark, and icon-based logo design</li>
                    <li>Logo grid systems and symmetry usage</li>
                    <li>
                      High-resolution export in multiple formats (SVG, PNG, PDF)
                    </li>
                    <li>Black & white, colored, and inverted logo variants</li>
                    <li>Minimalist, 3D, and abstract style variations</li>
                    <li>Logo mockups for print, web, and social media</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <a href="/">
                <h3 className="text-xl font-bold mb-4">Sana Ecommerce</h3>
              </a>
              <p className="mb-4">Quality products at affordable prices.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-400">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-400">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="hover:text-blue-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="about" className="hover:text-blue-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Services
                  </a>
                </li>
                <li>
                  <a href="products" className="hover:text-blue-400">
                    Products
                  </a>
                </li>
                <li>
                  <a href="contact us" className="hover:text-blue-400">
                    Contact Us
                  </a>
                </li>
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
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <a href="/" target="blank">
                Sana Industry
              </a>
              . All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
