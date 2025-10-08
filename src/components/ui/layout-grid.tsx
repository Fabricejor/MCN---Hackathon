"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  title: React.ReactNode;
  description: React.ReactNode;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              "rounded-xl h-full w-full p-4 bg-[var(--light)]  border border-neutral-200  flex flex-col cursor-pointer",
              selected?.id === card.id
                ? "absolute inset-0 h-auto md:h-[90%] w-full md:w-1/2 m-auto z-50 flex flex-col"
                : lastSelected?.id === card.id
                ? "z-40"
                : ""
            )}
            layoutId={`card-${card.id}`}
          >
            <div className="w-full flex-shrink-0">
              <motion.img
                layoutId={`image-${card.id}`}
                src={card.thumbnail}
                height="500"
                width="500"
                className="object-cover object-top w-full h-48 md:h-64 rounded-lg"
                alt="thumbnail"
              />
            </div>
            <div className="p-4 flex-grow">
              {card.title}
              <AnimatePresence>
                {selected?.id === card.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="mt-2"
                  >
                    {card.description}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};
