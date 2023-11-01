import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function Header() {
  const navigate = useNavigate();
  const logOut = () => {
    auth.signOut();
    navigate("/login");
  };
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mx-auto gap-x-8 lg:mx-0">
        <div className="flex items-center gap-x-6">
          <img
            src="https://tailwindui.com/img/logos/48x48/tuple.svg"
            alt=""
            className="flex-none w-16 h-16 rounded-full ring-1 ring-gray-900/10"
          />
          <h1>
            <div className="text-sm leading-6 text-gray-500">
              NWITTER <span className="text-gray-700">RELOADED</span>
            </div>
            <div className="mt-1 text-base font-semibold leading-6 text-gray-900">
              Dasoft, Inc
            </div>
          </h1>
        </div>
        <div className="flex items-center gap-x-4 sm:gap-x-6">
          <Link to="/create-tweets" className="hidden sm:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </Link>
          <Link to="/"
           
            className="hidden text-sm font-semibold leading-6 text-gray-900 sm:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </Link>
          <Link
            to="#"
            className="hidden text-sm font-semibold leading-6 text-gray-900 sm:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </Link>
          <Link
            onClick={logOut}
            to="#"
            className="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
          </Link>
          <div class="relative sm:hidden">
            <button
              type="button"
              className="block p-3 -m-3"
              id="more-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span className="sr-only">More</span>
              <svg
                className="w-5 h-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
              </svg>
            </button>
            <div
              className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="more-menu-button"
            >
              <button
                type="button"
                className="block w-full px-3 py-1 text-sm leading-6 text-left text-gray-900"
                role="menuitem"
                id="more-menu-item-0"
              >
                Copy URL
              </button>
              <Link
                to="#"
                className="block px-3 py-1 text-sm leading-6 text-gray-900"
                role="menuitem"
                id="more-menu-item-1"
              >
                Edit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
