"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ReactLenis } from "lenis/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Card = ({ title, copy, index }) => {
  return (
    <div className="card" id={`card-${index + 1}`}>
      <div className="card-inner">
        <div className="card-content">
          <h1>{title}</h1>
          <p>{copy}</p>
        </div>
        <div className="card-img">
          <img src={`/images/image${(index % 4) + 1}.jpg`} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default function ValuesCards() {
  const cards = [
    {
      title: "Our Philosophy",
      copy: "We believe every child, youth, and family carries inherent strength, dignity, and potential. At Pluming Eagle Lodge, we walk alongside those we serve, with compassion, respect, and cultural integrity. We create safe spaces where voices are heard, stories are honoured, and healing is rooted in tradition. Through this approach, we nurture identity, belonging, and transformation that endures across generations.",
    },
    {
      title: "Our Purpose",
      copy: "To empower Indigenous children, youth, and families to heal, grow, and thrive, while staying rooted in culture, identity, and community.",
    },
    {
      title: "Our Mission",
      copy: "To provide culturally safe, trauma-informed programs that support Indigenous children, youth, and families through all stages of life, fostering healing, resilience, and reconnection.",
    },
    {
      title: "Our Vision",
      copy: "To have a future where Indigenous children, youth, and families are strong, connected, and thriving, surrounded by community, culture, and care.",
    },
  ];

  const container = useRef();

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".card");
      const isMobile = window.innerWidth <= 768;

      // Disable complex animations on mobile for better performance
      if (isMobile) {
        return () => {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
      }

      ScrollTrigger.create({
        trigger: cards[0],
        start: "top 35%",
        endTrigger: cards[cards.length - 1],
        end: "top 65%",
        pin: ".intro",
        pinSpacing: false,
      });

      cards.forEach((card, index) => {
        const isLastCard = index == cards.length - 1;
        const cardInner = card.querySelector(".card-inner");

        // Pin all cards except the last one
        if (!isLastCard) {
          ScrollTrigger.create({
            trigger: card,
            start: "top 35%",
            endTrigger: cards[cards.length - 1],
            end: "top 65%",
            pin: true,
            pinSpacing: false,
          });

          gsap.to(cardInner, {
            y: `-${(cards.length - index) * 14}vh`,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 35%",
              endTrigger: cards[cards.length - 1],
              end: "top 65%",
              scrub: true,
            },
          });
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container }
  );

  return (
    <ReactLenis root>
      <div className="app" ref={container}>
        <section className="cards">
          {cards.map((card, index) => (
            <Card key={index} {...card} index={index} />
          ))}
        </section>
      </div>
    </ReactLenis>
  );
} 