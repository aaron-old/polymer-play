import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import '@polymer/paper-checkbox/paper-checkbox';
import './shared-styles';

class MyNewView extends PolymerElement {
    static get template() {
        return html`
            <style include="shared-styles">
                :host {
                    display: block;
                    padding: 10px;
                }
            </style>
            <div class="card">
                <div class="circle">1</div>
                <h1>New View</h1>
                <paper-checkbox>READY</paper-checkbox>
                <p>New View!</p>
            </div>
        `;
    }
}

window.customElements.define('my-new-view', MyNewView);