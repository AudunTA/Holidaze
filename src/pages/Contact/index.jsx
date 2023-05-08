import React from "react";
import { useState } from "react";
function Contact() {
  const [input, setInput] = useState("");
  const [verdi, nyVerdi] = useState([]);
  return (
    <>
      <input
        placeholder="ny verdi"
        value={input}
        onChange={() => setInput(event.target.value)}
      ></input>
      <button onClick={() => nyVerdi([...verdi, input])}>add verdi</button>
      <button onClick={() => console.log(verdi)}>log verdi</button>
    </>
  );
}

export default Contact;
