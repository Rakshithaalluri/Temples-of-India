import React from "react";

import { RecentlyContainer, RecentlyHeading } from "./styledComponents";
import Navbar from "../Navbar";

const RecentlyEditedTemples = () => {
  return (
    <>
      <Navbar />
      <RecentlyContainer>
        <RecentlyHeading>Recently Updated Temples </RecentlyHeading>
      </RecentlyContainer>
    </>
  );
};

export default RecentlyEditedTemples;
