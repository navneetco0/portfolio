import { Section } from "../../@components";
import IdentyCard from "./IdentyCard";
import WorkedWith from "./WorkedWith";

export const Hero = () => {
  return (
    <Section style={{marginTop: 0}} id="home">
      <IdentyCard />
      <WorkedWith/>
    </Section>
  );
};
