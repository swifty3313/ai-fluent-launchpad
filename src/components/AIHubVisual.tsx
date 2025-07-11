import React, { useState } from 'react';

interface AITool {
  id: string;
  name: string;
  logo: string;
  useCase: string;
  position: { x: number; y: number };
}

const aiTools: AITool[] = [
  { id: 'chatgpt', name: 'ChatGPT', logo: '/lovable-uploads/49e79685-7a65-42e5-8ba4-bf9f2e68339e.png', useCase: 'Intelligent Conversations', position: { x: 0, y: -120 } },
  { id: 'n8n', name: 'n8n', logo: '/lovable-uploads/c6fcffb4-3b9d-4350-a2f6-513b1949d3e9.png', useCase: 'Workflow Automation', position: { x: 85, y: -85 } },
  { id: 'relevance', name: 'Relevance', logo: '/lovable-uploads/cd771f7f-7e35-40ba-9f5e-ceab0749b393.png', useCase: 'AI Agent Building', position: { x: 120, y: 0 } },
  { id: 'zapier', name: 'Zapier', logo: '/lovable-uploads/16046bbe-637e-49d1-96bf-4c56472a8b5d.png', useCase: 'App Integration', position: { x: 85, y: 85 } },
  { id: 'drive', name: 'Google Drive', logo: '/lovable-uploads/123e848c-a2cf-4e8d-adfb-e8792f998480.png', useCase: 'Document Automation', position: { x: 0, y: 120 } },
  { id: 'slack', name: 'Slack', logo: '/lovable-uploads/e123ff7e-72c6-4878-abd3-24ec9794b4ac.png', useCase: 'Team Communication', position: { x: -85, y: 85 } },
  { id: 'lovable', name: 'Lovable', logo: '/lovable-uploads/10f2dc82-510a-493b-993f-e859506d9a64.png', useCase: 'AI-Powered Development', position: { x: -120, y: 0 } },
  { id: 'notion', name: 'Notion', logo: '/lovable-uploads/5d8bfc9a-8f2b-472a-b874-15c7024e0aa9.png', useCase: 'Knowledge Management', position: { x: -85, y: -85 } }
];

const AIHubVisual: React.FC = () => {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl"></div>
      
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
        {aiTools.map((tool) => (
          <line
            key={tool.id}
            x1="200"
            y1="200"
            x2={200 + tool.position.x}
            y2={200 + tool.position.y}
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            opacity={hoveredTool === tool.id ? "0.8" : "0.3"}
            className="transition-opacity duration-300"
            strokeDasharray={hoveredTool === tool.id ? "0" : "5,5"}
          />
        ))}
        
        {/* Animated pulse rings */}
        <circle
          cx="200"
          cy="200"
          r="60"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          opacity="0.2"
          className="animate-pulse"
        />
        <circle
          cx="200"
          cy="200"
          r="80"
          fill="none"
          stroke="hsl(var(--secondary))"
          strokeWidth="1"
          opacity="0.1"
          className="animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />
      </svg>

      {/* Central hub - YOU */}
      <div className="relative z-10 w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center shadow-lg">
        <span className="text-brand-navy font-bold text-sm">YOU</span>
      </div>

      {/* Business Operations Ring */}
      <div className="absolute z-10 w-32 h-32 rounded-full border-2 border-brand-gold/30 flex items-center justify-center"
           style={{ left: 'calc(50% - 64px)', top: 'calc(50% - 64px)' }}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 128 128">
          <defs>
            <path
              id="circle-path"
              d="M 64,64 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
              fill="none"
            />
          </defs>
          <text className="fill-brand-navy text-xs font-medium">
            <textPath href="#circle-path" startOffset="25%">
              YOUR BUSINESS OPERATIONS
            </textPath>
          </text>
        </svg>
      </div>

      {/* AI Tools */}
      {aiTools.map((tool) => (
        <div
          key={tool.id}
          className="absolute z-10 transition-all duration-300 hover:scale-110 cursor-pointer"
          style={{
            left: `calc(50% + ${tool.position.x}px - 24px)`,
            top: `calc(50% + ${tool.position.y}px - 24px)`,
          }}
          onMouseEnter={() => setHoveredTool(tool.id)}
          onMouseLeave={() => setHoveredTool(null)}
        >
          {/* Tool circle */}
          <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
            hoveredTool === tool.id 
              ? 'bg-gradient-to-br from-primary to-secondary scale-110' 
              : 'bg-white border-2 border-primary/20'
          }`}>
            <img src={tool.logo} alt={tool.name} className="w-6 h-6 object-contain" />
          </div>
          
          {/* Tool name */}
          <div className="absolute top-14 left-1/2 transform -translate-x-1/2 text-xs font-medium text-center whitespace-nowrap">
            {tool.name}
          </div>

          {/* Hover tooltip */}
          {hoveredTool === tool.id && (
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-md text-xs whitespace-nowrap animate-fade-in">
              {tool.useCase}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
            </div>
          )}
        </div>
      ))}

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: '2s'
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AIHubVisual;