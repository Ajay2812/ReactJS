import "./sidebar.css";
import { assets } from "../../assets/assets";
import React, { useContext } from "react";
import { Context } from "../../context/Context";
export default function Sidebar() {
  const [extend, setExtend] = React.useState(false);
  const { onSent, prevPrompts, setRecentPrompt,newChat} = useContext(Context);

  const loadPrompt=async(prompt)=>{
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="menu"
          onClick={() => setExtend((prev) => !prev)}
          src={assets.menu_icon}
          alt=""
        />
        <div onClick={()=>newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extend && <p>New Chat</p>}
        </div>
        {extend && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div onClick={()=>loadPrompt(item)} className="recent-entry">
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0,18)}...</p>
                </div>
              );
            })}
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
          {extend ? <p>Activites</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extend ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
}
