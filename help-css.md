## CSS

*CENTRALIZAR DIV*
`Quando se trabalhar com uma DIV e querer centraliza-la, basta usarmos os atributos abaixo:`

```css
    margin-left: auto;
    margin-right: auto;
```

*-------------------------------------------------------------------------------------------------------------------*

*Adicionando Sombras em elementos*

```css
box-shadow: 10px 10px 10px black;
```

*-------------------------------------------------------------------------------------------------------------------*

*Usando HOVER (algo que aconteça com o elemento quando o mouse estiver por cima)*

```css
.button1:hover, .button2:hover, .button3:hover {
    border: 1px solid #b7e858;
    background: #00071c;
    color: white;
    font-weight: bold;
}
```

*-------------------------------------------------------------------------------------------------------------------*

*Ampliando elemento quando passado com o mouse por cima*

```css
#input1:hover, #input2:hover, #input3:hover {
    -moz-transform: scale(1.1);
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
} 
```

*-------------------------------------------------------------------------------------------------------------------*

*Epaçamento entre as letras* 

```css
letter-spacing: 3px;
```