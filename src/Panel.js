import React, {useState} from 'react';
import Waiter from "./Waiter";
import Kitchen from "./Kitchen";

const Panel = () => {
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [state, setState] = useState("closed")

    const handlePassword = () => {
        if(password === "123"){
            setState("openWaiter")
        }
        if(password === "456"){
            setState("openKitchen")
        }
    }

    return (
        <div>
            <h2>Panel administracyjny</h2>
            {state === "closed" && (
                <>
                    <input type={"text"} onChange={e => setName(e.target.value)}/>
                    <input type={"password"} onChange={e => setPassword(e.target.value)}/>
                    <button onClick={handlePassword}>Wyślij</button>
                    {password !== "123" || password !== "456" || password !== "" && (
                        <div> Hasło nieprawidłowe</div>
                    )}
                    {password === "" && (
                        <div>Wpisz hasło</div>
                    )}
                </>
            )}

            {state === "openWaiter" && (
                <>
                    <Waiter name={name}/>
                </>
            )}
            {state === "openKitchen" && (
                <>
                    <Kitchen name={name}/>
                </>
            )}
        </div>
    );
};

export default Panel;