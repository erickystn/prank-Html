const changePlace = (e) => {
  document.getElementById("not").style.position = "absolute";
  document.getElementById("not").style.top = `${Math.random() * 91}%`;
  document.getElementById("not").style.right = `${Math.random() * 95}%`;
};

document.getElementById("not").addEventListener("mouseover", changePlace);
document.getElementById("yes").addEventListener("click", (event) => {
  document.getElementById(
    "section-main"
  ).innerHTML = `<iframe width="100%" height="600" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/35951800&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/banoo-002" title="Mano Beshno 002" target="_blank" style="color: #cccccc; text-decoration: none;">Mano Beshno 002</a> · <a href="https://soundcloud.com/banoo-002/gloria-gaynor-i-will-survive" title="Gloria gaynor - i will survive" target="_blank" style="color: #cccccc; text-decoration: none;">Gloria gaynor - i will survive</a></div>`;
});
