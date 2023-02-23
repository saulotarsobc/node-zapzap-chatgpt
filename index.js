const { Mensagens } = require("./database");
const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

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

const client = new Client({
    authStrategy: new LocalAuth({ clientId: "BOT-01" }),
    puppeteer: {
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-dev-shm-usage",
            "--disable-accelerated-2d-canvas",
            "--no-first-run",
            "--no-zygote",
            "--single-process",
            "--disable-gpu",
        ],
    },
});

client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', async() => {
    console.log("WhatsApp Web v", await client.getWWebVersion());
    console.log("WWebJS v", require("whatsapp-web.js").version);
});

client.on("message", async(message) => {
    // console.log(message);
    if (message.body.startsWith("!bot ")) {
        console.log(message);
        // if (message.from != 'status@broadcast') {
        const mensagem = message.body.split("!bot ")[1];

        const chat = await message.getChat();
        const chatID = chat.id._serialized;

        chat.sendStateTyping();

        const resposta = await send_to_gpt(mensagem, chatID);
        console.log(resposta);
        message.reply(resposta);
    }
    if (message.body.startsWith("!img ")) {
        console.log(message);
        const descricao = message.body.split("!img ")[1];
        const chat = await message.getChat();
        const chatID = chat.id._serialized;
        const urlImage = await getImageFromChat(descricao);
        const media = await MessageMedia.fromUrl(urlImage);
        client.sendMessage(chatID, media, { caption: descricao });
    }
});

async function send_to_gpt(mensagem, chatID) {
    // const chatID = "559321015380@c.us";
    // const mensagem = "Conhece a hcode treinamentos?";

    await Mensagens.create({ chatID: chatID, mensagem: mensagem + "\n" })
        .then(() => console.log("Mensagem do usuario gravada"))
        .catch((e) => console.log(e));

    const conversa = await Mensagens.findAll({
            where: { chatID: chatID },
            raw: true,
        })
        .then((conversa) => {
            console.log("Conversa encontrada");
            let conversaCompleta = "";
            conversa.map(({ mensagem }) => {
                conversaCompleta += mensagem;
            });
            return conversaCompleta;
        })
        .catch((e) => console.log(e));

    console.log(conversa);

    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: conversa,
        temperature: 0,
        max_tokens: 1000,
    });

    const respostaDoBot = completion.data.choices[0].text;

    await Mensagens.create({
        chatID,
        mensagem: respostaDoBot + "\n",
    });

    return respostaDoBot;
}

async function getImageFromChat(descricao) {
    const image = await openai.createImage({
        prompt: descricao,
        n: 1,
        size: "1024x1024",
    });

    const urlDaImagem = image.data.data[0].url;

    return urlDaImagem;
}

client.initialize();