import { Button } from "./Button";

export function ChildOne({
  count,
  incrementCount,
}: {
  count: number;
  incrementCount: () => void;
}) {
  return (
    <div className="card">
      <h3>Child One: {count}</h3>
      <Button incrementCount={incrementCount} />
    </div>
  );
}
