makeReq()

async function makeReq(){
    const res = await fetch('/api')
    const data = await res.json()
    console.log(data)
    function blah(index){
        const div = document.createElement('div')
        div.classList.add('albumStuff')
        div.innerHTML = `
            <div>
            <iframe frameBorder="0" src="${data[index].url}"></iframe>
            <h1>${data[index].artist}</h1>
            <h2>${data[index].song}</h2>
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
            blah(0)
        } else if(emo == 'angry'){
            blah(1)
        } else if(emo == 'sad'){
            blah(3)
        } else if(emo == 'chill'){
            blah(2)
        } else if(emo == 'inLove'){
            blah(4)
        }
    })
}

function clear(){
        const albumInfo = document.querySelector(".albumInfo");
        while (albumInfo.firstChild) {
            albumInfo.removeChild(albumInfo.firstChild);
        }
}



