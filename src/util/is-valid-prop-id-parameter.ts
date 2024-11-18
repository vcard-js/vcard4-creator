import type { PropId } from '../types.js';
import isString from './is-string.js';

/**
 * > Purpose:  Identifies a property among all its siblings of the same
 * >    property name.
 * >
 * > Description:  This parameter uniquely identifies a property among all
 * >    of its siblings with the same name within a vCard. A valid PROP-ID
 * >    value must be of 1 and a maximum of 255 octets in size, and it
 * >    MUST only contain the ASCII alphanumeric characters ("A-Za-z0-9"),
 * >    hyphen (-), and underscore ("_"). The identifier's only purpose is
 * >    to uniquely identify siblings; its value has no other meaning. If
 * >    an application makes use of PROP-ID, it SHOULD assign a unique
 * >    identifier to each sibling property of the same name within their
 * >    embedding component. The same identifier MAY be used for
 * >    properties of a different name, and it MAY also be assigned to a
 * >    same-named property that is not a sibling.
 * >
 * >    Resolving duplicate identifier conflicts is specific to the
 * >    application. Similarly, handling properties where some but not all
 * >    siblings have a PROP-ID assigned is application-specific.
 * >
 * > Format definition:  prop-id-param  = "PROP-ID" "=" 1*255(ALPHA / DIGIT / "-"/ "_")
 * >
 * > Example(s):  PHOTO;PROP-ID=p827:data:image/jpeg;base64,MIICajCCAdOgAwIBAg
 * >                      <...remainder of base64-encoded data...>
 *
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9554/#section-4.7 RFC 9554 - vCard Format Extensions for JSContact § PROP-ID}
 */
export default function isValidPropIdParameter(value: unknown): value is PropId {
    if (!(isString(value) || Number.isInteger(value))) return false;

    return /^[A-Za-z0-9\-_]{1,255}$/.test(String(value));
}
