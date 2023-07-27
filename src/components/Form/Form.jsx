import { useState } from "react";

export default function Form() {
  const [isVisible, setIsVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="d-flex justify-content-center align-items-center gap-3 my-5">
      <input
        type="checkbox"
        id="terms"
        onChange={(e) => setIsChecked(e.target.checked)}
        className="form-check-input"
      />
      <div className="terms text-nowrap">
        <p
          style={{ visibility: isVisible ? "visible" : "hidden" }}
          data-testid="popup"
          className="bg-light p-2 rounded shadow">
          Size gerçekten birşey teslim etmeyeceğiz
        </p>
        <label htmlFor="terms">Koşulları okudum ve kabul ediyorum</label>
      </div>

      <button
        disabled={!isChecked}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="bg-warning border-0 rounded fw-3 p-1">
        Siparişi Onayla
      </button>
    </div>
  );
}
