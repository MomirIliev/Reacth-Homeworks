export function Adress({ userOne, userTwo, userThree, userFour }) {
  console.log(userOne);
  let notFromSkopje = [];
  return (
    <div id="adress">
      <h3>Students from Skopje</h3>
      <ul>
        {userOne.adress === "Skopje" ? (
          <li>
            {userOne.name} {userOne.lastName} {userOne.age}
          </li>
        ) : (
          notFromSkopje.push(userOne)
          //   <p>Error, this student is from {userOne.adress}</p>
        )}
        {userTwo.adress === "Skopje" ? (
          <li>
            {userTwo.name} {userTwo.lastName} {userTwo.age}
          </li>
        ) : (
          notFromSkopje.push(userTwo)
          //   <p>Error, this student is from {userTwo.adress} </p>
        )}
        {userThree.adress === "Skopje" ? (
          <li>
            {userThree.name} {userThree.lastName} {userThree.age}
          </li>
        ) : (
          notFromSkopje.push(userThree)
          //   <p>Error, this student is from {userThree.adress} </p>
        )}
        {userFour.adress === "Skopje" ? (
          <li>
            {userFour.name} {userFour.lastName} {userFour.age}
          </li>
        ) : (
          notFromSkopje.push(userFour)
          //   <p>Error, this student is from {userFour.adress} </p>
        )}
      </ul>
      <h3>Not from Skopje</h3>
      <ul>
        {console.log(notFromSkopje)}
        {notFromSkopje.map((provincijalci, i) => (
          <li key={i}>
            {provincijalci.name} {provincijalci.lastName}
            {provincijalci.adress}
          </li>
        ))}
      </ul>
    </div>
  );
}
