import { Adress } from "./components/Adress";
import { Age } from "./components/Age";

let userOne = {
  name: "Stojan",
  lastName: "Stojanov",
  adress: "Struga",
  age: 20,
};
let userTwo = {
  name: "Petko",
  lastName: "Petkovski",
  adress: "Skopje",
  age: 16,
};
let userThree = {
  name: "Dimitar",
  lastName: "Dimitrov",
  adress: "Bitola",
  age: 17,
};
let userFour = {
  name: "Rade",
  lastName: "Radevski",
  adress: "Skopje",
  age: 22,
};

export function App() {
  return (
    <div id=" app">
      <Age
        userOne={userOne}
        userTwo={userTwo}
        userThree={userThree}
        userFour={userFour}
      />
      <hr />
      <Adress
        userOne={userOne}
        userTwo={userTwo}
        userThree={userThree}
        userFour={userFour}
      />
    </div>
  );
}
