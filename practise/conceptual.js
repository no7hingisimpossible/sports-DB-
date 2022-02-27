const loadApi = () => {
    const input = document.getElementById('input-field');
    const inputFieldValue = input.value;
    const para = document.getElementById('para')
    if (isNaN(inputFieldValue) || inputFieldValue == '') {

        para.innerText = 'Input numbers BITCH'
        input.value = '';
    }
    else if (inputFieldValue <= 0) {
        para.innerText = 'Only positive BITCH'
    }
    else {
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputFieldValue}`)
            .then(res => res.json())
            .then(data => displayCards(data.cards))
        input.value = '';
    }

}

const displayCards = cards => {
    console.log(cards)
    for (const card of cards) {
        console.log(card)
    }
}