import React from "react";

import { motion, AnimatePresence } from "motion/react";

interface FAQBoxProps {
  question: string;
  answer: string;
  id: number;

  setOpenedTab: React.Dispatch<React.SetStateAction<number | null>>;
  isOpen: boolean;
}

const FAQBox = ({
  question,
  answer,
  id,

  setOpenedTab,
  isOpen,
}: FAQBoxProps) => {
  return (
    <motion.div
      layout
      className="border rounded-md overflow-hidden p-4"
      onClick={() => setOpenedTab(isOpen ? null : id)}
    >
      <button
        className="w-full flex justify-between items-center "
        aria-expanded={isOpen}
      >
        <span className="font-playfair ">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="text-2xl font-bold"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className=" "
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQBox;
