/* eslint-disable-next-line no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";

const SideMenu = ({ isOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 z-20 left-0 w-full h-screen md:hidden"
        >
          <div className="text-md font-normal Capitalize bg-primary rounded-xl py-6 mr-6">
            <ul className="flex flex-col items-center font-semibold text-white gap-4">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Blog</li>
              <li>Price</li>
              <li>Login</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideMenu;
