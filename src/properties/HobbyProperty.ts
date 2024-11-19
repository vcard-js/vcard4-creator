import type {
    Altid,
    Cardinality,
    CommonParameters,
    Group,
    HobbyOrInterestLevel,
    Options,
    Pref,
    PropId,
    Type,
    Value
} from '../types.js';
import {
    getInvalidIndexParameterMessage,
    getInvalidPrefParameterMessage,
    getInvalidPropIdParameterMessage
} from '../util/error-messages.js';
import isString from '../util/is-string.js';
import isValidGroup from '../util/is-valid-group.js';
import isValidIndexParameter from '../util/is-valid-index-parameter.js';
import isValidPrefParameter from '../util/is-valid-pref-parameter.js';
import isValidPropIdParameter from '../util/is-valid-prop-id-parameter.js';
import Property from './Property.js';

export type HobbyParameters = {
    level?: HobbyOrInterestLevel;
    index?: number; // > INDEX values must be strictly positive. Zero is not allowed. _(integer)_
    altid?: Altid;
    language?: string;
    pref?: Pref;
    type?: Type;
    propId?: PropId;
} & CommonParameters;

export type HobbyRestConfig = [value: string, parameters?: HobbyParameters, options?: Options];

export type HobbyConfig = HobbyProperty | HobbyRestConfig | string;

const VALUE: unique symbol = Symbol.for('value');

/**
 * > Purpose:  To specify the hobbies of the object to which the vCard
 * >           refers.
 * >
 * > Value type:  A single text value.
 * >
 * > Description: This is intended to be a free-form naming of hobbies,
 * >              meant for human consumption, and no specific hobbies
 * >              are defined. See the note at the beginning of
 * >              Section 2.
 * >
 * >              A hobby, as opposed to an interest (see Section 2.3),
 * >              is an activity that one actively engages in for
 * >              entertainment, intellectual stimulation, creative
 * >              expression, or the like.
 * >
 * >    * "Art" might be a hobby if one actively sculpts or paints.
 * >
 * >    * "Tennis" might be a hobby if one enjoys playing, rather than
 * >      just watching, matches.
 * >
 * > Format definition:
 * >   HOBBY-param = LEVEL-param / INDEX-param / language-param /
 * >                 pref-param / altid-param / type-param / any-param
 * >
 * >   HOBBY-value = text
 * >
 * > Examples:
 * >   HOBBY;INDEX=1;LEVEL=high:reading
 * >   HOBBY;INDEX=2;LEVEL=high:sewing
 *
 * @see {@link https://datatracker.ietf.org/doc/html/rfc6715#section-2.2 RFC 6715 - vCard Format Extensions: Representing vCard Extensions Defined by the Open Mobile Alliance (OMA) Converged Address Book (CAB) Group § Property: HOBBY}
 */
export default class HobbyProperty extends Property {
    static readonly CARDINALITY: Cardinality = '*'; // One or more instances per vCard MAY be present.

    static readonly DEFAULT_VALUE_TYPE: Value = 'text';

    group: Group;

    parameters: HobbyParameters = {};

    [VALUE]: string;

    constructor(value: string, parameters: HobbyParameters = {}, { group = '' }: Options = {}) {
        super();

        if (!isString(value))
            throw new TypeError(`The value "${value}" is not a string type`);

        if (!isValidGroup(group))
            throw new TypeError(`The group "${group}" is not a string or integer`);

        HobbyProperty.validateParameters(parameters);

        this.group = group;
        this.parameters = parameters;
        this[VALUE] = value;
    }

    valueOf(): string {
        return this[VALUE];
    }

    static from(value: HobbyConfig): HobbyProperty {
        if (value instanceof HobbyProperty) return value;

        if (Array.isArray(value)) return new HobbyProperty(...value);

        if (isString(value)) return new HobbyProperty(value);

        throw new TypeError(`The value "${value}" is not a HobbyConfig type`);
    }

    static validateParameters({ index, pref, propId }: HobbyParameters): void {
        if (index && !isValidIndexParameter(index)) {
            throw new TypeError(getInvalidIndexParameterMessage({ index }));
        }

        if (pref !== undefined && !isValidPrefParameter(pref)) {
            throw new TypeError(getInvalidPrefParameterMessage({ pref }));
        }

        if (propId !== undefined && !isValidPropIdParameter(propId)) {
            throw new TypeError(getInvalidPropIdParameterMessage({ propId }));
        }
    }
}
