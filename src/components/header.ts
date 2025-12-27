class SiteHeader extends HTMLElement {
  constructor() {
    super();

    // Create shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    // Create the header structure
    const header = document.createElement('header');

    header.innerHTML = `
      <div class="content-wrapper">
        <h1><a href="/">Pedro Marthan</a></h1>
        <nav>
          <ul>
            <li>
              <details>
                <summary>
                  <span> Crónicas y relatos </span>
                </summary>
                <ul>
                  <li>
                    <a href="/cronicas-y-relatos/pasado-y-presente.html">Pasado y presente</a>
                  </li>
                  <li>
                    <a href="/cronicas-y-relatos/el-ensayo-frustrado.html">El ensayo frustrado</a>
                  </li>
                </ul>
              </details>
            </li>
            <li><a href="/galeria">Galería</a></li>
          </ul>
        </nav>
      </div>
    `;

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      header {
        background-color: var(--black);
        padding: var(--base-space);
      }

      .content-wrapper {
        max-width: var(--max-width);
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
      }

      h1 {
        font-size: 2em;
        margin: 0;
      }

      h1 a {
        text-decoration: none;
      }

      a {
        color: var(--white);
      }

      details {
        color: var(--white);
        appearance: none;
        position: relative;
        cursor: pointer;
      }

      details[open] summary span {
        position: relative;
      }

      details[open] ul {
        position: absolute;
      }

      nav > ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        column-gap: var(--base-space);
      }

      nav ul ul {
        margin: 0;
        list-style: none;
        padding: 1.1rem;
        width: max-content;
        background-color: var(--black);
        box-shadow: 0 12px 16px -4px #10182814,0 4px 6px -2px #10182808;
      }
    `;

    // Append style and header to shadow root
    shadow.appendChild(style);
    shadow.appendChild(header);
  }
}

// Register the custom element
customElements.define('site-header', SiteHeader);

// Export for use in modules
export default SiteHeader;
