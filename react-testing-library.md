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



