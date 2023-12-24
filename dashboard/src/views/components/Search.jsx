import React from 'react';

const Search = ({ setParPage, setSearchValue, searchValue, data }) => {
    const handleSearch = (query) => {
        // Perform linear search on the data
        const results = data.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        );
        // Handle the filtered results (for example, update state with the filtered data)
        // handleFilteredResults(results);
    };

    return (
        <div className='flex justify-between items-center'>
            <select onChange={(e) => setParPage(parseInt(e.target.value))} className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]'>
                <option value="5">5</option>
                <option value="15">15</option>
                <option value="25">25</option>
            </select>
            <input
                onChange={(e) => {
                    setSearchValue(e.target.value);
                    handleSearch(e.target.value); // Call the search function when the input changes
                }}
                value={searchValue}
                className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]'
                type="text"
                placeholder='search'
            />
        </div>
    );
};

export default Search;













