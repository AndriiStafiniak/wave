import {
  Paragraph,
  Slice,
  SliceContener,
  SliceParagraph,
  SliceTitle,
  SubTitle,
  Title,
  WrapperStyled,
} from "./style";
import { ReactComponent as Icon } from "../../../images/icons/location.svg";

export const QuestionSection = () => {
  return (
    <WrapperStyled>
      <Title>Questions?</Title>
      <SubTitle>Keep in Touch with Us</SubTitle>
      <Paragraph>
        If you have any questions, call us or write an e-mail and our advisers
        will contact you.
      </Paragraph>
      <SliceContener>
        <Slice>
          <Icon />
          <SliceTitle>Our Studio</SliceTitle>
          <SliceParagraph>Adres</SliceParagraph>
        </Slice>
        <Slice>
          <Icon />
          <SliceTitle>Our Studio</SliceTitle>
          <SliceParagraph>Adres</SliceParagraph>
        </Slice>
        <Slice>
          <Icon />
          <SliceTitle>Our Studio</SliceTitle>
          <SliceParagraph>Adres</SliceParagraph>
        </Slice>
      </SliceContener>
    </WrapperStyled>
  );
};
