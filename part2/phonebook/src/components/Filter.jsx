import React from 'react';

const Filter = ({ search, handleSearchChange }) => {
    return (
        <div>
            <label htmlFor="">filter shown with</label>
            <input
                type="text"
                value={search}
                onChange={handleSearchChange}
            />
        </div>
    );
};

export default Filter;
