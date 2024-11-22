import './screens/admin'
import { addObserver, appState } from './store';
import { Screens } from './types/store';

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this);
    }

    connectedCallback() {
        console.log('screen', appState.screen);
        
       
        this.render();
    }

    render() {
        if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';
        switch (appState.screen) {

            case Screens.EDIT:
                const edit = this.ownerDocument.createElement('app-edit');
                this.shadowRoot?.appendChild(edit);
                break

            case Screens.ADMIN:
                const admin = this.ownerDocument.createElement('app-admin');
                this.shadowRoot?.appendChild(admin);
                break;

            case Screens.USER:
                const modi = this.ownerDocument.createElement('app-modi');
                this.shadowRoot?.appendChild(modi);
                break;

            default:
                break;
        }
    }
}
}

customElements.define('app-container', AppContainer)