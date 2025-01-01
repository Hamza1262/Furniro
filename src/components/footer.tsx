export default function Footer() {
    return (
      <>
        <footer className="bg-white">
          <div className="footer p-5 border-t-2 leading-10 border-gray-300 flex flex-wrap justify-between gap-8 sm:gap-4">
            {/* Logo and Address Section */}
            <div className="w-[14rem]">
              <h2 className="font-bold text-2xl">Funiro.</h2>
              <p className="leading-none">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
            </div>
  
            {/* Navbar Section */}
            <div>
              <h4 className="font-semibold">Navbar</h4>
              <ul className="space-y-2">
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
  
            {/* Help Section */}
            <div>
              <h4 className="font-semibold">Help</h4>
              <ul className="space-y-2">
                <li>Payment Option</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
              </ul>
            </div>
  
            {/* Newsletter Section */}
            <div>
              <h4 className="font-semibold">Newsletter</h4>
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="border border-gray-300 rounded-md p-2 mt-2"
              />
              <button
                type="submit"
                className="font-bold mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
  
          {/* Footer Bottom Section */}
          <div className="para text-center py-4">
            <hr className="my-4 border-gray-300" />
            <p className="text-sm font-light">2023 Funiro. All rights reserved</p>
          </div>
        </footer>
      </>
    );
  }
  