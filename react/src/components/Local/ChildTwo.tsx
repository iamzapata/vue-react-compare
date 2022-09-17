import { Button } from "./Button";

export function ChildTwo({
  count,
  incrementCount,
}: {
  count: number;
  incrementCount: () => void;
}) {
  return (
    <div className="card">
      <h3>Child Two: {count}</h3>

      <Button incrementCount={incrementCount} />
    </div>
  );
}
