import React from 'react';

import {Stage, Container, Text, Graphics} from "@pixi/react";

const Schema = () => {
    return (
        <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', flex:'0 0 70%'}}
            >
            <Stage style={{width: '100%', maxWidth:'80vh', height:'100%', maxHeight:'60vh'}} options={{ backgroundColor: "#464646"}}>
                <Container>
                    <Graphics
                        draw={g => {
                            g.drawRoundedRect(50, 200, 150, 200, 25);
                            g.endFill();
                            g.beginFill('#AAAAAA');
                            g.drawRoundedRect(250, 150, 300, 300,25);
                            g.endFill();
                        }}

                    />

                    <Text  key="scene" scale={-1} anchor={0.5}  rotation={Math.PI / 2}  text="Сцена" x={125} y={300} />
                    <Text  key="dancefloor" scale={-1} anchor={0.5}  rotation={Math.PI}  text="Танцпол" x={400} y={300} />
                </Container>
            </Stage>
        </div>
    );
};

export default Schema;