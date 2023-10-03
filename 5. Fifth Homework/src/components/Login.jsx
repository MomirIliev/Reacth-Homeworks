import { useState, useEffect } from "react";
import { Input } from "./Input";
import { Select } from "./Select";
import { InputComment } from "./InputComment";
import { TextArea } from "./TextArea";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");
  const [socialNetwork, setSocialNetwork] = useState("Facebook");
  const [userComment, setUserComment] = useState("");
  const [commentType, setCommentType] = useState(true);

  const options = [
    { value: "Facebook", name: "Facebook" },
    { value: "Instagram", name: "Instagram" },
    { value: "Snapchat", name: "Snapchat" },
  ];

  useEffect(() => {
    console.log("Username: ", username);
    console.log("Password: ", password);
    console.log("Social Network: ", socialNetwork);
  }, [username, password, socialNetwork]);

  function handleTypeComment(e) {}

  function handleInputChange() {
    setInputType(inputType === "password" ? "text" : "password");
  }

  function showValues(event) {
    event.preventDefault();
    alert(
      `Username: ${username}\nPassword: ${password} \n Social Network: ${socialNetwork} \n Comment: ${userComment} `
    );
  }
  return (
    <div id="login">
      <form onSubmit={showValues}>
        <Input
          type={"text"}
          placeholder={"Enter Username"}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Input
          type={inputType}
          placeholder={"Enter Password"}
          name={"password"}
          value={password}
          setToggle={handleInputChange}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="action-button">Sign In</button>
      </form>
      <br />
      <div>
        <form className="comments-form">
          <Select
            value={socialNetwork}
            options={options}
            onChange={(e) => {
              setSocialNetwork(e.target.value);
              console.log(e.target.value);
            }}
          />
        </form>
        <form>
          <div className="comment-field">
            {commentType ? (
              <InputComment
                value={userComment}
                placeholder={"Enter your comment here"}
                onChange={(e) => {
                  setUserComment(e.target.value);
                }}
                changeInput={(e) => {
                  setCommentType(!commentType);
                }}
              />
            ) : (
              <TextArea
                value={userComment}
                placeholder={"Enter your comment here"}
                onChange={(e) => {
                  setUserComment(e.target.value);
                }}
                changeInput={(e) => {
                  setCommentType(!commentType);
                }}
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
