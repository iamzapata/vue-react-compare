import { useCount } from "./store";
import { GlobalComponent } from "./GlobalComponent";
import { ComponentOne } from "./ComponentOne";
import { ComponentTwo } from "./ComponentTwo";
import { Button } from "./Button";

export function Global() {
  const [count] = useCount();

  return (
    <div className="card">
      <h2>Global 🌐 State: {count} </h2>
      <Button />
      <ComponentOne />
      <ComponentTwo />
      <GlobalComponent name="🟡" />
    </div>
  );
}
