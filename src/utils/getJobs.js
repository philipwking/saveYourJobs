const getJobs = (type) => {
  if (localStorage.getItem(type) === null || localStorage.getItem(type) === undefined) {
    localStorage.setItem(type, JSON.stringify([1]));
  }

  return JSON.parse(localStorage.getItem(type));
};

export default getJobs;