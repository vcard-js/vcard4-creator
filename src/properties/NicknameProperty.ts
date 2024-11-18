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

export type NicknameParameters = {
    value?: Extract<Value, 'text'>;
    type?: Type;
    language?: string;
    altid?: Altid;
    pid?: Pid;
    pref?: Pref;
    propId?: PropId;
} & CommonParameters;

export type NicknameRestConfig = [value: string, parameters?: NicknameParameters, options?: Options];

export type NicknameConfig = NicknameProperty | NicknameRestConfig | string;

const VALUE: unique symbol = Symbol.for('value');

/**
 * > Purpose:  To specify the text corresponding to the nickname of the object the vCard represents.
 * >
 * > Value type:  One or more text values separated by a COMMA character (U+002C).
 * >
 * > Special note:  The nickname is the descriptive name given instead of or in addition to the one
 * >   belonging to the object the vCard represents. It can also be used to specify a familiar form
 * >   of a proper name specified by the FN or N properties.
 * >
 * > ABNF:
 * >   NICKNAME-param = "VALUE=text" / type-param / language-param
 * >                  / altid-param / pid-param / pref-param / any-param
 * >   NICKNAME-value = text-list
 * >
 * > Examples:
 * >   NICKNAME:Robbie
 * >   NICKNAME:Jim,Jimmie
 * >   NICKNAME;TYPE=work:Boss
 *
 * @see {@link https://datatracker.ietf.org/doc/html/rfc6350#section-6.2.3 RFC 6350 - vCard Format Specification § NICKNAME}
 */
export default class NicknameProperty extends Property {
    static readonly CARDINALITY: Cardinality = '*'; // One or more instances per vCard MAY be present.

    static readonly DEFAULT_VALUE_TYPE: Value = 'text';

    group: Group;

    parameters: NicknameParameters = {};

    [VALUE]: string;

    constructor(value: string, parameters: NicknameParameters = {}, { group = '' }: Options = {}) {
        super();

        if (!isString(value))
            throw new TypeError(`The value "${value}" is not a string type`);

        if (!isValidGroup(group))
            throw new TypeError(`The group "${group}" is not a string or integer`);

        NicknameProperty.validateParameters(parameters);

        this.group = group;
        this.parameters = parameters;
        this[VALUE] = value;
    }

    valueOf(): string {
        return this[VALUE];
    }

    static from(value: NicknameConfig): NicknameProperty {
        if (value instanceof NicknameProperty) return value;

        if (Array.isArray(value)) return new NicknameProperty(...value);

        if (isString(value)) return new NicknameProperty(value);

        throw new TypeError(`The value "${value}" is not a NicknameConfig type`);
    }

    static validateParameters({ pid, pref, propId }: NicknameParameters): void {
        if (pid !== undefined && !isValidPidParameter(pid)) {
            throw new TypeError(getInvalidPidParameterMessage({ pid }));
        }

        if (pref && !isValidPrefParameter(pref)) {
            throw new TypeError(getInvalidPrefParameterMessage({ pref }));
        }

        if (propId !== undefined && !isValidPropIdParameter(propId)) {
            throw new TypeError(getInvalidPropIdParameterMessage({ propId }));
        }
    }
}
