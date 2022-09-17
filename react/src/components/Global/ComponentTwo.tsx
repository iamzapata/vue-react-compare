import { useCount } from "./store";
import { Button } from "./Button";

export function ComponentTwo() {
  const [count] = useCount();

  return (
    <div className="card">
      <h3>Component Two: {count}</h3>
      <Button />
    </div>
  );
}
