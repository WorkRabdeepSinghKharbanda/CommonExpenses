import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Landing from './pages/Landing.jsx'
import SplitExpense from './pages/SplitExpense.jsx'
import BudgetTracker from './pages/BudgetTracker.jsx'
import RecurringBills from './pages/RecurringBills.jsx'
import SavingsGoal from './pages/SavingsGoal.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import SplitBillsGuide from './pages/guides/SplitBillsGuide.jsx'
import BudgetRuleGuide from './pages/guides/BudgetRuleGuide.jsx'
import SavingsGuide from './pages/guides/SavingsGuide.jsx'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/split" element={<SplitExpense />} />
        <Route path="/budget" element={<BudgetTracker />} />
        <Route path="/bills" element={<RecurringBills />} />
        <Route path="/savings" element={<SavingsGoal />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/split-bills-with-roommates" element={<SplitBillsGuide />} />
        <Route path="/50-30-20-budget-rule" element={<BudgetRuleGuide />} />
        <Route path="/how-much-to-save-each-month" element={<SavingsGuide />} />
      </Routes>
    </Layout>
  )
}
