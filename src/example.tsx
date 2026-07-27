// function Example() {
//     const name = "me";
//     if (name)
//         return <h1>Hello {name}</h1>;
//     return <h1>Hello World</h1>;
// }

function Example() {
  const items = ["Tokyo", "Mexico City", "New York", "Mumbai", "Seoul"];
  
  // if (items.length === 0)
  //   return <>
  //     <h1>List</h1>
  //     <p>No item found</p>
  //   </>
  
  return (
    <>
      <h1>List</h1>
      { items.length === 0 && <p>No item found</p> }
      <ul className="list-group">
        {items.map((item) => (
          <li className = "list-group-item" key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Example;
