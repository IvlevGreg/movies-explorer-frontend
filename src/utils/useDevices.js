import { useMediaQuery } from './useMediaQuery';

export const useIsDesktop = () => useMediaQuery('(min-width: 1024px)');
export const useIsTablet = () => useMediaQuery('(min-width: 768px)');
export const useIsMobile = () => !useIsTablet();

export const useGetCurrentDevice = () => {
  const isDesktop = useIsDesktop();
  const isTablet = useIsTablet();

  if (isDesktop) {
    return 'desktop';
  } if (isTablet) {
    return 'tablet';
  }
  return 'mobile';
};
