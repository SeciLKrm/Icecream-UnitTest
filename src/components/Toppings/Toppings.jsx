import axios from "axios";
import { useEffect, useState } from "react";

export default function Toppings() {
  const [tops, setTops] = useState([]);
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3040/soslar").then(
      (res) => setTops(res.data)
      // console.log(res.data)
    );
  }, []);
  const handleChange = (e, top) => {
    // paramtere olarak gelen elemanı sepetten çıkartma
    const filtered = basket.filter((i) => i.name !== top.name);
    // checked değeri true ise elemanı ekler
    // false ise çıkararır
    e.target.checked ? setBasket([...basket, top]) : setBasket(filtered);
  };
  return (
    <div className="container text-light  ">
      <h2>Sos Çeşitleri : {basket.length * 2}$ </h2>
      <p className="fw-bold">
        Tanesi <span className="text-danger fs-5">2$</span>
      </p>
      <div className="row gap-5 my-4 ">
        {tops.map((top) => (
          <div
            style={{ width: "150px" }}
            className="d-flex flex-column align-items-center text-nowrap "
            key={top.name}>
            <img src={top.imagePath} alt="top" className="img-fluid" />
            <label htmlFor={top.name}>{top.name} </label>
            <input
              type="checkbox"
              onChange={(e) => handleChange(e, top)}
              id={top.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
