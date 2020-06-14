# TWOVC

Overide all default classnames

```sh
npm i twovc

```
Check [CodeSandbox demo here](https://codesandbox.io/s/determined-mountain-cjlxu?file=/src/App.js)

```js
import twovc from "twovc";
function App() {
  return (
    <div className={twovc("border-solid", "border-dotted")}>Hello World</div>
  );
}
// In above only border-dotted will be returned classname
```
