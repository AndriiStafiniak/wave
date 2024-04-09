import {
  ContentWrapper,
  Description,
  Dot,
  ImageWrapper,
  ListItem,
  SectionContainer,
  Title,
  UnorderedList,
  Img,
  ExtraArrowText,
  ListItems,
  ExtraContentContainer,
  ExtraContentContainerArrow,
} from "./styled";
import { ReactComponent as ArrowSection } from "../../images/icons/arrowSection.svg";
import { ReactComponent as DotIcon } from "../../images/icons/dot.svg";

const dotsPositions = [
  { id: 1, top: "-10px", left: "20%" },
  { id: 2, top: "100px", left: "15%" },
];

export const SecondSetion = ({
  title,
  description,
  listItems,
  imageUrl,
  extraArrowContent,
  showArrow,
}) => {
  return (
    <SectionContainer>
      <ImageWrapper>
        <Img src={imageUrl} alt="Description" />
        {dotsPositions.map((dot) => (
          <Dot key={dot.id} style={{ top: dot.top, left: dot.left }} />
        ))}
      </ImageWrapper>
      <ContentWrapper>
        <Title>{title}</Title>
        <ExtraContentContainerArrow>
          {showArrow && (
            <>
              <ArrowSection />
              <ExtraArrowText>{extraArrowContent}</ExtraArrowText>
            </>
          )}
        </ExtraContentContainerArrow>
        <Description>{description}</Description>
        <UnorderedList>
          {listItems.map((item, index) => (
            <ListItems>
              <DotIcon />
              <ListItem key={index}>{item}</ListItem>
            </ListItems>
          ))}
        </UnorderedList>
      </ContentWrapper>
    </SectionContainer>
  );
};
