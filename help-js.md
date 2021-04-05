## PROMPT
Prompt é aquele onde traz uma caixa sobrepondo a tela com uma área para que você digite um texo.

*Por exemplo:*

```js
prompt('Digite seu nome abaixo:')
```
*Para atribuir o retorno do que foi digitado na caixa do PROMPT, basta declarar uma variável e pegar o retorno, como abaixo:*

```js
var name;

name = prompt('Digite seu nome abaixo:')
```

*E para converter o retorno do prompt de STRING para INT, usar conforme abaixo:*

```js
var idade
idade = prompt('Digite sua idade abaixo:')

console.log(idade + 1);

idade = parseInt(idade)

console.log(idade + 1);
```

*---------------------------------------------------------------------------------------------------------------------------------*

## DOM - document.getElementById
Através da função acima, `conseguimos buscar algo do ID que estamos chamando`. 
Ou seja, se no meu HTML eu defino uma tag com o `id="teste"`, no document.getElementById eu vou chamar da seguinte forma: 
`document.getElementById('teste')`, neste caso, estou buscando atributos da minha TAG, se for um campo de testo e eu quiser retornar o 
valor que foi digitado pelo usuário, eu utilizaria `document.getElementById('teste').value`.

*Por exemplo:*

```html
<input type="text" id="campo_texto">
```
```js
console.log(document.getElementById('campo_texto'))
```
*Logo, no log acima teremos os atributos da tag input, como `<input type="text" id="campo_texto">`*

Agora acompanhe no caso abaixo:

```html
<input type="text" id="campo_texto">
```
*Usuário digitou no campo o valor 10*
e depois
*Usuário digitou no campo a palavra Murilo*
```js
console.log(document.getElementById('campo_texto').value)
```

*Logo, no log acima, teremos para a primeira digitação do usuário o retorno = 10, e para o segundo, teremos o retorno = 'Murilo'*

`Para um último exemplo, utilizaremos um botão, para que os valores informados no INPUT sejam buscados apenas quando clicamos no botão`

```html
<input type="text" id="campo_texto">
<input type="button" id="botão" onclick="buscaValoDoInput()">
```
*Note que eu adicionei uma nova TAG de input de tipo BUTTON, e nela um atributo chamado `onclick`, o mesmo, por padrão sempre chama uma função, que estará rodando no Java Script*

```js
function buscaValoDoInput() {
    console.log(document.getElementById('campo_texto').value)
}
```
*Observer que a função será chamada quando o botão for acionado, e na função estou retornando o que consta no campo text*

*---------------------------------------------------------------------------------------------------------------------------------*