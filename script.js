const SliderContainerEl = document.querySelector('.track-wrapper');

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

    const unList = document.createElement('ul');
    unList.classList.add('track');
    SliderContainerEl.appendChild(unList);

        for(let i = 0; i<8; i++){
            const listItem = document.createElement('li');
            listItem.classList.add("track__item");
            const imgEl = document.createElement('img');
            imgEl.classList.add("gallery__img");
            imgEl.src = message[i];
            listItem.appendChild(imgEl);
            unList.appendChild(listItem);
        }
}


getDogImages('https://dog.ceo/api/breed/hound/images');