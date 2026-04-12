import type { CharacterMatch } from '../types/quiz'
import type { AppLocale } from './types'

type LocalizedText = Record<AppLocale, string>

const characterNameI18n: Record<string, LocalizedText> = {
  'hatsune-miku': {
    'zh-CN': '初音未来',
    'zh-TW': '初音未來',
    en: 'Hatsune Miku',
    ja: '初音ミク',
  },
  'ayanami-rei': {
    'zh-CN': '绫波丽',
    'zh-TW': '綾波零',
    en: 'Rei Ayanami',
    ja: '綾波レイ',
  },
  'asuka-langley': {
    'zh-CN': '明日香',
    'zh-TW': '明日香',
    en: 'Asuka Langley',
    ja: '惣流・アスカ・ラングレー',
  },
  'edogawa-conan': {
    'zh-CN': '江户川柯南',
    'zh-TW': '江戶川柯南',
    en: 'Conan Edogawa',
    ja: '江戸川コナン',
  },
  'hakurei-reimu': {
    'zh-CN': '博丽灵梦',
    'zh-TW': '博麗靈夢',
    en: 'Reimu Hakurei',
    ja: '博麗霊夢',
  },
  'gotoh-hitori': {
    'zh-CN': '后藤一里',
    'zh-TW': '後藤一里',
    en: 'Hitori Gotoh',
    ja: '後藤ひとり',
  },
  'fujiwara-chika': {
    'zh-CN': '藤原千花',
    'zh-TW': '藤原千花',
    en: 'Chika Fujiwara',
    ja: '藤原千花',
  },
  cirno: {
    'zh-CN': '琪露诺',
    'zh-TW': '琪露諾',
    en: 'Cirno',
    ja: 'チルノ',
  },
  'misaka-mikoto': {
    'zh-CN': '御坂美琴',
    'zh-TW': '御坂美琴',
    en: 'Mikoto Misaka',
    ja: '御坂美琴',
  },
  'kaname-madoka': {
    'zh-CN': '鹿目圆',
    'zh-TW': '鹿目圓',
    en: 'Madoka Kaname',
    ja: '鹿目まどか',
  },
  furina: {
    'zh-CN': '芙宁娜',
    'zh-TW': '芙寧娜',
    en: 'Furina',
    ja: 'フリーナ',
  },
  'takamatsu-tomori': {
    'zh-CN': '高松灯',
    'zh-TW': '高松燈',
    en: 'Tomori Takamatsu',
    ja: '高松燈',
  },
  'chihaya-anon': {
    'zh-CN': '千早爱音',
    'zh-TW': '千早愛音',
    en: 'Anon Chihaya',
    ja: '千早愛音',
  },
  'yo-rana': {
    'zh-CN': '要乐奈',
    'zh-TW': '要樂奈',
    en: 'Rana Kaname',
    ja: '要楽奈',
  },
  'nagasaki-soyo': {
    'zh-CN': '长崎爽世',
    'zh-TW': '長崎爽世',
    en: 'Soyo Nagasaki',
    ja: '長崎そよ',
  },
  'shiina-taki': {
    'zh-CN': '椎名立希',
    'zh-TW': '椎名立希',
    en: 'Taki Shiina',
    ja: '椎名立希',
  },
  'togawa-sakiko': {
    'zh-CN': '丰川祥子',
    'zh-TW': '豐川祥子',
    en: 'Sakiko Togawa',
    ja: '豊川祥子',
  },
  'wakaba-mutsumi': {
    'zh-CN': '若叶睦',
    'zh-TW': '若葉睦',
    en: 'Mutsumi Wakaba',
    ja: '若葉睦',
  },
  mortis: {
    'zh-CN': 'Mortis',
    'zh-TW': 'Mortis',
    en: 'Mortis',
    ja: 'モーティス',
  },
  'misumi-uika': {
    'zh-CN': '三角初华 / Doloris',
    'zh-TW': '三角初華 / Doloris',
    en: 'Uika Misumi / Doloris',
    ja: '三角初華 / Doloris',
  },
  'yahata-umiri': {
    'zh-CN': '八幡海铃 / Timoris',
    'zh-TW': '八幡海鈴 / Timoris',
    en: 'Umiri Yahata / Timoris',
    ja: '八幡海鈴 / Timoris',
  },
  'uika-nyubara': {
    'zh-CN': '祐天寺若麦 / Amoris',
    'zh-TW': '祐天寺若麥 / Amoris',
    en: 'Nyubara Uika / Amoris',
    ja: '祐天寺若麦 / Amoris',
  },
  'jia-ran': {
    'zh-CN': '嘉然',
    'zh-TW': '嘉然',
    en: 'Diana',
    ja: '嘉然',
  },
  'eis-taffy': {
    'zh-CN': '永雏塔菲',
    'zh-TW': '永雛塔菲',
    en: 'Eis Taffy',
    ja: '永雛タフィ',
  },
}

