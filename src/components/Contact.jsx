import React, { useContext, useState } from "react";
import styled from "styled-components";
import { getDatabase, ref, set } from "firebase/database";
import { database } from "../firebase";
import Alert from "@mui/material/Alert";
import { ThemeContext } from "../props";

export const Contact = ({ id }) => {
  const {translate} = useContext(ThemeContext)
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("default");
  function writeUserData(message, email, subject, id) {
    set(ref(database, "emails/" + id), {
      message: message,
      email: email,
      subject: subject,
    }).then(()=>setError('')).catch((e) => setError("error"));
  }
  return (
    <Main id={id}>
      <h4>📱{ translate === true ?'Напишите мне' :'Contact Me'}</h4>

      <form
        onSubmit={(e) => {
          setError(false);
          e.preventDefault();
          setError("");
          if (email && subject && message !== "") {
            writeUserData(
              message,
              email,
              subject,
              Math.round(new Date().getTime() / 1000)
            );

            setEmail("");
            setMessage("");
            setSubject("");
          } else {
            setError("notfilled");
          }
        }}
      >
        <input
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          className="input"
          type={"email"}
          placeholder="email"
        />
        <input
          value={subject}
          onChange={(e) => setSubject(e.currentTarget.value)}
          className="input"
          placeholder="subject"
        />
        <input
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
          className="input"
          placeholder="message"
          multiple={true}
        />{" "}
        {error === "notfilled" ? (
          <Alert className="alert" severity="info">
            Заполните все поля 😊.
          </Alert>
        ) : null}
        {error === "error" ? (
          <Alert className="alert" severity="error">
            Что-то пошло не так 💩. Повторите попытку позже, либо напишите мне в
            телеграм <a href="https://t.me/Dstyou">@Dstyou</a>.
          </Alert>
        ) : null}
        {error === "" ? (
          <Alert className="alert" severity="success">
            Ваше сообщение доставлено ✨. Вы также можете написать мне в
            телеграм <a href="https://t.me/Dstyou">@Dstyou</a>.
          </Alert>
        ) : null}
        <button>{translate === true? 'Отправить': 'Send Message'}</button>
      </form>
    </Main>
  );
};

const Main = styled.div`
  width: 100%;
  margin-top: 50px;
  input {
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 15px;
  }
  input:focus {
    outline: none !important;
    border: 1px solid #eee;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  }

  button {
    padding: 0.5rem;
    background: #eee;

    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    font-weight: bold;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: 0.5;
  }
  button:hover {
    background: #a7a7a9;
    /* color: #eee; */
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .alert {
    border-radius: 15px;
    margin-bottom: 1rem;
  }
`;
