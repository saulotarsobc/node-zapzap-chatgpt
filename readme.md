# Bot Chat com NodeJS usando ChatGPT e a lib WhatsApp.js

![open ia logo](image/README/1677193461266.png)

Este é um projeto de bot chat desenvolvido em NodeJS utilizando a biblioteca WhatsApp.js e a API de inteligência artificial ChatGPT da OpenAI. O objetivo é fornecer uma interface interativapara os usuários se comunicarem com o bot e receberem respostas relevantes e contextualizadas.

## Pré-requisitos

Antes de começar, você deve ter o seguinte software instalado em seu sistema:

* Node.js (versão 12 ou superior)
* npm (gerenciador de pacotes do Node.js)
* Uma conta na plataforma OpenAI para acessar a API do ChatGPT

## Instalação

1. Faça o clone deste repositório para sua máquina local:

```bash
git clone https://github.com/saulotarsobc/node-zapzap-chatgpt.git
```

2. Navegue até o diretório do projeto e execute o seguinte comando para instalar as dependências:

```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

OPENAI_API_KEY=chave-de-api-do-chatgpt
OPENAI_API_ORG=id-da-organizacao-do-chatgpt

Substitua `chave-de-api-do-chatgpt` pela chave de API fornecida pela plataforma OpenAI e `id-da-organizacao-do-chatgpt` pelo número de telefone celular que será usado para enviar e receber mensagens via WhatsApp.

1. Execute o seguinte comando para iniciar o servidor:

```bash
npm start
```

1. Abra o WhatsApp em seu dispositivo móvel e escaneie o QR code gerado pelo servidor para vincular sua conta do WhatsApp ao bot chat.

## Uso

Após a instalação e configuração do servidor, você pode iniciar uma conversa com o bot chat enviando uma mensagem para o número de telefone que você configurou no arquivo `.env`. O bot responderá com uma mensagem de boas-vindas e estará pronto para responder a quaisquer perguntas ou consultas que você fizer.

## Contribuição

Se você deseja contribuir para o desenvolvimento deste projeto, por favor, siga os seguintes passos:

1. Faça o fork deste repositório para sua conta pessoal do GitHub
2. Crie uma branch para a sua contribuição:

```bash
git checkout -b minha-contribuicao
```

1. Faça as alterações e adições que desejar
2. Faça um commit das alterações:

```bash
git commit -m "Minha contribuição para o projeto"
```

1. Envie suas alterações para o seu fork:

```bash
git push origin minha-contribuica
```

1. Crie um pull request para solicitar que suas alterações sejam incorporadas ao projeto principal.

## Licença

Este projeto é licenciado sob a licença MIT - veja o arquivo [LICENSE.md](./LICENSE.md) para mais detalhes.
