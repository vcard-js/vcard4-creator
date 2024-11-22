import GramgenderProperty, { type GramgenderConfig } from '../GramgenderProperty.js';

export default class GramgenderPropertyArray extends Array {
    push(...items: GramgenderConfig[]): number {
        items.forEach(item => super.push(GramgenderProperty.from(item)));

        return this.length;
    }
}
