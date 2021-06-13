const template = document.createElement('template')
template.innerHTML = `<style>
:host {
  display: block;
}
logo {
  display: block;
  background-image: var(--page-header-logo-image, initial);
  background-position: center;
  background-size: cover;
  margin-right: var(--page-header-gutter, 0.5em);
  height: 2em;
  width: 2em;
}
nav ::slotted(a) {
  display: inline-block;
  padding: var(--page-header-gutter, 0.5em);
  color: inherit;
}
header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
h1 {
  margin: 0 var(--page-header-gutter, 0.5em) 0 0;
  padding: 0;
}
</style>
<header>
  <logo></logo>
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
