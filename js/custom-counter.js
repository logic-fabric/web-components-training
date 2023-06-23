import { css, html, LitElement } from "https://cdn.skypack.dev/lit";

class CustomCounter extends LitElement {
  static properties = {
    count: {},
  };

  static styles = [
    css`
      button {
        min-width: 2.5rem;
        min-height: 2.5rem;
        padding: 0.5rem;
        border: none;
        border-radius: 0.5rem;

        color: white;
        font-size: 1.5rem;

        background: var(--primary-600);
      }

      .count {
        display: inline-block;

        margin: 0 1rem;

        font-size: 1.5rem;
        font-weight: 700;
      }
    `,
  ];

  constructor() {
    super();

    this.count = 0;
  }

  _decrement() {
    this.count--;
  }

  _increment() {
    this.count++;
  }

  render() {
    return html`
      <button @click="${this._decrement}">-</button>
      <span class="count">${this.count}</span>
      <button @click="${this._increment}">+</button>
    `;
  }
}

customElements.define("custom-counter", CustomCounter);
