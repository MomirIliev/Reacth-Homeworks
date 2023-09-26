export const Age = ({ userOne, userTwo, userThree, userFour }) => {
  console.log(userOne);
  return (
    <div>
      <h2>Students younger than 18:</h2>
      <ul>
        {userOne.age < 18 ? (
          <li>
            {userOne.name} {userOne.lastName} {userOne.adress}
          </li>
        ) : (
          <li>{userOne.name} have more than 18 years </li>
        )}
        {userTwo.age < 18 ? (
          <li>
            {userTwo.name} {userTwo.lastName} {userTwo.adress}
          </li>
        ) : (
          <li>{userTwo.name} have more than 18 years </li>
        )}
        {userThree.age < 18 ? (
          <li>
            {userThree.name} {userThree.lastName} {userThree.adress}
          </li>
        ) : (
          <li>{userThree.name} have more than 18 years </li>
        )}
        {userFour.age < 18 ? (
          <li>
            {userFour.name} {userFour.lastName} {userFour.adress}
          </li>
        ) : (
          <li>{userFour.name} have more than 18 years </li>
        )}
      </ul>
    </div>
  );
};
