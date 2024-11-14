import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export const Certificate = () => {
  return (
    <section className=" bg-black cer p-4 md:p-8 overflow-x-hidden overflow-y-hidden mt-4 mb-20 ">
      <div className="text-white flex justify-center text-5xl md:text-6xl lg:text-7xl p-2  font-[f4]" >Certificates</div>
      <div className="mx-auto max-w-5xl">
        <Link
          heading="ReactJS"
          subheading="Course of Completion Certificate(SpringBoard)"
          imgSrc="../reactcer.jpg"
          href="https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_10648877150323546000_shared/1-0cc23753-3dbc-47bd-aec6-73a4a8c28182.pdf"
        />
        <Link
          heading="Problem Solving"
          subheading="HackerRank Problem Solving(Basic)"
          imgSrc="../problem.jpg"
          href="https://www.hackerrank.com/certificates/5b6c711c2409"
        />
        <Link
          heading="DBMS-Part-2"
          subheading="Course of Completion Certificate(SpringBoard)"
          imgSrc="../DBMS.jpg"
          href="https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_0127673005629194241_shared/1-22405eb6-d949-4513-8f6f-2eefeea201a4.pdf"
        />
        <Link
          heading="100Days-Badge"
          subheading="LeetCode 100-days-Badge(2024)"
          imgSrc="../leetcode.png"
          href="https://leetcode.com/u/farhan___ahmad/"
        />
        {/* <Link
          heading="Fun"
          subheading="Incase you're bored"
          imgSrc="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600"
          href="#"
        /> */}
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className=" text-3xl sm:text-4xl md:text-5xl  text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};