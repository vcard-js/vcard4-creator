import AdrProperty, {
    type AdrConfig, type AdrParameters, type AdrRestConfig, type AdrType
} from './properties/AdrProperty.js';
import AnniversaryProperty, {
    type AnniversaryCommonParameters,
    type AnniversaryConfig,
    type AnniversaryDateAndOrTimeOrUndefinedValueParameters,
    type AnniversaryParameters,
    type AnniversaryRestConfig,
    type AnniversaryTextValueParameters
} from './properties/AnniversaryProperty.js';
import AdrPropertyArray from './properties/arrays/AdrPropertyArray.js';
import CaladruriPropertyArray from './properties/arrays/CaladruriPropertyArray.js';
import CaluriPropertyArray from './properties/arrays/CaluriPropertyArray.js';
import CategoriesPropertyArray from './properties/arrays/CategoriesPropertyArray.js';
import ClientpidmapPropertyArray from './properties/arrays/ClientpidmapPropertyArray.js';
import ContactUriPropertyArray from './properties/arrays/ContactUriPropertyArray.js';
import EmailPropertyArray from './properties/arrays/EmailPropertyArray.js';
import ExpertisePropertyArray from './properties/arrays/ExpertisePropertyArray.js';
import FburlPropertyArray from './properties/arrays/FburlPropertyArray.js';
import FnPropertyArray from './properties/arrays/FnPropertyArray.js';
import GeoPropertyArray from './properties/arrays/GeoPropertyArray.js';
import GramgenderPropertyArray from './properties/arrays/GramgenderPropertyArray.js';
import HobbyPropertyArray from './properties/arrays/HobbyPropertyArray.js';
import ImppPropertyArray from './properties/arrays/ImppPropertyArray.js';
import InterestPropertyArray from './properties/arrays/InterestPropertyArray.js';
import KeyPropertyArray from './properties/arrays/KeyPropertyArray.js';
import LangPropertyArray from './properties/arrays/LangPropertyArray.js';
import LogoPropertyArray from './properties/arrays/LogoPropertyArray.js';
import MemberPropertyArray from './properties/arrays/MemberPropertyArray.js';
import NicknamePropertyArray from './properties/arrays/NicknamePropertyArray.js';
import NotePropertyArray from './properties/arrays/NotePropertyArray.js';
import OrgDirectoryPropertyArray from './properties/arrays/OrgDirectoryPropertyArray.js';
import OrgPropertyArray from './properties/arrays/OrgPropertyArray.js';
import PhotoPropertyArray from './properties/arrays/PhotoPropertyArray.js';
import RelatedPropertyArray from './properties/arrays/RelatedPropertyArray.js';
import RolePropertyArray from './properties/arrays/RolePropertyArray.js';
import SoundPropertyArray from './properties/arrays/SoundPropertyArray.js';
import SourcePropertyArray from './properties/arrays/SourcePropertyArray.js';
import TelPropertyArray from './properties/arrays/TelPropertyArray.js';
import TitlePropertyArray from './properties/arrays/TitlePropertyArray.js';
import TzPropertyArray from './properties/arrays/TzPropertyArray.js';
import UrlPropertyArray from './properties/arrays/UrlPropertyArray.js';
import XmlPropertyArray from './properties/arrays/XmlPropertyArray.js';
import BdayProperty, {
    type BdayCommonParameters,
    type BdayConfig,
    type BdayDateAndOrTimeOrUndefinedValueParameters,
    type BdayParameters,
    type BdayRestConfig,
    type BdayTextValueParameters
} from './properties/BdayProperty.js';
import BirthplaceProperty, {
    type BirthplaceConfig, type BirthplaceParameters, type BirthplaceRestConfig
} from './properties/BirthplaceProperty.js';
import CaladruriProperty, {
    type CaladruriConfig, type CaladruriParameters, type CaladruriRestConfig
} from './properties/CaladruriProperty.js';
import CaluriProperty, {
    type CaluriConfig, type CaluriParameters, type CaluriRestConfig
} from './properties/CaluriProperty.js';
import CategoriesProperty, {
    type CategoriesConfig, type CategoriesParameters, type CategoriesRestConfig
} from './properties/CategoriesProperty.js';
import ClientpidmapProperty, {
    type ClientpidmapConfig, type ClientpidmapParameters, type ClientpidmapRestConfig
} from './properties/ClientpidmapProperty.js';
import ContactUriProperty, {
    type ContactUriConfig, type ContactUriParameters, type ContactUriRestConfig
} from './properties/ContactUriProperty.js';
import CreatedProperty, {
    type CreatedConfig, type CreatedParameters, type CreatedRestConfig
} from './properties/CreatedProperty.js';
import DeathdateProperty, {
    type DeathdateCommonParameters,
    type DeathdateConfig,
    type DeathdateDateAndOrTimeOrUndefinedValueParameters,
    type DeathdateParameters,
    type DeathdateRestConfig,
    type DeathdateTextValueParameters
} from './properties/DeathdateProperty.js';
import DeathplaceProperty, {
    type DeathplaceConfig, type DeathplaceParameters, type DeathplaceRestConfig
} from './properties/DeathplaceProperty.js';
import EmailProperty, {
    type EmailConfig, type EmailParameters, type EmailRestConfig
} from './properties/EmailProperty.js';
import ExpertiseProperty, {
    type ExpertiseConfig, type ExpertiseLevel, type ExpertiseParameters, type ExpertiseRestConfig
} from './properties/ExpertiseProperty.js';
import FburlProperty, {
    type FburlConfig, type FburlParameters, type FburlRestConfig
} from './properties/FburlProperty.js';
import FnProperty, { type FnConfig, type FnParameters, type FnRestConfig } from './properties/FnProperty.js';
import GenderProperty, {
    type GenderConfig, type GenderParameters, type GenderRestConfig, type Sex
} from './properties/GenderProperty.js';
import GeoProperty, { type GeoConfig, type GeoParameters, type GeoRestConfig } from './properties/GeoProperty.js';
import GramgenderProperty, {
    type Gramgender, type GramgenderConfig, type GramgenderParameters, type GramgenderRestConfig
} from './properties/GramgenderProperty.js';
import HobbyProperty, {
    type HobbyConfig, type HobbyParameters, type HobbyRestConfig
} from './properties/HobbyProperty.js';
import ImppProperty, { type ImppConfig, type ImppParameters, type ImppRestConfig } from './properties/ImppProperty.js';
import InterestProperty, {
    type InterestConfig, type InterestParameters, type InterestRestConfig
} from './properties/InterestProperty.js';
import KeyProperty, {
    type KeyCommonParameters,
    type KeyConfig,
    type KeyParameters,
    type KeyRestConfig,
    type KeyTextValueParameters,
    type KeyUriOrUndefinedValueParameters
} from './properties/KeyProperty.js';
import KindProperty, {
    type Kind, KindConfig, type KindParameters, type KindRestConfig
} from './properties/KindProperty.js';
import LangProperty, { type LangConfig, type LangParameters, type LangRestConfig } from './properties/LangProperty.js';
import LanguageProperty, {
    type LanguageConfig, type LanguageParameters, type LanguageRestConfig
} from './properties/LanguageProperty.js';
import LogoProperty, { type LogoConfig, type LogoParameters, type LogoRestConfig } from './properties/LogoProperty.js';
import MemberProperty, {
    type MemberConfig, type MemberParameters, type MemberRestConfig
} from './properties/MemberProperty.js';
import NicknameProperty, {
    type NicknameConfig, type NicknameParameters, type NicknameRestConfig
} from './properties/NicknameProperty.js';
import NoteProperty, { type NoteConfig, type NoteParameters, type NoteRestConfig } from './properties/NoteProperty.js';
import NProperty, { type NConfig, type NParameters, type NRestConfig } from './properties/NProperty.js';
import NullProperty from './properties/NullProperty.js';
import OrgDirectoryProperty, {
    type OrgDirectoryConfig, type OrgDirectoryParameters, type OrgDirectoryRestConfig
} from './properties/OrgDirectoryProperty.js';
import OrgProperty, { type OrgConfig, type OrgParameters, type OrgRestConfig } from './properties/OrgProperty.js';
import PhotoProperty, {
    type PhotoConfig, type PhotoParameters, type PhotoRestConfig
} from './properties/PhotoProperty.js';
import ProdidProperty, {
    type ProdidConfig, type ProdidParameters, type ProdidRestConfig
} from './properties/ProdidProperty.js';
import Property from './properties/Property.js';
import RelatedProperty, {
    type RelatedCommonParameters,
    type RelatedConfig,
    type RelatedParameters,
    type RelatedRestConfig,
    type RelatedTextValueParameters,
    type RelatedType,
    type RelatedUriOrUndefinedValueParameters
} from './properties/RelatedProperty.js';
import RevProperty, { type RevConfig, type RevParameters, type RevRestConfig } from './properties/RevProperty.js';
import RoleProperty, {
    type RoleConfig, type RoleParameters, type RoleRestConfig
} from './properties/RoleProperty.js';
import SoundProperty, {
    type SoundConfig, type SoundParameters, type SoundRestConfig
} from './properties/SoundProperty.js';
import SourceProperty, {
    type SourceConfig, type SourceParameters, type SourceRestConfig
} from './properties/SourceProperty.js';
import TelProperty, {
    type TelCommonParameters,
    type TelConfig,
    type TelParameters,
    type TelRestConfig,
    type TelTextOrUndefinedValueParameters,
    type TelType,
    type TelUriValueParameters
} from './properties/TelProperty.js';
import TitleProperty, {
    type TitleConfig, type TitleParameters, type TitleRestConfig
} from './properties/TitleProperty.js';
import TzProperty, {
    type TzCommonParameters,
    type TzConfig,
    type TzParameters,
    type TzRestConfig,
    type TzTextOrUtcOffsetOrUndefinedValueParameters,
    type TzUriValueParameters
} from './properties/TzProperty.js';
import UidProperty, { type UidConfig, type UidParameters, type UidRestConfig } from './properties/UidProperty.js';
import UrlProperty, { type UrlConfig, type UrlParameters, type UrlRestConfig } from './properties/UrlProperty.js';
import VersionProperty, {
    type VersionConfig, type VersionParameters, type VersionRestConfig
} from './properties/VersionProperty.js';
import XmlProperty, { type XmlConfig, XmlParameters, XmlRestConfig } from './properties/XmlProperty.js';
import isNotEmptyString from './util/is-not-empty-string.js';
import toString from './util/to-string.js';
import { EOL } from '@vcard/vcard4-meta';

