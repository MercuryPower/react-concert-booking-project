import React, {useState} from 'react';

import {Stage, Container, Text, Graphics} from "@pixi/react";

const Schema = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    const squareColor = isClicked ? 0x00FF00 : (isHovered ? 0xFF0000 : 0xAAAAAA);
    return (
        <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', flex:'0 0 70%'}}
            >
            <Stage style={{width: '100%', maxWidth:'800px'}} height={600} options={{ backgroundColor: "#464646"}}>
                <Container>
                    <Graphics
                        draw={g => {
                            g.beginFill(squareColor);
                            g.drawRoundedRect(50, 200, 150, 200, 25);
                            g.endFill();
                            g.beginFill('#AAAAAA');
                            g.drawRoundedRect(250, 150, 300, 300,25);
                            g.endFill();
                        }}

                    />

                    <Text mouseover={handleMouseOver} click={() => handleClick} scale={-1} anchor={0.5}  rotation={Math.PI / 2}  text="Сцена" x={125} y={300} />
                    <Text scale={-1} anchor={0.5}  rotation={Math.PI}  text="Танцпол" x={400} y={300} />
                </Container>
            </Stage>
        </div>
    );
};

export default Schema;