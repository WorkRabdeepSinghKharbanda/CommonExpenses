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
import RentSplitGuide from './pages/guides/RentSplitGuide.jsx'
import UtilitySplitGuide from './pages/guides/UtilitySplitGuide.jsx'
import ZeroBasedBudgetGuide from './pages/guides/ZeroBasedBudgetGuide.jsx'
import DebtPayoffGuide from './pages/guides/DebtPayoffGuide.jsx'
import VacationSavingsGuide from './pages/guides/VacationSavingsGuide.jsx'
import CarCostSplitGuide from './pages/guides/CarCostSplitGuide.jsx'
import IrregularIncomeGuide from './pages/guides/IrregularIncomeGuide.jsx'
import CouplesTrackerGuide from './pages/guides/CouplesTrackerGuide.jsx'
import GroceryExpenseGuide from './pages/guides/GroceryExpenseGuide.jsx'
import GroupGiftGuide from './pages/guides/GroupGiftGuide.jsx'
import BlogIndex from './pages/blog/BlogIndex.jsx'
import AuditRecurringBills from './pages/blog/AuditRecurringBills.jsx'
import GroupTripExpenses from './pages/blog/GroupTripExpenses.jsx'
import EmergencyFundSize from './pages/blog/EmergencyFundSize.jsx'
import RentSplitDifferentRooms from './pages/blog/RentSplitDifferentRooms.jsx'
import SharedUtilityBills from './pages/blog/SharedUtilityBills.jsx'
import EnvelopeVsAppBudgeting from './pages/blog/EnvelopeVsAppBudgeting.jsx'
import ZeroBasedBudgeting from './pages/blog/ZeroBasedBudgeting.jsx'
import NegotiateLowerBills from './pages/blog/NegotiateLowerBills.jsx'
import DebtSnowballVsAvalanche from './pages/blog/DebtSnowballVsAvalanche.jsx'
import SavingForVacation from './pages/blog/SavingForVacation.jsx'
import SharedCarCosts from './pages/blog/SharedCarCosts.jsx'
import IrregularIncomeBudgeting from './pages/blog/IrregularIncomeBudgeting.jsx'
import CouplesExpenseTracking from './pages/blog/CouplesExpenseTracking.jsx'

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
        <Route path="/rent-split-calculator-different-room-sizes" element={<RentSplitGuide />} />
        <Route path="/shared-utility-bill-splitter" element={<UtilitySplitGuide />} />
        <Route path="/zero-based-budget-calculator" element={<ZeroBasedBudgetGuide />} />
        <Route path="/debt-payoff-snowball-vs-avalanche" element={<DebtPayoffGuide />} />
        <Route path="/vacation-savings-calculator" element={<VacationSavingsGuide />} />
        <Route path="/car-cost-splitting-calculator" element={<CarCostSplitGuide />} />
        <Route path="/irregular-income-budget-planner" element={<IrregularIncomeGuide />} />
        <Route path="/couples-expense-tracker" element={<CouplesTrackerGuide />} />
        <Route path="/grocery-expense-splitter" element={<GroceryExpenseGuide />} />
        <Route path="/group-gift-cost-splitter" element={<GroupGiftGuide />} />

        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/audit-your-recurring-bills" element={<AuditRecurringBills />} />
        <Route path="/blog/splitting-expenses-on-a-group-trip" element={<GroupTripExpenses />} />
        <Route path="/blog/how-big-should-your-emergency-fund-be" element={<EmergencyFundSize />} />
        <Route path="/blog/splitting-rent-different-room-sizes" element={<RentSplitDifferentRooms />} />
        <Route path="/blog/tracking-shared-utility-bills" element={<SharedUtilityBills />} />
        <Route path="/blog/cash-envelope-vs-app-budgeting" element={<EnvelopeVsAppBudgeting />} />
        <Route path="/blog/zero-based-budgeting-explained" element={<ZeroBasedBudgeting />} />
        <Route path="/blog/how-to-negotiate-lower-bills" element={<NegotiateLowerBills />} />
        <Route path="/blog/debt-snowball-vs-avalanche" element={<DebtSnowballVsAvalanche />} />
        <Route path="/blog/saving-for-a-vacation" element={<SavingForVacation />} />
        <Route path="/blog/splitting-costs-for-a-shared-car" element={<SharedCarCosts />} />
        <Route path="/blog/budgeting-with-irregular-income" element={<IrregularIncomeBudgeting />} />
        <Route path="/blog/tracking-expenses-as-a-couple" element={<CouplesExpenseTracking />} />
      </Routes>
    </Layout>
  )
}
