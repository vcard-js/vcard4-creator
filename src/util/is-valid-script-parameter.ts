import isString from './is-string.js';

/**
 * > Purpose:  Defines the script that a property value is written in.
 * >
 * > Description:  This parameter allows defining a script for a property value without also defining a language as
 * >    the LANGUAGE parameter would. The value MUST be a script subtag as defined in Section 2.2.3 of
 * >    [RFC5646]. This specification makes use of the SCRIPT parameter in combination with the PHONETIC
 * >    (Section 4.6) parameter.
 * >
 * > Format definition:
 * >    script-param = 4ALPHA
 * >
 * > Example(s):
 * >    SCRIPT=Latn
 *
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9554/#section-4.8 RFC 9554 - vCard Format Extensions for JSContact § SCRIPT}
 */
export default function isValidScriptParameter(value: unknown): value is string {
    if (!isString(value)) return false;

    return /^[A-Za-z]{4}$/.test(value);
}
