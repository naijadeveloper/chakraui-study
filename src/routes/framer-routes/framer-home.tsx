import { motion } from "framer-motion";
import { useState } from "react";

export default function FramerHome() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <motion.div
      className="min-h-screen border-2 border-green-900 flex flex-col gap-3 overflow-hidden"
      animate={{}}
    >
      {/* <AnimatePresence>
        {isVisible && (
          <motion.h2
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeIn", duration: 3 }}
            className="border-2 w-fit"
          >
            Hello framer
          </motion.h2>
        )}
      </AnimatePresence> */}

      {/* <motion.h2
        animate={{ x: [null, 100, 0], scale: [null, 1.5, 1] }}
        transition={{ ease: "easeIn", duration: 3 }}
        className="border-2 w-fit"
      >
        Hello framer
      </motion.h2> */}

      <motion.h2
        initial={{ y: "-250px" }}
        animate={{ y: "0px" }}
        transition={{ ease: "easeInOut" }}
        className="border-2 w-fit"
      >
        Hello framer
      </motion.h2>

      <motion.button
        animate={{}}
        className="border w-fit"
        onClick={() => setIsVisible(!isVisible)}
      >
        click me
      </motion.button>
    </motion.div>
  );
}
