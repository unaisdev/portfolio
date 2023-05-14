import Image from "next/image"

const AboutMe = () => {
    return (
        <section>
            <h1 className="first-letter:text-xl font-medium pl-12">Últimos proyectos</h1>
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