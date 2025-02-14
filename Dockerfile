FROM node:18-alpine

# Definir diretório de trabalho para a pasta da aplicação
WORKDIR /app/draft-editor

# Copiar APENAS os arquivos de dependências primeiro
COPY draft-editor/package*.json ./

# Instalar dependências
RUN npm install

# Copiar todo o restante da aplicação
COPY draft-editor/ .

# Expor porta e iniciar
EXPOSE 3000
CMD ["npm", "start"]