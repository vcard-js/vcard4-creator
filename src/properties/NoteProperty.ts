import type { Altid, Cardinality, CommonParameters, Group, Options, Pid, Pref, PropId, Type, Value } from '../types.js';
import {
    getInvalidPidParameterMessage,
    getInvalidPrefParameterMessage,
    getInvalidPropIdParameterMessage
} from '../util/error-messages.js';
import isString from '../util/is-string.js';
import isValidGroup from '../util/is-valid-group.js';
import isValidPidParameter from '../util/is-valid-pid-parameter.js';
import isValidPrefParameter from '../util/is-valid-pref-parameter.js';
import isValidPropIdParameter from '../util/is-valid-prop-id-parameter.js';
import Property from './Property.js';

export type NoteParameters = {
    value?: Extract<Value, 'text'>;
    language?: string;
    pid?: Pid;
    pref?: Pref;
    type?: Type;
    altid?: Altid;
    propId?: PropId;
} & CommonParameters;

export type NoteRestConfig = [value: string, parameters?: NoteParameters, options?: Options];

export type NoteConfig = NoteProperty | NoteRestConfig | string;

const VALUE: unique symbol = Symbol.for('value');

/**
 * > Purpose:  To specify supplemental information or a comment that is
 * >   associated with the vCard.
 * >
 * > Value type:  A single text value.
 * >
 * > Special notes:  The property is based on the X.520 Description
 * >   attribute [CCITT.X520.1988].
 * >
 * > ABNF:
 * >   NOTE-param = "VALUE=text" / language-param / pid-param / pref-param
 * >              / type-param / altid-param / any-param
 * >   NOTE-value = text
 * >
 * > Example:
 * >   NOTE:This fax number is operational 0800 to 1715
 * >     EST\, Mon-Fri.
 *
 * @see {@link https://datatracker.ietf.org/doc/html/rfc6350#section-6.7.2 RFC 6350 - vCard Format Specification § NOTE}
 */
export default class NoteProperty extends Property {
    static readonly CARDINALITY: Cardinality = '*'; // One or more instances per vCard MAY be present.

    static readonly DEFAULT_VALUE_TYPE: Value = 'text';

    group: Group;

    parameters: NoteParameters = {};

    [VALUE]: string;

    constructor(value: string, parameters: NoteParameters = {}, { group = '' }: Options = {}) {
        super();

        if (!isString(value))
            throw new TypeError(`The value "${value}" is not a string type`);

        if (!isValidGroup(group))
            throw new TypeError(`The group "${group}" is not a string or integer`);

        NoteProperty.validateParameters(parameters);

        this.group = group;
        this.parameters = parameters;
        this[VALUE] = value;
    }

    valueOf(): string {
        return this[VALUE];
    }

    static from(value: NoteConfig): NoteProperty {
        if (value instanceof NoteProperty) return value;

        if (Array.isArray(value)) return new NoteProperty(...value);

        if (isString(value)) return new NoteProperty(value);

        throw new TypeError(`The value "${value}" is not a NoteConfig type`);
    }

    static validateParameters({ pid, pref, propId }: NoteParameters): void {
        if (pid !== undefined && !isValidPidParameter(pid)) {
            throw new TypeError(getInvalidPidParameterMessage({ pid }));
        }

        if (pref !== undefined && !isValidPrefParameter(pref)) {
            throw new TypeError(getInvalidPrefParameterMessage({ pref }));
        }

        if (propId !== undefined && !isValidPropIdParameter(propId)) {
            throw new TypeError(getInvalidPropIdParameterMessage({ propId }));
        }
    }
}
