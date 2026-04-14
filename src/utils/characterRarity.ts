import characterProbabilitiesData from '../data/characterProbabilities.json' with { type: 'json' }

export type RarityTierId = 'ur' | 'ssr' | 'sr' | 'r'

export interface CharacterRarityMeta {
  tier: RarityTierId
  rank: number
  total: number
  rarityIndex: number
  probability: number
  rarerThanPercent: number
  topPercent: number
  rangeStartPercent: number
  rangeEndPercent: number
  startRank: number
  endRank: number
}

const probabilityDataset = characterProbabilitiesData as {
  probabilities: Record<string, number>
}

const rankedCharacterIds = Object.entries(probabilityDataset.probabilities)
  .sort((left, right) => {
    if (left[1] !== right[1]) {
      return left[1] - right[1]
    }

    return left[0].localeCompare(right[0])
  })
  .map(([characterId]) => characterId)

const rankIndexMap = new Map(rankedCharacterIds.map((characterId, index) => [characterId, index]))
const totalCharacters = rankedCharacterIds.length

const rarityBuckets: Array<{ tier: RarityTierId; count: number }> = buildRarityBuckets(totalCharacters)

function buildRarityBuckets(total: number) {
  const cumulativePlan: Array<{ tier: RarityTierId; boundary: number }> = [
    { tier: 'ur', boundary: 0.05 },
    { tier: 'ssr', boundary: 0.2 },
    { tier: 'sr', boundary: 0.5 },
    { tier: 'r', boundary: 1 },
  ]

  let allocated = 0

  return cumulativePlan.map((bucket, index) => {
    if (index === cumulativePlan.length - 1) {
      return {
        tier: bucket.tier,
        count: Math.max(1, total - allocated),
      }
    }

    const nextAllocated = Math.max(allocated + 1, Math.round(total * bucket.boundary))
    const count = Math.max(1, nextAllocated - allocated)
    allocated += count

    return {
      tier: bucket.tier,
      count,
    }
  })
}

function getRarityIndex(probability: number) {
  const safeProbability = Math.max(probability / 100, 0.000001)
  return Number((-Math.log2(safeProbability)).toFixed(1))
}

export function getCharacterRarityMeta(characterId: string | null | undefined): CharacterRarityMeta | null {
  if (!characterId) {
    return null
  }

  const rankIndex = rankIndexMap.get(characterId)
  if (rankIndex === undefined) {
    return null
  }

  const rank = rankIndex + 1
  const probability = probabilityDataset.probabilities[characterId] ?? 0
  const bucketMeta = getRarityBucketMeta(rank)

  return {
    tier: bucketMeta.tier,
    rank,
    total: totalCharacters,
    rarityIndex: getRarityIndex(probability),
    probability,
    rarerThanPercent: totalCharacters > 1
      ? Math.round(((totalCharacters - rank) / (totalCharacters - 1)) * 100)
      : 0,
    topPercent: bucketMeta.rangeEndPercent,
    rangeStartPercent: bucketMeta.rangeStartPercent,
    rangeEndPercent: bucketMeta.rangeEndPercent,
    startRank: bucketMeta.startRank,
    endRank: bucketMeta.endRank,
  }
}

function getRarityBucketMeta(rank: number) {
  let cumulative = 0

  for (const bucket of rarityBuckets) {
    const previous = cumulative
    cumulative += bucket.count
    if (rank <= cumulative) {
      return {
        tier: bucket.tier,
        count: bucket.count,
        rangeStartPercent: Math.round((previous / totalCharacters) * 100),
        rangeEndPercent: Math.round((cumulative / totalCharacters) * 100),
        startRank: previous + 1,
        endRank: cumulative,
      }
    }
  }

  const lastBucket = rarityBuckets[rarityBuckets.length - 1]
  return {
    tier: lastBucket.tier,
    count: lastBucket.count,
    rangeStartPercent: 50,
    rangeEndPercent: 100,
    startRank: Math.max(1, totalCharacters - lastBucket.count + 1),
    endRank: totalCharacters,
  }
}
