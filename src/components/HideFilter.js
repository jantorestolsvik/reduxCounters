import React from 'react';

export const HideFilter = ({number, changeHideNumber}) => {
    return (
        <div>
            <input type="text" value={number} onChange={(event) => {
                changeHideNumber(event.target.value);
            }}/>
        </div>
    )
};