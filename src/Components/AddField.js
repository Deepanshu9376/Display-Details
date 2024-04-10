import React, { useState } from 'react';


const AddDataComponent = () => {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAddClick = () => {
    if (inputText.trim() !== '') {
      setItems([...items, inputText]);
      setInputText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
        className='col-form-label'
      />
     <button onClick={handleAddClick} className='mx-4 btn btn-primary'>Add</button>
        <div className='my-3'><h2>Added data</h2></div>
      <div className="item-list">
        {items.map((item, index) => (
          <div
            key={index}
            style={{ backgroundColor: (index + 1) % 5 === 0 ? 'blue' : 'transparent' }}
            className="itemn"
          >
          {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddDataComponent;
