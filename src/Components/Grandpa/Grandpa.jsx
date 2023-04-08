import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Unty from "../Unti/Unty";
import "./Grandpa.css";

export const RingContext = createContext("golden ring");
export const Moneycontext = createContext(0);

const Grandpa = () => {
  const ring = "dimond";
  const [money, setMoney] = useState(0);

  return (
    <div className="grandpa-page">
      <h2>Grandpa page</h2>
      <p>hase money {money}</p>
      <Moneycontext.Provider value={[money, setMoney]}>
        <RingContext.Provider value="Golden ring">
          <section className="grandpa-section">
            <Father ring={ring} />
            <Uncle />
            <Unty></Unty>
          </section>
        </RingContext.Provider>
      </Moneycontext.Provider>
    </div>
  );
};

export default Grandpa;

/*
 *1. Create context
 *2. create a provider and pass a value
 *3. use Context ot receive the value
 */
