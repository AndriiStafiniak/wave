import {
  StyledIcon,
  TitleContactSection,
  WrapperContact,
  WrapperContactSection,
} from "./style";

export const ContactSection = () => {
  return (
    <WrapperContactSection>
      <StyledIcon />
      <WrapperContact>
        <TitleContactSection>Contact</TitleContactSection>
      </WrapperContact>
    </WrapperContactSection>
  );
};
