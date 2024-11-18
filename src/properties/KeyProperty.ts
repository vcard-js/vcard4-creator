import type { Altid, Cardinality, CommonParameters, Group, Options, Pid, Pref, PropId, Type, Value } from '../types.js';
import {
    getInvalidMediatypeValueParameterMessage,
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

export type KeyCommonParameters = {
    altid?: Altid;
    pid?: Pid;
    pref?: Pref;
    type?: Type;
    propId?: PropId;
} & CommonParameters;

export type KeyUriOrUndefinedValueParameters = {
    value?: Extract<Value, 'uri'>;
    mediatype?: string;
} & KeyCommonParameters;

export type KeyTextValueParameters = {
    value: Extract<Value, 'text'>;
} & KeyCommonParameters;

export type KeyParameters = KeyUriOrUndefinedValueParameters | KeyTextValueParameters;

export type KeyRestConfig = [value: string, parameters?: KeyParameters, options?: Options];

/** @todo Add URL type support? */
export type KeyConfig = KeyProperty | KeyRestConfig | string;

const VALUE: unique symbol = Symbol.for('value');

/**
 * > Purpose:  To specify a public key or authentication certificate
 * >   associated with the object that the vCard represents.
 * >
 * > Value type:  A single URI. It can also be reset to a text value.
 * >
 * > ABNF:
 * >   KEY-param = KEY-uri-param / KEY-text-param
 * >   KEY-value = KEY-uri-value / KEY-text-value
 * >     ; Value and parameter MUST match.
 * >
 * >   KEY-uri-param = "VALUE=uri" / mediatype-param
 * >   KEY-uri-value = URI
 * >
 * >   KEY-text-param = "VALUE=text"
 * >   KEY-text-value = text
 * >
 * >   KEY-param =/ altid-param / pid-param / pref-param / type-param
 * >              / any-param
 * >
 * > Examples:
 * >   KEY:http://www.example.com/keys/jdoe.cer
 * >
 * >   KEY;MEDIATYPE=application/pgp-keys:ftp://example.com/keys/jdoe
 * >
 * >   KEY:data:application/pgp-keys;base64,MIICajCCAdOgAwIBAgICBE
 * >    UwDQYJKoZIhvcNAQEEBQAwdzELMAkGA1UEBhMCVVMxLDAqBgNVBAoTI05l
 * >    <... remainder of base64-encoded data ...>
 *
 * @see {@link https://datatracker.ietf.org/doc/html/rfc6350#section-6.8.1 RFC 6350 - vCard Format Specification § KEY}
 */
export default class KeyProperty extends Property {
    static readonly CARDINALITY: Cardinality = '*'; // One or more instances per vCard MAY be present.

    static readonly DEFAULT_VALUE_TYPE: Value = 'uri';

    group: Group;

    parameters: KeyParameters = {};

    [VALUE]: string;

    constructor(value: string, parameters: KeyParameters = {}, { group = '' }: Options = {}) {
        super();

        if (!isString(value))
            throw new TypeError(`The value "${value}" is not a string type`);

        if (!isValidGroup(group))
            throw new TypeError(`The group "${group}" is not a string or integer`);

        KeyProperty.validateParameters(parameters);

        this.group = group;
        this.parameters = parameters;
        this[VALUE] = value;
    }

    valueOf(): string {
        return this[VALUE];
    }

    static from(value: KeyConfig): KeyProperty {
        if (value instanceof KeyProperty) return value;

        if (Array.isArray(value)) return new KeyProperty(...value);

        if (isString(value)) return new KeyProperty(value);

        throw new TypeError(`The value "${value}" is not a KeyConfig type`);
    }

    static validateParameters(parameters: KeyParameters): void {
        const { mediatype, pid, pref, propId, value } = parameters as Record<string, unknown>;

        if (mediatype && isString(value) && value.toLowerCase() !== 'uri') {
            throw new TypeError(getInvalidMediatypeValueParameterMessage({ value }));
        }

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
