import "./index.css";
import React, { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [people, setPeople] = useState("");
  const [total, setTotal] = useState(0)
  const [custom, setCustom] = useState("")
  const tips = [
    { value: 5, id: 1 },
    { value: 10, id: 2 },
    { value: 15, id: 3 },
    { value: 25, id: 4 },
    { value: 50, id: 5 },
  ];

  const handleChange = (e) => {
    const billLimit = 7
    setBill(e.target.value.slice(0, billLimit));
  };
  const handleChangePeople = (e) => {
    const peopleLimit = 2
    setPeople(e.target.value.slice(0, peopleLimit));
  };
  // HESAP
  const handleTip = (e) => {
    setCustom(e.target.value)
    setTipAmount(Number((bill * e.target.value) / 100 / people).toFixed(2));
    setTotal(Number((bill / people) + ((bill * e.target.value) / 100 / people)).toFixed(2))
  };


  const handleClick = (e) => {
    e.preventDefault();
    const tip = e.target.value;
    setTipAmount(Number((bill * tip) / 100 / people).toFixed(2));
    setTotal(Number((bill / people) + (bill * tip) / 100 / people).toFixed(2))
  };
  // İNPUT RESET
  const resetClick = (a) => {
    setBill("")
    setTipAmount("")
    setPeople("")
    setTotal("")
    setCustom("")
  }

  const mapped = tips.map((tip) => {
    return (
      <form id={tip.id}>
        <button className="btn"
          disabled={bill === "" || people === ""}
          key={tip.id}
          value={tip.value}
          onClick={handleClick}
        >
          {tip.value}%
        </button>
      </form>
    );
  });
  return (
    <div className="bigBox">
      <div>
        <div className="leftSide">
          <div className="inpt">
            <h1>
              Bill
            </h1>
            <input placeholder="0" value={bill} onChange={handleChange} type="number" />
          </div>
          <div className="inpt">
            <h1>
              Number of People
            </h1>
            <input placeholder="0" value={people} onChange={handleChangePeople} type="number" />
          </div>
          <div >
            <h1>Select Tip %</h1>
            <div className="btns">
              {mapped}
              <input
                className="btn"
                placeholder="CUSTOM"
                disabled={
                  people === "" || bill === ""
                }
                type="tel"
                maxLength={2}
                value={custom}
                onChange={handleTip}
              />
            </div>
          </div>

        </div>
        {/* RİGHT SİDE */}
        <div className="rightSide">
          <div>
            <div>
              <div className="total">
                <div>
                  <div className="totalinside">
                    <h1>
                      Tip Amount
                    </h1>
                    <h3>
                      / Person
                    </h3>
                  </div>
                  <div className="result" >
                    $ {tipAmount}
                  </div>
                </div>
              </div>

              <div className="total">
                <div >
                  <div className="totalinside">
                    <h1>
                      Total
                    </h1>
                    <h3>
                      / Person
                    </h3>
                  </div>
                  <div className="result">
                    $ {total}
                  </div>
                </div>

              </div>
            </div>
            <button className="resetbtn" disabled={people === "" || bill === ""} onClick={resetClick}>RESET</button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
