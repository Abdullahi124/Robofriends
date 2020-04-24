import React from 'react'

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input
                className='bg-lightest-blue b--green pa2 ba'
                type='search'
                placeholder='search robots'
                onChange={searchChange}
            />
        </div>
    )
}
export default SearchBox