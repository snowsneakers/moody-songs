//On change of dropdown menu it runs runs makeReq funciton
document.querySelector("select").addEventListener("change", makeReq);

//based on selection, function fetches api from server
async function makeReq() {
    //stores value of select element in variable
  let mood = document.querySelector("select").value;

  //fetches api from server
  const res = await fetch(`/api/${mood}`);
  //stores data from fetch
  const data = await res.json();
  console.log(data);
  let random = Math.floor(Math.random() * data.length);

  
  const song = new Songs(data[random].url, data[random].artist, data[random].song, data[random].lyrics);
  
  //clears previous song from container
  song.clear();

  //dpending on what value is selected calls getSongInfo function
  switch (mood) {
    case "happy":
      song.getSongInfo();
      break;
    case "angry":
      song.getSongInfo();
      break;
    case "sad":
      song.getSongInfo();
      break;
    case "chill":
      song.getSongInfo();
      break;
    case "inLove":
      song.getSongInfo();
      break;
  }
}

//creates song class
class Songs {
    //parameters are what values from api obj we want
  constructor(url, artist, song, lyrics) {
    this.url = url;
    this.artist = artist;
    this.song = song;
    this.lyrics = lyrics;
  }

  //clears container
  clear() {
    const albumInfo = document.querySelector(".albumInfo");
    while (albumInfo.firstChild) {
      albumInfo.removeChild(albumInfo.firstChild);
    }
  }

  //function creates div, div conentent gets added using fetched data, appends div to DOM
  getSongInfo() {
    const div = document.createElement("div");
    div.classList.add("albumStuff");
    div.innerHTML = `
                <div>
                    <iframe frameBorder="0" src="${this.url}"></iframe>
                    <h1>${this.artist}</h1>
                    <h2>${this.song}</h2>
                </div>
                <div class="lyrics">
                    <p>${this.lyrics}</p>
                </div>
            `;
    document.querySelector(".albumInfo").appendChild(div);
  }
}
