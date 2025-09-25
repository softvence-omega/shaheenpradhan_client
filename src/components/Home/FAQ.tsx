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
    question: "What is the Adminity platform?",
    answer:
      "We are a booking platform that connects you with skilled executive assistants for your administrative needs. Think of us as your go-to source for finding reliable support, instantly.",
  },
  {
    question: "How do I find an executive assistant?",
    answer:
      "Use our search bar and filters to find your assistant based on industry, task, location or whether you need remote/in-person. You can also simply tell our AI Agent Adminity Anna and she’ll connect you with your best suited assistant matches!",
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
      <div className=" space-y-5 py-12 md:py-[75px]">
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
              <AccordionTrigger className="text-left sm:text-[20px] md:text-[28px] font-DMsans">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-[16px] font-DMsans">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 w-full space-y-6 sm:w-[60%]">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold font-DMsans">
            Still have questions?
          </h1>

          <div className="space-y-4 text-sm md:text-lg leading-[150%]">
            <div>
              <p className="font-medium font-DMsans">Can I meet my assistant before booking?</p>
              <p className="text-gray-600">
                - yes, our valued members can click to schedule an initial discovery
                call with their potential assistant to get to know more about each
                other and the fit.
              </p>
            </div>

            <div>
              <p className="font-medium font-DMsans">What training courses do you provide?</p>
              <p className="text-gray-600">
                - Whether you want to brush up on your general skills to elevate from a
                PA or EA, or to take a deeper dive into finance, marketing or strategic
                elements to bridge the gap between an EA and a Strategic or Operational
                role, Our Adminity certifications help you do that.
              </p>
            </div>
          </div>

          <Button className="w-[150px] h-[48px] text-[18px] bg-BorderHighlight rounded-[6px] cursor-pointer">
            Contact Us
          </Button>
        </div>

      </div>
    </Wrapper>
  );
};

export default FAQ;
