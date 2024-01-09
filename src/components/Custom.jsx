import React from "react";
import { Card } from "./Card";

const Custom = () => {
  return (
    <div className=" grid md:grid-cols-3 justify-items-center items-center gap-8">
      {Array.from({ length: 3 }).map((_, i) => (
        <Card />
      ))}
    </div>
  );
};

export default Custom;
