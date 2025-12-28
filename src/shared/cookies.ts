declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }

  function gtag(...args: unknown[]): void;
}

const LOCAL_STORAGE_KEY = 'cookies';
const cookieWrapper = document.querySelector('.cookies');
const acceptButton = document.querySelector('.cookies button#accept');
const rejectButton = document.querySelector('.cookies button#reject');

const updateGTMConsent = (accepted: boolean) => {
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
};

acceptButton?.addEventListener('click', () => {
  acceptCookies(true);
});

rejectButton?.addEventListener('click', () => {
  acceptCookies(false);
});

const acceptCookies = (accepted: boolean) => {
  cookieWrapper?.classList.remove('show');
  if (accepted) {
    localStorage.setItem(LOCAL_STORAGE_KEY, 'accepted');
    updateGTMConsent(true);
  } else {
    localStorage.setItem(LOCAL_STORAGE_KEY, 'rejected');
    updateGTMConsent(false);
  }
};

window.addEventListener('load', () => {
  const cookies = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!cookies) {
    cookieWrapper?.classList.add('show');
  } else if (cookies === 'accepted') {
    updateGTMConsent(true);
  } else if (cookies === 'rejected') {
    updateGTMConsent(false);
  }
});
