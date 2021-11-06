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
        if(password === "456") {
            setState("openKitchen")
        }
    }

    const passwordMsg = ({password}) => {
        if(password === "") {
            return <div className={"panel__nopassword"}>Wpisz hasło</div>
        } else if (password !== "123" && password !== "456") {
            return <div className={"panel__wrongpassword"}> Hasło nieprawidłowe</div>
        }
    }

    return (
        <div className={"panel"}>
            <h2 className={"panel__title"}>Panel administracyjny</h2>
            {state === "closed" && (
                <>
                    <form className={"panel__form"}>
                        <span className={"panel__form--title"} >Wpisz swoje imię</span>
                        <input type={"text"} onChange={e => setName(e.target.value)} className={"panel__form--input"}/>
                        <span className={"panel__form--title"}>Wpisz hasło</span>
                        <input type={"password"} onChange={e => setPassword(e.target.value)} className={"panel__form--input"}/>
                        <button onClick={handlePassword} className={"btn"}>Wyślij</button>
                        {/*{password === "" && (*/}
                        {/*    <div className={"panel__nopassword"}>Wpisz hasło</div>*/}
                        {/*)}*/}
                        {/*{password !== "123" && password !== "456" && (*/}
                        {/*    <div className={"panel__wrongpassword"}> Hasło nieprawidłowe</div>*/}
                        {/*)}*/}
                        {passwordMsg(password)}
                    </form>
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