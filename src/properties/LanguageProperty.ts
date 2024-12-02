import { Cardinality, Group, Options, Value } from '../types.js';
import isString from '../util/is-string.js';
import isValidGroup from '../util/is-valid-group.js';
import Property from './Property.js';

export type LanguageParameters = {
    [key: string]: never;
};

export type LanguageRestConfig = [value: string, parameters?: LanguageParameters, options?: Options];

export type LanguageConfig = LanguageProperty | LanguageRestConfig | string;

const VALUE: unique symbol = Symbol.for('value');

/**
 * > Purpose:  Defines the default language that human-readable text values in this vCard are assumed to be
 * >    written in.
 * >
 * > Value type:  A single Language-Tag value as defined in Section 4 of [RFC6350].
 * >
 * > Cardinality:  *1
 * >
 * > Property parameters:  The LANGUAGE parameter MUST NOT be assigned to this property.
 * >
 * > Description:  This property defines the language that property values of type TEXT are assumed to be written
 * >    in for this vCard. If a vCard property includes the LANGUAGE parameter, then the parameter value has
 * >    higher precedence than the LANGUAGE property value.
 * >
 * > Format definition:
 * >    language-prop = "LANGUAGE" any-param ":" Language-Tag
 * >                  ; Language-Tag is defined in RFC 6350, Section 4.
 * >
 * > Example(s):
 * >    LANGUAGE:de-AT
 *
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9554/#section-3.3 RFC 9554 - vCard Format Extensions for JSContact § LANGUAGE}
 */
export default class LanguageProperty extends Property {
    static readonly CARDINALITY: Cardinality = '*1'; // Exactly one instance per vCard MAY be present.

    static readonly DEFAULT_VALUE_TYPE: Value = 'text';

    group: Group;

    parameters: LanguageParameters = {};

    [VALUE]: string;

    constructor(value: string, parameters: LanguageParameters = {}, { group = '' }: Options = {}) {
        super();

        if (!isString(value))
            throw new TypeError(`The value "${value}" is not a string type`);

        if (!isValidGroup(group))
            throw new TypeError(`The group "${group}" is not a string or integer`);

        this.group = group;
        this.parameters = parameters;
        this[VALUE] = value;
    }

    valueOf(): string {
        return this[VALUE];
    }

    static from(value: LanguageConfig): LanguageProperty {
        if (value instanceof LanguageProperty) return value;

        if (Array.isArray(value)) return new LanguageProperty(...value);

        if (isString(value)) return new LanguageProperty(value);

        throw new TypeError(`The value "${value}" is not a LanguageConfig type`);
    }
}
