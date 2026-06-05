import Script from 'next/script';
import {
  ZENCHEF_AUTO_OPEN_MS,
  ZENCHEF_LANG,
  ZENCHEF_PRIMARY_COLOR,
  ZENCHEF_RESTAURANT_ID,
  ZENCHEF_SDK_URL,
} from '@/lib/zenchef';

/** Charge le SDK Zenchef et la configuration du widget (une fois par page). */
export function ZenchefWidget() {
  return (
    <>
      <Script id="zenchef-sdk" src={ZENCHEF_SDK_URL} strategy="afterInteractive" />
      {/* Ne pas utiliser hidden : le SDK lit les data-* sur cet élément */}
      <div
        className="zc-widget-config"
        data-restaurant={ZENCHEF_RESTAURANT_ID}
        data-open={ZENCHEF_AUTO_OPEN_MS}
        data-primary-color={ZENCHEF_PRIMARY_COLOR}
        data-lang={ZENCHEF_LANG}
        style={{ display: 'none' }}
        aria-hidden="true"
      />
    </>
  );
}
