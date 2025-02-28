import React from 'react';

const AboutUs = () => {
  return (
    <section className="mt-[200px] p-2 bg-white">
      <div className="max-w-[1326px] mx-auto p-2 box-border">
        <h1 className="w-full h-auto font-bold text-[48px] md:text-[64px] leading-[120%] text-left">
          Inventing the future of beauty
        </h1>

        <div className="w-full flex flex-col md:flex-row gap-[42px] mt-[60px]">
          <div className="w-full md:w-[642px] h-auto bg-[#F8F8F8] p-9 pt-[64px] shadow-md rounded-[12px]">
            <img
              src="/images/star.svg"
              alt="Star Icon"
              className="w-[48px] h-[48px]"
            />
            <h3 className="text-[24px] md:text-[31px] font-bold leading-[120%] text-left mt-[10px] w-full md:w-[519px]">
              Vision
            </h3>
            <p className="text-[16px] md:text-[20px] font-medium leading-[120%] text-left mt-[10px] w-full md:w-[519px]">
              “A world where self-care empowers confidence and celebrates
              individuality.”
            </p>
          </div>

          <div className="w-full md:w-[642px] h-auto bg-[#F8F8F8] p-9 pt-[64px] shadow-md rounded-[12px]">
            <img
              src="/images/star.svg"
              alt="Star Icon"
              className="w-[48px] h-[48px]"
            />
            <h3 className="text-[24px] md:text-[31px] font-bold leading-[120%] text-left mt-[10px] w-full md:w-[519px]">
              Mission
            </h3>
            <p className="text-[16px] md:text-[20px] font-medium leading-[120%] text-left mt-[10px] w-full md:w-[519px]">
              “Inspiring self-celebration through science-backed,
              dermatologist-approved personal care products”
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1322px] mx-auto mt-[120px] flex flex-col md:flex-row gap-[25px]">
        <div
          className="w-full md:w-[534px] h-[400px] md:h-[582px] p-4 bg-cover bg-center rounded-[12px]"
          style={{ backgroundImage: "url('/images/about.svg')" }}
        >
          <h2 className="text-white text-[36px] md:text-[48px] font-semibold leading-[120%] text-left w-[284px] h-auto">
            Why does Diara exist
          </h2>
        </div>

        <div className="w-full md:w-[763px] h-auto p-9 bg-[#F8F8F8] rounded-[12px]">
          <p className="text-[16px] md:text-[20px] font-normal text-left">
            At Diara, we believe <strong>self-care</strong> isn’t just a
            routine—it’s a celebration of <strong>self-worth</strong>.<br />
            <br />
            In a world overflowing with choices, we saw the need for a personal
            care brand rooted in <strong>authenticity</strong>,{' '}
            <strong>simplicity</strong>, and{' '}
            <strong>exceptional quality</strong>.<br />
            <br />
            Collaborating with India’s leading dermatologists, we fuse{' '}
            <strong>cutting-edge research</strong>, innovative technology, and
            carefully chosen ingredients to craft products that go beyond care—
            <strong>they transform</strong>.<br />
            <br />
            Every formula is thoughtfully designed to turn your daily{' '}
            <strong>self-care rituals</strong> into moments of self-celebration,
            empowering you to step out with <strong>confidence</strong> and
            embrace your individuality.
            <br />
            <br />
            Because at Diara, self-care isn’t just about looking good; it’s
            about <strong>feeling incredible</strong> in your own skin.
          </p>
        </div>
      </div>

      <div
        className="max-w-[1327px] h-[400px] md:h-[628px] mx-auto mt-[120px] rounded-[12px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/about.svg')" }}
      >
        {/* Additional content can go here if needed */}
      </div>

      <div className="max-w-[1322px] mx-auto mt-[120px] flex flex-col md:flex-row gap-[25px]">
        <div
          className="w-full md:w-[534px] h-[400px] md:h-[582px] p-4 bg-cover bg-center rounded-[12px]"
          style={{ backgroundImage: "url('/images/about.svg')" }}
        >
          <h2 className="text-white text-[36px] md:text-[48px] font-semibold leading-[120%] text-left">
            The Diara Difference:
            <br />
            <span className="text-[24px] md:text-[36px] font-normal leading-[120%]">
              Science That Empowers Self-Care
            </span>
          </h2>
        </div>

        <div className="w-full md:w-[763px] h-auto p-9 bg-[#F8F8F8] rounded-[12px]">
          <p className="text-[16px] md:text-[20px] font-normal text-left">
            <strong>Science That Empowers Self-Care</strong>
            <br />
            <br />
            From <strong>skincare to haircare</strong>, every product is crafted
            with <strong>professional-grade ingredients</strong>, meticulously
            formulated to deliver <strong>lasting results</strong>.<br />
            <br />
            Each formula undergoes <strong>rigorous testing</strong>, addressing
            real concerns with precision and <strong>efficacy</strong>. Rooted
            in <strong>advanced research</strong>, our innovations empower you
            to <strong>look and feel your absolute best</strong>.<br />
            <br />
            Experience the <strong>Diara difference</strong>—where{' '}
            <strong>science meets self-care</strong>, and{' '}
            <strong>results speak for themselves</strong>.
          </p>
        </div>
      </div>

      <div className="w-full h-auto md:h-[759px] bg-[#F8F8F8] mt-[120px] pt-[32px]">
        <div className="max-w-[1322px] mx-auto flex flex-col md:flex-row gap-[30px]">
          <div>
            <img
              src="/images/star.svg"
              alt="Star Icon"
              className="w-[48px] md:w-[66px] h-[48px] md:h-[66px]"
            />
            <h2 className="text-[36px] md:text-[48px] font-semibold leading-[120%] text-left mt-[10px]">
              Our Philosophies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[20px] gap-y-[51px] ml-0 md:ml-[100px]">
            {[
              {
                title: 'Simplified Care',
                desc: 'Effective solutions without unnecessary complexity.',
              },
              {
                title: 'Empowering Self-Care',
                desc: 'Helping you embrace confidence and celebrate your individuality.',
              },
              {
                title: 'Uncompromising Quality',
                desc: 'Every product is crafted with precision and care to deliver the best for you.',
              },
              {
                title: 'Sustainability in Action',
                desc: 'Thoughtfully designed products that care for you and the planet.',
              },
              {
                title: 'Innovation with Heart',
                desc: 'Combining cutting-edge science with genuine compassion to deliver results that speak louder than words.',
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-[4px]">
                <img
                  src="/images/tick.svg"
                  alt="Tick Icon"
                  className="w-[28px] h-[28px]"
                />
                <div>
                  <h3 className="text-[20px] md:text-[25px] font-bold leading-[120%] text-left">
                    {item.title}
                  </h3>
                  <p className="text-[14px] md:text-[16px] font-medium text-left">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
