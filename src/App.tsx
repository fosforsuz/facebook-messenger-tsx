import { Button, FormControl, Input, InputLabel } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./App.css";
import Message from "./Message";
import db from "./firebase";

interface messegeInteferce {
  name: string;
  message: string;
}

function App() {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<any>([]);
  const [userName, setUserName] = useState<string | null>();

  const handleMessage = () => {
    db.collection("messages").add({
      name: userName,
      message: input,
    });
    setInput("");
  };

  useEffect(() => {
    setUserName(prompt("Please enter your name: "));
    db.collection("messages").onSnapshot((snaphot) => {
      setMessages(
        snaphot.docs.map((doc) => ({
          name: doc.data().name,
          message: doc.data().message,
        }))
      );
    });
  }, []);

  return (
    <div className="App">
      <h1>Messenger App</h1>

      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          type="submit"
          onClick={handleMessage}
          disabled={!input}
          variant="contained"
        >
          Send Message
        </Button>
      </form>

      {messages.map((message: messegeInteferce, id: number) => {
        return <Message key={id} message={message} />;
      })}
    </div>
  );
}

export default App;
