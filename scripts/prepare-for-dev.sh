#! /bin/bash

printf "\n> Preparando o campo pra execução do pm2\n\n"
PATH=$(npm bin):$PATH
export NODE_ENV=development
pm2 stop all | grep 'PM2'
pm2 delete all | grep 'PM2'
kill -9 $(lsof -t -i:3000) &> /dev/null & kill -9 $(lsof -t -i:3001) &> /dev/null
printf "\n"

function initialize_back_end () {
  printf "\n> ASYNC: Instalando o back-end e inicializando o banco de dados com o ORM\n"
  (
    cd ./back-end
    cacheFolderBack="/tmp/colegio-up-qi-back-end-cache"
    rm -rf $cacheFolderBack
    npm_config_loglevel=silent npm install --cache $cacheFolderBack
    npx sequelize-cli db:drop
    npx sequelize-cli db:create
    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all
  )
}

initialize_back_end
sleep 10

printf "\n> Iniciando ambas aplicações\n\n"
pm2 start pm2.dev.config.yml | grep 'PM2'

printf "\n> Continuando processos\n\n"
