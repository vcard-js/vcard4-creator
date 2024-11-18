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

export type OrgParameters = {
    value?: Extract<Value, 'text'>;
    sortAs?: string;
    language?: string;
    pid?: Pid;
    pref?: Pref;
    altid?: Altid;
    type?: Type;
    propId?: PropId;
} & CommonParameters;

export type OrgRestConfig = [value: string, parameters?: OrgParameters, options?: Options];

export type OrgConfig = OrgProperty | OrgRestConfig | string;

const VALUE: unique symbol = Symbol.for('value');

/**
 * > Purpose:  To specify the organizational name and units associated
 * >   with the vCard.
 * >
 * > Value type:  A single structured text value consisting of components
 * >   separated by the SEMICOLON character (U+003B).
 * >
 * > Special notes:  The property is based on the X.520 Organization Name
 * >   and Organization Unit attributes [CCITT.X520.1988].  The property
 * >   value is a structured type consisting of the organization name,
 * >   followed by zero or more levels of organizational unit names.
 * >
 * >   The SORT-AS parameter MAY be applied to this property.
 * >
 * > ABNF:
 * >   ORG-param = "VALUE=text" / sort-as-param / language-param
 * >             / pid-param / pref-param / altid-param / type-param
 * >             / any-param
 * >   ORG-value = component *(";" component)
 * >
 * > Example:  A property value consisting of an organizational name,
 * >   organizational unit #1 name, and organizational unit #2 name.
 * >
 * >   ORG:ABC\, Inc.;North American Division;Marketing
 *
 * @see {@link https://datatracker.ietf.org/doc/html/rfc6350#section-6.6.4 RFC 6350 - vCard Format Specification § ORG}
 */
export default class OrgProperty extends Property {
    static readonly CARDINALITY: Cardinality = '*'; // One or more instances per vCard MAY be present.

    static readonly DEFAULT_VALUE_TYPE: Value = 'text';

    group: Group;

    parameters: OrgParameters = {};

    [VALUE]: string;

    constructor(value: string, parameters: OrgParameters = {}, { group = '' }: Options = {}) {
        super();

        if (!isString(value))
            throw new TypeError(`The value "${value}" is not a string type`);

        if (!isValidGroup(group))
            throw new TypeError(`The group "${group}" is not a string or integer`);

        OrgProperty.validateParameters(parameters);

        this.group = group;
        this.parameters = parameters;
        this[VALUE] = value;
    }

    valueOf(): string {
        return this[VALUE];
    }

    static from(value: OrgConfig): OrgProperty {
        if (value instanceof OrgProperty) return value;

        if (Array.isArray(value)) return new OrgProperty(...value);

        if (isString(value)) return new OrgProperty(value);

        throw new TypeError(`The value "${value}" is not a OrgConfig type`);
    }

    static validateParameters({ pid, pref, propId }: OrgParameters): void {
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
