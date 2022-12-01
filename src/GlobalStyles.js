import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
:root {
    --color-primary: #FF577F;
    --color-primary-50: #FF427F;
    --color-primary-disabled: #59323F;

    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;


    --font-weight-1: 700;
    --font-weight-2: 600;
    --font-weight-3: 500;
    --font-weight-4: 400;
}

* {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
}
body {
    background-color: var(--grey-4);
}
`;
