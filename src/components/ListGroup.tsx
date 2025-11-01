
import {useState } from "react";

interface Props {
    items: string[],
    heading: string;
}


function ListGroup({items, heading}: Props) {
    
    
    // Hook - we can tell react that this component has data that can change over time
    const [selectedIndex, setSelectedIndex] = useState(0)
    // arr[0] - variable (selectedIndex)
    // arr[1] - updater function
    return (
    <>
    <h1>{heading}</h1>
    {items.length === 0 && <p>No items found</p>}
    <ul className="list-group">
        {items.map((item, index) => (
        <li 
        className={ 
                index % 2 === selectedIndex 
                ? 'list-group-item active'
                : 'list-group-item'} 
            onClick={() => {setSelectedIndex(selectedIndex + 1)
            }} 
            key={item}>{item}
        </li>
        ))}
    </ul>
    </>

    );
}

export default ListGroup;
