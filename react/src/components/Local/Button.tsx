export function Button({ incrementCount }: { incrementCount: () => void }) {
  return <button onClick={incrementCount}>Increment count</button>;
}
