export enum Attribute {
    "idevent" = "idevent",
    "imageevent" = "imageevent",
    "titleevent" = "titleevent",
    "datehour" = "datehour",
    "address" = "address",
    "peoplenumber" = "peoplenumber"
}

class Product extends HTMLElement {
    idevent?: number;
    imageevent?: string;
    titleevent?: string;
    datehour?: string;
    address?: string;
    peoplenumber?: number; 
 

    static get observedAttributes() {
        return Object.values(Attribute);
    }

    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
        switch (propName) {
            case Attribute.idevent:
                this.idevent = newValue ? Number(newValue) : undefined;
                break;

                case Attribute.peoplenumber:
                    this.peoplenumber = newValue ? Number(newValue) : undefined;
                    break;

            default:
                this[propName] = newValue;
                break;
        }
        
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    // incrementCount() {
	// 	this.peoplenumber++;
	// 	this.render();
	// }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <div id="container">
                    <img src="${this.imageevent}" >
                    <p> Title: ${this.titleevent}</p>
                    <p> Date & Hour: ${this.datehour}</p>
                    <p> Address: ${this.address}</p>
                    <button id="btn">Registrarse: ${this.peoplenumber}</button>
                </div>
            `;

            // const btn = this.shadowRoot.querySelector("#btn");
            // btn?.addEventListener('click', () => this.incrementCount());
        }
        
    }
}

customElements.define("event-card", Product);
export default Product;