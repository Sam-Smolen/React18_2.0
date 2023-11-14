import { useState } from 'react';


const Tgroup = () => {
    let [items,setItems] = useState(['24','35','140']);
    
    const addElements = () => {
        return items.map((item,i)=>(
            <div className="item" key={i}>{item}</div>
        ))
    }

    const generateNumber = () => {
        let newArray = [
            ...items,
            Math.floor(Math.random()*100)+1
        ];
        setItems(newArray)
    }

    const removeNumber= () => {
        let newArray = items.slice(0,-1);
        setItems(newArray)
    }


    return(
            <div className="tgroup">
                {addElements()}
             
                <div className="btns">
                    <button onClick={()=> generateNumber()}>Add Elements</button>
                    <button onClick={()=> removeNumber()}>Remove Elements</button>
                </div>
            </div>
    )
    
}


export default Tgroup;