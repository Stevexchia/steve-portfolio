import steveImg from "../assets/steve.jpeg"
import { ABOUT } from "../constants";
import { motion } from "framer-motion"

const About = () => {
  return (
    <section className="pt-20" id="about">
      <motion.h2 
            whileInView={{ opacity: 1}}
            initial={{ opacity: 0}}
            transition={{ duration: 2 }}
      className="mb-8 text-center text-3xl lg:text-4xl">About Me</motion.h2>

      <div className="flex flex-wrap">
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={steveImg} alt="about" />
          </div>
        </motion.div>
        <motion.div 
        whileInView={{ opacity: 1, x:0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex flex-col justify-center">
            {ABOUT.map((text, index) => (
              <p key={index} className="my-1 max-w-xl py-6">
                {text}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
