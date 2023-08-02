import React from "react";

interface CustomFilterProps {
  title: string;
  carYears?: number[];
  carFuel?: number[];
}
const CustomFilter = ({ title, carYears, carFuel }: CustomFilterProps) => {
  return (
    <div className="custom-filter">
      <h3 className="custom-filter__title">{title}</h3>
    </div>
  );
};

export default CustomFilter;
