import React, { useContext, useState } from "react";
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import Context from "../Context/creator";
import { Link } from "react-router-dom";

export const Editor = () => {
  const [input, setInput] = useState("");
  const { data, setData } = useContext(Context);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "20px",
    },
    header: {
      color: "#4A4A4A",
      fontFamily: "'Arial', sans-serif",
    },
    textarea: {
      width: "80%",
      height: "200px",
      padding: "10px",
      margin: "10px 0",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "16px",
      fontFamily: "'Courier New', monospace",
      outline: "none",
    },
    button: {
      backgroundColor: "#28a745",
      color: "#fff",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      fontSize: "16px",
      cursor: "pointer",
      marginTop: "10px",
    },
    buttonHover: {
      backgroundColor: "#218838",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Markdown Editor</h1>
      <textarea
        style={styles.textarea}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <Link to="/Previewer">
      <button
        style={styles.button}
        onClick={() => {
          console.log(data);
          setData(marked.parse(input));
        }}
      >
        Preview Markdown
      </button>
      </Link>
      
    </div>
  );
};
