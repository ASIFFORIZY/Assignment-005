# JavaScript DOM & Events – Quick Theory Guide

A simple, human-friendly guide to some important JavaScript concepts for working with the DOM and handling events.

---

## 1. Selecting Elements

JavaScript gives us multiple ways to grab elements from the page:

- **`getElementById("id")`** – picks **one element** by its `id`. Only one element can have that ID, so it’s super straightforward.  
- **`getElementsByClassName("class")`** – grabs **all elements** with a certain class. Returns an **HTMLCollection** that updates automatically if the page changes.  
- **`querySelector("selector")`** – selects the **first element** that matches any CSS selector.  
- **`querySelectorAll("selector")`** – selects **all matching elements**. Returns a **static NodeList** (won’t update automatically).

---

## 2. Creating and Adding Elements

Want to add something new to the page? You can:

1. **Create it** with `document.createElement("tag")`.  
2. **Give it content or attributes**, like text or a class.  
3. **Insert it** into the DOM using `appendChild`, `prepend`, or `insertBefore`.

Example:  

``` js
const div = document.createElement("div");
div.innerText = "Hello World!";
div.className = "my-div";
document.body.appendChild(div);
