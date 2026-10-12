import type { Lang } from './ui';

export const faqsBatchAsia: Partial<Record<Lang, Record<string, string>>> = {

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
};