export interface Vcard4GeneratorConfig {
    adr?: AdrConfig;
    anniversary?: AnniversaryConfig;
    bday?: BdayConfig;
    birthplace?: BirthplaceConfig;
    caluri?: CaluriConfig;
    caladruri?: CaladruriConfig;
    categories?: CategoriesConfig;
    clientpidmap?: ClientpidmapConfig;
    contactUri?: ContactUriConfig;
    created?: CreatedConfig;
    deathdate?: DeathdateConfig;
    deathplace?: DeathplaceConfig;
    email?: EmailConfig;
    expertise?: ExpertiseConfig;
    fburl?: FburlConfig;
    fn: FnConfig;
    gender?: GenderConfig;
    geo?: GeoConfig;
    gramgender?: GramgenderConfig;
    hobby?: HobbyConfig;
    impp?: ImppConfig;
    interest?: InterestConfig;
    key?: KeyConfig;
    kind?: KindConfig;
    lang?: LangConfig;
    language?: LanguageConfig;
    logo?: LogoConfig;
    member?: MemberConfig;
    n?: NConfig;
    nickname?: NicknameConfig;
    note?: NoteConfig;
    org?: OrgConfig;
    orgDirectory?: OrgDirectoryConfig;
    photo?: PhotoConfig;
    prodid?: ProdidConfig;
    related?: RelatedConfig;
    rev?: RevConfig;
    role?: RoleConfig;
    sound?: SoundConfig;
    source?: SourceConfig;
    tel?: TelConfig;
    title?: TitleConfig;
    tz?: TzConfig;
    uid?: UidConfig;
    url?: UrlConfig;
    version?: VersionProperty;
    xml?: XmlConfig;
}

