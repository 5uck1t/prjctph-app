import { Image } from "react-feather";

export const NavBar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between h-12">

          {/* Logo */}
          <div className="flex items-center">
            <Image className="text-indigo-600 mr-2" size={20} />
            <span className="text-base font-semibold text-gray-900">PixelVault</span>
          </div>

          {/* Nav links */}
          <div className="flex items-center space-x-4">
            <a
              href="/"
              className="text-gray-500 hover:text-indigo-600 px-2 py-1 text-xs font-medium"
            >
              Home
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}