import React from "react";
import WrittingCard from "./WrittingCard";

const BeforeAfterSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
      <WrittingCard />
      <WrittingCard ChildName="Julien 6ème" />
      <WrittingCard ChildName="Antonin 1ère" />
    </div>
  );
};

export default BeforeAfterSection;
