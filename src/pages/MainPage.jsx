import React from "react";
import Scoops from "../components/Scoops/Scoops";
import Toppings from "../components/Toppings/Toppings";
import Form from "../components/Form/Form";

const MainPage = () => {
  return (
    <div>
      <Scoops />
      <Toppings />
      <Form />
    </div>
  );
};

export default MainPage;