export default class Vcard4Generator {
    adr: AdrPropertyArray;

    anniversary: AnniversaryProperty | NullProperty;

    bday: BdayProperty | NullProperty;

    birthplace: BirthplaceProperty | NullProperty;

    caluri: CaluriPropertyArray;

    caladruri: CaladruriPropertyArray;

    categories: CategoriesPropertyArray;

    clientpidmap: ClientpidmapPropertyArray;

    contactUri: ContactUriPropertyArray;

    created: CreatedProperty | NullProperty;

    deathdate: DeathdateProperty | NullProperty;

    deathplace: DeathplaceProperty | NullProperty;

    email: EmailPropertyArray;

    expertise: ExpertisePropertyArray;

    fburl: FburlPropertyArray;

    fn: FnPropertyArray;

    gender: GenderProperty | NullProperty;

    geo: GeoPropertyArray;

    gramgender: GramgenderPropertyArray;

    hobby: HobbyPropertyArray;

    impp: ImppPropertyArray;

    interest: InterestPropertyArray;

    key: KeyPropertyArray;

    kind: KindProperty | NullProperty;

    lang: LangPropertyArray;

    language: LanguageProperty | NullProperty;

    logo: LogoPropertyArray;

    member: MemberPropertyArray;

    n: NProperty | NullProperty;

