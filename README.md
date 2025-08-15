# Projeto Integrador 2 - UNIVESP

Este repositório contém o frontend do **Projeto Integrador 2** do curso de Tecnologia da Informação da Universidade Virtual do Estado de São Paulo (UNIVESP). O projeto foi desenvolvido para a empresa **LC Copper Metalúrgica**, com o objetivo de modernizar sua presença digital, facilitar o contato com clientes e candidatos, e apresentar seu catálogo de produtos e serviços.

## Integrantes do Grupo
- Frances Rodrigo de Oliveira
- Josué Olímpio da Silva
- Leonardo Francisco dos Santos Lima
- Marco Antonio D'Agostino Mariano de Melo
- Maykon Vitor Secilio da Cruz
- Nicole dos Santos
- Robson Ribeiro da Silva
- Sidney Rodrigues de Souza

## Sobre o Projeto
O sistema é uma aplicação web desenvolvida em **Next.js** (React), com integração a uma API REST para cadastro e gerenciamento de vagas de emprego. O site apresenta:
- **Página inicial** com apresentação institucional, FAQ e estrutura da empresa
- **Catálogo de produtos**: Eletrodos, Braços e Pinças, Discos, Pinos Guia e Buchas, Porta Eletrodos, Shunts
- **Página de vantagens** e diferenciais da LC Copper
- **Página de clientes** e cases de sucesso
- **Página Quem Somos** com missão, visão, valores e overview da empresa
- **Página de contato** com formulário e informações da empresa
- **Trabalhe Conosco**: lista de vagas disponíveis e formulário para candidatura (com upload de currículo)
- **Cadastro de Vagas**: área administrativa para cadastrar, editar e remover vagas (consome API externa)

## Estrutura do Projeto
```
├── pages/                # Rotas principais do Next.js
│   ├── index.js          # Página inicial
│   ├── produtos.js       # Catálogo de produtos
│   ├── vantagens.js      # Vantagens e diferenciais
│   ├── nossosclientes.js # Clientes
│   ├── quemsomos.js      # Sobre a empresa
│   ├── contato.js        # Contato
│   ├── trabalheconosco.js# Vagas e candidatura
│   ├── cadastrarvagas.js # Cadastro/gestão de vagas
│   └── ...               # Demais páginas de produtos
├── src/components/       # Componentes reutilizáveis (banners, cards, forms, etc)
├── services/api.js       # Configuração do Axios para consumo da API de vagas
├── public/               # Imagens e assets
├── styles/               # Estilos globais e módulos CSS
├── package.json          # Dependências e scripts
└── ...
```

## Tecnologias Utilizadas
- [Next.js](https://nextjs.org/) (React)
- [Chakra UI](https://chakra-ui.com/) para UI
- [Bootstrap](https://getbootstrap.com/) para grid e componentes
- [Axios](https://axios-http.com/) para requisições HTTP
- [TypeScript](https://www.typescriptlang.org/) (parcial)
- [Font Awesome](https://fontawesome.com/) e [React Icons](https://react-icons.github.io/react-icons/)

## Como Executar Localmente
1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd projeto-integrador-2-univesp-front-end-lccopper--main
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```
3. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
4. Acesse [http://localhost:3000](http://localhost:3000) no navegador.

> **Nota:** Para o cadastro e listagem de vagas funcionar, é necessário que a [API de vagas](https://api-vagas-lccopper.vercel.app/) esteja disponível.

## Contato
- **Site:** [www.lccopper.com](http://www.lccopper.com/)
- **Telefone:** (11) 4676-0398 / (11) 4676-3092 / (11) 4678-0506 
- **E-mail:**  comercial@lccopper.com.br
- **Endereço:** Rua São João, 200 | Jardim Soeiro, Ferraz de Vasconcelos - SP, CEP 08540-200

---
Projeto desenvolvido como parte do Projeto Integrador 3 - UNIVESP - Tecnologia da Informação.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

- Felizes são aqueles que lembram na alegria de agradecer, pois ignorar o bem é esquecer-se da própria vida.