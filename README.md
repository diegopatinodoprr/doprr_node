# doprr_node

A Node.js module that returns the plural form of any noun

## Installation

```sh
npm install doprr_node --save
yarn add doprr_node
bower install pluralize --save
```

## Usage

### Javascript

```javascript
var pluralise = require("doprr_node");
var boys = pluralise.getPlural("Boy");
```

```sh
Output should be 'Boys'
```

### TypeScript

```typescript
import { getPlural } from "doprr_node";
console.log(getPlural("Goose"));
```

```sh
Output should be 'Geese'
```

### AMD

```javascript
define(function (require, exports, module) {
  var pluralise = require("doprr_node");
});
```

## Test

```sh
npm run test
```

## SemVer

- < Less than
- <= Less than or equal to
- \> Greater than
- \>= Greater than or equal to
- = Equal. If no operator is specified, then equality is assumed, so this operator is optional, but MAY be included.
