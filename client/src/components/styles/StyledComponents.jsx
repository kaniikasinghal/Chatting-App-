import {styled} from '@mui/material';
import {Link as LinkComponent} from "react-router-dom";
import React from 'react';

export const VisuallyHiddenInput = styled("input")({
    border: 0,
    clip: "rect( 0 0 0 0 )",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whilteSpace: "nowrap",
    width: 1        
});

export const Link = styled(LinkComponent)`
    text-decoration: none;
    color:  black;
    padding: 1 rem;
    &:hover {
        background-color: #f0f0f0;
    }
`;


