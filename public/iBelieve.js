// import Observer from './observerjs'


class IBelieve {

  constructor() {
    this.app = this.createApp()
    this.button = this.createButton()
  }

  createApp() {

    const iframeApp = document.createElement('iframe')

    iframeApp.style.border = '0px none transparent'
    iframeApp.style.position = 'fixed'
    iframeApp.style.width = '100%'
    iframeApp.style.height = '100%'
    // iframeApp.style.display = 'none'
    iframeApp.src = `http://localhost:8080`

    document.body.appendChild(iframeApp)

    return iframeApp
  }

  createButton() {

    const iframeButton = document.createElement('iframe')

    iframeButton.style.border = '0px none transparent'
    iframeButton.src = `http://localhost:8080/button`

    const buttonContainerId = document.getElementById('iBelive-script').getAttribute('button-container-id')
    const buttonContainer = document.getElementById(buttonContainerId)
    buttonContainer.appendChild(iframeButton)

    return iframeButton
  }

  show() {

    if (!this.isLoadApp) return false
    
    this.app.style.display = 'block'
  }
  
  hide() {    
    this.app.style.display = 'none'
  }
}

const iBelieve = new IBelieve()

// const observer = new Observer()

// observer.suscribe('showApp', () => { iBelieve.showApp() })
// observer.suscribe('hideApp', () => { iBelieve.hideApp() })
