import React, { useState } from "react";

function NameList() {
  const [list, setlist] = useState(["Jack", "Jill", "John"]);
  const [name, setName] = useState("");

  const onAddName = () => {
    setlist([...list, name]);
    setName("");
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      onAddName();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKey}
      />
      {/* <button onClick={onAddName}>Add Name</button> */}
      <ol>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ol>
    </div>
  );
}

export default NameList;
