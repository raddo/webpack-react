import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";
import Home from './components/Home';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Home />,
    </ThemeProvider>,
    document.getElementById('app')
);

