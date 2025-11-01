
import { MouseEvent } from "react";


function ListGroup() {
    let items: string[] = ["Titu", "Brasov", "Bucuresti"]
    let selectedIndex = 0;
    const handleClick = (event:MouseEvent) => {
        console.log(event)
    }

    return (
    <>
    <h1>List</h1>
    {items.length === 0 && <p>No items found</p>}
    <ul className="list-group">
        {items.map((item, index) => (
        <li 
        className={ 
            index % 2 === selectedIndex 
            ? 'list-group-item active'
            : 'list-group-item'} 
            onClick={handleClick} 
            key={item}>{item}
        </li>
        ))}
    </ul>
    </>

    );
}

export default ListGroup;
