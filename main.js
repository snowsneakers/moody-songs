makeReq()

async function makeReq(){
    const res = await fetch('/api')
    const data = await res.json()
    console.log(data)
    function mood(index){
        const div = document.createElement('div')
        div.classList.add('albumStuff')
        div.innerHTML = `
            <div>
            <iframe frameBorder="0" src="${data[index].url}"></iframe>
            <h2>${data[index].artist}</h2>
            <h3>${data[index].song}</h3>
            </div>
            <div class="lyrics">
            <p>${data[index].lyrics}</p>
            </div>
        `
        document.querySelector('.albumInfo').appendChild(div)
    }

    document.querySelector('select').addEventListener('change', () => {
        console.log(document.querySelector('select').value)
        let emo = document.querySelector('select').value
        clear()
    
        if(emo == 'happy' ){
            mood(0)
        } else if(emo == 'angry'){
            mood(1)
        } else if(emo == 'sad'){
            mood(3)
        } else if(emo == 'chill'){
            mood(2)
        } else if(emo == 'inLove'){
            mood(4)
        }
    })
}

function clear(){
        const albumInfo = document.querySelector(".albumInfo");
        while (albumInfo.firstChild) {
            albumInfo.removeChild(albumInfo.firstChild);
        }
}