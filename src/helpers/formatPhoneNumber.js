export const formatPhoneNumber = (number) => {
  if (typeof number !== 'string' || number.length < 1) return '';
  const numberFormated = (number.replace(' ', '')).replace('-', '');

  return `0${numberFormated}`;
};

export const lint = '';
