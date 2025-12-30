import React from "react";

const PersonForm = ({newName, handleNameChange, newNumber, handleNumberChange, handleSubmit}) => {
  return (
    <div>
      <form>
        <div>
          <h3>Add a new</h3>
          <p>
            name: <input value={newName} onChange={handleNameChange} />
          </p>
          <p>
            number: <input value={newNumber} onChange={handleNumberChange} />
          </p>
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            add
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
