export function computeTip(bill, tipPct, peopleCount) {
  const tipAmount = bill * (tipPct / 100)
  const total = bill + tipAmount
  const safePeople = peopleCount > 0 ? peopleCount : 1
  return { tipAmount, total, perPerson: total / safePeople, tipPerPerson: tipAmount / safePeople }
}
