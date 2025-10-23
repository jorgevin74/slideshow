const SliderContainerEl = document.querySelector('.gallery');

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
        for(let i = 0; i<6; i++){
            const imgEl = document.createElement('img');
            imgEl.src = message[i];
            SliderContainerEl.appendChild(imgEl); 
        }
}

getDogImages('https://dog.ceo/api/breed/hound/images');