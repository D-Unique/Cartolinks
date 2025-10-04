"use client";
import { useEffect, useRef, useState } from "react";
import Container from "../container";
import TimelineCard from "@/components/ui/TimlineCard"

import { motion } from "framer-motion";
type mileStoneProps = {
  date?: string;
  title: string;
  description: string;
  imageUrl?: string;
  cta?: { link: string; text: string };
};
const AnimatedTimelineCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: [0.1, 0.4, 0.8] }
    );

    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0, y: 60 }}
      animate={
        visible
          ? { scale: 1, opacity: 1, y: 0 }
          : { scale: 0.85, opacity: 0.5, y: -40 }
      }
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

const milestones: mileStoneProps[] = [
  {
    date: "2019",
    title: "Asido Campus Network Launched",
    description: "Pioneering student-led mental health advocacy at the University of Ibadan.",
    imageUrl: "/images/timeline10.svg",
  },
  {
    title: "Optimal Mental Health Debut",
    description: "Introducing a platform dedicated to promoting mental well-being and awareness in Ibadan, Lagos and Abuja.",
    imageUrl: "/images/timeline4.svg",
  },
  {
    title: "Community Engagement Series Begins",
    description: "First interactive monthly series fostering dialogue and education on mental health.",
    cta: { text: "Learn More", link: "/community-engagement" },
  },
  {
    date: "2020",
    title: "Unashamed Campaign Launched",
    description: "Challenging stigma and empowering open conversations about mental health.",
    imageUrl: "/images/timeline12.svg",
    cta: { text: "Learn More", link: "/unashamed-campaign" },
  },
  {
    title: "LIMI Africa Storytelling Series Kicks Off",
    description: "Sharing real stories to amplify voices and lived experiences in mental health.",
    imageUrl: "/images/timeline3.svg",
    cta: { text: "Learn More", link: "/limi-africa-storytelling" },
  },
  {
    title: "Emergency Helpline Inaugurated",
    description: "Launching a lifesaving support line for psychosocial emergencies.",
    cta: { text: "Learn More", link: "/emergency-helpline" },
  },
  {
    date: "2021",
    title: "Project Hope Commences",
    description: "Providing targeted support and hope to those facing mental health challenges.",
    cta: { text: "Learn More", link: "/project-hope" },
  },
  {
    title: "First Suicide Prevention Walk",
    description: "Uniting the community to raise awareness and advocate for prevention.",
    imageUrl: "/images/timeline7.svg",
  },
  {
    title: "Inaugural JAME Competition",
    description: "Empowering youth through mental health-themed creativity and advocacy.",
    imageUrl: "/images/timeline5.png",
  },
  {
    title: "Donate-a-Book Drive Launched",
    description: "Promoting knowledge-sharing and mental health education through books.",
    imageUrl: "/images/timeline11.svg",
  },
  {
    date: "2022",
    title: "Mindset Radio Show Goes Live",
    description: "Weekly conversations on mental health reaching a broader audience.",
    imageUrl: "/images/timeline8.svg",
    cta: { text: "Listen Now", link: "/mindset-radio-show" },
  },
 {
   date: "2023",
   title: "Mental Health Bill Passed",
   description: "Successfully advocating for the historic passing of Nigeria’s Mental Health Bill."
 },
 {
   title: "Lagos State Recognition",
   description: "Honored for outstanding contributions to community mental health and advocacy.",
   imageUrl: "/images/timeline9.jpeg",
    cta: { text: "Learn More", link: "/lagos-state-recognition" },
 },
 {
   date: "2024",
    title: "ACAMH LMICs Innovation Award",
   description: "Recognized internationally for innovation in mental health research and practice.",
    imageUrl: "/images/timeline8.svg",
    cta: { text: "Learn More", link: "/acamh-award" },
 },
 {
  title: "Most Outstanding Student Association",
   description: "Asido Campus Network honored for exceptional impact on Nigerian campuses.",
    imageUrl: "/images/timeline13.png",
   cta: { text: "Learn More", link: "/future-initiatives" }
  
 },
 {
  title: "National Suicide Prevention Conference",
   description: "Bringing stakeholders together in Abuja to advance prevention efforts nationwide.",
   imageUrl: "/images/timeline1.svg",
    cta: { text: "Learn More", link: "/future-initiatives" }
 },
 {
    title: "Advocacy Visit to Attorney General",
   description: "Campaigning for the decriminalization of attempted suicide in Nigeria.",
   imageUrl: "/images/timeline2.svg",
 },
  {
    title: "Public Hearing Mobilization",
    description: "Engaging the public and submitting a formal memorandum to influence policy.",
    cta: { text: "Learn More", link: "/future-initiatives" }
  },
  {
    title: "Partnership With Lifeline International",
    description: "Forging global collaboration to strengthen crisis intervention and support.",
    imageUrl: "/images/timeline6.png",

  }

];

const Timeline = () => {
  useEffect(() => {
    const activeLine = document.getElementById("activeLine");
    const line = document.querySelector(".timeline-line") as HTMLElement;

    const handleScroll = () => {
      if (!activeLine || !line) return;

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;

      const lineHeight = line.offsetHeight;
      const progress = scrollPercent * lineHeight;
      activeLine.style.height = `${progress}px`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full flex flex-col bg-white">
      <Container size="app" className="py-12">
        {/* Intro */}
        <div className="text-center text-secondary mobile-body text-lg xl:text-4xl mb-16">
          Since inception in 2019, Asido Foundation has led bold advocacy for mental health reforms.
          These range from public awareness campaigns to the passing of the 2021 Mental Health Act.
        </div>

        {/* Timeline wrapper */}
        <div className="relative flex justify-center">
          {/* Base line */}
          <div className="timeline-line relative w-1 bg-gray-300 h-full">
            <div
              id="activeLine"
              className="absolute top-0 left-0 w-full bg-blue-500"
              style={{ height: "0px" }}
            ></div>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-20 ml-8 xl:ml-0">
           {milestones.map((item, index) => (
        <div
          key={index}
          className={`
            relative flex flex-col items-center
            xl:w-[50%]
            ${index % 2 === 0 ? "xl:self-start xl:pr-16" : "xl:self-end xl:pl-16"}
          `}
        >
          <AnimatedTimelineCard>
            <TimelineCard {...item} />
          </AnimatedTimelineCard>
        </div>
      ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Timeline;
