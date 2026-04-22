import type { CharacterMatch } from '../types/quiz'
import type { AppLocale } from './types'

type LocalizedText = Record<AppLocale, string>

const hiddenCharacterSeriesI18n: LocalizedText = {
  'zh-CN': '有隐藏角色',
  'zh-TW': '有隱藏角色',
  en: 'Hidden Result Exists',
  ja: '隠し結果あり',
}

const hiddenCharacterNoteI18n: LocalizedText = {
  'zh-CN': '你命中了{label}。YXTI 不会直接公开其角色名，结果页仅保留角色代码、形象和气质解读。',
  'zh-TW': '你命中了{label}。YXTI 不會直接公開其角色名，結果頁僅保留角色代碼、形象與氣質解讀。',
  en: 'You hit {label}. YXTI keeps the actual character name masked and only shows the code, image, and personality reading.',
  ja: '{label} に命中しました。YXTIでは実際のキャラ名は伏せたまま、コードとビジュアル、解説のみを表示します。',
}

const hiddenCharacterTagsI18n: Record<AppLocale, string[]> = {
  'zh-CN': ['隐藏结果', '低概率命中', '特殊气质'],
  'zh-TW': ['隱藏結果', '低機率命中', '特殊氣質'],
  en: ['Hidden Result', 'Low Probability Hit', 'Special Aura'],
  ja: ['隠し結果', '低確率ヒット', '特殊な気配'],
}

const HIDDEN_CHARACTER_IDS = ['phrolova', 'kasugano-sora'] as const

const hiddenCharacterLabelPrefixI18n: LocalizedText = {
  'zh-CN': '隐藏角色',
  'zh-TW': '隱藏角色',
  en: 'Hidden Character ',
  ja: '隠しキャラ',
}

const characterNameI18n: Record<string, LocalizedText> = {
  // 云灵剑宗 (100xxxx)
  muyifeng: {
    'zh-CN': '牧逸风',
    'zh-TW': '牧逸風',
    en: 'Mu Yifeng',
    ja: '牧逸风',
  },
  yanxue: {
    'zh-CN': '炎雪',
    'zh-TW': '炎雪',
    en: 'Yan Xue',
    ja: '炎雪',
  },
  longyao: {
    'zh-CN': '龙瑶',
    'zh-TW': '龍瑤',
    en: 'Long Yao',
    ja: '龍瑤',
  },
  linxiaoyue: {
    'zh-CN': '林小月',
    'zh-TW': '林小月',
    en: 'Lin Xiaoyue',
    ja: '林小月',
  },
  lujianxin: {
    'zh-CN': '陆剑心',
    'zh-TW': '陸劍心',
    en: 'Lu Jianxin',
    ja: '陸剣心',
  },
  lichengyun: {
    'zh-CN': '黎承云',
    'zh-TW': '黎承雲',
    en: 'Li Chengyun',
    ja: '黎承雲',
  },
  // 七星阁 (200xxxx)
  tanshuyan: {
    'zh-CN': '谭舒雁',
    'zh-TW': '譚舒雁',
    en: 'Tan Shuyan',
    ja: '谭舒雁',
  },
  yanchen: {
    'zh-CN': '炎尘',
    'zh-TW': '炎塵',
    en: 'Yan Chen',
    ja: '炎尘',
  },
  yaoling: {
    'zh-CN': '曜灵',
    'zh-TW': '曜靈',
    en: 'Yao Ling',
    ja: '曜霊',
  },
  jiangximing: {
    'zh-CN': '姜袭明',
    'zh-TW': '姜襲明',
    en: 'Jiang Ximing',
    ja: '姜袭明',
  },
  wuce: {
    'zh-CN': '吴策',
    'zh-TW': '吳策',
    en: 'Wu Ce',
    ja: '吴策',
  },
  fengxu: {
    'zh-CN': '风绪',
    'zh-TW': '風緒',
    en: 'Feng Xu',
    ja: '風緒',
  },
  // 五行道盟 (300xxxx)
  wuxingzhi: {
    'zh-CN': '吾行之',
    'zh-TW': '吾行之',
    en: 'Wu Xingzhi',
    ja: '吾行之',
  },
  dulingyuan: {
    'zh-CN': '杜伶鸳',
    'zh-TW': '杜伶鴛',
    en: 'Du Lingyuan',
    ja: '杜伶鸳',
  },
  huaqinrui: {
    'zh-CN': '花沁蕊',
    'zh-TW': '花沁蕊',
    en: 'Hua Qinrui',
    ja: '花沁蕊',
  },
  muhu: {
    'zh-CN': '慕虎',
    'zh-TW': '慕虎',
    en: 'Mu Hu',
    ja: '慕虎',
  },
  nangongsheng: {
    'zh-CN': '南宫生',
    'zh-TW': '南宮生',
    en: 'Nangong Sheng',
    ja: '南宫生',
  },
  qiwangyou: {
    'zh-CN': '祁忘忧',
    'zh-TW': '祁忘憂',
    en: 'Qi Wangyou',
    ja: '祁忘忧',
  },
  // 锻玄宗 (400xxxx)
  xiaobu: {
    'zh-CN': '小布',
    'zh-TW': '小布',
    en: 'Xiao Bu',
    ja: '小布',
  },
  tukui: {
    'zh-CN': '屠馗',
    'zh-TW': '屠馗',
    en: 'Tu Kui',
    ja: '屠馗',
  },
  yemingming: {
    'zh-CN': '叶冥冥',
    'zh-TW': '葉冥冥',
    en: 'Ye Mingming',
    ja: '葉冥冥',
  },
  jifangsheng: {
    'zh-CN': '姬方生',
    'zh-TW': '姬方生',
    en: 'Ji Fangsheng',
    ja: '姬方生',
  },
  liman: {
    'zh-CN': '李㵘',
    'zh-TW': '李㵘',
    en: 'Li Man',
    ja: '李㵘',
  },
}

