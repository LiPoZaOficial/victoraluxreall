
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateTagline = async (name: string, style: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a short, magnetic, and professional bio tagline for a premium content creator named ${name}. Style: ${style}. Keep it under 100 characters. No hashtags.`,
      config: {
        temperature: 0.8,
        topP: 0.9,
      }
    });
    return response.text || "Exclusive access to my world.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The most exclusive content, just for you.";
  }
};

export const suggestLinks = async (category: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Suggest 3 catchy CTA titles for buttons for a premium creator in the category of ${category}. Return only a JSON array of strings.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: { type: Type.STRING }
        }
      }
    });
    return JSON.parse(response.text.trim());
  } catch (error) {
    return ["Join My Inner Circle", "Exclusive Photo Feed", "Private DM Access"];
  }
};
