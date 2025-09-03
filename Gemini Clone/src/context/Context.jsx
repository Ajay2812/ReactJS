

import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

export default function ContextProvider(props) {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resutlData, setResultData] = useState("");

  // ✅ chatSessions holds multiple chats
  const [chatSessions, setChatSessions] = useState([
    { id: Date.now(), title: "New Chat", messages: [] }
  ]);

  // ✅ track which chat is currently open
  const [activeChatId, setActiveChatId] = useState(chatSessions[0].id);

  const newChat = () => {
    const newChat = {
      id: Date.now(),
      title: "New Chat",
      messages: []
    };
    setChatSessions((prev) => [...prev, newChat]);
    setActiveChatId(newChat.id);
    setLoading(false);
    setShowResult(false);
  };

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);

    let response;
    let questionText = prompt;

    if (prompt !== undefined) {
      response = await run(prompt);
      setRecentPrompt(prompt);
    } else {
      setPrevPrompts((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await run(input);
      questionText = input;
    }

    // ✅ Convert response to formatted HTML
    let arrayResponse = response.split("**");
    let newResponse = "";
    for (let i = 0; i < arrayResponse.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += arrayResponse[i];
      } else {
        newResponse += "<b>" + arrayResponse[i] + "</b>";
      }
    }
    let newResponse2 = newResponse.split("*").join("</br>");

    // ✅ append Q&A to active chat session
    setChatSessions((prev) =>
      prev.map((chat) =>
        chat.id === activeChatId
          ? {
              ...chat,
              title:
                chat.messages.length === 0
                  ? questionText.slice(0, 18)
                  : chat.title,
              messages: [
                ...chat.messages,
                { question: questionText, answer: newResponse2 }
              ]
            }
          : chat
      )
    );

    setResultData(newResponse2);
    setLoading(false); // stop loader, trigger typing in Main.jsx
    setInput("");
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resutlData,
    input,
    setInput,
    newChat,
    chatSessions,
    activeChatId,
    setActiveChatId
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
}
