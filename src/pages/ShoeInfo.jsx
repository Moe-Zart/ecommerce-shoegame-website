import React from 'react';
import ShoeDescription from '../components/ShoeDescription';
import RecommendedShoes from '../components/RecommendedShoes';
import data from '../data'
const ShoeInfo = () => {
    return (
        <div>
            <ShoeDescription data={data}/>
            <RecommendedShoes />
        </div>
    );
}

export default ShoeInfo;
