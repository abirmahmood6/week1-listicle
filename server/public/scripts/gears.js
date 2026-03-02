const renderGears = async () => {
    
    const response = await fetch('/gears')
    console.log('Status:', response.status, 'Text:', await response.text());
    const data = await response.json()


    const mainContent = document.getElementById('main-content')

    if (data) {

        data.map(gear => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url(${gear.image})`

            const name = document.createElement('h3')
            name.textContent = gear.name
            bottomContainer.appendChild(name)

            const pricePoint = document.createElement('p')
            pricePoint.textContent = 'Price: ' + gear.pricePoint
            bottomContainer.appendChild(pricePoint)

            const audience = document.createElement('p')
            audience.textContent = 'Great For: ' + gear.audience
            bottomContainer.appendChild(audience)

            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/gears/${gear.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer) 
            mainContent.appendChild(card)
        })
    }
    else {
        const message = document.createElement('h2')
        console.log("error")
        message.textContent = 'No Gears Available 😞'
        mainContent.appendChild(message)
    }
}

renderGears()