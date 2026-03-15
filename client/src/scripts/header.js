const header = document.querySelector('header')

const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

const headerRight = document.createElement('div')
headerRight.className = "header-right"

const headerlogo = document.createElement('img')
headerlogo.src = '../logo.png'

const headerTitle = document.createElement('h1')
headerTitle.textContent = "GearForPilots"

headerLeft.appendChild(headerlogo)
headerLeft.appendChild(headerTitle)


const headerButton = document.createElement('button')
headerButton.textContent = 'Home'
headerButton.addEventListener('click', function handleClick(event) {
  window.location = '/'
})

headerRight.appendChild(headerButton)

headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)

header.appendChild(headerContainer)