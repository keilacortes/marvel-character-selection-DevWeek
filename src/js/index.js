const character = document.querySelectorAll('.character')

character.forEach((character) => {
  character.addEventListener('mouseenter', () => {
    const idSelected = character.attributes.id.value

    if (idSelected === 'ultron') return
    
    const characterSelected = document.querySelector('.selected')
    characterSelected.classList.remove('selected')

    character.classList.add('selected')

    const imagePlayer1 = document.getElementById('character-player-1')
    imagePlayer1.src = `./src/images/${idSelected}.png`

    const nameSelected = character.getAttribute('data-name')
    const namePlayer1 = document.getElementById('name-player-1')
    namePlayer1.innerHTML = nameSelected
  })
})