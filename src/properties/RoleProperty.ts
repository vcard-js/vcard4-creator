import type { Altid, Cardinality, CommonParameters, Group, Options, Pid, Pref, Type, Value } from '../types.js';
import { getInvalidPidParameterMessage, getInvalidPrefParameterMessage } from '../util/error-messages.js';
import isString from '../util/is-string.js';
import isValidGroup from '../util/is-valid-group.js';
import isValidPidParameter from '../util/is-valid-pid-parameter.js';
import isValidPrefParameter from '../util/is-valid-pref-parameter.js';
import Property from './Property.js';

export type RoleParameters = {
    value?: Extract<Value, 'text'>;
    language?: string;
    pid?: Pid;
    pref?: Pref;
    type?: Type;
    altid?: Altid;
} & CommonParameters;

export type RoleRestConfig = [value: string, parameters?: RoleParameters, options?: Options];

export type RoleConfig = RoleProperty | RoleRestConfig | string;

const VALUE: unique symbol = Symbol.for('value');

/**
 * > Purpose:  To specify the function or part played in a particular
 * >   situation by the object the vCard represents.
 * >
 * > Value type:  A single text value.
 * >
 * > Special notes:  This property is based on the X.520 Business Category
 * >   explanatory attribute [CCITT.X520.1988]. This property is
 * >   included as an organizational type to avoid confusion with the
 * >   semantics of the TITLE property and incorrect usage of that
 * >   property when the semantics of this property is intended.
 * >
 * > ABNF:
 * >   ROLE-param = "VALUE=text" / language-param / pid-param / pref-param
 * >              / type-param / altid-param / any-param
 * >   ROLE-value = text
 * >
 * > Example:
 * >   ROLE:Project Leader
 *
 * @see {@link https://datatracker.ietf.org/doc/html/rfc6350#section-6.6.2 RFC 6350 - vCard Format Specification § ROLE}
 */
export default class RoleProperty extends Property {
    static readonly CARDINALITY: Cardinality = '*'; // One or more instances per vCard MAY be present.

    static readonly DEFAULT_VALUE_TYPE: Value = 'text';

    group: Group;

    parameters: RoleParameters = {};

    [VALUE]: string;

    constructor(value: string, parameters: RoleParameters = {}, { group = '' }: Options = {}) {
        super();

        if (!isString(value))
            throw new TypeError(`The value "${value}" is not a string type`);

        if (!isValidGroup(group))
            throw new TypeError(`The group "${group}" is not a string or integer`);

        RoleProperty.validateParameters(parameters);

        this.group = group;
        this.parameters = parameters;
        this[VALUE] = value;
    }

    valueOf(): string {
        return this[VALUE];
    }

    static from(value: RoleConfig): RoleProperty {
        if (value instanceof RoleProperty) return value;

        if (Array.isArray(value)) return new RoleProperty(...value);

        if (isString(value)) return new RoleProperty(value);

        throw new TypeError(`The value "${value}" is not a RoleConfig type`);
    }

    static validateParameters({ pid, pref }: RoleParameters): void {
        if (pid !== undefined && !isValidPidParameter(pid)) {
            throw new TypeError(getInvalidPidParameterMessage({ pid }));
        }

        if (pref && !isValidPrefParameter(pref)) {
            throw new TypeError(getInvalidPrefParameterMessage({ pref }));
        }
    }
}
