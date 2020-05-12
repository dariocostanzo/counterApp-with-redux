export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const DECREASE_COUNTER = 'DECREASE_COUNTER';

export const increaseCounter = count => {
  return { type: INCREASE_COUNTER, count };
};
export const decreaseCounter = count => {
  return { type: DECREASE_COUNTER, count };
};
