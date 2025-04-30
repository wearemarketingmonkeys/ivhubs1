import React from "react";
import laserHero from "../assets/img/laser/hero.webp";
import laserResult from "../assets/img/laser/result.png";
import hairRemovalIcon from "../assets/img/laser/hair-removal-icon.png";
import calendarIcon from "../assets/img/laser/calendar.png";
import { Link } from "react-router-dom";
import infoIcon from "../assets/img/laser/info.png";
import VerticalCarousel from "../components/VerticalCarousel";
import step1Img from "../assets/img/laser/step1.jpg";
import step2Img from "../assets/img/laser/step2.jpg";
import step3Img from "../assets/img/laser/step3.jpg";
import beforeIcon from "../assets/img/laser/before.png";
import afterIcon from "../assets/img/laser/after.png";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const steps = [
  {
    img: step1Img,
    title: "Laser Treatment",
    desc: "Soprano Titanium hair removal utilizes 3D technology, integrating three laser wavelengths into a single applicator for optimal effectiveness.",
  },
  {
    img: step2Img,
    title: "Targeting Hair Roots",
    desc: "By targeting roots, the laser decreases the blood supply to hair follicles, causing them to become weaker &amp; finer.",
  },
  {
    img: step3Img,
    title: "Inhibition of Hair Growth",
    desc: "The hair follicle chromophores are damaged, inhibiting future hair growth. Hair should begin to fall out approximately 2 weeks later.",
  },
];

const beforeAfter = [
  {
    icon: beforeIcon,
    title: "Before Your Treatment",
    desc: "Shave, the area that you want to get lasered atleast 24hrs before the appointment",
    list: [
      "Avoid sun exposure, tanning beds, and self-tanning products at least 24 hours prior to treatment.",
      "Avoid exfoliating active ingredients on your treatment area for at least 3 days prior to treatment.",
      "Avoid photosensitizing medications, such as antibiotics, for at least 2 days prior to treatment.",
    ],
  },
  {
    icon: afterIcon,
    title: "After Your Treatment",
    list: [
      "Avoid direct sun exposure after laser hair removal, and be sure to wear SPF to help prevent damage.",
      "If skin feels a bit sensitive after treatment, you can utilize an ice pack or Aloe vera Gel to soothe the treatment area.",
      "Feel free to shave between appointments.",
    ],
  },
];

const faq = [
  {
    question: "Who is Laser Hair Removal best for?",
    answer:
      "Our laser hair treatment is safe for all skin types & tones, from tanned to dark skin",
  },
  {
    question: "Is Laser Hair Removal permanent?",
    answer:
      "While laser hair removal isn't a 100% permanent solution, it will significantly reduce future hair growth in treated areas. Hair that returns will be sparse, thinner, and possibly lighter. For best results, we recommend maintenance treatments once or twice a year, depending on your unique needs.",
  },
  {
    question: "What does it feel like?",
    answer:
      "While some areas of the body are naturally more sensitive than others, Laser Hair Removal with soprano titanium is virtually painless, and often described as feeling like a hot stone massage.",
  },
  {
    question: "Can I get Laser Hair Removal if I'm pregnant?",
    answer: "We recommend avoiding laser hair removal during pregnancy.",
  },
  {
    question: "When will I see results?",
    answer:
      "Hair begins to fall out around 2 weeks after your treatment, but it's very important to complete the recommended amount of treatments for optimal results. Though you'll experience smoother skin after this first treatment, the hair will return, so be sure to follow the recommended amount of sessions to ensure lasting results. Laser hair removal generally requires 6-10 treatments depending on hair growth, hair type and color, and the area of removal. Appointments should be spaced about 4 weeks apart for the face and 6 weeks apart for the body.",
  },
  {
    question: "What's the downtime?",
    answer:
      "There's virtually zero downtime—you can go back to work or your daily routine—but you may experience some redness afterward, and must stay out of direct sun for 48 hours",
  },
  {
    question: "I have melanin-rich skin. Is this treatment safe for me?",
    answer:
      "We use the soprano titanium for melanin-rich skin (Nd:Yag|1064), which targets just the melanin in hair, not the skin specifically. Because of that, it's safe for all skin tones, but especially melanin-rich skin.",
  },
];

const LaserHairRemoval = () => {
  return (
    <div className="laser-hair-removal">
      <div className="laser-hero">
        <div className="container">
          <div className="details-wrap">
            <div className="left">
              <img src={laserHero} alt="laser hair removal" />
            </div>
            <div className="right">
              <h1>
                Soprano Titanium - <br /> Laser Hair Removal
              </h1>
              <p>
                <i>
                  Unlimited Hair Removal Sessions for one year -{" "}
                  <strong>AED 9,999</strong>
                </i>
              </p>
              <div className="description">
                Remove unwanted hair with the Most Efficient, Painless, Safe for
                all skin SOPRANO TITANIUM.
              </div>
              <div className="unwanted-hair">
                <img src={hairRemovalIcon} alt="hair removal" />
                <span>Unwanted Hair</span>
              </div>
              <div className="description">
                Soprano Titanium hair removal is compatible with all skin types
                and tones, offering virtually painless treatment akin to a
                soothing hot stone massage. Its rapid and efficient process
                outperforms other laser hair removal methods available, ensuring
                swift and effective results. Additionally, it is renowned for
                its ability to gently lift the skin, leaving it feeling firmer
                and rejuvenated.
              </div>
              <div className="ideal-for">
                <p>
                  <strong>Ideal For:</strong>
                </p>
                <p>All Skin Types & Tones | Darker Hair | Melanin-Rich Skin</p>
              </div>
              <div className="btn-wrap">
                <Link to={"/booking"} className="btn">
                  BOOK Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="how-it-works">
        <div className="container">
          <VerticalCarousel steps={steps} />
        </div>
      </div>

      <div className="before-after">
        <div className="container">
          <div className="before-after-wrap">
            {beforeAfter.map((x, index) => (
              <div className="wrapper" key={index}>
                <img src={x?.icon} alt={x.title} />
                <h1>{x?.title}</h1>
                {x.desc && <h2>{x.desc}</h2>}
                <ul>
                  {x?.list.map((y, yIndex) => (
                    <li key={yIndex}>{y}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="laser-result">
        <div className="container">
          <div className="details-wrap">
            <div className="left">
              <img src={laserResult} alt="laser hair removal" />
            </div>
            <div className="right">
              <h1>Results</h1>
              <div className="description">
                Hair should begin to fall out approximately 2 weeks after your
                first treatment, but it's important to complete your recommended
                number of sessions to ensure smooth, hairless skin
              </div>
              <div className="unwanted-hair">
                <img src={calendarIcon} alt="hair removal" />
                <span>Frequency</span>
              </div>
              <div className="description">
                We recommend about 6-10 treatments depending on hair growth,
                hair type & color, and size of the treatment area. Your
                appointments should be spaced about 4-6 weeks apart.
              </div>
            </div>
          </div>
          <div className="info">
            <img src={infoIcon} alt="info" />
            <span>
              Shave, the area that you want to get lasered atleast 24hrs before
              the appointment.
            </span>
          </div>
        </div>
      </div>

      
      <div className="faq">
        <div className="container">
          <div className="faq-wrap">
            <h1>Questions? We've Got Answers</h1>
            <Accordion allowZeroExpanded>
              {faq.map((x, index) => (
                <AccordionItem key={index}>
                  <AccordionItemHeading>
                    <AccordionItemButton>{x.question}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="tips-wrapper">
                      {x.answer}
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaserHairRemoval;
