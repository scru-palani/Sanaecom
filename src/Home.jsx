import React, { useState } from "react";

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPopupId, setShowPopupId] = useState(null);
  const [showCart, setShowCart] = useState(false);

  const links = [
    { name: "Home", url: "/" },
    { name: "About", url: "/About" },
    { name: "Services", url: "/services" },
    { name: "Products", url: "/Products" },
    { name: "Contact", url: "/Contact" },
  ];

  // Product categories
  const categories = [
    "All",
    "Furniture",
    "Mobile Gadgets",
    "Steel",
    "Books",
    "Toys",
  ];

  // Sample products with categories
  const allProducts = [
    {
      id: 1,
      name: "Modern Sofa",
      price: 599.99,
      category: "Furniture",
      image: "/table.jpeg",
    },
    {
      id: 2,
      name: "Dining Table",
      price: 349.99,
      category: "Furniture",
      image: "/table.jpeg",
    },
    {
      id: 3,
      name: "Smartphone X",
      price: 899.99,
      category: "Mobile Gadgets",
      image: "/mobile.jpeg",
    },
    {
      id: 4,
      name: "Wireless Earbuds",
      price: 129.99,
      category: "Mobile Gadgets",
      image: "/mobile.jpeg",
    },
    {
      id: 5,
      name: "Steel Desk",
      price: 249.99,
      category: "Steel",
      image: "/steel.jpeg",
    },
    {
      id: 6,
      name: "Steel Bookshelf",
      price: 189.99,
      category: "Steel",
      image: "/steel.jpeg",
    },
    {
      id: 7,
      name: "Fantasy Novel",
      price: 19.99,
      category: "Books",
      image: "/aibook.jpeg",
    },
    {
      id: 8,
      name: "Cookbook",
      price: 29.99,
      category: "Books",
      image: "/aibook.jpeg",
    },
    {
      id: 9,
      name: "Teddy Bear",
      price: 24.99,
      category: "Toys",
      image: "/toy.jpeg",
    },
    {
      id: 10,
      name: "Remote Car",
      price: 49.99,
      category: "Toys",
      image: "/toy.jpeg",
    },
    {
      id: 11,
      name: "Office Chair",
      price: 199.99,
      category: "Furniture",
      image: "/table.jpeg",
    },
    {
      id: 12,
      name: "Tablet Pro",
      price: 499.99,
      category: "Mobile Gadgets",
      image: "/mobile.jpeg",
    },
    {
      id: 13,
      name: "Steel Cabinet",
      price: 299.99,
      category: "Steel",
      image: "/steel.jpeg",
    },
    {
      id: 14,
      name: "Science Book",
      price: 34.99,
      category: "Books",
      image: "/aibook.jpeg",
    },
    {
      id: 15,
      name: "Building Blocks",
      price: 39.99,
      category: "Toys",
      image: "/toy.jpeg",
    },
  ];

  // Filter products based on search term and active category
  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

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
            <button
              className="flex items-center hover:text-blue-200"
              onClick={() => setShowCart(true)}
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

          {/* Cart Modal */}
          {showCart && (
            <div className="fixed inset-0 z-50 flex">
              {/* Semi-transparent background for the rest of the screen */}
              <div
                className="flex-grow"
                onClick={() => setShowCart(false)}
              ></div>

              {/* Cart Sidebar */}
              <div className="w-full sm:w-96 bg-white h-full shadow-2xl relative overflow-y-auto">
                <button
                  onClick={() => setShowCart(false)}
                  className="absolute top-4 right-4 text-gray-600 hover:text-black"
                >
                  ✕
                </button>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-4 text-black">
                    Your Cart
                  </h2>
                  <ul className="divide-y divide-gray-200 mb-4 text-black">
                    {cartItems.map((item, index) => (
                      <li key={index} className="py-2 flex justify-between">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded border border-gray-300"
                        />
                        <span>{item.name}</span>
                        <span>₹{item.price}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-right font-bold mb-4 text-black">
                    Total: ₹
                    {cartItems
                      .reduce((total, item) => total + item.price, 0)
                      .toFixed(2)}
                  </p>
                  <button className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700">
                    Proceed to Payment
                  </button>
                </div>
              </div>
            </div>
          )}

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

      {/* Mobile Menu Button */}

      {/* Category Filter Buttons */}
      <div className="hidden md:inline container mx-auto px-4 py-8">
        <div className="flex flex-wrap lg:justify-center sm:justify-left gap-4 ">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-md ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              } transition duration-300`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {activeCategory === "All" ? "Our Products" : activeCategory}
        </h2>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No products found matching your search.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-1">
                    {product.category}
                  </p>
                  <p className="text-gray-700 font-semibold mb-4">
                    ₹{product.price}
                  </p>

                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => setShowPopupId(product.id)}
                      className="bg-gray-200 text-gray-800 px-3 py-2 rounded text-sm hover:bg-gray-300 transition"
                    >
                      View Product
                    </button>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>

                {/* Modal Popup */}
                {showPopupId === product.id && (
                  <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow-2xl border-2 w-80 relative">
                      <button
                        onClick={() => setShowPopupId(null)}
                        className="absolute top-2 right-3 text-gray-600 hover:text-black"
                      >
                        ✕
                      </button>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-40 object-cover rounded mb-4"
                      />
                      <h2 className="text-xl font-bold mb-1">{product.name}</h2>
                      <p className="text-gray-600 mb-1">
                        Category: {product.category}
                      </p>
                      <p className="text-gray-800 font-semibold">
                        ₹{product.price}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

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
                  <a href="contact" className="hover:text-blue-400">
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

export default Home;
