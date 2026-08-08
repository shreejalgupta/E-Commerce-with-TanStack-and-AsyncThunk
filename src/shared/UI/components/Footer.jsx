import React from 'react'

const Footer = () => {
  return (
      <footer className="border-t border-blue-200 bg-blue-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="col-span-2 sm:col-span-1">
              <span className="text-lg font-extrabold tracking-tight text-gray-800">
                Sky<span className="text-[#8c5226]">Mart</span>
              </span>
              <p className="mt-2 max-w-xs text-sm text-gray-600">
                Beauty essentials people actually finish the bottle on.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Shop</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>Makeup</li>
                <li>Skincare</li>
                <li>Fragrance</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Company</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>About</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Help</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>Shipping</li>
                <li>Returns</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-blue-200 pt-6 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} SkyMart. All rights reserved.
          </div>
        </div>
      </footer>
    
  )
}

export default Footer
