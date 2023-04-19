import { PostData } from "./api/fetch";
import { useState } from "react";


const Login = () =>{

const [userName, setUsername] = useState("");
const [passWord, setPassword] = useState("");

const handleClick = async () => {
    const body = {
        email: userName,
        password: passWord,
    }
    const results = await PostData("login", body)

    console.log(results)
}

    return(
        <main>
            <section>
                <input onChange={(e) => setUsername(e.target.value)} name="username" type="text" placeholder="UserName"></input>
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"></input>
                <button onClick={handleClick}>Submit</button>
            </section>
        </main>
    )
}

export default Login;


export async function getServerSideProps(ctx) {

const apiUrl = process.env.REACT_APP_API_URL;

//       const result = await PostData("login", credentials).catch((err) => {
   
//   });
//   if (result) {
//     if (result.status === 200) {
//       this.props.setUserData(result.data.user);
//       this.props.enqueueSnackbar("Je bent ingelogd. Welkom.", {
//         variant: "success",
//       });
//       this.props.history.push("/dashboard");
//     } else {
//       if (result.message) {
//         this.props.enqueueSnackbar(result.message, { variant: "error" });
//       }
//       if (result.errors) {
//         this.setState({ errors: result.errors });
//       }
//     }
//   }
  return {
    props: {
      apiUrl
    },
  };

}