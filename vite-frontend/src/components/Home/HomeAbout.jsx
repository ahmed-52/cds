import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

function useCountUp(active, to, duration = 1.2) {
  const [val, setVal] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const step = (ts) => {
      if (startRef.current === null) startRef.current = ts;
      const progress = Math.min((ts - startRef.current) / (duration * 1000), 1);
      setVal(Math.round(to * easeOutCubic(progress)));
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startRef.current = null;
    };
  }, [active, to, duration]);

  return val;
}

function AnimatedStat({ value, suffix = "", label, duration = 1.2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const current = useCountUp(inView, value, duration);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="text-left border-l-2 border-[#003A70]/10 pl-6 py-2"
    >
      <div className="text-4xl lg:text-5xl font-serif font-medium text-[#003A70] mb-2 tabular-nums">
        {current}
        <span className="align-top text-2xl text-[#155cfc] ml-1">{suffix}</span>
      </div>
      <div className="text-xs lg:text-sm text-slate-500 font-bold uppercase tracking-widest">
        {label}
      </div>
    </motion.div>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

// Subtle wave pattern data URI for background
const WAVE_BG = `data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.735-5.197-2.336-8.144-3.7-3.256-1.506-6.756-2.3-10.284-2.3-8.79 0-12.37 1.337-19.744 4.186l-.464.182c-6.942 2.727-12.397 3.632-19.969 3.632-9.673 0-15.79-1.357-23.407-4.352C.673 13.606 0 12.143 0 10.289V0h100v10.289c0 1.832-.735 3.252-2.056 4.716-5.211 5.765-13.955 5.765-19.166 0-1.321-1.464-2.056-2.884-2.056-4.716V0h-1.25v10.289c0 1.832-.735 3.252-2.056 4.716-5.211 5.765-13.955 5.765-19.166 0-1.321-1.464-2.056-2.884-2.056-4.716V0H21.184z' fill='%23051C2C' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E`;

const HomeAbout = () => {
  return (
    <section id="about" className="relative py-10 lg:py-20 px-6 lg:px-12 xl:px-16 overflow-hidden bg-white">
      {/* Animated background */}
      <div
        className="absolute inset-0 opacity-[0.8] pointer-events-none will-change-transform"
        style={{
          backgroundImage: `url("${WAVE_BG}")`,
          backgroundSize: "300px 60px",
          backgroundRepeat: "repeat",
          backgroundPosition: "0 0",
          animation: "scrollWave 60s linear infinite",
        }}
      />

      {/* Subtle gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Headline Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-24"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
            <h2 className="text-5xl lg:text-7xl font-serif font-normal text-[#003A70] leading-[1.1] mb-8">
              Strategy meets <br />
              <span className="italic text-[#155cfc]">execution</span>
            </h2>
            <motion.div
              className="h-1.5 bg-[#003A70]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              style={{ transformOrigin: "left", width: "6rem" }}
            />
          </motion.div>

          <motion.div
            className="flex flex-col gap-8"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-light">
              At Cornell Data Strategy, we combine the <span className="text-[#003A70] font-medium">rigor of boardroom strategy</span> with the <span className="text-[#003A70] font-medium">power of execution</span>. We advise leaders on growth,
              market entry, and transformation, and build the tools to make
              those strategies real.
            </p>
            <p className="text-base lg:text-lg text-slate-500 leading-relaxed font-light">
              Every engagement is designed for measurable impact, from due
              diligence and acquisitions to AI-powered solutions.
            </p>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-24 pb-12border-b border-gray-100">
          <AnimatedStat value={30} suffix="+" label="Projects Delivered" />
          <AnimatedStat value={15} suffix="+" label="Industries Served" />
          <AnimatedStat value={100} suffix="%" label="Client Satisfaction" />
          <AnimatedStat value={40} suffix="+" label="Active Members" />
        </div>

        {/* Image Grid Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Big Image */}
          <motion.a
            href="/about"
            className="relative h-[500px] lg:h-[600px] overflow-hidden bg-gray-100 group shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/am.jpg"
              alt="Cornell Data Strategy Team"
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#003A70]/90 via-[#003A70]/40 to-transparent p-8 lg:p-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-white/60"></div>
                <p className="text-white text-sm font-bold uppercase tracking-widest">
                  Our Team in Action
                </p>
              </div>
            </motion.div>
          </motion.a>

          {/* Right - Two Cards */}
          <div className="flex flex-col gap-8 h-[500px] lg:h-[600px]">
            <motion.div
              className="bg-[#003A70] text-white p-10 lg:p-16 flex-[1.2] flex flex-col justify-center relative overflow-hidden min-h-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
               {/* Decorate circle */}
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full border border-white/5"></div>
              
              <h3 className="text-3xl lg:text-4xl font-serif font-normal mb-4">
                Our Approach
              </h3>
              <p className="text-lg lg:text-xl font-light leading-relaxed text-white/80">
                We don’t just deliver recommendations. We build actionable
                solutions that drive real business outcomes and create lasting
                value.
              </p>
              
              <div className="mt-8">
                  <a href="/services" className="text-xs font-bold uppercase tracking-widest border-b border-white/30 pb-1">Learn More</a>
              </div>
            </motion.div>

            <motion.div
              className="relative flex-1 overflow-hidden bg-gray-100 group shadow-xl min-h-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img
                src="/images/cornellHome.png"
                alt="Cornell Campus"
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-[#003A70]/20 group-hover:bg-transparent transition-colors duration-700"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background animation keyframes */}
      <style>{`
        @keyframes scrollWave {
          from { background-position: 0 0; }
          to { background-position: 300px 0; }
        }
      `}</style>
    </section>
  );
};

export default HomeAbout;
