import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const WrittingExamples = () => {
  return (
    <div className="w-full max-w-6xl flex justify-center">
      <div className="p-4 md:p-6">
        <Card>
          <CardContent className="flex flex-col  p-6">
            <img
              src={"/images/carousel/writing-child.jpg"}
              alt={"pagnanini"}
              className="mb-4 w-full h-64 object-cover rounded"
            />
            <h2 className="text-lg text-primary font-semibold  ">{"hello"}</h2>
            <p className="">{"world"}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
