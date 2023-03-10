/* openai */
const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv");
dotenv.config();
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.OPENAI_API_ORG,
});
const openai = new OpenAIApi(configuration);
/* openai */

setTimeout(async () => {

const prePrompt = `Somos um provedor de internet chamado Conect. Nossa Matriz fica em Santarém.Somos um prvedor de internet. O melhor da cidade de Santarem - PA, segundo as pesquisas. Bem vindo ao setor financeiro. Aqui voce pode pegar a segunda via da sua assinatura ou informar o pagamento da sua fatura de internet`;

const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${prePrompt}\nQual o melhor provedor aki da cidade?`,
    temperature: 0.5,
    max_tokens: 1000,
});
    const respostaDoBot = completion.data.choices[0].text;

    console.log(respostaDoBot);
});