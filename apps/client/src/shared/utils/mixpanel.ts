import mixpanel from 'mixpanel-browser';

const isProduction = import.meta.env.MODE === 'production';

export const initMixpanel = () => {
  const MIXPANEL_TOKEN = import.meta.env.VITE_MIXPANEL_TOKEN;
  mixpanel.init(MIXPANEL_TOKEN, { debug: true });
  _connectUser();
};

const _connectUser = () => {
  const userId = localStorage.getItem('userId');
  if (userId) {
    mixpanel.identify(userId);
  }
};

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  const baseProperties = {
    debug: !isProduction,
    userId: localStorage.getItem('userId') || 'anonymous',
    timeStamp: new Date().toISOString(),
  };
  mixpanel.track(eventName, {
    ...baseProperties,
    ...properties,
  });
};
