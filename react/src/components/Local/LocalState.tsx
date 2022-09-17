import { useState } from "react";
import { ChildOne } from "./ChildOne";
import { ChildTwo } from "./ChildTwo";
import { GlobalComponent } from "../Global/GlobalComponent";
import { Button } from "./Button";

export function Local() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="card">
      <h2>Parent ➡️ Child State: {count}</h2>

      <Button incrementCount={incrementCount} />

      <ChildOne count={count} incrementCount={incrementCount} />
      <ChildTwo count={count} incrementCount={incrementCount} />
      <GlobalComponent name="🔵" />
    </div>
  );
}
