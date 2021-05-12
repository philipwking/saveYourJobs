import React, { useState } from 'react';
import './Popup.css';



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
    if (localStorage.getItem('jobs') === null || localStorage.getItem('jobs') === undefined) {
      localStorage.setItem('jobs', JSON.stringify([1]));
    }

    let pushArray = [...JSON.parse(localStorage.getItem('jobs'))];

    let id = pushArray.length - 1;

    pushArray.push({
      'id': id,
      'company': company,
      'url': url
    });


    localStorage.setItem('jobs', JSON.stringify(pushArray));

  };


  const superSave = () => {
    // same as saveJob() but it saves to a special short list
    if (localStorage.getItem('superjobs') === null || localStorage.getItem('superjobs') === undefined) {
      localStorage.setItem('superjobs', JSON.stringify([1]));
    }

    let pushArray = [...JSON.parse(localStorage.getItem('superjobs'))];

    let id = pushArray.length - 1;

    pushArray.push({
      'id': id,
      'company': company,
      'url': url
    });


    localStorage.setItem('superjobs', JSON.stringify(pushArray));

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
