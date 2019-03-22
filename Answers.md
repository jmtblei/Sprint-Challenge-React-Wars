# Answers

1.  What is React JS and what problems does it try and solve?
React is a library that tries to implement reusable pieces of code to create complex UI that requires lots of data within the DOM. Having too many DOM operations can slow rendering, so React only updates the ones in use to optimize speed.

1.  What does it mean to _think_ in react?
Thinking in React is to break down an application/interface into smaller individual components.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
Functional/Presensational recieves data as 'props' and returns React elements to display. Class/Stateul maintains its data as as 'states' and must implement a render method.

1.  Describe state.
State is an object property of a React component that is created. Think of it as 'private' information of the component that can change on it's own, thus it's use is in interactivity.

1.  Describe props.
Props are an object argument of React components that contain information set by the parent. They are imutable and thus mostly static data.