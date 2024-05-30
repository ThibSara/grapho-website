import React from "react";
import WrittingCard from "./WrittingCard";

const BeforeAfterSection = () => {
  return (
    <div className="flex row  ">
      <WrittingCard />
      <WrittingCard ChildName="Julien 6ème" />
      <WrittingCard ChildName="Antonin 1ère" />
    </div>
  );
};

export default BeforeAfterSection;