const seriesI18n: Record<string, LocalizedText> = {
  '云灵剑宗': {
    'zh-CN': '云灵剑宗',
    'zh-TW': '雲靈劍宗',
    en: 'Cloud Spirit Sword Sect',
    ja: '雲霊剣宗',
  },
  '七星阁': {
    'zh-CN': '七星阁',
    'zh-TW': '七星閣',
    en: 'Heptastar Pavilion',
    ja: '七星閣',
  },
  '五行道盟': {
    'zh-CN': '五行道盟',
    'zh-TW': '五行道盟',
    en: 'Five Elements Alliance',
    ja: '五行道盟',
  },
  '锻玄宗': {
    'zh-CN': '锻玄宗',
    'zh-TW': '鍛玄宗',
    en: 'Duan Xuan Sect',
    ja: '鍛玄宗',
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

export function isHiddenCharacter(character: Pick<CharacterMatch, 'hidden'> | null | undefined) {
  return Boolean(character?.hidden)
}

export function getHiddenCharacterOrder(character: Pick<CharacterMatch, 'id'> | null | undefined) {
  const index = character ? HIDDEN_CHARACTER_IDS.indexOf(character.id as (typeof HIDDEN_CHARACTER_IDS)[number]) : -1
  return index >= 0 ? index + 1 : Number.MAX_SAFE_INTEGER
}

export function getHiddenCharacterLabel(
  character: Pick<CharacterMatch, 'id'> | null | undefined,
  locale: AppLocale,
) {
  const order = getHiddenCharacterOrder(character)
  if (order === Number.MAX_SAFE_INTEGER) {
    return locale === 'en' ? 'Hidden Character' : hiddenCharacterLabelPrefixI18n[locale]
  }

  if (locale === 'en') {
    return `${hiddenCharacterLabelPrefixI18n[locale]}${order}`
  }

  return `${hiddenCharacterLabelPrefixI18n[locale]}${order}`
}

export function getHiddenCharacterTitle(
  locale: AppLocale,
  character?: Pick<CharacterMatch, 'id'> | null,
) {
  return getHiddenCharacterLabel(character, locale)
}

export function getHiddenCharacterNote(
  locale: AppLocale,
  character?: Pick<CharacterMatch, 'id'> | null,
) {
  const label = getHiddenCharacterLabel(character, locale)
  return hiddenCharacterNoteI18n[locale].replace('{label}', label)
}

export function getHiddenCharacterTags(locale: AppLocale) {
  return hiddenCharacterTagsI18n[locale]
}

export function getLocalizedCharacterName(
  character: Pick<CharacterMatch, 'id' | 'name' | 'hidden'>,
  locale: AppLocale,
  options?: { revealHidden?: boolean },
) {
  if (isHiddenCharacter(character as CharacterMatch) && !options?.revealHidden) {
    return getHiddenCharacterLabel(character, locale)
  }
  return resolveLocalizedText(characterNameI18n, character.id, locale, character.name)
}

export function getLocalizedCharacterSeries(character: Pick<CharacterMatch, 'series' | 'hidden'>, locale: AppLocale) {
  if (isHiddenCharacter(character as CharacterMatch)) {
    return hiddenCharacterSeriesI18n[locale]
  }
  return resolveLocalizedText(seriesI18n, character.series, locale, character.series)
}
