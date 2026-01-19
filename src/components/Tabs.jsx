import React from "react";
import { AniTab, AniTabs } from "./ani-components/AniTabs";

export const Tabs = () => {
  return (
    <div>
      <h1 className="text-3xl" id="tabs">Tabs</h1>
      <hr />
      <p className="my-4">The AniTabs component is used to create tabbed interfaces, allowing users to switch between different views or sections of content within the same area.</p>
      <h3>Simple tabs </h3>
      <AniTabs>
        <AniTab label="First">First tab content</AniTab>
        <AniTab label="Second">Second tab content</AniTab>
        <AniTab label="Third" className="third">Third tab content</AniTab>
        <AniTab disabled label="Fourth">Fourth tab content</AniTab>
      </AniTabs>
      <hr />
       <h3>Simple tabs with centered indicator </h3>
      <AniTabs centered>
        <AniTab label="First">First tab content</AniTab>
        <AniTab label="Second">Second tab content</AniTab>
        <AniTab label="Third" className="third">Third tab content</AniTab>
        <AniTab disabled label="Fourth">Fourth tab content</AniTab>
      </AniTabs>
      <hr />
        <h3 className="mt-6">Full width tabs with colored indicators and text color</h3>
       <AniTabs variant="fullWidth" textColor="secondary" indicatorColor="secondary">
        <AniTab label="First">First tab content</AniTab>
        <AniTab label="Second">Second tab content</AniTab>
        <AniTab label="Third" className="third">Third tab content</AniTab>
        <AniTab disabled label="Fourth">Fourth tab content</AniTab>
      </AniTabs>
      <hr />
        <h3 className="mt-6">Scrollable tabs with witout content</h3>
       <AniTabs variant="scrollable" indicatorColor="secondary" scrollButtons="auto">
        <AniTab label="First" />
        <AniTab label="Second" />
        <AniTab label="Third" />
        <AniTab label="Fourth" />
        <AniTab label="This is a very long tab label for scrolling purposes and it should be truncated" />
        <AniTab label="Sixth" />
        <AniTab label="Seventh" />
        <AniTab label=" Eighth this is for test" />
        <AniTab label="Ninth" />
      </AniTabs>
      <hr />
      <h3>Vertical tabs with colored indicators and text color</h3>
      <AniTabs orientation="vertical" textColor="secondary" indicatorColor="secondary">
        <AniTab label="First">First tab content</AniTab>
        <AniTab label="Second">Second tab content</AniTab>
        <AniTab label="Third" className="third">Third tab content</AniTab>
      </AniTabs>
    </div>
  );
};
