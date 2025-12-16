import { AniHeading } from "./AniHeading";
import AniMain from "./AniMain";

export const Mains = () => {
  const rightMenu = [
    {
      name: "GitHub",
      url: "https://github.com/AniLibrary",
      why: "Check out our code repository.",
    },
    {
      name: "Documentation",
      url: "https://anilibrary.com/docs",
      how: "Read the full documentation.",
    },
    { name: "Contact", url: "https://anilibrary.com/contact" },
  ];
  return (
    <>
      <AniMain
        className="p-3"
        heading="Main Heading"
        detail="This is a detail description for the main content area. It can be as long as you like."
        rightMenu={rightMenu}
        leftMenu={rightMenu}
      >
        <AniHeading type="h1">This is heading level 1</AniHeading>
        <AniHeading type="h2">This is heading level 2</AniHeading>
        <AniHeading type="h3">This is heading level 3</AniHeading>
        <AniHeading type="h4">This is heading level 4</AniHeading>
        <AniHeading type="h5">This is heading level 5</AniHeading>
        <AniHeading type="h6">This is heading level 6</AniHeading>
        <AniHeading type="lead">This is a lead heading</AniHeading>
        <p className="mt-2 text-primary">This is information with primary color</p>
        <p className="mt-2 text-secondary">This is information with secondary color</p>
        <p className="mt-2 text-success">This is information with success color</p>
        <p className="mt-2 text-danger">This is information with danger color</p>
        <p className="mt-2 text-warning">This is information with warning color</p>
        <p className="mt-2 text-info">This is information with info color</p>
        <p className="mt-2 text-light">This is information with light color</p>
      </AniMain>
    </>
  );
};
