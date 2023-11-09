import { useState, createContext } from "react";

const Mycontext = createContext();

const MyProvider = (props) => {
    const [stage,setStage] = useState(1);
    const [players,setPlayers] = useState([]);
    const [result,setResult] = useState('');

    return(
        <Mycontext.Provider value={{
            stage:stage,
            players:players,
            result,result
        }}>
            {props.children}
        </Mycontext.Provider>
    )
}

export {Mycontext, MyProvider}