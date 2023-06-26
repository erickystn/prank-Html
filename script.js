const frases = [
  "Você tem certeza?",
  "Para que mentir para si mesmo",
  "você sabe que não é verdade",
  "Você está fugindo da verdade como esse botao foge de voce",
  "Aceitar dói menos",
  "Esses olhos coloridos não me enganam",
  "Dê uma chance para o SIM",
  "Você ainda está nessa",
  "O Sim está quietinho ali oh!",
  "Não existe nada melhor no mundo do que alguem que se aceita!",
  "Ultima chance!",
  "Podemos ficar assim o dia todo!",
  "Eu nao acredito que você não vai desistir",
  "Acho que voce se confundiu... Vamos começar de novo?",
];
let atual = 0;
const changePlace = (e) => {
  document.getElementById("not").style.position = "absolute";
  document.getElementById("not").style.top = `${Math.random() * 91}%`;
  document.getElementById("not").style.left = `${Math.random() * 85}%`;
  if (atual == frases.length - 1) {
    alert(frases[atual]);
    location.reload();
  } else {
    alert(frases[atual]);
    atual += 1;
  }
};

document.getElementById("not").addEventListener("mouseover", changePlace);
document.getElementById("yes").addEventListener("click", (event) => {
  document.getElementById(
    "section-main"
  ).innerHTML = `<iframe width="100%" height="600" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/35951800&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/banoo-002" title="Mano Beshno 002" target="_blank" style="color: #cccccc; text-decoration: none;">Mano Beshno 002</a> · <a href="https://soundcloud.com/banoo-002/gloria-gaynor-i-will-survive" title="Gloria gaynor - i will survive" target="_blank" style="color: #cccccc; text-decoration: none;">Gloria gaynor - i will survive</a></div>`;
});
