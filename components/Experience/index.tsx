import SkillList from "../Technologies/SkillList"

const Experience = () => {
    return (
        <section className="pt-20 pb-12 sm:py-12 px-6">
            <div className="flex justify-around flex-col">
                <div className="flex flex-row pb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-4" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 3c1.918 0 3.52 1.35 3.91 3.151a4 4 0 0 1 2.09 7.723l0 7.126h-12v-7.126a4 4 0 1 1 2.092 -7.723a4 4 0 0 1 3.908 -3.151z"></path>
                        <path d="M6.161 17.009l11.839 -.009"></path>
                    </svg>
                    <h1 className="first-letter:text-xl text-lg font-bold">Experiencia</h1>
                </div>
                <div>

                    <div className="flex flex-col md:flex-row justify-between items-center py-6 px-6 sm:px-20">

                        <div className="py-2 sm:py-0 w-full sm:w-auto">
                            <p className="font-semibold text-xs sm:text-sm text-right sm:text-left">Jun. 2019 - Jun. 2020</p>
                            <p className="font-medium text-xxs sm:text-xs text-right sm:text-left text-gray-300">Contrato de prácticas</p>

                        </div>
                        <div className="py-2 sm:py-0">
                            <p className="font-semibold text-md whitespace-nowrap">C.E.I.T - Centro Investigación </p>
                            <p className="text-sm pt-2">Creación y mantenimiento de 3 apps. en Android Java. </p>
                        </div>


                        <div className="py-2 sm:py-0 w-max ">
                            <SkillList skills={[
                                {
                                    id: "asdasd",
                                    image_path: "/skills/android-icon.webp",
                                    name: "Android"
                                },
                                {
                                    id: "qqqqq",
                                    image_path: "/skills/aws-icon.webp",
                                    name: "Amazon Web Service"
                                },
                                {
                                    id: "asdaeeeeesd",
                                    image_path: "/skills/python-icon.webp",
                                    name: "Python"
                                },
                                {
                                    id: "asdrrrrasd",
                                    image_path: "/skills/postgresql-icon.webp",
                                    name: "PostgreSQL"
                                },
                            ]} />

                        </div>

                    </div>
                    <hr className="mx-24 sm:mx-64 border-dotted border-gray-300" />

                    <div className="flex flex-col sm:flex-row justify-between items-center py-6 px-6 sm:px-20">

                        <div className="py-2 sm:py-0 w-full sm:w-auto">
                            <p className="font-semibold text-xs sm:text-sm text-right sm:text-left whitespace-nowrap">Jun. 2019 - Jun. 2020</p>
                            <p className="font-medium text-xxs sm:text-xs text-right sm:text-left text-gray-300">Contrato de prácticas</p>

                        </div>
                        <div className="py-2 sm:py-0 sm:px-12 sm:w-1/2 flex-grow">
                            <p className="font-semibold text-md whitespace-nowrap">C.E.I.T - Centro Investigación </p>
                            <p className="text-sm pt-2">Lorem ipsum dolor sit amet consectetur adipisicing eLoremlit. Corporis, ipsum commodi modi quae ipsa qui repudiandae exercitationem voluptas neque, soluta nemo alias incidunt esse? Numquam assumenda id amet omnis totam?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo dignissimos iste, illo amet tempore dolore. Quia porro veniam ipsam autem natus nam illum praesentium officia repellat! Alias molestias quasi officiis.LoremLorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt qui sequi animi nam similique iusto, vitae facere facilis aspernatur blanditiis culpa at quo exercitationem laborum ab fugit dolore laboriosam quasi. </p>
                        </div>


                        <div className="py-2 sm:py-0 ">
                            <SkillList skills={[
                                {
                                    id: "asdasd",
                                    image_path: "/skills/react-js-icon.webp",
                                    name: "ReactJS"
                                },
                                {
                                    id: "qqqqq",
                                    image_path: "/skills/typescript-icon.webp",
                                    name: "TypeScript"
                                },
                               
                            ]} />

                        </div>

                    </div>
                </div>




            </div>

        </section>
    )
}

export default Experience