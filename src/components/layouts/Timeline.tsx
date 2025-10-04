"use client";
import { useEffect, useRef, useState } from "react";
import Container from "../container";
import TimelineCard from "@/components/ui/TimlineCard";
import { motion } from "framer-motion";
import mileStonesData from "@/data/TimeLine";

const AnimatedTimelineCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: [0.1, 0.4, 0.8] }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
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
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

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

  const colors = ["text-accent", "text-accent", "text-red", "text-orange"];

  return (
    <section className="w-full flex flex-col bg-white">
      <Container size="app" className="py-12">
        {/* Intro */}
        <div className="text-center text-secondary mobile-body text-lg xl:text-4xl mb-16">
          Since inception in 2019, Asido Foundation has led bold advocacy for mental health reforms.
          These range from public awareness campaigns to the passing of the 2021 Mental Health Act.
        </div>

        {/* Timeline wrapper */}
        <div className="relative flex md:justify-center">
          {/* Base line */}
          <div className="timeline-line absolute top-12 w-1 bg-gray-300 h-full">
            <div className="absolute w-4 h-4 bg-primary rounded-full transform -translate-x-1.5" id="scrollDot"></div>
            <div
              id="activeLine"
              className="absolute top-0 left-0 w-full bg-primary"
              style={{ height: "0px" }}
            ></div>
             {mileStonesData.map((item, index) => {
    const showDot = index % 3 === 0; // show on first of every 3
    return (
      showDot && item.date && (
        <div
          key={index}
          className="absolute w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 left-1/2"
          style={{ top: `${index * 488}px` }} // adjust spacing to match card distance
        ></div>
      )
    );
  })}

          </div>

          {/* Cards */}
          <div className="flex flex-col gap-20 ml-8 xl:ml-0">
            {mileStonesData.map((item, index) => {
              const colorClass = colors[index % colors.length];
              return (
                <div
                  key={index}
                  className={`relative flex flex-col items-center xl:w-[50%] ${
                    index % 2 === 0
                      ? "xl:self-start xl:pr-16"
                      : "xl:self-end xl:pl-16"
                  }`}
                >
                  {/* Dot aligned with line */}
                  {/* Dots at every dated milestone */}
 
              
                  {/* Card */}
                  <AnimatedTimelineCard>
                    <TimelineCard {...item} colorClass={colorClass} />
                  </AnimatedTimelineCard>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Timeline;
