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
      <div className="mt-20 space-y-5">
        <TitleAndSubTitle
          title="Frequently Asked Questions"
          subTitle="Find quick answers to the most common questions about our platform."
        />
        <Accordion
          type="single"
          collapsible
          value={openItem ?? undefined}
          onValueChange={toggleFAQ}
          className="space-y-5 mt-5 sm:mt-10"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white px-4 py-2 rounded-md border border-gray-800/10"
            >
              <AccordionTrigger className="text-[15px] sm:text-xl">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="font-DMsans space-y-3 w-full sm:w-[60%] mt-16">
          <h1 className="text-2xl sm:text-3xl ">Still have questions?</h1>
          <p className="text-xs sm:text-sm leading-[120%] font-light">
            Still have questions? Visit our full Support page or Contact Us.
          </p>

          <Button className="px-2 sm:p-4 py-2 s text-xs sm:text-[15px] bg-BorderHighlight hover:bg-ColorInfo cursor-pointer">
            Contact Us
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default FAQ;
