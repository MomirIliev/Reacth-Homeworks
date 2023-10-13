export const sayHello = () => {
  // <- Action creator
  return {
    type: "SAY_HELLO",
    payload: "Hi and welcome to my First Redux App", // <- Action
  };
};

export const sayGoodbye = () => {
  return {
    type: "SAY_GOODBYE",
    payload: "Time to say goodbye",
  };
};
