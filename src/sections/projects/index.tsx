import React from "react";
import DummyBox from "../../@components/dummy-box";
import { Section } from "../../@components";
import {
  helpeeDashboardSS1,
  helpeeHandsLogo,
  helpeeHandsSS1,
  helpeeImg,
  helpeeSS1,
  nuredaroodLogo,
  nuredaroodSS1,
  plans_data,
  project_data,
  service_data,
  toolkit_data,
} from "../../@assets";
import StackedCards from "../../@components/StackedCards";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const cards = [
    {
      id: 1,
      img: nuredaroodSS1,
      thumbnail: nuredaroodLogo,
      title: "Nur-E-Darood",
      description:
        "Salawat/Darood counting app with progress tracking, curated lists, and global leaderboards.",
      link: "",
      backgroundColor: "#279255"
    },
    {
      id: 3,
      img: helpeeSS1,
      thumbnail: helpeeImg,
      title: "Helpee",
      description: "",
      link: "",
      backgroundColor: "#F6F6F6"
    },
    {
      id: 2,
      img: helpeeHandsSS1,
      thumbnail: helpeeHandsLogo,
      title: "Helpee Hands",
      description: "",
      link: "",
      backgroundColor: "#F6F6F6"
    },
    {
      id: 4,
      img: helpeeDashboardSS1,
      thumbnail: helpeeImg,
      title: "Helpee Dashboard",
      description: "",
      link: "",
      backgroundColor: "#F6F6F6"
    },
  ];
  return (
    <>
      <Section
        id="projects"
        heading={project_data.heading}
        paragraph={project_data.paragraph}
      >
        <StackedCards
          cards={cards.map(({ id, ..._ }) => ({
            id,
            content: <ProjectCard {..._} />,
          }))}
          stickyPosition={150}
        />
      </Section>
      <Section
        id="services"
        heading={service_data.heading}
        paragraph={service_data.paragraph}
      />
      <Section
        id="toolkits"
        heading={toolkit_data.heading}
        paragraph={toolkit_data.paragraph}
      />
      <Section
        id="plans"
        heading={plans_data.heading}
        paragraph={plans_data.paragraph}
      />
      <Section
        id="faqs"
        heading={["FAQ"]}
        // paragraph={plans_data.paragraph}
      />
    </>
  );
};

export default Projects;
