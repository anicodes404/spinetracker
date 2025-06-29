import React from "react";
import { useForm, SubmitHandler } from "react-hook-form"; 
import "../App.css";

function Login() {
    const {
        register, 
        handleSubmit, 
        formState: { errors }, 
    } = useForm(); 

    const onSubmit = (data) => {
        const userData = JSON.parse(localStorage.getItem(data.email)); 
        if (userData) {
            if (userData === data.password) {
                console.log(userData.name + " You are successfully logged in"; )
            } else {
                console.log("Email or password not found"); 
            } 
        } else {
            console.log("Email or password not correct"); 
        }
    }; 

    return (
        <>
            <h2>Login</h2>

            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register("email", { required: true })} placeholder="Email address" />
                {errors.email && <span style={{ color: "red" }}>Please enter email</span>}

                <input type="password" {...register("email", { required: true })} placeholder="Password"/>
                {errors.password && <span style={{color: "red"}}>Please enter password</span>}

                <input type="submit" style={{ backgroundColor: "a1eafb" }} />
            </form>
        </>
    )
}

export default Login; 