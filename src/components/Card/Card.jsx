export default function Card({
  scoop,
  setScoopsBasket,
  scoopsBasket,
  handleReset,
  amount,
}) {
  return (
    <div
      className="d-flex flex-column align-items-center  "
      style={{ width: "200px" }}>
      <img src={scoop.imagePath} className="img-fluid" alt="cesit" />
      <label className="lead my-2">{scoop.name}</label>
      <div className="gap-3 d-flex m-2 align-items-center">
        <button className="btn bg-danger" onClick={() => handleReset(scoop)}>
          Sıfırla
        </button>
        <span data-testid="amount-span">{amount} </span>
        <button
          className="btn  bg-warning"
          onClick={() => setScoopsBasket([...scoopsBasket, scoop])}>
          Ekle
        </button>
      </div>
    </div>
  );
}
