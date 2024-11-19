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

export type TitleParameters = {
    value?: Extract<Value, 'text'>;
    pid?: Pid;
    pref?: Pref;
    altid?: Altid;
    mediatype?: string;
    propId?: PropId;
} & CommonParameters;

export type TitleRestConfig = [value: string, parameters?: TitleParameters, options?: Options];

export type TitleConfig = TitleProperty | TitleRestConfig | string;

const VALUE: unique symbol = Symbol.for('value');

/**
 * > Purpose:  To specify the position or job of the object the vCard
 * >   represents.
 * >
 * > Value type:  A single text value.
 * >
 * > Special notes:  This property is based on the X.520 Title attribute
 * >   [CCITT.X520.1988].
 * >
 * > ABNF:
 * >   TITLE-param = "VALUE=text" / language-param / pid-param
 * >               / pref-param / altid-param / type-param / any-param
 * >   TITLE-value = text
 * >
 * > Example:
 * >   TITLE:Research Scientist
 *
 * @see {@link https://datatracker.ietf.org/doc/html/rfc6350#section-6.6.1 RFC 6350 - vCard Format Specification § TITLE}
 */
export default class TitleProperty extends Property {
    static readonly CARDINALITY: Cardinality = '*'; // One or more instances per vCard MAY be present.

    static readonly DEFAULT_VALUE_TYPE: Value = 'text';

    group: Group;

    parameters: TitleParameters = {};

    [VALUE]: string;

    constructor(value: string, parameters: TitleParameters = {}, { group = '' }: Options = {}) {
        super();

        if (!isString(value))
            throw new TypeError(`The value "${value}" is not a string type`);

        if (!isValidGroup(group))
            throw new TypeError(`The group "${group}" is not a string or integer`);

        TitleProperty.validateParameters(parameters);

        this.group = group;
        this.parameters = parameters;
        this[VALUE] = value;
    }

    valueOf(): string {
        return this[VALUE];
    }

    static from(value: TitleConfig): TitleProperty {
        if (value instanceof TitleProperty) return value;

        if (Array.isArray(value)) return new TitleProperty(...value);

        if (isString(value)) return new TitleProperty(value);

        throw new TypeError(`The value "${value}" is not a TitleConfig type`);
    }

    static validateParameters({ pid, pref, propId }: TitleParameters): void {
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
