
const btn = document.getElementById('btn');
const numberInput = document.getElementById('number');

const randomNumber = Math.floor(Math.random() * 6) + 1;

btn.addEventListener('click', function (e) {
    const userval = parseInt(numberInput.value, 10);

    if(userval === randomNumber){
        // alert('Your right');
        Swal.fire({
            title: 'Awesome!!!',
            text: 'You are Right',
            icon: 'success',
            confirmButtonText: 'Cool'
            })
        return;
    }

    if(userval > randomNumber){
    //   alert('smaller');
        Swal.fire({
        title: 'Error!',
        text: 'smaller',
        icon: 'error',
        confirmButtonText: 'Cool'
        })
      return;
}

    if(userval < randomNumber){
    //  alert('larger');
        Swal.fire({
        title: 'Error!',
        text: 'larger',
        icon: 'error',
        confirmButtonText: 'Cool'
        })
     return;
}

});