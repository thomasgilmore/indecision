import React from 'react';
import Option from './Option';

const Options = (p) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button
                className="button button--link"
                onClick={p.handleDeleteOptions}>
                Remove All
            </button>
        </div>

        {p.optionTitle.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
        {
            p.optionTitle.map((each, index) => (
                <Option
                    key={each}
                    eachText={each}
                    count={index + 1}
                    handleDeleteOption={p.handleDeleteOption}
                />
            ))
        }
    </div>
);


export default Options;