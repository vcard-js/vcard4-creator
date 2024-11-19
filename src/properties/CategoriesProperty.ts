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

export type CategoriesParameters = {
    value?: Extract<Value, 'text'>;
    pid?: Pid;
    pref?: Pref;
    type?: Type;
    altid?: Altid;
    propId?: PropId;
} & CommonParameters;

export type CategoriesRestConfig = [value: string, parameters?: CategoriesParameters, options?: Options];

export type CategoriesConfig = CategoriesProperty | CategoriesRestConfig | string | string[];

const VALUE: unique symbol = Symbol.for('value');

/**
 * > Purpose:  To specify application category information about the
 * >   vCard, also known as "tags".
 * >
 * > Value type:  One or more text values separated by a COMMA character
 * >   (U+002C).
 * >
 * > ABNF:
 * >   CATEGORIES-param = "VALUE=text" / pid-param / pref-param
 * >                    / type-param / altid-param / any-param
 * >   CATEGORIES-value = text-list
 * >
 * > Example:
 * >   CATEGORIES:TRAVEL AGENT
 * >   CATEGORIES:INTERNET,IETF,INDUSTRY,INFORMATION TECHNOLOGY
 *
 * @see {@link https://datatracker.ietf.org/doc/html/rfc6350#section-6.7.1 RFC 6350 - vCard Format Specification § CATEGORIES}
 */
export default class CategoriesProperty extends Property {
    static readonly CARDINALITY: Cardinality = '*'; // One or more instances per vCard MAY be present.

    static readonly DEFAULT_VALUE_TYPE: Value = 'text';

    group: Group;

    parameters: CategoriesParameters = {};

    [VALUE]: string;

    constructor(value: string, parameters: CategoriesParameters = {}, { group = '' }: Options = {}) {
        super();

        if (!isString(value))
            throw new TypeError(`The value "${value}" is not a string type`);

        if (!isValidGroup(group))
            throw new TypeError(`The group "${group}" is not a string or integer`);

        CategoriesProperty.validateParameters(parameters);

        this.group = group;
        this.parameters = parameters;
        this[VALUE] = value;
    }

    valueOf(): string {
        return this[VALUE];
    }

    static from(value: CategoriesConfig): CategoriesProperty {
        if (value instanceof CategoriesProperty) return value;

        if (Array.isArray(value) && value.every(isString)) return new CategoriesProperty(value.join(','));

        if (Array.isArray(value)) return new CategoriesProperty(...value as CategoriesRestConfig);

        if (isString(value)) return new CategoriesProperty(value);

        throw new TypeError(`The value "${value}" is not a CategoriesConfig type`);
    }

    static validateParameters({ pid, pref, propId }: CategoriesParameters): void {
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
