export const Banner = () => {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-900 py-2.5 px-6 sm:px-3.5 sm:before:flex-1">
      <div className="flex flex-wrap items-center gap-y-2 gap-x-4">
        <p className="text-sm leading-6 text-white">
          <strong className="font-semibold">BrainStorm Task </strong>
        </p>
        <a className="flex-none rounded-full bg-gray-0 py-1 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
          See Here <span aria-hidden="true">&darr;</span>
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px] text-white"
        >
          X<span className="sr-only">Close</span>
        </button>
      </div>
    </div>
  );
};
