import React from "react";

type GreetProps = {
    name?: String;
};


export const Greet = (props: GreetProps) => {
    const { name } = props;
    return <div>{name ? `Hello ${name}` : "Hello"}</div>;
};
