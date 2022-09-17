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

      <button onClick={incrementCount}>Increment count</button>
    </div>
  );
}
