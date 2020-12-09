
import React, { useRef, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

function Chatlog() {
  const { transcript, resetTranscript } = useSpeechRecognition()
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  return (
    <div>
      <button onClick={SpeechRecognition.startListening({ conitnuous: true}, {language: 'en-US'})}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  )
}
export default Chatlog