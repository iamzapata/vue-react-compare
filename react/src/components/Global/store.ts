import { atom, useAtom } from "jotai";

export const countAtom = atom(0);

export function useCount() {
  const [count, setCount] = useAtom(countAtom);

  const incrementCount = () => setCount((count) => count + 1);

  return [count, incrementCount] as const;
}
