Configurações iniciais:

1. Instale todas as dependências do projeto com o seguinte comando:

> npm install #or yarn install

2. Caso tenha o docker instalado utilize o seguinte comando abaixo para a criação do banco de dados postgres. Acesse o diretório raiz do projeto:

> docker compose up -d

3. Para a criação das tabelas do banco de dados utilize o seguinte comando:

> npx prisma migrate deploy #or yarn prisma migrate deploy

4. Agora, iremos realizar a inserção de algumas informações fictícias com o arquivo do seed:

> npx prisma db seed #or yarn prisma db seed

5. Lembre-se de criar um arquivo na raiz do projeto ".env" seguindo o arquivo de exemplo ".env-example", onde estão algumas variáveis de ambiente necessárias para a execução do projeto

Obs: Para todo as alterações seguir o padrão de commit´s que está no seguinte artigo: https://dev.to/vitordevsp/padronizacao-de-commit-com-commitlint-husky-e-commitizen-3g1n
