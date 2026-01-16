## priority order for queries

=> test should resemble how users interacts with your code (component, page, ..etc) as much as possible

## high priority

1- getByRole
This is the most preferred query because it finds elements based on their exposure in the accessibility tree,
which aligns with how users and assistive technologies perceive the page.
2- getByLabelText
good for form fields
3- getByPlaceholderText
4- getByText
find non-interactive elements like divs, spans, and paragraphs
5- getByDisplayValue
find form element by its current value

## middle priority

ux varies for example: screen readers inconsistently read title attribute
1- getByAltText
with elements that support alt text -> image, area, input
2- getByTitle

## low priority(last resort)

- getByTestId
  used when can't match by role or text
