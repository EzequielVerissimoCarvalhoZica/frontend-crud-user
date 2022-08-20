export const formatDate = (date) => {
  if (typeof date !== 'string') return '';
  const MAX_INDEX = 10;
  const result = date.substring(0, MAX_INDEX).split('-');
  const dateFormated = `${result[2]}-${result[1]}-${result[0]}`;

  return dateFormated;
};

export const lint = '';
