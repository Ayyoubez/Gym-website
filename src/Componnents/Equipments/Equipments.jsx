import { GrYoga } from "react-icons/gr";
import { GiGymBag } from "react-icons/gi";
import { FaDumbbell } from "react-icons/fa";
/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion";
import { slideRight } from "../../Utilities/Util";

const equipements = [
  {
    id: 1,
    title: "Yoga Equipments",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, culpa!",
    icon: <GrYoga />,
    link: "/",
    delay: 0.3,
  },
  {
    id: 2,
    title: "Muscles Equipments",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, culpa!",
    icon: <FaDumbbell />,
    link: "/",
    delay: 0.6,
  },
  {
    id: 3,
    title: "Yoga Equipments",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, culpa!",
    icon: <GiGymBag />,
    link: "/",
    delay: 0.9,
  },
];

const Equipments = () => {
  return (
    <section className="container md:p-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
        <div className="space-y-4 p-6">
          <h1 className="text-4xl md:text-4xl font-bold ">
            What we Offer For you
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            nihil!
          </p>
        </div>

        {equipements.map((item) => (
          <motion.div
            variants={slideRight(item.delay)}
            initial="hidden"
            whileInView="visible"
            key={item.id}
            className="space-y-4 p-6 bg-[#fbfbfb] rounded-lg hover:bg-white hover:shadow-[0px_0px_22px_0px_rgba(0,0,0,0.15)] duration-300"
          >
            <div className="text-4xl">{item.icon}</div>
            <h1 className="text-2xl font-semibold">{item.title}</h1>
            <p className="text-gray-600 ">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Equipments;
