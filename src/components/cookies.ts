declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }

  function gtag(...args: unknown[]): void;
}

class CookieConsent extends HTMLElement {
  private readonly LOCAL_STORAGE_KEY = 'cookies';

  constructor() {
    super();

    // Create shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    // Create the cookie consent structure
    const section = document.createElement('section');
    section.className = 'cookies';

    section.innerHTML = `
      <div class="content-wrapper">
        <h2>Uso de galletas en pedromarthan.com</h2>
        <p>
          Utilizamos cookies esenciales para mejorar tu experiencia de
          navegación, analizar el tráfico y comprender el origen de nuestra
          audiencia.
        </p>
        <menu>
          <button type="button" id="reject">Rechazar</button>
          <button type="button" id="accept">Aceptar</button>
        </menu>
      </div>
    `;

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      * {
        box-sizing: border-box;
      }

      p {
        max-width: 42rem;
      }

      .cookies {
        display: none;
        padding: var(--base-space);
        background-color: var(--white);
        border-top: 1px solid var(--black);
      }

      .cookies.show {
        display: block;
      }

      .content-wrapper {
        max-width: var(--max-width);
        margin: 0 auto;
      }

      menu {
        margin: 0;
        padding: 0;
        display: flex;
        column-gap: var(--base-space);
        margin-top: 1rem;
      }

      button {
        appearance: none;
        padding: 0.25rem 0.5rem;
        cursor: pointer;
        border-radius: 4px;
        font-size: 1rem;
        transition: background-color 0.2s ease, color 0.2s ease;
      }

      button:first-of-type {
        background-color: var(--white);
        border: 1px solid var(--black);
        color: var(--black);
      }

      button:first-of-type:hover {
        background-color: color(from var(--black) srgb r g b / 0.1);
      }

      button:first-of-type:active {
        background-color: color(from var(--black) srgb r g b / 0.25);
      }

      button:last-of-type {
        background-color: var(--black);
        border: 1px solid var(--black);
        color: var(--white);
      }

      button:last-of-type:hover {
        background-color: color(from var(--black) srgb r g b / 0.75);
      }

      button:last-of-type:active {
        background-color: color(from var(--black) srgb r g b / 0.8);
      }

      h2 {
        margin-top: 0;
        margin-bottom: 0.5rem;
        color: var(--black);
        font-size: 1.5rem;
      }

      p {
        margin: 0;
        color: var(--black);
        line-height: 1.5;
      }

      @media screen and (max-width: 600px) {
        menu {
          flex-direction: column;
          row-gap: 0.5rem;
        }

        button {
          width: 100%;
          padding: 0.75rem 1rem;
        }
      }
    `;

    // Append style and section to shadow root
    shadow.appendChild(style);
    shadow.appendChild(section);

    // Set up event listeners and initialize
    this.setupEventListeners();
    this.initializeCookieConsent();
  }

  private updateGTMConsent(accepted: boolean): void {
    if (typeof (window as Window)?.gtag !== 'undefined') {
      if (accepted) {
        (window as Window).gtag('consent', 'update', {
          analytics_storage: 'granted',
          ad_storage: 'granted',
          functionality_storage: 'granted',
          personalization_storage: 'granted',
        });
        console.log('GTM consent granted - tracking enabled');
      } else {
        (window as Window).gtag('consent', 'update', {
          analytics_storage: 'denied',
          ad_storage: 'denied',
          functionality_storage: 'denied',
          personalization_storage: 'denied',
        });
        console.log('GTM consent denied - tracking disabled');
      }
    }
  }

  private acceptCookies(accepted: boolean): void {
    const shadowRoot = this.shadowRoot;
    if (!shadowRoot) return;

    const cookieWrapper = shadowRoot.querySelector('.cookies') as HTMLElement;
    cookieWrapper?.classList.remove('show');

    if (accepted) {
      localStorage.setItem(this.LOCAL_STORAGE_KEY, 'accepted');
      this.updateGTMConsent(true);
    } else {
      localStorage.setItem(this.LOCAL_STORAGE_KEY, 'rejected');
      this.updateGTMConsent(false);
    }

    // Dispatch custom events for external listeners
    this.dispatchEvent(
      new CustomEvent('cookie-consent-changed', {
        detail: { accepted },
        bubbles: true,
      }),
    );
  }

  private setupEventListeners(): void {
    const shadowRoot = this.shadowRoot;
    if (!shadowRoot) return;

    const acceptButton = shadowRoot.querySelector(
      '#accept',
    ) as HTMLButtonElement;
    const rejectButton = shadowRoot.querySelector(
      '#reject',
    ) as HTMLButtonElement;

    acceptButton?.addEventListener('click', () => {
      this.acceptCookies(true);
    });

    rejectButton?.addEventListener('click', () => {
      this.acceptCookies(false);
    });
  }

  private initializeCookieConsent(): void {
    const cookies = localStorage.getItem(this.LOCAL_STORAGE_KEY);
    const shadowRoot = this.shadowRoot;
    if (!shadowRoot) return;

    const cookieWrapper = shadowRoot.querySelector('.cookies') as HTMLElement;

    if (!cookies) {
      // No consent given yet, show the banner
      cookieWrapper?.classList.add('show');
    } else if (cookies === 'accepted') {
      // Consent was previously accepted
      this.updateGTMConsent(true);
    } else if (cookies === 'rejected') {
      // Consent was previously rejected
      this.updateGTMConsent(false);
    }
  }

  // Public methods for external control
  public showCookieBanner(): void {
    const shadowRoot = this.shadowRoot;
    if (!shadowRoot) return;

    const cookieWrapper = shadowRoot.querySelector('.cookies') as HTMLElement;
    cookieWrapper?.classList.add('show');
  }

  public hideCookieBanner(): void {
    const shadowRoot = this.shadowRoot;
    if (!shadowRoot) return;

    const cookieWrapper = shadowRoot.querySelector('.cookies') as HTMLElement;
    cookieWrapper?.classList.remove('show');
  }

  public resetConsent(): void {
    localStorage.removeItem(this.LOCAL_STORAGE_KEY);
    this.showCookieBanner();
  }

  public getConsentStatus(): string | null {
    return localStorage.getItem(this.LOCAL_STORAGE_KEY);
  }
}

// Register the custom element
customElements.define('cookie-consent', CookieConsent);

// Export for use in modules
export default CookieConsent;
