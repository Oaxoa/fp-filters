<p><img src="./assets/logo.png" alt="" width="200" /></p>
<p><img src="https://github.com/oaxoa/fp-filters/actions/workflows/build.yml/badge.svg" alt="" /></p>

https://github.com/Oaxoa/fp-filters

# fp-filters

A curated collection of common-use filter functions that are written (and can be used) in a functional programming
style.

fp-filters functions are:

1. pure
1. tiny
1. composable
1. zero-dependencies
1. grouped by semantics
1. tree-shakeable
1. 100% tested by design
1. higher-order / partially applicable
1. fully typed

### Why

See how _fp-filters_ allows you to stop rewriting the same code over and over again and greatly improves readability.
So that you will probably never write another filter function 🚀!

## Examples

#### Array

```js
// JS
const allergenIngredients = ingredients.filter((arg) => allergens.includes(arg));
// fp-filters
const allergenIngredients = ingredients.filter(isIncludedIn(allergens));
```

#### Boolean

```js
// JS
array.filter((arg) => arg === true);
// fp-filters
array.filter(isTrue);
```

#### Date

```js
// JS
dates.filter((date) => {
  const day = date.getDay();
  return day === 0 || day === 6;
});
// fp-filters
dates.filter(isWeekend);
```

#### Length

```js
// JS
array.filter((arg) => arg.length > 0);
// fp-filters
array.filter(isNotEmpty);
```

#### Misc

```js
// JS
ids.filter((id) => id === currentUserId);
// fp-filters
ids.filter(is(currentUserId));
```

#### Number

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

#### Object

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

#### Position

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

#### String

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

#### Type

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

## Negate or combine filters

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

#### Some examples:

```js
const isNot = not(is);
array.filter(isNot(5));

const canBeDiscounted = (minPrice) => and(isGreaterOrEqualTo(minPrice), not(isRound));
array.filter(canBeDiscounted(10));

const isValidAdmin = or(is('admin'), and(startsWith('user_'), isLowerCase))
array.filter(isValidAdmin);
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

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2023-present, Pierluigi Pesenti (Oaxoa)
