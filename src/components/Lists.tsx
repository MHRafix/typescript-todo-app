import { List } from "./List";

export const Lists = () => {
  const items: string[] = ["Rafiz", "Mehedi"];
  const onClick = (text: string): void => alert(text);

  return (
    <div>
      <List items={items} onClick={onClick} />
    </div>
  );
};
