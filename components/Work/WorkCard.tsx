"use client";
import React, { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useMeasure, useClickAway } from "@uidotdev/usehooks";
type workprop = {
  data: {
    title: string;
    company: string;
    work: string[];
    id: string;
    time: string;
  };
  handleElementSelect: (id: string | null) => void;
  selectedId: string | null;
};
const WorkCard = ({ data, handleElementSelect, selectedId }: workprop) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ref, { height }] = useMeasure();
  const clickout = useClickAway<HTMLElement>(() => {
    setIsOpen(false);
    handleElementSelect(null);
  });
  const handleSelection = () => {
    setIsOpen((prev) => {
      if (!prev) {
        handleElementSelect(data.id);
      } else {
        handleElementSelect(null);
      }
      return !prev;
    });
  };
  return (
    <MotionConfig transition={{ duration: 0.2 }}>
      <motion.div
        ref={clickout as React.RefObject<HTMLDivElement>}
        className={`p-4 bg-primary my-2 rounded transition-all cursor-pointer w-full ${
          isOpen && "scale-105 my-4"
        } ${
          !isOpen && selectedId !== data.id && selectedId !== null
            ? "opacity-50"
            : "opacity-100"
        }`}
        onClick={handleSelection}
      >
        <motion.div className="flex justify-between">
          <motion.div>
            <motion.p className="text-text-secondary font-Roboto-Slab text-sm md:text-lg">
              {data.title}
            </motion.p>
            <motion.h3 className="font-semibold text-xl md:text-2xl">
              {data.company}
            </motion.h3>
          </motion.div>
          <motion.p className="text-text-secondary font-Roboto-Slab text-sm md:text-lg">
            {data.time}
          </motion.p>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              key={height}
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: height || "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              className="overflow-hidden"
            >
              <motion.ul
                ref={ref}
                className="text-text-secondary list-disc px-5 py-3 md:p-4"
              >
                {data.work.map((e, index) => (
                  <motion.li key={index}>{e}</motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </MotionConfig>
  );
};

export default WorkCard;
