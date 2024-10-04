import { useState, useMemo, useCallback } from "react";

function SortedList({ list, sortFxn }) {
  const sortedList = useMemo(() => {
    return [...list].sort(sortFxn);
  }, [list, sortFxn]);
  return (
    <>
      <div>{sortedList.join(", ")}</div>
    </>
  );
}

function Call() {
  const [numbers] = useState([10, 20, 30]);

  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
  );
  const [names] = useState(["John", "Paul", "George", "Ringo"]);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const counTotal = useMemo(() => count1 + count2, [count1, count2]);
  const sortFxn = useCallback((a, b) => a.localeCompare(b) * -1);

  return (
    <>
      <div>Total: {total}</div>
      <div>Names: {names.join(", ")}</div>
      <SortedList list={names} sortFxn={sortFxn} />
      <button onClick={() => setCount1(count1 + 1)}>Count1: {count1}</button>
      <button onClick={() => setCount2(count2 + 1)}>Count2: {count2}</button>
      <div>Total: {counTotal}</div>
    </>
  );
}
export default Call;