    nickname: NicknamePropertyArray;

    note: NotePropertyArray;

    org: OrgPropertyArray;

    orgDirectory: OrgDirectoryPropertyArray;

    photo: PhotoPropertyArray;

    prodid: ProdidProperty | NullProperty;

    related: RelatedPropertyArray;

    rev: RevProperty | NullProperty;

    role: RolePropertyArray;

    sound: SoundPropertyArray;

    source: SourcePropertyArray;

    tel: TelPropertyArray;

    title: TitlePropertyArray;

    tz: TzPropertyArray;

    uid: UidProperty | NullProperty;

    url: UrlPropertyArray;

    version: VersionProperty;

    xml: XmlPropertyArray;

    constructor(config: Vcard4GeneratorConfig) {
        const {
            adr,
            anniversary,
            bday,
            birthplace,
            caluri,
            caladruri,
            categories,
            clientpidmap,
            contactUri,
            created,
            deathdate,
            deathplace,
            email,
            expertise,
            fburl,
            fn,
            gender,
            geo,
            gramgender,
            hobby,
            impp,
            interest,
            key,
            kind,
            lang,
            language,
            logo,
            member,
            n,
            nickname,
            note,
            org,
            orgDirectory,
            photo,
            prodid,
            related,
            rev,
            role,
            sound,
            source,
            tel,
            title,
            tz,
            uid,
            url,
            version,
            xml
        } = config;
        this.adr = new AdrPropertyArray();
        this.caluri = new CaluriPropertyArray();
        this.caladruri = new CaladruriPropertyArray();
        this.categories = new CategoriesPropertyArray();
        this.clientpidmap = new ClientpidmapPropertyArray();
        this.contactUri = new ContactUriPropertyArray();
        this.email = new EmailPropertyArray();
        this.expertise = new ExpertisePropertyArray();
        this.fburl = new FburlPropertyArray();
        this.fn = new FnPropertyArray();
        this.geo = new GeoPropertyArray();
        this.gramgender = new GramgenderPropertyArray();
        this.hobby = new HobbyPropertyArray();
        this.impp = new ImppPropertyArray();
        this.interest = new InterestPropertyArray();
        this.key = new KeyPropertyArray();
        this.lang = new LangPropertyArray();
        this.logo = new LogoPropertyArray();
        this.member = new MemberPropertyArray();
        this.nickname = new NicknamePropertyArray();
        this.note = new NotePropertyArray();
        this.org = new OrgPropertyArray();
        this.orgDirectory = new OrgDirectoryPropertyArray();
        this.photo = new PhotoPropertyArray();
        this.related = new RelatedPropertyArray();
        this.role = new RolePropertyArray();
        this.sound = new SoundPropertyArray();
        this.source = new SourcePropertyArray();
        this.tel = new TelPropertyArray();
        this.title = new TitlePropertyArray();
        this.tz = new TzPropertyArray();
        this.url = new UrlPropertyArray();
        this.xml = new XmlPropertyArray();
        adr && this.adr.push(adr);
        caluri && this.caluri.push(caluri);
        caladruri && this.caladruri.push(caladruri);
        categories && this.categories.push(categories);
        clientpidmap && this.clientpidmap.push(clientpidmap);
        contactUri && this.contactUri.push(contactUri);
        email && this.email.push(email);
        expertise && this.expertise.push(expertise);
        fburl && this.fburl.push(fburl);
        fn && this.fn.push(fn);
        geo && this.geo.push(geo);
        gramgender && this.gramgender.push(gramgender);
        hobby && this.hobby.push(hobby);
        impp && this.impp.push(impp);
        interest && this.interest.push(interest);
        key && this.key.push(key);
        lang && this.lang.push(lang);
        logo && this.logo.push(logo);
        member && this.member.push(member);
        nickname && this.nickname.push(nickname);
        note && this.note.push(note);
        org && this.org.push(org);
        orgDirectory && this.orgDirectory.push(orgDirectory);
        photo && this.photo.push(photo);
        related && this.related.push(related);
        role && this.role.push(role);
        sound && this.sound.push(sound);
        source && this.source.push(source);
        tel && this.tel.push(tel);
        title && this.title.push(title);
        tz && this.tz.push(tz);
        url && this.url.push(url);
        xml && this.xml.push(xml);
        this.anniversary = anniversary ? AnniversaryProperty.from(anniversary) : new NullProperty();
        this.bday = bday ? BdayProperty.from(bday) : new NullProperty();
        this.birthplace = birthplace ? BirthplaceProperty.from(birthplace) : new NullProperty();
        this.created = created ? CreatedProperty.from(created) : new NullProperty();
        this.deathdate = deathdate ? DeathdateProperty.from(deathdate) : new NullProperty();
        this.deathplace = deathplace ? DeathplaceProperty.from(deathplace) : new NullProperty();
        this.gender = gender ? GenderProperty.from(gender) : new NullProperty();
        this.kind = kind ? KindProperty.from(kind) : new NullProperty();
        this.language = language ? LanguageProperty.from(language) : new NullProperty();
        this.n = n ? NProperty.from(n) : new NullProperty();
        this.prodid = prodid ? ProdidProperty.from(prodid) : new NullProperty();
        this.rev = rev ? RevProperty.from(rev) : new NullProperty();
        this.uid = uid ? UidProperty.from(uid) : new NullProperty();
        this.version = version ? VersionProperty.from(version) : new VersionProperty();
    }

