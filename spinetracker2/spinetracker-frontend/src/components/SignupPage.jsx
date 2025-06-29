import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "../App.css";

function Register() {
    const {
        register, 
        handleSubmit, 
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const existingUser = JSON.parse(localStorage.getItem(data.email));
        if (existingUser) {
            console.log("Email is already registered."); 
        } else {
            const userData = {
                name: data.name, 
                email: data.email, 
                password: data.password, 
            }; 
            localStorage.setItem(data.email, JSON.stringify(userData)); 
            console.log(data.name + " has been successfully registered");
        }
    };

    return (
        <>
            <h2>Register New User</h2>

            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register("name", {required: true })} placeholder="Email"/>
                {errors.name && <span style={{color: "red"}}>Please enter name</span>}

                <input type="password" {...register("password", {required: true })} placeholder="Password" />
                {errors.name && <span style={{color: "red"}}>Please enter password </span>}
            </form>
        </>
    );
}

export default Register; 