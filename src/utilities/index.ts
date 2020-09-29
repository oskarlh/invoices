import { memo } from 'react';

type ClassName = string | false | null | undefined;
export function classNames(...names: ClassName[]): string {
  return names.filter((n) => !!n).join(' ');
}

// Can't just use memo straight with generic components.
// memo doesn't work with generics
export const typedMemo: <T>(c: T) => T = memo;