    toString(): string {
        const properties = [
            'BEGIN:VCARD',
            this.version.toString(),
            ...this.adr.map(toString),
            this.anniversary.toString(),
            this.bday.toString(),
            this.birthplace.toString(),
            ...this.caluri.map(toString),
            ...this.caladruri.map(toString),
            ...this.categories.map(toString),
            ...this.clientpidmap.map(toString),
            ...this.contactUri.map(toString),
            this.created.toString(),
            this.deathdate.toString(),
            this.deathplace.toString(),
            ...this.email.map(toString),
            ...this.expertise.map(toString),
            ...this.fburl.map(toString),
            ...this.fn.map(toString),
            this.gender.toString(),
            ...this.geo.map(toString),
            ...this.gramgender.map(toString),
            ...this.hobby.map(toString),
            ...this.impp.map(toString),
            ...this.interest.map(toString),
            ...this.key.map(toString),
            this.kind.toString(),
            ...this.lang.map(toString),
            this.language.toString(),
            ...this.logo.map(toString),
            ...this.member.map(toString),
            this.n.toString(),
            ...this.nickname.map(toString),
            ...this.note.map(toString),
            ...this.org.map(toString),
            ...this.orgDirectory.map(toString),
            ...this.photo.map(toString),
            this.prodid.toString(),
            ...this.related.map(toString),
            this.rev.toString(),
            ...this.role.map(toString),
            ...this.sound.map(toString),
            ...this.source.map(toString),
            ...this.tel.map(toString),
            ...this.title.map(toString),
            ...this.tz.map(toString),
            this.uid.toString(),
            ...this.url.map(toString),
            ...this.xml.map(toString),
            'END:VCARD'
        ];

        return properties
            .filter(isNotEmptyString)
            .join(EOL);
    }

