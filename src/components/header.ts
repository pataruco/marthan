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
          <ul class="nav-list">
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
                  <li>
                    <a href="/cronicas-y-relatos/armitana-ahora-habita-en-la-ciudad.html">Armitana ahora habita en la ciudad</a>
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
        font-size: 1.25rem;
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

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      details[open] summary span {
        position: relative;

        &::before {
          width: 100%;
          height: var(--spacing-1);
          background: var(--white);
          display: block;
          content: '';
          position: absolute;
          bottom: calc(-0.75rem + 1px);
        }

        &::after {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath fill='white' fill-rule='evenodd' d='M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z' clip-rule='evenodd'/%3E%3C/svg%3E%0A");
        }
      }

      details[open] ul {
        position: absolute;
      }

      summary {
        align-items: center;
        color: var(--white);
        cursor: pointer;
        display: flex;
        column-gap: 0.5rem;
        justify-content: center;
        list-style: none;
        padding: 0 0.75rem;


        &::-webkit-details-marker {
          display: none;
        }

        & span {
          display: flex;
          column-gap: 0.5rem;
          align-items: center;

          &::after {
            aspect-ratio: 1 / 1;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath fill='white' fill-rule='evenodd' d='M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z' clip-rule='evenodd'/%3E%3C/svg%3E%0A");
            background-position: center;
            background-size: contain;
            content: '';
            display: block;
            width: 1.25rem;
          }
        }
      }

      .nav-list {
        display: flex;
        column-gap: var(--base-space);

        & > li {
          padding-left:0;
          padding-right:0;

          & > a {
            padding-right: 0.75rem;
            padding-left: 0.75rem;
          }
        }
      }

      nav ul ul {
        background-color: var(--black);
        border-radius: 0.5rem;
        box-shadow:
          0px 12px 16px -4px rgba(16, 24, 40, 0.08),
          0px 4px 6px -2px rgba(16, 24, 40, 0.03);
        list-style: none;
        margin: 0;
        margin-top: 1px;
        min-width: 12rem;
        padding: 0.25rem 0;
        position: absolute;
        width: 100%;
        border: 1px solid var(--black);
      }


       li {
        padding: 0.5rem 0.75rem;
        &:hover,
        &:focus {
          background-color: var(--background-accent-navy);
        }

        &:active {
          background-color: var(--navy-100);
        }
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
