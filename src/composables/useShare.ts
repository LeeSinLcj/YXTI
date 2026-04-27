import { ref } from 'vue'

import type { QuizResult } from '../types/quiz'
import { getLocale, t } from '../i18n'
import { getLocalizedCharacterName, getLocalizedCharacterSeries } from '../i18n/characters'
import { getCharacterRarityMeta } from '../utils/characterRarity'
import { formatCharacterProbability } from '../utils/characterProbability'

let htmlToImageLoader: Promise<typeof import('html-to-image')> | null = null

/**
 * Wait for all images in the target element to load
 */
async function waitForImages(target: HTMLElement): Promise<void> {
  const images = target.querySelectorAll('img')
  const promises: Promise<void>[] = []

  images.forEach((img) => {
    // Skip already loaded images
    if (img.complete && img.naturalWidth > 0) {
      return
    }

    // Wait for loading or handle error
    promises.push(
      new Promise<void>((resolve) => {
        img.onload = () => resolve()
        img.onerror = () => resolve() // Resolve even on error to not block export
        // If image has no src, resolve immediately
        if (!img.src) {
          resolve()
        }
      })
    )
  })

  await Promise.all(promises)
}

function createShareText(result: QuizResult) {
  const featured = result.characterMatches[0]
  const locale = getLocale()
  const rarityMeta = getCharacterRarityMeta(featured?.id)
  const rarityLabel = rarityMeta
    ? t(`result.rarityTiers.${rarityMeta.tier}`, undefined, rarityMeta.tier)
    : '--'
  const displayProbability = formatCharacterProbability(result.matchProbability)
  const siteUrl = 'https://yxti.pages.dev/quiz'

  return [
    t('app.common.shareCode', { code: result.code }),
    featured
      ? t('app.common.shareCharacter', {
          name: getLocalizedCharacterName(featured, locale),
          series: getLocalizedCharacterSeries(featured, locale),
        })
      : t('app.common.shareUnknown'),
    rarityMeta
      ? t('app.common.shareRarity', {
          tier: rarityLabel,
          rank: rarityMeta.rank,
          total: rarityMeta.total,
        })
      : null,
    t('app.common.shareProbability', { prob: displayProbability }),
    t('app.common.shareProbabilityDesc'),
    //t('app.common.shareArchetype', { name: t(`archetypes.${result.archetype.id}.name`) }),
    //t(`archetypes.${result.archetype.id}.subtitle`),
    //t('app.common.shareRole', { role: t(`archetypes.${result.archetype.id}.narrativeRole`) }),
    '',
    //t('app.common.shareFooterProject'),
    //t('app.common.shareFooterStar'),
    t('app.common.shareFooterCta', { url: siteUrl }),
  ].filter(line => line !== null).join('\n')
}

export function useShare() {
  const isExporting = ref(false)
  const feedback = ref('')

  async function exportPoster(target: HTMLElement | null, result: QuizResult) {
    if (!target || isExporting.value) {
      return
    }

    isExporting.value = true
    feedback.value = ''

    try {
      // Wait for all images to load before capturing
      await waitForImages(target)

      // Small delay to ensure DOM is updated
      await new Promise(resolve => setTimeout(resolve, 100))

      htmlToImageLoader ??= import('html-to-image')
      const { toPng } = await htmlToImageLoader
      const dataUrl = await toPng(target, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: '#ffffff',
      })

      const link = document.createElement('a')
      link.href = dataUrl
      link.download = `yxti-${result.archetype.id}.png`
      link.click()
      feedback.value = t('app.common.exportSuccess')
    } catch {
      feedback.value = t('app.common.exportFail')
    } finally {
      isExporting.value = false
    }
  }

  async function copyShareText(result: QuizResult) {
    const text = createShareText(result)

    try {
      await navigator.clipboard.writeText(text)
      feedback.value = t('app.common.copySuccess')
    } catch {
      feedback.value = t('app.common.copyFail')
    }
  }

  return {
    isExporting,
    feedback,
    exportPoster,
    copyShareText,
  }
}
