# HC Components

This project consists of a set of React components created for use on Høiskolen Chemikerforening's web page. All components and props are described below.

## General

### Colors
We have a set of color variables for the project. The following variables are defined:

*Yellow*
--yellow-00: #FFF8DF;
--yellow-10: #FFEBAF;
--yellow-20: #FFDF7B;
--yellow-30: #FFD342;
--yellow-40: #FFC800;
--yellow-50: #FFBE00;
--yellow-60: #FFB000;
--yellow-70: #FF9C00;
--yellow-80: #FF8A00;
--yellow-90: #FF6800;

*Gray*
--gray-00: #FAFAFA;
--gray-10: #F5F5F5;
--gray-20: #EEEEEE;
--gray-30: #E0E0E0;
--gray-40: #BDBDBD;
--gray-50: #9E9E9E;
--gray-60: #757575;
--gray-70: #616161;
--gray-80: #424242;
--gray-90: #212121;

### Font
Font-family: [Overpass, Overpass Mono](https://delvefonts.com/fonts/overpass)

Overpass is used for text, Overpass Mono for code.

## Layout

### Container
Basic `div`-element used to set margins on the page.

### Row
`div`-element that creates a new row for the grid system.

### Col
`div`-element that creates a new column within a row. Min. column width is 1 and max. column width is 12 (6 is half the page, etc.). Four modifiers used to decide column width based on screen width: `xs`, `sm`, `md` and `lg`.

## Text

### H1
`h1`-element, used for most important headers.

#### `font-size`
Default: `1.875rem`
- `smallest`: `1.125rem`
- `smaller`: `1.25rem`
- `small`: `1.5rem`
- `big`: `2.25rem`
- `bigger`: `3rem`
- `biggest`: `3.75rem`
- `display`: `4.5rem`

#### `font-style`
Default: `none`
- `italic`
- `bold`
- `gray`: color `var(--gray-70)`


### H2
`h2`-element, used for slightly less important headers.

#### `font-size`
Default: `1.5rem`
- `smaller`: `1.125rem`
- `small`: `1.25rem`
- `big`: `1.875rem`
- `bigger`: `2.25rem`
- `biggest`: `3rem`

#### `font-style`
Default: `none`
- `italic`
- `bold`
- `gray`: color `var(--gray-80)`


### H3
`h3`-element, used for averagely important headers.

#### `font-size`
Default: `1.25rem`
- `small`: `1.125rem`
- `big`: `1.5rem`
- `bigger`: `1.875rem`
- `biggest`: `2.25rem`

#### `font-style`
Default: `none`
- `italic`
- `bold`
- `gray`: color `var(--gray-70)`