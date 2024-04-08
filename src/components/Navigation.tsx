export const Navigation = () => {
  return (
    <nav className="flex flex-col z-10 gap-20 p-5 bg-neutral-950 absolute h-full top-0 left-0 shadow shadow-neutral-600">
      <div className="flex flex-col w-full place-items-center justify-between">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-700 rounded-full"></div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-neutral-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};
