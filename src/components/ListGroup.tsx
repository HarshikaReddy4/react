import { MouseEvent } from "react";
import { Fragment } from "react/jsx-runtime";
function ListGroup() {
  const items = ["NYC", "Delhi", "Chennai", "JPM"];
let select
  const handleClick = (event: MouseEvent) => console.log(event) 
  return (
    <Fragment>
      <h1>Here is the List</h1>
      <ul className="list-group">
        {items.map((item,index) => (
          <li 
          className= {selectedIndex == index ? 'list-group' }
          key={item}
          onClick = {handleClick}
          >{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
