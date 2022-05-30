makeReq();

async function makeReq() {
  const res = await fetch("/api");
  const data = await res.json();
  console.log(data);
  function blah(index) {
    const div = document.createElement("div");
    div.classList.add("albumStuff");
    div.innerHTML = `
            <div>
            <iframe frameBorder="0" src="${data[index].url}"></iframe>
            <h1>${data[index].artist}</h1>
            <h2>${data[index].song}</h2>
            </div>
            <div class="lyrics">
            <p>${data[index].lyrics}</p>
            </div>
        `;
    document.querySelector(".albumInfo").appendChild(div);
  }

  document.querySelector("select").addEventListener("change", () => {
    console.log(document.querySelector("select").value);
    let emo = document.querySelector("select").value;
    clear();

    switch (emo) {
      case "happy":
        blah(0);
        break;
      case "angry":
        blah(1);
        break;
      case "sad":
        blah(3);
        break;
      case "chill":
        blah(2);
        break;
      case "inLove":
        blah(4);
        break;
    }
  });
}

function clear() {
  const albumInfo = document.querySelector(".albumInfo");
  while (albumInfo.firstChild) {
    albumInfo.removeChild(albumInfo.firstChild);
  }
}