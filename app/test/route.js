export async function GET(request) {
  const apiKey = process.env.GAME_API_KEY;
  const openAiUrl = "https://api.openai.com/v1/engines/text-davinci-003/completions";

  const gameTitle = request.body.gameTitle;
  const aiPrompt = `Give me the best strategy to beat ${gameTitle}.`;

  const response = await fetch(openAiUrl, {
    method: "POST",
    headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        prompt: aiPrompt,
        max_tokens: 1000,
    }),
  });

  const data = await response.json();
  response.status(200).json(data);
   // return Response.json({  })
  };