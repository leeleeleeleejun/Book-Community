import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

* {
  font-family: 'Noto Sans KR', sans-serif;
}

button {
	display: block;
	cursor: pointer;
	border: none;
	background: none;
}

label {
	cursor: pointer;
}

:root {
	// Colors
	--color-main: #ff9900;
	--color-sub: #ffaa42;
	--color-sub-2: #ffcb8f;

	--color-light-black: #7d7d7d;
	--color-light-black-2: #495057;
	--color-light-black-3: #212529;

	--color-gray: #bfbfbf;
	--color-gray-2:#868E96;
	--color-gray-3:#e9ecef;
	--color-gray-4:#DEE2E6;
	--color-gray-light: #EFF1F4;
	--color-gray-light-2: #ffffff99;
  --color-gray-light-3: #ADB5BD;

	--color-sidebar: #F7F5F0;
	--color-sidebar-active : #E4DDCC;



	// Font size
  --font-large: 23px;
  --font-medium: 19px;
  --font-regular: 16px;
	--font-semi-small: 14px;
	--font-small: 13px;
  --font-micro: 12px;

	// Font weight
  --weight-bold: 900;
  --weight-semi-bold: 600;
  --weight-regular: 500;
  --weight-light: 300;
}
`;

export default GlobalStyle;
