export function getInvalidCalscaleValueParameterMessage({ value }: { value: any }): string {
    return 'The CALSCALE parameter is only valid for "date-and-or-time" value types. ' +
        `The value type of "${value}" was provided`;
}

export function getInvalidCcParameterMessage({ cc }: { cc: unknown }): string {
    return 'The CC parameter must be a two alpha character uppercase string and should be an ISO 3166 two-letter ' +
        `code. The value "${cc}" was provided`;
}

export function getInvalidIndexParameterMessage({ index }: { index: any }): string {
    return `The INDEX parameter must be a positive non-zero integer. The value ${index} was provided`;
}

export function getInvalidLanguageValueParameterMessage({ value }: { value: any }): string {
    return `The LANGUAGE parameter is only valid for "text" value types. The value type of "${value}" was provided`;
}

export function getInvalidMediatypeValueParameterMessage({ value }: { value: any }): string {
    return `The MEDIATYPE parameter is only valid for "uri" value types. The value type of "${value}" was provided`;
}

export function getInvalidPidParameterMessage({ pid }: { pid: unknown }): string {
    return 'The PID parameter must be an integer consisting of one digit, a float consisting of one digit on both ' +
        `sides of the decimal point, or an array containing the aforementioned number formats. The value "${pid}" ` +
        'was provided';
}

export function getInvalidPrefParameterMessage({ pref }: { pref: any }): string {
    return `The PREF parameter must be an integer between 1 and 100. The value ${pref} was provided`;
}

export function getInvalidPropIdParameterMessage({ propId }: { propId: unknown }): string {
    return 'The PROP-ID parameter must be a string of size 1 to 255 octets and consisting of the letters A-Z (any ' +
        `case), the integers 0-9, a hyphen (-), or an underscore (_). The value "${propId}" was provided`;
}

export function getInvalidScriptParameterMessage({ script }: { script: unknown }): string {
    return 'The SCRIPT parameter must be a 4 alpha character string and be a script subtag as defined in RFC 5646. ' +
        `The value "${script}" was provided`;
}
