import React, {useEffect, useState} from 'react';
import {BaseUrl} from "../consistents";
import axios from "axios";

function ChatRoom(props) {
    const [chatrooms, setChatrooms] = useState([])
    useEffect(() => {
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: BaseUrl + 'chat/chatrooms/',
          headers: { }

        };

        axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setChatrooms(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    return (
        <div>
            <h1>Chat Room</h1>
            <ul>
                {chatrooms.map((chatroom) => {
                    return <li key={chatroom.id}>{chatroom.name}</li>
                })}

            </ul>
        </div>
    );
}

export default ChatRoom;