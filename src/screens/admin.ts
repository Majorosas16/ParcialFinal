import '../components/form/form'

class AddEvent extends HTMLElement {
    constructor()  {
        super();
        this.attachShadow( {mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    async render()  {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <p>Formulario de eventos</p>
        <event-form></event-form>
        `;

        }
        
    }

}

customElements.define('app-admin', AddEvent);