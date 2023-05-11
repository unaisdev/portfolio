import Image from "next/image"
import './styles.css'
import SocialMediaButtons from "../SocialMediaButtons"

const AboutMe = () => {
    return (
        <section className="py-10 px-8">
            <div className="grid grid-cols-2 justify-center">
                <div className="flex col flex-col justify-center items-end ">
                    <div className="flex items-end">
                        <p className="command">{"// Aqui describo quién soy"}</p>
                    </div>
                    <div>
                        <h1 className="text-3xl text-right">Unai Canales Sirvent</h1>
                        <h2 className="text-xl text-right">Fullstack Developer</h2>
                    </div>
                    <div className="">
                        <SocialMediaButtons />

                    </div>

                </div>

                <div className="flex col flex-col justify-center items-start">
                    <Image
                        width={550}
                        height={350}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        src={"/programming.png"}
                        alt="Unai Canales Sirvent, desarrollador de aplicaciones multiplataforma"
                    />
                </div>

            </div>
        </section>
    )
}

export default AboutMe