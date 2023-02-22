export const formatDate = (start_time, end_time) => {
  const s_time = new Date(start_time).toLocaleTimeString();
  const e_time = new Date(end_time).toLocaleTimeString();
  const date = new Date(start_time).toDateString();

  return date + ", " + s_time + " - " + e_time;
};