    validate(): void {
        if (!(this.version instanceof VersionProperty))
            throw new TypeError('The VERSION property is invalid');

        if (this.fn.length === 0)
            throw new TypeError('The FN property is required');

        if (!this.adr.every(adr => adr instanceof AdrProperty))
            throw new TypeError('One or more ADR properties are invalid');

        if (!(this.anniversary instanceof AnniversaryProperty))
            throw new TypeError('The ANNIVERSARY property is invalid');

        if (!(this.bday instanceof BdayProperty))
            throw new TypeError('The BDAY property is invalid');

        if (!(this.birthplace instanceof BirthplaceProperty))
            throw new TypeError('The BIRTHPLACE property is invalid');

        if (!this.caluri.every(caluri => caluri instanceof CaluriProperty))
            throw new TypeError('One or more CALURI properties are invalid');

        if (!this.caladruri.every(caladruri => caladruri instanceof CaladruriProperty))
            throw new TypeError('One or more CALADRURI properties are invalid');

        if (!this.categories.every(categories => categories instanceof CategoriesProperty))
            throw new TypeError('One or more CATEGORIES properties are invalid');

        if (!this.clientpidmap.every(clientpidmap => clientpidmap instanceof ClientpidmapProperty))
            throw new TypeError('One or more CLIENTPIDMAP properties are invalid');

        if (!this.contactUri.every(contactUri => contactUri instanceof ContactUriProperty))
            throw new TypeError('One or more CONTACT-URI properties are invalid');

        if (!(this.deathdate instanceof DeathdateProperty))
            throw new TypeError('The DEATHDATE property is invalid');

        if (!(this.deathplace instanceof DeathplaceProperty))
            throw new TypeError('The DEATHPLACE property is invalid');

        if (!this.email.every(email => email instanceof EmailProperty))
            throw new TypeError('One or more EMAIL properties are invalid');

        if (!this.expertise.every(expertise => expertise instanceof ExpertiseProperty))
            throw new TypeError('One or more EXPERTISE properties are invalid');

        if (!this.fburl.every(fburl => fburl instanceof FburlProperty))
            throw new TypeError('One or more FBURL properties are invalid');

        if (!this.fn.every(fn => fn instanceof FnProperty))
            throw new TypeError('One or more FN properties are invalid');

        if (!this.geo.every(geo => geo instanceof GeoProperty))
            throw new TypeError('One or more GEO properties are invalid');

        if (!this.hobby.every(hobby => hobby instanceof HobbyProperty))
            throw new TypeError('One or more HOBBY properties are invalid');

        if (!this.impp.every(impp => impp instanceof ImppProperty))
            throw new TypeError('One or more IMPP properties are invalid');

        if (!this.interest.every(interest => interest instanceof InterestProperty))
            throw new TypeError('One or more INTEREST properties are invalid');

        if (!this.key.every(key => key instanceof KeyProperty))
            throw new TypeError('One or more KEY properties are invalid');

        if (!this.lang.every(lang => lang instanceof LangProperty))
            throw new TypeError('One or more LANG properties are invalid');

        if (!this.logo.every(logo => logo instanceof LogoProperty))
            throw new TypeError('One or more LOGO properties are invalid');

        if (!this.member.every(member => member instanceof MemberProperty))
            throw new TypeError('One or more MEMBER properties are invalid');

        if (!this.nickname.every(nickname => nickname instanceof NicknameProperty))
            throw new TypeError('One or more NICKNAME properties are invalid');

        if (!this.note.every(note => note instanceof NoteProperty))
            throw new TypeError('One or more NOTE properties are invalid');

        if (!this.org.every(org => org instanceof OrgProperty))
            throw new TypeError('One or more ORG properties are invalid');

        if (!this.orgDirectory.every(orgDirectory => orgDirectory instanceof OrgDirectoryProperty))
            throw new TypeError('One or more ORG-DIRECTORY properties are invalid');

        if (!this.photo.every(photo => photo instanceof PhotoProperty))
            throw new TypeError('One or more PHOTO properties are invalid');

        if (!(this.prodid instanceof ProdidProperty))
            throw new TypeError('The PRODID property is invalid');

        if (!this.related.every(related => related instanceof RelatedProperty))
            throw new TypeError('One or more RELATED properties are invalid');

        if (!(this.rev instanceof RevProperty))
            throw new TypeError('The REV property is invalid');

        if (!this.role.every(role => role instanceof RoleProperty))
            throw new TypeError('One or more ROLE properties are invalid');

        if (!this.sound.every(sound => sound instanceof SoundProperty))
            throw new TypeError('One or more SOUND properties are invalid');

        if (!this.source.every(source => source instanceof SourceProperty))
            throw new TypeError('One or more SOURCE properties are invalid');

        if (!this.tel.every(tel => tel instanceof TelProperty))
            throw new TypeError('One or more TEL properties are invalid');

        if (!this.title.every(title => title instanceof TitleProperty))
            throw new TypeError('One or more TITLE properties are invalid');

        if (!this.tz.every(tz => tz instanceof TzProperty))
            throw new TypeError('One or more TZ properties are invalid');

        if (!(this.uid instanceof UidProperty))
            throw new TypeError('The UID property is invalid');

        if (!this.url.every(url => url instanceof UrlProperty))
            throw new TypeError('One or more URL properties are invalid');

        if (!this.xml.every(xml => xml instanceof XmlProperty))
            throw new TypeError('One or more XML properties are invalid');
    }
}

