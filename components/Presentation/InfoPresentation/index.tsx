const InfoPresentation = () => {
    return (
        <div className="absolute z-30 -bottom-14 left-1/2 transform -translate-x-1/2 w-5/6 sm:w-2/4 h-22 sm:h-28 shadow-lg dark:bg-gray-800 bg-white rounded-full border border-gray-200 dark:text-white dark:border-gray-600">
            <div className="flex h-full flex-row justify-between items-center px-12">
                <div className="flex flex-col">
                    <div className="flex items-center my-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mr-4" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 20m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                            <path d="M10 20h-6"></path>
                            <path d="M14 20h6"></path>
                            <path d="M12 15l-2 -2h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-3l-2 2z"></path>
                            <path d="M12 6v2"></path>
                            <path d="M12 11v.01"></path>
                        </svg>
                        <div className="">
                            <p className="font-semibold text-xs sm:text-lg">Situacion:</p>
                            <hr className="w-3/4 pb-2" />
                            <p className="w-3/4 text-xxs sm:text-md">En búsqueda activa de empleo</p>
                        </div>

                    </div>
                </div>
                

                <div className="flex divide-x flex-col ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-4 w-14 h-14" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M13 19h-8a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6"></path>
                        <path d="M3 7l9 6l9 -6"></path>
                        <path d="M16 22l5 -5"></path>
                        <path d="M21 21.5v-4.5h-4.5"></path>
                    </svg>
                </div>

            </div>
        </div>
    )
}

export default InfoPresentation