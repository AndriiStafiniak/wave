import { ContactForm } from "../../../common/ContactUs";
import { Description } from "../styled";
import {
  ContentStyled,
  DescriptionStyled,
  Picture,
  WrapperStyled,
} from "./style";

const imgPath = require("../../../images/Rectangle2699.png");
export const KnowUsSection = () => {
  return (
    <WrapperStyled>
      <ContactForm />
      <ContentStyled>
        <DescriptionStyled>
          Regardless of the size of your project, Wave Europe is here to deliver
          an IT solution tailored for you. Our staff consists of seasoned
          industry professionals who can provide accurate feedback and honest
          assessments to find a perfect fit that meets all of your needs. Got a
          project that's been burning a hole in your mind? Contact us today to
          bring it to life with our dev team.
        </DescriptionStyled>
        <Picture src={imgPath} />
      </ContentStyled>
    </WrapperStyled>
  );
};
