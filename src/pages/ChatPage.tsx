import { ChatInterface } from '@/components/ChatInterface';

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">AI Chat Assistant</h1>
          <p className="text-muted-foreground">
            Have a conversation with OpenAI's GPT model
          </p>
        </div>
        <ChatInterface />
      </div>
    </div>
  );
}