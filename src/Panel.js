import React, {useState, useEffect} from 'react';
import Waiter from "./Waiter";
import Kitchen from "./Kitchen";

const Panel = () => {
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [state, setState] = useState("closed");
    const [errors, setErrors] = useState([]);

    let account = {
        name,
        password
    }
    console.log(state)

    useEffect(() => {
        if(localStorage.getItem("account") !== null) {
            let account = JSON.parse(localStorage.getItem("account"));
            if(account[account.length - 1].name === "kelner"){
                setState("openWaiter");
            }
            if(account[account.length - 1].name === "kuchnia"){
                setState("openKitchen");
            }
        }
    },[name, password])

    function saveAccountToLocalStorage(newObject){
        let dataFromLocalStorage =[];
        if(localStorage.getItem("account") !== null){
            dataFromLocalStorage = JSON.parse(localStorage.getItem("account"));
            dataFromLocalStorage.push(newObject);
            localStorage.setItem("account", JSON.stringify(dataFromLocalStorage));
        } else {
            dataFromLocalStorage.push(newObject);
            localStorage.setItem("account", JSON.stringify(dataFromLocalStorage));
        }
        alert("Jesteś zalogowany");
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const tempErrors= [];

        if(password.length < 3){
            tempErrors.push("Hasło jest za krótkie")
        }

        if(name !== "kelner" && name !== "kuchnia"){
            tempErrors.push("Nieprawidłowy login");
        }

        if(password.length > 3){
            account.password = password;
        }

        if(name === "kelner" && password.length >= 3){
            setState("openWaiter");
            account.name = name;
        }
        if(name === "kuchnia" && password.length >= 3) {
            setState("openKitchen")
            account.name = name;
        }

        if(tempErrors.length === 0){
            saveAccountToLocalStorage(account);
            console.log("Zapisano:", account);
        }

        setErrors(tempErrors);
        if(tempErrors.length > 0){
            return;
        }
    }

    return (
        <div className={"panel"}>
            <h1 className={"logo panel__logo"}>Rosmarino</h1>
            <h2 className={"panel__title"}>Panel administracyjny</h2>
            {state === "closed" && (
                <>
                    <div>
                        {errors.map((error, index) => (
                            <h2 key={index}>{error}</h2>
                        ))}
                    </div>
                    <form onSubmit={handleSubmit} className={"panel__form"}>
                        <span className={"panel__form--title"} >Wpisz login</span>
                        <input type={"text"} placeholder={"Login"} value={name} onChange={e => setName(e.target.value)} className={"panel__form--input"}/>
                        <span className={"panel__form--title"}>Wpisz hasło</span>
                        <input type={"password"} placeholder={"Hasło"} value={password} onChange={e => setPassword(e.target.value)} className={"panel__form--input"}/>
                        <button className={"btn"}>Wyślij</button>
                    </form>
                </>
            )}

            {state === "openWaiter" && (
                <>
                    <Waiter setState={setState} setName={setName} setPassword={setPassword}/>
                </>
            )}
            {state === "openKitchen" && (
                <>
                    <Kitchen setState={setState} setName={setName} setPassword={setPassword}/>
                </>
            )}
        </div>
    );
};

export default Panel;