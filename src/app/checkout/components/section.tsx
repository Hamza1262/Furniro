import Link from "next/link";

export default function Section() {
  return (
    <>
      <div className="p-6 lg:p-20 flex flex-col lg:flex-row gap-8">
        {/* Left Section (Form) */}
        <div className="lg:w-1/2 w-full">
          <div className="lg:w-2/3 mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">First name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="First name"
                />
              </div>
              <div>
                <label htmlFor="last_name" className="block mb-2">Last Name</label>
                <input
                  type="text"
                  id="last_name"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <label htmlFor="company_name" className="block mb-2">Company Name (Optional)</label>
                <input
                  type="text"
                  id="company_name"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Company Name"
                />
              </div>
              <div>
                <label htmlFor="country" className="block mb-2">Country / Region</label>
                <input
                  type="text"
                  id="country"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder=""
                />
              </div>
              <div>
                <label htmlFor="street_address" className="block mb-2">Street address</label>
                <input
                  type="text"
                  id="street_address"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder=""
                />
              </div>
              <div>
                <label htmlFor="city" className="block mb-2">Town / City</label>
                <input
                  type="text"
                  id="city"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder=""
                />
              </div>
              <div>
                <label htmlFor="province" className="block mb-2">Province</label>
                <input
                  type="text"
                  id="province"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder=""
                />
              </div>
              <div>
                <label htmlFor="zip_code" className="block mb-2">ZIP code</label>
                <input
                  type="number"
                  id="zip_code"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="00000"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2">Phone</label>
                <input
                  type="number"
                  id="phone"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="0000000000"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">Email address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="abc@def.com"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 text-white py-3 rounded-lg hover:bg-amber-600 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Right Section (Product Summary) */}
        <div className="lg:w-1/2 w-full lg:h-auto">
          <div className="px-4 py-16">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="lg:w-1/2">
                <p className="text-2xl font-semibold">Product</p>
                <p className="font-normal">Asgaard sofa <span>x</span> <span>1</span></p>
                <h3 className="font-normal">Subtotal</h3>
                <h4 className="font-normal">Total</h4>
              </div>

              <div className="lg:w-1/2 text-right">
                <p className="text-2xl font-medium">Subtotal</p>
                <p className="font-normal">Rs. 250,000.00</p>
                <h3 className="font-normal">Rs. 250,000.00</h3>
                <h4 className="text-amber-700 text-2xl font-bold">Rs. 250,000.00</h4>
              </div>
            </div>
            <hr className="my-4" />
            <div className="space-y-2">
              <input type="checkbox" id="bank_transfer" /> Direct Bank Transfer
              <br />
              <input type="checkbox" id="cash_on_delivery" /> Cash On Delivery
            </div>

            <div className="flex justify-between mt-6">
              <Link href={"/cart"}>
              <button className="bg-amber-500 text-white py-3 rounded-lg hover:bg-amber-600 transition-colors w-full lg:w-auto">
                Back to cart
              </button>
              </Link>
              <button className="bg-amber-500 text-white py-3 rounded-lg hover:bg-amber-600 transition-colors w-full lg:w-auto">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
