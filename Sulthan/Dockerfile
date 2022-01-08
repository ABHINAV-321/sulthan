FROM fusuf/whatsasena:latest

RUN git clone https://github.com/ABHINAV-321/SULTHAN /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/ABHINAV-321/media

CMD ["node", "bot.js"]
