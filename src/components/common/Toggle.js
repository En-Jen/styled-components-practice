import React from 'react';
import styled from 'styled-components';

const ToggleWrapper = styled.div`
    width: 50px;
    min-width: 50px;
    height: 25px;
    border-radius: 25px;
    border: 1px solid #666;
    margin: auto;
    display: flex;
    cursor: pointer;
    background-image: linear-gradient(to bottom, ${p => p.theme.primaryColor}, ${p => p.theme.secondaryColor});
`;

const ToggleBall = styled.div`
    height: 21px;
    width: 21px;
    border: 1px solid #666;
    margin-top: 1px;
    background: white;
    border-radius: 50%;
    transition: transform .1s linear;
    transform: translateX(${p => p.isActive ? '26px' : '1px'});
`;

export function Toggle({ isActive, onToggle }) {
    return (
        <ToggleWrapper onClick={onToggle}>
            <ToggleBall isActive={isActive} />
        </ToggleWrapper>
    );  
};