class SiteFooter extends HTMLElement {
  constructor() {
    super();

    // Create shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    // Create the footer structure
    const footer = document.createElement('footer');

    footer.innerHTML = `
      <div class="content-wrapper">
        <p>
          Hecho con <span role="img" arial-title="amor">❤️</span> por
          <a
            href="https://www.linkedin.com/in/pataruco/"
            target="_blank"
            rel="noopener"
            >Pedro</a
          >
          y Yoana
        </p>
        <p>
          Actualizado el
          <time datetime="" id="timestamp"></time>
        </p>
      </div>
    `;

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      footer {
        background-color: var(--black);
        padding: var(--base-space);
        color: var(--white);
      }

      .content-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: var(--max-width);
        margin: 0 auto;
      }

      p {
        margin: 0;
      }

      a {
        color: var(--white);
      }

      @media screen and (max-width: 800px) {
        .content-wrapper {
          flex-direction: column;
          align-items: flex-start;
        }

        p:not(:last-child) {
          margin-bottom: 1rem;
        }
      }
    `;

    // Append style and footer to shadow root
    shadow.appendChild(style);
    shadow.appendChild(footer);

    // Set up timestamp after component is created
    this.setupTimestamp();
  }

  private createTimeStamp() {
    // Check for Vite environment variable
    const timestamp = import.meta.env.VITE_PUBLIC_TIMESTAMP;

    if (!timestamp) {
      return null;
    }

    const now = new Date(Number(timestamp) * 1000);
    const locale = 'es-VE';
    const printTimeStampOptions: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };

    const printTimestamp = new Intl.DateTimeFormat(
      locale,
      printTimeStampOptions,
    ).format(now);

    const dateTimestamp = now.toISOString();

    return {
      printTimestamp,
      dateTimestamp,
    };
  }

  private setupTimestamp() {
    const shadowRoot = this.shadowRoot;
    if (!shadowRoot) return;

    const timeElement = shadowRoot.querySelector(
      '#timestamp',
    ) as HTMLTimeElement;
    const timeStamp = this.createTimeStamp();

    if (timeElement && timeStamp) {
      const { printTimestamp, dateTimestamp } = timeStamp;
      timeElement.textContent = printTimestamp;
      timeElement.setAttribute('datetime', dateTimestamp);
    } else if (timeElement) {
      // Fallback if no timestamp environment variable is available
      timeElement.textContent = 'fecha no disponible';
    }
  }
}

// Register the custom element
customElements.define('site-footer', SiteFooter);

// Export for use in modules
export default SiteFooter;
