import { useCount } from "./store";
import { Button } from "./Button";

export function GlobalComponent({ name }: { name: string }) {
  const [count] = useCount();

  return (
    <div className="card">
      <h3>
        {name} Global Component: {count}
      </h3>

      <Button />
    </div>
  );
}
