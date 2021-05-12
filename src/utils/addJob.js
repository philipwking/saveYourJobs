const addJob = (array, company, url, type) => {
  let id = array.length - 1;
  array.push({
    'id': id,
    'company': company,
    'url': url,
    'time': new Date(),
    'type': type
  });
  localStorage.setItem(type, JSON.stringify(array));
};

export default addJob;