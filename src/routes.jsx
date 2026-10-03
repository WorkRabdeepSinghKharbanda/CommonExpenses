import Landing from './pages/Landing.jsx'
import Dashboard from './pages/Dashboard.jsx'
import DebtPayoff from './pages/DebtPayoff.jsx'
import LoanCalculator from './pages/LoanCalculator.jsx'
import NetWorth from './pages/NetWorth.jsx'
import SplitExpense from './pages/SplitExpense.jsx'
import BudgetTracker from './pages/BudgetTracker.jsx'
import RecurringBills from './pages/RecurringBills.jsx'
import SavingsGoal from './pages/SavingsGoal.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import About from './pages/About.jsx'
import CategoryHub from './pages/hubs/CategoryHub.jsx'
import AlternativesIndex from './pages/alternatives/AlternativesIndex.jsx'
import AlternativePage from './pages/alternatives/AlternativePage.jsx'
import { CATEGORIES } from './content/categories.js'
import { ALTERNATIVES } from './content/alternatives.js'
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
import EMIGuide from './pages/guides/EMIGuide.jsx'
import NetWorthGuide from './pages/guides/NetWorthGuide.jsx'
import SplitExpensesPillar from './pages/guides/SplitExpensesPillar.jsx'
import BudgetPillar from './pages/guides/BudgetPillar.jsx'
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
import FreeTrialsConvertToPaid from './pages/blog/FreeTrialsConvertToPaid.jsx'
import RecurringTrackerVsSpreadsheet from './pages/blog/RecurringTrackerVsSpreadsheet.jsx'
import AutomateYourSavings from './pages/blog/AutomateYourSavings.jsx'
import ShortVsLongTermSavingsGoals from './pages/blog/ShortVsLongTermSavingsGoals.jsx'
import BudgetingForTheFirstTime from './pages/blog/BudgetingForTheFirstTime.jsx'
import SplittingBillsBasedOnIncome from './pages/blog/SplittingBillsBasedOnIncome.jsx'
import ReducingBalanceVsFlatRate from './pages/blog/ReducingBalanceVsFlatRate.jsx'
import NetWorthVsIncome from './pages/blog/NetWorthVsIncome.jsx'

