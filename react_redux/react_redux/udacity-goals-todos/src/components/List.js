import React from 'react'

export default function List({ items, remove, toggle }) {
    const elements = items.map((item) => (
        <li key={item.id}>
            <span
                onClick={() => toggle && toggle(item.id)}
                style={{
                    textDecoration: item.complete ? "line-through" : "none",
                }}
            >
                {item.name}
            </span>
            <button onClick={() => remove(item)}>x</button>
        </li>
    ));
    return <ul>{elements}</ul>;
}