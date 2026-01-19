import { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";

export const AniTabs = ({ children, ...props }) => {
  const [active, setActive] = useState(0);

  const tabs = Array.isArray(children) ? children : [children];

  return (
    <Box sx={{ display : "flex", flexDirection: props.orientation === "vertical" ? "row" : "column" }}>
      {/* Tab headers */}
      <Tabs
        {...props}
        value={active}
        onChange={(e, newValue) => setActive(newValue)}
      >
        {tabs.map((child, index) => (
          <Tab
            {...child.props}
            key={index}
            label={child.props.label}
          />
        ))}
      </Tabs>

      {/* Tab content */}
      <Box mt={2}>
        {tabs[active]}
      </Box>
    </Box>
  );
};



export const AniTab = ({ children }) => {
  return <>{children}</>;
};