const seriesI18n: Record<string, LocalizedText> = {
  VOCALOID: {
    'zh-CN': 'VOCALOID',
    'zh-TW': 'VOCALOID',
    en: 'VOCALOID',
    ja: 'VOCALOID',
  },
  '新世纪福音战士': {
    'zh-CN': '新世纪福音战士',
    'zh-TW': '新世紀福音戰士',
    en: 'Neon Genesis Evangelion',
    ja: '新世紀エヴァンゲリオン',
  },
  '名侦探柯南': {
    'zh-CN': '名侦探柯南',
    'zh-TW': '名偵探柯南',
    en: 'Detective Conan',
    ja: '名探偵コナン',
  },
  '东方Project': {
    'zh-CN': '东方Project',
    'zh-TW': '東方Project',
    en: 'Touhou Project',
    ja: '東方Project',
  },
  '孤独摇滚！': {
    'zh-CN': '孤独摇滚！',
    'zh-TW': '孤獨搖滾！',
    en: 'Bocchi the Rock!',
    ja: 'ぼっち・ざ・ろっく！',
  },
  '辉夜大小姐想让我告白': {
    'zh-CN': '辉夜大小姐想让我告白',
    'zh-TW': '輝夜姬想讓人告白',
    en: 'Kaguya-sama: Love Is War',
    ja: 'かぐや様は告らせたい',
  },
  '某科学的超电磁炮': {
    'zh-CN': '某科学的超电磁炮',
    'zh-TW': '某科學的超電磁砲',
    en: 'A Certain Scientific Railgun',
    ja: 'とある科学の超電磁砲',
  },
  '魔法少女小圆': {
    'zh-CN': '魔法少女小圆',
    'zh-TW': '魔法少女小圓',
    en: 'Puella Magi Madoka Magica',
    ja: '魔法少女まどか☆マギカ',
  },
  '原神': {
    'zh-CN': '原神',
    'zh-TW': '原神',
    en: 'Genshin Impact',
    ja: '原神',
  },
  "BanG Dream! It's MyGO!!!!!": {
    'zh-CN': "BanG Dream! It's MyGO!!!!!",
    'zh-TW': "BanG Dream! It's MyGO!!!!!",
    en: "BanG Dream! It's MyGO!!!!!",
    ja: "BanG Dream! It's MyGO!!!!!",
  },
  'BanG Dream! Ave Mujica': {
    'zh-CN': 'BanG Dream! Ave Mujica',
    'zh-TW': 'BanG Dream! Ave Mujica',
    en: 'BanG Dream! Ave Mujica',
    ja: 'BanG Dream! Ave Mujica',
  },
  'A-SOUL': {
    'zh-CN': 'A-SOUL',
    'zh-TW': 'A-SOUL',
    en: 'A-SOUL',
    ja: 'A-SOUL',
  },
  '虚拟主播': {
    'zh-CN': '虚拟主播',
    'zh-TW': '虛擬主播',
    en: 'VTuber',
    ja: 'バーチャルYouTuber',
  },
}

function resolveLocalizedText(
  table: Record<string, LocalizedText>,
  key: string,
  locale: AppLocale,
  fallback: string,
) {
  return table[key]?.[locale] ?? fallback
}

export function getLocalizedCharacterName(character: Pick<CharacterMatch, 'id' | 'name'>, locale: AppLocale) {
  return resolveLocalizedText(characterNameI18n, character.id, locale, character.name)
}

export function getLocalizedCharacterSeries(character: Pick<CharacterMatch, 'series'>, locale: AppLocale) {
  return resolveLocalizedText(seriesI18n, character.series, locale, character.series)
}

