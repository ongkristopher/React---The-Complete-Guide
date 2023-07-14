import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import './Card.css';

const Card = (props: { 
    className: string; 
    children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined;
}) => {
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Card;