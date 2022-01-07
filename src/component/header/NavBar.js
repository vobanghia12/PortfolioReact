import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";


const navigation = [
  { name: "About", href: "/#About" },
  { name: "Skills", href: "/#Skills" },
  { name: "Projects", href: "/#Projects" },
  { name: "Contact", href: "/#Contact" },
];
const NavBar = (props) => {
  return (
    <Popover >
      <div className={props.className + "px-4 fixed top-0 sm:px-6 lg:px-8 w-full py-4 drop-shadow-xl transition duration-500"}>
        <nav className= "flex justify-between text-lg mx-7 items-center">
          <div className="flex items-cente w-full md:w-auto">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="/" className= "text-2xl font-bold">
                Nghia Vo
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="bg-gray-100 rounded-md p-2 inline-flex items-center drop-shadow-md justify-center text-black-800 hover:bg-gray-100">
                  <MenuIcon className="h-8 w-8" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <ul className="font-medium hidden md:flex z-20">
            {navigation.map((item) => (
              <li>
                <a
                  key={item.name}
                  href={item.href}
                  className="px-5 py-1 mx-3 text-gray-500 from-left button_slide slide_right font-bold scroll-smooth"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Transition
        as={Fragment}
        enter="duration-300 ease-out "
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-300 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 top-0 right-0 p-2 transition md:hidden w-80 h-full"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden h-full">
            <div className="px-5 pt-4 flex items-center justify-end">
              <div className="-mr-2">
                <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-black-800 bg-gray-100 drop-shadow-md">
                  <XIcon className="h-8 w-8" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="text-center px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base text-gray-500 font-bold button_slide:block slide_right"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default NavBar;
