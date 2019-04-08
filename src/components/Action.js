import React from 'react';

// stateless functional component
const Action = (p) => (
        <div>
            <button className="big-button"
                onClick={p.handlePick}
                disabled={!p.hasOptions}
            >
                What Should I Do?
            </button>
        </div>
);


export default Action;