// Single source of truth for routing, the prerender script, and sitemap
// generation — add every new route here, nowhere else, so the three can
// never drift out of sync.
export const ROUTES = [
  { path: '/', element: Landing, type: 'tool', changefreq: 'monthly', priority: 1.0 },
  { path: '/split', element: SplitExpense, type: 'tool', changefreq: 'monthly', priority: 0.8 },
  { path: '/budget', element: BudgetTracker, type: 'tool', changefreq: 'monthly', priority: 0.8 },
  { path: '/bills', element: RecurringBills, type: 'tool', changefreq: 'monthly', priority: 0.8 },
  { path: '/savings', element: SavingsGoal, type: 'tool', changefreq: 'monthly', priority: 0.8 },
  { path: '/dashboard', element: Dashboard, type: 'tool', changefreq: 'monthly', priority: 0.7 },
  { path: '/debt-payoff', element: DebtPayoff, type: 'tool', changefreq: 'monthly', priority: 0.8 },
  { path: '/loan-calculator', element: LoanCalculator, type: 'tool', changefreq: 'monthly', priority: 0.8 },
  { path: '/net-worth', element: NetWorth, type: 'tool', changefreq: 'monthly', priority: 0.8 },
  { path: '/privacy', element: PrivacyPolicy, type: 'legal', changefreq: 'yearly', priority: 0.3 },
  { path: '/about', element: About, type: 'legal', changefreq: 'yearly', priority: 0.3 },

  ...CATEGORIES.map((category) => ({
    path: category.route,
    element: () => <CategoryHub category={category} />,
    type: 'hub',
    changefreq: 'weekly',
    priority: 0.7,
  })),

  { path: '/alternatives', element: AlternativesIndex, type: 'hub', changefreq: 'weekly', priority: 0.6 },
  ...ALTERNATIVES.map((alt) => ({
    path: `/alternatives/${alt.slug}`,
    element: () => <AlternativePage alt={alt} />,
    type: 'alternative',
    changefreq: 'monthly',
    priority: 0.65,
  })),

  { path: '/how-to-split-expenses-fairly', element: SplitExpensesPillar, type: 'pillar', changefreq: 'weekly', priority: 0.8 },
  { path: '/how-to-build-a-budget-that-works', element: BudgetPillar, type: 'pillar', changefreq: 'weekly', priority: 0.8 },
  { path: '/split-bills-with-roommates', element: SplitBillsGuide, type: 'guide', changefreq: 'monthly', priority: 0.6 },
  { path: '/50-30-20-budget-rule', element: BudgetRuleGuide, type: 'guide', changefreq: 'monthly', priority: 0.6 },
  { path: '/how-much-to-save-each-month', element: SavingsGuide, type: 'guide', changefreq: 'monthly', priority: 0.6 },
  { path: '/rent-split-calculator-different-room-sizes', element: RentSplitGuide, type: 'guide', changefreq: 'monthly', priority: 0.6 },
  { path: '/shared-utility-bill-splitter', element: UtilitySplitGuide, type: 'guide', changefreq: 'monthly', priority: 0.6 },
  { path: '/zero-based-budget-calculator', element: ZeroBasedBudgetGuide, type: 'guide', changefreq: 'monthly', priority: 0.6 },
  { path: '/debt-payoff-snowball-vs-avalanche', element: DebtPayoffGuide, type: 'guide', changefreq: 'monthly', priority: 0.6 },
  { path: '/vacation-savings-calculator', element: VacationSavingsGuide, type: 'guide', changefreq: 'monthly', priority: 0.6 },
  { path: '/car-cost-splitting-calculator', element: CarCostSplitGuide, type: 'guide', changefreq: 'monthly', priority: 0.6 },
  { path: '/irregular-income-budget-planner', element: IrregularIncomeGuide, type: 'guide', changefreq: 'monthly', priority: 0.6 },
  { path: '/couples-expense-tracker', element: CouplesTrackerGuide, type: 'guide', changefreq: 'monthly', priority: 0.6 },
  { path: '/grocery-expense-splitter', element: GroceryExpenseGuide, type: 'guide', changefreq: 'monthly', priority: 0.6 },
  { path: '/group-gift-cost-splitter', element: GroupGiftGuide, type: 'guide', changefreq: 'monthly', priority: 0.6 },
  { path: '/how-emi-is-calculated', element: EMIGuide, type: 'guide', changefreq: 'monthly', priority: 0.6 },
  { path: '/how-to-calculate-net-worth', element: NetWorthGuide, type: 'guide', changefreq: 'monthly', priority: 0.6 },

  { path: '/blog', element: BlogIndex, type: 'hub', changefreq: 'weekly', priority: 0.7 },
  { path: '/blog/audit-your-recurring-bills', element: AuditRecurringBills, type: 'post', changefreq: 'yearly', priority: 0.6 },
  { path: '/blog/splitting-expenses-on-a-group-trip', element: GroupTripExpenses, type: 'post', changefreq: 'yearly', priority: 0.6 },
  { path: '/blog/how-big-should-your-emergency-fund-be', element: EmergencyFundSize, type: 'post', changefreq: 'yearly', priority: 0.6 },
  { path: '/blog/splitting-rent-different-room-sizes', element: RentSplitDifferentRooms, type: 'post', changefreq: 'yearly', priority: 0.6 },
  { path: '/blog/tracking-shared-utility-bills', element: SharedUtilityBills, type: 'post', changefreq: 'yearly', priority: 0.6 },
  { path: '/blog/cash-envelope-vs-app-budgeting', element: EnvelopeVsAppBudgeting, type: 'post', changefreq: 'yearly', priority: 0.6 },
  { path: '/blog/zero-based-budgeting-explained', element: ZeroBasedBudgeting, type: 'post', changefreq: 'yearly', priority: 0.6 },
  { path: '/blog/how-to-negotiate-lower-bills', element: NegotiateLowerBills, type: 'post', changefreq: 'yearly', priority: 0.6 },
  { path: '/blog/debt-snowball-vs-avalanche', element: DebtSnowballVsAvalanche, type: 'post', changefreq: 'yearly', priority: 0.6 },
  { path: '/blog/saving-for-a-vacation', element: SavingForVacation, type: 'post', changefreq: 'yearly', priority: 0.6 },
  { path: '/blog/splitting-costs-for-a-shared-car', element: SharedCarCosts, type: 'post', changefreq: 'yearly', priority: 0.6 },
  { path: '/blog/budgeting-with-irregular-income', element: IrregularIncomeBudgeting, type: 'post', changefreq: 'yearly', priority: 0.6 },
  { path: '/blog/tracking-expenses-as-a-couple', element: CouplesExpenseTracking, type: 'post', changefreq: 'yearly', priority: 0.6 },
  { path: '/blog/free-trials-that-convert-to-paid', element: FreeTrialsConvertToPaid, type: 'post', changefreq: 'yearly', priority: 0.6 },
  { path: '/blog/recurring-bill-tracker-vs-spreadsheet', element: RecurringTrackerVsSpreadsheet, type: 'post', changefreq: 'yearly', priority: 0.6 },
  { path: '/blog/automate-your-savings', element: AutomateYourSavings, type: 'post', changefreq: 'yearly', priority: 0.6 },
  { path: '/blog/short-term-vs-long-term-savings-goals', element: ShortVsLongTermSavingsGoals, type: 'post', changefreq: 'yearly', priority: 0.6 },
  { path: '/blog/how-to-budget-money-for-the-first-time', element: BudgetingForTheFirstTime, type: 'post', changefreq: 'yearly', priority: 0.6 },
  { path: '/blog/splitting-bills-based-on-income', element: SplittingBillsBasedOnIncome, type: 'post', changefreq: 'yearly', priority: 0.6 },
  { path: '/blog/reducing-balance-vs-flat-rate-interest', element: ReducingBalanceVsFlatRate, type: 'post', changefreq: 'yearly', priority: 0.6 },
  { path: '/blog/net-worth-vs-income', element: NetWorthVsIncome, type: 'post', changefreq: 'yearly', priority: 0.6 },
]
