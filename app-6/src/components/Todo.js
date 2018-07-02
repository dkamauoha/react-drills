import React from 'react';

export default function Todo (props) {
    return (
        <p>
            { props.tasks.map((e,) => {
                return <h3>{e}</h3>
            }) }
        </p>
    )
}