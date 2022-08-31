class Language {
  public key: string
  private document: Document | any

  constructor(key: string, filePath: string) {
    this.key = key

    this.setDocument(filePath)
  }

  private setDocument(filePath: string) {
    const request = new XMLHttpRequest()
    
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        this.document = request.responseXML
      }
    }

    request.open('GET', filePath, false)
    request.send()
  }

  public getStringById(id: string): string {
    if(this.document.getElementById(id)) {
      return this.document.getElementById(id).getAttribute('text')
    } else {
      return ''
    }
  }
}

export default Language