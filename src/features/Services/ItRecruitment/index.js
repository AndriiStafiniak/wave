import { BenefitsSection } from "../../../common/BenefitSection";
import { ContactForm } from "../../../common/ContactUs";
import { ExpertiseSection } from "../../../common/ExpertiseSection";
import { SecondSetion } from "../../../common/SecondSection";
import { Section } from "../../../common/Section";
import { ExtraText, ExtraTitleContent } from "../styled";

export const It = () => {
  const pathImg = require("../../../images/BisImg.png");
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
          <div>
            <span>
              <ExtraText>IT Recruitment – Wave</ExtraText>
            </span>
            <span>
              Wave Talent
              <ExtraTitleContent> Hunting</ExtraTitleContent>
            </span>
          </div>
        }
        description="Running a successful business requires more than just hard work. 
         It takes strategic planning, expert guidance, and a deep understanding of your industry. Our team of experienced consultants has helped businesses of all sizes achieve their goals by providing customized advice tailored to meet their specific needs.
         "
        buttonText="GO TO FORM"
        imageUrl={pathImg}
      />
      <SecondSetion
        title="Why Wave?"
        description="We take the stress out of recruitment by doing all the hiring work for you. Our team of experts has years of experience in tech recruitment and knows exactly what it takes to find the best candidates for your company."
        listItems={listItems}
        imageUrl={imgpath}
        extraArrowContent="Our results speak for themselves:"
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
