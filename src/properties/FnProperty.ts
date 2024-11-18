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

export type FnParameters = {
    value?: Extract<Value, 'text'>;
    type?: Type;
    language?: string;
    altid?: Altid;
    pid?: Pid;
    pref?: Pref;
    propId?: PropId;
} & CommonParameters;

export type FnRestConfig = [value: string, parameters?: FnParameters, options?: Options];

export type FnConfig = FnProperty | FnRestConfig | string;

const VALUE: unique symbol = Symbol.for('value');

/**
 * > Purpose:  To specify the formatted text corresponding to the name of
 * >   the object the vCard represents.
 * >
 * > Value type:  A single text value.
 * >
 * > Special notes:  This property is based on the semantics of the X.520
 * >   Common Name attribute [CCITT.X520.1988]. The property MUST be
 * >   present in the vCard object.
 * >
 * > ABNF:
 * >   FN-param = "VALUE=text" / type-param / language-param / altid-param
 * >            / pid-param / pref-param / any-param
 * >   FN-value = text
 * >
 * > Example:
 * >   FN:Mr. John Q. Public\, Esq.
 *
 * @see {@link https://datatracker.ietf.org/doc/html/rfc6350#section-6.2.1 RFC 6350 - vCard Format Specification § FN}
 */
export default class FnProperty extends Property {
    static readonly CARDINALITY: Cardinality = '1*'; // One or more instances per vCard MUST be present.

    static readonly DEFAULT_VALUE_TYPE: Value = 'text';

    group: Group;

    parameters: FnParameters = {};

    [VALUE]: string;

    constructor(value: string, parameters: FnParameters = {}, { group = '' }: Options = {}) {
        super();

        if (!isString(value))
            throw new TypeError(`The value "${value}" is not a string type`);

        if (!isValidGroup(group))
            throw new TypeError(`The group "${group}" is not a string or integer`);

        FnProperty.validateParameters(parameters);

        this.group = group;
        this.parameters = parameters;
        this[VALUE] = value;
    }

    valueOf(): string {
        return this[VALUE];
    }

    static from(value: FnConfig): FnProperty {
        if (value instanceof FnProperty) return value;

        if (Array.isArray(value)) return new FnProperty(...value);

        if (isString(value)) return new FnProperty(value);

        throw new TypeError(`The value "${value}" is not a FnConfig type`);
    }

    static validateParameters({ pid, pref, propId }: FnParameters): void {
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
