export const formatTime = (time) => {
  const getHours = Math.floor(time / 3600);
  const getMinutes = Math.floor((time % 3600) / 60);
  const getSeconds = time % 3600 % 60;


  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};
