import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Send, Bot, User, Leaf, Heart, Brain, Sparkles } from "lucide-react";

const VaidyaScreen = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Namaste! I am your Virtual Vaidya, here to guide you on your Ayurvedic wellness journey. How can I help you today?'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickQuestions = [
    { 
      id: 1, 
      text: "What's good for stress relief?", 
      icon: Brain,
      category: "Mental Health" 
    },
    { 
      id: 2, 
      text: "Suggest diet for better digestion", 
      icon: Heart,
      category: "Nutrition" 
    },
    { 
      id: 3, 
      text: "Best time for meditation?", 
      icon: Leaf,
      category: "Lifestyle" 
    },
    { 
      id: 4, 
      text: "Ayurvedic remedies for sleep", 
      icon: Sparkles,
      category: "Sleep" 
    }
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        type: 'bot',
        content: getBotResponse(inputMessage)
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (question) => {
    const responses = {
      stress: "For stress relief, I recommend Pranayama (breathing exercises) daily. Try Anulom Vilom for 10 minutes each morning. Also, consider Brahmi tea before bedtime and gentle self-massage with warm sesame oil.",
      digestion: "For better digestion, follow these Ayurvedic principles: Eat your largest meal at midday when digestive fire is strongest. Include ginger, cumin, and fennel in your cooking. Avoid cold drinks with meals.",
      meditation: "The best time for meditation is during Brahma Muhurta (4-6 AM) when the mind is naturally calm. If morning isn't possible, sunset meditation is also beneficial for balancing your doshas.",
      sleep: "For better sleep, drink warm milk with a pinch of nutmeg 30 minutes before bed. Practice gentle yoga stretches, avoid screens 1 hour before sleep, and keep your bedroom cool and dark."
    };

    if (question.toLowerCase().includes('stress')) return responses.stress;
    if (question.toLowerCase().includes('digest')) return responses.digestion;
    if (question.toLowerCase().includes('meditat')) return responses.meditation;
    if (question.toLowerCase().includes('sleep')) return responses.sleep;
    
    return "Based on Ayurvedic principles, I recommend consulting with a qualified practitioner for personalized advice. Meanwhile, focus on maintaining regular meal times, gentle exercise, and adequate rest for overall wellness.";
  };

  const handleQuickQuestion = (question) => {
    setInputMessage(question);
  };

  return (
    <div className="min-h-screen bg-background pb-20 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-wellness p-6 text-white">
        <div className="flex items-center">
          <div className="bg-white/20 p-3 rounded-full mr-4">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Virtual Vaidya</h1>
            <p className="opacity-90 text-sm">Your AI Ayurveda Guide</p>
          </div>
        </div>
      </div>

      {/* Quick Questions */}
      <div className="p-4">
        <h2 className="text-sm font-semibold mb-3 text-muted-foreground">Quick Questions</h2>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {quickQuestions.map((question) => {
            const IconComponent = question.icon;
            return (
              <Card 
                key={question.id}
                className="cursor-pointer hover:shadow-card transition-all duration-200"
                onClick={() => handleQuickQuestion(question.text)}
              >
                <CardContent className="p-3">
                  <div className="flex items-center mb-2">
                    <IconComponent className="w-4 h-4 mr-2 text-primary" />
                    <Badge variant="secondary" className="text-xs">
                      {question.category}
                    </Badge>
                  </div>
                  <p className="text-xs text-card-foreground">{question.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 px-4 pb-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`flex-shrink-0 ${message.type === 'user' ? 'ml-2' : 'mr-2'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === 'user' ? 'bg-primary' : 'bg-gradient-wellness'
                  }`}>
                    {message.type === 'user' ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-white" />
                    )}
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${
                  message.type === 'user' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-card border border-border text-card-foreground'
                }`}>
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 bg-card border-t border-border">
        <div className="flex gap-2">
          <Input
            placeholder="Ask your Vaidya anything..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1"
          />
          <Button onClick={handleSendMessage} size="icon">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VaidyaScreen;