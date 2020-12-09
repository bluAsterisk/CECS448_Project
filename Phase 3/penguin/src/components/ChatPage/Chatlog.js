
import React, { useRef, useState } from 'react';
import firebase from '../Firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

SpeechRecognition.startListening({language: 'en_US'},{ continuous: true })

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === firebase.auth.currentUser.uid ? 'sent' : 'received';
  const { transcript, resetTranscript } = useSpeechRecognition()
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }
  return (<>
    <div className={`message ${messageClass}`}>
      <p>{transcript}</p>
    </div>
  </>)
}

function Chatlog() {
    const dummy = useRef();
    const messagesRef = firebase.firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
  
    const [messages] = useCollectionData(query, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');
  
    const sendMessage = async (e) => {
      e.preventDefault();
      const { uid, photoURL } = firebase.auth.currentUser;
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  
    return (<>
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </main>
      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
        <button type="submit" disabled={!formValue}>🕊️</button>
      </form>
    </>)
}
export default Chatlog