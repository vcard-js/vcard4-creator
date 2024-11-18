import type { IntRange } from 'type-fest';

export type Altid = number | string;
export type Calscale = 'gregorian';
export type Cardinality = '1' | '*1' | '1*' | '*';
export type CommonParameters = {
    author?: string;
    authorName?: string;
    created?: string;
    derived?: boolean;
};
export type Cc = `${UppercaseAlpha}${UppercaseAlpha}`;
export type Group = number | string;
export type HobbyOrInterestLevel = 'low' | 'medium' | 'high';
export type Pid = number | number[];
export type PrefInclusiveFrom = 1;
export type PrefExclusiveTo = 101;
export type Pref = IntRange<PrefInclusiveFrom, PrefExclusiveTo>;
export type PropId = number | string;
export type Type = 'home' | 'work';
export type UppercaseAlpha = 'A'
    | 'B'
    | 'C'
    | 'D'
    | 'E'
    | 'F'
    | 'G'
    | 'H'
    | 'I'
    | 'J'
    | 'K'
    | 'L'
    | 'M'
    | 'N'
    | 'O'
    | 'P'
    | 'Q'
    | 'R'
    | 'S'
    | 'T'
    | 'U'
    | 'V'
    | 'W'
    | 'X'
    | 'Y'
    | 'Z';
export type Value = 'boolean'
    | 'date'
    | 'date-and-or-time'
    | 'date-time'
    | 'float'
    | 'integer'
    | 'language-tag'
    | 'text'
    | 'time'
    | 'timestamp'
    | 'uri'
    | 'utc-offset';

export interface Options {
    group?: Group;
}
