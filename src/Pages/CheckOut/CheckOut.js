import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ServiceContext } from "../../App";

const CheckOut = () => {
  const services = useContext(ServiceContext);
  const { checkOutId } = useParams();
  const selectedService = services.find(
    (service) => service._id === checkOutId
  );
  const { name, balance, picture } = selectedService;
  console.log(selectedService);
  return (
    <div>
      <h2 className="text-4xl text-orange-700">
        this is checkOut {checkOutId}
      </h2>
      <img src={picture} alt="" />
    </div>
  );
};

export default CheckOut;
