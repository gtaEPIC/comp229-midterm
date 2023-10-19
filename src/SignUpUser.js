import {useForm} from "react-hook-form";
import "./index.css"

export default function SignUpUser () {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    function onSubmit(e) {
        let data = {
            firstName: e.firstName,
            lastName: e.lastName,
            userName: e.userName,
            email: e.email,
            password: e.password,
            confirmPassword: e.confirmPassword
        }
        console.log("User Submission:", data);
        if (data.password !== data.confirmPassword) {
            alert("Passwords do not match. Please try again.");
            console.warn("Passwords do not match. Please try again.");
        }else{
            alert(`User submission. First Name: ${data.firstName}, Last Name: ${data.lastName},\nUsername: ${data.userName}, Email: ${data.email}, Password: ${data.password}`);
        }
    }

    return (
        <div>
            <h1>User Sign Up</h1>
            <p>
                All fields are required.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <label htmlFor="firstName">First Name: </label>
                        </td>
                        <td>
                            <input type="text" name="firstName" {...register("firstName", {required: true})} />
                        </td>
                    </tr>
                    {
                        errors.firstName && (
                            <tr>
                                <td colSpan={2} className={"error-text"}>This field is required. Please provide your first name</td>
                            </tr>
                        )
                    }
                    <tr>
                        <td>
                            <label htmlFor="lastName">Last Name: </label>
                        </td>
                        <td>
                            <input type="text" name="lastName" {...register("lastName", {required: true})} />
                        </td>
                    </tr>
                    {
                        errors.lastName && (
                            <tr>
                                <td colSpan={2} className={"error-text"}>This field is required. Please provide your last name</td>
                            </tr>
                        )
                    }
                    <tr>
                        <td>
                            <label htmlFor="userName">Username: </label>
                        </td>
                        <td>
                            <input type="text" name="userName" {...register("userName", {required: true})} />
                        </td>
                    </tr>
                    {
                        errors.userName && (
                            <tr>
                                <td colSpan={2} className={"error-text"}>This field is required. Please provide a username</td>
                            </tr>
                        )
                    }
                    <tr>
                        <td>
                            <label htmlFor="email">Email: </label>
                        </td>
                        <td>
                            <input type="text" name="email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
                        </td>
                    </tr>
                    {
                        errors.email && (
                            <tr>
                                <td colSpan={2} className={"error-text"}>This field is required and must be valid. Please provide a valid email address</td>
                            </tr>
                        )
                    }
                    <tr>
                        <td>
                            <label htmlFor="password">Password: </label>
                        </td>
                        <td>
                            <input type="password" name="password" {...register("password", {required: true})} />
                        </td>
                    </tr>
                    {
                        errors.password && (
                            <tr>
                                <td colSpan={2} className={"error-text"}>This field is required. Please provide a password</td>
                            </tr>
                        )
                    }
                    <tr>
                        <td>
                            <label htmlFor="confirmPassword">Confirm Password: </label>
                        </td>
                        <td>
                            <input type="password" name="confirmPassword" {...register("confirmPassword", {required: true})} />
                        </td>
                    </tr>
                    {
                        errors.confirmPassword && (
                            <tr>
                                <td colSpan={2} className={"error-text"}>This field is required. Please confirm your password</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}