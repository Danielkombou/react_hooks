import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, seTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      seTime((t) => t + 1);
      console.log(t); 
      return t + 1;
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>Time: {time}</div>;
};
function Effect() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("/names.json")
      .then((response) => response.json())
      .then((data) => setNames(data));
  }, []);

  const [selectedNameDetails, setSelectedNameDetails] = useState(null);

  const onSelectedNameChange = (name) => {
    fetch(`/${name}.json`)
      .then((response) => response.json())
      .then((data) => setSelectedNameDetails(data));
  };

  return (
    <>
      <Stopwatch/>
      <div>
        {names.map((name) => (
          <button onClick={() => onSelectedNameChange(name)}>{name}</button>
        ))}
      </div>
      <div>{JSON.stringify(selectedNameDetails)}</div>
    </>
  );
}

export default Effect;
