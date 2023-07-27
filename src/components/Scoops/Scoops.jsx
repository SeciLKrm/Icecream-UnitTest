import { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "axios";
export default function Scoops() {
  const [scoopsData, setScoopsData] = useState([]);
  const [scoopsBasket, setScoopsBasket] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3040/cesitler")
      .then((res) => setScoopsData(res.data));
  }, []);
  // baskete sıfırlama
  const handleReset = (scoop) => {
    const filtered = scoopsBasket.filter((i) => i.name !== scoop.name);
    setScoopsBasket(filtered);
  };
  // sepette aynı üründen kaç tane var
  const findAmount = (scoop) => {
    const found = scoopsBasket.filter((i) => i.name === scoop.name);
    return found.length;
  };
  console.log(scoopsBasket);
  return (
    <div className="container text-light">
      <h1 className="mt-4">Dondurma Çeşitleri</h1>
      <p className="fw-bold">
        Tanesi <span className="text-danger fs-5">3$</span>
      </p>
      <h2>Çeşitler Ücreti :{scoopsBasket.length * 3} $</h2>
      <div className="row p-5 gap-5 justify-content-between ">
        {scoopsData.map((scoop) => {
          const amount = findAmount(scoop);
          return (
            <Card
              scoop={scoop}
              scoopsBasket={scoopsBasket}
              setScoopsBasket={setScoopsBasket}
              handleReset={handleReset}
              amount={amount}
            />
          );
        })}
      </div>
    </div>
  );
}
