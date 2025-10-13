# what to test

================
=> test component renders
=> test component renders with props
(given a set of props that a component renders the right html)
=> test component renders in different states
=> test components react to events (this is applicable to components like btns & form controls)

# what not to test

===================
=> implementation details
test the behavior not how that behavior is implemented (so refactor is easy)
=> third party code
test code we are writing not package we use
so we test the component that consume that
=> code that isn't important from a user point of view
ex:
utility func that displays date in a user-friendly format
we don't have to test if that func is called by the component
we can directly test if the date was rendered in the expected format
=======================================================================================

# Rtl queries

steps for every test:

1. render the component --> we use render() method
2. find an element rendered by the component
3. assert against the element found in step2 which will pass or fail the test -->
   for assertion we use expect(value) + matcher function (form jest & jest dom)

## queries are methods used to find elements on the page

these methods need to be combined with other suffix
2:05
==> get single element on the page

- getBy --> throw error if not found 
- queryBy --> return null if not found 
- findBy --> async 

==> to find multiple elements on the page

- getAllBy
- queryAllBy
- findAllBy

## Suffix Forms (What to find)

### By Role (Most Recommended)

- `ByRole` - Find by accessibility role (button, textbox, etc.)
- `ByLabelText` - Find by label text (for form controls)
- `ByPlaceholderText` - Find by placeholder text
- `ByText` - Find by text content
- `ByDisplayValue` - Find by form control's current value

### By Test ID (Use Sparingly)

- `ByTestId` - Find by data-testid attribute

### By Alt Text (For Images)

- `ByAltText` - Find by alt text attribute

### By Title

- `ByTitle` - Find by title attribute

### Complete Query Combinations

#### Single Element Queries:

- `getByRole` - Gets single element, throws if not found
- `getByLabelText` - Gets single element, throws if not found
- `getByPlaceholderText` - Gets single element, throws if not found
- `getByText` - Gets single element, throws if not found
- `getByDisplayValue` - Gets single element, throws if not found
- `getByAltText` - Gets single element, throws if not found
- `getByTitle` - Gets single element, throws if not found
- `getByTestId` - Gets single element, throws if not found

- `queryByRole` - Gets single element, returns null if not found
- `queryByLabelText` - Gets single element, returns null if not found
- `queryByPlaceholderText` - Gets single element, returns null if not found
- `queryByText` - Gets single element, returns null if not found
- `queryByDisplayValue` - Gets single element, returns null if not found
- `queryByAltText` - Gets single element, returns null if not found
- `queryByTitle` - Gets single element, returns null if not found
- `queryByTestId` - Gets single element, returns null if not found

- `findByRole` - Gets single element, waits for it to appear (async)
- `findByLabelText` - Gets single element, waits for it to appear (async)
- `findByPlaceholderText` - Gets single element, waits for it to appear (async)
- `findByText` - Gets single element, waits for it to appear (async)
- `findByDisplayValue` - Gets single element, waits for it to appear (async)
- `findByAltText` - Gets single element, waits for it to appear (async)
- `findByTitle` - Gets single element, waits for it to appear (async)
- `findByTestId` - Gets single element, waits for it to appear (async)

#### Multiple Element Queries:

- `getAllByRole` - Gets array of elements, throws if none found
- `getAllByLabelText` - Gets array of elements, throws if none found
- `getAllByPlaceholderText` - Gets array of elements, throws if none found
- `getAllByText` - Gets array of elements, throws if none found
- `getAllByDisplayValue` - Gets array of elements, throws if none found
- `getAllByAltText` - Gets array of elements, throws if none found
- `getAllByTitle` - Gets array of elements, throws if none found
- `getAllByTestId` - Gets array of elements, throws if none found

- `queryAllByRole` - Gets array of elements, returns empty array if none found
- `queryAllByLabelText` - Gets array of elements, returns empty array if none found
- `queryAllByPlaceholderText` - Gets array of elements, returns empty array if none found
- `queryAllByText` - Gets array of elements, returns empty array if none found
- `queryAllByDisplayValue` - Gets array of elements, returns empty array if none found
- `queryAllByAltText` - Gets array of elements, returns empty array if none found
- `queryAllByTitle` - Gets array of elements, returns empty array if none found
- `queryAllByTestId` - Gets array of elements, returns empty array if none found

- `findAllByRole` - Gets array of elements, waits for at least one to appear (async)
- `findAllByLabelText` - Gets array of elements, waits for at least one to appear (async)
- `findAllByPlaceholderText` - Gets array of elements, waits for at least one to appear (async)
- `findAllByText` - Gets array of elements, waits for at least one to appear (async)
- `findAllByDisplayValue` - Gets array of elements, waits for at least one to appear (async)
- `findAllByAltText` - Gets array of elements, waits for at least one to appear (async)
- `findAllByTitle` - Gets array of elements, waits for at least one to appear (async)
- `findAllByTestId` - Gets array of elements, waits for at least one to appear (async)

## Query Priority (Recommended Order)

1. **getByRole** - Most accessible, user-focused
button ------> button role
a ------> link role 
h1 / h6 ------> heading role 
checkbox ------> checkbox role 
radio buttons ------> radio role 
element with no default roles ==> add role="" attribute
ex: <a role="button"></a>

2. **getByLabelText** - For form controls
3. **getByPlaceholderText** - For form inputs
4. **getByText** - For text content
5. **getByDisplayValue** - For form values
6. **getByAltText** - For images
7. **getByTitle** - For elements with title
8. **getByTestId** - Last resort, avoid if possible







