import React from "react";

import { FeaturedHeadingContainer, FeaturedHeading } from "./styledComponents";
import Navbar from "../Navbar";

const FeaturedTemples = () => {
  return (
    <>
      <Navbar />
      <FeaturedHeadingContainer>
        <FeaturedHeading>Featured Temples</FeaturedHeading>
      </FeaturedHeadingContainer>
    </>
  );
};

export default FeaturedTemples;
