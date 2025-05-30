import Divider from "../shared/Divider";

const Expertise = () => {
  return (
    <div className="pt-4">
      <div className="p-6 sm:py-8 px-12">
        <p className="bg-white  text-sm sm:text-[15px] px-3  uppercase border-[1px] border-gary-900/80 rounded-xl w-fit">
          Expertise
        </p>
        {/* Paragraph */}
        <div className="py-4 space-y-3">
          <h1 className="w-1/2 sm:w-[25%]  font-semibold text-sm sm:text-lg">
            Core Competencies and Areas of Expertise
          </h1>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 list-inside list-disc marker:text-xl marker:text-BorderHighlight">
            <li className="text-sm sm:text-[15px] font-light">
              Calendar & Travel Management
            </li>
            <li className="text-sm sm:text-[15px] font-light">
              Meeting Coordination & Minutes
            </li>
            <li className="text-sm sm:text-[15px] font-light">
              Financial Reporting & Invoicing
            </li>
            <li className="text-sm sm:text-[15px] font-light truncate">
              CRM & Data Entry (Salesforce, HubSpot)
            </li>
            <li className="text-sm sm:text-[15px] font-light">
              Office Suite (Excel, Word, Outlook)
            </li>
            <li className="text-sm sm:text-[15px] font-light">
              CRM Management
            </li>
          </ul>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Expertise;
