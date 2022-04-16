import React, { useEffect, useState } from "react";

const CheckOut = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h2 className="text-4xl text-orange-700">this is checkOut</h2>
    </div>
  );
};

export default CheckOut;
