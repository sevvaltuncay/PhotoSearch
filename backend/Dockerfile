# backend/Dockerfile
FROM node:14

# Uygulama dizinini oluştur
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Nodemon'u yükle
RUN npm install -g nodemon

# Uygulama kaynak kodunu kopyala
COPY . .

# Uygulamayı çalıştır
CMD ["npm", "start"]

# Portu aç
EXPOSE 3000
