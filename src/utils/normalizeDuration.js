const TIME_INSTANT = 60;
const NULL_VALUE = 0;

export const normalizeDuration = (duration) => {
  const h = Math.floor(duration / TIME_INSTANT);
  const m = Math.floor((duration % TIME_INSTANT));

  const hDisplay = h > NULL_VALUE ? `${h}ч ` : '';
  const mDisplay = m > NULL_VALUE ? `${m}м` : '0мм';

  return hDisplay + mDisplay;
};
