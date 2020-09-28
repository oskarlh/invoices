export type ClassName = string | false | null | undefined;
export default function classNames(...names: ClassName[]): string {
  return names.filter((n) => !!n).join(' ');
}
