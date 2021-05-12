import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  if (localStorage.getItem('jobs') === null || localStorage.getItem('jobs') === undefined) {
    localStorage.setItem('jobs', JSON.stringify([1]));
  }
  if (localStorage.getItem('superjobs') === null || localStorage.getItem('superjobs') === undefined) {
    localStorage.setItem('superjobs', JSON.stringify([1]));
  }
  
  let jobs = JSON.parse(localStorage.getItem('jobs'));
  let superjobs = JSON.parse(localStorage.getItem('superjobs'));

  // the arrays have '1' as their first item because in the popup we have to assign something so its not null... this just removes that so its a uniform array
  let jobsArray = jobs.splice(1, jobs.length + 1);
  let superJobsArray = superjobs.splice(1, jobs.length + 1);

  // how to get it to update real time? global state?
  const listedJobs = jobsArray.map((item) => <div key={item.id}>{item.company}</div>);
  const superListedJobs = superJobsArray.map((item) => <div key={item.id}>{item.company}</div>);

  return (
    <div>
      <div>
        List of jobs you've applied to:
      </div>
      <div>
        {listedJobs}
      </div>
      <div>
        {superListedJobs}
      </div>
      <div>
        Some graphs representing that data:
      </div>
      <button>
        Export data to xml
      </button>
    </div>
  );
};

export default Sidebar;
