import { CONTACT_INFO } from "../constants";
import { RiPhoneLine, RiMailLine, RiMapPinLine } from "react-icons/ri";

const ContactUs = () => {
  // Component for a polished, interactive contact card
  const PolishedContactCard = ({ Icon, label, value, link }) => (
    <div className="flex flex-col p-8 text-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-[1.02] h-full">
      {/* Icon */}
      <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900 mb-6">
        <Icon className="text-3xl text-blue-600 dark:text-blue-400" />
      </div>

      {/* Label (Title) */}
      <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white uppercase tracking-wider">
        {label}
      </h3>

      {/* Value (The actionable data) */}
      {link ? (
        <a
          href={link}
          className="text-2xl font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition duration-300 break-words mt-2"
          target={
            link.startsWith("mailto:") || link.startsWith("tel:")
              ? "_self"
              : "_blank"
          }
          rel={
            link.startsWith("mailto:") || link.startsWith("tel:")
              ? ""
              : "noopener noreferrer"
          }
        >
          {value}
        </a>
      ) : (
        <p className="text-xl font-medium text-gray-700 dark:text-gray-300 break-words mt-2">
          {value}
        </p>
      )}
    </div>
  );

  return (
    <section className="max-w-7xl mx-auto py-20 px-4" id="contact">
      {/* Header Section */}
      <div className="mb-16">
        <h2 className="text-xl lg:text-3xl tracking-tight uppercase text-center mb-12 ">
          Connect With Us
        </h2>
        <p className="max-w-3xl text-lg text-neutral-600 dark:text-neutral-400 text-center mx-auto">
          {CONTACT_INFO.text ||
            "We are ready to respond to your inquiries. Please choose a method below to reach our dedicated team."}
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 1. Phone Card */}
        <PolishedContactCard
          Icon={RiPhoneLine}
          label={CONTACT_INFO.phone.label || "Direct Line"}
          value={CONTACT_INFO.phone.value}
          link={`tel:${CONTACT_INFO.phone.value.replace(/\s/g, "")}`}
        />

        {/* 2. Email Card */}
        <PolishedContactCard
          Icon={RiMailLine}
          label={CONTACT_INFO.email.label || "Customer Support"}
          value={CONTACT_INFO.email.value}
          link={`mailto:${CONTACT_INFO.email.value}`}
        />

        {/* 3. Address Card */}
        <PolishedContactCard
          Icon={RiMapPinLine}
          label={CONTACT_INFO.address.label || "Head Office"}
          value={CONTACT_INFO.address.value}
          // Optional: Add a Maps link if possible
          link={`https://maps.google.com/?q=${encodeURIComponent(
            CONTACT_INFO.address.value
          )}`}
        />
      </div>
    </section>
  );
};

export default ContactUs;
