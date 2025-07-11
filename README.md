<img src="assets/logo.png" alt="" height="320" />

# fp-filters

<img src="https://github.com/oaxoa/fp-filters/actions/workflows/build.yml/badge.svg" alt="" />

A curated collection of 130+ common-use filter functions that are written (and can be used) in a functional programming
style.

- GitHub: https://github.com/Oaxoa/fp-filters
- NPM: https://www.npmjs.com/package/fp-filters
- Docs: https://oaxoa.github.io/fp-filters/

<h2>🧠 How is this helpful?</h2>

_fp-filters_ allows you to stop rewriting the same code over and over again and greatly improves readability.
So that you will probably never write another filter function 🚀!

## 🔎 Examples

A few random examples of the 130+ functions available in _fp-filters_. Grouped by semantic.
See full docs here: [https://oaxoa.github.io/fp-filters/](https://oaxoa.github.io/fp-filters/)

### Arrays

```js
const input = [[1, 2, 3], [2, 4], [0, 4, 8, 16]];
// JS
input.filter((array) => array.every((element) => element % 2 === 0));
// fp-filters
input.filter(everyElement(isEven))
```

### Booleans

```js
// JS
array.filter((arg) => arg === true);
// fp-filters
array.filter(isTrue);
```

### Dates

```js
// JS
dates.filter((date) => {
  const day = date.getDay();
  return day === 0 || day === 6;
});
// fp-filters
dates.filter(isWeekend);
```

### Lengths

```js
// JS
array.filter((arg) => arg.length > 0);
// fp-filters
array.filter(isNotEmpty);
```

### Misc

```js
// JS
ids.filter((id) => id === currentUserId);
// fp-filters
ids.filter(is(currentUserId));
```

### Numbers

```js
// JS
scores.filter((value) => value !== 0);
// fp-filters
scores.filter(isNotZero);
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
array.filter(isBetween(10, 50));
```

### Objects

```js
// JS
products.filter((obj) => obj.id !== undefined && obj.plu !== undefined);
// fp-filters
products.filter(hasProps(['id', 'plu']));
```

```js
// JS
products.find((obj) => obj.country === countryId && obj.plu === plu);
// fp-filters
products.find(hasProps(['country', 'plu'], [countryId, plu]));
```

```js
// JS
array.filter((obj) => obj.id === someOtherObj.id && obj.brand === someOtherObj.brand);
// fp-filters
array.filter(hasSameProps(someOtherObj, ['id', 'brand']));
```

### Positions

```js
// JS
array.filter((arg, index) => index % 3 === 1 || index % 3 === 2);
// fp-filters
array.filter(pattern(false, true, true));
```

```js
// JS
array.filter((arg, index) => index % 3 === 1);
// fp-filters
array.filter(isEveryNthIndex(3, 1));
```

### Strings

```js
// JS
array.filter((arg) => arg === '');
// fp-filters
array.filter(isEmptyString);
```

```js
// JS
array.filter((arg: string) => {
  for (let i = 0; i < arg.length / 2; i++) {
    if (arg[i] !== arg[arg.length - i - 1]) {
      return false;
    }
  }
  return true;
});
// fp-filters
array.filter(isPalindrome);
```

### Types

```js
// JS
array.filter((arg) => arg !== undefined);
// fp-filters
array.filter(isNotUndefined);
```

```js
// JS
array.filter((arg) => typeof arg === 'boolean');
// fp-filters
array.filter(isBoolean);
// do not be tricked by `array.filter(Boolean);`. It is different as 
// it casts the content and then evaluate its truthyness
```

## ❗ Negate or 🧩 combine filters

Most of the functions include aliases for their negated versions (
using [fp-booleans](https://npmjs.org/package/fp-booleans)):

```js
// E.g.: 
array.filter(is(5))
array.filter(isNot(5))

array.filter(isBetween(5, 10))
array.filter(isNotBetween(5, 10))

array.filter(isEmpty)
array.filter(isNotEmpty)

array.filter(isInstanceOf(SomeClass));
array.filter(isNotInstanceOf(SomeClass));
```

but **you can make your own**.

> _fp-filters_ leaverages _fp-booleans_'s very powerful functions to combine or negate functions

some examples:

```js
const isNot = not(is);
array.filter(isNot(5));

const canBeDiscounted = (minPrice) => and(isGreaterOrEqualTo(minPrice), not(isRound));
array.filter(canBeDiscounted(10));

const isValidAdmin = or(is('admin'), and(startsWith('user_'), isLowerCase))
array.filter(isValidAdmin);
```

## 🧑🏼‍💻 Coding style

fp-filters functions are predicates. Just like array filters are.
They get arguments and return a boolean.
They can be used as such. But they shine when used as filters.

fp-filters functions are:

### ✨ Pure

All are pure. Some are higher-order and unlocks the power of partial application in filters.

### 🤏🏼 Tiny

Most are one-liners. The longest is ~10 lines.

### 🧱 Composable

Higher-order predicates and fp-booleans unleash quite some power

### 🪆 Zero-ish dependencies

Most of them have zero deps. Some of them have 1 dependency on fp-booleans (that has zero deps).
No surprises.

### 🍃 More than tree-shakeable.

No barrel files, or entry points.

You import and bundle only what you use. No way to mess it up.

If you use one function only, that's what goes in your bundle. The cost of it is in bytes.

> Just as it would cost to write the function yourself. But with free 100% coverage testing, types, docs and no risk of
> duplicated code.

### 🗂️ Grouped semantically

Function for numbers, function for strings, you get the point.
So you will always intuitively know where to find the one you need.

### ✅ 100% tested by design

Yes, all of them are tested. Every branch, every line.
130+ stable unit tests running in less than 1s.

> Functions that are partial applications of other 100% tested functions (from fp-filters or fp-booleans) are
> not tested. On purpose.

### ✏️ Typescript typed

All functions are fully typed. No `any` type, some `unknown`. Working on it. Help is appreciated ❤️.

## 🚀 Getting started

### 💻 Installation

fp-filters runs on Node.js and is available as a NPM package.

```bash
npm install --save fp-filters
```

or

```bash
yarn add fp-filters
```

## 🤝 Contributions

1. [Coding style](#%F0%9F%A7%91%F0%9F%8F%BC%F0%9F%92%BB-coding-style)
1. [Contributing guide](CONTRIBUTING.md)
1. [Code of Conduct](CODE_OF_CONDUCT.md)

## 📜 License & Copyrights

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2023-present, Pierluigi Pesenti (Oaxoa)
