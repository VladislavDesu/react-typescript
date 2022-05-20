import React from "react";

type TitleProps = {
    title: string
}

const Title = ({title}: TitleProps) => <h1>{title}</h1>;

export default Title;