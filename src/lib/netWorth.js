export function computeNetWorth(assets, liabilities) {
  const totalAssets = assets.reduce((s, a) => s + a.amount, 0)
  const totalLiabilities = liabilities.reduce((s, l) => s + l.amount, 0)
  return { totalAssets, totalLiabilities, netWorth: totalAssets - totalLiabilities }
}
