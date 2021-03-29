const template = document.createElement('template')
template.innerHTML = `<style>
:host { display: block; }
nav ::slotted(a) {
  display: inline-block;
  padding: 0.5em;
  color: inherit;
}
header {
  display: flex;
  align-items: center;
}
h1 {
  margin: 0 0.5em 0 0;
  padding: 0;
}
</style>
<header>
  <h1><slot name="title">slot: title</slot></h1>
  <nav><slot name="nav">slot: nav</slot></nav>
</header>`

class PageHeader extends HTMLElement {
  constructor () {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(template.content.cloneNode(true))
    this.$ = this.shadowRoot.querySelector.bind(this.shadowRoot)
  }
}

customElements.define('page-header', PageHeader)
export default PageHeader
