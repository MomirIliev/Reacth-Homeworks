import { useEffect } from "react";
import { sayHello, sayGoodbye } from "./../actions/SayHelloActions";
import {
  carRaceWinner,
  formulaOneRaceWinner,
} from "./../actions/RaceWinnerActions";
import { useSelector, useDispatch } from "react-redux";

export const HelloFunc = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.SayHelloReducer.greeting);
  const goodbye = useSelector((state) => state.SayHelloReducer.goodbye);
  const carRace = useSelector((state) => state.RaceWinnerReducer.carRace);
  const formulaOneRace = useSelector(
    (state) => state.RaceWinnerReducer.formulaOneRace
  );

  useEffect(() => {
    dispatch(sayHello());
    dispatch(sayGoodbye());
    dispatch(carRaceWinner());
    dispatch(formulaOneRaceWinner());
  }, [dispatch]);

  return (
    <div id="hello-func">
      <h2>{greeting}</h2>
      <h2>{goodbye}</h2>
      <h2>{carRace}</h2>
      <h2>{formulaOneRace}</h2>
    </div>
  );
};
