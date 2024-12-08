

const Projcard = ({ title, body, image, link }) => {

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url('${image}.png')` }}
    >
      <div className="bg-black/40 text-white md:p-10 p-4 flex flex-col items-start justify-around">
        <h2 className="text-xl md:text-2xl font-bold mb-4 font-b1">{title}</h2>
        <p className="text-sm md:text-lg leading-relaxed max-w-[600px]">
          {body}
        </p>

        <div className="flex justify-start gap-2 items-center mt-10 group">
          <a className="hover:underline" href={`${link}`} >Learn More</a>
          <img
            className="mt-1 transition-transform duration-300 transform group-hover:translate-x-2"
            src="/svg/in.svg"
          />
        </div>
      </div>
    </section>
  );
}

export default Projcard;
