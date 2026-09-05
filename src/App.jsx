import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Landing from './pages/Landing.jsx'
import SplitExpense from './pages/SplitExpense.jsx'
import BudgetTracker from './pages/BudgetTracker.jsx'
import RecurringBills from './pages/RecurringBills.jsx'
import SavingsGoal from './pages/SavingsGoal.jsx'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/split" element={<SplitExpense />} />
        <Route path="/budget" element={<BudgetTracker />} />
        <Route path="/bills" element={<RecurringBills />} />
        <Route path="/savings" element={<SavingsGoal />} />
      </Routes>
    </Layout>
  )
}
