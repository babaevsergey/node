console.log('Client side javascript file is loaded!');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input')
const firstMessage = document.querySelector('#firstMessage')
const secondMessage = document.querySelector('#secondsMessage')

firstMessage.textContent = ''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value;
    firstMessage.textContent = 'Loading...'
    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                firstMessage.textContent = data.error
            } else {
                firstMessage.textContent = data.location
                secondMessage.textContent = data.forecast
            }
        })
    })
})
