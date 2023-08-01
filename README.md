<p><img src="./assets/logo.png" alt="" width="200" /></p>
<p><img src="https://github.com/oaxoa/fp-filters/actions/workflows/build.yml/badge.svg" alt="" /></p>

https://github.com/Oaxoa/fp-filters

# fp-filters

A collection of common filter functions that are written and meant to be used in a functional programming style.
Tiny, zero-dependencies, grouped by semantics, tree-shakeable and 100% tested by design.

### Why

See how _fp-filters_ allows you to stop rewriting the same code over and over again and greatly improves readability:

## Examples

#### values and numbers examples:

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
array.filter((element) => element !== 0);
// fp-filters
array.filter(isNotZero);
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

#### collections examples:

```js
const selectedUsers = ['John', 'Gina', 'Ed'];
// JS
array.filter((arg) => selectedUsers.includes(arg));
// fp-filters
array.filter(isOneOf(selectedUsers));
```

```js
// JS
array.filter((obj) => obj.valid !== undefined && obj.id !== undefined && obj.plu !== undefined);
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

#### position examples:

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

#### types examples:

```js
// JS
array.filter((arg) => arg !== null && arg !== undefined);
// fp-filters
array.filter(isNotNil);
```

```js
// JS
array.filter((arg) => typeof arg === 'boolean');
// fp-filters
array.filter(isBoolean);
// do not be tricked by `array.filter(Boolean);` is very different as 
// it casts the content and then evaluate its truthyness
```

## Negate or combine filters

Most of the functions include aliases for their negated versions:

```js
array.filter(isNot(5))
array.filter(isNotNil)
array.filter(isNotEmpty)
array.filter(isNotInstanceOf(SomeClass));
```

but you can make your own.

> _fp-filters_ offers very powerful functions to combine or negate filters

#### Some examples:

```js
array.filter(not(is(5)))
array.filter(and(gte(MIN_PRICE), not(isRound)));
array.filter(or(is('admin'), and(startsWith('user_'), isLowerCase)));
```

### Getting started

#### Installation

fp-filters runs on Node.js and is available as a NPM package.

```bash
npm install --save fp-filters
```

or

```bash
yarn add fp-filters
```

## Contributions

Looking forward for some help, **especially with the TypeScript annotations which is currently just a draft**.

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2023-present, Pierluigi Pesenti (Oaxoa)