import { useState, useRef, useEffect } from 'react';
import { Send, User } from 'lucide-react';

interface MessagesAppProps {
  hasNewMessage: boolean;
  onFileClick: () => void;
}

interface Message {
  id: number;
  sender: string;
  text: string;
  isFile?: boolean;
  timestamp: string;
  isYou?: boolean;
}

interface Conversation {
  id: string;
  name: string;
  messages: Message[];
}

export default function MessagesApp({ hasNewMessage, onFileClick }: MessagesAppProps) {
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: 'alex',
      name: 'alex',
      messages: [
        { id: 1, sender: 'alex', text: 'hi', timestamp: '7:42 PM', isYou: false },
        { id: 2, sender: 'You', text: 'hi back', timestamp: '7:43 PM', isYou: true },
        { id: 3, sender: 'alex', text: 'how are you', timestamp: '7:44 PM', isYou: false },
      ],
    },
    {
      id: 'tinh4t',
      name: 'tinh4t',
      messages: [
        { id: 1, sender: 'tinh4t', text: 'yooo', timestamp: '8:12 PM', isYou: false },
        { id: 2, sender: 'You', text: 'hi whats up', timestamp: '8:13 PM', isYou: true },
        { id: 3, sender: 'tinh4t', text: 'have you heard about that file thats taking over everyones computer', timestamp: '8:14 PM', isYou: false },
        { id: 4, sender: 'You', text: 'no? thats crazy', timestamp: '8:15 PM', isYou: true },
        { id: 5, sender: 'tinh4t', text: 'yea i heard it\'s spreading through downloads n stuff… like ppl open it n their whole screen glitches out', timestamp: '8:16 PM', isYou: false },
        { id: 6, sender: 'tinh4t', text: 'some say it starts typing on its own too lol', timestamp: '8:16 PM', isYou: false },
      ],
    },
  ]);
  
  const [activeConversation, setActiveConversation] = useState('alex');
  const [messages, setMessages] = useState<Message[]>(conversations[0].messages);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Add the ??? conversation when notification triggers
  useEffect(() => {
    if (hasNewMessage && !conversations.find(c => c.id === 'unknown')) {
      setConversations((prev) => [
        ...prev,
        {
          id: 'unknown',
          name: '???',
          messages: [
            { id: 1, sender: '???', text: 'Someone sent you SANCTUARY.EXE', isFile: true, timestamp: '8:17 PM', isYou: false },
          ],
        },
      ]);
      // Auto-switch to the new conversation
      setTimeout(() => {
        setActiveConversation('unknown');
      }, 100);
    }
  }, [hasNewMessage, conversations]);

  useEffect(() => {
    const conv = conversations.find(c => c.id === activeConversation);
    if (conv) {
      setMessages(conv.messages);
    }
  }, [activeConversation, conversations]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: 'You',
          text: inputValue,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isYou: true,
        },
      ]);
      setInputValue('');
    }
  };

  const handleFileClick = () => {
    onFileClick();
  };

  return (
    <div className="bg-gray-400 w-[550px] h-[500px] flex flex-col">
      {/* Menu Bar */}
      <div className="bg-gray-400 border-b border-gray-600 px-2 py-1 flex gap-4 text-xs font-mono">
        <span>Chat</span>
        <span>View</span>
        <span>Help</span>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Contacts Sidebar */}
        <div className="w-32 bg-gray-300 border-r border-gray-600 flex flex-col">
          <div className="px-2 py-2 bg-gray-400 border-b border-gray-600 text-xs font-mono">
            Contacts
          </div>
          <div className="flex-1 overflow-auto">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setActiveConversation(conv.id)}
                className={`w-full px-2 py-2 text-left text-sm font-mono border-b border-gray-400 hover:bg-gray-200 ${
                  activeConversation === conv.id ? 'bg-white' : 'bg-gray-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <User size={14} />
                  <span className="truncate">{conv.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="bg-gray-300 border-b border-gray-600 px-3 py-2 flex items-center gap-2">
            <User size={16} />
            <span className="text-sm font-mono">
              {conversations.find(c => c.id === activeConversation)?.name}
            </span>
          </div>

          {/* Messages Area */}
          <div className="flex-1 bg-white overflow-auto p-3 space-y-3">
            {messages.map((message) => (
              <div key={message.id} className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-mono ${message.isYou ? 'text-blue-600' : 'text-gray-800'}`}>
                    {message.sender}
                  </span>
                  <span className="text-xs text-gray-600 font-mono">{message.timestamp}</span>
                </div>
                {message.isFile ? (
                  <button
                    onClick={handleFileClick}
                    className="text-sm font-mono bg-purple-200 px-2 py-1 border border-purple-600 hover:bg-purple-300 flex items-center gap-1"
                  >
                    <span className="text-purple-800">📎</span>
                    <span className="underline">{message.text}</span>
                  </button>
                ) : (
                  <div className={`text-sm font-mono px-2 py-1 border inline-block ${
                    message.isYou 
                      ? 'bg-blue-100 border-blue-300' 
                      : 'bg-gray-100 border-gray-300'
                  }`}>
                    {message.text}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="bg-gray-400 border-t border-gray-600 p-2 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 px-2 py-1 border border-gray-600 text-sm font-mono"
              placeholder="Type a message..."
            />
            <button
              onClick={handleSend}
              className="px-3 py-1 bg-gray-400 border-2 border-t-white border-l-white border-r-gray-800 border-b-gray-800 hover:bg-gray-300 active:border-t-gray-800 active:border-l-gray-800 active:border-r-white active:border-b-white"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}