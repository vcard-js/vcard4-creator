import { Cardinality, Group, Options, Value } from '../types.js';
import isString from '../util/is-string.js';
import isValidGroup from '../util/is-valid-group.js';
import Property from './Property.js';

export type Gramgender = 'animate' | 'common' | 'feminine' | 'inanimate' | 'masculine' | 'neuter';

export type GramgenderParameters = {
    language?: string;
};

export type GramgenderRestConfig = [value: Gramgender, parameters?: GramgenderParameters, options?: Options];

export type GramgenderConfig = GramgenderProperty | GramgenderRestConfig | Gramgender;

const VALUE: unique symbol = Symbol.for('value');

/**
 * > Purpose:  Defines which grammatical gender to use in salutations and other grammatical constructs.
 * >
 * > Value type:  A single text value that is restricted to an enumerated list of allowed values.
 * >
 * > Cardinality:  *
 * >
 * > Property parameters:  LANGUAGE
 * >
 * >
 * > Description:  This property defines the grammatical gender that the contact prefers to be addressed by or
 * >    referred to as in written or spoken form. For example, the German language distinguishes by grammatical
 * >    gender in salutations such as "Sehr geehrte" (feminine) and "Sehr geehrter" (masculine). Multiple
 * >    occurrences of this property MUST be distinguished by the LANGUAGE parameter.
 * >
 * > Format definition:
 * >    gramgender       = "GRAMGENDER" gramgender-param
 * >                          ":" gramgender-value
 * >
 * >    gramgender-param =
 * >                    *(
 * >                     ;
 * >                     ; The following are OPTIONAL
 * >                     ; but MUST NOT occur more than once.
 * >                     ;
 * >                     (";" language-param) /
 * >                     ;
 * >                     ; The following are OPTIONAL
 * >                     ; and MAY occur more than once.
 * >                     ;
 * >                     (";" any-param)
 * >                     ;
 * >                     )
 * >
 * > gramgender-value = "animate" /
 * >                    "common" /
 * >                    "feminine" /
 * >                    "inanimate" /
 * >                    "masculine" /
 * >                    "neuter" /
 * >                    iana-token /
 * >                    x-name
 * >
 * > Example(s):
 * >    GRAMGENDER;LANGUAGE=de:feminine
 *
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9554/#section-3.2 RFC 9554 - vCard Format Extensions for JSContact § GRAMGENDER}
 */
export default class GramgenderProperty extends Property {
    static readonly CARDINALITY: Cardinality = '*'; // One or more instances per vCard MAY be present.

    static readonly DEFAULT_VALUE_TYPE: Value = 'text';

    group: Group;

    parameters: GramgenderParameters = {};

    [VALUE]: string;

    constructor(value: string, parameters: GramgenderParameters = {}, { group = '' }: Options = {}) {
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

    static from(value: GramgenderConfig): GramgenderProperty {
        if (value instanceof GramgenderProperty) return value;

        if (Array.isArray(value)) return new GramgenderProperty(...value);

        if (isString(value)) return new GramgenderProperty(value);

        throw new TypeError(`The value "${value}" is not a GramgenderConfig type`);
    }
}
