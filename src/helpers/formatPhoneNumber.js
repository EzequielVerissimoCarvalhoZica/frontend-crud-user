export const formatPhoneNumber = (number) => {
  if (typeof number !== 'string') return '';
  const numberFormated = (number.replace(' ', '')).replace('-', '');

  return `0${numberFormated}`;
};

export const lint = '';
