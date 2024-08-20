

import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon , HeartIcon , UserIcon , ShoppingBagIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import SearchInput from './SearchInput';
import NavDropdown from './NavDropdown';

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <header>
            <div className="border-b-2">
                <div className="container py-5">
                    <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                        <div className="flex lg:flex-1">
                            <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            />
                            </a>
                        </div>
                        <div className="lg:grow">
                            <SearchInput />
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4">
                            <button
                                type="button"
                                className="inline-flex hover:text-blue-700 items-center justify-center rounded-md p-2.5 text-gray-700"
                            >
                                <HeartIcon aria-hidden="true" className="w-8 h-8" />
                            </button>
                            <button
                                type="button"
                                className="inline-flex hover:text-blue-700 items-center justify-center rounded-md p-2.5 text-gray-700"
                            >
                                <UserIcon aria-hidden="true" className="h-8 w-8" />
                            </button>
                            <button
                                type="button"
                                className="inline-flex hover:text-blue-700 items-center justify-center rounded-md p-2.5 text-gray-700"
                            >
                                <ShoppingBagIcon aria-hidden="true" className="h-8 w-8" />
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
            <div className='border-b-2'>
                <div className="container">
                    <nav aria-label="Global" className="bg-white flex items-center justify-between px-6 py-3 lg:px-8">
                        <div className="sm:hidden lg:flex lg:gap-x-10 lg:items-center ">
                            <NavDropdown />
                            {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                                {item.name}
                            </a>
                            ))}
                        </div>
                    </nav>
                </div>
            </div>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                    alt=""
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                    />
                </a>
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
                </div>
                <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                        <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                        {item.name}
                        </a>
                    ))}
                    </div>
                    <div className="py-6">
                    <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                        Log in
                    </a>
                    </div>
                </div>
                </div>
            </DialogPanel>
            </Dialog>
        </header>
    );
};

export default Header;
