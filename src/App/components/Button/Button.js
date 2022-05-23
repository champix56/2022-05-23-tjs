import React from 'react';

// contenu du cmp
function Button(props) {
    console.warn(props);
    return <button>{props.text}</button>;
}

//exportation 
export default Button;