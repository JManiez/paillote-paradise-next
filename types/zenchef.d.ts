interface ZenchefWidgetApi {
  open: () => void;
  close: () => void;
  toggle: () => void;
  isOpened: () => boolean;
  openOffer: (offerId: string | number) => void;
  openWith: (params: { roomId?: string; offerId?: string; pax?: number; day?: string }) => void;
  on: (event: string, callback: () => void) => () => void;
  off: (event: string, callback: () => void) => void;
}

declare global {
  interface Window {
    ZenchefWidget?: ZenchefWidgetApi;
  }
}

export {};
