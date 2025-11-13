const AboutHero = () => {
    return (
        <>
        <section id="about-top">

            <div className="relative overflow-hidden">
            <img

                className="w-full h-[500px] sm:h-auto md:max-h-[60vh] object-cover"
                src="/images/cornellHome.png"
            />
            <div className="absolute inset-0 bg-black opacity-25"></div>
            <div className="absolute inset-0 flex flex-col justify-end items-start mb-20 max-w-[1000px] mx-5 mt-5 md:mx-20">
            <p className="font-light text-18 !text-white">
                        About
                </p>
                <h1 className="text-56 font-[300] text-start !text-white md:leading-normal leading-none mb-1">
                A team that dreams and executes
                </h1>

            </div>
            </div>
        </section>

        <section className="bg-light-blue py-10 md:px-20 px-5 flex lmd:flex-row flex-col justify-around items-center gap-5 p-5">
       
        <div claassName="flex flex-col justify-start items-start gap-4">
        <h2 className="text-44 font-bold">
        What is Cornell Data Strategy?
        </h2>

        <div className="relative h-[10px] w-48 bg-blue-600 my-4">
            <div className="absolute h-full bg-blue-600 right-full w-screen"></div>
        </div>
        </div>

        <p className="text-18 max-w-[750px]">
                Cornell Data Strategy is a student-run consulting organization dedicated to solving complex business challenges through <span className="font-bold italic">data-driven approaches</span>. We bring together talented students across disciplines to <span className="font-bold italic">deliver actionable insights and strategic recommendations</span> to clients.
                <br /><br />
                Our team combines technical expertise with business acumen to <span className="font-bold italic">bridge the gap between analytical methodologies and practical implementation</span>. We're committed to both client success and the professional development of our members.
            </p>
        </section>

        </>
    );
    }

export default AboutHero;