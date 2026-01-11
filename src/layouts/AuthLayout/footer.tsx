import { Instagram } from "react-feather"
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 lg:px-6">

        <div className="grid p-3 grid-cols-1 md:grid-cols-3 gap-8 text-left">

          {/* PixelVault */}
          <div>
            <h3 className="text-sm font-semibold mb-2">PixelVault</h3>
            <p className="text-gray-400 text-xs">
              My personal gallery for sharing photos from car meets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-2">Quick Links</h3>
            <Link to="/" className=" text-gray-400 hover:text-white text-xs">
              Home
            </Link>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold mb-2">Connect</h3>
            <div className="flex space-x-2">
              <a
                href="https://instagram.com/prjct.ph"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white text-xs space-x-1"
              >
                <Instagram size={16} />
                <span>@prjct.ph</span>
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-4 pt-4 text-center text-gray-400 text-xs">
          <p className="mb-0">&copy; 2025 PixelVault. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}