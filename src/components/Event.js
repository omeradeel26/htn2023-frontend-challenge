
export default function Event({event}) {
  return (
    <div>
      <h1>{event.name}</h1>
      <p>{event.description}</p>
    </div>
  );
}
