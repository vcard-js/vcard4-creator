import type { Altid, Cardinality, CommonParameters, Group, Options, Pid, Pref, PropId, Value } from '../types.js';
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

export type SourceParameters = {
    value?: Extract<Value, 'uri'>;
    pid?: Pid;
    pref?: Pref;
    altid?: Altid;
    mediatype?: string;
    propId?: PropId;
} & CommonParameters;

export type SourceRestConfig = [value: string, parameters?: SourceParameters, options?: Options];

/** Add URL type support. */
export type SourceConfig = SourceProperty | SourceRestConfig | string;

const VALUE: unique symbol = Symbol.for('value');

/**
 * > Purpose:  To identify the source of directory information contained
 * >   in the content type.
 * >
 * > Value type:  uri
 * >
 * > Special notes:  The SOURCE property is used to provide the means by
 * >   which applications knowledgable in the given directory service
 * >   protocol can obtain additional or more up-to-date information from
 * >   the directory service. It contains a URI as defined in [RFC3986]
 * >   and/or other information referencing the vCard to which the
 * >   information pertains.  When directory information is available
 * >   from more than one source, the sending entity can pick what it
 * >   considers to be the best source, or multiple SOURCE properties can
 * >   be included.
 * >
 * > ABNF:
 * >   SOURCE-param = "VALUE=uri" / pid-param / pref-param / altid-param
 * >                / mediatype-param / any-param
 * >   SOURCE-value = URI
 * >
 * > Examples:
 * >   SOURCE:ldap://ldap.example.com/cn=Babs%20Jensen\,%20o=Babsco\,%20c=US
 * >
 * >   SOURCE:http://directory.example.com/addressbooks/jdoe/
 * >    Jean%20Dupont.vcf
 *
 * @see {@link https://datatracker.ietf.org/doc/html/rfc6350#section-6.1.3 RFC 6350 - vCard Format Specification § SOURCE}
 */
export default class SourceProperty extends Property {
    static readonly CARDINALITY: Cardinality = '*'; // One or more instances per vCard MAY be present.

    static readonly DEFAULT_VALUE_TYPE: Value = 'uri';

    group: Group;

    parameters: SourceParameters = {};

    [VALUE]: string;

    constructor(value: string, parameters: SourceParameters = {}, { group = '' }: Options = {}) {
        super();

        if (!isString(value))
            throw new TypeError(`The value "${value}" is not a string type`);

        if (!isValidGroup(group))
            throw new TypeError(`The group "${group}" is not a string or integer`);

        SourceProperty.validateParameters(parameters);

        this.group = group;
        this.parameters = parameters;
        this[VALUE] = value;
    }

    valueOf(): string {
        return this[VALUE];
    }

    static from(value: SourceConfig): SourceProperty {
        if (value instanceof SourceProperty) return value;

        if (Array.isArray(value)) return new SourceProperty(...value);

        if (isString(value)) return new SourceProperty(value);

        throw new TypeError(`The value "${value}" is not a SourceConfig type`);
    }

    static validateParameters({ pid, pref, propId }: SourceParameters): void {
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
