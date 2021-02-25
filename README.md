# mypluralize
A Node.js module that returns the plural form of any noun
## Installation 
```sh
npm install mypluralize --save
yarn add mypluralize
bower install pluralize --save
```
## Usage
### Javascript
```javascript
var pluralise = require('mypluralize');
var boys = pluralise.getPlural('Boy');
```
```sh
Output should be 'Boys'
```
### TypeScript
```typescript
import { getPlural } from 'mypluralize';
console.log(getPlural('Goose'))
```
```sh
Output should be 'Geese'
```
### AMD
```javascript
define(function(require,exports,module){
  var pluralise = require('mypluralize');
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