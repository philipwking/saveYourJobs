import React, { useState } from 'react';
import './Popup.css';
import getJobs from '../utils/getJobs';
import addJob from '../utils/addJob';



const Popup = () => {
  const [url, setUrl] = useState('');
  const [company, setCompany] = useState('');


  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const openSidebar = () => {
    // not sure how
  };

  const saveJob = () => {
    addJob([...getJobs('jobs')], company, url, 'jobs');
  };


  const superSave = () => {
    // same as saveJob() but it saves to a special short list
    addJob([...getJobs('superjobs')], company, url, 'superjobs');
  };

  const clearData = () => {
    localStorage.removeItem('jobs');
    localStorage.removeItem('superjobs');
  };


  return (
    <div>
      <button onClick={() => openSidebar()}>view all</button>
      <form onSubmit={() => handleSubmit(event)}>
        <input type='text' placeholder='company name' id='companyInput' onChange={() => handleCompanyChange(event)}></input>
        <input type='text' placeholder='link' id='linkInput' onChange={() => handleUrlChange(event)}></input>
        <button onClick={() => saveJob()}>save</button>
        <button onClick={() => superSave()}>priority save</button>
        <button onClick={() => clearData()}>clear data</button>
      </form>

    </div>
  );
};


export default Popup;
