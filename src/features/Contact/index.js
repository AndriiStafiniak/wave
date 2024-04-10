import { ContactForm } from "../../common/ContactUs";
import { ContactSection } from "./ContactSection";
import { QuestionSection } from "./QuestionSection";
import { MyMapComponent } from "./Map";

export const Contact = () => {
  return (
    <>
      <ContactSection />
      <QuestionSection />
      <MyMapComponent />
      <ContactForm />
    </>
  );
};
