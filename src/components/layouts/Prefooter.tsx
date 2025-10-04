"use client";
import Container from "../container";
import { PreFooterCardProps } from "@/types/LandingPage";
import PreFooterCard from "@/components/ui/PreFooterCard";

const prefooterCards: PreFooterCardProps[] = [
  {
    imageurl: "/images/prefooter1.svg",
    text: "Join our community of innovators and make a difference.",
    cta: { text: "READ MORE", link: "/get-involved" },
  },
  {
    imageurl: "/images/prefooter2.svg",
    text: "Stay updated with our latest news and impact stories.",
    cta: { text: "READ MORE", link: "/stay-informed" },
  },
  {
    imageurl: "/images/prefooter3.svg",
    text: "Support our mission to create lasting change.",
    cta: { text: "READ MORE", link: "/donate" },
  },
];

const Prefooter = () => {
  return (
    <section className="bg-gray-50 py-12">
      <Container size="lg">
        <div className="flex flex-col gap-1 w-[22.5rem] h-[6rem] mb-10 xl:w-[80rem] xl:[5rem] xl:mb-5">
        <h2 className="mobile-body text-accent text-[14px] font-semibold xl:body">Stay Informed</h2>
        <p className="mobile-body text-secondary text-left text-lg font-bold w-full xl:body ">
        Through advocacy, education, and support, we’re building a stigma-free future for mental health in Nigeria
        </p>
        </div>
       <section className="w-full  bg-gray-50">
  <div
    className="
      flex overflow-x-auto scroll-smooth gap-6 px-4
      md:grid md:grid-cols-3 md:overflow-x-visible md:px-0
    "
  >
    {prefooterCards.map((card, index) => (
      <div
        key={index}
        className="flex-shrink-0 w-[100%] sm:w-[60%] md:w-auto"
      >
        <PreFooterCard {...card} />
      </div>
    ))}
  </div>
</section>

      </Container>
    </section>
  );
};

export default Prefooter;

