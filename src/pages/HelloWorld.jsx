import React, { useState } from 'react';

const HelloWorld = () => {
    const [value, setValue] = useState('');
    const [visible, setVisible] = useState(false);

    const toggle = () => {
        if (value === 'hello') {
            return setVisible((prev) => !prev);
        }
    };

    const onChange = (e) => setValue(e.target.value);

    return (
        <div>
            <input onChange={onChange} id="search" type="text" />
            <button onClick={toggle} id="toggle">
                hello wrld
            </button>
            {visible && <h1 id="hello">hello wrld</h1>}
        </div>
    );
};

export default HelloWorld;
