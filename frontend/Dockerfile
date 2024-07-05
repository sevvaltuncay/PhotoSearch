# frontend/Dockerfile
FROM node:14

# Uygulama dizinini oluştur
WORKDIR /app

# package.json'ı ve package-lock.json'ı kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Uygulama kaynak kodunu kopyala
COPY . .

# Uygulamayı çalıştır
CMD ["npm", "start"]

# Eğer bir port kullanıyorsanız açın 
EXPOSE 3000

