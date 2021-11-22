import React, { useState } from 'react';
import PropTypes from 'prop-types';

SearchForm.propTypes = {
    onSubmit: PropTypes.func
};
SearchForm.defaultProps = {
    onSubmit: null
};
function SearchForm(props) {
    const {onSubmit} = props;
    const [searchTerm, setSearchTerm] = useState ('');

    function handleSearchTermChange(e){
        setSearchTerm(e.target.value);
        if (!onSubmit) return;
        const formValues = {
            searchTerm : e.target.value
        };
        onSubmit(formValues);
    }
    return (
        <form action="">
            <input type="text" value={searchTerm} 
            onChange={handleSearchTermChange}/>
            </form>
    );
}

export default SearchForm;