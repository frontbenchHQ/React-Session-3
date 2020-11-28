## React Session 3 


This is the third session on React. In this session, we will cover how re-rendering works, conditional rendering, component reusability and React Router. 

After this session, we can build a full fledged portfolio application in react having home page, project page, blog page and skills page. 


## Table Of Content
---

### [1. Re-rendering](#1-re-rendering)

### [2. Conditional Rendering](#2-conditional-rendering)

### [3. Creating Re-usable components](#3-creating-reusable-component)
    
- ### List & Keys

### [4. Routing in React](#4-routing-in-react)


---


## 1. Re-Rendering

In the previous  sessions, we have seen how rendering works. Today, we will see how re-rendering works. 

Elements are the smallest building blocks of React apps.

#### Rendering Elements In DOM

```
<div id="root"></div>
```

Everything in the root id DOM will be managed by React. 

```
const element = <p> I am learning React <p>;
ReactDOM.render(element, document.getElementById('root'));
```

#### How DOM Update Works in React

React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.


```
function updateDOM(count){

  console.log('DOM Updating');

  const element = (
    <div className="random"> 
        <p> {new Date().toLocaleTimeString()}  {count}</p>  
        <p> Fullstack camp </p>
        <p> React  </p>
    </div>
  );

  ReactDOM.render(element, document.getElementById('root'))
}

setInterval(updateDOM, 100);
```





## 2. Conditional Rendering


## 3. Creating Re-Usable Components


## 4. Routing In React


