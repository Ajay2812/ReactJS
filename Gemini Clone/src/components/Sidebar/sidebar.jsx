import "./sidebar.css";
import { assets } from "../../assets/assets";
import React, { useContext } from "react";
import { Context } from "../../context/Context";

export default function Sidebar() {
  const [extend, setExtend] = React.useState(false);
  const { onSent, chatSessions, activeChatId, setActiveChatId, newChat } =
    useContext(Context);

  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="menu"
          onClick={() => setExtend((prev) => !prev)}
          src={assets.menu_icon}
          alt=""
        />
        <div onClick={newChat} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extend && <p>New Chat</p>}
        </div>

        {extend && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {chatSessions.length > 0 ? (
              chatSessions.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => setActiveChatId(chat.id)}
                  className={`recent-entry ${
                    chat.id === activeChatId ? "active" : ""
                  }`}
                >
                  <img src={assets.message_icon} alt="" />
                  <p>{chat.title}...</p>
                </div>
              ))
            ) : (
              <p className="no-recent">No recent chats</p>
            )}
          </div>
        )}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extend ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extend ? <p>Activities</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extend ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
}