export type {
    AdrConfig,
    AdrParameters,
    AdrProperty,
    AdrPropertyArray,
    AdrRestConfig,
    AdrType,
    AnniversaryCommonParameters,
    AnniversaryConfig,
    AnniversaryDateAndOrTimeOrUndefinedValueParameters,
    AnniversaryParameters,
    AnniversaryProperty,
    AnniversaryRestConfig,
    AnniversaryTextValueParameters,
    BdayCommonParameters,
    BdayConfig,
    BdayDateAndOrTimeOrUndefinedValueParameters,
    BdayParameters,
    BdayProperty,
    BdayRestConfig,
    BdayTextValueParameters,
    BirthplaceConfig,
    BirthplaceParameters,
    BirthplaceProperty,
    BirthplaceRestConfig,
    CaladruriConfig,
    CaladruriParameters,
    CaladruriProperty,
    CaladruriPropertyArray,
    CaladruriRestConfig,
    CaluriConfig,
    CaluriParameters,
    CaluriProperty,
    CaluriPropertyArray,
    CaluriRestConfig,
    CategoriesConfig,
    CategoriesParameters,
    CategoriesProperty,
    CategoriesPropertyArray,
    CategoriesRestConfig,
    ClientpidmapConfig,
    ClientpidmapParameters,
    ClientpidmapProperty,
    ClientpidmapPropertyArray,
    ClientpidmapRestConfig,
    ContactUriConfig,
    ContactUriParameters,
    ContactUriProperty,
    ContactUriPropertyArray,
    ContactUriRestConfig,
    CreatedConfig,
    CreatedParameters,
    CreatedProperty,
    CreatedRestConfig,
    DeathdateCommonParameters,
    DeathdateConfig,
    DeathdateDateAndOrTimeOrUndefinedValueParameters,
    DeathdateParameters,
    DeathdateProperty,
    DeathdateRestConfig,
    DeathdateTextValueParameters,
    DeathplaceConfig,
    DeathplaceParameters,
    DeathplaceProperty,
    DeathplaceRestConfig,
    EmailConfig,
    EmailParameters,
    EmailProperty,
    EmailPropertyArray,
    EmailRestConfig,
    ExpertiseConfig,
    ExpertiseLevel,
    ExpertiseParameters,
    ExpertiseProperty,
    ExpertisePropertyArray,
    ExpertiseRestConfig,
    FburlConfig,
    FburlParameters,
    FburlProperty,
    FburlPropertyArray,
    FburlRestConfig,
    FnConfig,
    FnParameters,
    FnProperty,
    FnPropertyArray,
    FnRestConfig,
    GenderConfig,
    GenderParameters,
    GenderProperty,
    GenderRestConfig,
    GeoConfig,
    GeoParameters,
    GeoProperty,
    GeoPropertyArray,
    GeoRestConfig,
    Gramgender,
    GramgenderConfig,
    GramgenderParameters,
    GramgenderProperty,
    GramgenderPropertyArray,
    GramgenderRestConfig,
    HobbyConfig,
    HobbyParameters,
    HobbyProperty,
    HobbyPropertyArray,
    HobbyRestConfig,
    ImppConfig,
    ImppParameters,
    ImppProperty,
    ImppPropertyArray,
    ImppRestConfig,
    InterestConfig,
    InterestParameters,
    InterestProperty,
    InterestPropertyArray,
    InterestRestConfig,
    KeyCommonParameters,
    KeyConfig,
    KeyParameters,
    KeyProperty,
    KeyPropertyArray,
    KeyRestConfig,
    KeyTextValueParameters,
    KeyUriOrUndefinedValueParameters,
    Kind,
    KindConfig,
    KindParameters,
    KindProperty,
    KindRestConfig,
    LangConfig,
    LangParameters,
    LangProperty,
    LangPropertyArray,
    LangRestConfig,
    LanguageConfig,
    LanguageParameters,
    LanguageProperty,
    LanguageRestConfig,
    LogoConfig,
    LogoParameters,
    LogoProperty,
    LogoPropertyArray,
    LogoRestConfig,
    MemberConfig,
    MemberParameters,
    MemberProperty,
    MemberPropertyArray,
    MemberRestConfig,
    NConfig,
    NicknameConfig,
    NicknameParameters,
    NicknameProperty,
    NicknamePropertyArray,
    NicknameRestConfig,
    NoteConfig,
    NoteParameters,
    NoteProperty,
    NotePropertyArray,
    NoteRestConfig,
    NParameters,
    NProperty,
    NRestConfig,
    NullProperty,
    OrgConfig,
    OrgDirectoryConfig,
    OrgDirectoryParameters,
    OrgDirectoryProperty,
    OrgDirectoryPropertyArray,
    OrgDirectoryRestConfig,
    OrgParameters,
    OrgProperty,
    OrgPropertyArray,
    OrgRestConfig,
    PhotoConfig,
    PhotoParameters,
    PhotoProperty,
    PhotoPropertyArray,
    PhotoRestConfig,
    ProdidConfig,
    ProdidParameters,
    ProdidProperty,
    ProdidRestConfig,
    Property,
    RelatedCommonParameters,
    RelatedConfig,
    RelatedParameters,
    RelatedProperty,
    RelatedPropertyArray,
    RelatedRestConfig,
    RelatedTextValueParameters,
    RelatedType,
    RelatedUriOrUndefinedValueParameters,
    RevConfig,
    RevParameters,
    RevProperty,
    RevRestConfig,
    RoleConfig,
    RoleParameters,
    RoleProperty,
    RolePropertyArray,
    RoleRestConfig,
    Sex,
    SoundConfig,
    SoundParameters,
    SoundProperty,
    SoundPropertyArray,
    SoundRestConfig,
    SourceConfig,
    SourceParameters,
    SourceProperty,
    SourcePropertyArray,
    SourceRestConfig,
    TelCommonParameters,
    TelConfig,
    TelParameters,
    TelProperty,
    TelPropertyArray,
    TelRestConfig,
    TelTextOrUndefinedValueParameters,
    TelType,
    TelUriValueParameters,
    TitleConfig,
    TitleParameters,
    TitleProperty,
    TitlePropertyArray,
    TitleRestConfig,
    TzCommonParameters,
    TzConfig,
    TzParameters,
    TzProperty,
    TzPropertyArray,
    TzRestConfig,
    TzTextOrUtcOffsetOrUndefinedValueParameters,
    TzUriValueParameters,
    UidConfig,
    UidParameters,
    UidProperty,
    UidRestConfig,
    UrlConfig,
    UrlParameters,
    UrlProperty,
    UrlPropertyArray,
    UrlRestConfig,
    VersionConfig,
    VersionParameters,
    VersionProperty,
    VersionRestConfig,
    XmlConfig,
    XmlParameters,
    XmlProperty,
    XmlPropertyArray,
    XmlRestConfig
};

export type {
    Altid,
    Calscale,
    Cardinality,
    Cc,
    CommonParameters,
    Group,
    HobbyOrInterestLevel,
    Options,
    Phonetic,
    Pid,
    Pref,
    PrefExclusiveTo,
    PrefInclusiveFrom,
    PropId,
    Type,
    UppercaseAlpha,
    Value
} from './types.js';
