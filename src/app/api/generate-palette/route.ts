import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Lütfen bir açıklama girin' }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: `You are a professional color palette generator. Based on the user's description, generate exactly 5 hex color codes that perfectly match the mood, theme, and aesthetic described. 

IMPORTANT: Your response must be a valid JSON object in this exact format:
{
  "colors": ["#RRGGBB", "#RRGGBB", "#RRGGBB", "#RRGGBB", "#RRGGBB"]
}

- Always return exactly 5 colors
- Use proper hex format with # and 6 characters
- Colors should be harmonious and well-balanced
- Consider color theory and aesthetics
- Make colors visually appealing together`,
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.8,
    });

    const content = completion.choices[0]?.message?.content;

    if (!content) {
      return NextResponse.json({ error: 'AI\'dan renk paleti oluşturulamadı' }, { status: 500 });
    }

    let parsedContent;
    try {
      parsedContent = JSON.parse(content);
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      return NextResponse.json({ error: 'AI yanıtı işlenirken hata oluştu' }, { status: 500 });
    }

    // Extract colors array from response
    let colors = parsedContent.colors;
    
    // Fallback if colors is not in expected format
    if (!Array.isArray(colors)) {
      if (Array.isArray(parsedContent)) {
        colors = parsedContent;
      } else {
        console.error('Invalid response format:', parsedContent);
        return NextResponse.json({ error: 'AI yanıtı beklenmedik formatta' }, { status: 500 });
      }
    }

    // Validate colors
    if (!colors || colors.length === 0) {
      return NextResponse.json({ error: 'Hiç renk oluşturulamadı' }, { status: 500 });
    }

    // Ensure we have exactly 5 colors and they're valid hex codes
    const validColors = colors
      .filter((color: string) => typeof color === 'string' && /^#[0-9A-Fa-f]{6}$/.test(color))
      .slice(0, 5);

    if (validColors.length === 0) {
      return NextResponse.json({ error: 'Geçerli renk kodu oluşturulamadı' }, { status: 500 });
    }

    // Pad with default colors if we don't have enough
    while (validColors.length < 5) {
      const defaultColors = ['#6366F1', '#8B5CF6', '#EC4899', '#EF4444', '#F59E0B'];
      validColors.push(defaultColors[validColors.length]);
    }

    return NextResponse.json({ colors: validColors });

  } catch (error) {
    console.error('Error generating palette:', error);
    return NextResponse.json({ 
      error: 'Sunucu hatası oluştu. Lütfen tekrar deneyin.' 
    }, { status: 500 });
  }
}