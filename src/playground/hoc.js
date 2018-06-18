// Higher Order Components

import React from 'react';
import ReactDOM from 'react-dom';

const info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const warning = (WrapperComponent) => {

    return (props) => (
        <div>
            {props.isAdmin && <p>Private Info! Don't share.</p>}
            <WrapperComponent {...props} />
        </div>
    );

};

const AdminInfo = warning(info);

ReactDOM.render(<AdminInfo isAdmin={true} info="oolala!" />,document.getElementById('app'));