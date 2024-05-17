import { User } from "../store/userStore";
const signupApi = async (userData: User) => {
    try {
        const res = await fetch("http://54.249.26.196/customer/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
        if (!res.ok) { 
            throw new Error("Network response was not ok");
        }
        const data = await res.json();
        console.log(data);
        return data
    } catch(error) {
        console.log("error");
    }
}
export { signupApi }