// Shared by RecurringBills.jsx and Dashboard.jsx.
export const FREQUENCIES = { monthly: 1, yearly: 1 / 12, weekly: 52 / 12 }

export function nextDueDate(dueDay, frequency) {
  const now = new Date()
  const candidate = new Date(now.getFullYear(), now.getMonth(), dueDay)
  if (frequency === 'monthly' && candidate < now) candidate.setMonth(candidate.getMonth() + 1)
  if (frequency === 'yearly' && candidate < now) candidate.setFullYear(candidate.getFullYear() + 1)
  if (frequency === 'weekly') {
    const diff = (dueDay - now.getDay() + 7) % 7
    candidate.setDate(now.getDate() + (diff === 0 ? 7 : diff))
  }
  return candidate
}
