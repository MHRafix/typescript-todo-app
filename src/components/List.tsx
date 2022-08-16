export const List = ({
  items,
  onClick,
}: {
  items: string[];
  onClick: (item: string) => void;
}) => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <li>{item}</li>
          <button onClick={() => onClick(item)}>Get Name</button>
        </div>
      ))}
    </div>
  );
};
