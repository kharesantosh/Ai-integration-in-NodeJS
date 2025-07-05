# 🤖 AI Node.js Integration with Gemini 1.5 Flash

This is a Node.js integration for Google's **Gemini 1.5 Flash** model — optimized for ultra-fast, low-latency generative AI tasks such as chat, summarization, Q&A, and more.

---

## 🚀 Features

- ✨ Powered by **Gemini 1.5 Flash**
- ⚡ High-speed text generation
- 🧠 Supports chat history for conversational memory
- 🔌 Easy integration with REST APIs
- ✅ Works with JavaScript and TypeScript

---

🔧 Setup
Get your API key:
Go to Google AI Studio
Create a project and get your API key

Environment Variables:
Create a .env file in your root directory

📘 API Reference
generateText(prompt: string): Promise<string>
Generates a response from the Gemini 1.5 Flash model using a single prompt.

chatWithGemini(messages: Message[]): Promise<string>
Allows multi-turn chat using an array of messages:

Each message must have { role: 'user' | 'model', content: string }

✅ Requirements:

Node.js v16 or higher
Internet access
Valid Google API Key

🧪 Development
Clone the repository:



👥 Contributing
Contributions are welcome! Please fork the repo and submit a pull request. For major changes, open an issue first to discuss.

📫 Contact
GitHub: @your-handle
