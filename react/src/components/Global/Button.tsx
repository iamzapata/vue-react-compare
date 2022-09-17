import { useCount } from "./store";

export function Button() {
  const [, incrementCount] = useCount();

  return (
    <button onClick={incrementCount}>
      Increment <strong>global</strong> count
    </button>
  );
}
