import React, { useEffect, useRef } from 'react'
import { db } from "../../services/firebase"
import { useCollection } from "react-firebase-hooks/firestore"
import Message from "../Message";
import './styles.css'


const ChatBody = ({ chatId }) => {
  const [messagesRes] = useCollection(
    db
      .collection("chats")
      .doc(chatId)
      .collection("messages")
      .orderBy("timestamp", "asc")
  );

  const refBody = useRef("");

  useEffect(() => {
    if (refBody.current.scrollHeight > refBody.current.offsetHeight) {
      refBody.current.scrollTop =
        refBody.current.scrollHeight - refBody.current.offsetHeight;
    }
  }, [messagesRes]);

  return (
    <div className="Container-ChatBody" ref={refBody}>
      {/* <div className='Div-Logo'>
      <img src={MobatoLogo} alt="" />
      </div> */}
      {messagesRes?.docs.map((message) => (
        <Message
          key={message.id}
          user={message.data().user}
          message={{
            message: message.data().message,
            timestamp: message.data().timestamp?.toDate().getTime()
          }}
        />
      ))}
    </div>
  )
};
export default ChatBody;