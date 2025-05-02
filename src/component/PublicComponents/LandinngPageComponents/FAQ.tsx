"use client";
import { FAQData } from "@/lib/Data";
import React from "react";
import FAQBox from "./FAQBox";

const FAQ = () => {
  const [openedTab, setOpenedTab] = React.useState<number | null>(null);
  return (
    <section>
      <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
      <div className="mt-5 max-w-[500px] mx-auto flex flex-col gap-8">
        {FAQData.map((item) => (
          <FAQBox
            key={item.id}
            {...item}
            setOpenedTab={setOpenedTab}
            isOpen={openedTab === item.id}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
