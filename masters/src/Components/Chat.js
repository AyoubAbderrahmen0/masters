import React, { useState } from "react";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);  // État pour gérer le chargement

  const sendMessage = async () => {
    if (!userInput) return;

    // Ajout du message de l'utilisateur
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: userInput, sender: "user" },
    ]);
    setUserInput("");
    setIsLoading(true); // Démarrage du chargement

    try {
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput }),
      });

      const data = await response.json();

      // Ajout de la réponse du bot
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: userInput, sender: "user" },
        { text: data.response, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Erreur lors de la communication avec le backend", error);
      // Ajout d'un message d'erreur du côté du bot
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Désolé, une erreur est survenue. Essayez à nouveau.", sender: "bot" },
      ]);
    } finally {
      setIsLoading(false); // Fin du chargement
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <div
        style={{
          height: "300px",
          overflowY: "scroll",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        {messages.map((msg, index) => (
          <p key={index} style={{ textAlign: msg.sender === "user" ? "right" : "left" }}>
            <b>{msg.sender === "user" ? "Vous" : "Bot"}:</b> {msg.text}
          </p>
        ))}
        {isLoading && (
          <p style={{ textAlign: "left" }}>
            <b>Bot:</b> Chargement...
          </p>
        )}
      </div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        style={{ width: "80%", marginRight: "10px" }}
      />
      <button onClick={sendMessage}>Envoyer</button>
    </div>
  );
}

export default Chat;
