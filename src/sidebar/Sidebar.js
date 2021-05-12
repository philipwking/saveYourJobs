import React from 'react';
import './Sidebar.css';
import getJobs from '../utils/getJobs';

const Sidebar = () => {
  const jobs = getJobs('jobs');
  const superjobs = getJobs('superjobs');

  // the arrays have '1' as their first item because in the popup we have to assign something so its not null... this just removes that so its a uniform array
  const jobsArray = jobs.splice(1, jobs.length + 1);
  const superJobsArray = superjobs.splice(1, jobs.length + 1);

  // how to get it to update real time? global state?
  const listedJobs = jobsArray.map((item) => <tr><th>{item.company}</th><th>{item.time}</th></tr>);
  const superListedJobs = superJobsArray.map((item) => <tr><th>{item.company}</th><th>{item.time}</th></tr>);

  const bigArray = jobsArray.concat(superJobsArray);

  function convertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';

    for (var i = 0; i < array.length; i++) {
      var line = '';
      for (var index in array[i]) {
        if (line != '') line += ','

        line += array[i][index];
      }

      str += line + '\r\n';
    }

    return str;
  }


  const copyData = () => {
    navigator.clipboard.writeText(convertToCSV(bigArray)); // csv
    document.execCommand('copy');
  };

  const clearData = () => {
    localStorage.removeItem('jobs');
    localStorage.removeItem('superjobs');
  };


  return (
    <div>
      <div>
        Jobs you've applied to:
      </div>
      <table id='theTable'>
        <thead>
          <tr>
            <th>Company</th>
            <th>Date/time</th>
          </tr>
        </thead>
        <tbody>
          {listedJobs}
          {superListedJobs}
        </tbody>
      </table>
      <button onClick={() => copyData()}>copy data to csv</button>
      <button onClick={() => clearData()}>clear data</button>
    </div>
  );
};

export default Sidebar;
