import { useCount } from "./store";
import { Button } from "./Button";

export function ComponentOne() {
  const [count] = useCount();

  return (
    <div className="card">
      <h3>Component One: {count}</h3>
      <Button />
    </div>
  );
}
