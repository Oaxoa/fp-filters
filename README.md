<p><img src="./assets/logo.png" alt="" width="200" /></p>

# fp-filters

A collection of common filter functions that are written and meant to be used in a functional programming style.
Tiny, zero-deopendencies, grouped by semantics, tree-shakeable and 100% tested by design.

### Why

See how fp-filters allows you to stop rewriting the same code over and over again and greatly improves readability:

```js

// JS
array.filter((element) => element !== 0);
// fp-filters
array.filter(isNotZero);
```
```js
// JS
array.filter((element) => element === 5);
// fp-filters
array.filter(is(5));

// JS
array.filter((id) => id === userId);
// fp-filters
array.filter(is(userId));
```
```js
// JS
array.filter((arg) => arg % 2 === 0);
// fp-filters
array.filter(isEven);
```
```js
// JS
array.filter((arg) => arg >= 10 && arg <= 50);
// fp-filters
array.filter(clamp(10, 50));
```
```js
// JS
array.filter((arg) => arg !== null && arg !== undefined);
// fp-filters
array.filter(isNotNullable);
```
```js
const people=['John', 'Gina', 'Ed'];
// JS
array.filter((arg) => someGroup.includes(arg));
// fp-filters
array.filter(isOneOf(someGroups));
```
```js
// JS
array.filter((obj) => obj.valid!==undefined && obj.id !== undefined && obj.plu !==undefined);
// fp-filters
array.filter(hasProps(['valid', 'id', 'plu']));
```
```js
// JS
array.filter((obj) => obj.country === countryId && obj.plu === plu);
// fp-filters
array.filter(hasProps(['country', 'plu'], [countryId, plu]));
```
```js
// JS
array.filter((obj) => obj.id === someOtherObj.id && obj.brand === someOtherObj.brand);
// fp-filters
array.filter(sameProps(someOtherObj, ['id', 'brand']));
```
```js
// JS
array.filter((arg) => arg.length > 0);
// fp-filters
array.filter(isNotEmpty);
```
```js
// JS
array.filter((arg, index) => index % 3 === 0 || index % 2 === 2);
// fp-filters
array.filter(pattern(false, true, true));
```
```js
// JS
array.filter((arg, index) => index % 3 === 1);
// fp-filters
array.filter(everyN(3, 1));
```
```js
// JS
array.filter((arg) => typeof arg === 'boolean');
// fp-filters
array.filter(isBoolean);
```

### Getting started

How to install

```bash
yarn add fp-filters
```
or
```bash
npm install --save fp-filters
```

Where users can get help with your project
Who maintains and contributes to the project
