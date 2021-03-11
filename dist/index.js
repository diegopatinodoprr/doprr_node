"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlural = void 0;
var pluralize = require("pluralize");
/**
 * @Method: Returns the plural form of any noun.
 * @Param {string}
 * @Return {string}
 */
function getPlural(str) {
    return pluralize.plural(str) + "On est Dans la Derniere Version 2.0.1";
}
exports.getPlural = getPlural;
