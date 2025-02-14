# 📝 Editor de Rascunhos ENEM

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![License](https://img.shields.io/badge/License-MIT-blue)
![Responsive](https://img.shields.io/badge/Responsive-Yes-green)
![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?logo=docker)

- [Funcionalidades Principais](#-funcionalidades-principais)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Instalação](#-instalação)
- [Estrutura do Projeto](#-estrutura-do-projeto)

---

## ✨ Funcionalidades Principais

### 🖋 **Edição Inteligente**

- ✨ Adição dinâmica de parágrafos com preview em tempo real
- ✏️ Edição in-line direto no texto
- 📄 Formatação automática estilo folha de papel
- 🔄 Histórico de alterações

### 💾 **Gestão de Rascunhos**

- 💾 Salvar múltiplas versões de rascunhos
- ⏳ Recuperar versões anteriores por data/hora
- 🔄 Sobrescrever rascunhos existentes
- 🗑️ Exclusão segura com confirmação

### 🎨 **Experiência do Usuário**

- 🌙 Modo Noturno inteligente
- 📱 Design 100% responsivo
- 🎮 Controles contextuais flutuantes
- 💡 Feedback visual intuitivo

---

## 🛠 Tecnologias Utilizadas

**Frontend:**

- **React 19** com Hooks
- **CSS Modules** para estilização
- **LocalStorage** para persistência
- **CSS Variables** para temas dinâmicos

**Infraestrutura:**

- **Docker** para containerização
- **Docker Compose** para orquestração
- **Nginx** para produção

---

## 🚀 Instalação

### Pré-requisitos

- Node.js 18.x+
- npm 9.x+ ou Docker 24.x+

### Método 1: Desenvolvimento Local

```bash
git clone https://github.com/Pedro-Medeiross/draft-editor.git
cd draft-editor/draft-editor  # Acesse a subpasta do projeto
npm install --force  # Ignora erros de peer dependencies
npm start

---

### Método 2: Docker (Recomendado)
```
bash
git clone https://github.com/Pedro-Medeiross/draft-editor.git
cd draft-editor

# Construa e inicie os containers
docker-compose up -d --build

# Acesse em: http://localhost:3000

# Para parar:
docker-compose down
```

---

<div id="estrutura"></div>
### 🗂 Estrutura do Projeto
draft-editor/
├── draft-editor/          # Pasta principal do React
│   ├── src/               # Código fonte
│   ├── public/            # Assets estáticos
│   └── package.json       # Dependências
├── docker-compose.yml     # Configuração Docker
├── Dockerfile             # Build da aplicação
└── README.md              # Documentação

---

 Desenvolvido com ❤️ por [Pedro Medeiros](ttps://github.com/Pedro-Medeiross")! 🚀 Um projeto para o processo seletivo da Repertório