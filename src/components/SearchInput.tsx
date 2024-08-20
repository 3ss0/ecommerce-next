import { Combobox, ComboboxInput } from "@headlessui/react";
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid';

const SearchInput: React.FC = () => {
    return (
        <Combobox>
            <div className="relative">
                <div className="relative w-full text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-600 focus:ring-white sm:text-sm overflow-hidden">
                    <ComboboxInput
                        className="w-full border-none focus:ring-0 p-2 pl-10 text-sm leading-5 text-gray-900"
                        placeholder="Search..."
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <MagnifyingGlassCircleIcon
                            className="w-5 h-5 text-gray-400"
                            aria-hidden="true"
                        />
                    </div>
                </div>
            </div>
        </Combobox>
    );
}

export default SearchInput;