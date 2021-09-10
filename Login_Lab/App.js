import "./App.css";
import Access from "./Access";
import Denied from "./Denied";
import { useState } from "react";

function App() {
  const [login] = useState({
    username: "twm5633",
    password: "qwerty",
  });
  function loginSeearch(input) {
    if (
      login.username === input.user &&
      login.password === input.pass &&
      input.pass === input.passC
    ) {
      console.log("Success!");
      return <Access user={input.user} />;
    } else {
      console.log("Denied");
      return <Denied />;
    }
  }
  const [profile, setProfile] = useState({
    user: "",
    pass: "",
    passC: "",
  });
  const [component, setComponent] = useState("");
  function handleChange(typed) {
    console.log(profile);
    setProfile({ ...profile, [typed.target.id]: typed.target.value });
  }

  function handleSubmit(typed) {
    typed.preventDefault();
    setComponent(loginSeearch(profile));
  }
  function forUsername() {
    console.log("This is Username");
    return setComponent(<div>Your username: {login.username} </div>);
  }
  function forPassword() {
    console.log("This is Password");
    return setComponent(<div>Your password: {login.password} </div>);
  }
  return (
    <div>
      <form id="type_form" onSubmit={handleSubmit}>
        <p>Username: </p>
        <input
          id="user"
          type="username"
          name="username"
          placeholder="Enter your username"
          value={profile.user}
          onChange={handleChange}
          required
        />

        <p>Password: </p>
        <input
          id="pass"
          type="password"
          name="pass"
          placeholder="Enter your password"
          value={profile.pass}
          onChange={handleChange}
          required
        />

        <p>Confirm Password: </p>
        <input
          id="passC"
          type="password"
          name="passC"
          placeholder="Confirm password"
          value={profile.passC}
          onChange={handleChange}
          required
        />

        <br />
        <button id="button"> Submit</button>
      </form>
      <br />
      <br />
      <div id="outcome">{component}</div>
      <form onSubmit={forPassword}>
        <button id="buttonP"> Forgot Password</button>
      </form>
      <form onSubmit={forUsername}>
        <button id="buttonU"> Forgot Username</button>
      </form>
    </div>
  );
}

export default App;
