import React from 'react';

const Option = (p) => (
        <div className="option">
            <p className="option__text">{p.count}. {p.eachText}</p>
            
            <button className="button button--link"
                onClick={(e) => {
                    p.handleDeleteOption(p.eachText)
                }}
            >
                remove
            </button>
        </div>
);


export default Option;