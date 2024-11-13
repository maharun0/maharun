# Understanding React Hooks

React Hooks are a powerful feature introduced in React 16.8 that allows developers to use state and lifecycle features within functional components.

## What are Hooks?

Hooks are special functions that let you "hook into" React's core features, such as state management and lifecycle events. The most commonly used hooks are:

- **useState**: Allows you to add state to functional components.
- **useEffect**: Enables side effects, like data fetching and subscriptions.

### Example of `useState`

Here’s a basic example of using `useState` to handle a counter:

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```