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
    <div className="w-full max-w-[1300px] mx-auto mt-[200px] px-4 overflow-x-hidden">
      <h1 className="font-bold text-[48px] md:text-[64px] leading-[120%] text-center md:text-left">
        Do you have questions for Diara?
      </h1>
      <p className="font-normal text-[48px] md:text-[64px] leading-[120%] text-center md:text-left">
        Ask us now.
      </p>
      <div className="w-full bg-[#F8F8F8] mt-[80px] p-[36px] px-[20px] md:px-[63px] flex flex-col md:flex-row gap-[40px] md:gap-[233px] rounded-[16px] overflow-hidden">
        {/* Left Section */}
        <div className="w-full md:w-[555px] h-auto">
          <h2 className="font-bold text-[24px] md:text-[31px] leading-[120%] mb-[10px]">
            Leave a message
          </h2>
          <form className="space-y-[10px]">
            <div className="flex flex-col md:flex-row gap-[10px] md:gap-[22px]">
              <div className="relative w-full md:w-[266px]">
                <FaUser className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#9CA3AF]" />
                <input
                  type="text"
                  placeholder="Your name *"
                  className="w-full h-[59px] text-[#9CA3AF] font-medium text-[16px] leading-[150%] pl-8 border border-gray-300 rounded-[8px]"
                  required
                />
              </div>
              <div className="relative w-full md:w-[266px]">
                <FaPhone className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#9CA3AF]" />
                <input
                  type="tel"
                  placeholder="Phone *"
                  className="w-full h-[59px] text-[#9CA3AF] font-medium text-[16px] leading-[150%] pl-8 border border-gray-300 rounded-[8px]"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-[10px] md:gap-[22px]">
              <div className="relative w-full md:w-[266px]">
                <FaEnvelope className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#9CA3AF]" />
                <input
                  type="email"
                  placeholder="Email *"
                  className="w-full h-[59px] text-[#9CA3AF] font-medium text-[16px] leading-[150%] pl-8 border border-gray-300 rounded-[8px]"
                  required
                />
              </div>
              <div className="relative w-full md:w-[266px]">
                <FaHome className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#9CA3AF]" />
                <input
                  type="text"
                  placeholder="State"
                  className="w-full h-[59px] text-[#9CA3AF] font-medium text-[16px] leading-[150%] pl-8 border border-gray-300 rounded-[8px]"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-[10px] md:gap-[22px]">
              <div className="relative w-full md:w-[266px]">
                <FaHome className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#9CA3AF]" />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full h-[59px] text-[#9CA3AF] font-medium text-[16px] leading-[150%] pl-8 border border-gray-300 rounded-[8px]"
                />
              </div>
              <div className="relative w-full md:w-[266px]">
                <FaHome className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#9CA3AF]" />
                <input
                  type="text"
                  placeholder="Pin Code"
                  className="w-full h-[59px] text-[#9CA3AF] font-medium text-[16px] leading-[150%] pl-8 border border-gray-300 rounded-[8px]"
                />
              </div>
            </div>
            <div className="relative">
              <FaRegStickyNote className="absolute left-2 top-4 text-[#9CA3AF]" />
              <textarea
                placeholder="Your message.."
                className="w-full h-[146px] text-[#9CA3AF] font-medium text-[16px] leading-[150%] pl-8 pt-4 border border-gray-300 rounded-[8px]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-[211px] h-[58px] bg-gradient-to-r from-[#110C26] to-[#434343] text-white font-bold text-[16px] leading-[150%] text-left pl-4 rounded-[8px]"
            >
              Send Message -&gt;
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[555px] h-auto flex flex-col justify-start">
          <h3 className="font-bold text-[20px] leading-[120%] mb-[5px]">
            Chat with us
          </h3>
          <p className="font-medium text-[16px] leading-[150%] text-gray-500 mb-[5px]">
            The support team is always available 24/7
          </p>
          <div className="flex items-center gap-2">
            <FaWhatsapp className="text-green-500" />
            <a
              href="#"
              className="underline font-medium text-[14px] leading-[100%]"
            >
              Chat via WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="mt-[200px]"></div>
    </div>
  );
};

export default ContactUs;
