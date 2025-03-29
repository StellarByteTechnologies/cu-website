import { NextPage } from 'next';
import Image from 'next/image';
import TwoSectionLayout from '../components/features/products/TwoSectionLayout';
import Heading from '../components/features/products/Heading';
import Title from '../components/features/products/Title';
import TestimonialComponent from '@/components/TestimonialComponent';
import HeroComponent from '@/components/features/products/HeroComponent';
import IconTextRow from '../components/features/products/IconTextRow';
import DoctorTestimonialSection from '@/components/features/testimonials/DoctorTestimonialSection';
import ProductComparisonSlider from '@/components/features/products/ProductComparisonSlider';
import Container from '../components/ui/Container';

const Home: NextPage = () => {
  const firstSectionData = {
    icon: (
      <Image src="/images/sunscreen.svg" alt="Icon" width={48} height={48} />
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
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <HeroComponent
        videoSrc="/videos/background.mp4"
        title="Science-Driven Care, Visible Results"
        description="Exclusively Available Through Top Dermatologists."
        className="h-screen w-full " // Control max width to prevent overflow
      />

      {/* <div className="w-full px-4 sm:max-w-[1327px] sm:mx-auto mt-12"> */}
      <Container>
        {/* Heading Section */}
        <div className="mb-12 mt-12">
          <Heading text="WHERE SCIENCE MEETS SIMPLICITY" />
        </div>

        {/* IconTextRow Section */}
        <div className="mb-16">
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
        <div className="mb-12 md:mb-20 mt-8">
          <Title text="CU Sunscreen" lineColor="#F68E1E" position="left" />
          <TwoSectionLayout
            firstSectionData={firstSectionData}
            secondSectionData={secondSectionData}
          />
        </div>

        {/* CU Ultra-light Moisturizer Section */}
        <div className="mb-12 md:mb-20 mt-8">
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
        <div className="mb-12 md:mb-20 mt-8">
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
        <div className="mb-12 md:mb-20 mt-8">
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
        <div className="mb-24">
          <Heading text="TRUSTED BY EXPERTS" />
          <div className="mt-10">
            <DoctorTestimonialSection
              testimonials={testimonials}
              slideInterval={5000}
              layout="left"
            />
          </div>
        </div>

        {/* *Diara difference */}
        <div className="my-8">
          <Heading text="THE DIARA DIFFERENCE" />
          <div className="my-4">
            <ProductComparisonSlider
              beforeImage="/images/face.jpg" // Replace with your before image path
              afterImage="/images/face.jpg" // Replace with your after image path
              productIcon="/images/protect.svg" // Replace with your product icon path
              productImage="/images/repair.svg" // Replace with your product image path
              productTitle="Super Hydrating Face Cream" // Example product title
              className="rounded-xl overflow-hidden shadow-lg"
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
      </Container>
    </div>
  );
};

export default Home;
