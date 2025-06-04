import React from 'react';
import { Link } from 'react-router';

const MyQueries = () => {
    return (
        <div>
             <div>
                <h2> User Questions </h2>
                <Link to={'/addqueries'}> Add Queries </Link>
                <button>  </button>
             </div>
        </div>
    );
};

export default MyQueries;