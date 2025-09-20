import TitleAndSubTitle from "@/components/shared/TitleAndSubTitle";
import Wrapper from "@/components/shared/Wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const faqs = [
  {
    question: "What is this platform?",
    answer:
      "We are a booking platform that connects you with skilled executive assistants for your administrative needs. Think of us as your go-to source for finding reliable support, instantly.",
  },
  {
    question: "How do I find an executive assistant?",
    answer:
      "You can use our search bar and filters to find assistants based on location (like Dubai, Abu Dhabi, etc.), whether you need remote or in-person help, their experience level, and specific skills or tasks you need assistance with.",
  },
  {
    question: "How do I book an assistant?",
    answer:
      "Once you find an assistant you like, you can view their profile for more details. If they are available for your requested dates and times, you can initiate a booking request directly from their profile.",
  },
  {
    question: "What happens after I book an assistant?",
    answer:
      "After booking, the assistant will review and accept your request. You will receive confirmation and further communication will be handled directly on our platform.",
  },
  {
    question: "How does payment work?",
    answer:
      "Payment is securely processed through our platform. You'll be charged only after the assistant accepts your booking and the service is confirmed.",
  },
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleFAQ = (value: string) => {
    setOpenItem((prev) => (prev === value ? null : value));
  };

  return (
    <Wrapper>
      <div className=" space-y-5 py-[75px]">
        <TitleAndSubTitle
          title="Frequently Asked Questions"
          subTitle="Find quick answers to the most common questions about our platform."
        />
        <Accordion
          type="single"
          collapsible
          value={openItem ?? undefined}
          onValueChange={toggleFAQ}
          className="mt-5 space-y-5 sm:mt-10"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl border border-gray-800/10 bg-white px-4 py-2 cursor-pointer"
            >
              <AccordionTrigger className=" sm:text-[20px] md:text-[28px] font-DMsans">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-[16px] font-DMsans">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 w-full space-y-3 font-DMsans sm:w-[60%]">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold">Still have questions?</h1>
          <p className="text-lg font-light leading-[120%] ">
            Still have questions? Visit our full Support page or Contact Us.
          </p>

          <Button className="w-[139px] h-[46px] pt-[14px] pr-[24px] pb-[14px] pl-[24px] text-[18px]  bg-BorderHighlight rounded-[6px] cursor-pointer">
            Contact Us
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default FAQ;
