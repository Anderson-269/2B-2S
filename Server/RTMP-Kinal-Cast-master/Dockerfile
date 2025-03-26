# Dockerfile
FROM node:20

WORKDIR /NMS_KinalCast_2024
COPY package.json package-lock.json ./
RUN npm install
COPY . .

EXPOSE 1935 80

CMD ["npm", "start"]
