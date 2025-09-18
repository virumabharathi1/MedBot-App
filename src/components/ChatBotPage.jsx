import { Webchat } from '@botpress/webchat';
import { useState } from 'react';

const clientId = "696ad31e-03a1-4077-8ef3-b43f623ddbca";

export default function ChatBotPage() {
  const [isWebchatOpen, setIsWebchatOpen] = useState(true);

  const toggleWebchat = () => setIsWebchatOpen(prev => !prev);

  const configuration = { 
    color: '#4CAF50', // Chatbot accent color
    bubbleBackground: '#4CAF50',
    bubbleTextColor: '#fff',
    botMessageBackground: '#f1f1f1',
    botMessageTextColor: '#333',
    userMessageBackground: '#4CAF50',
    userMessageTextColor: '#fff'
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      <h2 className="mb-4 text-center" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '600', color: '#333' }}>
        Health Assistant ChatBot
      </h2>
      <button 
        className={`btn ${isWebchatOpen ? 'btn-danger' : 'btn-success'} mb-3 shadow-sm`}
        onClick={toggleWebchat}
        style={{ borderRadius: '25px', padding: '10px 25px', fontWeight: '500' }}
      >
        {isWebchatOpen ? 'Hide ChatBot' : 'Open ChatBot'}
      </button>
      {isWebchatOpen && (
        <div 
          style={{ 
            width: '400px', 
            height: '600px', 
            borderRadius: '15px', 
            overflow: 'hidden', 
            boxShadow: '0 8px 20px rgba(0,0,0,0.15)', 
            border: '1px solid #ddd' 
          }}
        >
          {/* <Webchat clientId={clientId} configuration={configuration} /> */}
        </div>
      )}
    </div>
  );
}
