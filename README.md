# HC Components

This project consists of a set of React components created for use on Høiskolen Chemikerforening's web page. All components and props are described below.

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