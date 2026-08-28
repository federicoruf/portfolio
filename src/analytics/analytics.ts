export type PortfolioLinkType = 'linkedin' | 'github' | 'email' | 'gpx-mountain-guide';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackPortfolioLinkClick(linkType: PortfolioLinkType) {
  window.gtag?.('event', 'portfolio_link_click', {
    link_type: linkType,
  });
}