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
      <button onClick={incrementCount}>Increment count</button>
    </div>
  );
}
