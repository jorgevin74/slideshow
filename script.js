const SliderContainerEl = document.querySelector('.gallery-cell');

async function getDogImages(url){
    try{
        const response = await fetch(url);
        const data = await response.json();
        displayDogImages(data.message);
        console.log(data);
    }catch(error){
        console.error(error);
    }
}

function displayDogImages(message){
        let i = 0;
        const imgEl = document.createElement('img');
        imgEl.src = message[i];
        SliderContainerEl.appendChild(imgEl);

        const nextButtonEl = document.createElement('button');
        nextButtonEl.innerHTML = "---->";
        nextButtonEl.addEventListener('click', function(){
            imgEl.src = message[i];
            i++;
        })
        SliderContainerEl.appendChild(nextButtonEl);

        const previousButtonEl = document.createElement('button');
        previousButtonEl.innerHTML = "<----";
        previousButtonEl.addEventListener('click', function(){
            imgEl.src = message[i];
            i--;
        })
        SliderContainerEl.appendChild(previousButtonEl)
}

getDogImages('https://dog.ceo/api/breed/hound/images');