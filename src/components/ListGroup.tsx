import { useState } from "react";
//import { MouseEvent } from "react";

interface Props {
  items:string[];
  heading:string;
  // (item:string)=>void
onSelectedItem:(item:string)=>void;  // is like the onClick prop, but this is now selected item 
}

function ListGroup({items,heading, onSelectedItem}: Props) {
  
 //let selectedIndex = 0;
 // Hook
 //const arr = useState(-1);
 //arr[0]// variable (selectedIndex)
 //arr[1]// updater variable


  const [selectedIndex, setSelectedIndex] = useState(-1);
//const [name, setName] = useState(-1); // example of this functions property input 

//*this is the event handler 
//const handleClick = (event: MouseEvent)=>console.log(event);


  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex (index); 
              onSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
