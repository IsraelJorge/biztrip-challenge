# Desafio Frontend Biztrip: CRUI de Credenciais

Este repositório contém a solução para o Desafio Frontend da Biztrip, focado na funcionalidade "CRUI" “CRUIA” (Create, Read, Update, Inactivate, Activate) de Credenciais.

### Índice
-   [Pré-requisitos](#pr%C3%A9-requisitos)
-   [Instalação](#instala%C3%A7%C3%A3o)
-   [Rodando o Projeto](#rodando-o-projeto)
-   [Deploy do Projeto](#deploy-do-projeto)
-   [Estrutura do Projeto](#estrutura-do-projeto)
-   [Tecnologias e Ferramentas Utilizadas](#tecnologias-e-ferramentas-utilizadas)
-   [Contribuindo](#contribuindo)

### Pré-requisitos

Certifique-se de ter os seguintes itens instalados em seu sistema:

-   Node.js (versão 14 ou superior)
-   npm ou yarn

### Instalação

1 -  **Clone o repositório:**

```
git clone git@github.com:IsraelJorge/biztrip-challenge.git
cd biztrip-challenge
```
2 -  **Instale as dependências:**

Usando npm:

```
npm install
```

Ou usando yarn:

```
yarn install
```
### Rodando o Projeto

Para iniciar o projeto localmente, use o seguinte comando:

Usando npm:

```
npm run dev
```

Ou usando yarn:

```
yarn dev
```
A aplicação estará disponível em http://localhost:5174.

### Deploy do Projeto

O projeto está deployado na Vercel. Você pode visualizá-lo ao vivo aqui: [https://clin-crm-test.vercel.app/](https://clin-crm-test.vercel.app/).

### Estrutura do Projeto

Aqui está uma visão geral da estrutura do projeto:

```
biztrip-challenge/
├── public/             # Arquivos estáticos
├── src/                # Arquivos fonte
│   ├── __testes__/     # Testes da Aplicação
│   ├── __storybook__/  # Documentação dos coponentes
│   ├── components/     # Componentes React
│   ├── pages/          # Componentes de páginas
│   ├── styles/         # Configuração CSS-in-JS: Stitches
│   ├── utils/          # Funções utilitárias
│   └── App.tsx         # Componente principal da aplicação
├── .gitignore          # Arquivo de ignore do Git
├── index.html          # Arquivo HTML principal
├── package.json        # Metadados do projeto e dependências
├── tsconfig.json       # Configuração do TypeScript
└── vite.config.ts      # Configuração do Vite
```

### Tecnologias e Ferramentas Utilizadas

- **Framework:** React com TypeScript
- **Bundler:** Vite
- **CSS-in-JS:** Stitches
- **UI/UX:** RadixUI
- **Consulta de Dados:** useQuery e useMutation (React Query)
- **Manipulação de Formulários:** React Hook Form
- **Validação:** YUP
- **Documentação:** Storybook

### Contribuindo

Contribuições são bem-vindas! Se você tiver alguma sugestão ou encontrar algum problema, por favor, abra uma issue ou envie um pull request.
