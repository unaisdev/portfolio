import Image from "next/image"

const AboutMe = () => {
    return (
        <section>
            <div className="flex justify-between flex-col md:flex-row">
                <h1 className="first-letter:text-xl sm:text-md font-medium pl-12">Últimos proyectos</h1>
                <h2 className="first-letter:text-xl text-sm text-gray-300 font-medium flex justify-end pr-12">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-refresh stroke-slate-300" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"></path>
                        <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"></path>
                    </svg>
                    14/05/2023
                </h2>

            </div>
            <div className="flex flex-col py-8 px-12">
                <div className="flex flex-col md:flex-row">
                    <div className="col border-gray-900 border-t-2 border-t-gray-400 rounded-xl shadow-md p-10 md:mx-10 my-4">
                        <Image
                            src={""}
                            width={200}
                            height={150}
                            alt="" />
                        <div>
                            <h2 className="first-letter:text-xl font-semibold py-4">Aplicacion móvil gestión de reservas</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illum provident magni vitae, assumenda laboriosam dolore saepe, illo minima culpa odio deleniti porro quas iure explicabo corrupti ullam velit esse!</p>
                        </div>
                    </div>

                    <div className="col border-gray-900 border-t-2 border-t-gray-400 rounded-xl shadow-md p-10 md:mx-10 my-4">
                        <Image
                            src={""}
                            width={200}
                            height={150}
                            alt="" />
                        <div>
                            <h2 className="first-letter:text-xl font-semibold py-4">Aplicacion móvil gestión de reservas</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illum provident magni vitae, assumenda laboriosam dolore saepe, illo minima culpa odio deleniti porro quas iure explicabo corrupti ullam velit esse!</p>
                        </div>
                    </div>

                    <div className="col border-gray-900 border-t-2 border-t-gray-400 rounded-xl shadow-md p-10 md:mx-10 my-4">
                        <Image
                            src={""}
                            width={200}
                            height={150}
                            alt="" />
                        <div>
                            <h2 className="first-letter:text-xl font-semibold py-4">Aplicacion móvil gestión de reservas</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illum provident magni vitae, assumenda laboriosam dolore saepe, illo minima culpa odio deleniti porro quas iure explicabo corrupti ullam velit esse!</p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default AboutMe