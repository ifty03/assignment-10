import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="">
      <div className=" w-5/6 mx-auto">
        <h2 className="flex justify-start text-5xl font-bold mt-6">
          Our Service Packages
        </h2>
        <p className="md:w-3/6 text-left mt-2 mb-8">
          Exercise involves engaging in physical activity and increasing the
          heart rate beyond resting levels. It is an important part of
          preserving physical and mental health.
        </p>
      </div>
      <div className="grid md:grid-cols-2 w-5/6 mx-auto lg:grid-cols-3 grid-cols-1  gap-5">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
