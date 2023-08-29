export const normalizeDuration = (duration) => {
  const h = Math.floor(duration / 60);
  const m = Math.floor((duration % 60));

  const hDisplay = h > 0 ? `${h}ч ` : '';
  const mDisplay = m > 0 ? `${m}м` : '0мм';

  return hDisplay + mDisplay;
};
