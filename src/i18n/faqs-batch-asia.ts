import type { Lang } from './ui';

export const faqsBatchAsia: Partial<Record<Lang, Record<string, string>>> = {
  // Traditional Chinese (zh-tw)
  "zh-tw": {
    // 1. Mortgage
    "How is a mortgage payment calculated?": "房貸月付額是如何計算的？",
    "A standard monthly mortgage payment consists of Principal & Interest (P&I), property taxes, homeowners insurance, private mortgage insurance (PMI) if down payment is under 20%, and homeowner association (HOA) fees.": "標準的房貸月繳款通常由本金與利息（P&I）、房屋地價稅、火災地震險、首期自備款低於20%時的房貸信用保險（PMI）以及社區管理費（HOA）共同組成。",
    "What is PMI and when do I pay it?": "什麼是房貸保險 (PMI)，何時必須投保？",
    "Private Mortgage Insurance (PMI) is a policy that protects the lender if you default. It is typically required on conventional loans if your down payment is less than 20% of the home purchase price.": "個人房貸保險（PMI）是放貸機構為防範借款人違約而設立的保險機制。在一般購屋貸款中，若購屋自備款低於房屋總價的20%，通常會被強制要求投保。",
    "What does PITI stand for?": "什麼是 PITI 房貸指標？",
    "PITI stands for Principal, Interest, Taxes, and Insurance. These are the four basic components that make up a homeowner's monthly housing payment. Together, they reflect the true cost of owning a home on a month-to-month basis.": "PITI 是本金（Principal）、利息（Interest）、稅費（Taxes）與保險（Insurance）的縮寫，代表持有自住房產每個月必須承擔的實質完整開銷。",
    "Is a 15-year mortgage better than a 30-year mortgage?": "15年期房貸比30年期房貸更好嗎？",
    "A 15-year mortgage typically offers a lower interest rate and allows you to pay off your home twice as fast, saving you tens of thousands of dollars in interest. However, a 30-year mortgage has lower monthly payments, which provides greater cash flow flexibility.": "15年期房貸利率通常較為優惠且能以雙倍速度清償本金，大幅節省整體利息支出；而30年期房貸月付額較低，能提供更充裕的日常現金流彈性。",
    "How do extra payments affect my mortgage payoff schedule?": "提前多還本金對房貸還款計劃有何影響？",
    "Any extra money you pay towards your mortgage is applied directly to the principal balance. This reduces the remaining loan balance and decreases the amount of interest that accumulates, helping you pay off your mortgage years ahead of schedule.": "所有額外多還的款項都會直接扣抵貸款本金餘額，快速減少後續累計的利息，助您提前數年還清房貸並省下可觀的利息成本。",

    // 2. Loan Calculator
    "How does an amortized loan work?": "本息平均攤還貸款是如何運作的？",
    "With an amortized loan, you make equal periodic payments. Early in the loan term, the majority of each payment goes toward interest. Over time, an increasing portion goes toward paying down the principal balance until the debt is fully paid off.": "在等額本息攤還貸款中，前期每期還款中大部分為利息；隨著本金餘額減少，後期歸還本金的比例逐步提高，直至全數清償。",
    "What is the difference between fixed-rate and variable-rate loans?": "固定利率與機動利率（浮動利率）貸款有何差異？",
    "A fixed-rate loan maintains the exact same interest rate and payment throughout the loan term. A variable-rate loan has an interest rate that adjusts periodically based on benchmark interest rates, which can increase or decrease your payments.": "固定利率在整個合約期間利率與月付額皆固定不變；浮動利率則定期隨基準指標利率調整，月付金額會隨市場升降息波動。",
    "Can I pay off my loan early without penalty?": "我可以提前清償全部或部分貸款嗎？是否有違約金？",
    "Most consumer loans and conventional mortgages allow prepayment without penalties, but some lenders include a prepayment penalty clause. Always verify your loan agreement terms before making accelerated principal payments.": "大部分消費借貸與一般房貸允許提前還本，但部分方案在綁約期內可能收取提前清償違約金，提前還款前請務必詳閱合約。",

    // 3. Debt Payoff
    "What is the Debt Snowball method?": "什麼是滾雪球還債法？",
    "The Debt Snowball method involves paying off your smallest debt balances first, regardless of interest rates. It builds psychological momentum and motivation through quick wins.": "優先清償本金餘額最小的債務，而不考慮利率高低。透過迅速結清單筆負債所獲得的成就感，建立持續還債的心理動能。",
    "What is the Debt Avalanche method?": "什麼是雪崩還債法？",
    "The Debt Avalanche method involves paying off your highest interest rate debts first. Mathematically, this minimizes the total interest you pay and helps you become debt-free faster.": "優先集中資金清償利率最高的高利負債。從財務數學角度來看，這種方式能最大程度壓低利息總額，最快脫離債務枷鎖。",
    "Which method is better: Debt Snowball or Debt Avalanche?": "滾雪球法與雪崩法哪一種更好？",
    "Mathematically, the Debt Avalanche method is superior because it minimizes the total interest paid. However, studies show that the Debt Snowball method is often more successful in practice because the psychological momentum helps people stick to their plan.": "理論上雪崩法最省錢；但在實務執行上，滾雪球法常具有更高的成功率，因為即時消除單一帳戶帶來的心理回饋讓人更有毅力堅持。",
    "How does the 'extra payment' roll over in these strategies?": "在這些還款策略中，超額還款資金是如何滾動傳遞的？",
    "You continue paying minimums on all debts and add your extra cash to the target debt. Once that target debt is fully paid off, you roll its entire payment into the next debt on your list.": "您維持其餘債務的最低應繳金額，並將所有結餘現金專注投入目標債務；一旦該筆債務全數還清，便將其原本的還款預算整筆加碼至下一筆債務。",
    "Can I do a hybrid of Snowball and Avalanche?": "我可以採取結合雪球與雪崩的混合策略嗎？",
    "Yes. Many people pay off one or two small debts first to free up immediate cash flow (Snowball), and then pivot to targeting the remaining debts by highest interest rate (Avalanche).": "當然可以。許多人會先清償一至兩筆極小額的瑣碎負債以迅速釋出每月可用現金流（雪球法），隨後轉而鎖定最高利率的債務集中打擊（雪崩法）。",

    // 4. Refinance
    "When should I refinance my loan?": "什麼時候應該辦理轉貸（房屋重新轉押）？",
    "It generally makes sense to refinance if you can secure a lower interest rate, reduce your monthly payment, or shorten your term, provided your total interest savings exceed the closing costs.": "當您能爭取到明顯更低的利率、減輕每月還款壓力或縮短總還款期，且省下的利息總額超過轉貸所需的開辦手續費與代書登記費時，辦理轉貸才划算。",
    "What closing costs are associated with refinancing?": "轉貸通常會產生哪些相關規費與手續費？",
    "Refinancing costs typically include application fees, origination fees, appraisal costs, title search and insurance, credit report fees, and recording fees, ranging from 2% to 6% of the loan amount.": "常見費用包括銀行手續費、房屋鑑價費、地政塗銷與抵押權設定登記規費、代書費等，約占總借貸金額的2%至6%。",
    "How do I calculate my refinance break-even point?": "如何計算轉貸的回本平衡期（Break-Even Point）？",
    "Divide your total refinance closing costs by your monthly payment savings. If closing costs are $3,000 and you save $150 per month, your break-even point is 20 months ($3,000 / $150).": "將轉貸所需支付的所有開銷總額，除以每月省下的月付金額。例如手續費用3,000美元且每月省下150美元，則回本期為20個月。",
    "What is a 'no-closing-cost' refinance?": "什麼是免手續費轉貸？",
    "A no-closing-cost refinance means the lender either rolls the closing fees into your new total loan balance or charges a slightly higher interest rate to cover them.": "免手續費並非費用憑空消失，而是放貸銀行將這些成本併入新的貸款總本金中，或以略高的利率予以補償。",
    "Does refinancing lower my monthly payment or total interest?": "轉貸是降低了月繳金額還是減少了總利息支出？",
    "It depends on the term. Refinancing to a lower rate with the same or shorter term saves on both. Resetting your term back to 30 years lowers the monthly payment but can increase total lifetime interest.": "取決於新約期數。在維持或縮短年限的前提下獲得低利，兩者皆能省下；若為了追求超低月付額而將年期重新拉長至30年，全期累計利息反而可能增加。",

    // 5. Student Loan
    "What is the SAVE plan?": "什麼是美國的 SAVE 學貸還款方案？",
    "The Saving on a Valuable Education (SAVE) plan is an income-driven repayment (IDR) plan that protects discretionary income up to 225% of the poverty line, lowers payments to 5%-10%, and stops unpaid interest from accumulating.": "SAVE 方案依據借款人所得水準彈性計費，將受保護的可支配收入門檻提高至貧窮線的225%，月付額降至5%-10%，並全面凍結未繳利息的累計。",
    "How is discretionary income calculated for student loans?": "學貸中的可支配所得是如何計算的？",
    "Discretionary income is the difference between your Adjusted Gross Income (AGI) and a percentage of the federal poverty guideline for your family size (150% for PAYE/IBR, 225% for SAVE).": "指您的年度申報調整後總所得（AGI）減去依照家庭人口數對應的聯邦貧窮基準免還額（SAVE 方案以貧窮線225%計算）。",
    "How does student loan forgiveness work under IDR plans?": "在所得掛鉤方案下，學貸豁免是如何落實的？",
    "If you pay under an IDR plan for 20 or 25 years (or 10 years under SAVE for low initial balances), any remaining student debt is forgiven.": "只要在所得掛鉤方案下依約如期繳納20至25年（初始餘額較低者在 SAVE 方案下最快10年），剩餘未清償之學貸本息將全數予以豁免。",
    "Which IDR plan is best for me?": "哪一種所得掛鉤還款計劃最適合我？",
    "For most borrowers, the SAVE plan offers the lowest monthly payment and the best interest subsidy. Borrowers with very high incomes relative to debt may prefer PAYE or IBR due to payment caps.": "對多數借貸者而言，SAVE 方案能爭取到最低月付額與利息補貼；但若收入相對學貸餘額極高，具有月付上限保障的 PAYE 或 IBR 可能更有利。",
    "Can I switch student loan repayment plans at any time?": "我可以隨時更換學貸還款方案嗎？",
    "Yes, you can apply to switch repayment plans for free at studentaid.gov. However, switching plans can sometimes cause unpaid interest to capitalize.": "借款人可隨時於官方平台免費申請轉換方案，但更換方案有時可能導致積欠的未繳利息滾入本金計算。",

    // 6. DTI
    "What is the 28/36 rule?": "什麼是 28/36 負債收支比法則？",
    "The 28/36 rule is a standard mortgage underwriting guideline stating that housing costs should not exceed 28% of gross monthly income, and total debt payments should not exceed 36%.": "金融機構風控通則：每月房貸相關開銷不宜超過稅前月收入的28%，而包含所有信用卡、車貸在內的所有各項負債總支出不宜超過36%。",
    "How does DTI affect my mortgage application?": "負債所得比 (DTI) 如何左右房貸審核結果？",
    "Lenders use DTI to measure your ability to manage monthly payments. Lower DTIs below 36% receive the most favorable mortgage terms and lowest interest rates.": "銀行藉此評估申貸人的實質還款抗壓能力。DTI 保持在36%以下的優質客戶通常能爭取到最優惠的利率與貸款成數。",
    "What is the difference between front-end and back-end DTI?": "前端 DTI 與後端 DTI 有何差別？",
    "Front-end DTI only includes housing expenses (mortgage, property tax, insurance, HOA). Back-end DTI includes housing plus all recurring debts like credit cards, auto loans, and student loans.": "前端 DTI 僅計算房屋本身的固定成本（房貸、稅費、保險、管銷費）；後端 DTI 則囊括上述開銷加上信用卡分期、車貸、個人信貸等所有定期負債。",
    "What is the maximum DTI ratio lenders will accept?": "銀行放貸時所能接受的 DTI 最高極限是多少？",
    "Conventional mortgages typically prefer back-end DTIs of 36% to 43%. Government-backed loans like FHA and VA may allow DTIs up to 50% with strong compensating factors.": "一般金融機構多將後端 DTI 控制在36%至43%區間；若借款人信用評分極高或擁有豐沛財力證明，特定政策性專案上限可放寬至50%。",
    "How can I lower my Debt-to-Income ratio?": "如何有效改善並降低個人的負債所得比 (DTI)？",
    "You can lower your DTI by increasing gross income or paying off smaller debts completely to eliminate their recurring monthly minimum payments.": "可藉由提升薪資或額外收入，或優先將額度較小的小額信貸完全結清，以此消除每月的固定還款開銷。",

    // 7. APR
    "What is the difference between interest rate and APR?": "名目借款利率與實質總費用年百分率 (APR) 有何不同？",
    "The interest rate is the nominal cost of borrowing the principal balance. The Annual Percentage Rate (APR) reflects the total annual cost of the loan including points, broker fees, and origination charges.": "名目利率僅反映純借款本金的利息；總費用年百分率（APR）則將手續費、代辦費、開辦規費全數折算均攤，反映借款的全面實質年化總成本。",
    "Why is APR higher than the advertised interest rate?": "為什麼 APR 通常高於銀行廣告主打的名目利率？",
    "APR is higher because it amortizes all upfront lender fees, discount points, and closing costs into the effective yearly rate, revealing the true cost of credit.": "因為 APR 將借款人申貸初期所支付的開辦雜費全數均攤至各年，真實呈現包含規費在內的信貸綜合成本。",
    "Is APR useful for comparing different loan offers?": "APR 是不是評估挑選各家銀行貸款的最佳指標？",
    "Yes, APR is the best metric for comparing loan offers with different fee structures, provided you plan to keep the loan for its full term.": "是的，在預計完整持有合約期的前提下，APR 統一了各家機構繁雜的收費項目，是橫向客觀比較融資成本的最佳基準。",

    // 8. Rent vs Buy
    "How long do I need to stay in a home for buying to beat renting?": "買房自住通常需要持有多少年才能勝過租屋？",
    "Because upfront closing costs, moving fees, and commissions are substantial, homeowners usually need to stay in a property for 4 to 7 years for buying to financially outperform renting.": "由於買房需負擔可觀的契稅、代書登記規費與仲介服務費等沉沒成本，通常必須在該房屋居住4至7年以上，整體財務累積才會優於租屋投資。",
    "What hidden costs of homeownership should renters consider?": "租屋族在考慮轉為買房時，應注意哪些隱藏開銷？",
    "Homeowners must pay property taxes, homeowners insurance, maintenance and repairs (typically 1-2% of home value annually), HOA dues, and potential capital improvement costs.": "屋主每年需固定繳納房屋地價稅、火險、定期修繕保養費（約房屋總價的1%至2%）、管理費以及不可預期的修繕重置金。",
    "What is the opportunity cost of buying a home?": "買房自住隱含的財務機會成本是什麼？",
    "The money spent on down payment, closing costs, and ongoing property maintenance could otherwise remain invested in liquid assets like index funds that compound over time.": "用於支付高額自備款與各項規費的沉沒資金，若持續投入大盤指數基金等高流動性資產中，能長期享受強大的複利倍增潛力。",

    // 9. Home Affordability
    "How much income should I spend on a mortgage?": "房貸月付額占個人或家庭收入多少比例最為穩健？",
    "Most financial experts recommend spending no more than 25% to 28% of your gross monthly income on housing costs (the front-end DTI guideline).": "理財顧問普遍建議將包含房貸本息、稅賦與保險在內的住屋總開支，嚴格控制在月總所得的25%至28%以內。",
    "How does down payment size impact affordability?": "自備款（頭期款）金額多寡如何影響購屋預算？",
    "A larger down payment reduces your loan amount, eliminates Private Mortgage Insurance (PMI) if you put down 20%, and lowers your monthly mortgage payment.": "充沛的自備款不僅能降低借款總額、免去低於兩成首期款時額外加收的房貸保險，更能實質降低每月還款負擔。",
    "How do interest rates affect purchasing power?": "市場利率變動對個人購屋能力有多大衝擊？",
    "Every 1% increase in mortgage interest rates reduces your home purchasing power by roughly 10% for the same monthly payment budget.": "在維持每月固定還款預算不變的前提下，房貸利率每攀升1%，您所能負擔的最高房屋總價就會萎縮大約10%。",

    // 10. Auto Loan
    "What is the 20/4/10 rule for buying a car?": "購車理財的 20/4/10 準則是甚麼？",
    "The 20/4/10 rule recommends putting down at least 20%, financing for no longer than 4 years (48 months), and keeping total vehicle expenses under 10% of gross monthly income.": "建議購車頭期款自備不低於20%、車貸期數最長不超過4年（48期），且油資、保養、保險與車貸等總用車費用控制在月收入10%之內。",
    "Is a longer auto loan term better?": "車貸期數拉長至6年或7年比較好嗎？",
    "Longer terms (like 72 or 84 months) lower your monthly payment, but you pay substantially more total interest and risk becoming 'underwater' (owing more than the vehicle is worth).": "長分期雖然大幅壓低月繳負擔，但總利息支出遽增，且車輛折舊速度極易超過還款速度，面臨車輛殘值低於貸款餘額的風險。",
    "How does vehicle depreciation affect my loan?": "車輛急速折舊會給車貸帶來何種風險？",
    "New cars depreciate rapidly (often losing 20% in the first year). Without an adequate down payment, you risk owing more on your loan than the car's market value.": "新車落地第一年折舊常高達20%；若首期自備款不足，極易導致尚欠銀行的車貸餘額遠高於該車的二手市場殘值。",

    // 11. Credit Card Payoff
    "Why does paying only the minimum take so long?": "為什麼每個月只繳信用卡最低應繳金額要還上數十年？",
    "Credit card minimum payments are often set around 1% to 2% of the balance plus accrued interest. As the balance slowly drops, the required minimum drops, extending payoff times to decades.": "最低應繳額度多半僅涵蓋高額循環利息與極微小的本金（1%-2%）。隨本金微幅減少，最低繳款額也同步變少，導致清償期被無限延長。",
    "How much faster can I pay off credit cards by paying extra?": "每月多還一些額外金額能提早多久清償信用卡債？",
    "Paying even $50 or $100 above the minimum payment can cut your payoff timeline by several years and save thousands of dollars in compounding interest charges.": "只要在最低繳款額之外每月多還50或100美元，就能大幅縮減數年的還款漫長歲月，並省下數千美元的循環複利負擔。",
    "Should I use a balance transfer card to pay off debt?": "我該利用 0% 轉帳手續費代償卡來整合卡債嗎？",
    "A 0% APR balance transfer credit card can save significant interest if you pay off the full balance during the promotional period (typically 12-21 months) and factor in the 3%-5% transfer fee.": "若您能在免息推廣期內（約12-21個月）全額清償，並評估扣除3%-5%的手續費後仍有顯著利差，代償卡確實是絕佳的節息利器。",

    // 12. Retirement Planner
    "What is the 4% rule in retirement planning?": "退休規劃中的 4% 法則是甚麼概念？",
    "The 4% rule suggests that withdrawing 4% of your retirement portfolio in the first year, adjusted for inflation annually thereafter, provides a high probability that your nest egg will last at least 30 years.": "該法則主張於退休首年自資產中提取4%，其後每年隨通膨率微幅調整提領額，有極高機率確保退休準備金能持續支應30年以上。",
    "How much money do I need to retire comfortably?": "若想安心退休，一般需要累積多少退休準備金？",
    "A common benchmark is accumulating 25 times your anticipated annual retirement expenses, or replacing 70% to 80% of your pre-retirement income.": "通行的經驗評估標準是累積相當於退休後每年預估總支出25倍的資產總值，或達成退休前薪資70%至80%的所得替代率。",
    "How does inflation impact retirement spending?": "通膨對退休生活會造成什麼實質威脅？",
    "Inflation steadily reduces the purchasing power of your savings. At a 3% inflation rate, everyday living expenses double roughly every 24 years, requiring growing investment portfolios.": "通膨會不斷侵蝕實質購買力。在3%的溫和通膨下，生活開銷每24年便會倍增，因此退休資產中必須持續配置具有抗通膨成長力的部位。",

    // 13. 401(k)
    "What is an employer 401(k) match?": "什麼是雇主 401(k) 退休金提撥配繳？",
    "An employer match is money your employer contributes to your 401(k) account based on your own contributions (e.g. matching 50% of contributions up to 6% of your salary). It is effectively an instant return on your savings.": "指公司在員工自提退休金時，按一定比例加碼贈與的退休補助（如員工提撥6%薪資、公司補發50%），屬於確定且無風險的即時回饋。",
    "What are the 401(k) contribution limits for 2024?": "2024年度 401(k) 的個人法定提撥上限是多少？",
    "For 2024, the employee contribution limit is $23,000 for those under 50. Individuals aged 50 and older can contribute an additional $7,500 catch-up contribution for a total of $30,500.": "50歲以下個人的年度提撥上限為23,000美元；年滿50歲及以上者可額外追加7,500美元的追趕提撥，總上限可達30,500美元。",
    "What is the difference between Traditional 401(k) and Roth 401(k)?": "傳統 401(k) 與 Roth 401(k) 有何核心區別？",
    "Traditional 401(k) contributions are pre-tax and reduce your current taxable income, with withdrawals taxed in retirement. Roth 401(k) contributions are post-tax, but all qualified growth and withdrawals are completely tax-free.": "傳統 401(k) 採稅前扣抵以降低當期申報所得稅，提領時課稅；Roth 401(k) 採稅後所得提撥，但未來所有投資獲利與提領全額免稅。",

    // 14. IRA Comparison
    "What is the key difference between a Roth and Traditional IRA?": "Roth IRA 與傳統 IRA 個人退休帳戶的最大差異是什麼？",
    "Traditional IRA contributions are generally made pre-tax (reducing your current taxable income), but withdrawals in retirement are taxed as ordinary income. Roth IRA contributions are made with post-tax dollars; growth and withdrawals in retirement are completely tax-free.": "傳統 IRA 供款通常享有當年度稅前扣除額，但退休領出時視為一般所得課稅；Roth IRA 以稅後所得供款，但投資利得與退休提領完全免稅。",
    "Which IRA plan is better for me?": "我應該選擇哪一種 IRA 帳戶？",
    "If you expect your tax bracket to be higher in retirement than it is today, a Roth IRA is better. If you expect your tax bracket in retirement to be lower, a Traditional IRA is better.": "若您預期退休時適用的所得稅率將高於目前，選 Roth IRA 最佳；若預期退休後所得與稅階明顯降低，傳統 IRA 更具稅負優勢。",
    "What are the contribution limits for IRAs in 2024?": "2024年度 IRA 的法定存入額度上限為何？",
    "For 2024, the annual contribution limit for Traditional and Roth IRAs is $7,000 for individuals under age 50, and $8,000 for individuals age 50 or older.": "50歲以下人士每年供款上限為7,000美元；50歲以上人士每年上限為8,000美元。",
    "Are there income limits for contributing to Traditional and Roth IRAs?": "存入 IRA 帳戶有收入門檻限制嗎？",
    "Roth IRAs have income phase-out ranges that restrict high earners. Anyone with earned income can contribute to a Traditional IRA, but tax deductibility may be limited by income and workplace retirement coverage.": "Roth IRA 設有高所得排富落日條款；傳統 IRA 只要有主動所得皆可存入，但其節稅扣除資格可能因所得過高而受限。",
    "Can I withdraw money from my IRA before age 59½ without penalty?": "未滿59歲半提前從 IRA 提領款項會有罰款嗎？",
    "Roth IRA original contributions can be withdrawn at any time penalty-free. Withdrawing investment earnings early or withdrawing Traditional IRA funds before 59½ usually incurs income taxes and a 10% penalty.": "Roth IRA 本金部分可隨時免稅免罰提領；提領獲利或自傳統 IRA 提前提領通常需補繳所得稅並加收10%懲罰性罰款。",

    // 15. Compound Interest
    "What is compound interest?": "什麼是複利？",
    "Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods. It causes your wealth to grow exponentially over time.": "複利是指本金所產生的利息在後續計息期亦會滾入本金一同計息，隨著時間推移讓財富呈現指數型的飛躍成長。",
    "What is the Rule of 72?": "什麼是 72 法則？",
    "The Rule of 72 is a quick mental formula to estimate how many years it takes to double your money. Divide 72 by your annual interest rate (e.g. at 8%, your money doubles in about 9 years).": "72法則是快速心算本金翻倍所需時間的簡易公式。將72除以年化預期報酬率即可估算出翻倍年限（例如8%年利率約需9年翻倍）。",
    "How does compounding frequency affect total returns?": "複利計息的頻率如何影響最終財富累積？",
    "The more frequently interest compounds (annually, monthly, daily), the higher your effective annual yield (APY) will be, as interest starts earning interest sooner.": "計息週期越頻繁（按月、按日），實際年化收益率（APY）就越高，因為產生的利息能越早投入再創造新利息。",

    // 16. TVM
    "What is the Time Value of Money (TVM)?": "什麼是貨幣的時間價值 (TVM)？",
    "The Time Value of Money principle states that a dollar today is worth more than a dollar in the future because today's dollar can be invested and earn interest.": "核心金融概念：今天持有的一元價值高於未來的一元，因為當前的資金具備立即投入市場賺取利息的獲利潛力。",
    "What are the core components of TVM calculations?": "時間價值財務計算模型包含哪些核心要素？",
    "The five core variables are Present Value (PV), Future Value (FV), Interest Rate per Period (Rate), Total Number of Periods (Nper), and Periodic Payment (PMT).": "包含五大基本變數：現值 (PV)、終值 (FV)、每期利率 (Rate)、期數總計 (Nper) 以及每期定期給付額 (PMT)。",
    "What is the difference between an ordinary annuity and annuity due?": "普通年金與先付年金有何差異？",
    "In an ordinary annuity, payments occur at the end of each period. In an annuity due, payments occur at the beginning of each period, earning an extra compounding cycle of interest.": "普通年金於每期期末付款；先付年金於每期期初付款，因此能額外享有整整一期的複利計息效益。",

    // 17. ROI
    "How is Return on Investment (ROI) calculated?": "投資報酬率 (ROI) 是如何計算的？",
    "ROI is calculated by subtracting the initial cost of the investment from the final value, and dividing that net gain by the initial cost: ROI = (Net Profit / Cost of Investment) × 100%.": "計算方式為期末總價值減去初始購入成本求得淨利潤，再除以初始購入成本：ROI = (淨利潤 / 投資成本) × 100%。",
    "What is the difference between simple ROI and annualized ROI?": "累積簡單報酬率與年化報酬率 (CAGR) 有何不同？",
    "Simple ROI measures total percentage return regardless of duration. Annualized ROI (CAGR) standardizes the return into a per-year geometric rate, enabling fair comparison between investments held for different lengths of time.": "簡單報酬率代表不論投資年限的累計總獲利百分比；年化報酬率則標準化為每年幾何平均複合回報，便於比較不同投資天期的工具。",
    "What is considered a good ROI?": "怎樣的水準才稱得上是優秀的投資回報率？",
    "Historically, the broad stock market (S&P 500) has returned an average of 7% to 10% annually before inflation. Investments with higher expected returns generally involve higher risk of capital loss.": "歷史上成熟股市大盤（標普500）長期平均年化實質回報約7%至10%；過高預期報酬往往伴隨承受本金永久虧損的高風險。",

    // 18. Savings Goal
    "How do I calculate how much to save monthly for a goal?": "如何推算每月應為目標存下多少錢？",
    "You divide your target savings amount by the number of months until your deadline, while factoring in the compounding interest earned on your growing balance.": "將目標總金額除以預定達標的剩餘月份數，同時扣除帳戶中已存資金在期間內預期產生的複利收益。",
    "Should I keep savings goal funds in high-yield savings or stocks?": "目標儲蓄資金應該放在高利定存還是投資股票？",
    "For goals under 3 to 5 years (like a car or home down payment), keep funds in safe, liquid instruments like High-Yield Savings Accounts (HYSA) or CDs. For goals 5+ years away, a diversified investment portfolio may be suitable.": "3至5年內的短中期目標應擺在保本的高活儲或定期存單；5年以上的長期目標才適合配置於分散的指數投資組合。",
    "How can I stay on track with my savings goals?": "如何確保能按部就班堅持落實儲蓄目標？",
    "Automate recurring monthly transfers into a dedicated savings account immediately after your paycheck arrives (the 'pay yourself first' strategy).": "在每月發薪日當天立即設定自動扣款轉帳至獨立的專用儲蓄帳戶（貫徹『先付錢給自己』的理財原則）。",

    // 19. Stock Return
    "How do I calculate stock returns?": "如何計算股票投資的總報酬率？",
    "Total stock return equals capital gains (ending price minus purchase price) plus any dividends received, divided by the original purchase cost.": "股票總回報等於資本利得（出售價減購入價）加上持有期間收到的所有現金及股票股利，再除以最初買入總成本。",
    "What is CAGR in stock returns?": "股票分析中的 CAGR 代表甚麼意義？",
    "Compound Annual Growth Rate (CAGR) measures the geometric mean annual return of a stock over multiple years, smoothing out annual market fluctuations.": "年複合成長率（CAGR）衡量持股多年期間平滑掉各單一年度劇烈波動後的幾何平均年增率。",
    "What is the difference between simple return and annualized return?": "絕對累積報酬與年化複合報酬有何不同？",
    "Simple return measures absolute percentage gain over the entire holding period, while annualized return shows the steady annual rate required to achieve that result.": "絕對報酬呈現持有期內的總收益漲幅；年化報酬則反映若每年以穩定速度成長達到該成果所需的等效年增率。",

    // 20. CAPM
    "What is the Capital Asset Pricing Model (CAPM)?": "什麼是資本資產定價模型 (CAPM)？",
    "CAPM calculates an asset's expected return based on its risk relative to the overall market, using the formula: Expected Return = Risk-Free Rate + Beta × (Market Return - Risk-Free Rate).": "以標的資產相對市場的系統性風險測算其合理期望報酬：預期報酬率 = 無風險利率 + Beta × (市場平均報酬 - 無風險利率)。",
    "What does Asset Beta (β) represent?": "股票貝塔值 (β) 代表甚麼含義？",
    "Beta measures an asset's volatility compared to the broader market. A beta of 1.0 indicates market-level volatility; above 1.0 indicates higher volatility, and below 1.0 indicates lower volatility.": "Beta 衡量標的相對大盤的波動靈敏度。β=1表示走勢與大盤同步；β>1表示波動劇烈於大盤；β<1則表示波動較平緩穩健。",
    "What is the Risk-Free Rate?": "什麼是無風險基準利率？",
    "The risk-free rate is the theoretical rate of return of an investment with zero risk of default, typically represented by long-term government bond yields (like 10-year US Treasuries).": "指完全不存在違約倒閉風險的理論報酬率，實務上通常採用主權信用評等頂級的10年期公債殖利率為代表。",
    "What is the Market Risk Premium?": "什麼是市場風險溢酬？",
    "The market risk premium is the additional return investors demand for choosing risky market equities over risk-free government securities.": "指投資人捨棄毫無風險的國債、轉而承擔股市波動風險時，所額外要求索取的超額風險補償回報。",

    // 21. Dividend
    "What is dividend yield versus yield on cost?": "當前殖利率 (Dividend Yield) 與原始成本殖利率 (Yield on Cost) 有何不同？",
    "Dividend yield is the annual dividend divided by the current stock price. Yield on cost is the annual dividend divided by your original purchase price, which increases as companies raise their dividends over time.": "當前殖利率是年配息除以股票現價；成本殖利率是年配息除以您的原始購入價，隨企業持續增發股利，該指標會穩健走高。",
    "What is a Dividend Reinvestment Plan (DRIP)?": "什麼是股利再投資計劃 (DRIP)？",
    "A DRIP automatically uses your cash dividend payments to purchase additional shares or fractional shares of the stock, compounding your share count and future payouts without commission fees.": "此機制能將發放的現金股利自動用於免手續費增購該標的的零股或整股，讓股數與未來股息產生強大的複利滾動效應。",
    "Are dividend payments guaranteed?": "上市公司的股利分紅是有法律保障的嗎？",
    "No, company boards can reduce, suspend, or eliminate dividend payouts at any time depending on company profitability and economic conditions.": "並非保證。董事會有權依據企業當年度獲利狀態、自由現金流及產業景氣隨時縮減、暫停或停發股息。",

    // 22. Inflation
    "What is inflation?": "什麼是通貨膨脹？",
    "Inflation is the general rise in prices for goods and services over time, resulting in a decline in the purchasing power of money.": "指一段時間內民生物資與服務價格普遍且持續上漲的經濟現象，直接導致貨幣購買力發生縮水。",
    "How does inflation affect my savings?": "通膨如何侵蝕我們的個人存款？",
    "Cash sitting in zero-interest accounts loses purchasing power each year. If inflation is 3%, $100 today will only buy about $97 worth of goods next year.": "未投入生息的閒置現金購買力逐年萎縮；若通膨率為3%，現在的100元到了明年實質上只能買到現值97元的物品。",
    "How is inflation officially measured?": "官方指標通常如何計算通膨率？",
    "Inflation is primarily measured using the Consumer Price Index (CPI), which tracks price changes across a standard market basket of consumer goods and services.": "主要透過消費者物價指數（CPI）進行追蹤，計算一般家庭日常生活典型消費商品與勞務組合的物價漲跌幅度。",
    "What is the historical average inflation rate?": "長期歷史平均通膨率大概落在多少區間？",
    "In the United States, inflation has historically averaged between 2.5% and 3.2% per year over long multi-decade horizons.": "跨越多個世代的長期數據顯示，主要成熟經濟體的年化平均通膨率普遍落於2.5%至3.2%區間。",
    "How can I protect my money from losing value to inflation?": "如何防範資產縮水並戰勝通膨？",
    "Investing in assets whose earnings outpace inflation—such as diversified equities, Treasury Inflation-Protected Securities (TIPS), real estate, and inflation-indexed bonds.": "將資金布局於實質報酬率跑贏通膨的抗通膨資產，如分散型股票指數、抗通膨國債（TIPS）及具增值潛力的精華不動產。",

    // 23. Paycheck
    "What is FICA tax?": "什麼是薪資社保預扣稅？",
    "FICA is a federal payroll tax that funds Social Security (6.2% on wages up to the wage base limit) and Medicare (1.45% plus an additional 0.9% on high earners).": "指由雇主與受雇員工依比例共同繳納，用於支應全民公共養老退休金與國家健康醫療保險體系的強制性法定義務支出。",
    "What is the difference between pre-tax and post-tax deductions?": "稅前扣除項目與稅後扣除項目有何差別？",
    "Pre-tax deductions (like 401k and health insurance) reduce your taxable gross income before taxes are computed. Post-tax deductions (like Roth contributions or wage garnishments) are taken after taxes.": "稅前扣除（如自提退休金、勞健保）先於所得稅計算並能有效壓低應稅薪資總額；稅後扣除則是在所得稅預扣完畢後自淨薪資中扣取。",
    "What is the difference between gross pay and net pay?": "應發應得薪資（毛收入）與實領到手薪資有何不同？",
    "Gross pay is the total amount earned before any taxes or deductions. Net pay (take-home pay) is the actual cash deposited into your bank account after all deductions.": "應發工資是勞動契約約定的全額報酬；實領工資是依法扣除所得稅、勞保、健保費及各項法定自負額後，實際匯入帳戶的現金。",
    "How does my W-4 filing status affect my paycheck?": "扶養親屬申報如何影響每月實領薪資？",
    "Your W-4 form informs your employer how much federal income tax to withhold each pay period based on your filing status, dependents, and other income.": "所得稅申報表依據受撫養親屬人口數與專項特別扣除額，決定雇主每月應為員工代扣預繳的個人綜合所得稅額度。",
    "Why do state and local taxes vary so much?": "為什麼各行政區的地方稅率差距如此懸殊？",
    "State income tax rates range from 0% (in states like Texas, Florida, and Washington) to over 13% in high-tax states, while some cities also impose local municipal income taxes.": "不同行政特區與地方政府享有獨立的租稅立法裁量權，部分地區完全不徵收地方所得稅，部分高稅率都會區則課徵高額地方稅捐。",

    // 24. Net Worth
    "What is net worth?": "什麼是個人資產淨值 (Net Worth)？",
    "Net worth is the total market value of everything you own (assets) minus everything you owe to creditors (liabilities).": "資產淨值是您名下所擁有各項財產的現時市場公允總值（總資產），扣除掉所有積欠債權人的各類債務總和（總負債）後的純值。",
    "How often should I calculate my net worth?": "我應該多久盤點一次個人資產淨值？",
    "Reviewing your net worth quarterly or semi-annually gives you a clear high-level view of your financial health without obsessing over daily market swings.": "每季或每半年進行一次資產盤點，能提供宏觀穩健的財務健康指針，免於被每日的市場行情波動擾亂情緒。",
    "What counts as an asset vs. a liability?": "哪些屬於資產？哪些屬於負債？",
    "Assets include bank balances, investment accounts, home equity, and retirement funds. Liabilities include mortgages, student loans, car loans, and credit card debt.": "資產包括活存定存、證券股票、房產市值與退休金帳戶；負債包括房貸餘額、學貸、車貸與信用卡卡債。",
    "Should I include my house and mortgage in my net worth?": "計算個人淨資產時應該包含自住房屋與房貸嗎？",
    "Yes, you include the current fair market value of the home under assets and the remaining mortgage balance under liabilities. The difference is your home equity.": "應當納入：將房屋最新的市場公允估值計入資產，將尚未償還的房貸餘額列入負債，兩者相減的差額即為純房產淨權益。",
    "What does it mean to have a negative net worth?": "個人淨值呈現負數意味著什麼？",
    "A negative net worth means your total debts exceed your total assets. This is common for young adults and recent graduates with student loans.": "意味著總負債金額超過總資產，處於資不抵債狀態，這在初入社會背負學貸或剛辦理高成數房貸的年輕族群中十分普遍。",

    // 25. Emergency Fund
    "How much emergency fund is recommended?": "緊急備用金應該準備多少個月的開銷？",
    "Most financial planners recommend saving 3 to 6 months of essential living expenses, or 9 to 12 months for freelancers or single-income households.": "理財顧問建議一般受薪階級儲備3至6個月的基本剛性生活開銷；接案自由業或單薪撫養家庭則應備足9至12個月。",
    "What expenses should be included in an emergency fund budget?": "緊急預備金預算中應該包含哪些具體開銷？",
    "Include only non-negotiable living costs: housing (rent/mortgage), utilities, groceries, basic transportation, minimum debt payments, and healthcare insurance.": "僅列入維持生活必需的固定開支：房租或房貸、水電瓦斯、三餐基本飲食、基礎交通費、法定保險與最低債務還款。",
    "Where should I keep my emergency fund?": "緊急備用金存放在哪種金融工具中最為合適？",
    "In a dedicated High-Yield Savings Account (HYSA) or money market account where it is FDIC-insured, earns interest, and can be accessed immediately without risk.": "放置於具存款保障、高流動性且支持隨時提領的貨幣市場基金或高利數位活儲帳戶中，確保本金不受市場波動威脅。",
    "Should I pay off debt or build an emergency fund first?": "應該先清償債務還是先存滿緊急備用金？",
    "Build a starter emergency fund of 1 month of expenses or $1,000 to $2,000 first, then aggressively pay off high-interest consumer debt before expanding to 3-6 months.": "建議先存下1個月生活費（或1,000-2,000美元）作為初步防火牆，隨後全力加速撲滅高循環利息債務，最後再回頭補足3-6個月規模。",
    "When is it appropriate to use emergency fund savings?": "在何種情境下才能動用緊急備用金？",
    "Use it only for genuine, unexpected emergencies: sudden medical bills, unexpected car repairs, or living expenses following job loss.": "僅限用於不可預測且突發的緊急事故：如意外醫療自費、工作代步車輛嚴重拋錨修繕，或遭遇無預警非自願離職時的家庭度汛。",

    // 26. Fee Impact
    "What is an expense ratio?": "什麼是基金或 ETF 的內扣總費用率 (Expense Ratio)？",
    "An expense ratio is the annual percentage fee charged by mutual funds and ETFs to cover fund management, administrative expenses, and operating costs.": "指基金或 ETF 每年直接從總資產中按比例扣除的經營、經理人管理、指數授權及行政保管成本費用率。",
    "How do fees compound over time?": "經理費與內扣手續費如何隨著時間複利侵蝕投資成果？",
    "Fees are deducted annually from your total assets, meaning you lose both the fee money and all future compounding returns that money would have earned.": "內扣費用每年自整體本息中直接扣收，這不僅使您失去該筆費用本身，更永久剝奪了這筆被扣掉的資金在未來數十年間本可創造的全部複利效益。",
    "What is a good expense ratio for an index fund?": "指數型基金或 ETF 的合理費用率標準為何？",
    "Low-cost index funds and ETFs typically have expense ratios between 0.02% and 0.10%, whereas actively managed mutual funds often charge 0.60% to 1.50% or more.": "優質的被動追蹤大盤 ETF 總費用率通常極低，介於0.02%至0.15%之間；而傳統主動式股票型基金收取的管理費用則往往高達0.8%至2.0%甚至更高。",
    "What other investment fees should I look out for?": "還有哪些常見的投資交易隱形費用需要注意？",
    "Watch out for advisory fees (AUM fees of 1%), front-end or back-end sales loads, trading commissions, account maintenance fees, and custodial charges.": "包括資產管理顧問費（每年1%）、申購手續費、贖回後收手續費、證券交易稅、券商下單手續費及帳戶維護保管費等。",
    "How much can a 1% fee difference affect my retirement savings?": "看似不起眼的1%內扣費用差距，會對長期退休資產造成多大傷害？",
    "A 1% annual fee difference can erode 25% to 30% of your total ending portfolio wealth over a 30-year investment horizon.": "在長達30年的投資馬拉松中，每年僅僅1%的微小費率差距，足以無聲無息吞噬掉您期末累積總財富的25%至30%！",

    // 27. College Savings
    "What is a 529 plan?": "什麼是美國的 529 大學教育儲蓄專案？",
    "A 529 plan is a tax-advantaged savings and investment plan designed to encourage saving for future higher education expenses with tax-free growth and qualified withdrawals.": "由政府設立具有稅負優惠的專項高等教育儲蓄與投資架構，其投資利得與合格教育用途提領完全免除聯邦稅負。",
    "How fast do college costs increase?": "大學高等教育學雜費通常每年上漲有多快？",
    "Historically, higher education tuition and fees have increased at an annual rate of 4% to 6%, outpacing general consumer inflation.": "歷史統計顯示，大學學雜費的年平均漲幅往往高達4%至6%，明顯高於一般民生消費物價通膨率。",
    "What happens to 529 funds if my child does not go to college?": "如果子女將來選擇不就讀大學，帳戶中的資金該如何處置？",
    "You can change the beneficiary to another qualifying family member, use up to $10,000 for student loan repayment, or roll over up to $35,000 into a Roth IRA under SECURE 2.0 rules.": "可直接將受益人變更為其他家庭親屬成員、提領最多10,000美元清償就學貸款，或依新修訂法規將最高35,000美元免稅滾存移轉至 Roth IRA 退休帳戶。",
    "Can I use a 529 plan for trade schools or K-12 tuition?": "529 專款能用於技術學校或中小學學費嗎？",
    "Yes, qualified distributions can cover accredited trade schools, vocational programs, apprenticeships, and up to $10,000 per year for K-12 private school tuition.": "可以，該款項可用於合格立案的職業技職訓練學校，且每年可支持最高10,000美元的私立中小學基礎教育學費。",
    "How does a 529 plan impact financial aid eligibility?": "529 帳戶資產是否會影響助學金與學生貸款補助的申請資格？",
    "Parent-owned 529 plans are assessed as parental assets on the FAFSA at a maximum rate of 5.64%, having minimal negative impact on financial aid eligibility.": "以父母名義持有的 529 帳戶在清寒助學金審核時最多僅計入5.64%資產權重，對整體助學金申請權益影響甚微。",

    // 28. Crypto DCA
    "What is Dollar-Cost Averaging (DCA)?": "什麼是定期定額投資法 (DCA)？",
    "Dollar-Cost Averaging is an investment strategy where you invest a fixed amount of money at regular intervals regardless of the asset's fluctuating market price.": "定期定額是指無論標的當前價格高低，皆於固定時間週期扣款投入固定金額以降低擇時風險的投資策略。",
    "How does DCA apply to high-volatility assets like Crypto?": "定期定額為何特別適合運用在加密貨幣等劇烈波動資產？",
    "DCA prevents emotional decisions during extreme market peaks and crashes, automatically buying more units when prices are low and fewer when prices are high.": "定期定額能克服追高殺跌的人性心理弱點，在低點時自動購得更多單位數，有效攤平長期持倉成本。",
    "Is DCA better than investing a lump sum?": "定期定額比單筆一次性全部歐印投入更好嗎？",
    "Lump sum investing historically wins in steadily rising markets, but DCA provides superior peace of mind, lower emotional risk, and downside protection in highly volatile markets.": "在長期單邊持續上漲的市場中單筆進場獲利較佳；但在面臨極度劇烈震盪的大起大落市場中，定期定額能提供無可替代的心理平靜與風險防禦。",
    "What is the best frequency for crypto DCA?": "定期定額加密資產的最佳扣款頻率是什麼？",
    "Weekly or bi-weekly DCA aligned with your pay cycle is ideal for capturing market volatility while keeping trading fees manageable.": "配合發薪週期進行每週或雙週扣款最為理想，既能平滑價格波動，又不會過度衍生頻繁下單的手續費負擔。",
    "Does DCA guarantee profits in cryptocurrency?": "持續定期定額投資加密貨幣能保證一定獲利嗎？",
    "No, DCA does not protect against prolonged declines or failing crypto projects; it only ensures you achieve the weighted average market purchase price.": "不能。定投無法化解標的項目歸零或長年陰跌的基本面崩壞風險；它只能確保您取得這段期間內市場交易的加權平均成本。",

    // 29. Tip
    "What is the standard tipping percentage?": "給予小費的通用比例標準大概是多少？",
    "In the United States and Canada, standard restaurant tipping guidelines range from 15% for adequate service, 18% for good service, to 20% or more for exceptional service.": "在北美餐廳就餐，一般服務給15%，良好服務給18%，態度親切出色或高級餐廳則普遍給予20%或更多小費。",
    "Should tips be calculated before or after sales tax?": "小費應該以稅前金額還是稅後總額來計提？",
    "Etiquette traditionally dictates calculating the tip percentage on the pre-tax food and beverage subtotal, though many automated payment terminals calculate tip on the post-tax total.": "傳統餐飲禮儀規範是以消費餐點飲料的稅前小計為基準計算小費，儘管目前多數刷卡機結帳終端常預設以含稅總金額計算。",
    "How do you split a bill evenly among friends?": "朋友聚會如何公平均攤分帳？",
    "Calculate the total bill including food, beverages, tax, and tip, and divide the total amount equally by the number of paying participants.": "將餐點、飲品、消費稅與全額小費加總獲得總帳單金額，再均分除以實際分攤人數即可得每人應付額。",

    // 30. Discount
    "How do you calculate a percentage discount?": "百分比折扣是如何計算的？",
    "Multiply the original price by the discount percentage divided by 100 to find the savings, and subtract that amount from the original price: Final Price = Original Price × (1 - Discount%).": "將原價乘以折扣百分比除以100計算出減免金額，再自原價中扣除：結帳總價 = 原價 × (1 - 折扣率)。",
    "How do multiple stacked discounts work?": "多重疊加折扣是如何連環計算的？",
    "Stacked discounts apply sequentially rather than additively. For example, 20% off plus an extra 10% off results in an effective 28% total discount, not 30%.": "疊加優惠是連續順序相乘計算而非直接相加：例如全館八折（省20%）再享額外九折（省10%），實質總減免為28%，而非30%。",
    "Is sales tax applied before or after store discounts?": "消費稅（營業稅）是在折扣前還是打折後計算？",
    "In most jurisdictions, sales tax is calculated on the discounted post-sale price, meaning you pay sales tax only on the actual money spent.": "在絕大多數地區，營業稅皆以折扣折讓後的實際結帳成交價格為稅基，您只需為實際支付的金額繳稅。"
  },

  // Japanese (ja)
  ja: {
    // 1. Mortgage
    "How is a mortgage payment calculated?": "住宅ローンの毎月の返済額はどのように計算されますか？",
    "A standard monthly mortgage payment consists of Principal & Interest (P&I), property taxes, homeowners insurance, private mortgage insurance (PMI) if down payment is under 20%, and homeowner association (HOA) fees.": "毎月の住宅ローン支払額は、元金と利息、固定資産税、火災保険・地震保険料、頭金20%未満の場合の保証料、および管理費・修繕積立金から構成されます。",
    "What is PMI and when do I pay it?": "住宅ローン保証料（PMI）とは何ですか？いつ支払う必要がありますか？",
    "Private Mortgage Insurance (PMI) is a policy that protects the lender if you default. It is typically required on conventional loans if your down payment is less than 20% of the home purchase price.": "債務不履行リスクから金融機関を保護するための保証保険です。通常、購入価格に対する自己資金（頭金）が20%未満の場合に加入が義務付けられます。",
    "What does PITI stand for?": "PITIとは何の略ですか？",
    "PITI stands for Principal, Interest, Taxes, and Insurance. These are the four basic components that make up a homeowner's monthly housing payment. Together, they reflect the true cost of owning a home on a month-to-month basis.": "元金（Principal）、利息（Interest）、税金（Taxes）、保険料（Insurance）の頭文字を取ったもので、住宅保有に伴う毎月の実質的コストの総称です。",
    "Is a 15-year mortgage better than a 30-year mortgage?": "15年返済と30年返済はどちらが有利ですか？",
    "A 15-year mortgage typically offers a lower interest rate and allows you to pay off your home twice as fast, saving you tens of thousands of dollars in interest. However, a 30-year mortgage has lower monthly payments, which provides greater cash flow flexibility.": "15年返済は低金利が適用され総利息負担を大幅に圧縮できますが、30年返済は毎月の支払額を抑えて家計のキャッシュフローにゆとりを持たせることができます。",
    "How do extra payments affect my mortgage payoff schedule?": "繰り上げ返済を行うと返済計画はどう変わりますか？",
    "Any extra money you pay towards your mortgage is applied directly to the principal balance. This reduces the remaining loan balance and decreases the amount of interest that accumulates, helping you pay off your mortgage years ahead of schedule.": "繰り上げ返済額はすべて直接元本の減額に充当されます。これにより将来発生する利息が減少し、完済までの期間を数年単位で短縮できます。",

    // 2. Loan Calculator
    "How does an amortized loan work?": "元利均等返済の仕組みはどうなっていますか？",
    "With an amortized loan, you make equal periodic payments. Early in the loan term, the majority of each payment goes toward interest. Over time, an increasing portion goes toward paying down the principal balance until the debt is fully paid off.": "毎回の返済額が一定となる方式です。返済初期は利息の割合が高く、借入残高の減少に伴い元金の充当割合が徐々に高まっていきます。",
    "What is the difference between fixed-rate and variable-rate loans?": "固定金利型と変動金利型にはどのような違いがありますか？",
    "A fixed-rate loan maintains the exact same interest rate and payment throughout the loan term. A variable-rate loan has an interest rate that adjusts periodically based on benchmark interest rates, which can increase or decrease your payments.": "固定金利型は全期間で金利と返済額が変わりません。変動金利型は半年ごとなどの基準金利の見直しに応じて返済額が増減します。",
    "Can I pay off my loan early without penalty?": "違約金なしで全額繰り上げ返済や前倒し返済はできますか？",
    "Most consumer loans and conventional mortgages allow prepayment without penalties, but some lenders include a prepayment penalty clause. Always verify your loan agreement terms before making accelerated principal payments.": "一般消費者ローンや多くの住宅ローンでは手数料無料ですが、一部の固定金利商品や信販会社では事務手数料や違約金が設定されている場合があります。",

    // 3. Debt Payoff
    "What is the Debt Snowball method?": "スノーボール（雪だるま）返済法とは何ですか？",
    "The Debt Snowball method involves paying off your smallest debt balances first, regardless of interest rates. It builds psychological momentum and motivation through quick wins.": "金利の高低にかかわらず、残高が最も小さい負債から優先して完済していく手法です。迅速な成功体験により心理的な達成感と継続意欲を高めます。",
    "What is the Debt Avalanche method?": "アバランチ（雪崩）返済法とは何ですか？",
    "The Debt Avalanche method involves paying off your highest interest rate debts first. Mathematically, this minimizes the total interest you pay and helps you become debt-free faster.": "金利が最も高い負債から集中的に完済していく手法です。数理計算上、支払利息総額を最小限に抑え、最も早く無借金状態に到達できます。",
    "Which method is better: Debt Snowball or Debt Avalanche?": "スノーボール法とアバランチ法はどちらが優れていますか？",
    "Mathematically, the Debt Avalanche method is superior because it minimizes the total interest paid. However, studies show that the Debt Snowball method is often more successful in practice because the psychological momentum helps people stick to their plan.": "財務理論上は利息を節約できるアバランチ法が優位ですが、現実には小さな借金を次々に消去できるスノーボール法の方が挫折しにくいと証明されています。",
    "How does the 'extra payment' roll over in these strategies?": "余剰返済資金はどのように引き継がれますか？",
    "You continue paying minimums on all debts and add your extra cash to the target debt. Once that target debt is fully paid off, you roll its entire payment into the next debt on your list.": "他の全負債で最低返済額を維持しつつ、余剰現金を目標の負債に集中投入します。完済後はその返済原資を丸ごと次の負債の返済に繰り越します。",
    "Can I do a hybrid of Snowball and Avalanche?": "両方の手法を組み合わせたハイブリッド運用は可能ですか？",
    "Yes. Many people pay off one or two small debts first to free up immediate cash flow (Snowball), and then pivot to targeting the remaining debts by highest interest rate (Avalanche).": "はい。最初の1〜2件の少額借入を完済して手元資金を確保し（スノーボール）、その後は高金利順の返済に切り替える（アバランチ）方法が実用的です。",

    // 4. Refinance
    "When should I refinance my loan?": "住宅ローンの借り換えはいつ行うべきですか？",
    "It generally makes sense to refinance if you can secure a lower interest rate, reduce your monthly payment, or shorten your term, provided your total interest savings exceed the closing costs.": "借り換えによって金利を大幅に引き下げられ、利息削減効果が事務手数料や登記費用などの諸経費を上回る場合に推奨されます。",
    "What closing costs are associated with refinancing?": "住宅ローンの借り換えにはどのような初期費用がかかりますか？",
    "Refinancing costs typically include application fees, origination fees, appraisal costs, title search and insurance, credit report fees, and recording fees, ranging from 2% to 6% of the loan amount.": "融資事務手数料、保証料、抵当権抹消・設定の登録免許税、司法書士報酬などがかかり、借入額の2%〜5%程度が一般的です。",
    "How do I calculate my refinance break-even point?": "借り換えの損益分岐点（元が取れる期間）はどう計算しますか？",
    "Divide your total refinance closing costs by your monthly payment savings. If closing costs are $3,000 and you save $150 per month, your break-even point is 20 months ($3,000 / $150).": "借り換えにかかる諸費用の総額を毎月の返済軽減額で割ります。費用が30万円で毎月1.5万円軽減される場合、損益分岐点は20か月となります。",
    "What is a 'no-closing-cost' refinance?": "手数料実質0円の借り換えとはどのようなものですか？",
    "A no-closing-cost refinance means the lender either rolls the closing fees into your new total loan balance or charges a slightly higher interest rate to cover them.": "手数料が無料になるのではなく、諸費用分が新しい借入元本に上乗せされているか、若干高めの適用金利に転嫁されています。",
    "Does refinancing lower my monthly payment or total interest?": "借り換えで減るのは月々の返済額ですか、それとも総利息ですか？",
    "It depends on the term. Refinancing to a lower rate with the same or shorter term saves on both. Resetting your term back to 30 years lowers the monthly payment but can increase total lifetime interest.": "返済期間によります。期間を変えずに金利を下げれば両方削減されますが、返済期間を延ばすと毎月の負担は減っても総利息が増える可能性があります。",

    // 5. Student Loan
    "What is the SAVE plan?": "米国の奨学金・学生ローン返済プラン「SAVE」とは何ですか？",
    "The Saving on a Valuable Education (SAVE) plan is an income-driven repayment (IDR) plan that protects discretionary income up to 225% of the poverty line, lowers payments to 5%-10%, and stops unpaid interest from accumulating.": "所得連動型返済プランで、貧困基準の225%に相当する所得を保護し、月々返済額を可処分所得の5〜10%に抑え、未払利息の元本組入を防ぎます。",
    "How is discretionary income calculated for student loans?": "学生ローンにおける「可処分所得」はどのように算出されますか？",
    "Discretionary income is the difference between your Adjusted Gross Income (AGI) and a percentage of the federal poverty guideline for your family size (150% for PAYE/IBR, 225% for SAVE).": "調整後総所得（AGI）から、世帯人数に応じた連邦貧困基準免除額（SAVEプランでは225%）を控除した差額です。",
    "How does student loan forgiveness work under IDR plans?": "所得連動プランにおける残債免除はどのように機能しますか？",
    "If you pay under an IDR plan for 20 or 25 years (or 10 years under SAVE for low initial balances), any remaining student debt is forgiven.": "プランの定めに従い20年または25年間（低残高の場合は最短10年間）継続して返済を行えば、残存する債務残高は全額免除されます。",
    "Which IDR plan is best for me?": "どの返済プランが最も適していますか？",
    "For most borrowers, the SAVE plan offers the lowest monthly payment and the best interest subsidy. Borrowers with very high incomes relative to debt may prefer PAYE or IBR due to payment caps.": "大半の借入者にはSAVEプランが最小負担となりますが、負債に対して高収入な方の場合は上限設定があるPAYEやIBRが有利な場合もあります。",
    "Can I switch student loan repayment plans at any time?": "返済プランは途中で自由に変更できますか？",
    "Yes, you can apply to switch repayment plans for free at studentaid.gov. However, switching plans can sometimes cause unpaid interest to capitalize.": "公式サイトを通じて無料で変更手続きが可能ですが、プラン変更時に未払利息が元本に組み入れられる場合があります。",

    // 6. DTI
    "What is the 28/36 rule?": "28/36基準（返済負担比率ルール）とは何ですか？",
    "The 28/36 rule is a standard mortgage underwriting guideline stating that housing costs should not exceed 28% of gross monthly income, and total debt payments should not exceed 36%.": "住宅関連コストを月収の28%以内に抑え、カードやマイカーローンを含む負債全体の返済額を36%以内に抑える審査基準です。",
    "How does DTI affect my mortgage application?": "返済負担率（DTI）は住宅ローンの審査にどう影響しますか？",
    "Lenders use DTI to measure your ability to manage monthly payments. Lower DTIs below 36% receive the most favorable mortgage terms and lowest interest rates.": "金融機関が返済能力を測定する指標です。比率が30〜36%未満の安全圏にあれば、審査通過率が向上し最優遇金利が適用されます。",
    "What is the difference between front-end and back-end DTI?": "フロントエンド比率とバックエンド比率の違いは何ですか？",
    "Front-end DTI only includes housing expenses (mortgage, property tax, insurance, HOA). Back-end DTI includes housing plus all recurring debts like credit cards, auto loans, and student loans.": "前者は住宅コストのみを対象とし、後者はマイカーローンや教育ローン、クレジットカードのリボ残高など全ての借入を含めます。",
    "What is the maximum DTI ratio lenders will accept?": "金融機関が許容する返済負担率の上限はどれくらいですか？",
    "Conventional mortgages typically prefer back-end DTIs of 36% to 43%. Government-backed loans like FHA and VA may allow DTIs up to 50% with strong compensating factors.": "一般的な基準は35%〜40%以内ですが、信用スコアや頭金比率が高い場合は特例として45〜50%まで認容されるケースもあります。",
    "How can I lower my Debt-to-Income ratio?": "返済負担率（DTI）を下げるにはどうすれば良いですか？",
    "You can lower your DTI by increasing gross income or paying off smaller debts completely to eliminate their recurring monthly minimum payments.": "額面収入を増やすか、小口のローンやキャッシング残高を完済して毎月の返済義務そのものを消滅させることが効果的です。",

    // 7. APR
    "What is the difference between interest rate and APR?": "表面金利（名目金利）と実質年率（APR）の違いは何ですか？",
    "The interest rate is the nominal cost of borrowing the principal balance. The Annual Percentage Rate (APR) reflects the total annual cost of the loan including points, broker fees, and origination charges.": "表面金利は借入元本に対する純粋な金利です。実質年率（APR）は事務手数料や保証料など全ての付帯コストを含めた実質的な年間借入コストです。",
    "Why is APR higher than the advertised interest rate?": "なぜ実質年率は広告に表示された金利より高くなるのですか？",
    "APR is higher because it amortizes all upfront lender fees, discount points, and closing costs into the effective yearly rate, revealing the true cost of credit.": "融資実行時に支払う初期手数料や諸経費を毎年の借入期間全体に割り振って計算するため、実質コストを明確に示します。",
    "Is APR useful for comparing different loan offers?": "各金融機関のローンを比較する際、APRは有用ですか？",
    "Yes, APR is the best metric for comparing loan offers with different fee structures, provided you plan to keep the loan for its full term.": "はい。手数料体系が異なる複数プランを同一基準で客観的に横断比較するための最も正確な指標です。",

    // 8. Rent vs Buy
    "How long do I need to stay in a home for buying to beat renting?": "購入が賃貸より得になるには何年以上住み続ける必要がありますか？",
    "Because upfront closing costs, moving fees, and commissions are substantial, homeowners usually need to stay in a property for 4 to 7 years for buying to financially outperform renting.": "仲介手数料や登記費用などの初期コストが大きいため、購入が賃貸のトータル支出を下回るには通常4〜7年以上の居住期間が必要です。",
    "What hidden costs of homeownership should renters consider?": "持ち家を検討する賃貸居住者が注意すべき隠れコストは何ですか？",
    "Homeowners must pay property taxes, homeowners insurance, maintenance and repairs (typically 1-2% of home value annually), HOA dues, and potential capital improvement costs.": "固定資産税、火災保険、修繕積立金、そして年間建物価格の1〜2%相当とされる給湯器や外壁などの将来的な維持修繕費です。",
    "What is the opportunity cost of buying a home?": "住宅購入に伴う機会損失（機会費用）とは何ですか？",
    "The money spent on down payment, closing costs, and ongoing property maintenance could otherwise remain invested in liquid assets like index funds that compound over time.": "頭金や諸費用に投じた多額の現金を、インデックス投資信託などの成長資産で複利運用し続けた場合に得られたはずの投資リターンです。",

    // 9. Home Affordability
    "How much income should I spend on a mortgage?": "収入の何パーセントまで住宅費に充てるべきですか？",
    "Most financial experts recommend spending no more than 25% to 28% of your gross monthly income on housing costs (the front-end DTI guideline).": "ファイナンシャルプランナーは、手取り月収の20〜25%以内（額面総所得の28%以内）に住居費を抑えることを推奨しています。",
    "How does down payment size impact affordability?": "頭金の多寡は借入可能額にどう影響しますか？",
    "A larger down payment reduces your loan amount, eliminates Private Mortgage Insurance (PMI) if you put down 20%, and lowers your monthly mortgage payment.": "頭金を多く入れると借入総額が減り、月々の返済額が軽減され、20%以上拠出すれば保証料負担や金利優遇でも圧倒的に有利になります。",
    "How do interest rates affect purchasing power?": "住宅ローン金利の変動は予算にどれほど影響しますか？",
    "Every 1% increase in mortgage interest rates reduces your home purchasing power by roughly 10% for the same monthly payment budget.": "同じ返済額予算を維持する場合、金利が1%上昇するだけで購入可能な住宅価格は約10%目減りします。",

    // 10. Auto Loan
    "What is the 20/4/10 rule for buying a car?": "自動車購入における「20/4/10ルール」とは何ですか？",
    "The 20/4/10 rule recommends putting down at least 20%, financing for no longer than 4 years (48 months), and keeping total vehicle expenses under 10% of gross monthly income.": "頭金を20%以上用意し、ローン期間を最長4年（48回）以内とし、維持費を含めた車両関連費用を月収の10%以内に抑える原則です。",
    "Is a longer auto loan term better?": "マイカーローンの返済期間は6年や7年と長い方が得ですか？",
    "Longer terms (like 72 or 84 months) lower your monthly payment, but you pay substantially more total interest and risk becoming 'underwater' (owing more than the vehicle is worth).": "長期ローンは月額負担を軽くしますが利息が大幅に膨らみ、車の査定価値がローン残高を下回る残債割れリスクが高まります。",
    "How does vehicle depreciation affect my loan?": "自動車の減価償却（値落ち）はローンにどう影響しますか？",
    "New cars depreciate rapidly (often losing 20% in the first year). Without an adequate down payment, you risk owing more on your loan than the car's market value.": "新車は1年目で価値が約20%急落するため、十分な頭金がないと売却額でローンを完済できない債務超過に陥ります。",

    // 11. Credit Card Payoff
    "Why does paying only the minimum take so long?": "クレジットカードのリボ払いで最低額返済を続けると、なぜ完済に何十年もかかるのですか？",
    "Credit card minimum payments are often set around 1% to 2% of the balance plus accrued interest. As the balance slowly drops, the required minimum drops, extending payoff times to decades.": "最低返済額は利息と元本の1〜2%程度しか補填しないよう設計されており、残高の減少とともに返済額も減るため完済期日が延び続けます。",
    "How much faster can I pay off credit cards by paying extra?": "毎月の返済額を少し増額するとどれくらい完済が早まりますか？",
    "Paying even $50 or $100 above the minimum payment can cut your payoff timeline by several years and save thousands of dollars in compounding interest charges.": "月々5,000円〜1万円上乗せして返済するだけで、完済年数を数年単位で短縮し数十万円の手数料を節約できます。",
    "Should I use a balance transfer card to pay off debt?": "おまとめローンや低金利カードへの乗り換えは有効ですか？",
    "A 0% APR balance transfer credit card can save significant interest if you pay off the full balance during the promotional period (typically 12-21 months) and factor in the 3%-5% transfer fee.": "金利優遇期間内に計画通り一括完済できるのであれば、高いリボ金利を解消する手段として極めて有効です。",

    // 12. Retirement Planner
    "What is the 4% rule in retirement planning?": "リタイアメント計画における「4%ルール」とは何ですか？",
    "The 4% rule suggests that withdrawing 4% of your retirement portfolio in the first year, adjusted for inflation annually thereafter, provides a high probability that your nest egg will last at least 30 years.": "退職初年度に資産総額の4%を取り崩し、以降はインフレ率に応じて調整すれば、30年以上にわたり資産が枯渇しない確率が極めて高いとする理論です。",
    "How much money do I need to retire comfortably?": "ゆとりある老後生活を送るにはいくらの資金が必要ですか？",
    "A common benchmark is accumulating 25 times your anticipated annual retirement expenses, or replacing 70% to 80% of your pre-retirement income.": "想定される年間生活費の25倍の資産を準備するか、現役時代の年収の70〜80%を確保できる原資を蓄えることが目安です。",
    "How does inflation impact retirement spending?": "インフレは老後資金にどのような悪影響を与えますか？",
    "Inflation steadily reduces the purchasing power of your savings. At a 3% inflation rate, everyday living expenses double roughly every 24 years, requiring growing investment portfolios.": "現金の実質的購買力を削り取ります。インフレ率3%では約24年で物価が2倍になるため、退職後も資産の一部を成長資産に配分しておく必要があります。",

    // 13. 401(k)
    "What is an employer 401(k) match?": "確定拠出年金（401k / 企業型DC）のマッチング拠出とは何ですか？",
    "An employer match is money your employer contributes to your 401(k) account based on your own contributions (e.g. matching 50% of contributions up to 6% of your salary). It is effectively an instant return on your savings.": "従業員本人の拠出額に応じて企業が上乗せ拠出を行う制度で、拠出した瞬間に100%のリターンが得られるのと同等の恩恵があります。",
    "What are the 401(k) contribution limits for 2024?": "2024年の拠出限度額はいくらですか？",
    "For 2024, the employee contribution limit is $23,000 for those under 50. Individuals aged 50 and older can contribute an additional $7,500 catch-up contribution for a total of $30,500.": "50歳未満は年額23,000ドル、50歳以上は追加枠を含め最大30,500ドルです（日本のiDeCoは職種により月額1.2万〜6.8万円）。",
    "What is the difference between Traditional 401(k) and Roth 401(k)?": "従来型（課税繰延）とRoth型（受取時非課税）の違いは何ですか？",
    "Traditional 401(k) contributions are pre-tax and reduce your current taxable income, with withdrawals taxed in retirement. Roth 401(k) contributions are post-tax, but all qualified growth and withdrawals are completely tax-free.": "従来型は拠出時に所得控除を受け受給時に課税されます。Roth型は税引き後の資金で拠出しますが、運用益と将来の受給が全額非課税になります。",

    // 14. IRA Comparison
    "What is the key difference between a Roth and Traditional IRA?": "個人退職口座（IRA）の従来型とRoth型の決定的な違いは何ですか？",
    "Traditional IRA contributions are generally made pre-tax (reducing your current taxable income), but withdrawals in retirement are taxed as ordinary income. Roth IRA contributions are made with post-tax dollars; growth and withdrawals in retirement are completely tax-free.": "従来型は拠出時に控除され老後に課税されるのに対し、Roth型は非課税口座で積立を行い将来の利益や元本引出が恒久非課税となります（日本の新NISA類似）。",
    "Which IRA plan is better for me?": "自分にはどちらの制度が適していますか？",
    "If you expect your tax bracket to be higher in retirement than it is today, a Roth IRA is better. If you expect your tax bracket in retirement to be lower, a Traditional IRA is better.": "将来リタイアした時の税率が現在より高いと見込むならRoth型、老後の所得が下がり税率が低くなるなら従来型が適しています。",
    "What are the contribution limits for IRAs in 2024?": "年間拠出枠の上限はいくらですか？",
    "For 2024, the annual contribution limit for Traditional and Roth IRAs is $7,000 for individuals under age 50, and $8,000 for individuals age 50 or older.": "50歳未満は年額7,000ドル、50歳以上は8,000ドルです。",
    "Are there income limits for contributing to Traditional and Roth IRAs?": "所得による口座開設や拠出の制限はありますか？",
    "Roth IRAs have income phase-out ranges that restrict high earners. Anyone with earned income can contribute to a Traditional IRA, but tax deductibility may be limited by income and workplace retirement coverage.": "Roth型には高所得者の拠出を制限する所得基準が設けられていますが、従来型は勤労所得があれば原則どなたでも利用できます。",
    "Can I withdraw money from my IRA before age 59½ without penalty?": "59歳半になる前にペナルティなしで資金を引き出せますか？",
    "Roth IRA original contributions can be withdrawn at any time penalty-free. Withdrawing investment earnings early or withdrawing Traditional IRA funds before 59½ usually incurs income taxes and a 10% penalty.": "Roth型の元本部分はいつでも非課税・無罰金で引き出せますが、運用益の早期引き出しや従来型からの出金には10%の早期解約税が課されます。",

    // 15. Compound Interest
    "What is compound interest?": "複利とは何ですか？",
    "Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods. It causes your wealth to grow exponentially over time.": "当初の元本だけでなく、過去に発生した利息に対しても新たに利息が付与される計算方式で、雪だるま式に資産が増加します。",
    "What is the Rule of 72?": "「72の法則」とは何ですか？",
    "The Rule of 72 is a quick mental formula to estimate how many years it takes to double your money. Divide 72 by your annual interest rate (e.g. at 8%, your money doubles in about 9 years).": "資産が2倍になるまでのおおよその年数を瞬時に算出する公式です。72を年利回りで割ることで求められます（年利8%なら約9年で2倍）。",
    "How does compounding frequency affect total returns?": "複利の付利頻度は最終資産額にどう影響しますか？",
    "The more frequently interest compounds (annually, monthly, daily), the higher your effective annual yield (APY) will be, as interest starts earning interest sooner.": "年1回より毎月、毎日と利息計算の頻度が高くなるほど、早期に利息が再投資されるため実質年利（APY）は高くなります。",

    // 16. TVM
    "What is the Time Value of Money (TVM)?": "お金の時間的価値（TVM）とは何ですか？",
    "The Time Value of Money principle states that a dollar today is worth more than a dollar in the future because today's dollar can be invested and earn interest.": "今日手元にある1円は、投資によって利息やリターンを生み出すことができるため、将来受け取る1円よりも価値が高いという基本原則です。",
    "What are the core components of TVM calculations?": "時間価値計算における5つの基本要素は何ですか？",
    "The five core variables are Present Value (PV), Future Value (FV), Interest Rate per Period (Rate), Total Number of Periods (Nper), and Periodic Payment (PMT).": "現在価値（PV）、将来価値（FV）、期あたり利率（Rate）、期間数（Nper）、定期支払額（PMT）の5要素です。",
    "What is the difference between an ordinary annuity and annuity due?": "期末払い（普通年金）と期首払い（期首年金）の違いは何ですか？",
    "In an ordinary annuity, payments occur at the end of each period. In an annuity due, payments occur at the beginning of each period, earning an extra compounding cycle of interest.": "期末払いは各期間の最終日に拠出しますが、期首払いは各期間の初日に拠出するため、まるまる1期分多く複利運用されます。",

    // 17. ROI
    "How is Return on Investment (ROI) calculated?": "投資利益率（ROI）はどのように算出しますか？",
    "ROI is calculated by subtracting the initial cost of the investment from the final value, and dividing that net gain by the initial cost: ROI = (Net Profit / Cost of Investment) × 100%.": "最終価値から初期投資額を引いて純利益を求め、それを初期投資額で割って百分率にします：ROI = (純利益 ÷ 投資コスト) × 100%。",
    "What is the difference between simple ROI and annualized ROI?": "単純ROIと年換算リターン（CAGR）の違いは何ですか？",
    "Simple ROI measures total percentage return regardless of duration. Annualized ROI (CAGR) standardizes the return into a per-year geometric rate, enabling fair comparison between investments held for different lengths of time.": "単純ROIは投資期間に関係ない総上昇率を示し、年換算ROIは投資期間が異なる資産同士を年平均成長率（幾何平均）で公平に比較します。",
    "What is considered a good ROI?": "どれくらいのROIがあれば優秀と見なされますか？",
    "Historically, the broad stock market (S&P 500) has returned an average of 7% to 10% annually before inflation. Investments with higher expected returns generally involve higher risk of capital loss.": "株式インデックス（S&P 500など）の歴史的平均リターンは年率約7〜10%です。これを大幅に上回る利回りには相応の元本毀損リスクが伴います。",

    // 18. Savings Goal
    "How do I calculate how much to save monthly for a goal?": "目標額を貯めるための毎月の積立額はどう算出しますか？",
    "You divide your target savings amount by the number of months until your deadline, while factoring in the compounding interest earned on your growing balance.": "目標とする金額を満期までの月数で割り、その間に蓄積される残高から得られる複利運用益を差し引いて逆算します。",
    "Should I keep savings goal funds in high-yield savings or stocks?": "目標資金は預貯金で置くべきですか、それとも投資に回すべきですか？",
    "For goals under 3 to 5 years (like a car or home down payment), keep funds in safe, liquid instruments like High-Yield Savings Accounts (HYSA) or CDs. For goals 5+ years away, a diversified investment portfolio may be suitable.": "3〜5年以内の短期目標（車や住宅の頭金）は元本保証の預貯金や国債に置き、5年以上の長期目標であれば株式投資信託が適しています。",
    "How can I stay on track with my savings goals?": "貯蓄目標を途中で挫折せずに継続するコツは何ですか？",
    "Automate recurring monthly transfers into a dedicated savings account immediately after your paycheck arrives (the 'pay yourself first' strategy).": "給与受取日に自動振替設定を行い、使う前に別口座へ先取り貯蓄する「先取り貯蓄（Pay yourself first）」の自動化が最も確実です。",

    // 19. Stock Return
    "How do I calculate stock returns?": "株式のトータルリターンはどう計算しますか？",
    "Total stock return equals capital gains (ending price minus purchase price) plus any dividends received, divided by the original purchase cost.": "キャピタルゲイン（売却価格－購入価格）に受け取ったすべての配当金を加え、最初の購入代金で割って計算します。",
    "What is CAGR in stock returns?": "株式投資におけるCAGRとは何ですか？",
    "Compound Annual Growth Rate (CAGR) measures the geometric mean annual return of a stock over multiple years, smoothing out annual market fluctuations.": "複数年にわたる年平均成長率（幾何平均）を示す指標で、年ごとの極端な相場の乱高下を均して実質的な成長スピードを示します。",
    "What is the difference between simple return and annualized return?": "単純騰落率と年率リターンの違いは何ですか？",
    "Simple return measures absolute percentage gain over the entire holding period, while annualized return shows the steady annual rate required to achieve that result.": "単純リターンは保有期間全体の絶対的な増加割合を示し、年率リターンはその結果をもたらす年平均の利回りを示します。",

    // 20. CAPM
    "What is the Capital Asset Pricing Model (CAPM)?": "資本資産価格モデル（CAPM）とは何ですか？",
    "CAPM calculates an asset's expected return based on its risk relative to the overall market, using the formula: Expected Return = Risk-Free Rate + Beta × (Market Return - Risk-Free Rate).": "個別銘柄の市場リスクに応じて要求される期待リターンを算出する理論です：期待収益率 = 安全資産利子率 + β × (市場期待収益率 － 安全資産利子率)。",
    "What does Asset Beta (β) represent?": "株式のベータ値（β）は何を表していますか？",
    "Beta measures an asset's volatility compared to the broader market. A beta of 1.0 indicates market-level volatility; above 1.0 indicates higher volatility, and below 1.0 indicates lower volatility.": "市場全体に対する株価の感応度（連動性）を示します。β=1は市場並みの変動、1超はハイリスク・ハイリターン、1未満はディフェンシブな動きを示します。",
    "What is the Risk-Free Rate?": "無リスク金利（リスクフリーレート）とは何ですか？",
    "The risk-free rate is the theoretical rate of return of an investment with zero risk of default, typically represented by long-term government bond yields (like 10-year US Treasuries).": "元本割れや債務不履行リスクが皆無とされる投資の理論的利回りで、通常は信用力の高い10年国債の利回りを使用します。",
    "What is the Market Risk Premium?": "マーケット・リスクプレミアムとは何ですか？",
    "The market risk premium is the additional return investors demand for choosing risky market equities over risk-free government securities.": "国債などの安全資産ではなく、あえて不確実性のある株式市場に資金を投じる見返りとして投資家が要求する追加リターンです。",

    // 21. Dividend
    "What is dividend yield versus yield on cost?": "配当利回りと買値基準利回り（Yield on Cost）の違いは何ですか？",
    "Dividend yield is the annual dividend divided by the current stock price. Yield on cost is the annual dividend divided by your original purchase price, which increases as companies raise their dividends over time.": "配当利回りは「年間配当額 ÷ 現在株価」ですが、買値基準利回りは「年間配当額 ÷ 自分が買った時の取得単価」であり、増配に伴い上昇します。",
    "What is a Dividend Reinvestment Plan (DRIP)?": "配当金自動再投資（DRIP）とは何ですか？",
    "A DRIP automatically uses your cash dividend payments to purchase additional shares or fractional shares of the stock, compounding your share count and future payouts without commission fees.": "受け取った現金配当を手数料無料で自動的に同銘柄の追加購入（端株含む）に充当し、複利効果を最大化する仕組みです。",
    "Are dividend payments guaranteed?": "企業の配当金の支払いは保証されていますか？",
    "No, company boards can reduce, suspend, or eliminate dividend payouts at any time depending on company profitability and economic conditions.": "いいえ。企業の業績悪化や資金繰りに応じて、取締役会の判断により減配や無配への転落がいつでも起こり得ます。",

    // 22. Inflation
    "What is inflation?": "インフレーション（物価上昇）とは何ですか？",
    "Inflation is the general rise in prices for goods and services over time, resulting in a decline in the purchasing power of money.": "モノやサービスの値段が全体的に上がり続け、その結果としてお金の価値（購買力）が相対的に目減りする現象です。",
    "How does inflation affect my savings?": "インフレは預金にどのようなダメージを与えますか？",
    "Cash sitting in zero-interest accounts loses purchasing power each year. If inflation is 3%, $100 today will only buy about $97 worth of goods next year.": "金利がつかない銀行預金の実質価値は毎年失われます。インフレ率が3%の場合、現在の100万円は来年約97万円分の価値しか買えなくなります。",
    "How is inflation officially measured?": "インフレ率は公的にどのように測定されていますか？",
    "Inflation is primarily measured using the Consumer Price Index (CPI), which tracks price changes across a standard market basket of consumer goods and services.": "一般世帯が購入する商品やサービスの価格動向をまとめた消費者物価指数（CPI）によって毎月測定されます。",
    "What is the historical average inflation rate?": "歴史的な平均インフレ率はどのくらいですか？",
    "In the United States, inflation has historically averaged between 2.5% and 3.2% per year over long multi-decade horizons.": "主要先進国の長期的な平均インフレ率は、過去数十年のスパンで年率2.0%〜3.0%前後を推移しています。",
    "How can I protect my money from losing value to inflation?": "資産をインフレの目減りから防衛するにはどうすればよいですか？",
    "Investing in assets whose earnings outpace inflation—such as diversified equities, Treasury Inflation-Protected Securities (TIPS), real estate, and inflation-indexed bonds.": "世界株式インデックス投資信託、物価連動国債、不動産など、長期リターンが物価上昇率を上回る資産クラスに分散投資することです。",

    // 23. Paycheck
    "What is FICA tax?": "社会保険料や給与所得控除とは何ですか？",
    "FICA is a federal payroll tax that funds Social Security (6.2% on wages up to the wage base limit) and Medicare (1.45% plus an additional 0.9% on high earners).": "公的年金、健康保険、介護保険、雇用保険など、国の社会保障制度を維持するために給与から源泉徴収される法定負担金です。",
    "What is the difference between pre-tax and post-tax deductions?": "課税前控除と課税後控除の違いは何ですか？",
    "Pre-tax deductions (like 401k and health insurance) reduce your taxable gross income before taxes are computed. Post-tax deductions (like Roth contributions or wage garnishments) are taken after taxes.": "課税前控除（企業年金や健康保険料）は課税対象所得を直接減らして節税になりますが、課税後控除は税金計算後の手取りから差し引かれます。",
    "What is the difference between gross pay and net pay?": "額面給与と手取り給与の違いは何ですか？",
    "Gross pay is the total amount earned before any taxes or deductions. Net pay (take-home pay) is the actual cash deposited into your bank account after all deductions.": "額面給与は会社が支払う総支給額であり、手取り給与は税金（所得税・住民税）と社会保険料が天引きされて実際に口座に振り込まれる金額です。",
    "How does my W-4 filing status affect my paycheck?": "扶養控除の申告は手取り給与にどう影響しますか？",
    "Your W-4 form informs your employer how much federal income tax to withhold each pay period based on your filing status, dependents, and other income.": "扶養親族の人数や各種所得控除の申請状況に基づき、毎月の源泉徴収税額が適切に軽減されます。",
    "Why do state and local taxes vary so much?": "地方税や住民税に地域差があるのはなぜですか？",
    "State income tax rates range from 0% (in states like Texas, Florida, and Washington) to over 13% in high-tax states, while some cities also impose local municipal income taxes.": "自治体ごとに財政状況や条例に基づく超過課税・減税措置が異なり、地域によって所得税や住民税の実効税率に差が生じます。",

    // 24. Net Worth
    "What is net worth?": "個人の純資産（Net Worth）とは何ですか？",
    "Net worth is the total market value of everything you own (assets) minus everything you owe to creditors (liabilities).": "保有するすべての資産（預貯金、不動産、投資商品など）の時価総額から、負債（ローン、借入金）の総額を引いた実質的な純価値です。",
    "How often should I calculate my net worth?": "純資産の集計はどのくらいの頻度で行うべきですか？",
    "Reviewing your net worth quarterly or semi-annually gives you a clear high-level view of your financial health without obsessing over daily market swings.": "日々の相場のノイズに惑わされず財務状況の健全性を定点観測するためには、四半期または半年に1回のペースが最適です。",
    "What counts as an asset vs. a liability?": "資産と負債には具体的に何が含まれますか？",
    "Assets include bank balances, investment accounts, home equity, and retirement funds. Liabilities include mortgages, student loans, car loans, and credit card debt.": "資産には預金、株式・投資信託、不動産評価額、年金残高などが該当し、負債には住宅ローン、自動車ローン、カードローン残高が含まれます。",
    "Should I include my house and mortgage in my net worth?": "純資産の計算に自宅と住宅ローンを含めるべきですか？",
    "Yes, you include the current fair market value of the home under assets and the remaining mortgage balance under liabilities. The difference is your home equity.": "はい。資産側に自宅の適正な現在市場価格を計上し、負債側に住宅ローンの未返済残高を計上します。その差額が住宅の純資産価値です。",
    "What does it mean to have a negative net worth?": "純資産がマイナス（債務超過）とはどういう状態ですか？",
    "A negative net worth means your total debts exceed your total assets. This is common for young adults and recent graduates with student loans.": "借金の総額が所有する資産の総額を上回っている状態です。新卒社会人で奨学金を返済中の方や住宅ローンを組んだ直後には一般的です。",

    // 25. Emergency Fund
    "How much emergency fund is recommended?": "生活防衛資金（緊急用資金）はいくら確保すべきですか？",
    "Most financial planners recommend saving 3 to 6 months of essential living expenses, or 9 to 12 months for freelancers or single-income households.": "会社員であれば毎月の基礎生活費の3〜6か月分、個人事業主やフリーランスであれば9〜12か月分をプールしておくのが基本です。",
    "What expenses should be included in an emergency fund budget?": "生活防衛資金の計算に含めるべき支出項目は何ですか？",
    "Include only non-negotiable living costs: housing (rent/mortgage), utilities, groceries, basic transportation, minimum debt payments, and healthcare insurance.": "家賃や住宅ローン、水道光熱費、基本食費、最低限の通信費、保険料など、削ることのできない不可欠な固定費のみを算出します。",
    "Where should I keep my emergency fund?": "生活防衛資金はどこに預けておくべきですか？",
    "In a dedicated High-Yield Savings Account (HYSA) or money market account where it is FDIC-insured, earns interest, and can be accessed immediately without risk.": "元本保証があり、ペイオフの保護対象で、いつでもペナルティなしで即座に引き出せる普通預金口座に隔離して保管します。",
    "Should I pay off debt or build an emergency fund first?": "借金の返済と生活防衛資金の積立はどちらを優先すべきですか？",
    "Build a starter emergency fund of 1 month of expenses or $1,000 to $2,000 first, then aggressively pay off high-interest consumer debt before expanding to 3-6 months.": "まず1か月分の生活費（10万〜20万円）を初期クッションとして確保し、次に高金利の借金を全力で完済し、その後に満額の防衛資金を作ります。",
    "When is it appropriate to use emergency fund savings?": "どのような状況であれば生活防衛資金を使ってよいですか？",
    "Use it only for genuine, unexpected emergencies: sudden medical bills, unexpected car repairs, or living expenses following job loss.": "失職による収入途絶、急な入院・手術、仕事に必須な車の故障など、真に予測不可能な緊急事態に限定して使用します。",

    // 26. Fee Impact
    "What is an expense ratio?": "信託報酬・経費率（Expense Ratio）とは何ですか？",
    "An expense ratio is the annual percentage fee charged by mutual funds and ETFs to cover fund management, administrative expenses, and operating costs.": "投資信託やETFの運用、管理、監査にかかる費用として、信託財産から日々自動的に差し引かれる年間手数料率のことです。",
    "How do fees compound over time?": "運用コストは長期投資でどのように複利で影響しますか？",
    "Fees are deducted annually from your total assets, meaning you lose both the fee money and all future compounding returns that money would have earned.": "毎年総資産から差し引かれるため、支払った手数料そのものだけでなく、その資金が生み出すはずだった将来の複利リターンも永遠に失われます。",
    "What is a good expense ratio for an index fund?": "インデックスファンドの適正な信託報酬水準はどれくらいですか？",
    "Low-cost index funds and ETFs typically have expense ratios between 0.02% and 0.10%, whereas actively managed mutual funds often charge 0.60% to 1.50% or more.": "優良なインデックスETFであれば年率0.03%〜0.15%程度が主流です。アクティブファンドでは1.0%〜2.0%を超えるものも珍しくありません。",
    "What other investment fees should I look out for?": "信託報酬以外に注意すべき投資コストは何ですか？",
    "Watch out for advisory fees (AUM fees of 1%), front-end or back-end sales loads, trading commissions, account maintenance fees, and custodial charges.": "買付時の販売手数料、売却時の信託財産留保額、売買委託手数料、口座管理料などに留意する必要があります。",
    "How much can a 1% fee difference affect my retirement savings?": "たった1%の手数料差が老後資金にどれほど致命的な差を生みますか？",
    "A 1% annual fee difference can erode 25% to 30% of your total ending portfolio wealth over a 30-year investment horizon.": "30年間の長期投資において、わずか年1%の手数料差があるだけで、最終的な資産受取額の約25%〜30%が失われてしまいます！",

    // 27. College Savings
    "What is a 529 plan?": "米国の教育資金非課税制度「529プラン」とは何ですか？",
    "A 529 plan is a tax-advantaged savings and investment plan designed to encourage saving for future higher education expenses with tax-free growth and qualified withdrawals.": "将来の大学等の教育資金準備を目的とした優遇税制プランで、運用益が非課税となり適格な学費として引き出す際も無税となります。",
    "How fast do college costs increase?": "大学の学費や教育費はどの程度のペースで上昇していますか？",
    "Historically, higher education tuition and fees have increased at an annual rate of 4% to 6%, outpacing general consumer inflation.": "高等教育費は歴史的に年4%〜6%のハイペースで上昇しており、一般的な物価上昇率を大きく上回り続けています。",
    "What happens to 529 funds if my child does not go to college?": "子どもが大学に進学しなかった場合、預けた資金はどうなりますか？",
    "You can change the beneficiary to another qualifying family member, use up to $10,000 for student loan repayment, or roll over up to $35,000 into a Roth IRA under SECURE 2.0 rules.": "兄弟姉妹へ名義変更するか、奨学金返済に充当するか、法改正に基づき最大35,000ドルまでRoth IRA退職口座へ非課税移管が可能です。",
    "Can I use a 529 plan for trade schools or K-12 tuition?": "専門学校や小中高の学費にも充当できますか？",
    "Yes, qualified distributions can cover accredited trade schools, vocational programs, apprenticeships, and up to $10,000 per year for K-12 private school tuition.": "はい。認可された専門学校や職業訓練、および私立小中高校の授業料として年間最大10,000ドルまで使用できます。",
    "How does a 529 plan impact financial aid eligibility?": "給付型奨学金の受給資格に悪影響を与えますか？",
    "Parent-owned 529 plans are assessed as parental assets on the FAFSA at a maximum rate of 5.64%, having minimal negative impact on financial aid eligibility.": "親名義の資産として判定されるため算入率は最大でも5.64%にとどまり、奨学金受給判定への悪影響は軽微です。",

    // 28. Crypto DCA
    "What is Dollar-Cost Averaging (DCA)?": "ドルコスト平均法（積立投資）とは何ですか？",
    "Dollar-Cost Averaging is an investment strategy where you invest a fixed amount of money at regular intervals regardless of the asset's fluctuating market price.": "相場価格の変動に関係なく、常に決まった金額を定期的に機械的に買い付け続ける投資手法です。",
    "How does DCA apply to high-volatility assets like Crypto?": "ボラティリティの激しい暗号資産でなぜドルコスト平均法が有効なのですか？",
    "DCA prevents emotional decisions during extreme market peaks and crashes, automatically buying more units when prices are low and fewer when prices are high.": "高値掴みや底値での狼狽売りを排除し、価格が安い時期に自動的に多くの数量を買い集めることで平均取得単価を抑制できます。",
    "Is DCA better than investing a lump sum?": "一括投資と積立投資はどちらが有利ですか？",
    "Lump sum investing historically wins in steadily rising markets, but DCA provides superior peace of mind, lower emotional risk, and downside protection in highly volatile markets.": "一貫した上昇相場では一括投資が勝りますが、暗号資産のような乱高下の激しい資産では積立の方が心理的ストレスを大幅に軽減できます。",
    "What is the best frequency for crypto DCA?": "暗号資産の積立に最適な頻度はどれくらいですか？",
    "Weekly or bi-weekly DCA aligned with your pay cycle is ideal for capturing market volatility while keeping trading fees manageable.": "給与サイクルに合わせた週1回または隔週の購入が、取引手数料を抑えつつボラティリティを味方につける最良のバランスです。",
    "Does DCA guarantee profits in cryptocurrency?": "ドルコスト平均法を行えば必ず儲かりますか？",
    "No, DCA does not protect against prolonged declines or failing crypto projects; it only ensures you achieve the weighted average market purchase price.": "いいえ。銘柄自体の長期低迷や破綻リスクを防ぐことはできず、あくまで市場の加権平均価格で買い付けるための手法です。",

    // 29. Tip
    "What is the standard tipping percentage?": "チップの一般的な相場はどれくらいですか？",
    "In the United States and Canada, standard restaurant tipping guidelines range from 15% for adequate service, 18% for good service, to 20% or more for exceptional service.": "北米のレストランでは標準的で15%、良好なサービスで18%、素晴らしい接客なら20%以上が通例です（日本にはチップの習慣はありません）。",
    "Should tips be calculated before or after sales tax?": "チップは消費税抜きの金額で計算すべきですか？",
    "Etiquette traditionally dictates calculating the tip percentage on the pre-tax food and beverage subtotal, though many automated payment terminals calculate tip on the post-tax total.": "伝統的なマナーでは税抜き飲食小計から計算しますが、決済端末の自動計算機能は税込み総額を基準とする場合が増えています。",
    "How do you split a bill evenly among friends?": "割り勘を公平に計算するにはどうすればよいですか？",
    "Calculate the total bill including food, beverages, tax, and tip, and divide the total amount equally by the number of paying participants.": "飲食代金、消費税、チップの総額を合計し、その総合計を支払う人数で均等に頭割りします。",

    // 30. Discount
    "How do you calculate a percentage discount?": "パーセント割引の計算式はどうなりますか？",
    "Multiply the original price by the discount percentage divided by 100 to find the savings, and subtract that amount from the original price: Final Price = Original Price × (1 - Discount%).": "元の価格に割引率を掛けて割引額を求め、元価格から差し引きます：割引後価格 = 定価 × (1 － 割引率 ÷ 100)。",
    "How do multiple stacked discounts work?": "2重割引（重複割引）はどのように計算されますか？",
    "Stacked discounts apply sequentially rather than additively. For example, 20% off plus an extra 10% off results in an effective 28% total discount, not 30%.": "単純な足し算ではなく掛け合わせで順次適用されます。例えば20%引きの後にさらに10%引きとなる場合、合計割引率は30%ではなく実質28%引となります。",
    "Is sales tax applied before or after store discounts?": "消費税は割引前と割引後のどちらに課税されますか？",
    "In most jurisdictions, sales tax is calculated on the discounted post-sale price, meaning you pay sales tax only on the actual money spent.": "ほとんどの場合、値引き後の実際の決済価格に対して課税されるため、値引き分だけ消費税額も安くなります。"
  },

  // Korean (ko)
  ko: {
    // 1. Mortgage
    "How is a mortgage payment calculated?": "주택담보대출 월 상환액은 어떻게 계산되나요?",
    "A standard monthly mortgage payment consists of Principal & Interest (P&I), property taxes, homeowners insurance, private mortgage insurance (PMI) if down payment is under 20%, and homeowner association (HOA) fees.": "표준 모기지 월 납부액은 원금 및 이자(P&I), 재산세, 주택 화재보험료, 계약금(LTV) 20% 미만 시 부과되는 모기지 보증보험료(PMI), 아파트 관리비 등으로 구성됩니다.",
    "What is PMI and when do I pay it?": "모기지 보증보험(PMI)이란 무엇이며 언제 지불하나요?",
    "Private Mortgage Insurance (PMI) is a policy that protects the lender if you default. It is typically required on conventional loans if your down payment is less than 20% of the home purchase price.": "차주의 채무불이행으로부터 대출기관을 보호하기 위한 보험입니다. 통상 주택 매매가의 20% 미만으로 자기자본(다운페이먼트)을 투입할 때 의무 가입하게 됩니다.",
    "What does PITI stand for?": "PITI는 무엇의 약자인가요?",
    "PITI stands for Principal, Interest, Taxes, and Insurance. These are the four basic components that make up a homeowner's monthly housing payment. Together, they reflect the true cost of owning a home on a month-to-month basis.": "원금(Principal), 이자(Interest), 세금(Taxes), 보험료(Insurance)의 첫 글자를 딴 용어로, 주택 보유 시 매달 실제로 부담해야 하는 총 주거비용을 의미합니다.",
    "Is a 15-year mortgage better than a 30-year mortgage?": "15년 만기 대출이 30년 만기 대출보다 유리한가요?",
    "A 15-year mortgage typically offers a lower interest rate and allows you to pay off your home twice as fast, saving you tens of thousands of dollars in interest. However, a 30-year mortgage has lower monthly payments, which provides greater cash flow flexibility.": "15년 만기는 금리가 낮고 2배 빠르게 원금을 상환하여 막대한 총이자를 절약할 수 있으며, 30년 만기는 월 원리금 부담이 적어 가계 현금 흐름에 여유를 줍니다.",
    "How do extra payments affect my mortgage payoff schedule?": "중도상환이나 추가 원금 상환을 하면 어떤 효과가 있나요?",
    "Any extra money you pay towards your mortgage is applied directly to the principal balance. This reduces the remaining loan balance and decreases the amount of interest that accumulates, helping you pay off your mortgage years ahead of schedule.": "추가로 납입하는 모든 자금은 전액 대출 원금 잔액을 차감하는 데 쓰입니다. 잔여 원금이 줄어들어 향후 발생할 이자가 급감하므로 대출을 수년 앞당겨 조기 완납할 수 있습니다.",

    // 2. Loan Calculator
    "How does an amortized loan work?": "원리금균등분할상환 대출의 작동 방식은 무엇인가요?",
    "With an amortized loan, you make equal periodic payments. Early in the loan term, the majority of each payment goes toward interest. Over time, an increasing portion goes toward paying down the principal balance until the debt is fully paid off.": "매 회차 동일한 금액을 분할 상환합니다. 대출 초기에는 상환액의 대부분이 이자 지급에 쓰이지만, 원금이 줄어듦에 따라 후반부로 갈수록 원금 상환 비중이 점점 높아집니다.",
    "What is the difference between fixed-rate and variable-rate loans?": "고정금리와 변동금리 대출은 어떤 차이가 있나요?",
    "A fixed-rate loan maintains the exact same interest rate and payment throughout the loan term. A variable-rate loan has an interest rate that adjusts periodically based on benchmark interest rates, which can increase or decrease your payments.": "고정금리는 대출 전 기간 동안 약정 금리와 월 납입액이 변하지 않으며, 변동금리는 기준금리(COFIX 등)의 변동에 따라 주기적으로 이율과 납부액이 조정됩니다.",
    "Can I pay off my loan early without penalty?": "중도상환 수수료 없이 언제든지 대출을 조기 상환할 수 있나요?",
    "Most consumer loans and conventional mortgages allow prepayment without penalties, but some lenders include a prepayment penalty clause. Always verify your loan agreement terms before making accelerated principal payments.": "대출 실행 후 3년이 지나면 법적으로 중도상환 수수료가 면제되는 것이 일반적이나, 약정 초기 상환 시 0.5%~1.5%의 수수료가 부과될 수 있으므로 계약서를 확인해야 합니다.",

    // 3. Debt Payoff
    "What is the Debt Snowball method?": "스노우볼(눈덩이) 부채 상환법이란 무엇인가요?",
    "The Debt Snowball method involves paying off your smallest debt balances first, regardless of interest rates. It builds psychological momentum and motivation through quick wins.": "금리 크기와 무관하게 원금 잔액이 가장 작은 빚부터 먼저 갚아나가는 방식입니다. 빠른 부채 청산 경험을 통해 심리적 성취감과 동기를 얻을 수 있습니다.",
    "What is the Debt Avalanche method?": "애벌랜치(눈사태) 부채 상환법이란 무엇인가요?",
    "The Debt Avalanche method involves paying off your highest interest rate debts first. Mathematically, this minimizes the total interest you pay and helps you become debt-free faster.": "이자율이 가장 높은 고금리 대출부터 집중적으로 갚는 방법입니다. 수학적으로 총 지출 이자를 최소화하여 가장 빠르게 부채에서 벗어날 수 있습니다.",
    "Which method is better: Debt Snowball or Debt Avalanche?": "스노우볼 방식과 애벌랜치 방식 중 어느 쪽이 더 좋은가요?",
    "Mathematically, the Debt Avalanche method is superior because it minimizes the total interest paid. However, studies show that the Debt Snowball method is often more successful in practice because the psychological momentum helps people stick to their plan.": "이론적으로는 이자를 아껴주는 애벌랜치 방식이 우월하지만, 실제 성공률은 즉각적인 심리적 보상을 주는 스노우볼 방식이 더 높다는 연구 결과가 많습니다.",
    "How does the 'extra payment' roll over in these strategies?": "이 전략들에서 추가 상환 자금은 어떻게 이전되나요?",
    "You continue paying minimums on all debts and add your extra cash to the target debt. Once that target debt is fully paid off, you roll its entire payment into the next debt on your list.": "모든 부채의 최소 상환액을 유지하면서 여유 자금을 타깃 부채에 몰아넣습니다. 그 부채가 완납되면 기존에 지출하던 상환 여력을 다음 부채에 그대로 얹어 갚아나갑니다.",
    "Can I do a hybrid of Snowball and Avalanche?": "두 방식을 혼합하여 적용할 수도 있나요?",
    "Yes. Many people pay off one or two small debts first to free up immediate cash flow (Snowball), and then pivot to targeting the remaining debts by highest interest rate (Avalanche).": "네, 매우 효과적입니다. 처음 1~2개의 소액 대출을 청산하여 즉각적인 가계 현금 여력을 확보한 뒤(스노우볼), 남은 대출은 최고 금리 순으로 정리하는 방식(애벌랜치)입니다.",

    // 4. Refinance
    "When should I refinance my loan?": "대환대출(리파이낸싱)은 언제 하는 것이 유리한가요?",
    "It generally makes sense to refinance if you can secure a lower interest rate, reduce your monthly payment, or shorten your term, provided your total interest savings exceed the closing costs.": "현저히 낮은 금리로 갈아타 월 납부액이나 대출 만기를 줄일 수 있고, 절감되는 총이자가 대환에 드는 중도상환수수료 및 부대비용보다 클 때 적합합니다.",
    "What closing costs are associated with refinancing?": "대환대출 실행 시 어떤 부대비용이 발생하나요?",
    "Refinancing costs typically include application fees, origination fees, appraisal costs, title search and insurance, credit report fees, and recording fees, ranging from 2% to 6% of the loan amount.": "기존 대출의 중도상환수수료, 신규 근저당권 설정비 및 감정평가 수수료, 인지세 등이 발생할 수 있습니다.",
    "How do I calculate my refinance break-even point?": "대환대출 손익분기점은 어떻게 계산하나요?",
    "Divide your total refinance closing costs by your monthly payment savings. If closing costs are $3,000 and you save $150 per month, your break-even point is 20 months ($3,000 / $150).": "대환에 소요된 총비용을 매월 절감되는 원리금 차액으로 나눕니다. 300만원의 비용이 들고 매달 15만원을 아낀다면, 손익분기점은 20개월이 됩니다.",
    "What is a 'no-closing-cost' refinance?": "부대비용 면제 대환대출이란 무엇인가요?",
    "A no-closing-cost refinance means the lender either rolls the closing fees into your new total loan balance or charges a slightly higher interest rate to cover them.": "수수료가 공짜인 것이 아니라 신규 대출 원금에 포함되어 함께 분할 상환되거나, 약간 높은 대출금리를 적용하여 은행이 충당하는 구조입니다.",
    "Does refinancing lower my monthly payment or total interest?": "대환대출을 하면 월 납부액과 총이자 중 무엇이 줄어드나요?",
    "It depends on the term. Refinancing to a lower rate with the same or shorter term saves on both. Resetting your term back to 30 years lowers the monthly payment but can increase total lifetime interest.": "상환 기간에 따라 다릅니다. 동일하거나 짧은 만기로 저금리 대환 시 둘 다 감소하지만, 만기를 다시 30년으로 늘리면 월 납부액은 줄어도 총이자액은 증가할 수 있습니다.",

    // 5. Student Loan
    "What is the SAVE plan?": "미국의 SAVE 학자금 상환 플랜이란 무엇인가요?",
    "The Saving on a Valuable Education (SAVE) plan is an income-driven repayment (IDR) plan that protects discretionary income up to 225% of the poverty line, lowers payments to 5%-10%, and stops unpaid interest from accumulating.": "소득 연계형 상환 제도로, 빈곤선의 225%까지 소득을 보호해주며 월 상환액을 가처분소득의 5~10%로 대폭 낮추고 미납 이자의 원금 누적을 방지합니다.",
    "How is discretionary income calculated for student loans?": "학자금 대출에서 '가처분 소득'은 어떻게 산출되나요?",
    "Discretionary income is the difference between your Adjusted Gross Income (AGI) and a percentage of the federal poverty guideline for your family size (150% for PAYE/IBR, 225% for SAVE).": "연간 조정총소득(AGI)에서 가족 수에 따른 연방 빈곤 가이드라인 보호액(SAVE 플랜의 경우 225%)을 차감한 금액입니다.",
    "How does student loan forgiveness work under IDR plans?": "소득 연계형 플랜에서 학자금 대출 탕감은 어떻게 이뤄지나요?",
    "If you pay under an IDR plan for 20 or 25 years (or 10 years under SAVE for low initial balances), any remaining student debt is forgiven.": "해당 플랜에 따라 20년 또는 25년 동안(소액 대출은 최단 10년) 성실히 납부하면 남아있는 모든 학자금 부채가 전액 면제됩니다.",
    "Which IDR plan is best for me?": "나에게 가장 적합한 상환 플랜은 무엇인가요?",
    "For most borrowers, the SAVE plan offers the lowest monthly payment and the best interest subsidy. Borrowers with very high incomes relative to debt may prefer PAYE or IBR due to payment caps.": "대다수의 대출자에게는 월 상환액이 가장 적은 SAVE 플랜이 유리하지만, 부채 대비 소득이 매우 높은 전문직은 상환액 상한선이 있는 PAYE나 IBR이 나을 수 있습니다.",
    "Can I switch student loan repayment plans at any time?": "학자금 상환 플랜을 도중에 변경할 수 있나요?",
    "Yes, you can apply to switch repayment plans for free at studentaid.gov. However, switching plans can sometimes cause unpaid interest to capitalize.": "공식 웹사이트를 통해 무료로 전환 신청이 가능하지만, 플랜 변경 시 미납된 이자가 원금에 산입되는 경우가 있으므로 주의해야 합니다.",

    // 6. DTI
    "What is the 28/36 rule?": "28/36 대출 심사 가이드라인이란 무엇인가요?",
    "The 28/36 rule is a standard mortgage underwriting guideline stating that housing costs should not exceed 28% of gross monthly income, and total debt payments should not exceed 36%.": "세전 월소득의 28%를 초과하여 주거비에 지출하지 않고, 기타 모든 신용대출을 포함한 총부채 상환액이 36%를 넘지 않도록 권장하는 기준입니다.",
    "How does DTI affect my mortgage application?": "총부채상환비율(DTI)이 주택담보대출 심사에 어떤 영향을 미치나요?",
    "Lenders use DTI to measure your ability to manage monthly payments. Lower DTIs below 36% receive the most favorable mortgage terms and lowest interest rates.": "은행이 차주의 상환 능력을 심사하는 핵심 잣대입니다. DTI 지표가 36% 미만으로 안정적일수록 대출 승인이 수월하고 우대금리를 적용받습니다.",
    "What is the difference between front-end and back-end DTI?": "주거 DTI(Front-End)와 총부채 DTI(Back-End)는 무엇이 다른가요?",
    "Front-end DTI only includes housing expenses (mortgage, property tax, insurance, HOA). Back-end DTI includes housing plus all recurring debts like credit cards, auto loans, and student loans.": "주거 DTI는 순수 주택 관련 지출(모기지, 세금, 관리비)만 반영하며, 총부채 DTI는 여기에 카드 대금, 자동차 할부, 신용대출 등 모든 고정 부채를 합산합니다.",
    "What is the maximum DTI ratio lenders will accept?": "금융기관이 승인하는 최대 DTI 한도는 얼마인가요?",
    "Conventional mortgages typically prefer back-end DTIs of 36% to 43%. Government-backed loans like FHA and VA may allow DTIs up to 50% with strong compensating factors.": "통상 40% 이내를 선호하며, 한국의 DSR 규제 체계에서는 은행권 40%, 2금융권 50%의 규제 상한선이 엄격히 적용됩니다.",
    "How can I lower my Debt-to-Income ratio?": "DTI 비율을 낮추려면 어떻게 해야 하나요?",
    "You can lower your DTI by increasing gross income or paying off smaller debts completely to eliminate their recurring monthly minimum payments.": "신고 소득을 증빙하여 늘리거나, 잔액이 적은 소액 신용대출을 우선 완납하여 매달 빠져나가는 최소 상환 의무액을 제거하는 것이 가장 빠릅니다.",

    // 7. APR
    "What is the difference between interest rate and APR?": "단순 명목금리와 실질 연이율(APR)의 차이는 무엇인가요?",
    "The interest rate is the nominal cost of borrowing the principal balance. The Annual Percentage Rate (APR) reflects the total annual cost of the loan including points, broker fees, and origination charges.": "명목금리는 순수하게 원금에 붙는 이자율이며, 실질 연이율(APR)은 취급 수수료, 보증료, 인지세 등 부대비용을 연이율로 환산하여 포함한 종합 차입 비용입니다.",
    "Why is APR higher than the advertised interest rate?": "왜 APR이 광고에 나오는 기본 대출금리보다 높은가요?",
    "APR is higher because it amortizes all upfront lender fees, discount points, and closing costs into the effective yearly rate, revealing the true cost of credit.": "대출 실행 시 차주가 초기에 부담하는 모든 수수료와 거래비용을 연간 비율로 균등 배분하여 실질적인 신용 비용을 드러내기 때문입니다.",
    "Is APR useful for comparing different loan offers?": "여러 금융기관의 대출 상품을 비교할 때 APR이 유용한가요?",
    "Yes, APR is the best metric for comparing loan offers with different fee structures, provided you plan to keep the loan for its full term.": "네, 금융사마다 제각각인 복잡한 수수료 구조를 하나의 객관적 연간 지표로 통일해주므로 대출 조건을 공정하게 비교하는 데 가장 적합합니다.",

    // 8. Rent vs Buy
    "How long do I need to stay in a home for buying to beat renting?": "주택 매수가 전월세 임대보다 경제적으로 유리해지려면 몇 년을 거주해야 하나요?",
    "Because upfront closing costs, moving fees, and commissions are substantial, homeowners usually need to stay in a property for 4 to 7 years for buying to financially outperform renting.": "취득세, 중개보수, 등기비용 등 초기 매몰비용이 크기 때문에, 주택 매수가 임대보다 이득이 되려면 보통 4~7년 이상 거주해야 합니다.",
    "What hidden costs of homeownership should renters consider?": "자가 매매를 고민하는 임차인이 고려해야 할 숨은 비용은 무엇인가요?",
    "Homeowners must pay property taxes, homeowners insurance, maintenance and repairs (typically 1-2% of home value annually), HOA dues, and potential capital improvement costs.": "취득세 및 보유세(재산세, 종부세), 화재보험료, 장기수선충당금, 연간 주택 가격의 1~2%에 달하는 유지보수 및 수리 비용입니다.",
    "What is the opportunity cost of buying a home?": "내 집 마련에 따른 기회비용은 무엇인가요?",
    "The money spent on down payment, closing costs, and ongoing property maintenance could otherwise remain invested in liquid assets like index funds that compound over time.": "주택 매수를 위해 묶인 계약금과 세금을 인덱스 펀드 등 고유동성 자산에 장기 투자했을 때 얻을 수 있었던 복리 투자 수익입니다.",

    // 9. Home Affordability
    "How much income should I spend on a mortgage?": "소득의 어느 정도를 주택담보대출 상환에 배정해야 안전한가요?",
    "Most financial experts recommend spending no more than 25% to 28% of your gross monthly income on housing costs (the front-end DTI guideline).": "금융 전문가들은 세전 월소득의 25%~28%(실수령액 기준 30% 내외)를 넘지 않는 선에서 주거비 원리금을 책정할 것을 권고합니다.",
    "How does down payment size impact affordability?": "자기자본(계약금) 규모가 주택 구매력에 어떤 영향을 미치나요?",
    "A larger down payment reduces your loan amount, eliminates Private Mortgage Insurance (PMI) if you put down 20%, and lowers your monthly mortgage payment.": "자기자본 비중이 높을수록 대출 원금이 줄어들어 월 상환 부담이 낮아지며, LTV가 안정되어 금융사로부터 최저 우대금리를 적용받을 수 있습니다.",
    "How do interest rates affect purchasing power?": "대출금리 인상은 부동산 구매 가능 금액에 얼마나 큰 영향을 미치나요?",
    "Every 1% increase in mortgage interest rates reduces your home purchasing power by roughly 10% for the same monthly payment budget.": "감당 가능한 월 납입액이 동일하다고 가정할 때, 대출금리가 1%p 오를 때마다 매수 가능한 주택의 한도 가격은 약 10% 감소합니다.",

    // 10. Auto Loan
    "What is the 20/4/10 rule for buying a car?": "자동차 구매의 '20/4/10 원칙'이란 무엇인가요?",
    "The 20/4/10 rule recommends putting down at least 20%, financing for no longer than 4 years (48 months), and keeping total vehicle expenses under 10% of gross monthly income.": "차량 가격의 20% 이상을 현금 선수금으로 내고, 할부 기간은 4년(48개월)을 넘기지 않으며, 유류비·보험료·할부금을 합친 차량 유지비를 월소득의 10% 이내로 맞추는 규칙입니다.",
    "Is a longer auto loan term better?": "자동차 할부 기간을 60개월이나 72개월로 길게 잡는 것이 좋은가요?",
    "Longer terms (like 72 or 84 months) lower your monthly payment, but you pay substantially more total interest and risk becoming 'underwater' (owing more than the vehicle is worth).": "장기 할부는 월 납입금을 줄여주지만 총 지급 이자가 눈덩이처럼 불어나며, 차량 감가상각 속도가 상환 속도보다 빨라 부채가 차량 가치를 초과하는 역자산 위험이 커집니다.",
    "How does vehicle depreciation affect my loan?": "자동차의 가치 하락(감가상각)은 대출에 어떤 위험을 초래하나요?",
    "New cars depreciate rapidly (often losing 20% in the first year). Without an adequate down payment, you risk owing more on your loan than the car's market value.": "신차는 출고 후 1년 만에 약 20%의 가치가 급락하므로, 충분한 선수금 없이 전액 할부를 이용하면 중고차 시세보다 남은 빚이 더 많아지는 깡통 차량이 될 수 있습니다.",

    // 11. Credit Card Payoff
    "Why does paying only the minimum take so long?": "신용카드 최소 결제(리볼빙)만 이용하면 왜 수십 년이 걸리나요?",
    "Credit card minimum payments are often set around 1% to 2% of the balance plus accrued interest. As the balance slowly drops, the required minimum drops, extending payoff times to decades.": "최소 결제금액은 원금의 1~2%와 당월 수수료만 겨우 커버하도록 설계되어 있어, 잔액이 줄어들수록 갚는 금액도 함께 줄어 완납까지 수십 년이 소요됩니다.",
    "How much faster can I pay off credit cards by paying extra?": "매달 조금씩 추가로 더 갚으면 얼마나 빨리 완납할 수 있나요?",
    "Paying even $50 or $100 above the minimum payment can cut your payoff timeline by several years and save thousands of dollars in compounding interest charges.": "최소 납부액 외에 매월 5만~10만원만 추가 납부해도 상환 기간을 수년 이상 단축하고 막대한 복리 카드 이자를 아낄 수 있습니다.",
    "Should I use a balance transfer card to pay off debt?": "저금리 대환대출이나 채무통합을 활용하는 것이 유리한가요?",
    "A 0% APR balance transfer credit card can save significant interest if you pay off the full balance during the promotional period (typically 12-21 months) and factor in the 3%-5% transfer fee.": "연 15~19%에 달하는 카드 리볼빙 이자를 1금융권의 중금리 신용대출로 대환하여 원리금을 갚아나가는 것이 이자 부담을 대폭 경감하는 확실한 방법입니다.",

    // 12. Retirement Planner
    "What is the 4% rule in retirement planning?": "은퇴 설계에서 '4% 인출의 법칙'이란 무엇인가요?",
    "The 4% rule suggests that withdrawing 4% of your retirement portfolio in the first year, adjusted for inflation annually thereafter, provides a high probability that your nest egg will last at least 30 years.": "은퇴 첫해에 보유 자산의 4%를 인출하고 이후 매년 물가상승률만큼 조정한 금액을 인출하면, 은퇴 자산이 최소 30년 이상 고갈되지 않는다는 이론입니다.",
    "How much money do I need to retire comfortably?": "안락한 은퇴를 위해 준비해야 하는 필요 자금은 얼마인가요?",
    "A common benchmark is accumulating 25 times your anticipated annual retirement expenses, or replacing 70% to 80% of your pre-retirement income.": "은퇴 후 예상되는 연간 총 생활비의 25배를 모으거나, 은퇴 직전 소득의 70%~80% 수준의 소득 대체율을 확보하는 것이 표준 지침입니다.",
    "How does inflation impact retirement spending?": "인플레이션은 은퇴 생활에 어떤 치명적인 영향을 미치나요?",
    "Inflation steadily reduces the purchasing power of your savings. At a 3% inflation rate, everyday living expenses double roughly every 24 years, requiring growing investment portfolios.": "현금의 실질 가치를 잠식합니다. 연 3% 물가상승률이 지속되면 약 24년 만에 생활비가 2배로 뛰기 때문에 은퇴 자산도 반드시 투자 수익을 창출해야 합니다.",

    // 13. 401(k)
    "What is an employer 401(k) match?": "퇴직연금(401k / DC형)의 기업 매칭 기여금이란 무엇인가요?",
    "An employer match is money your employer contributes to your 401(k) account based on your own contributions (e.g. matching 50% of contributions up to 6% of your salary). It is effectively an instant return on your savings.": "근로자가 퇴직연금에 자발적으로 적립할 때 회사가 일정 비율을 추가로 무상 지원해주는 제도로, 납입 즉시 확정 수익을 얻는 것과 같습니다.",
    "What are the 401(k) contribution limits for 2024?": "2024년 기준 퇴직연금 연간 납입 한도는 얼마인가요?",
    "For 2024, the employee contribution limit is $23,000 for those under 50. Individuals aged 50 and older can contribute an additional $7,500 catch-up contribution for a total of $30,500.": "미국 401(k)는 50세 미만 기준 23,000달러이며, 한국의 연금저축/IRP 합산 세액공제 한도는 연 900만원(총 납입한도 1,800만원)입니다.",
    "What is the difference between Traditional 401(k) and Roth 401(k)?": "일반 소득공제형 연금과 과세이연형 연금의 차이는 무엇인가요?",
    "Traditional 401(k) contributions are pre-tax and reduce your current taxable income, with withdrawals taxed in retirement. Roth 401(k) contributions are post-tax, but all qualified growth and withdrawals are completely tax-free.": "일반 연금은 납입 시 세액공제를 받고 연금 수령 시 세금을 내며, Roth형은 세후 자금으로 납입하지만 발생한 투자 수익과 미래 인출금 전액이 비과세됩니다.",

    // 14. IRA Comparison
    "What is the key difference between a Roth and Traditional IRA?": "개인형 퇴직계좌(IRA)의 일반형과 Roth형의 본질적인 차이는 무엇인가요?",
    "Traditional IRA contributions are generally made pre-tax (reducing your current taxable income), but withdrawals in retirement are taxed as ordinary income. Roth IRA contributions are made with post-tax dollars; growth and withdrawals in retirement are completely tax-free.": "일반형은 현재 소득공제 혜택을 받고 은퇴 후 인출 시 과세되며, Roth형은 현재 혜택이 없는 대신 미래의 모든 운용 수익과 원금 인출이 영구 비과세됩니다(한국의 ISA/비과세 계좌와 유사).",
    "Which IRA plan is better for me?": "나에게는 어느 연금 계좌가 더 유리한가요?",
    "If you expect your tax bracket to be higher in retirement than it is today, a Roth IRA is better. If you expect your tax bracket in retirement to be lower, a Traditional IRA is better.": "은퇴 시점의 세율이 현재보다 높을 것으로 예상되면 비과세(Roth) 계좌가 유리하고, 은퇴 후 소득이 줄어 낮은 세율을 적용받을 예정이라면 소득공제형 일반 계좌가 유리합니다.",
    "What are the contribution limits for IRAs in 2024?": "IRA 계좌의 연간 납입 한도는 얼마인가요?",
    "For 2024, the annual contribution limit for Traditional and Roth IRAs is $7,000 for individuals under age 50, and $8,000 for individuals age 50 or older.": "50세 미만은 연간 7,000달러, 50세 이상은 8,000달러까지 납입할 수 있습니다.",
    "Are there income limits for contributing to Traditional and Roth IRAs?": "소득 수준에 따른 가입 및 납입 제한이 있나요?",
    "Roth IRAs have income phase-out ranges that restrict high earners. Anyone with earned income can contribute to a Traditional IRA, but tax deductibility may be limited by income and workplace retirement coverage.": "Roth IRA는 고소득자에 대한 납입 제한 구간이 존재하며, 일반 IRA는 근로소득자 누구나 가입할 수 있으나 소득 공제 혜택은 소득 구간에 따라 제한될 수 있습니다.",
    "Can I withdraw money from my IRA before age 59½ without penalty?": "59.5세 이전에 페널티 없이 돈을 인출할 수 있나요?",
    "Roth IRA original contributions can be withdrawn at any time penalty-free. Withdrawing investment earnings early or withdrawing Traditional IRA funds before 59½ usually incurs income taxes and a 10% penalty.": "Roth IRA의 원금 납입액은 언제든 세금과 벌금 없이 출금 가능하지만, 운용 수익이나 일반 IRA의 조기 인출 시에는 소득세 및 10%의 가산세가 부과됩니다.",

    // 15. Compound Interest
    "What is compound interest?": "복리란 무엇인가요?",
    "Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods. It causes your wealth to grow exponentially over time.": "원금에 대해서만 붙는 단리와 달리, 이전 기간에 발생한 이자가 다시 원금에 합산되어 이자를 낳는 방식으로 자산이 기하급수적으로 증식합니다.",
    "What is the Rule of 72?": "'72의 법칙'이란 무엇인가요?",
    "The Rule of 72 is a quick mental formula to estimate how many years it takes to double your money. Divide 72 by your annual interest rate (e.g. at 8%, your money doubles in about 9 years).": "원금이 2배로 불어나는 데 걸리는 시간을 간단히 암산하는 공식입니다. 72를 연이율로 나누면 소요 연수가 나옵니다(예: 연 8% 수익률이면 약 9년 소요).",
    "How does compounding frequency affect total returns?": "복리 계산 주기는 최종 수익금에 어떤 영향을 미치나요?",
    "The more frequently interest compounds (annually, monthly, daily), the higher your effective annual yield (APY) will be, as interest starts earning interest sooner.": "이자가 원금에 가산되는 주기(연복리, 월복리, 일복리)가 잦을수록 이자가 더 일찍 재투자되므로 실효 연수익률(APY)이 더욱 높아집니다.",

    // 16. TVM
    "What is the Time Value of Money (TVM)?": "화폐의 시간가치(TVM)란 무엇인가요?",
    "The Time Value of Money principle states that a dollar today is worth more than a dollar in the future because today's dollar can be invested and earn interest.": "현재 손에 쥔 1원은 미래에 받게 될 1원보다 더 큰 가치를 지닌다는 금융의 기본 원리입니다. 현재의 돈은 즉시 투자되어 수익을 창출할 수 있기 때문입니다.",
    "What are the core components of TVM calculations?": "화폐의 시간가치 계산에 필요한 5가지 핵심 변수는 무엇인가요?",
    "The five core variables are Present Value (PV), Future Value (FV), Interest Rate per Period (Rate), Total Number of Periods (Nper), and Periodic Payment (PMT).": "현재가치(PV), 미래가치(FV), 기간별 이자율(Rate), 총 기간 수(Nper), 정기 납입액(PMT)입니다.",
    "What is the difference between an ordinary annuity and annuity due?": "기말 연금(후급)과 기수 연금(선급)의 차이는 무엇인가요?",
    "In an ordinary annuity, payments occur at the end of each period. In an annuity due, payments occur at the beginning of each period, earning an extra compounding cycle of interest.": "기말 연금은 매 기간 말에 납입하며, 기수 연금은 매 기간 초에 납입하므로 복리 운용 기간을 1주기 더 온전히 누릴 수 있습니다.",

    // 17. ROI
    "How is Return on Investment (ROI) calculated?": "투자자본수익률(ROI)은 어떻게 계산하나요?",
    "ROI is calculated by subtracting the initial cost of the investment from the final value, and dividing that net gain by the initial cost: ROI = (Net Profit / Cost of Investment) × 100%.": "최종 회수 가치에서 초기 투자 원금을 뺀 순이익을 투자 비용으로 나눈 뒤 백분율로 환산합니다: ROI = (순이익 / 투자 비용) × 100%.",
    "What is the difference between simple ROI and annualized ROI?": "단순 수익률과 연평균 복리수익률(CAGR)의 차이는 무엇인가요?",
    "Simple ROI measures total percentage return regardless of duration. Annualized ROI (CAGR) standardizes the return into a per-year geometric rate, enabling fair comparison between investments held for different lengths of time.": "단순 ROI는 보유 기간과 무관한 누적 절대수익률을 뜻하며, 연평균 복리수익률(CAGR)은 투자 기간이 다른 자산들을 공정하게 비교할 수 있도록 연단위 기하평균으로 표준화한 지표입니다.",
    "What is considered a good ROI?": "어느 정도의 수익률을 거둬야 좋은 성과로 보나요?",
    "Historically, the broad stock market (S&P 500) has returned an average of 7% to 10% annually before inflation. Investments with higher expected returns generally involve higher risk of capital loss.": "역사적으로 S&P 500 등 광범위한 주식 시장의 장기 연평균 명목 수익률은 7%~10% 수준입니다. 이를 현저히 초과하는 기대수익률은 원금 손실 위험을 수반합니다.",

    // 18. Savings Goal
    "How do I calculate how much to save monthly for a goal?": "특정 재무 목표를 위해 매월 얼마를 저축해야 하는지 어떻게 계산하나요?",
    "You divide your target savings amount by the number of months until your deadline, while factoring in the compounding interest earned on your growing balance.": "목표 금액을 남은 기한의 개월 수로 나누되, 매달 불어나는 적립 잔액에 붙는 복리 이자를 차감하여 역산합니다.",
    "Should I keep savings goal funds in high-yield savings or stocks?": "목표 저축 자금은 예적금에 넣어야 하나요, 주식에 투자해야 하나요?",
    "For goals under 3 to 5 years (like a car or home down payment), keep funds in safe, liquid instruments like High-Yield Savings Accounts (HYSA) or CDs. For goals 5+ years away, a diversified investment portfolio may be suitable.": "3~5년 이내의 단기 목표(차량 구매, 전세보증금)는 원금이 보장되는 고금리 파킹통장이나 정기예금에 보관하고, 5년 이상의 장기 목표는 분산 인덱스 펀드에 투자하는 것이 좋습니다.",
    "How can I stay on track with my savings goals?": "저축 목표를 포기하지 않고 끝까지 지키는 비결은 무엇인가요?",
    "Automate recurring monthly transfers into a dedicated savings account immediately after your paycheck arrives (the 'pay yourself first' strategy).": "월급날 당일에 목표 전용 통장으로 자동이체되도록 설정하여 소비하기 전에 먼저 저축하는 '선저축 후지출(Pay yourself first)'을 자동화하는 것입니다.",

    // 19. Stock Return
    "How do I calculate stock returns?": "주식의 총투자수익률은 어떻게 계산하나요?",
    "Total stock return equals capital gains (ending price minus purchase price) plus any dividends received, divided by the original purchase cost.": "시세차익(매도가 - 매수가)에 보유 기간 동안 수령한 모든 배당금을 더한 후, 최초 매수 원금으로 나누어 산출합니다.",
    "What is CAGR in stock returns?": "주식 투자에서 CAGR이란 무엇을 뜻하나요?",
    "Compound Annual Growth Rate (CAGR) measures the geometric mean annual return of a stock over multiple years, smoothing out annual market fluctuations.": "연평균 복리성장률의 약자로, 여러 해 동안의 시장 등락을 평활화하여 매년 일정한 비율로 성장했다고 가정한 기하평균 수익률입니다.",
    "What is the difference between simple return and annualized return?": "단순 수익률과 연환산 수익률의 차이는 무엇인가요?",
    "Simple return measures absolute percentage gain over the entire holding period, while annualized return shows the steady annual rate required to achieve that result.": "단순 수익률은 전 보유 기간에 걸친 총자산의 누적 증가율을 나타내며, 연환산 수익률은 매년 달성해야 했던 복리 속도를 보여줍니다.",

    // 20. CAPM
    "What is the Capital Asset Pricing Model (CAPM)?": "자본자산가격결정모델(CAPM)이란 무엇인가요?",
    "CAPM calculates an asset's expected return based on its risk relative to the overall market, using the formula: Expected Return = Risk-Free Rate + Beta × (Market Return - Risk-Free Rate).": "시장 전체 대비 개별 자산의 체계적 위험을 바탕으로 적정 기대수익률을 도출하는 모형입니다: 기대수익률 = 무위험이자율 + 베타 × (시장수익률 - 무위험이자율).",
    "What does Asset Beta (β) represent?": "주식의 베타 계수(β)는 무엇을 의미하나요?",
    "Beta measures an asset's volatility compared to the broader market. A beta of 1.0 indicates market-level volatility; above 1.0 indicates higher volatility, and below 1.0 indicates lower volatility.": "시장 지수 대비 주가의 민감도(변동성)를 나타냅니다. β=1은 시장과 동일한 변동성, 1 초과는 공격적 고변동성, 1 미만은 방어적 저변동성을 뜻합니다.",
    "What is the Risk-Free Rate?": "무위험 수익률이란 무엇인가요?",
    "The risk-free rate is the theoretical rate of return of an investment with zero risk of default, typically represented by long-term government bond yields (like 10-year US Treasuries).": "부도 위험이 전혀 없는 안전자산의 수익률을 뜻하며, 실무적으로는 신용도가 가장 높은 10년 만기 국채 금리를 사용합니다.",
    "What is the Market Risk Premium?": "시장 위험 프리미엄이란 무엇인가요?",
    "The market risk premium is the additional return investors demand for choosing risky market equities over risk-free government securities.": "투자자가 위험이 없는 국채 대신 변동성이 있는 주식 시장에 자금을 투입하는 대가로 요구하는 추가 보상 수익률입니다.",

    // 21. Dividend
    "What is dividend yield versus yield on cost?": "시가배당률과 매입가 기준 배당률(Yield on Cost)의 차이는 무엇인가요?",
    "Dividend yield is the annual dividend divided by the current stock price. Yield on cost is the annual dividend divided by your original purchase price, which increases as companies raise their dividends over time.": "시가배당률은 현재 주가 대비 연간 배당금의 비율이며, 매입가 기준 배당률은 내가 과거에 매수한 원금 대비 현재 받는 배당금의 비율로 기업이 배당을 늘릴수록 지속 상승합니다.",
    "What is a Dividend Reinvestment Plan (DRIP)?": "배당금 자동재투자 프로그램(DRIP)이란 무엇인가요?",
    "A DRIP automatically uses your cash dividend payments to purchase additional shares or fractional shares of the stock, compounding your share count and future payouts without commission fees.": "수령한 현금 배당금으로 해당 주식의 신주나 소수점 주식을 수수료 없이 자동으로 추가 매수하여 복리 효과를 극대화하는 방식입니다.",
    "Are dividend payments guaranteed?": "기업의 배당금 지급은 법적으로 보장되나요?",
    "No, company boards can reduce, suspend, or eliminate dividend payouts at any time depending on company profitability and economic conditions.": "아닙니다. 기업의 실적 악화나 현금 사정에 따라 이사회 결의를 통해 언제든지 배당금을 삭감하거나 지급을 중단할 수 있습니다.",

    // 22. Inflation
    "What is inflation?": "인플레이션(물가상승)이란 무엇인가요?",
    "Inflation is the general rise in prices for goods and services over time, resulting in a decline in the purchasing power of money.": "재화와 서비스의 전반적인 가격 수준이 지속적으로 상승하여 화폐의 실질 구매력이 하락하는 현상입니다.",
    "How does inflation affect my savings?": "인플레이션은 현금 저축에 어떤 손해를 끼치나요?",
    "Cash sitting in zero-interest accounts loses purchasing power each year. If inflation is 3%, $100 today will only buy about $97 worth of goods next year.": "이자가 붙지 않는 계좌에 방치된 현금은 구매력이 계속 떨어집니다. 물가상승률이 3%라면 오늘의 1,000만원은 내년에 약 970만원어치의 가치밖에 사지 못합니다.",
    "How is inflation officially measured?": "공식 물가상승률은 어떻게 측정되나요?",
    "Inflation is primarily measured using the Consumer Price Index (CPI), which tracks price changes across a standard market basket of consumer goods and services.": "도시 가계가 소비하는 대표적인 상품과 서비스의 가격 변동을 가중 평균하여 산출하는 소비자물가지수(CPI)를 통해 측정합니다.",
    "What is the historical average inflation rate?": "장기적인 역사적 평균 물가상승률은 어느 정도인가요?",
    "In the United States, inflation has historically averaged between 2.5% and 3.2% per year over long multi-decade horizons.": "선진국 기준 수십 년에 걸친 장기 역사적 평균 물가상승률은 연 2.5%~3.2% 수준입니다.",
    "How can I protect my money from losing value to inflation?": "인플레이션으로부터 자산을 방어하려면 어떻게 해야 하나요?",
    "Investing in assets whose earnings outpace inflation—such as diversified equities, Treasury Inflation-Protected Securities (TIPS), real estate, and inflation-indexed bonds.": "장기 수익률이 물가상승률을 웃도는 자산인 글로벌 분산 주식형 ETF, 물가연동국채(TIPS), 우량 부동산 등에 배분하여 투자하는 것입니다.",

    // 23. Paycheck
    "What is FICA tax?": "사회보험료(4대 보험) 및 원천징수세란 무엇인가요?",
    "FICA is a federal payroll tax that funds Social Security (6.2% on wages up to the wage base limit) and Medicare (1.45% plus an additional 0.9% on high earners).": "국민연금, 건강보험, 장기요양보험, 고용보험 등 국가 사회안전망 유지를 위해 급여에서 의무적으로 사전 공제되는 준조세입니다.",
    "What is the difference between pre-tax and post-tax deductions?": "세전 공제 항목과 세후 공제 항목의 차이는 무엇인가요?",
    "Pre-tax deductions (like 401k and health insurance) reduce your taxable gross income before taxes are computed. Post-tax deductions (like Roth contributions or wage garnishments) are taken after taxes.": "세전 공제(국민연금, 비과세 식대 등)는 근로소득세 계산 전 과세표준을 낮춰주며, 세후 공제는 산출 세액이 확정된 후 실수령액에서 차감됩니다.",
    "What is the difference between gross pay and net pay?": "세전 연봉과 세후 실수령액의 차이는 무엇인가요?",
    "Gross pay is the total amount earned before any taxes or deductions. Net pay (take-home pay) is the actual cash deposited into your bank account after all deductions.": "세전 급여는 근로계약서에 명시된 총 지급액이며, 실수령액은 근로소득세, 지방소득세, 4대 보험료를 차감하고 통장에 입금되는 순수 현금입니다.",
    "How does my W-4 filing status affect my paycheck?": "부양가족 공제 신고는 월 실수령액에 어떤 영향을 주나요?",
    "Your W-4 form informs your employer how much federal income tax to withhold each pay period based on your filing status, dependents, and other income.": "간이세액표에 따라 부양가족 수가 많을수록 매달 원천징수되는 소득세가 줄어들어 매월 수령하는 실수령액이 증가합니다.",
    "Why do state and local taxes vary so much?": "지역별 지방세율에 차이가 있는 이유는 무엇인가요?",
    "State income tax rates range from 0% (in states like Texas, Florida, and Washington) to over 13% in high-tax states, while some cities also impose local municipal income taxes.": "지방자치단체마다 독립적인 재정 조례와 세목을 운영하므로, 거주 지역에 따라 지방소득세 및 주민세 납부액에 차이가 발생합니다.",

    // 24. Net Worth
    "What is net worth?": "개인 순자산(Net Worth)이란 무엇인가요?",
    "Net worth is the total market value of everything you own (assets) minus everything you owe to creditors (liabilities).": "보유한 모든 자산(부동산, 금융자산 등)의 현재 시장가치 총액에서 모든 채무(대출, 부채)를 뺀 순수한 재산 가치입니다.",
    "How often should I calculate my net worth?": "순자산은 얼마나 자주 측정하는 것이 좋은가요?",
    "Reviewing your net worth quarterly or semi-annually gives you a clear high-level view of your financial health without obsessing over daily market swings.": "일일 시세 변동에 일희일비하지 않고 장기적인 재무 건전성을 점검하려면 분기별 또는 반기별로 1회 측정하는 것이 이상적입니다.",
    "What counts as an asset vs. a liability?": "자산과 부채에는 각각 무엇이 포함되나요?",
    "Assets include bank balances, investment accounts, home equity, and retirement funds. Liabilities include mortgages, student loans, car loans, and credit card debt.": "자산에는 예적금, 주식·펀드, 부동산 시세, 연금 평가액 등이 들어가며, 부채에는 주담대 잔액, 신용대출, 자동차 할부금, 카드값 등이 포함됩니다.",
    "Should I include my house and mortgage in my net worth?": "순자산 계산 시 자가 주택과 대출 잔액을 포함해야 하나요?",
    "Yes, you include the current fair market value of the home under assets and the remaining mortgage balance under liabilities. The difference is your home equity.": "네. 자산 항목에 주택의 최근 실거래가(시세)를 적고, 부채 항목에 남아있는 대출 원금을 적어야 하며, 두 값의 차이가 순수 부동산 자산이 됩니다.",
    "What does it mean to have a negative net worth?": "순자산이 마이너스라는 것은 무엇을 의미하나요?",
    "A negative net worth means your total debts exceed your total assets. This is common for young adults and recent graduates with student loans.": "가진 자산보다 갚아야 할 빚이 더 많은 상태를 의미하며, 학자금 대출을 안고 사회생활을 시작한 사회초년생에게 매우 흔히 나타납니다.",

    // 25. Emergency Fund
    "How much emergency fund is recommended?": "비상금(생활방어자금)은 얼마를 모아두어야 하나요?",
    "Most financial planners recommend saving 3 to 6 months of essential living expenses, or 9 to 12 months for freelancers or single-income households.": "일반 급여생활자는 최소 3~6개월 치의 필수 생활비를, 소득이 불규칙한 프리랜서나 자영업자는 9~12개월 치를 비축하는 것이 안전합니다.",
    "What expenses should be included in an emergency fund budget?": "비상금 규모를 산출할 때 어떤 지출 항목을 포함해야 하나요?",
    "Include only non-negotiable living costs: housing (rent/mortgage), utilities, groceries, basic transportation, minimum debt payments, and healthcare insurance.": "주거비(월세/이자), 공과금, 기본 식비, 필수 교통비, 대출 최소 상환액, 보험료 등 줄일 수 없는 필수 생계비만 포함합니다.",
    "Where should I keep my emergency fund?": "비상금은 어디에 보관하는 것이 가장 좋은가요?",
    "In a dedicated High-Yield Savings Account (HYSA) or money market account where it is FDIC-insured, earns interest, and can be accessed immediately without risk.": "원금이 보장되고 예금자보호가 적용되며 수수료 없이 즉시 입출금이 가능한 고금리 파킹통장이나 MMF에 따로 분리 보관합니다.",
    "Should I pay off debt or build an emergency fund first?": "빚 갚기와 비상금 모으기 중 어느 쪽을 먼저 해야 하나요?",
    "Build a starter emergency fund of 1 month of expenses or $1,000 to $2,000 first, then aggressively pay off high-interest consumer debt before expanding to 3-6 months.": "먼저 100만~200만원 정도의 기초 비상금을 마련해 비상 상황 시 추가 빚을 내는 것을 막고, 고금리 부채를 완납한 후 비상금을 3~6개월 치로 채우는 것이 정석입니다.",
    "When is it appropriate to use emergency fund savings?": "어떤 상황일 때 비상금을 써도 되나요?",
    "Use it only for genuine, unexpected emergencies: sudden medical bills, unexpected car repairs, or living expenses following job loss.": "갑작스러운 실직, 예기치 못한 질병 및 수술비, 생업에 필수적인 차량 고장 등 진정한 불가항력적 위기 상황에만 인출해야 합니다.",

    // 26. Fee Impact
    "What is an expense ratio?": "펀드나 ETF의 총보수비용비율(Expense Ratio / TER)이란 무엇인가요?",
    "An expense ratio is the annual percentage fee charged by mutual funds and ETFs to cover fund management, administrative expenses, and operating costs.": "펀드 운용, 자산 보관, 사무 관리 등에 소요되는 비용으로 순자산 총액에서 매일 자동으로 차감되는 연간 수수료율입니다.",
    "How do fees compound over time?": "보수 수수료는 장기 투자 시 복리로 어떤 영향을 미치나요?",
    "Fees are deducted annually from your total assets, meaning you lose both the fee money and all future compounding returns that money would have earned.": "매년 자산 원리금에서 떼어가기 때문에 빠져나간 수수료 금액뿐만 아니라, 그 돈이 수십 년간 굴러가며 창출했을 미래의 복리 수익까지 통째로 상실하게 됩니다.",
    "What is a good expense ratio for an index fund?": "인덱스 펀드나 ETF의 적정한 보수 수준은 얼마인가요?",
    "Low-cost index funds and ETFs typically have expense ratios between 0.02% and 0.10%, whereas actively managed mutual funds often charge 0.60% to 1.50% or more.": "우량 지수추종 패시브 ETF의 경우 연 0.03%~0.15% 수준이면 매우 우수하며, 일반 액티브 펀드는 1.0%~2.0% 이상을 부과합니다.",
    "What other investment fees should I look out for?": "총보수 외에 주의해야 할 기타 금융 수수료는 무엇이 있나요?",
    "Watch out for advisory fees (AUM fees of 1%), front-end or back-end sales loads, trading commissions, account maintenance fees, and custodial charges.": "매매 중개수수료, 선취/후취 판매수수료, 환전 수수료, 그리고 자산관리 일임 수수료 등이 있습니다.",
    "How much can a 1% fee difference affect my retirement savings?": "1%의 사소한 보수 차이가 은퇴 자산에 얼마나 큰 피해를 주나요?",
    "A 1% annual fee difference can erode 25% to 30% of your total ending portfolio wealth over a 30-year investment horizon.": "30년 장기 투자 시 매년 단 1%의 수수료 차이가 발생하는 것만으로도 은퇴 시 손에 쥐는 최종 자산의 25%~30%가 소멸할 수 있습니다!",

    // 27. College Savings
    "What is a 529 plan?": "미국의 대학 학자금 비과세 저축 플랜(529)이란 무엇인가요?",
    "A 529 plan is a tax-advantaged savings and investment plan designed to encourage saving for future higher education expenses with tax-free growth and qualified withdrawals.": "자녀의 미래 대학교육비 마련을 위한 세제 혜택 계좌로, 계좌 내에서 발생한 투자 수익에 대해 전액 비과세 혜택을 제공합니다.",
    "How fast do college costs increase?": "대학교 학비와 교육 물가는 얼마나 빨리 상승하나요?",
    "Historically, higher education tuition and fees have increased at an annual rate of 4% to 6%, outpacing general consumer inflation.": "역사적으로 대학교 등록금은 연 4%~6% 속도로 가파르게 인상되어 일반 소비자물가상승률을 지속적으로 크게 앞질렀습니다.",
    "What happens to 529 funds if my child does not go to college?": "자녀가 대학에 진학하지 않으면 적립된 돈은 어떻게 되나요?",
    "You can change the beneficiary to another qualifying family member, use up to $10,000 for student loan repayment, or roll over up to $35,000 into a Roth IRA under SECURE 2.0 rules.": "형제자매 등 다른 가족으로 수혜자를 변경하거나, 학자금 대출 상환에 쓰거나, 최대 35,000달러까지 은퇴 계좌(Roth IRA)로 비과세 이전할 수 있습니다.",
    "Can I use a 529 plan for trade schools or K-12 tuition?": "직업학교나 초중고 사립학교 학비로도 쓸 수 있나요?",
    "Yes, qualified distributions can cover accredited trade schools, vocational programs, apprenticeships, and up to $10,000 per year for K-12 private school tuition.": "네, 인가된 직업기술학교 및 연간 최대 10,000달러 한도 내에서 초중고 사립학교 등록금 결제에 활용할 수 있습니다.",
    "How does a 529 plan impact financial aid eligibility?": "장학금이나 학자금 보조금 수령 자격에 불이익을 주나요?",
    "Parent-owned 529 plans are assessed as parental assets on the FAFSA at a maximum rate of 5.64%, having minimal negative impact on financial aid eligibility.": "부모 명의 자산으로 간주되어 학자금 지원 산정 시 최대 5.64%만 반영되므로 재정보조 장학금에 미치는 영향은 미미합니다.",

    // 28. Crypto DCA
    "What is Dollar-Cost Averaging (DCA)?": "적립식 분할투자(DCA / 달러 코스트 애버리징)란 무엇인가요?",
    "Dollar-Cost Averaging is an investment strategy where you invest a fixed amount of money at regular intervals regardless of the asset's fluctuating market price.": "자산 가격의 오르내림에 일희일비하지 않고, 정해진 주기마다 일정한 금액을 꾸준히 분할 매수하는 투자 전략입니다.",
    "How does DCA apply to high-volatility assets like Crypto?": "암호화폐처럼 극심한 변동성 자산에 DCA가 왜 효과적인가요?",
    "DCA prevents emotional decisions during extreme market peaks and crashes, automatically buying more units when prices are low and fewer when prices are high.": "최고점 추격 매수와 바닥에서의 패닉셀을 방지하고, 가격 하락 시 자동으로 더 많은 수량을 확보하여 평균 매입 단가를 효과적으로 낮춰줍니다.",
    "Is DCA better than investing a lump sum?": "거치식 몰빵 투자보다 적립식 분할 매수가 더 우수한가요?",
    "Lump sum investing historically wins in steadily rising markets, but DCA provides superior peace of mind, lower emotional risk, and downside protection in highly volatile markets.": "지속적인 대세 상승장에서는 거치식이 유리하지만, 롤러코스터 장세에서는 분할 매수가 뛰어난 심리적 안정감과 하방 리스크 방어를 제공합니다.",
    "What is the best frequency for crypto DCA?": "암호화폐 적립식 매수는 어느 주기로 실행하는 것이 가장 좋나요?",
    "Weekly or bi-weekly DCA aligned with your pay cycle is ideal for capturing market volatility while keeping trading fees manageable.": "월급날이나 수입 주기에 맞추어 주 1회 또는 격주 1회로 설정하는 것이 불필요한 거래 수수료를 아끼면서 변동성을 분산하는 가장 이상적인 빈도입니다.",
    "Does DCA guarantee profits in cryptocurrency?": "적립식으로 매수하면 암호화폐 투자에서 무조건 수익이 보장되나요?",
    "No, DCA does not protect against prolonged declines or failing crypto projects; it only ensures you achieve the weighted average market purchase price.": "아닙니다. 코인 프로젝트의 근본적 파산이나 장기적인 가격 우하향 위험을 없애주지는 못하며, 투자 기간 동안의 가중평균 매수가를 달성해 줄 뿐입니다.",

    // 29. Tip
    "What is the standard tipping percentage?": "미국의 레스토랑 팁 관례는 몇 퍼센트인가요?",
    "In the United States and Canada, standard restaurant tipping guidelines range from 15% for adequate service, 18% for good service, to 20% or more for exceptional service.": "북미 기준 보통 수준의 서비스는 15%, 훌륭한 서비스는 18%, 매우 만족스럽거나 고급 식당에서는 20% 이상을 지불하는 것이 에티켓입니다.",
    "Should tips be calculated before or after sales tax?": "팁은 세전 금액과 세후 금액 중 어느 것을 기준으로 계산하나요?",
    "Etiquette traditionally dictates calculating the tip percentage on the pre-tax food and beverage subtotal, though many automated payment terminals calculate tip on the post-tax total.": "전통적인 에티켓 규범은 음식과 음료의 순수 세전 금액(Subtotal)을 기준으로 계산하는 것이 원칙이나, 카드 결제 단말기는 세후 총액을 기준으로 제시하는 경우가 흔합니다.",
    "How do you split a bill evenly among friends?": "친구들과 식사 후 정확한 더치페이(N분의 1)는 어떻게 계산하나요?",
    "Calculate the total bill including food, beverages, tax, and tip, and divide the total amount equally by the number of paying participants.": "음식값, 음료비, 세금 및 팁을 모두 합산한 총 청구액을 구한 뒤, 이를 지불에 참여하는 인원수로 균등하게 나눕니다.",

    // 30. Discount
    "How do you calculate a percentage discount?": "할인율을 적용한 최종 가격은 어떻게 계산하나요?",
    "Multiply the original price by the discount percentage divided by 100 to find the savings, and subtract that amount from the original price: Final Price = Original Price × (1 - Discount%).": "정가에 할인율을 곱하여 할인 금액을 구한 뒤 원가에서 뺍니다: 최종 가격 = 정가 × (1 - 할인율/100).",
    "How do multiple stacked discounts work?": "2중 중복 할인은 어떻게 계산되나요?",
    "Stacked discounts apply sequentially rather than additively. For example, 20% off plus an extra 10% off results in an effective 28% total discount, not 30%.": "단순 덧셈이 아닌 순차적 곱셈으로 적용됩니다. 예컨대 20% 할인 후 추가 10% 할인이 들어가면 합산 30%가 아니라 실질 28% 할인이 됩니다.",
    "Is sales tax applied before or after store discounts?": "부가가치세나 소비세는 할인 전과 후 중 언제 부과되나요?",
    "In most jurisdictions, sales tax is calculated on the discounted post-sale price, meaning you pay sales tax only on the actual money spent.": "대부분의 관할권에서 세금은 할인이 적용된 실제 최종 결제 금액을 기준으로 부과되므로, 실제로 지불한 금액에 대해서만 세금을 내게 됩니다."
  }
};
