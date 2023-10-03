import { useState } from "react";
import "./App.css";

export function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [showTable, setShowTable] = useState(false);

  return (
    <div>
      <h1>Fourth Homework React</h1>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
        placeholder="Insert your first name"
      />
      <br />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        placeholder="Insert your last name"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <br />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="Insert our email adress"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <label htmlFor="age">Age</label>
      <input
        type="number"
        id="age"
        placeholder="Insert your age"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <br />
      <label htmlFor="country">Country</label>
      <input
        type="text"
        id="country"
        placeholder="Insert your contry"
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          setShowTable(!showTable);
        }}
      >
        {showTable ? "Hide Table" : "Show Table"}
      </button>
      {showTable && (
        <table id="myTable" border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{email}</td>
              <td>{age}</td>
              <td>{country}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
