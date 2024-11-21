import { Cardinality, Group, Options, Value } from '../types.js';
import isString from '../util/is-string.js';
import isValidGroup from '../util/is-valid-group.js';
import Property from './Property.js';

export type CreatedParameters = {
    value?: Extract<Value, 'timestamp'>;
};

export type CreatedRestConfig = [value: string, parameters?: CreatedParameters, options?: Options];

export type CreatedConfig = CreatedProperty | CreatedRestConfig | string;

const VALUE: unique symbol = Symbol.for('value');

/**
 * > Purpose:  Defines the date and time when the vCard was created.
 * >
 * > Value type:  A single timestamp value.
 * >
 * > Cardinality:  *1
 * >
 * > Property parameters:  VALUE
 * >
 * > Description:  This is the timestamp when the vCard was created. Copying the vCard across systems does not
 * >    count as a new creation nor a new revision. Instead, the timestamp value typically stays unchanged for the
 * >    existence of the vCard.
 * >
 * > Format definition:
 * >    created      = "CREATED" createdparam ":" timestamp
 * >
 * >    createdparam = *(
 * >                    ;
 * >                    ; The following are OPTIONAL
 * >                    ; but MUST NOT occur more than once.
 * >                    ;
 * >                    (";" "VALUE" "=" "timestamp") /
 * >                    ;
 * >                    (";" any-param)
 * >                    ;
 * >                    )
 * >
 * > Example(s):
 * >    CREATED:20220705T093412Z
 * >    CREATED;VALUE=TIMESTAMP:20211022T140000-05
 *
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9554/#section-3.1 RFC 9554 - vCard Format Extensions for JSContact § CREATED}
 */
export default class CreatedProperty extends Property {
    static readonly CARDINALITY: Cardinality = '*1'; // Exactly one instance per vCard MAY be present.

    static readonly DEFAULT_VALUE_TYPE: Value = 'timestamp';

    group: Group;

    parameters: CreatedParameters = {};

    [VALUE]: string;

    constructor(value: string, parameters: CreatedParameters = {}, { group = '' }: Options = {}) {
        super();

        if (!isString(value))
            throw new TypeError(`The value "${value}" is not a string type`);

        if (!isValidGroup(group))
            throw new TypeError(`The group "${group}" is not a string or integer`);

        this.group = group;
        this.parameters = parameters;
        this[VALUE] = value;
    }

    valueOf(): string {
        return this[VALUE];
    }

    static from(value: CreatedConfig): CreatedProperty {
        if (value instanceof CreatedProperty) return value;

        if (Array.isArray(value)) return new CreatedProperty(...value);

        if (isString(value)) return new CreatedProperty(value);

        throw new TypeError(`The value "${value}" is not a CreatedConfig type`);
    }
}
