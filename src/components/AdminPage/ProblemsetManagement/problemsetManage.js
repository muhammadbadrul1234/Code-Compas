import React from "react";
import Dashboard from "./Dashboard";
import CNavbar from "../Home Page/ccomponents/CNavbar";
import Sidenav from "../Home Page/ccomponents/Sidenav";
import Box from "@mui/material/Box";
import styled from "styled-components";

const ProblemSetManage = () => {
  return (
    <>
      <div style={{ marginLeft: "70px" }}>
        <CNavbar />
        <Box height={170} />
        <Box sx={{ display: "flex" }}></Box>
        <Sidenav />
        <DashboardSection>
          <Dashboard />
        </DashboardSection>
      </div>
    </>
  );
};

const DashboardSection = styled.section`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');


*{
  font-family: 'Poppins', sans-serif;
}

main {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}


hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

pre {

  font-size: 1em;
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {

  font-size: 1em;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}
img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {

  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  
}

button,
input {
  
  overflow: visible;
}


button,
select {
  
  text-transform: none;
}


button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type='button']:-moz-focusring,
[type='reset']:-moz-focusring,
[type='submit']:-moz-focusring {
  outline: 1px dotted ButtonText;
}


fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box;
  
  color: inherit;
  
  display: table;
  
  max-width: 100%;
  
  padding: 0;

  white-space: normal;
  
}

progress {
  vertical-align: baseline;
}


textarea {
  overflow: auto;
}

[type='checkbox'],
[type='radio'] {
  box-sizing: border-box;
  
  padding: 0;
  
}

[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
  height: auto;
}

[type='search'] {
  -webkit-appearance: textfield;
  
  outline-offset: -2px;
  
}

[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  
  font: inherit;
  
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

figure {
  margin: 0;
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font: normal normal normal 1rem/1.6 -apple-system, BlinkMacSystemFont,
    Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
}

body {
  color: #404040;
  background: white;
  font-size: 1rem;
}

p,
ol,
ul,
dl,
table {
  margin: 0 0 1.5rem 0;
}

ul li ul {
  margin-bottom: 0;
}

ol li ol {
  margin-bottom: 0;
}

h1,
h2,
h3,
h4,
h5 {
  margin: 1.5rem 0;
  font-weight: 600;

  line-height: 1.2;
  color: #404040;
}

h1:not(:first-child),
h2:not(:first-child),
h3:not(:first-child),
h4:not(:first-child),
h5:not(:first-child) {
  margin: 1.5rem 0;
}

h1:not(:first-child),
h2:not(:first-child),
h3:not(:first-child) {
  margin-top: 2rem;
}

h1 {
  font-size: 1.75rem;
}

h2 {
  font-size: 1.5rem;
}

h3 {
  font-size: 1.25rem;
}

h4 {
  font-size: 1.1rem;
}

h5 {
  font-size: 1rem;
}

@media (min-width: 600px) {
  h1:not(:first-child),
  h2:not(:first-child),
  h3:not(:first-child) {
    margin-top: 2.5rem;
  }
  h1 {
    font-size: 2.25rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1.5rem;
  }
  h5 {
    font-size: 1.25rem;
  }
}

a {
  color: #0366ee;
  text-decoration: none;
}

a:hover,
a:active,
a:focus {
  color: #0246a2;
  text-decoration: underline;
}

mark {
  background: #ffeea8;
  padding: 0 0.2rem;
}

blockquote {
  margin: 0 0 1.5rem 0;
  border-left: 16px solid #f0f0f0;
  padding: 0 1.5rem;
  font-size: 1.5rem;
}

blockquote cite {
  display: block;
  margin-top: 1.5rem;
  font-size: 1rem;
  text-align: right;
}

pre {
  border: 0;
  border-radius: 4px;
  background: transparent;
  padding: 1rem;
  tab-size: 2;
  color: #404040;

  font-size: 14px;
  margin: 0 0 1.5rem 0;
}

pre code {

  line-height: 1.2;
}

kbd {
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2), 0 0 0 2px #fff inset;
  color: #333;
  display: inline-block;

  font-size: 13px;
  line-height: 1.4;
  margin: 0 0.1em;
  padding: 0.1em 0.6em;
  text-shadow: 0 1px 0 #fff;
}

:not(pre) > code {
  color: #404040;
  background: transparent;

  font-size: 14px;
  padding: 0 0.2rem;
  border: 1px solid #dedede;
  border-radius: 4px;
}

hr {
  height: 0;
  border: 0;
  border-top: 1px solid #dedede;
}

dt {
  font-weight: 600;
}

dd {
  margin-bottom: 0.5rem;
}

.full-container {
  max-width: 100%;
  padding: 0 1rem;
}

.container,
.small-container,
.medium-container {
  max-width: 1200px;
  padding: 0 1rem;
  margin-left: auto;
  margin-right: auto;
}

.small-container {
  max-width: 800px;
}

.medium-container {
  max-width: 1000px;
}

.content-section {
  padding: 30px 0;
}

@media (min-width: 600px) {
  .content-section {
    padding: 60px 0;
  }
}


.flex-small,
.flex-large {
  padding-left: 1rem;
  padding-right: 1rem;
}

.flex-row {
  margin-left: -1rem;
  margin-right: -1rem;
}

.flex-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.flex-small,
.flex-large {
  flex-basis: 100%;
  margin-bottom: 1rem;
}

@media (min-width: 600px) {
  .flex-small {
    flex: 1;
    margin-bottom: 0;
  }
  .flex-small.half {
    flex: 0 0 calc(1 / 2 * 100%);
  }
  .flex-small.one-fourth {
    flex: 0 0 calc(1 / 4 * 100%);
  }
  .flex-small.three-fourths {
    flex: 0 0 calc(3 / 4 * 100%);
  }
  .flex-small.one-third {
    flex: 0 0 calc(1 / 3 * 100%);
  }
  .flex-small.two-thirds {
    flex: 0 0 calc(2 / 3 * 100%);
  }
}

@media (min-width: 1000px) {
  .flex-large {
    flex: 1;
    margin-bottom: 0;
  }
  .flex-large.half {
    flex: 0 0 calc(1 / 2 * 100%);
  }
  .flex-large.one-fourth {
    flex: 0 0 calc(1 / 4 * 100%);
  }
  .flex-large.three-fourths {
    flex: 0 0 calc(3 / 4 * 100%);
  }
  .flex-large.one-third {
    flex: 0 0 calc(1 / 3 * 100%);
  }
  .flex-large.two-thirds {
    flex: 0 0 calc(2 / 3 * 100%);
  }
}

.clearfix::before,
.clearfix::after {
  content: ' ';
  display: block;
}

.clearfix:after {
  clear: both;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

.text-center {
  text-align: center;
}

.text-justify {
  text-align: justify;
}

.block {
  display: block;
}

.inline-block {
  display: inline-block;
}

.inline {
  display: inline;
}

.vertical-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.responsive-image {
  max-width: 100%;
  height: auto;
}

.show {
  display: block !important;
}

.hide {
  display: none !important;
}

.invisible {
  visibility: hidden;
}

.no-padding-top {
  padding-top: 0;
}

.no-padding-bottom {
  padding-bottom: 0;
}

.padding-top {
  padding-top: 2rem;
}

.padding-bottom {
  padding-bottom: 2rem;
}

.no-margin-top {
  margin-top: 0;
}

.no-margin-bottom {
  margin-bottom: 0;
}

.margin-top {
  margin-top: 2rem;
}

.margin-bottom {
  margin-bottom: 2rem;
}

.alternate-background {
  background: #fafafa;
  color: #404040;
}

.space-between {
  justify-content: space-between;
}

.justify-center {
  justify-content: center;
}

.align-center {
  align-items: center;
}

.screen-reader-text {
  clip: rect(1px, 1px, 1px, 1px);
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
}


.button,
a.button,
button,
[type='submit'],
[type='reset'],
[type='button'] {
  -webkit-appearance: none;
  display: inline-block;
  border: 1px solid #0366ee;
  border-radius: 4px;
  background: #0366ee;
  color: #ffffff;
  font-weight: 600;

    Arial, sans-serif;
  font-size: 1rem;
  text-transform: none;
  padding: 0.75rem 1.25rem;
  margin: 0 0 0.5rem 0;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  line-height: 1;
}

.button:hover,
a.button:hover,
button:hover,
[type='submit']:hover,
[type='reset']:hover,
[type='button']:hover {
  border: 1px solid #0250bc;
  background: #0250bc;
  color: #ffffff;
  text-decoration: none;
}

.button:focus,
.button:active,
a.button:focus,
a.button:active,
button:focus,
button:active,
[type='submit']:focus,
[type='submit']:active,
[type='reset']:focus,
[type='reset']:active,
[type='button']:focus,
[type='button']:active {
  border: 1px solid #0250bc;
  background: #0250bc;
  color: #ffffff;
  text-decoration: none;
}

.button::-moz-focus-inner,
a.button::-moz-focus-inner,
button::-moz-focus-inner,
[type='submit']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='button']::-moz-focus-inner {
  border: 0;
  padding: 0;
}

.accent-button,
a.accent-button {
  color: #ffffff;
  border: 1px solid #29de7d;
  background: #29de7d;
}

.accent-button:hover,
.accent-button:focus,
.accent-button:active,
a.accent-button:hover,
a.accent-button:focus,
a.accent-button:active {
  color: #ffffff;
  border: 1px solid #1cb864;
  background: #1cb864;
}

.muted-button,
a.muted-button {
  background: transparent;
  border: 1px solid #cdcdcd;
  color: #4e4e4e;
}

.muted-button:hover,
.muted-button:focus,
.muted-button:active,
a.muted-button:hover,
a.muted-button:focus,
a.muted-button:active {
  color: #4e4e4e;
  border: 1px solid #818181;
  background: transparent;
}

.round-button,
a.round-button {
  border-radius: 40px;
}

.square-button,
a.square-button {
  border-radius: 0;
}

.full-button,
a.full-button {
  display: block;
  width: 100%;
}

[type='color'],
[type='date'],
[type='datetime'],
[type='datetime-local'],
[type='email'],
[type='month'],
[type='number'],
[type='password'],
[type='search'],
[type='tel'],
[type='text'],
[type='url'],
[type='week'],
[type='time'],
select,
textarea {
  display: block;
  border: 1px solid #dedede;
  border-radius: 4px;
  padding: 0.75rem;
  outline: none;
  background: transparent;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  width: 100%;
  max-width: 100%;
  line-height: 1;
}

[type='color']:hover,
[type='date']:hover,
[type='datetime']:hover,
[type='datetime-local']:hover,
[type='email']:hover,
[type='month']:hover,
[type='number']:hover,
[type='password']:hover,
[type='search']:hover,
[type='tel']:hover,
[type='text']:hover,
[type='url']:hover,
[type='week']:hover,
[type='time']:hover,
select:hover,
textarea:hover {
  border: 1px solid #c5c5c5;
}

[type='color']:focus,
[type='color']:active,
[type='date']:focus,
[type='date']:active,
[type='datetime']:focus,
[type='datetime']:active,
[type='datetime-local']:focus,
[type='datetime-local']:active,
[type='email']:focus,
[type='email']:active,
[type='month']:focus,
[type='month']:active,
[type='number']:focus,
[type='number']:active,
[type='password']:focus,
[type='password']:active,
[type='search']:focus,
[type='search']:active,
[type='tel']:focus,
[type='tel']:active,
[type='text']:focus,
[type='text']:active,
[type='url']:focus,
[type='url']:active,
[type='week']:focus,
[type='week']:active,
[type='time']:focus,
[type='time']:active,
select:focus,
select:active,
textarea:focus,
textarea:active {
  border: 1px solid #0366ee;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1), 0 0 6px #8cbcfe;
}

textarea {
  overflow: auto;
  height: auto;
}

fieldset {
  border: 1px solid #dedede;
  border-radius: 4px;
  padding: 1rem;
  margin: 1.5rem 0;
}

legend {
  padding: 0 0.5rem;
  font-weight: 600;
}

select {
  color: #404040;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAYAAAA/33wPAAAAvklEQVQoFY2QMQqEMBBFv7ERa/EMXkGw11K8QbDXzuN4BHv7QO6ifUgj7v4UAdlVM8Uwf+b9YZJISnlqrfEUZVlinucnBGKaJgghbiHOyLyFKIoCbdvecpyReYvo/Ma2bajrGtbaC58kCdZ1RZ7nl/4/4d5EsO/7nzl7IUtodBexMMagaRrs+06JLMvcNWmaOv2W/C/TMAyD58dxROgSmvxFFMdxoOs6lliWBXEcuzokXRbRoJRyvqqqQvye+QDMDz1D6yuj9wAAAABJRU5ErkJggg==)
    right center no-repeat;
  line-height: 1;
}

select::-ms-expand {
  display: none;
}

[type='range'] {
  width: 100%;
}

label {
  font-weight: 600;
  max-width: 100%;
  display: block;
  margin: 1rem 0 0.5rem;
}

@media (min-width: 600px) {
  .split-form label {
    text-align: right;
    padding: 0 0.5rem;
    margin-bottom: 1rem;
  }
}

input.has-error,
input.has-error:hover,
input.has-error:focus,
input.has-error:active,
select.has-error,
select.has-error:hover,
select.has-error:focus,
select.has-error:active,
textarea.has-error,
textarea.has-error:hover,
textarea.has-error:focus,
textarea.has-error:active {
  border: 1px solid #d33c40;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1), 0 0 6px #f4cecf;
}

input.is-success,
input.is-success:hover,
input.is-success:focus,
input.is-success:active,
select.is-success,
select.is-success:hover,
select.is-success:focus,
select.is-success:active,
textarea.is-success,
textarea.is-success:hover,
textarea.is-success:focus,
textarea.is-success:active {
  border: 1px solid #29de7d;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1), 0 0 6px #97efc0;
}

::-webkit-input-placeholder,
::-moz-placeholder,
:-moz-placeholder,
:-ms-input-placeholder {
  color: #9a9a9a;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  max-width: 100%;
}

thead th {
  border-bottom: 2px solid #dedede;
}

tfoot th {
  border-top: 2px solid #dedede;
}

td {
  border-bottom: 1px solid #dedede;
}

th,
td {
  text-align: left;
  padding: 0.5rem;
}

caption {
  padding: 1rem 0;
  caption-side: bottom;
  color: #ababab;
}

.striped-table tbody tr:nth-child(odd) {
  background-color: #f8f8f8;
}

.contain-table {
  overflow-x: auto;
}

@media (min-width: 600px) {
  .contain-table {
    width: 100%;
  }
}






`;

export default ProblemSetManage;
