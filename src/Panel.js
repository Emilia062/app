import React, {useState} from 'react';
import Waiter from "./Waiter";
import Kitchen from "./Kitchen";

const Panel = () => {
    const [password, setPassword] = useState("")
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
                <input type={"password"} onChange={e => setPassword(e.target.value)}></input>
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
                    <h1>działa</h1>
                    <Waiter/>
                </>
            )}
            {state === "openKitchen" && (
                <>
                    <h1>Działa</h1>
                    <Kitchen/>
                </>
            )}
        </div>
    );
};

export default Panel;