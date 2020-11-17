//Global styles include the base styling

import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle
`
    *,
    *::after,
    *::before {
        box-sizing: border-box
    }

    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        height: 100vh;
        margin: 0;
        padding: 0;
        font-family: 'Pier Sans', sans-serif;
        transition: all 0.25s linear;
    }
`
