import { memo } from 'react';

type ClassName = string | false | null | undefined;
export function classNames(...names: ClassName[]): string {
  return names.filter((n) => !!n).join(' ');
}

// Memo has a bad type so you can't just use it straight with generic components.
// Setting the type like this fixes the issue.
export const typedMemo: <T>(c: T) => T = memo;
