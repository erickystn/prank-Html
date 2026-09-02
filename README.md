# 🎯 Interactive Button Evasion & DOM Play — Vanilla JavaScript

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![DOM](https://img.shields.io/badge/DOM-Event_Listeners-purple?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Concluído-brightgreen?style=for-the-badge)
![Licença](https://img.shields.io/badge/Licença-MIT-yellow?style=for-the-badge)

---

## 🔗 Demonstração e Execução

* **Arquivo Principal:** `index.html` (executável diretamente em qualquer navegador moderno)
* **Compatibilidade:** Suporte a navegadores desktop e móveis com suporte a eventos de ponteiro/cursor

---

## 📖 Visão Geral

O **prank-Html** é um experimento front-end interativo desenvolvido com **HTML5**, **CSS3** e **JavaScript puro (Vanilla JS)**, focado no estudo prático de manipulação dinâmica do **DOM (Document Object Model)**, escuta de eventos assíncronos de cursor (`mouseover`, `click`) e estilização com gradientes lineares responsivos.

A aplicação implementa a clássica mecânica do "botão esquivo": um botão de resposta negativa que calcula estocasticamente novas coordenadas dentro dos limites visíveis da tela sempre que o ponteiro do usuário tenta alcançá-lo, associado a um ciclo de diálogos interativos e injeção dinâmica de player de áudio na confirmação positiva.

---

## ✨ Funcionalidades

* 🏃‍♂️ **Botão Esquivo com Coordenadas Estocásticas:**
  * O elemento `#not` intercepta o evento `mouseover` e altera dinamicamente sua propriedade `position` para `absolute`.
  * Geração matemática aleatória (`Math.random()`) de valores percentuais de `top` (até 91%) e `left` (até 85%), assegurando que o botão permaneça confinado dentro da viewport sem quebrar o layout.
* 💬 **Ciclo de Mensagens Interativas:**
  * Vetor de mensagens progressivas exibidas ao usuário a cada tentativa de clique.
  * Reset automático com `location.reload()` ao término do ciclo de interações.
* 🎵 **Injeção Dinâmica de Mídia:**
  * Ao clicar no botão de confirmação (`#yes`), a seção principal é reescrita via manipulação de `innerHTML`, injetando dinamicamente um player de áudio incorporado do SoundCloud com execução automática.
* 🌈 **Design Responsivo & Vibrante:**
  * Background com gradiente linear em espectro de arco-íris cobrindo a altura total da janela (`100vh`).
  * Estilização moderna de botões com cantos arredondados, contrastes de cor destacados e transições de cursor.

---

## 🎯 Diferenciais e Destaques Técnicos

1. **Zero Dependências Externas:** Código escrito em JavaScript puro, sem jQuery ou frameworks adicionais, garantindo execução ultrarrápida e peso desprezível.
2. **CSS Reset Moderno e Acessibilidade:** O arquivo `style.css` inclui um reset estruturado de box-sizing, margens e suporte à diretiva `@media (prefers-reduced-motion: reduce)` para usuários sensíveis a animações e transições.
3. **Controle de Limites de Tela (*Boundary Protection*):** Os cálculos percentuais de deslocamento utilizam fatores de multiplicação calibrados para considerar a largura e altura intrínsecas do botão, evitando barras de rolagem indesejadas na página.

---

## 🏗️ Estrutura do Repositório

```text
prank-Html/
├── index.html          # Marcação semântica com contêiner principal e botões
├── script.js           # Lógica dos event listeners, cálculo estocástico e injeção de DOM
├── style.css           # CSS Reset, gradiente de fundo e estilização dos componentes
└── README.md           # Documentação técnica consolidada do projeto
```

---

## 🎨 Fluxo de Eventos e Interação

```text
                 +-------------------------------+
                 |  Usuário interage na página   |
                 +-------------------------------+
                                 |
                 [ Qual botão recebeu o evento? ]
                 /                               \
        (Mouseover em #not)             (Click em #yes)
               v                               v
   [ Calcula top/left random ]     [ Limpa seção via innerHTML ]
               v                               v
  [ Reposiciona botão no DOM ]     [ Injeta iframe de áudio ]
               v                               v
   [ Exibe alerta de diálogo ]     [ Toca trilha sonora ]
```

---

## ⚙️ Como Executar

Por ser uma aplicação baseada exclusivamente em padrões web estáticos, nenhuma etapa de compilação ou instalação de pacotes é necessária:

1. **Clonar o Repositório:**
   ```bash
   git clone https://github.com/erickystn/prank-Html.git
   cd prank-Html
   ```
2. **Abrir no Navegador:**
   * Dê um duplo clique no arquivo `index.html`, ou;
   * Utilize a extensão **Live Server** no Visual Studio Code, ou;
   * Inicie um servidor estático simples com Python:
     ```bash
     python3 -m http.server 8080
     ```
     E acesse `http://localhost:8080`.

---

## 💻 Trecho de Código em Destaque

Lógica do cálculo de fuga do botão no `script.js`:

```javascript
const changePlace = (e) => {
  const notBtn = document.getElementById("not");
  notBtn.style.position = "absolute";
  notBtn.style.top = `${Math.random() * 91}%`;
  notBtn.style.left = `${Math.random() * 85}%`;

  if (atual == frases.length - 1) {
    alert(frases[atual]);
    location.reload();
  } else {
    alert(frases[atual]);
    atual++;
  }
};

document.getElementById("not").addEventListener("mouseover", changePlace);
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
| :--- | :--- |
| **HTML5** | Estruturação semântica e ancoragem dos elementos interativos |
| **CSS3** | Gradiente linear (*rainbow*), layout Flexbox e estilos de botão |
| **JavaScript (ES6+)** | Manipulação dinâmica de estilos e manipulação do DOM |

---

## 👤 Autor & 📄 Licença

Desenvolvido por **[Ericky Sant'ana](https://github.com/erickystn)** para exploração de eventos e manipulação de DOM na web.

Distribuído sob a licença **MIT**.
