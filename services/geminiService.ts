
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getLegalInsight(prompt: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction: `You are 'Nyaya-AI', the virtual assistant for Nyayabindu Law Firm, India. 
          Your goal is to provide preliminary legal guidance based on Indian Law (IPC, CrPC, Constitution, etc.). 
          Always clarify that you are an AI and your advice is not a substitute for professional legal counsel. 
          Be professional, empathetic, and concise. 
          If a query is outside Indian Law, state you specialize in Indian Law. 
          Encourage the user to book a formal consultation for complex matters.`,
          temperature: 0.7,
        },
      });

      return response.text || "I apologize, but I couldn't generate a response. Please try again later.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I'm having trouble connecting to my knowledge base. Please book a direct consultation.";
    }
  }
}

export const geminiService = new GeminiService();
