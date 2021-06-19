
const btn = document.getElementById('btn');
const numberInput = document.getElementById('number');

const randomNumber = Math.floor(Math.random() * 6) + 1;

btn.addEventListener('click', function (e) {
    const userval = parseInt(numberInput.value, 10);

    if(userval === randomNumber){
        alert('Your right');
        return;
    }

    if(userval > randomNumber){
      alert('smaller');
      return;
}

    if(userval < randomNumber){
     alert('larger');
     return;
}

});