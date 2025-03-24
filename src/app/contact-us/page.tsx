import React from 'react';
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaHome,
  FaRegStickyNote,
  FaWhatsapp,
} from 'react-icons/fa';

const ContactUs = () => {
  return (
    <>
      <div className="w-full max-w-[1300px] mx-auto mt-24 md:mt-32 px-4 overflow-x-hidden">
        <h1 className="font-bold text-4xl md:text-6xl leading-tight text-center md:text-left">
          Do you have questions for Diara?
        </h1>
        <p className="font-normal text-4xl md:text-6xl leading-tight text-center md:text-left">
          Ask us now.
        </p>
        <div className="w-full bg-brand-light mt-20 p-9 px-5 md:px-16 flex flex-col md:flex-row gap-10 md:gap-16 rounded-card overflow-hidden">
          {/* Left Section */}
          <div className="w-full md:w-[555px] h-auto">
            <h2 className="font-bold text-2xl md:text-3xl leading-tight mb-3">
              Leave a message
            </h2>
            <form className="space-y-3" role="form" aria-label="Contact form">
              <div className="flex flex-col md:flex-row gap-3 md:gap-5">
                <div className="relative w-full md:w-[266px]">
                  <FaUser
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                    aria-hidden="true"
                  />
                  <input
                    type="text"
                    placeholder="Your name *"
                    className="form-input"
                    required
                    aria-label="Your name"
                  />
                </div>
                <div className="relative w-full md:w-[266px]">
                  <FaPhone
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                    aria-hidden="true"
                  />
                  <input
                    type="tel"
                    placeholder="Phone *"
                    className="form-input"
                    required
                    aria-label="Phone number"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-3 md:gap-5">
                <div className="relative w-full md:w-[266px]">
                  <FaEnvelope
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                    aria-hidden="true"
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    className="form-input"
                    required
                    aria-label="Email address"
                  />
                </div>
                <div className="relative w-full md:w-[266px]">
                  <FaHome
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                    aria-hidden="true"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    className="form-input"
                    aria-label="State"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-3 md:gap-5">
                <div className="relative w-full md:w-[266px]">
                  <FaHome
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                    aria-hidden="true"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="form-input"
                    aria-label="City"
                  />
                </div>
                <div className="relative w-full md:w-[266px]">
                  <FaHome
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                    aria-hidden="true"
                  />
                  <input
                    type="text"
                    placeholder="Pin Code"
                    className="form-input"
                    aria-label="Pin Code"
                  />
                </div>
              </div>
              <div className="relative">
                <FaRegStickyNote
                  className="absolute left-2 top-4 text-gray-400"
                  aria-hidden="true"
                />
                <textarea
                  placeholder="Your message.."
                  className="w-full h-36 text-gray-500 font-medium text-base leading-normal pl-8 pt-4 border border-gray-300 rounded-button focus:ring-2 focus:ring-brand-primary focus:outline-none"
                  required
                  aria-label="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-primary w-[211px] h-[58px] text-left pl-4"
                aria-label="Send message"
              >
                Send Message -&gt;
              </button>
            </form>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-[555px] h-auto flex flex-col justify-start">
            <h3 className="font-bold text-xl leading-tight mb-1">
              Chat with us
            </h3>
            <p className="font-medium text-base leading-normal text-gray-500 mb-1">
              The support team is always available 24/7
            </p>
            <div className="flex items-center gap-2">
              <FaWhatsapp className="text-green-500" aria-hidden="true" />
              <a
                href="#"
                className="underline font-medium text-sm leading-tight focus:outline-offset-2 focus:outline-brand-primary"
                aria-label="Chat via WhatsApp"
              >
                Chat via WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="mt-32"></div>
      </div>
    </>
  );
};

export default ContactUs;
