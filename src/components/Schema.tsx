import React from 'react';
import {Container, Stage} from "@pixi/react";

interface SchemaProps {
    width:number,
    height:number,
}
const Schema = ({width, height}:SchemaProps) => {
    return (
        <Stage>
            <Container>
                {/*{seats.map((seat) =>*/}
                {/*    <Seat key={seat} {...seat} />*/}
                {/*)}*/}
            </Container>
        </Stage>
    );
};

export default Schema;