import dumImg from "../../assets/dumbell.png";
import { FaPlay } from "react-icons/fa6";
/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion";
import { slideLeft } from "../../Utilities/Util";

const Hero = () => {
  return (
    <>
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h[650px] relative md:py-14 gap-10 md:gap-0">
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-6 ">
              <motion.h1
                variants={slideLeft(0.3)}
                initial="hidden"
                animate="visible"
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold leading-relaxed xl:leading-normal"
              >
                Gym Gives you the perfect{" "}
                <span className="text-primary">Health.</span>
              </motion.h1>
              <motion.p
                variants={slideLeft(0.6)}
                initial="hidden"
                animate="visible"
                className="text-gray-600 xl:max-w-[500px]"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
                perferendis ea, quia fugiat dicta sed.
              </motion.p>
              <motion.div
                variants={slideLeft(0.9)}
                initial="hidden"
                animate="visible"
                className="flex gap-8 items-center justify-center md:justify-start py-4"
              >
                <button className="primary-btn flex items-center  gap-2">
                  Order Now
                </button>
                <button className="flex items-center gap-2 justify-center">
                  <FaPlay />
                  Play Now
                </button>
              </motion.div>
            </div>
          </div>

          <div className="flex items-center justify-center  ">
            <motion.img
              initial={{ opacity: 0, x: 100, rotate: 45 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
              src={dumImg}
              alt=""
              className="w-[350px] md:w-[550px] xl:w-[700px] drop-shadow"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
