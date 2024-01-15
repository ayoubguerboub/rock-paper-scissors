import { createGlobalStyle } from 'styled-components';

import agentorange from './agentorange.TTF';

export default createGlobalStyle`
    @font-face {
        font-family: agentorange;
        src: url(${agentorange}) format('truetype'),
        font-style: normal;
    }
`;
