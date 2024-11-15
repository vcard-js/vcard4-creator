import type { Altid, Cardinality, CommonParameters, Group, Options, Pid, Pref, Type, Value } from '../types.js';
import { getInvalidPidParameterMessage, getInvalidPrefParameterMessage } from '../util/error-messages.js';
import isString from '../util/is-string.js';
import isValidGroup from '../util/is-valid-group.js';
import isValidPidParameter from '../util/is-valid-pid-parameter.js';
import isValidPrefParameter from '../util/is-valid-pref-parameter.js';
import Property from './Property.js';

export type PhotoParameters = {
    value?: Extract<Value, 'uri'>;
    altid?: Altid;
    type?: Type;
    mediatype?: string;
    pref?: Pref;
    pid?: Pid;
} & CommonParameters;

export type PhotoRestConfig = [value: string, parameters?: PhotoParameters, options?: Options];

/** @todo Add URL type support. */
export type PhotoConfig = PhotoProperty | PhotoRestConfig | string;

const VALUE: unique symbol = Symbol.for('value');

/**
 * > Purpose:  To specify an image or photograph information that
 * >   annotates some aspect of the object the vCard represents.
 * >
 * > Value type:  A single URI.
 * >
 * > ABNF:
 * >   PHOTO-param = "VALUE=uri" / altid-param / type-param
 * >               / mediatype-param / pref-param / pid-param / any-param
 * >   PHOTO-value = URI
 * >
 * > Examples:
 * >   PHOTO:http://www.example.com/pub/photos/jqpublic.gif
 * >   PHOTO:data:image/jpeg;base64,MIICajCCAdOgAwIBAgICBEUwDQYJKoZIhv
 * >    AQEEBQAwdzELMAkGA1UEBhMCVVMxLDAqBgNVBAoTI05ldHNjYXBlIENvbW11bm
 * >    ljYXRpb25zIENvcnBvcmF0aW9uMRwwGgYDVQQLExNJbmZvcm1hdGlvbiBTeXN0
 * >    <...remainder of base64-encoded data...>
 *
 * @see {@link https://datatracker.ietf.org/doc/html/rfc6350#section-6.2.4 RFC 6350 - vCard Format Specification § PHOTO}
 */
export default class PhotoProperty extends Property {
    static readonly CARDINALITY: Cardinality = '*'; // One or more instances per vCard MAY be present.

    static readonly DEFAULT_VALUE_TYPE: Value = 'uri';

    group: Group;

    parameters: PhotoParameters = {};

    [VALUE]: string;

    constructor(value: string, parameters: PhotoParameters = {}, { group = '' }: Options = {}) {
        super();

        if (!isString(value))
            throw new TypeError(`The value "${value}" is not a string type`);

        if (!isValidGroup(group))
            throw new TypeError(`The group "${group}" is not a string or integer`);

        PhotoProperty.validateParameters(parameters);
        this.validate(value);

        this.group = group;
        this.parameters = parameters;
        this[VALUE] = value;
    }

    valueOf(): string {
        return this[VALUE];
    }

    validate(value: string): void {
        try {
            new URL(value);
        } catch (_) {
            throw new TypeError(`The value "${value}" is not a valid PHOTO format`);
        }
    }

    static from(value: PhotoConfig): PhotoProperty {
        if (value instanceof PhotoProperty) return value;

        if (Array.isArray(value)) return new PhotoProperty(...value);

        if (isString(value)) return new PhotoProperty(value);

        throw new TypeError(`The value "${value}" is not a PhotoConfig type`);
    }

    static validateParameters({ pid, pref }: PhotoParameters): void {
        if (pid !== undefined && !isValidPidParameter(pid)) {
            throw new TypeError(getInvalidPidParameterMessage({ pid }));
        }

        if (pref && !isValidPrefParameter(pref)) {
            throw new TypeError(getInvalidPrefParameterMessage({ pref }));
        }
    }
}
