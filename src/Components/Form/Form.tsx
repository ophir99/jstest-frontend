import React, { useState } from "react";

export default function Form(props: any) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [limit, setLimit] = useState("");

  const [nameerr, setNameError] = useState(false);
  const [numbererr, setNumberError] = useState(false);
  const [limiterr, setLimitError] = useState(false);

  function handleSubmit() {
    if (name || number || limit) {
      if (!nameerr && !numbererr && !limiterr) {
        props.addCard({ name, number, limit, balance: 0 });
      } else {
        alert("Please provide correct values");
      }
    } else {
      setFormErr();
    }
  }

  function setFormErr() {
    setNameError(true);
    setNumberError(true);
    setLimitError(true);
  }

  function handleName(e: React.FormEvent<HTMLInputElement>) {
    const { value } = e.currentTarget;
    if (!value) {
      setNameError(true);
      setName(value);
      return;
    }
    setName(value);
    setNameError(!true);
  }
  function handleNumber(e: React.FormEvent<HTMLInputElement>) {
    const regex = /^\d{10}$/;
    const { value } = e.currentTarget;
    if (regex.test(value)) {
      setNumber(value);
      setNumberError(!true);
    } else {
      setNumber(value);
      setNumberError(true);
    }
  }
  function handleLimit(e: React.FormEvent<HTMLInputElement>) {
    const { value } = e.currentTarget;
    if (parseInt(value) >= 0) {
      setLimit(value);
      setLimitError(!true);
    } else {
      setLimit(value);
      setLimitError(true);
    }
  }
  function nameError() {
    return nameerr ? "Not a valid name" : "";
  }
  function numberError() {
    return numbererr ? "Not a valid credit card" : "";
  }
  function limitError() {
    return limiterr ? "Minimum limit should be 0" : "";
  }

  function showErrorMessages() {
    if (props.error) {
      return props.error !== "API-NETWORK" ? (
        <p>
          Sorry. It is not a valid credit card number. <br />
          Make sure, the number you give is validated by Luhn Algo. <br />
          For eg: 3004679316, 2688879135, 4669056071, 2817505197 ..etc
        </p>
      ) : (
        "Network issue. Please make sure backend is running"
      );
    }
  }
  return (
    <table className={"card"}>
      <tbody>
        <tr>
          <td>ADD</td>
        </tr>
        <tr>
          <td>Name </td>
        </tr>
        <tr>
          <td>
            <input
              type="text"
              value={name}
              aria-label="{'Enter name}"
              placeholder={"Enter name"}
              onChange={handleName}
            />
          </td>
          <td>{nameError()}</td>
        </tr>
        <tr>
          <td>Number </td>
        </tr>
        <tr>
          <td>
            <input
              type="text"
              value={number}
              aria-label="{'Enter number}"
              placeholder={"Enter number"}
              onChange={handleNumber}
            />
          </td>
          <td>{numberError()}</td>
        </tr>
        <tr>
          <td>Limit </td>
        </tr>
        <tr>
          <td>
            <input
              type="number"
              value={limit}
              aria-label="{'Enter limit}"
              placeholder={"Enter limit"}
              onChange={handleLimit}
            />
          </td>
          <td>{limitError()}</td>
        </tr>
        <tr>
          <td>
            <button onClick={handleSubmit}>Add card</button>
          </td>
        </tr>
        <tr>
          <td>{showErrorMessages()}</td>
        </tr>
      </tbody>
    </table>
  );
}
