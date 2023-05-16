const Skills = () => {
    return (
        <section className="py-4 sm:py-12">
            <div className="flex justify-between flex-col md:flex-row">
                <div className="flex flex-row px-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-4" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M8.5 13.5l-1.5 -1.5l1.5 -1.5"></path>
                        <path d="M15.5 10.5l1.5 1.5l-1.5 1.5"></path>
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                        <path d="M13 9.5l-2 5.5"></path>
                    </svg>
                    <h1 className="first-letter:text-xl text-lg font-bold">Tecnologías</h1>
                </div>

                {/* <div className="flex flex-col items-end justify-end pt-4">

                    <button type="button" className="flex items-center justify-end py-1.5 px-3 sm:py-2.5 sm:px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        <p className="text-xs sm:text-sm flex items-center text-gray-400 font-medium">Actualizar</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-slate-400 ml-2 h-5 w-5" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"></path>
                            <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"></path>
                        </svg>
                    </button>
                    <div className="flex flex-row">
                        <p className="text-xxs flex items-center justify-end text-slate-200 font-medium">14/05/2023 a las 15:43h</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="m-2 h-4 w-4 stroke-slate-200" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M12 12l2 3"></path>
                            <path d="M12 7v5"></path>
                        </svg>
                    </div>

                </div> */}
            </div>

            <div className="flex flex-row flex-wrap justify-center divide-x-0 py-6 sm:py-12">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-3 h-12 w-12" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path>
                        <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path>
                        <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path>
                        <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path>
                        <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path>
                        <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path>
                        <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path>
                    </svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-3 h-12 w-12" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path>
                        <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path>
                    </svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-3 h-12 w-12" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                        <path d="M12 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                        <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                        <path d="M12 15v-6"></path>
                        <path d="M15 11l-2 -2"></path>
                        <path d="M11 7l-1.9 -1.9"></path>
                        <path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z"></path>
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default Skills