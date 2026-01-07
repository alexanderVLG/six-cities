export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'long' });
  return `${month} ${day}`;
};

export const ratingInProcent = (rating: number): string => {
  const procent = 100;
  const ratingScale = 5;
  return `${(rating / ratingScale) * procent}`;
};
