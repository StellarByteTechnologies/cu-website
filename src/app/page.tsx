import { NextPage } from 'next';
import Image from 'next/image';
import TwoSectionLayout from '../components/TwoSectionLayout';
import Heading from '../components/Heading';
import Title from '../components/Title';
import TestimonialComponent from '@/components/TestimonialComponent';
import HeroComponent from '@/components/HeroComponent';
import IconTextRow from '../components/IconTextRow';
import DoctorTestimonialSection from '@/components/DoctorTestimonialSection';
import ProductComparisonSlider from '@/components/ProductComparisonSlider';

const Home: NextPage = () => {
  const firstSectionData = {
    icon: (
      <Image src="/images/sunscreen.svg" alt="Icon" width={48} height={48} />
    ),
    centerImage: (
      <Image src="/images/hydrate.svg" alt="Center" width={150} height={150} />
    ),
    bottomRightImage: (
      <Image
        src="/images/stamp.svg"
        alt="Bottom Right"
        width={120}
        height={115}
      />
    ),
    pillContent: [
      'Anti-Pollution',
      'D-Tan Formula',
      'Non comedogenic',
      'Prevents premature aging',
    ],
  };

  const secondSectionData = {
    sliderImages: [
      <Image
        key="1"
        src="/images/slider.svg"
        alt="Slide 1"
        width={700}
        height={500}
      />,
      <Image
        key="2"
        src="/images/slider.svg"
        alt="Slide 2"
        width={700}
        height={500}
      />,
      <Image
        key="3"
        src="/images/slider.svg"
        alt="Slide 3"
        width={700}
        height={500}
      />,
    ],
  };

  const testimonials = [
    {
      doctorImage: '/images/doctorOne.png', // Path to the doctor image
      videoSrc: '/videos/video1.mp4', // Path to the video
      testimonialText:
        'This sunscreen  provides great protection and keeps my skin hydrated throughout the day.',
      svgPath: '/images/quote.svg', // Path to the SVG icon
      name: 'Dr. Rohan Mehra', // Doctor's Name
      occupation: 'Dermatologist, Skin Care Clinic', // Doctor's Occupation
    },
    {
      doctorImage: '/images/doctorOne.png', // Reused same doctor image
      videoSrc: '/videos/video1.mp4', // Reused same video
      testimonialText:
        'It provides great protection and keeps my skin hydrated throughout the day.',
      svgPath: '/images/quote.svg',
      name: 'Dr. Anita Kapoor', // Changed Name
      occupation: 'Dermatologist, Skin Care Clinic',
    },
    {
      doctorImage: '/images/doctorOne.png',
      videoSrc: '/videos/video1.mp4',
      testimonialText: 'This sunscreen is perfect for all skin types.',
      svgPath: '/images/quote.svg',
      name: 'Dr. Rahul Sharma', // Changed Name
      occupation: 'Dermatologist, Skin Care Clinic',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navbar */}

      {/* Hero Section */}
      <HeroComponent
        videoSrc="/videos/background.mp4"
        title="Science-Driven Care, Visible Results"
        description="Exclusively Available Through Top Dermatologists."
      />

      <div className="max-w-[1327px] mx-auto px-4">
        {/* Heading Section */}
        <div className="my-8">
          <Heading text="WHERE SCIENCE MEETS SIMPLICITY" />
        </div>

        {/* IconTextRow Section */}
        <div className="my-8">
          <IconTextRow
            items={[
              {
                svgPath: '/images/protect.svg',
                text: 'PROTECT',
                textColor: '#F68E1E',
              },
              {
                svgPath: '/images/hydrate.svg',
                text: 'HYDRATE',
                textColor: '#0A73B9',
              },
              {
                svgPath: '/images/repair.svg',
                text: 'REPAIR',
                textColor: '#0AB96D',
              },
            ]}
          />
        </div>

        {/* CU Sunscreen Section */}
        <div className="my-8">
          <Title text="CU Sunscreen" lineColor="#F68E1E" position="left" />
          <TwoSectionLayout
            firstSectionData={firstSectionData}
            secondSectionData={secondSectionData}
          />
        </div>

        {/* CU Ultra-light Moisturizer Section */}
        <div className="my-8">
          <Title
            text="CU Ultra-light Moisturizer"
            lineColor="#0A73B9"
            position="right"
          />
          <TwoSectionLayout
            firstSectionData={firstSectionData}
            secondSectionData={secondSectionData}
          />
        </div>

        {/* Ronagen Hair Serum Section */}
        <div className="my-8">
          <Title
            text="Ronagen Hair Serum"
            lineColor="#0AB96D"
            position="left"
          />
          <TwoSectionLayout
            firstSectionData={firstSectionData}
            secondSectionData={secondSectionData}
          />
        </div>

        {/* Ronagen + Hair Serum Section */}
        <div className="my-8">
          <Title
            text="Ronagen+ Hair Serum"
            lineColor="#0AB96D"
            position="right"
          />
          <TwoSectionLayout
            firstSectionData={firstSectionData}
            secondSectionData={secondSectionData}
          />
        </div>

        {/* Experts Section */}
        <div className="my-8">
          <Heading text="TRUSTED BY EXPERTS" />
          <div className="my-4">
            <DoctorTestimonialSection
              testimonials={testimonials}
              slideInterval={5000}
              layout="left"
            />
          </div>
        </div>

        {/* *Diara Fifference */}
        <div className="my-8">
          <Heading text="THE DIARA DIFFERENCE" />
          <div className="my-4">
            <ProductComparisonSlider
              beforeImage="/images/face.jpg" // Replace with your before image path
              afterImage="/images/face.jpg" // Replace with your after image path
              productIcon="/images/protect.svg" // Replace with your product icon path
              productImage="/images/repair.svg" // Replace with your product image path
              productTitle="Super Hydrating Face Cream" // Example product title
            />
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="my-8">
          <Heading text="What our users say" />
          <div className="my-4">
            <TestimonialComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
