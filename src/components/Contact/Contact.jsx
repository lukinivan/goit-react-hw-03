export const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </>
  );
};
