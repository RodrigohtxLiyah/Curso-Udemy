import React from "react";
import { useState } from "react";
import axios from "axios";
import './Home2.css'

const Button = ({ increment }) => {
  return <button className="m-1 btn btn-light">+{increment}</button>;
};

const App = () => {
  let count = 0;

  return (
    <div className="d-flex justify-content-center">
      <Button increment={1} />
      <Button increment={10} />
      <Button increment={100} />
      <Button increment={1000} />
      <span className="mt-2 ml-1">{count}</span>
    </div>
  );
};

const ButtonTwo = ({ increment, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(increment);
  };
  return (
    <button className="btn btn-outline-primary" onClick={handleClick}>
      + {increment}
    </button>
  );
};

const AppTwo = () => {
  const [count, setCount] = useState(0);

  const incrementCount = (increment) => {
    setCount(count + increment);
  };

  return (
    <div className="m-3">
      <ButtonTwo increment={1} onClickFunction={incrementCount} />
      <ButtonTwo increment={10} onClickFunction={incrementCount} />
      <ButtonTwo increment={100} onClickFunction={incrementCount} />
      <ButtonTwo increment={1000} onClickFunction={incrementCount} />
      <span className="ml-2">{count}</span>
    </div>
  );
};

const Card = (props) => {
  return (
    <div style={{ margin: "1em" }}>
      <img alt="avatar" style={{ width: "70px" }} src={props.avatar_url} />
      <div>
        <div style={{ fontWeight: "bold" }}>{props.name}</div>
        <div>{props.blog}</div>
      </div>
    </div>
  );
};

const CardList = (props) => (
  <div>
    {props.cards.map((card) => (
      <Card {...card} />
    ))}
  </div>
);

const AppThree = () => {
  const [cards, setCards] = useState([]);

  const addNewCard = (cardInfo) => {
    setCards(cards.concat(cardInfo));
  };

  return (
    <div>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </div>
  );
};

const Form = (props) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.get(`https://api.github.com/users/${username}`).then((resp) => {
      props.onSubmit(resp.data);
      setUsername("");
    })
  };

  return (
    <form className="m-3" onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          className=""
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="GitHub username"
          required
        />
        <div className="input-group-prepend">
          <button className="btn btn-outline-info" type="submit">
            Add card
          </button>
        </div>
      </div>
    </form>
  );
};

export default App;

export { AppTwo, AppThree };
