import React from 'react';

const Expert = ({ expert }) => {
    const { name, img, expertize } = expert;
    return (
        <div className="col-lg-4 col-sm-6 col-12 gy-4">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5 className="text-danger">{expertize}</h5>
            <button>Hire {name}</button>
        </div>
    );
};

export default Expert;