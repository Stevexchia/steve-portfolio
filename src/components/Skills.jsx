import { RiReactjsLine } from "react-icons/ri";       
import { FaNodeJs, FaPython, FaJs, FaDatabase, FaFireAlt, FaCuttlefish, FaJava } from "react-icons/fa"; 
import { SiTypescript } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";         
import { motion } from "framer-motion";
import { useState } from "react";  // Import useState

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skills = () => {
  const [litIcons, setLitIcons] = useState({});  // Track clicked (lit) icons

  const handleClick = (iconName) => {
    setLitIcons((prevState) => ({
      ...prevState,
      [iconName]: !prevState[iconName],  // Toggle the lit state for clicked icon
    }));
  };

  const getIconStyle = (iconName) => {
    if (litIcons[iconName]) {
      return { filter: "grayscale(0%) brightness(1.5)" };  // Icon is lit
    } else {
      return { filter: "grayscale(100%)" };  // Icon is not lit
    }
  };

  return (
    <section className="pt-20" id="skills">
      <div className="border-b border-neutral-800 pb-24">
        <motion.h2
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="my-20 text-center text-4xl"
        >
          Skills
        </motion.h2>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {/* Repeating the structure for each icon */}
          {[
            { icon: <FaCuttlefish className="text-5xl text-blue-600 lg:text-6xl" />, label: "C", name: "C" },
            { icon: <CgCPlusPlus className="text-5xl text-white lg:text-6xl" />, label: "C++", name: "C++" },
            { icon: <FaJs className="text-5xl text-yellow-400 lg:text-6xl" />, label: "JavaScript", name: "JavaScript" },
            { icon: <SiTypescript className="text-5xl text-blue-600 lg:text-6xl" />, label: "TypeScript", name: "TypeScript" },
            { icon: <FaPython className="text-5xl text-blue-400 lg:text-6xl" />, label: "Python", name: "Python" },
            { icon: <RiReactjsLine className="text-5xl text-cyan-400 lg:text-6xl" />, label: "ReactJS", name: "ReactJS" },
            { icon: <FaNodeJs className="text-5xl text-green-500 lg:text-6xl" />, label: "Node.js", name: "Node.js" },
            { icon: <FaFireAlt className="text-5xl text-orange-400 lg:text-6xl" />, label: "Firebase", name: "Firebase" },
            { icon: <FaDatabase className="text-5xl text-sky-700 lg:text-6xl" />, label: "SQL", name: "SQL" },
            { icon: <FaJava className="text-5xl text-red-500 lg:text-6xl" />, label: "Java", name: "Java" },
          ].map(({ icon, label, name }) => (
            <div key={name} className="flex flex-col items-center">
              <motion.div
                variants={iconVariants(2.3)}
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.2, filter: "grayscale(0%) brightness(1.5)" }}
                onClick={() => handleClick(name)}  // Toggle on click
                className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
                style={getIconStyle(name)}  // Apply dynamic style based on state
              >
                {icon}
              </motion.div>
              <p className="text-center mt-4">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
