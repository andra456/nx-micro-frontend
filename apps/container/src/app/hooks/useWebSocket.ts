import React, { useState, useEffect, useId, useCallback } from 'react';
import { Manager, io } from 'socket.io-client';
import useLocalStorage from './useLocalStorage';
import { useCookies } from './useCookies';

const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage';
const SOCKET_SERVER_URL = 'http://localhost:4000';

const useSocket = (roomId: string) => {
  const { getCookie, setCookie } = useCookies();
  const socket = io(SOCKET_SERVER_URL, {
    query: { roomId },
  });

  const Id = useId();
  const { getItem, setItem } = useLocalStorage();

  const setConnect = (active: boolean) => {
    active ? socket.connect() : socket.disconnect();
  };
  const saveMessages = useCallback((objText: any) => {
    const Old = getItem(`message`, []);
    const arrMessage = [...Old, objText];
    setMessages(arrMessage);
    setItem(`message`, arrMessage);
  }, []);

  const [messages, setMessages] = useState<any[]>(getItem(`message`, []) || []);

  const sendMessage = (text: string) => {
    socket.emit(NEW_CHAT_MESSAGE_EVENT, {
      senderId: getCookie('uniqID') || Id,
      body: text,
    });
  };

  useEffect(() => {
    socket.on(NEW_CHAT_MESSAGE_EVENT, (message: any) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === (getCookie('uniqID') || Id),
      };
      saveMessages(incomingMessage);
    });
    !getCookie('uniqID') && setCookie(Id, 'uniqID', 10);

    console.log(getCookie('uniqID') || Id);
  }, []);

  const sendPing = () => {
    socket.emit('ping');
  };

  return { sendMessage, sendPing, setConnect, messages, socket };
};

export default useSocket;
