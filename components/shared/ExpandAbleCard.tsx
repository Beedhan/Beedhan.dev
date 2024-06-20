"use client";
import React, { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useMeasure, useClickAway } from "@uidotdev/usehooks";
import { FiExternalLink } from "react-icons/fi";

type workprop = {
  data: {
    subTitle: string;
    title: string;
    description: string[] | string;
    id: string;
    time?: string;
    link?: string;
  };
  handleElementSelect: (id: string | null) => void;
  selectedId: string | null;
};
const ExpandAbleCard = ({
  data,
  handleElementSelect,
  selectedId,
}: workprop) => {
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
            <motion.p className="text-text-secondary font-Roboto-Slab text-sm lg:text-md">
              {data.subTitle}
            </motion.p>
            <motion.div className="flex gap-3 items-center">
              <motion.h3
                className={`font-semibold text-lg lg:text-2xl md:text-xl ${
                  isOpen ? "text-tertiary" : ""
                }`}
              >
                {data.title}
              </motion.h3>
              {data.link && (
                <a
                  href={data.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`transition-all ${
                    isOpen
                      ? "-translate-y-2 translate-x-3 text-tertiary"
                      : "translate-y-0 translate-x-0"
                  }`}
                >
                  <FiExternalLink />
                </a>
              )}
            </motion.div>
          </motion.div>
          {data.time && (
            <motion.p className="text-text-secondary font-Roboto-Slab text-sm lg:text-md">
              {data.time}
            </motion.p>
          )}
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
              {typeof data.description === "object" && (
                <motion.ul
                  ref={ref}
                  className="text-text-secondary list-disc px-5 py-3 lg:p-4"
                >
                  {data.description.map((e, index) => (
                    <motion.li key={index}>{e}</motion.li>
                  ))}
                </motion.ul>
              )}
              {typeof data.description === "string" && (
                <motion.p
                  ref={ref}
                  className="text-text-secondary px-5 py-3 lg:p-4"
                >
                  {data.description}
                </motion.p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </MotionConfig>
  );
};

export default ExpandAbleCard;
