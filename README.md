# TWOVC

Overide all default classnames

```sh
npm i twovc

```

```js
import twovc from "twovc";
function App() {
  return (
    <div className={twovc("border-solid", "border-dotted")}>Hello World</div>
  );
}
// In above only border-dotted will be returned classname
```
