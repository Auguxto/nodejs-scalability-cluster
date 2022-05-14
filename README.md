# Nodejs Scalability Cluster

### O que é um cluster de Node.js e como funciona?


O que é um cluster de Node.js e como funciona?
Um cluster, em poucas palavras, é basicamente um conjunto de recursos computacionais separados atuando de forma conjunta, agindo como se fossem um único recurso, geralmente com o objetivo de aumentar o poder de processamento de uma aplicação.

Quando os servidores de uma aplicação já estão escalados horizontalmente, com algum tipo de gerenciador de carga (load balancer) atuando para balanceá-los, basicamente já temos um cluster. Porém, quando falamos sobre a utilização do Node.js em modo cluster, na verdade falamos sobre dividir o processo principal da aplicação, criando um ou mais processos filhos (denominados workers) dentro do mesmo host e que responderão às requisições simultaneamente.

O Node.js é um sistema single-threaded. Em outras palavras, dentro do processo principal do Node.js existe apenas uma única linha de execução que parte do ponto de entrada da aplicação até o seu encerramento. Apesar desta característica, o Node.js executa tarefas assíncronas de maneira extremamente eficiente graças ao Node.js Event Loop.

Uma Aplicação Web Node.js simples funciona desta maneira:</br>

![1](https://user-images.githubusercontent.com/62861636/168428428-33b490ee-c1db-4ee1-ac69-efd0d4831656.png)


Uma Aplicação Node.js utilizando Cluster funciona desta maneira:</br>

O Módulo de cluster do Node.js faz com que todas as requisições que estão sendo recebidas pelo processo
principal sejam distribuidas paras o workers, atuando como um balanceador de carga(load balancer) para os workers

![image7](https://user-images.githubusercontent.com/62861636/168428524-896f7305-de76-4eb1-ba07-deffe6ed818b.png)

[Credito pelo explicação](https://www.infoq.com/br/articles/nodejs-utilizando-modulo-de-cluster/)

### 🎲 Rodando o projeto

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

```bash
# Clone este repositório
$ git clone https://github.com/Auguxto/nodejs-scalability-cluster

# Acesse a pasta do projeto
$ cd nodejs-scalability-cluster

# Instale as dependências
$ yarn

# Execute a aplicação
$ yarn dev

# Teste de carga(Em outro terminal)
$ yarn test
