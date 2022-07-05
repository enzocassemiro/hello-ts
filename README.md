# Hello TypeScript
Projeto com contador para demonstrar como inicializar e configurar um projeto com HTML e TypeScript.

- ## Passo a passo

### - 1 Verificar/Instalar NodeJS
Primeiramente é necessário possuir o NodeJS instalado. [Link para instalação](https://nodejs.org/en/download/)

Caso você já possua o NodeJS em sua máquina, favor verificar com o seguinte comando em seu terminal de preferência:
`node --version` ou `node -v`

O retorno esperado é algo próximo de `v16.15.0`

### - 2 Instalar TypeScript (Global)

É possível instalar o TypeScript apenas no projeto, mas nesse caso vamos instalar de forma global.

Para instalarmos o TypeScript é necessário ter o NojeJS instalado e executar
o seguinte comando com npm `npm install -g typescript` ou `npm i -g typescript`

Em seguida vamos verificar se o TypeScript foi instalado de forma global. Em
um terminal de sua preferência execute o comando `tsc --version` ou `tsc -v`

O retorno esperado é algo próximo de `Version 4.7.4`

### - 3 Criação das pastas

Com base na seguinte [documentação](https://www.typescriptlang.org/docs/handbook/project-references.html) é possível organizar o código melhor e melhorar a performance de compilação do TypeScript com esse tipo de organização. Vamos utilizar o index.html fora da `/dist` para utilizarmos o github pages.

Os arquivos `/tsconfig.json` e o `/dist/js/index.js` vão ser gerados por meio de comandos e não precisam ser criados.

#### Estrutura do projeto

```
hello-ts
|   README.md
|   index.html
|   tsconfig.json
|--dist/
|   |--js/
|       |--index.js
|--src/
|   |--index.ts
|   |--/styles
|       |--reset.css
|       |--index.css
```

### - 4 Iniciar o projeto TS

Para gerarmos o arquivo `/tsconfig.json` vamos iniciar o TypeScript com o seguinte comando na pasta raiz do projeto
`tsc --init`

Com o arquivo gerado vamos fazer algumas alterações nele, retirando a linha comentanda e adicionando o caminho que ele deve ler o arquivo ou criar o arquivo. 


Na parte de Modules vamos adicionar o src no diretório root. `"rootDir": "./src"`.

```
/* Modules */ 
"rootDir": "./src" 
```

Na parte do Emit vamos adicionar o caminho onde serão compilados os arquivos JS. `"outDir": "./dist/js/"`

```
/* Emit */
"outDir": "./dist/js/" 
``` 

### - 5 Compilar TypeScript
Para utilizarmos o TypeScript com HTML Puro é necessário compilar o arquivo TypeScript, dessa forma ele será gerado no caminho indicado no passo 4.

Desenvolva o código desejado no caminho `/src` 

Execute o seguinte comando no terminal podemos gerar o arquivo JS compilado
`tsc`

- ####  Não se esqueça de importar o arquivo gerado na compilação no HTML.

Caso você desenvolva um arquivo `/src/index.ts` ele será gerado no caminho indicado no passo 4 `./dist/js/index.js`

- #### Dica: Utilize o comando `tsc -w` para live-reload na compilação

## Documentações utilizadas:

[TypeScript for JavaScript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

[TypeScript for the New Programmer](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)

[Intro to the TSConfig Reference](https://www.typescriptlang.org/tsconfig)