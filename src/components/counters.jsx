import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
  const initialState = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 4, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Стартовыйнабор минималиста" },
    { value: 0, id: 5, name: "Ненужные вещи" },
  ];

  const [counters, setCounters] = useState(initialState);
  const handleDelete = (counterId) => {
    const newCounter = counters.filter((c) => c.id !== counterId);
    setCounters(newCounter);
  };

  const handleReset = () => setCounters(initialState);
  const indexCounter = (handleId) =>
    counters.findIndex((counter) => counter.id === handleId);

  const handleDecrement = (handleId) => {
    const index = indexCounter(handleId);

    const newCounters = [...counters];

    newCounters[index].value -= 1;
    setCounters(newCounters);
  };

  const handleIncrement = (handleId) => {
    const index = indexCounter(handleId);

    const newCounters = [...counters];

    newCounters[index].value += 1;
    setCounters(newCounters);
  };

  return (
    <div>
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          {...counter}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
    </div>
  );
};

export default Counters;
