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
      className="text-left"
    >
      <div className="text-4xl lmd:text-5xl font-light text-textcl mb-2 tabular-nums">
        {current}
        <span className="align-top">{suffix}</span>
      </div>
      <div className="text-sm lmd:text-base text-textcl/70 font-light uppercase tracking-wide">
        {label}
      </div>
    </motion.div>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const HomeAbout = () => {
  return (
    <section className="relative py-20 lmd:py-28 px-6 lmd:px-12 xl:px-16 overflow-hidden bg-white">
      {/* Animated background */}
      <div
        className="absolute inset-0 opacity-[0.5] pointer-events-none will-change-transform"
        style={{
          backgroundImage: `url('/wave.svg')`,
          backgroundSize: "300px 300px",
          backgroundRepeat: "repeat",
          backgroundPosition: "0 0",
          animation: "scrollWave 40s linear infinite",
        }}
      />

      {/* Subtle gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/70" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Headline Section */}
        <motion.div
          className="grid lmd:grid-cols-2 gap-12 lmd:gap-16 items-start mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl lmd:text-5xl xl:text-6xl font-normal text-textcl leading-tight mb-6">
              Strategy meets execution
            </h2>
            <motion.div
              className="h-1 bg-textcl rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              style={{ transformOrigin: "left", width: "5rem" }}
            />
          </motion.div>

          <motion.div
            className="flex flex-col gap-6"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-lg lmd:text-xl text-textcl/90 leading-relaxed font-light">
              At Cornell Data Strategy, we combine the rigor of boardroom
              strategy with the power of execution. We advise leaders on growth,
              market entry, and transformation, and build the tools to make
              those strategies real.
            </p>
            <p className="text-base lmd:text-lg text-textcl/75 leading-relaxed font-light">
              Every engagement is designed for measurable impact, from due
              diligence and acquisitions to AI-powered solutions.
            </p>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lmd:grid-cols-4 gap-8 lmd:gap-12 mb-20 pb-20 border-b border-textcl/20">
          <AnimatedStat value={30} suffix="+" label="Projects Delivered" />
          <AnimatedStat value={15} suffix="+" label="Industries Served" />
          <AnimatedStat value={100} suffix="%" label="Client Satisfaction" />
          <AnimatedStat value={40} suffix="+" label="Active Members" />
        </div>

        {/* Image Grid Section */}
        <div className="grid lmd:grid-cols-2 gap-6 lmd:gap-8">
          {/* Left - Big Image */}
          <motion.a
            href="/about"
            className="relative h-[400px] lmd:h-[500px] overflow-hidden bg-gray-100 group"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
            whileHover={{ y: -2 }}
          >
            <img
              src="/images/am.jpg"
              alt="Cornell Data Strategy Team"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 lmd:p-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-white text-sm lmd:text-base font-light uppercase tracking-wide">
                Our Team in Action
              </p>
            </motion.div>
          </motion.a>

          {/* Right - Two Cards */}
          <div className="flex flex-col gap-6 lmd:gap-8">
            <motion.div
              className="bg-textcl text-white p-8 lmd:p-10 flex-1 flex flex-col justify-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl lmd:text-3xl font-normal mb-4">
                Our Approach
              </h3>
              <p className="text-base lmd:text-lg font-light leading-relaxed text-white/90">
                We don’t just deliver recommendations. We build actionable
                solutions that drive real business outcomes and create lasting
                value.
              </p>
            </motion.div>

            <motion.div
              className="relative h-[180px] lmd:h-[220px] overflow-hidden bg-gray-100 group"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              whileHover={{ y: -2 }}
            >
              <img
                src="/images/cornellHome.png"
                alt="Cornell Campus"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
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
