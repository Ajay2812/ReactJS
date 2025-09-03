/*
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { useContext } from "react";
export default function Main() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resutlData,
    input,
    setInput
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello,Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest a beautiful place to see on upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve the redability of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
            <>
          <div className="result">
            <div className="result-title">
                <img src={assets.user_icon} alt=""/>
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} alt=""/>
                {loading ? <div className="loader">
                    <hr />
                    <hr />
                    <hr />

                </div>:
                <p dangerouslySetInnerHTML={{__html:resutlData}} ></p>}
            </div>
          </div>
          </>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ?<img src={assets.send_icon} alt="" onClick={() => onSent()} />:null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info,including about people,so
            double-check its responses.Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
}
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { useContext,useState } from "react";
export default function Main() {

  const {
    onSent,
    chatHistory,  // ✅ now using chat history array
    loading,
    input,
    setInput
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        {chatHistory.length === 0 && !loading ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest a beautiful place to see on upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            {chatHistory.map((chat, index) => (
              <div key={index} className="result-item">
                <div className="result-title">
                  <img src={assets.user_icon} alt="" />
                  <p>{chat.question}</p>
                </div>
                <div className="result-data">
                  <img src={assets.gemini_icon} alt="" />
                  <p dangerouslySetInnerHTML={{ __html: chat.answer }}></p>
                </div>
              </div>
            ))}

            {loading && (
              <div className="loader">
                <hr />
                <hr />
                <hr />
              </div>
            )}
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img
                  src={assets.send_icon}
                  alt=""
                  onClick={() => onSent()}
                  style={{ cursor: "pointer" }}
                />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps.
          </p>
        </div>
      </div>
    </div>
  );
}

import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { useContext } from "react";

export default function Main() {
  const {
    onSent,
    chatSessions,
    activeChatId,
    loading,
    input,
    setInput
  } = useContext(Context);

  // ✅ find the active chat session
  const activeChat = chatSessions.find((chat) => chat.id === activeChatId);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        {(!activeChat || activeChat.messages.length === 0) && !loading ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card" onClick={() => onSent("Suggest a beautiful place to see on upcoming road trip")}>
                <p>Suggest a beautiful place to see on upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card" onClick={() => onSent("Briefly summarize this concept: urban planning")}>
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card" onClick={() => onSent("Brainstorm team bonding activities for our work retreat")}>
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card" onClick={() => onSent("Improve the readability of the following code")}>
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            {activeChat?.messages.map((chat, index) => (
              <div key={index} className="result-item">
                <div className="result-title">
                  <img src={assets.user_icon} alt="" />
                  <p>{chat.question}</p>
                </div>
                <div className="result-data">
                  <img src={assets.gemini_icon} alt="" />
                  <p dangerouslySetInnerHTML={{ __html: chat.answer }}></p>
                </div>
              </div>
            ))}

            {loading && (
              <div className="loader">
                <hr />
                <hr />
                <hr />
              </div>
            )}
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSent()}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img
                  src={assets.send_icon}
                  alt=""
                  onClick={() => onSent()}
                  style={{ cursor: "pointer" }}
                />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps.
          </p>
        </div>
      </div>
    </div>
  );
}
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { useContext, useState, useEffect } from "react";

export default function Main() {
  const {
    onSent,
    chatSessions,
    activeChatId,
    loading,
    input,
    setInput
  } = useContext(Context);

  // ✅ find the active chat session
  const activeChat = chatSessions.find((chat) => chat.id === activeChatId);

  const [typedAnswer, setTypedAnswer] = useState("");

  useEffect(() => {
    if (!loading && activeChat?.messages.length > 0) {
      const lastMessage = activeChat.messages[activeChat.messages.length - 1];
      const fullAnswer = lastMessage.answer || "";
      setTypedAnswer("");

      let i = 0;
      const interval = setInterval(() => {
        if (i < fullAnswer.length) {
          setTypedAnswer((prev) => prev + fullAnswer[i]);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 15);

      return () => clearInterval(interval);
    }
  }, [activeChat?.messages, loading]);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        {(!activeChat || activeChat.messages.length === 0) && !loading ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card" onClick={() => onSent("Suggest a beautiful place to see on upcoming road trip")}>
                <p>Suggest a beautiful place to see on upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card" onClick={() => onSent("Briefly summarize this concept: urban planning")}>
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card" onClick={() => onSent("Brainstorm team bonding activities for our work retreat")}>
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card" onClick={() => onSent("Improve the readability of the following code")}>
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            {activeChat?.messages.map((chat, index) => {
              const isLastMessage = index === activeChat.messages.length - 1;

              return (
                <div key={index} className="result-item">
                  <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{chat.question}</p>
                  </div>

                  <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {isLastMessage && loading ? (
                      // ✅ Loader appears INSIDE the last message area
                      <div className="loader">
                        <hr />
                        <hr />
                        <hr />
                      </div>
                    ) : (
                      <p dangerouslySetInnerHTML={{ __html: isLastMessage ? typedAnswer : chat.answer }}></p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSent()}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img
                  src={assets.send_icon}
                  alt=""
                  onClick={() => onSent()}
                  style={{ cursor: "pointer" }}
                />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps.
          </p>
        </div>
      </div>
    </div>
  );
}
*/
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { useContext, useState, useEffect } from "react";

export default function Main() {
  const {
    onSent,
    chatSessions,
    activeChatId,
    loading,
    input,
    setInput
  } = useContext(Context);

  const activeChat = chatSessions.find((chat) => chat.id === activeChatId);

  const [typedAnswer, setTypedAnswer] = useState("");

  useEffect(() => {
    if (!loading && activeChat?.messages.length > 0) {
      const lastMessage = activeChat.messages[activeChat.messages.length - 1];
      const fullAnswer = lastMessage.answer || "";
      setTypedAnswer("");

      let i = 0;
      const interval = setInterval(() => {
        if (i < fullAnswer.length) {
          setTypedAnswer((prev) => prev + fullAnswer[i]);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 15);

      return () => clearInterval(interval);
    }
  }, [activeChat?.messages, loading]);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        {(!activeChat || activeChat.messages.length === 0) && !loading ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div
                className="card"
                onClick={() =>
                  onSent("Suggest a beautiful place to see on upcoming road trip")
                }
              >
                <p>Suggest a beautiful place to see on upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  onSent("Briefly summarize this concept: urban planning")
                }
              >
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  onSent(
                    "Brainstorm team bonding activities for our work retreat"
                  )
                }
              >
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  onSent("Improve the readability of the following code")
                }
              >
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            {activeChat?.messages.map((chat, index) => {
              const isLastMessage = index === activeChat.messages.length - 1;
              return (
                <div key={index} className="result-item">
                  <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{chat.question}</p>
                  </div>

                  <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {isLastMessage && loading ? (
                      <div className="loader">
                        <hr />
                        <hr />
                        <hr />
                      </div>
                    ) : (
                      <p
                        dangerouslySetInnerHTML={{
                          __html: isLastMessage ? typedAnswer : chat.answer
                        }}
                      ></p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ✅ Input Section */}
        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSent()}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img
                  src={assets.send_icon}
                  alt=""
                  onClick={() => onSent()}
                  style={{ cursor: "pointer" }}
                />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps.
          </p>
        </div>
      </div>
    </div>
  );
}
