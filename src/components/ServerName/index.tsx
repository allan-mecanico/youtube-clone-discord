/*import React from 'react'; 

export default function () {
    return (
        <div>Oi Mundo!</div>
    )
}
/** Js, Abaixo definição em typescript */

import React from 'react'; 

import { Container, Title, ExpandIcon } from './styles';

const ServerName: React.FC = () => {
    return (
    <Container>
        <Title>Servidor do Fred</Title>
        <ExpandIcon />
    </Container>
    );
};
export default ServerName;