import React, {FC} from 'react';

export enum CardVariant {
    outlined = "outlined",
    primary = "primary"
}

interface CardProps {
    width: string,
    height: string,
    variant: CardVariant,
    children?: React.ReactNode,
    onClick: () => void
}

interface CardInlineStyles {
    width: string,
    height: string,
    border: string,
    backgroundColor: string,
    color: string,
}

const Card: FC<CardProps> = (
    {
        width,
        height,
        variant,
        onClick,
        children
    }
) => {
    const cardStyles: CardInlineStyles = {
        width,
        height,
        border: variant === CardVariant.outlined ? "2px solid teal" : "none",
        backgroundColor: variant === CardVariant.primary ? "teal" : "transparent",
        color: variant === CardVariant.primary ? "white" : "black"
    };

    return (
        <div style={cardStyles} onClick={onClick}>
            {children}

            <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </span>
        </div>
    );
};

export default Card;