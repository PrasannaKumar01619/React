import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {

    const {register , handleSubmit , formState: {errors} ,reset , watch} = useForm();

    function onsubmit(data,e){
        console.log(data);
        e.preventDefault();
        reset();
    }

    return(
        <form onSubmit={handleSubmit(onsubmit)} >
                <div className="Form">
                    <div className="inputBlock">
                        <label htmlFor="username">User Name</label>
                        <input  type="text" name="username" placeholder="Enter user name" {...register ("username",{required: "Username is required"})}/>

                        <p>{errors.username?.message}</p>

                        <label htmlFor="email">E-mail</label>
                        <input  type="email" name="email" placeholder="Enter email" {...register ("email",{required: "email is required"})}/>
                        <p>{errors.email?.message}</p>
                        <label htmlFor="phonenumber">Phone Number</label>
                        <input  type="number" name="phonenumber" placeholder="Enter phone number" {...register ("phonenumber",{required: "phonenumber is required"})}/>
                        <p>{errors.phonenumber?.message}</p>
                        <label htmlFor="password">User Name</label>
                        <input  type="password" name="password" placeholder="Enter password" {...register ("password",{required: "password is required"})}/>
                        <p>{errors.password?.message}</p>
                        <label htmlFor="confirmpassword">User Name</label>
                        <input  type="password" name="confirmpassword" placeholder="Enter password" {...register ("confirmpassword",{required: "confirmpassword is required"})}/>
                        <p>{errors.confirmpassword?.message}</p>
                    </div>
                    <div className="button">
                        <button type="submit">Submit</button>
                    </div>

                </div>
            </form>
    )
}

export default Form;