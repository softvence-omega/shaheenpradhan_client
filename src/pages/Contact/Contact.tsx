import React, { useState } from "react";
import { z } from "zod";
import TitleAndSubTitle from "@/components/shared/TitleAndSubTitle";
import Wrapper from "@/components/shared/Wrapper";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

// Zod schema
const formSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelect = (value: string) => {
    setFormData({ ...formData, subject: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const parsed = formSchema.parse(formData);
      console.log("Form Data:", parsed);
    } catch (err) {
      console.error("Validation failed");
    }
  };

  return (
    <div className="bg-[#FAF8FD] py-16 min-h-screen">
      <Wrapper>
        {/* Title */}
        <div className="mb-10">
          <TitleAndSubTitle
            title="Contact Us"
            subTitle="Get in touch with us. We're here to assist you."
          />
        </div>

        {/* Form + Contact Card */}
        <div className="md:flex justify-between gap-10">
          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6">
            {/* Name fields */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full space-y-2">
                <Label htmlFor="firstName">First Name*</Label>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="bg-white"
                />
              </div>
              <div className="w-full space-y-2">
                <Label htmlFor="lastName">Last Name*</Label>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="bg-white"
                />
              </div>
            </div>

            {/* Email */}
            <div className="w-full space-y-2">
              <Label htmlFor="email">Email Address*</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Example@gmail.com"
                className="bg-white"
              />
            </div>

            {/* Phone Number */}
            <div className="w-full space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="flex items-center border border-[#E7E5E4] rounded-lg overflow-hidden">
                <span className="bg-white px-3 py-2 border-r text-sm flex items-center gap-2">
                  🇦🇪 +971
                </span>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className="flex-1 px-3 py-2 outline-none bg-white"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="w-full space-y-2">
              <Label htmlFor="subject">Subject*</Label>
              <Select onValueChange={handleSelect}>
                <SelectTrigger className="bg-white w-full">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="assistant">To become an assistant</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                  <SelectItem value="general">General Inquiry</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-[#E7E5E4] bg-white rounded-lg px-3 py-2 text-sm resize-none"
                rows={4}
                placeholder="Tech enthusiast and entrepreneur. Looking for reliable executive assistance to manage a busy schedule."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-between border border-[#E7E5E4] rounded-lg px-3 py-2 font-medium hover:bg-gray-50 text-center"
            >
              Leave Us a Message
              <span className="bg-[#2E1F5E] text-white p-2 rounded-lg cursor-pointer">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </button>
          </form>

          {/* Contact Info Card */}
          <div className="rounded-[16px] bg-[linear-gradient(140deg,#432B99_1.36%,#B655DA_100%)] p-6 md:p-10 text-white">
            <h3 id="contact-card-title" className="text-xl md:text-[28px] font-medium mb-6">
              Contact Info
            </h3>

            {/* phone & email in two columns on wider screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="text-sm md:text-[16px]">
                <p className="uppercase opacity-90 tracking-wide">Phone</p>
                <a
                  href="tel:+97124598524"
                  className="block mt-2 text-base"
                  aria-label="Call +971 2 459 8524"
                >
                  +971 2 459 8524
                </a>
              </div>

              <div className="text-[16px]">
                <p className="uppercase opacity-90 tracking-wide">Email</p>
                <a
                  href="mailto:shaheen@adminity.com"
                  className="block mt-2 text-base lowercase"
                  aria-label="Email shaheen at adminity dot com"
                >
                  shaheen@adminity.com
                </a>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xl md:text-[28px] font-medium mb-6">Address</h4>
              <p className="mt-2 text-sm md:text-[16px]">
                Level 1, 12 Sample St, Sydney NSW 2000
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-xl md:text-[28px] font-medium mb-6">Assistance hours</h4>
              <p className="mt-2 text-sm md:text-[16px]">Monday - Friday 6 AM to 8 PM EST</p>
            </div>

            {/* Social Media */}
            <div className="mb-6">
              <h4 className="text-xl md:text-[28px] font-medium mb-6">Social Media</h4>
              <div className="flex items-center gap-5">
                <a href="#" aria-label="Facebook" className="hover:text-gray-200">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-gray-200">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" aria-label="X (Twitter)" className="hover:text-gray-200">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-gray-200">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" aria-label="YouTube" className="hover:text-gray-200">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Wrapper >
    </div >
  )
}

export default Contact;