"use client";
import Container from "../container";
import { PreFooterCardProps } from "@/types/LandingPage";
import PreFooterCard from "@/components/ui/PreFooterCard";

const prefooterCards: PreFooterCardProps[] = [
  {
    imageurl: "/images/prefooter1.png",
    text: "Join our community of innovators and make a difference.",
    cta: { text: "Get Involved", link: "/get-involved" },
  },
  {
    imageurl: "/images/prefooter2.png",
    text: "Stay updated with our latest news and impact stories.",
    cta: { text: "Stay Informed", link: "/stay-informed" },
  },
  {
    imageurl: "/images/prefooter3.png",
    text: "Support our mission to create lasting change.",
    cta: { text: "Donate Now", link: "/donate" },
  },
];

const Prefooter = () => {
  return (
    <section className="bg-gray-50 py-12">
      <Container size="lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {prefooterCards.map((card, index) => (
            <PreFooterCard key={index} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Prefooter;

