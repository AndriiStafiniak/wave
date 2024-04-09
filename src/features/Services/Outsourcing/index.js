import { BenefitsSection } from "../../../common/BenefitSection";
import { SecondSetion } from "../../../common/SecondSection";
import { Section } from "../../../common/Section";
import { ExpertiseSection } from "../../../common/ExpertiseSection";
import { ExtraTitleContent } from "./styled";
import { ContactForm } from "../../../common/ContactUs";

export const OutSours = () => {
  const pathImg = require("../../../images/OutImg.png");
  const imgpath = require("../../../images/Rectangle1.png");
  const benefitImg = require("../../../images/benefitImg.png");
  const bgImg = require("../../../images/bgImg.png");

  const listItems = [
    "20+ years' experience",
    "30,000+ talents in our database",
  ];

  return (
    <>
      <Section
        title={
          <span>
            The Wave Power of <ExtraTitleContent>Outsourcing</ExtraTitleContent>
          </span>
        }
        description="Are you tired of feeling overwhelmed by tasks that take away from your core competencies? We can help you streamline your operations and boost efficiency — all while saving you time and money."
        buttonText="GO TO FORM"
        imageUrl={pathImg}
      />
      <SecondSetion
        title="Why Wave?"
        description="We take the stress out of recruitment by doing all the hiring work for you. Our team of experts has years of experience in tech recruitment and knows exactly what it takes to find the best candidates for your company."
        listItems={listItems}
        imageUrl={imgpath}
        extraArrowContent="Our results speak for themselves:"
        showArrow={true}
      />
      <BenefitsSection
        title="Benefits of outsourcing with us"
        pathBg={bgImg}
        path={benefitImg}
        contentTitle="Increased efficiency"
        description="Our team will handle tasks quickly and accurately, allowing you to focus on core business activities. You can spend your time and energy on growing your business without worrying about the day-to-day tasks that can slow you down."
      />
      <ExpertiseSection
        contentTitle="Our expertise"
        description="At Wave, we take pride in our expertise in a wide range of tech services. Our team of professionals has years of experience in the industry and is dedicated to staying up-to-date on the latest trends and technologies.
        "
        title="Our Wave process"
        subtitle="We run an initial consultation"
      />
      <SecondSetion
        title="Why Wave?"
        description="We take the stress out of recruitment by doing all the hiring work for you. Our team of experts has years of experience in tech recruitment and knows exactly what it takes to find the best candidates for your company."
        listItems={listItems}
        imageUrl={imgpath}
      />
      <ContactForm />
    </>
  );
};
