import type { Lang } from './ui';

export const faqsBatchRest: Partial<Record<Lang, Record<string, string>>> = {
  // Arabic (ar)
  ar: {
    // 1. Mortgage
    "How is a mortgage payment calculated?": "كيف يتم حساب القسط الشهري للتمويل العقاري؟",
    "A standard monthly mortgage payment consists of Principal & Interest (P&I), property taxes, homeowners insurance, private mortgage insurance (PMI) if down payment is under 20%, and homeowner association (HOA) fees.": "يتكون القسط الشهري القياسي من أصل الدين والفوائد (P&I)، والضرائب العقارية، والتأمين على المنزل، وتأمين الرهن العقاري الخاص (PMI) إذا كانت الدفعة الأولى أقل من 20%، ورسوم جمعية الملاك (HOA).",
    "What is PMI and when do I pay it?": "ما هو تأمين الرهن العقاري الخاص (PMI) ومتى يتعين دفعه؟",
    "Private Mortgage Insurance (PMI) is a policy that protects the lender if you default. It is typically required on conventional loans if your down payment is less than 20% of the home purchase price.": "تأمين الرهن العقاري الخاص (PMI) هو بوليصة تأمين تحمي جهة الإقراض في حال تعثر المقترض عن السداد. ويُشترط عادةً في القروض التقليدية إذا كانت الدفعة الأولى أقل من 20% من سعر شراء العقار.",
    "What does PITI stand for?": "إلامَ يشير الاختصار PITI في التمويل العقاري؟",
    "PITI stands for Principal, Interest, Taxes, and Insurance. These are the four basic components that make up a homeowner's monthly housing payment. Together, they reflect the true cost of owning a home on a month-to-month basis.": "يشير PITI إلى أصل المبلغ (Principal)، والفائدة (Interest)، والضرائب (Taxes)، والتأمين (Insurance). وهي المكونات الأربعة الأساسية لقسط السكن الشهري التي تعكس التكلفة الحقيقية لملكية العقار.",
    "Is a 15-year mortgage better than a 30-year mortgage?": "هل التمويل العقاري لمدة 15 عاماً أفضل من 30 عاماً؟",
    "A 15-year mortgage typically offers a lower interest rate and allows you to pay off your home twice as fast, saving you tens of thousands of dollars in interest. However, a 30-year mortgage has lower monthly payments, which provides greater cash flow flexibility.": "يقدم تمويل الـ 15 عاماً معدل فائدة أقل ويتيح سداد القرض بضعف السرعة مما يوفر عشرات الآلاف في الفوائد؛ في حين يتميز تمويل الـ 30 عاماً بأقساط شهرية أقل تمنحك مرونة مالية أعلى في التدفق النقدي.",
    "How do extra payments affect my mortgage payoff schedule?": "كيف تؤثر المدفوعات الإضافية على جدول سداد التمويل العقاري؟",
    "Any extra money you pay towards your mortgage is applied directly to the principal balance. This reduces the remaining loan balance and decreases the amount of interest that accumulates, helping you pay off your mortgage years ahead of schedule.": "تُخصم أي مبالغ إضافية تدفعها مباشرة من أصل رصيد القرض المتبقي، مما يقلل الفوائد المتراكمة ويساعدك على التخلص من القرض قبل موعده بسنوات وتوفير تكاليف باهظة.",

    // 2. Loan Calculator
    "How does an amortized loan work?": "كيف يعمل القرض المجدول بنظام الاستهلاك المتساوي؟",
    "With an amortized loan, you make equal periodic payments. Early in the loan term, the majority of each payment goes toward interest. Over time, an increasing portion goes toward paying down the principal balance until the debt is fully paid off.": "في القرض المجدول، تسدد دفعات دورية متساوية. في البداية، يذهب الجزء الأكبر من الدفعة لسداد الفوائد، وبمرور الوقت تزداد حصة سداد أصل المبلغ حتى يتم إبراء الذمة بالكامل.",
    "What is the difference between fixed-rate and variable-rate loans?": "ما الفرق بين القروض ذات الفائدة الثابتة والمتغيرة؟",
    "A fixed-rate loan maintains the exact same interest rate and payment throughout the loan term. A variable-rate loan has an interest rate that adjusts periodically based on benchmark interest rates, which can increase or decrease your payments.": "يحافظ القرض ذو الفائدة الثابتة على نفس معدل الفائدة والقسط طوال مدة القرض، بينما يتغير سعر الفائدة المتغيرة دورياً استناداً إلى أسعار الفائدة القياسية، مما يؤدي لزيادة القسط أو انخفاضه.",
    "Can I pay off my loan early without penalty?": "هل يمكنني سداد القرض مبكراً دون تحمل غرامات السداد المعجل؟",
    "Most consumer loans and conventional mortgages allow prepayment without penalties, but some lenders include a prepayment penalty clause. Always verify your loan agreement terms before making accelerated principal payments.": "تسمح معظم القروض الاستهلاكية والتمويلات العقارية بالسداد المبكر دون غرامة، إلا أن بعض الجهات تدرج شرط غرامة السداد المعجل. تحقق دائماً من بنود عقد التمويل.",

    // 3. Debt Payoff
    "What is the Debt Snowball method?": "ما هي طريقة كرة الثلج لسداد الديون (Debt Snowball)؟",
    "The Debt Snowball method involves paying off your smallest debt balances first, regardless of interest rates. It builds psychological momentum and motivation through quick wins.": "تقوم على سداد أصغر الديون رصيداً أولاً بغض النظر عن معدل الفائدة، مما يمنحك دافعاً نفسياً وحماساً كبيراً بفضل الانتصارات والنجاحات السريعة.",
    "What is the Debt Avalanche method?": "ما هي طريقة الانهيار الجليدي لسداد الديون (Debt Avalanche)؟",
    "The Debt Avalanche method involves paying off your highest interest rate debts first. Mathematically, this minimizes the total interest you pay and helps you become debt-free faster.": "تعتمد على سداد الديون ذات أعلى فائدة أولاً. حسابياً، تقلل هذه الطريقة إجمالي الفوائد المدفوعة وتساعدك على التحرر من الديون بأسرع وقت وأقل تكلفة.",
    "Which method is better: Debt Snowball or Debt Avalanche?": "أيهما أفضل: طريقة كرة الثلج أم الانهيار الجليدي؟",
    "Mathematically, the Debt Avalanche method is superior because it minimizes the total interest paid. However, studies show that the Debt Snowball method is often more successful in practice because the psychological momentum helps people stick to their plan.": "حسابياً، طريقة الانهيار الجليدي هي الأوفر مالياً، لكن الدراسات السلوكية تثبت أن كرة الثلج غالباً ما تحقق نجاحاً عملياً أكبر لأن الدافع النفسي يساعد الأفراد على الالتزام بالخطة.",
    "How does the 'extra payment' roll over in these strategies?": "كيف يتم تدوير الدفعات الإضافية في هذه الخطط؟",
    "You continue paying minimums on all debts and add your extra cash to the target debt. Once that target debt is fully paid off, you roll its entire payment into the next debt on your list.": "تسدد الحد الأدنى لكافة الديون وتوجه أي مبالغ إضافية للدين المستهدف. بمجرد سداده بالكامل، تُحول كامل ميزانيته (الحد الأدنى + الفائض) إلى الدين التالي بالقائمة.",
    "Can I do a hybrid of Snowball and Avalanche?": "هل يمكن الجمع بين طريقتي كرة الثلج والانهيار الجليدي؟",
    "Yes. Many people pay off one or two small debts first to free up immediate cash flow (Snowball), and then pivot to targeting the remaining debts by highest interest rate (Avalanche).": "نعم، يفضل الكثيرون سداد دين أو دينين صغيرين في البداية لتحرير تدفق نقدي سريع وكسب الثقة (كرة الثلج)، ثم الانتقال لسداد باقي الديون حسب الأعلى فائدة (الانهيار الجليدي).",

    // 4. Refinance
    "When should I refinance my loan?": "متى ينبغي لي إعادة تمويل القرض (Refinance)؟",
    "It generally makes sense to refinance if you can secure a lower interest rate, reduce your monthly payment, or shorten your term, provided your total interest savings exceed the closing costs.": "تكون إعادة التمويل مجدية إذا حصلت على فائدة أقل، أو خفضت قسطك الشهري، أو قصرت مدة القرض، بشرط أن يتجاوز الوفر المالي الإجمالي في الفوائد تكاليف ورسوم الإغلاق.",
    "What closing costs are associated with refinancing?": "ما هي رسوم وتكاليف إغلاق إعادة التمويل؟",
    "Refinancing costs typically include application fees, origination fees, appraisal costs, title search and insurance, credit report fees, and recording fees, ranging from 2% to 6% of the loan amount.": "تشمل عادةً رسوم الطلب، ورسوم فتح الملف الإدارية، وتقييم العقار، والتأمين، والتوثيق، وتتراوح بين 2% إلى 6% من قيمة القرض.",
    "How do I calculate my refinance break-even point?": "كيف أحسب نقطة التعادل لاسترداد تكاليف إعادة التمويل؟",
    "Divide your total refinance closing costs by your monthly payment savings. If closing costs are $3,000 and you save $150 per month, your break-even point is 20 months ($3,000 / $150).": "اقسم إجمالي تكاليف إعادة التمويل على مبلغ التوفير الشهري في القسط. مثلاً: تكاليف بقيمة 3,000$ وتوفير 150$ شهرياً تعني نقطة تعادل خلال 20 شهراً.",
    "What is a 'no-closing-cost' refinance?": "ما هي إعادة التمويل 'دون رسوم إغلاق'؟",
    "A no-closing-cost refinance means the lender either rolls the closing fees into your new total loan balance or charges a slightly higher interest rate to cover them.": "لا تعني إعفاءً من الرسوم، بل يقوم البنك بإضافة تلك التكاليف إلى أصل رصيد القرض الجديد أو يفرض فائدة أعلى قليلاً لتعويضها.",
    "Does refinancing lower my monthly payment or total interest?": "هل تخفض إعادة التمويل القسط الشهري أم إجمالي الفوائد؟",
    "It depends on the term. Refinancing to a lower rate with the same or shorter term saves on both. Resetting your term back to 30 years lowers the monthly payment but can increase total lifetime interest.": "يعتمد ذلك على المدة؛ فإعادة التمويل بفائدة أقل مع الحفاظ على نفس المدة يوفر في كليهما. أما تمديد الأجل لـ 30 عاماً فيخفض القسط الشهري لكنه قد يزيد إجمالي الفوائد المدفوعة على المدى البعيد.",

    // 5. Student Loan
    "What is the SAVE plan?": "ما هي خطة SAVE لسداد القروض الطلابية؟",
    "The Saving on a Valuable Education (SAVE) plan is an income-driven repayment (IDR) plan that protects discretionary income up to 225% of the poverty line, lowers payments to 5%-10%, and stops unpaid interest from accumulating.": "خطة السداد المعتمدة على الدخل (SAVE) ترفع حماية الدخل الأساسي حتى 225% من خط الفقر، وتخفض الأقساط إلى 5%-10% من الدخل الفائض، وتمنع تراكم الفوائد غير المدفوعة.",
    "How is discretionary income calculated for student loans?": "كيف يُحسب الدخل المتاح الفائض (Discretionary Income)؟",
    "Discretionary income is the difference between your Adjusted Gross Income (AGI) and a percentage of the federal poverty guideline for your family size (150% for PAYE/IBR, 225% for SAVE).": "هو الفارق بين إجمالي دخلك المعدل (AGI) ونسبة محددة من خط الفقر بحسب عدد أفراد أسرتك (150% لخطط PAYE/IBR، و225% لخطة SAVE).",
    "How does student loan forgiveness work under IDR plans?": "كيف يعمل الإعفاء من الديون الطلابية في خطط IDR؟",
    "If you pay under an IDR plan for 20 or 25 years (or 10 years under SAVE for low initial balances), any remaining student debt is forgiven.": "إذا واظبت على السداد وفق الخطة لمدة 20 أو 25 عاماً (أو 10 أعوام في خطة SAVE للأرصدة الصغيرة)، يتم إسقاط وإعفاء كامل الرصيد المتبقي.",
    "Which IDR plan is best for me?": "ما هي خطة السداد القائمة على الدخل الأنسب لي؟",
    "For most borrowers, the SAVE plan offers the lowest monthly payment and the best interest subsidy. Borrowers with very high incomes relative to debt may prefer PAYE or IBR due to payment caps.": "توفر خطة SAVE لأغلب المقترضين أقل قسط شهري وأفضل دعم للفائدة، في حين يفضل أصحاب الدخول المرتفعة جداً خطتي PAYE أو IBR لوجود سقف أقصى لقيمة القسط.",
    "Can I switch student loan repayment plans at any time?": "هل يمكنني التبديل بين خطط السداد في أي وقت؟",
    "Yes, you can apply to switch repayment plans for free at studentaid.gov. However, switching plans can sometimes cause unpaid interest to capitalize.": "نعم، يمكنك التبديل مجاناً عبر الموقع الرسمي، لكن يرجى الانتباه إلى أن التبديل قد يؤدي في بعض الحالات إلى رسملة الفوائد غير المدفوعة وإضافتها للأصل.",

    // 6. DTI
    "What is the 28/36 rule?": "ما هي قاعدة 28/36 لتقييم الملاءة الائتمانية؟",
    "The 28/36 rule is a standard mortgage underwriting guideline stating that housing costs should not exceed 28% of gross monthly income, and total debt payments should not exceed 36%.": "قاعدة مصرفية تنص على ألا تتجاوز تكاليف السكن 28% من إجمالي الدخل الشهري قبل الضرائب، وألا تتجاوز كافة الديون والأقساط مجتمعة 36%.",
    "How does DTI affect my mortgage application?": "كيف تؤثر نسبة الدين إلى الدخل (DTI) على طلب التمويل؟",
    "Lenders use DTI to measure your ability to manage monthly payments. Lower DTIs below 36% receive the most favorable mortgage terms and lowest interest rates.": "تستخدمها البنوك لقياس قدرتك على تحمل الأقساط، وتحصل النسب المنخفضة دون 36% على أفضل شروط التمويل وأقل أسعار فائدة ممكنة.",
    "What is the difference between front-end and back-end DTI?": "ما الفرق بين DTI السكن وDTI الإجمالي؟",
    "Front-end DTI only includes housing expenses (mortgage, property tax, insurance, HOA). Back-end DTI includes housing plus all recurring debts like credit cards, auto loans, and student loans.": "يقيس DTI السكني (Front-end) تكاليف السكن فقط (القسط، الضرائب، التأمين)، بينما يشمل DTI الإجمالي (Back-end) تكاليف السكن إضافةً لجميع الالتزامات كبطاقات الائتمان وقروض السيارات.",
    "What is the maximum DTI ratio lenders will accept?": "ما هو الحد الأقصى المقبول لنسبة DTI لدى المقرضين؟",
    "Conventional mortgages typically prefer back-end DTIs of 36% to 43%. Government-backed loans like FHA and VA may allow DTIs up to 50% with strong compensating factors.": "تفضل القروض التقليدية نسبة إجمالية بين 36% و43%، بينما تسمح برامج التمويل المدعومة بنسبة تصل إلى 50% في حال توفر ملاءة ائتمانية قوية ومدخرات كافية.",
    "How can I lower my Debt-to-Income ratio?": "كيف يمكنني خفض نسبة الدين إلى الدخل الخاصة بي؟",
    "You can lower your DTI by increasing gross income or paying off smaller debts completely to eliminate their recurring monthly minimum payments.": "بزيادة دخلك الشهري الإجمالي أو بسداد الديون الصغيرة بالكامل لإلغاء أقساطها الشهرية من حساب النسبة.",

    // 7. APR
    "What is the difference between interest rate and APR?": "ما الفرق بين سعر الفائدة الاسمي والنسبة السنوية الفعلية (APR)؟",
    "The interest rate is the nominal cost of borrowing the principal balance. The Annual Percentage Rate (APR) reflects the total annual cost of the loan including points, broker fees, and origination charges.": "سعر الفائدة هو التكلفة الاسمية لاقتراض أصل الدين، بينما تعكس النسبة السنوية الفعلية (APR) التكلفة الإجمالية الحقيقية شاملة الرسوم الإدارية والعمولات والتأمين.",
    "Why is APR higher than the advertised interest rate?": "لماذا تكون نسبة APR أعلى من سعر الفائدة المعلن؟",
    "APR is higher because it amortizes all upfront lender fees, discount points, and closing costs into the effective yearly rate, revealing the true cost of credit.": "لأنها توزع كافة الرسوم والتكاليف الإدارية المدفوعة مقدماً على مدة القرض، مما يكشف عن التكلفة الحقيقية الكاملة للاقتراض سنوياً.",
    "Is APR useful for comparing different loan offers?": "هل تفيد نسبة APR في المقارنة بين عروض التمويل؟",
    "Yes, APR is the best metric for comparing loan offers with different fee structures, provided you plan to keep the loan for its full term.": "نعم، هي المعيار الأدق لمقارنة العروض التمويلية ذات هياكل الرسوم المتباينة، بشرط أن تحتفظ بالقرض طوال مدته المحددة.",

    // 8. Rent vs Buy
    "How long do I need to stay in a home for buying to beat renting?": "كم سنة يجب أن أقيم في العقار ليكون الشراء أجدى من الاستئجار؟",
    "Because upfront closing costs, moving fees, and commissions are substantial, homeowners usually need to stay in a property for 4 to 7 years for buying to financially outperform renting.": "نظراً لارتفاع تكاليف الإغلاق ورسوم الوساطة ونقل الملكية، يحتاج المشتري عادةً للإقامة في العقار من 4 إلى 7 سنوات حتى يتفوق الشراء مالياً على الإيجار.",
    "What hidden costs of homeownership should renters consider?": "ما هي التكاليف الخفية لامتلاك منزل التي يجب على المستأجر معرفتها؟",
    "Homeowners must pay property taxes, homeowners insurance, maintenance and repairs (typically 1-2% of home value annually), HOA dues, and potential capital improvement costs.": "الضرائب العقارية، والتأمين الشامل، والصيانة والإصلاحات الدورية (عادةً 1-2% من قيمة العقار سنوياً)، ورسوم الخدمات المشتركة والتجديدات.",
    "What is the opportunity cost of buying a home?": "ما هي تكلفة الفرصة البديلة عند شراء عقار؟",
    "The money spent on down payment, closing costs, and ongoing property maintenance could otherwise remain invested in liquid assets like index funds that compound over time.": "الأموال المجمدة في الدفعة الأولى وتكاليف الشراء كان يمكن استثمارها في أصول سائلة ذات عوائد مركبة كصناديق المؤشرات على المدى الطويل.",

    // 9. Home Affordability
    "How much income should I spend on a mortgage?": "ما هو الحد الأقصى للراتب الذي يُنصح بتخصيصه لقسط المسكن؟",
    "Most financial experts recommend spending no more than 25% to 28% of your gross monthly income on housing costs (the front-end DTI guideline).": "يوصي الخبراء بألا يتجاوز إجمالي نفقات السكن (القسط، الضرائب، التأمين) ما بين 25% إلى 28% من إجمالي دخلك الشهري.",
    "How does down payment size impact affordability?": "كيف تؤثر قيمة الدفعة الأولى على القدرة على الشراء؟",
    "A larger down payment reduces your loan amount, eliminates Private Mortgage Insurance (PMI) if you put down 20%, and lowers your monthly mortgage payment.": "تقليل مبلغ التمويل، وإلغاء تأمين الرهن العقاري (PMI) عند دفع 20% فأكثر، وتخفيض قيمة القسط الشهري بشكل ملموس.",
    "How do interest rates affect purchasing power?": "كيف يؤثر ارتفاع سعر الفائدة على قدرتي على الشراء؟",
    "Every 1% increase in mortgage interest rates reduces your home purchasing power by roughly 10% for the same monthly payment budget.": "كل زيادة بنسبة 1% في معدل الفائدة تؤدي لانخفاض القدرة الشرائية للعقار بنحو 10% تقريباً لنفس ميزانية القسط الشهري.",

    // 10. Auto Loan
    "What is the 20/4/10 rule for buying a car?": "ما هي قاعدة 20/4/10 لشراء السيارات؟",
    "The 20/4/10 rule recommends putting down at least 20%, financing for no longer than 4 years (48 months), and keeping total vehicle expenses under 10% of gross monthly income.": "تنص على دفع 20% كدفعة أولى نقدية، وألا تتجاوز مدة التمويل 4 سنوات (48 شهراً)، وألا تتعدى تكاليف السيارة الإجمالية 10% من إجمالي الدخل الشهري.",
    "Is a longer auto loan term better?": "هل الأفضل اختيار مدة أطول لتمويل السيارة (كالتقسيط على 6 أو 7 سنوات)؟",
    "Longer terms (like 72 or 84 months) lower your monthly payment, but you pay substantially more total interest and risk becoming 'underwater' (owing more than the vehicle is worth).": "تقلل المدد الطويلة القسط الشهري لكنها ترفع الفوائد الإجمالية بشكل كبير، وتجعلك عرضة لأن يصبح الدين المتبقي أكبر من القيمة السوقية للسيارة.",
    "How does vehicle depreciation affect my loan?": "كيف يؤثر انخفاض قيمة السيارة (الإهلاك) على القرض؟",
    "New cars depreciate rapidly (often losing 20% in the first year). Without an adequate down payment, you risk owing more on your loan than the car's market value.": "تفقد السيارات الجديدة نحو 20% من قيمتها في سنتها الأولى؛ وبدون دفعة أولى كافية تصبح مديونيتك للبنك أعلى من سعر بيع السيارة.",

    // 11. Credit Card Payoff
    "Why does paying only the minimum take so long?": "لماذا يستغرق سداد بطاقة الائتمان عقوداً عند دفع الحد الأدنى فقط؟",
    "Credit card minimum payments are often set around 1% to 2% of the balance plus accrued interest. As the balance slowly drops, the required minimum drops, extending payoff times to decades.": "لأن الحد الأدنى يغطي الفوائد المتراكمة وجزءاً ضئيلاً جداً (1-2%) من أصل الدين، ومع انخفاض الرصيد يقل الحد الأدنى مما يطيل مدة السداد لسنوات طويلة.",
    "How much faster can I pay off credit cards by paying extra?": "كم من الوقت أوفره إذا دفعت مبالغ إضافية على البطاقة الائتمانية؟",
    "Paying even $50 or $100 above the minimum payment can cut your payoff timeline by several years and save thousands of dollars in compounding interest charges.": "دفع 50$ أو 100$ إضافية فوق الحد الأدنى شهرياً يختصر فترة السداد بعدة سنوات ويوفر آلاف الدولارات من الفوائد المركبة الباهظة.",
    "Should I use a balance transfer card to pay off debt?": "هل يجدر بي استخدام بطاقة تحويل الرصيد بفائدة 0%؟",
    "A 0% APR balance transfer credit card can save significant interest if you pay off the full balance during the promotional period (typically 12-21 months) and factor in the 3%-5% transfer fee.": "تعتبر ممتازة لتوفير الفوائد إذا كنت قادراً على تصفير الرصيد كاملاً خلال الفترة الترويجية (12-21 شهراً) مع احتساب رسوم التحويل (3-5%).",

    // 12. Retirement Planner
    "What is the 4% rule in retirement planning?": "ما هي قاعدة 4% للتخطيط للتقاعد؟",
    "The 4% rule suggests that withdrawing 4% of your retirement portfolio in the first year, adjusted for inflation annually thereafter, provides a high probability that your nest egg will last at least 30 years.": "تنص على أن سحب 4% من محفظتك التقاعدية في السنة الأولى وتعديل المبلغ سنوياً لمواكبة التضخم، يضمن بنسبة عالية جداً استمرار مدخراتك لمدة 30 عاماً على الأقل.",
    "How much money do I need to retire comfortably?": "كم أحتاج من المال للتقاعد براحة وأمان مالي؟",
    "A common benchmark is accumulating 25 times your anticipated annual retirement expenses, or replacing 70% to 80% of your pre-retirement income.": "المعيار الشائع هو ادخار 25 ضعف نفقاتك السنوية المتوقعة أثناء التقاعد، أو تأمين ما يعادل 70% إلى 80% من دخلك قبل التقاعد.",
    "How does inflation impact retirement spending?": "كيف يؤثر التضخم على مدخرات ونفقات التقاعد؟",
    "Inflation steadily reduces the purchasing power of your savings. At a 3% inflation rate, everyday living expenses double roughly every 24 years, requiring growing investment portfolios.": "يؤدي التضخم لتآكل القوة الشرائية للأموال؛ فبمعدل تضخم 3% تتضاعف تكاليف المعيشة كل 24 عاماً، مما يفرض تنمية المحفظة الاستثمارية وعدم إبقائها نقدية.",

    // 13. 401(k)
    "What is an employer 401(k) match?": "ما هي مساهمة جهة العمل التكميلية (Employer Match)؟",
    "An employer match is money your employer contributes to your 401(k) account based on your own contributions (e.g. matching 50% of contributions up to 6% of your salary). It is effectively an instant return on your savings.": "هي أموال إضافية يودعها صاحب العمل في صندوق تقاعدك توازياً مع مدخراتك (كمطابقة 50% حتى 6% من راتبك)، وهي عائد فوري مجاني ومضمون بنسبة 100%.",
    "What are the 401(k) contribution limits for 2024?": "ما هي الحدود القصوى للاشتراك لعام 2024؟",
    "For 2024, the employee contribution limit is $23,000 for those under 50. Individuals aged 50 and older can contribute an additional $7,500 catch-up contribution for a total of $30,500.": "الحد الأقصى هو 23,000$ لمن تقل أعمارهم عن 50 عاماً، مع إمكانية إضافة 7,500$ كمساهمة استدراكية لمن بلغوا 50 عاماً فأكثر بإجمالي 30,500$.",
    "What is the difference between Traditional 401(k) and Roth 401(k)?": "ما الفرق بين حساب 401(k) التقليدي وحساب Roth؟",
    "Traditional 401(k) contributions are pre-tax and reduce your current taxable income, with withdrawals taxed in retirement. Roth 401(k) contributions are post-tax, but all qualified growth and withdrawals are completely tax-free.": "مساهمات الحساب التقليدي تُستقطع قبل الضريبة وتخفض دخلك الخاضع للضريبة حالياً وتُفرض الضريبة عند التقاعد؛ أما Roth فتُدفع بعد الضريبة وتكون أرباحه وسحوباته معفية تماماً.",

    // 14. IRA Comparison
    "What is the key difference between a Roth and Traditional IRA?": "ما الفرق الجوهري بين حساب IRA التقليدي وحساب Roth IRA؟",
    "Traditional IRA contributions are generally made pre-tax (reducing your current taxable income), but withdrawals in retirement are taxed as ordinary income. Roth IRA contributions are made with post-tax dollars; growth and withdrawals in retirement are completely tax-free.": "التقليدي يعفيك من الضريبة الآن وتدفعها عند السحب في التقاعد، أما Roth فيتم تمويله بأموال خاضعة للضريبة ولكن كافة الأرباح والسحوبات المستقبلية تكون معفية تماماً.",
    "Which IRA plan is better for me?": "أي نوع من حسابات IRA هو الأفضل لي؟",
    "If you expect your tax bracket to be higher in retirement than it is today, a Roth IRA is better. If you expect your tax bracket in retirement to be lower, a Traditional IRA is better.": "إذا كنت تتوقع أن تكون شريحتك الضريبية أعلى عند التقاعد مقارنة باليوم فاختر Roth؛ وإذا كنت تتوقع انخفاض دخلك وشريحتك الضريبية مستقبلاً فاختر التقليدي.",
    "What are the contribution limits for IRAs in 2024?": "ما هي حدود الإيداع السنوية لحسابات IRA؟",
    "For 2024, the annual contribution limit for Traditional and Roth IRAs is $7,000 for individuals under age 50, and $8,000 for individuals age 50 or older.": "الحد الأقصى السنوي هو 7,000$ لمن دون سن الخمسين، و8,000$ لمن هم في سن الخمسين فما فوق.",
    "Are there income limits for contributing to Traditional and Roth IRAs?": "هل توجد شروط أو قيود على مستوى الدخل للاشتراك؟",
    "Roth IRAs have income phase-out ranges that restrict high earners. Anyone with earned income can contribute to a Traditional IRA, but tax deductibility may be limited by income and workplace retirement coverage.": "نعم، يخضع حساب Roth IRA لسقف دخل يمنع أصحاب الرواتب المرتفعة من المساهمة المباشرة، بينما الحساب التقليدي متاح للجميع مع قيود على الخصم الضريبي.",
    "Can I withdraw money from my IRA before age 59½ without penalty?": "هل يمكنني سحب الأموال قبل سن 59.5 دون غرامات؟",
    "Roth IRA original contributions can be withdrawn at any time penalty-free. Withdrawing investment earnings early or withdrawing Traditional IRA funds before 59½ usually incurs income taxes and a 10% penalty.": "يمكن سحب أصل الأموال المودعة في Roth IRA في أي وقت دون غرامة؛ أما سحب الأرباح أو سحب أموال الحساب التقليدي مبكراً فيخضع لضرائب وغرامة بنسبة 10%.",

    // 15. Compound Interest
    "What is compound interest?": "ما هي الفائدة المركبة؟",
    "Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods. It causes your wealth to grow exponentially over time.": "هي الأرباح أو الفوائد التي تُحسب على أصل رأس المال المودع إضافة إلى الأرباح المتراكمة من الفترات السابقة، مما يتيح نمو الثروة بشكل أسي متسارع مع الوقت.",
    "What is the Rule of 72?": "ما هي قاعدة 72 الحسابية؟",
    "The Rule of 72 is a quick mental formula to estimate how many years it takes to double your money. Divide 72 by your annual interest rate (e.g. at 8%, your money doubles in about 9 years).": "معادلة سريعة لتقدير عدد السنوات اللازمة لمضاعفة أموالك: اقسم 72 على معدل العائد السنوي (مثلاً عند عائد 8%، يتضاعف رأس مالك خلال 9 سنوات تقريباً).",
    "How does compounding frequency affect total returns?": "كيف تؤثر دورية التركيب على العائد النهائي؟",
    "The more frequently interest compounds (annually, monthly, daily), the higher your effective annual yield (APY) will be, as interest starts earning interest sooner.": "كلما زادت وتيرة حساب الفائدة المركبة (شهرياً، يومياً)، ارتفع العائد السنوي الفعلي (APY) لأن الأرباح تبدأ في توليد أرباح جديدة في وقت أقصر.",

    // 16. TVM
    "What is the Time Value of Money (TVM)?": "ما هي القيمة الزمنية للنقود (TVM)؟",
    "The Time Value of Money principle states that a dollar today is worth more than a dollar in the future because today's dollar can be invested and earn interest.": "مبدأ مالي جوهري ينص على أن الدينار أو الدولار اليوم له قيمة أعلى من نفس المبلغ في المستقبل، نظراً لإمكانية استثماره وجني عوائد منه في الوقت الحاضر.",
    "What are the core components of TVM calculations?": "ما هي المتغيرات الخمسة الأساسية في معادلات TVM؟",
    "The five core variables are Present Value (PV), Future Value (FV), Interest Rate per Period (Rate), Total Number of Periods (Nper), and Periodic Payment (PMT).": "القيمة الحالية (PV)، والقيمة المستقبلية (FV)، ومعدل العائد لكل فترة (Rate)، وعدد الفترات الإجمالي (Nper)، ومقدار الدفعة الدورية (PMT).",
    "What is the difference between an ordinary annuity and annuity due?": "ما الفرق بين الدفعة العادية والدفعة المستحقة مقدماً؟",
    "In an ordinary annuity, payments occur at the end of each period. In an annuity due, payments occur at the beginning of each period, earning an extra compounding cycle of interest.": "في الدفعة العادية تُدفع المبالغ في نهاية الفترة، أما في الدفعة المستحقة مقدماً فتُدفع في بداية كل فترة مما يمنحها دورة إضافية من الفائدة المركبة والنمو.",

    // 17. ROI
    "How is Return on Investment (ROI) calculated?": "كيف يُحسب العائد على الاستثمار (ROI)؟",
    "ROI is calculated by subtracting the initial cost of the investment from the final value, and dividing that net gain by the initial cost: ROI = (Net Profit / Cost of Investment) × 100%.": "يُحسب بطرح تكلفة الاستثمار الأصلية من القيمة النهائية ثم قسمة صافي الربح على تكلفة الاستثمار الأصلية: العائد = (صافي الربح ÷ تكلفة الاستثمار) × 100%.",
    "What is the difference between simple ROI and annualized ROI?": "ما الفرق بين العائد البسيط والعائد السنوي المركب (CAGR)؟",
    "Simple ROI measures total percentage return regardless of duration. Annualized ROI (CAGR) standardizes the return into a per-year geometric rate, enabling fair comparison between investments held for different lengths of time.": "يقيس العائد البسيط النسبة التراكمية الإجمالية دون اعتبار للزمن، بينما يوحّد العائد السنوي معدل النمو إلى وتيرة هندسية سنوية للمقارنة العادلة بين الاستثمارات.",
    "What is considered a good ROI?": "ما هو المعدل الذي يعتبر عائداً استثمارياً جيداً؟",
    "Historically, the broad stock market (S&P 500) has returned an average of 7% to 10% annually before inflation. Investments with higher expected returns generally involve higher risk of capital loss.": "تاريخياً، حقق سوق الأسهم العام (S&P 500) عائداً سنوياً متوسطاً بين 7% و10% قبل التضخم؛ والفرص التي تعد بعوائد أعلى تتطلب عادةً تحمّل مخاطر أكبر على رأس المال.",

    // 18. Savings Goal
    "How do I calculate how much to save monthly for a goal?": "كيف أحسب المبلغ الشهري اللازم لتحقيق هدفي المالي؟",
    "You divide your target savings amount by the number of months until your deadline, while factoring in the compounding interest earned on your growing balance.": "بقسمة المبلغ المستهدف على عدد الأشهر المتبقية للوصول للموعد، مع الأخذ في الحسبان الفوائد المركبة التي ستجنيها أموالك أثناء رحلة الادخار.",
    "Should I keep savings goal funds in high-yield savings or stocks?": "هل أضع أموال أهدافي في حساب ادخار عالي الفائدة أم في الأسهم؟",
    "For goals under 3 to 5 years (like a car or home down payment), keep funds in safe, liquid instruments like High-Yield Savings Accounts (HYSA) or CDs. For goals 5+ years away, a diversified investment portfolio may be suitable.": "للأهداف التي تقل عن 3 إلى 5 سنوات (شراء سيارة، دفعة منزل)، احتفظ بها في حسابات آمنة وسائلة؛ أما الأهداف التي تزيد عن 5 سنوات فالاستثمار المتنوع هو الأنسب.",
    "How can I stay on track with my savings goals?": "كيف أحافظ على التزامي وانضباطي تجاه أهداف الادخار؟",
    "Automate recurring monthly transfers into a dedicated savings account immediately after your paycheck arrives (the 'pay yourself first' strategy).": "أتمت عملية التحويل التلقائي لحساب ادخار مستقل فور استلام الراتب مباشرة، وهو المبدأ المالي الشهير 'ادفع لنفسك أولاً'.",

    // 19. Stock Return
    "How do I calculate stock returns?": "كيف أحسب العائد الكلي على الأسهم؟",
    "Total stock return equals capital gains (ending price minus purchase price) plus any dividends received, divided by the original purchase cost.": "يساوي الأرباح الرأسمالية (سعر البيع ناقص سعر الشراء) مضافاً إليها كامل التوزيعات النقدية المستلمة، مقسوماً على تكلفة الشراء الأصلية.",
    "What is CAGR in stock returns?": "ما هو معدل النمو السنوي المركب (CAGR) في الأسهم؟",
    "Compound Annual Growth Rate (CAGR) measures the geometric mean annual return of a stock over multiple years, smoothing out annual market fluctuations.": "يقيس متوسط النمو السنوي الهندسي لسهم معين على مدار عدة سنوات، مما يتجاوز تقلبات السوق السنوية ويظهر الأداء الحقيقي المنهجي.",
    "What is the difference between simple return and annualized return?": "ما الفرق بين العائد البسيط والعائد المحسوب سنوياً؟",
    "Simple return measures absolute percentage gain over the entire holding period, while annualized return shows the steady annual rate required to achieve that result.": "يقيس العائد البسيط نسبة المكاسب الإجمالية طوال فترة الاحتفاظ بالسهم، بينما يوضح العائد السنوي النسبة المئوية الثابتة المعادلة لكل سنة.",

    // 20. CAPM
    "What is the Capital Asset Pricing Model (CAPM)?": "ما هو نموذج تسعير الأصول الرأسمالية (CAPM)؟",
    "CAPM calculates an asset's expected return based on its risk relative to the overall market, using the formula: Expected Return = Risk-Free Rate + Beta × (Market Return - Risk-Free Rate).": "نموذج لحساب العائد المتوقع للأصل استناداً لمخاطره النظامية: العائد المتوقع = المعدل الخالي من المخاطر + بيتا × (عائد السوق - المعدل الخالي من المخاطر).",
    "What does Asset Beta (β) represent?": "ماذا يمثل معامل بيتا (β) للأصل المالي؟",
    "Beta measures an asset's volatility compared to the broader market. A beta of 1.0 indicates market-level volatility; above 1.0 indicates higher volatility, and below 1.0 indicates lower volatility.": "يقيس تقلب السهم مقارنة بحركة السوق ككل؛ فإذا كان 1.0 فهو يماثل السوق، وأعلى من 1.0 يعني تقلبات ومخاطر أعلى، وأقل من 1.0 يعني تذبذباً أقل وأكثر استقراراً.",
    "What is the Risk-Free Rate?": "ما هو المعدل الخالي من المخاطر؟",
    "The risk-free rate is the theoretical rate of return of an investment with zero risk of default, typically represented by long-term government bond yields (like 10-year US Treasuries).": "هو العائد النظري لاستثمار خالٍ تماماً من احتمالات التخلف عن السداد، ويُمثل عادةً بعوائد السندات الحكومية السيادية لأجل 10 سنوات.",
    "What is the Market Risk Premium?": "ما هي علاوة مخاطر السوق؟",
    "The market risk premium is the additional return investors demand for choosing risky market equities over risk-free government securities.": "هي العائد الإضافي الذي يطالب به المستثمرون كتعويض عن قبول المخاطرة بالاستثمار في سوق الأسهم بدلاً من السندات الحكومية المضمونة.",

    // 21. Dividend
    "What is dividend yield versus yield on cost?": "ما الفرق بين عائد التوزيعات الحالي والعائد على التكلفة (Yield on Cost)؟",
    "Dividend yield is the annual dividend divided by the current stock price. Yield on cost is the annual dividend divided by your original purchase price, which increases as companies raise their dividends over time.": "عائد التوزيعات هو نسبة التوزيع السنوي لسعر السهم الحالي؛ أما العائد على التكلفة فهو نسبة التوزيع السنوي لسعر شرائك الأصلي، ويرتفع كلما زادت الشركة توزيعاتها عبر السنوات.",
    "What is a Dividend Reinvestment Plan (DRIP)?": "ما هي خطة إعادة استثمار التوزيعات (DRIP)؟",
    "A DRIP automatically uses your cash dividend payments to purchase additional shares or fractional shares of the stock, compounding your share count and future payouts without commission fees.": "خطة تستخدم التوزيعات النقدية تلقائياً لشراء أسهم أو أجزاء من أسهم إضافية دون رسوم تداول، مما يضاعف عدد أسهمك وتوزيعاتك المستقبلية بالنمو المركب.",
    "Are dividend payments guaranteed?": "هل توزيعات الأرباح النقدية مضمونة؟",
    "No, company boards can reduce, suspend, or eliminate dividend payouts at any time depending on company profitability and economic conditions.": "كلا، يحق لمجلس إدارة الشركة خفض التوزيعات أو تعليقها أو إلغاؤها في أي وقت بناءً على ربحية الشركة والظروف الاقتصادية.",

    // 22. Inflation
    "What is inflation?": "ما هو التضخم؟",
    "Inflation is the general rise in prices for goods and services over time, resulting in a decline in the purchasing power of money.": "هو الارتفاع المستمر في المستوى العام لأسعار السلع والخدمات بمرور الوقت، مما يؤدي إلى تراجع القوة الشرائية للعملة النقدية.",
    "How does inflation affect my savings?": "كيف يؤثر التضخم سلباً على المدخرات النقدية؟",
    "Cash sitting in zero-interest accounts loses purchasing power each year. If inflation is 3%, $100 today will only buy about $97 worth of goods next year.": "الأموال المركونة دون عائد تخسر قيمتها سنوياً؛ فإذا كان التضخم 3%، فإن 100$ اليوم ستشتري سلعاً بقيمة 97$ فقط في العام المقبل.",
    "How is inflation officially measured?": "كيف يُقاس معدل التضخم رسمياً؟",
    "Inflation is primarily measured using the Consumer Price Index (CPI), which tracks price changes across a standard market basket of consumer goods and services.": "يُقاس أساساً عبر مؤشر أسعار المستهلك (CPI) الذي يرصد التغيرات في أسعار سلة قياسية من السلع والخدمات التي تستهلكها الأسر.",
    "What is the historical average inflation rate?": "ما هو المتوسط التاريخي لمعدل التضخم السنوي؟",
    "In the United States, inflation has historically averaged between 2.5% and 3.2% per year over long multi-decade horizons.": "بلغ متوسط التضخم تاريخياً في الاقتصادات الرئيسية بين 2.5% إلى 3.2% سنوياً على مدى العقود الطويلة الماضية.",
    "How can I protect my money from losing value to inflation?": "كيف أحمي أموالي من فقدان قيمتها بسبب التضخم؟",
    "Investing in assets whose earnings outpace inflation—such as diversified equities, Treasury Inflation-Protected Securities (TIPS), real estate, and inflation-indexed bonds.": "باستثمارها في أصول تتجاوز عوائدها معدل التضخم، مثل الأسهم وصناديق المؤشرات، وسندات الخزانة المحمية من التضخم (TIPS)، والعقارات.",

    // 23. Paycheck
    "What is FICA tax?": "ما هي استقطاعات الضمان الاجتماعي والرعاية الطبية (FICA)؟",
    "FICA is a federal payroll tax that funds Social Security (6.2% on wages up to the wage base limit) and Medicare (1.45% plus an additional 0.9% on high earners).": "هي استقطاعات إلزامية من الراتب لتمويل المعاشات التقاعدية الحكومية والرعاية الصحية، ويتحملها الموظف وصاحب العمل.",
    "What is the difference between pre-tax and post-tax deductions?": "ما الفرق بين الاستقطاعات قبل الضريبة وبعدها؟",
    "Pre-tax deductions (like 401k and health insurance) reduce your taxable gross income before taxes are computed. Post-tax deductions (like Roth contributions or wage garnishments) are taken after taxes.": "الاستقطاعات قبل الضريبة (كالتقاعد والتأمين الصحي) تخصم من الراتب الإجمالي لتخفيض الوعاء الضريبي، أما الاستقطاعات بعد الضريبة فتخصم من صافي الراتب بعد احتساب الضرائب.",
    "What is the difference between gross pay and net pay?": "ما الفرق بين الراتب الإجمالي (Gross) والراتب الصافي (Net)؟",
    "Gross pay is the total amount earned before any taxes or deductions. Net pay (take-home pay) is the actual cash deposited into your bank account after all deductions.": "الراتب الإجمالي هو الأجر المتفق عليه قبل أي خصومات، بينما الراتب الصافي هو المبلغ الفعلي الذي يتم إيداعه في حسابك البنكي بعد استقطاع الضرائب والتأمينات.",
    "How does my W-4 filing status affect my paycheck?": "كيف تؤثر إقرارات الإعالة الضريبية على الراتب الصافي؟",
    "Your W-4 form informs your employer how much federal income tax to withhold each pay period based on your filing status, dependents, and other income.": "تحدد لجهة العمل مقدار الضريبة المستقطعة شهرياً بناءً على حالتك الاجتماعية وعدد المعالين، مما يرفع أو يقلل صافي المبلغ المستلم.",
    "Why do state and local taxes vary so much?": "لماذا تتفاوت الضرائب المحلية والإقليمية بشكل كبير؟",
    "State income tax rates range from 0% (in states like Texas, Florida, and Washington) to over 13% in high-tax states, while some cities also impose local municipal income taxes.": "لأن لكل ولاية أو بلدية صلاحيات مالية مستقلة؛ فبعض المناطق لا تفرض ضريبة دخل محلية إطلاقاً، بينما تفرض مناطق أخرى ضرائب تتجاوز 10%.",

    // 24. Net Worth
    "What is net worth?": "ما هو صافي الثروة (Net Worth)؟",
    "Net worth is the total market value of everything you own (assets) minus everything you owe to creditors (liabilities).": "هو القيمة السوقية الإجمالية لكل ما تملكه من أموال وممتلكات (الأصول) مطروحاً منها كل ما تدين به للغير وللبنوك (الالتزامات والديون).",
    "How often should I calculate my net worth?": "كم مرة ينبغي لي حساب ومراجعة صافي ثروتي؟",
    "Reviewing your net worth quarterly or semi-annually gives you a clear high-level view of your financial health without obsessing over daily market swings.": "مراجعتها كل ربع أو نصف سنة تمنحك رؤية استراتيجية واضحة لصحتك وتقدمك المالي، بعيداً عن القلق من تقلبات الأسواق اليومية العابرة.",
    "What counts as an asset vs. a liability?": "ما الذي يُصنف كأصل وما الذي يُصنف كالتزام؟",
    "Assets include bank balances, investment accounts, home equity, and retirement funds. Liabilities include mortgages, student loans, car loans, and credit card debt.": "الأصول: الحسابات البنكية، والمحافظ الاستثمارية، والعقارات، وصناديق التقاعد. الالتزامات: القروض العقارية، وقروض السيارات، والبطاقات الائتمانية.",
    "Should I include my house and mortgage in my net worth?": "هل يجب أن أدرج بيتي والقرض العقاري في حساب صافي الثروة؟",
    "Yes, you include the current fair market value of the home under assets and the remaining mortgage balance under liabilities. The difference is your home equity.": "نعم، تضع القيمة السوقية التقديرية الحالية للمنزل ضمن الأصول، والرصيد المتبقي للقرض ضمن الالتزامات؛ والفرق بينهما هو حقوق ملكيتك العقارية الصافية.",
    "What does it mean to have a negative net worth?": "ماذا يعني أن يكون صافي ثروتي بالسالب؟",
    "A negative net worth means your total debts exceed your total assets. This is common for young adults and recent graduates with student loans.": "يعني أن إجمالي ديونك يفوق قيمة ممتلكاتك، وهو وضع شائع وطبيعي في بداية الحياة المهنية للمتخرجين أو عند شراء منزل جديد.",

    // 25. Emergency Fund
    "How much emergency fund is recommended?": "ما هو الحجم الموصى به لصندوق الطوارئ؟",
    "Most financial planners recommend saving 3 to 6 months of essential living expenses, or 9 to 12 months for freelancers or single-income households.": "يوصي الخبراء بادخار ما يعادل 3 إلى 6 أشهر من النفقات المعيشية الأساسية، وتزيد إلى 9 إلى 12 شهراً للمستقلين وأصحاب الدخل غير الثابت.",
    "What expenses should be included in an emergency fund budget?": "ما هي المصاريف التي تُدرج في ميزانية صندوق الطوارئ؟",
    "Include only non-negotiable living costs: housing (rent/mortgage), utilities, groceries, basic transportation, minimum debt payments, and healthcare insurance.": "المصاريف الضرورية التي لا يمكن الاستغناء عنها فقط: إيجار أو قسط المسكن، الفواتير، الغذاء الأساسي، التنقل، والحد الأدنى للديون والرعاية الصحية.",
    "Where should I keep my emergency fund?": "أين يجب أن أحتفظ بأموال صندوق الطوارئ؟",
    "In a dedicated High-Yield Savings Account (HYSA) or money market account where it is FDIC-insured, earns interest, and can be accessed immediately without risk.": "في حساب توفير مصرفي عالي العائد أو صندوق سوق النقد؛ بحيث يكون مضموناً وسائلاً وقابلاً للسحب الفوري في أي لحظة دون خسائر.",
    "Should I pay off debt or build an emergency fund first?": "هل أبدأ بسداد الديون أم بتأسيس صندوق الطوارئ؟",
    "Build a starter emergency fund of 1 month of expenses or $1,000 to $2,000 first, then aggressively pay off high-interest consumer debt before expanding to 3-6 months.": "ابدأ بصندوق طوارئ أولي يكفي شهراً واحداً (1,000$ إلى 2,000$) لتجنب الاقتراض عند أي مفاجأة، ثم سدد ديونك عالية الفائدة، وبعدها أكمل الصندوق.",
    "When is it appropriate to use emergency fund savings?": "متى يحق لي السحب من أموال صندوق الطوارئ؟",
    "Use it only for genuine, unexpected emergencies: sudden medical bills, unexpected car repairs, or living expenses following job loss.": "للأزمات الحقيقية والمفاجئة فقط: الفواتير الطبية الطارئة، أو إصلاحات الأعطال الجسيمة، أو تغطية نفقات المعيشة في حال فقدان الوظيفة.",

    // 26. Fee Impact
    "What is an expense ratio?": "ما هي نسبة المصاريف (Expense Ratio)؟",
    "An expense ratio is the annual percentage fee charged by mutual funds and ETFs to cover fund management, administrative expenses, and operating costs.": "هي النسبة المئوية السنوية التي تخصمها صناديق الاستثمار المشتركة وصناديق المؤشرات (ETFs) لتغطية تكاليف الإدارة والتشغيل.",
    "How do fees compound over time?": "كيف تتراكم وتتضاعف الرسوم بمرور الوقت؟",
    "Fees are deducted annually from your total assets, meaning you lose both the fee money and all future compounding returns that money would have earned.": "تُخصم سنوياً من إجمالي رصيدك؛ مما يجعلك تخسر المبلغ المخصوم بالإضافة إلى كامل الأرباح المركبة التي كان سيولدها لك هذا المبلغ على مدى عقود.",
    "What is a good expense ratio for an index fund?": "ما هي نسبة المصاريف الجيدة لصناديق المؤشرات؟",
    "Low-cost index funds and ETFs typically have expense ratios between 0.02% and 0.10%, whereas actively managed mutual funds often charge 0.60% to 1.50% or more.": "تتراوح النسبة الممتازة لصناديق المؤشرات منخفضة التكلفة بين 0.02% إلى 0.10%، مقارنة بالصناديق المدارة نشطاً التي تفرض 0.60% إلى 1.50% أو أكثر.",
    "What other investment fees should I look out for?": "ما هي الرسوم الاستثمارية الأخرى التي يجب الانتباه لها؟",
    "Watch out for advisory fees (AUM fees of 1%), front-end or back-end sales loads, trading commissions, account maintenance fees, and custodial charges.": "رسوم الاستشارة وإدارة الأصول (1% سنوياً)، ورسوم الشراء أو الاسترداد، وعمولات التداول، ورسوم حفظ الحسابات.",
    "How much can a 1% fee difference affect my retirement savings?": "كم يلتهم فرق رسوم بسيط بنسبة 1% من مدخرات تقاعدي؟",
    "A 1% annual fee difference can erode 25% to 30% of your total ending portfolio wealth over a 30-year investment horizon.": "فرق سنوي بنسبة 1% فقط كفيل بأن يلتهم ما بين 25% إلى 30% من إجمالي ثروتك التراكمية عند التقاعد على مدى 30 عاماً!",

    // 27. College Savings
    "What is a 529 plan?": "ما هي خطة 529 للادخار الجامعي؟",
    "A 529 plan is a tax-advantaged savings and investment plan designed to encourage saving for future higher education expenses with tax-free growth and qualified withdrawals.": "خطة استثمارية ذات مزايا ضريبية تهدف لتشجيع الادخار لتكاليف التعليم العالي مستقبلاً، حيث تنمو أرباحها وتُسحب معفية من الضرائب للأغراض التعليمية.",
    "How fast do college costs increase?": "ما مدى سرعة ارتفاع تكاليف الدراسة الجامعية؟",
    "Historically, higher education tuition and fees have increased at an annual rate of 4% to 6%, outpacing general consumer inflation.": "تاريخياً، ترتفع أقساط التعليم العالي بمعدل سنوي يتراوح بين 4% و6%، وهي وتيرة تفوق التضخم العام في الأسعار.",
    "What happens to 529 funds if my child does not go to college?": "ماذا يحدث للأموال إذا اختار ابني عدم الالتحاق بالجامعة؟",
    "You can change the beneficiary to another qualifying family member, use up to $10,000 for student loan repayment, or roll over up to $35,000 into a Roth IRA under SECURE 2.0 rules.": "يمكنك نقل المستفيد لفرد آخر من العائلة، أو سداد حتى 10,000$ من القروض الطلابية، أو تحويل ما يصل لـ 35,000$ لحساب تقاعد Roth IRA بدون ضرائب.",
    "Can I use a 529 plan for trade schools or K-12 tuition?": "هل يمكن استخدامها للمدارس المهنية أو المدارس الخاصة؟",
    "Yes, qualified distributions can cover accredited trade schools, vocational programs, apprenticeships, and up to $10,000 per year for K-12 private school tuition.": "نعم، تغطي المدارس المهنية وبرامج التدريب المهني المعتمدة، وحتى 10,000$ سنوياً للمدارس الابتدائية والثانوية الخاصة.",
    "How does a 529 plan impact financial aid eligibility?": "كيف تؤثر خطة 529 على الحصول على المنح والمساعدات الطلابية؟",
    "Parent-owned 529 plans are assessed as parental assets on the FAFSA at a maximum rate of 5.64%, having minimal negative impact on financial aid eligibility.": "تُحتسب كأصول للوالدين بنسبة لا تتجاوز 5.64%، وبالتالي فإن تأثيرها السلبي على استحقاق المساعدات المالية ضئيل جداً.",

    // 28. Crypto DCA
    "What is Dollar-Cost Averaging (DCA)?": "ما هي استراتيجية متوسط التكلفة بالدولار (DCA)؟",
    "Dollar-Cost Averaging is an investment strategy where you invest a fixed amount of money at regular intervals regardless of the asset's fluctuating market price.": "استراتيجية استثمارية تقوم على ضخ مبلغ مالي ثابت على فترات زمنية منتظمة، بصرف النظر عن سعر الأصل صعوداً أو هبوطاً.",
    "How does DCA apply to high-volatility assets like Crypto?": "لماذا تعتبر خطة DCA مثالية للأصول المتقلبة مثل العملات الرقمية؟",
    "DCA prevents emotional decisions during extreme market peaks and crashes, automatically buying more units when prices are low and fewer when prices are high.": "تمنع القرارات العاطفية وقت الذروة أو الانهيارات، وتقوم بشراء وحدات أكثر عندما تنخفض الأسعار ووحدات أقل عندما ترتفع، مما يخفض متوسط تكلفة الشراء.",
    "Is DCA better than investing a lump sum?": "هل استراتيجية DCA أفضل من الاستثمار بمبلغ إجمالي دفعة واحدة؟",
    "Lump sum investing historically wins in steadily rising markets, but DCA provides superior peace of mind, lower emotional risk, and downside protection in highly volatile markets.": "يتفوق الاستثمار الإجمالي في الأسواق الصاعدة باستمرار، لكن استراتيجية DCA توفر راحة نفسية هائلة وحماية ضد التقلبات العنيفة في الأسواق المضطربة.",
    "What is the best frequency for crypto DCA?": "ما هي دورية الشراء الأنسب لاتباع استراتيجية DCA؟",
    "Weekly or bi-weekly DCA aligned with your pay cycle is ideal for capturing market volatility while keeping trading fees manageable.": "الشراء الأسبوعي أو نصف الشهري بالتزامن مع دورة الراتب هو الأمثل لاقتناص تقلبات الأسعار والحد من رسوم التداول.",
    "Does DCA guarantee profits in cryptocurrency?": "هل تضمن خطة DCA تحقيق أرباح مؤكدة؟",
    "No, DCA does not protect against prolonged declines or failing crypto projects; it only ensures you achieve the weighted average market purchase price.": "كلا، فهي لا تحمي من هبوط المشاريع الفاشلة أو الهبوط المستمر الطويل، بل تضمن فقط تحقيق متوسط سعر الشراء المرجح في السوق.",

    // 29. Tip
    "What is the standard tipping percentage?": "ما هي النسبة المئوية المعتادة للإكرامية (البقشيش)؟",
    "In the United States and Canada, standard restaurant tipping guidelines range from 15% for adequate service, 18% for good service, to 20% or more for exceptional service.": "في مطاعم أمريكا الشمالية تتراوح الإكرامية بين 15% للخدمة المقبولة، و18% للخدمة الجيدة، و20% فأكثر للخدمة الممتازة.",
    "Should tips be calculated before or after sales tax?": "هل تُحسب الإكرامية قبل إضافة ضريبة المبيعات أم بعدها؟",
    "Etiquette traditionally dictates calculating the tip percentage on the pre-tax food and beverage subtotal, though many automated payment terminals calculate tip on the post-tax total.": "تقضي أصول اللباقة التقليدية بحساب النسبة على قيمة الطعام والشراب قبل الضريبة، رغم أن أجهزة الدفع الإلكتروني تحسبها غالباً على الإجمالي بعد الضريبة.",
    "How do you split a bill evenly among friends?": "كيف يتم تقسيم الفاتورة بالتساوي بين الأصدقاء؟",
    "Calculate the total bill including food, beverages, tax, and tip, and divide the total amount equally by the number of paying participants.": "بحساب المجموع الإجمالي شاملاً الطعام والمشروبات والضريبة والإكرامية، ثم قسمة المبلغ الكلي بالتساوي على عدد المشاركين.",

    // 30. Discount
    "How do you calculate a percentage discount?": "كيف أحسب قيمة التخفيض بنسبة مئوية؟",
    "Multiply the original price by the discount percentage divided by 100 to find the savings, and subtract that amount from the original price: Final Price = Original Price × (1 - Discount%).": "اضرب السعر الأصلي في نسبة الخصم مقسومة على 100 لمعرفة المبلغ الموفر، ثم اطرحه من السعر الأصلي: السعر النهائي = السعر الأصلي × (1 - نسبة الخصم).",
    "How do multiple stacked discounts work?": "كيف تعمل الخصومات المتعددة التراكمية؟",
    "Stacked discounts apply sequentially rather than additively. For example, 20% off plus an extra 10% off results in an effective 28% total discount, not 30%.": "تُطبق بالتتابع وليس بالجمع البسيط؛ فمثلاً خصم 20% متبوعاً بخصم إضافي 10% يعطي تخفيضاً فعلياً بنسبة 28%، وليس 30%.",
    "Is sales tax applied before or after store discounts?": "هل تُطبق ضريبة المبيعات قبل الخصم أم بعده؟",
    "In most jurisdictions, sales tax is calculated on the discounted post-sale price, meaning you pay sales tax only on the actual money spent.": "تُحسب الضريبة عادةً على السعر النهائي المخفض، مما يعني أنك تدفع ضريبة فقط على المبلغ الفعلي الذي أنفقته."
  },

  // Hindi (hi)
  hi: {
    // 1. Mortgage
    "How is a mortgage payment calculated?": "होम लोन (गृह ऋण) की मासिक किस्त (EMI) की गणना कैसे की जाती है?",
    "A standard monthly mortgage payment consists of Principal & Interest (P&I), property taxes, homeowners insurance, private mortgage insurance (PMI) if down payment is under 20%, and homeowner association (HOA) fees.": "मानक होम लोन की मासिक किस्त में मूलधन और ब्याज (P&I), संपत्ति कर, गृह बीमा, 20% से कम डाउन पेमेंट होने पर बंधक बीमा (PMI), और सोसाइटी मेंटेनेंस शुल्क शामिल होते हैं।",
    "What is PMI and when do I pay it?": "बंधक बीमा (PMI) क्या है और इसका भुगतान कब करना होता है?",
    "Private Mortgage Insurance (PMI) is a policy that protects the lender if you default. It is typically required on conventional loans if your down payment is less than 20% of the home purchase price.": "यह बैंक की सुरक्षा के लिए एक बीमा पॉलिसी है। यदि आप घर के कुल मूल्य का 20% से कम डाउन पेमेंट करते हैं, तो बैंक आपसे यह बीमा अनिवार्य रूप से लेता है।",
    "What does PITI stand for?": "PITI का क्या अर्थ है?",
    "PITI stands for Principal, Interest, Taxes, and Insurance. These are the four basic components that make up a homeowner's monthly housing payment. Together, they reflect the true cost of owning a home on a month-to-month basis.": "PITI का अर्थ मूलधन (Principal), ब्याज (Interest), कर (Taxes), और बीमा (Insurance) है। ये चारों घटक मिलकर मकान मालिक के मासिक आवास खर्च की वास्तविक लागत को दर्शाते हैं।",
    "Is a 15-year mortgage better than a 30-year mortgage?": "क्या 15 साल का होम लोन 30 साल के होम लोन से बेहतर है?",
    "A 15-year mortgage typically offers a lower interest rate and allows you to pay off your home twice as fast, saving you tens of thousands of dollars in interest. However, a 30-year mortgage has lower monthly payments, which provides greater cash flow flexibility.": "15 साल का लोन कम ब्याज दर पर मिलता है और आपको दोगुना तेजी से कर्जमुक्त करता है जिससे भारी ब्याज बचता है; जबकि 30 साल के लोन में मासिक EMI कम होती है जिससे बजट में लचीलापन मिलता है।",
    "How do extra payments affect my mortgage payoff schedule?": "लोन में अतिरिक्त अंशकालिक भुगतान (प्री-पेमेंट) करने का क्या प्रभाव होता है?",
    "Any extra money you pay towards your mortgage is applied directly to the principal balance. This reduces the remaining loan balance and decreases the amount of interest that accumulates, helping you pay off your mortgage years ahead of schedule.": "अतिरिक्त चुकाया गया पैसा सीधे मूलधन को घटाता है। इससे शेष लोन राशि कम हो जाती है और ब्याज का भार घट जाता है, जिससे आपका लोन वर्षों पहले खत्म हो जाता है।",

    // 2. Loan Calculator
    "How does an amortized loan work?": "समान मासिक किस्त (Amortized Loan) कैसे काम करता है?",
    "With an amortized loan, you make equal periodic payments. Early in the loan term, the majority of each payment goes toward interest. Over time, an increasing portion goes toward paying down the principal balance until the debt is fully paid off.": "इसमें आप नियमित समान किस्तें भरते हैं। शुरुआती सालों में EMI का बड़ा हिस्सा ब्याज चुकाने में जाता है; समय के साथ मूलधन की हिस्सेदारी बढ़ती जाती है और अंततः पूरा कर्ज चुकता हो जाता है।",
    "What is the difference between fixed-rate and variable-rate loans?": "फिक्स्ड रेट और फ्लोटिंग (परिवर्तनशील) रेट लोन में क्या अंतर है?",
    "A fixed-rate loan maintains the exact same interest rate and payment throughout the loan term. A variable-rate loan has an interest rate that adjusts periodically based on benchmark interest rates, which can increase or decrease your payments.": "फिक्स्ड रेट में पूरी अवधि तक ब्याज दर और EMI स्थिर रहती है; फ्लोटिंग रेट में आरबीआई रेपो रेट या बेंचमार्क के आधार पर दरें बदलती रहती हैं, जिससे किस्त घट-बढ़ सकती है।",
    "Can I pay off my loan early without penalty?": "क्या बिना किसी पेनल्टी के लोन को समय से पहले चुकाया जा सकता है?",
    "Most consumer loans and conventional mortgages allow prepayment without penalties, but some lenders include a prepayment penalty clause. Always verify your loan agreement terms before making accelerated principal payments.": "फ्लोटिंग रेट होम लोन पर आरबीआई के नियमों के तहत कोई प्री-पेमेंट पेनल्टी नहीं लगती, लेकिन फिक्स्ड रेट या पर्सनल लोन में फोरक्लोज़र चार्ज लग सकता है।",

    // 3. Debt Payoff
    "What is the Debt Snowball method?": "कर्ज मुक्ति की 'स्नोबॉल' (बर्फ का गोला) विधि क्या है?",
    "The Debt Snowball method involves paying off your smallest debt balances first, regardless of interest rates. It builds psychological momentum and motivation through quick wins.": "ब्याज दर की परवाह किए बिना सबसे पहले सबसे छोटे कर्ज को पूरी तरह चुकाना। यह छोटी-छोटी सफलताओं से मानसिक आत्मविश्वास और कर्ज चुकाने की प्रेरणा देता है।",
    "What is the Debt Avalanche method?": "कर्ज मुक्ति की 'एवलांच' (हिमस्खलन) विधि क्या है?",
    "The Debt Avalanche method involves paying off your highest interest rate debts first. Mathematically, this minimizes the total interest you pay and helps you become debt-free faster.": "सबसे ज्यादा ब्याज दर वाले कर्जों को सबसे पहले चुकाना। गणितीय रूप से यह आपके द्वारा चुकाए जाने वाले कुल ब्याज को सबसे कम करता है और तेजी से कर्जमुक्त बनाता है।",
    "Which method is better: Debt Snowball or Debt Avalanche?": "स्नोबॉल और एवलांच में से कौन सी विधि अधिक बेहतर है?",
    "Mathematically, the Debt Avalanche method is superior because it minimizes the total interest paid. However, studies show that the Debt Snowball method is often more successful in practice because the psychological momentum helps people stick to their plan.": "गणित के अनुसार एवलांच अधिक पैसा बचाता है, लेकिन व्यवहारिक रूप से स्नोबॉल अधिक सफल होती है क्योंकि छोटे कर्जों का खात्मा लोगों को योजना पर टिके रहने का हौसला देता है।",
    "How does the 'extra payment' roll over in these strategies?": "इन रणनीतियों में अतिरिक्त पैसा आगे कैसे बढ़ता है?",
    "You continue paying minimums on all debts and add your extra cash to the target debt. Once that target debt is fully paid off, you roll its entire payment into the next debt on your list.": "आप बाकी सभी कर्जों की न्यूनतम EMI भरते रहते हैं और अतिरिक्त रकम लक्ष्य कर्ज पर लगाते हैं। उसके खत्म होते ही उसकी पूरी किस्त की रकम अगले कर्ज में जोड़ दी जाती है।",
    "Can I do a hybrid of Snowball and Avalanche?": "क्या दोनों विधियों का मिला-जुला हाइब्रिड मॉडल अपनाया जा सकता है?",
    "Yes. Many people pay off one or two small debts first to free up immediate cash flow (Snowball), and then pivot to targeting the remaining debts by highest interest rate (Avalanche).": "हाँ। लोग पहले एक-दो छोटे कर्जों को खत्म करके मासिक बजट में तुरंत राहत पाते हैं (स्नोबॉल), और फिर बाकी बड़े कर्जों को उच्चतम ब्याज दर के क्रम में निपटाते हैं (एवलांच)।",

    // 4. Refinance
    "When should I refinance my loan?": "लोन रीफाइनेंस (बैलेंस ट्रांसफर) कब करना चाहिए?",
    "It generally makes sense to refinance if you can secure a lower interest rate, reduce your monthly payment, or shorten your term, provided your total interest savings exceed the closing costs.": "रीफाइनेंस तभी फायदेमंद होता है जब आपको काफी कम ब्याज दर मिले, किस्त घटे और ब्याज की कुल बचत बैंक बदलने के प्रोसेसिंग व कानूनी खर्चों से अधिक हो।",
    "What closing costs are associated with refinancing?": "रीफाइनेंसिंग में कौन से खर्चे शामिल होते हैं?",
    "Refinancing costs typically include application fees, origination fees, appraisal costs, title search and insurance, credit report fees, and recording fees, ranging from 2% to 6% of the loan amount.": "इसमें नई बैंक की प्रोसेसिंग फीस, प्रॉपर्टी वैल्यूएशन चार्ज, टाइटल वेरिफिकेशन, स्टांप ड्यूटी और एमओडीटी (MODT) शुल्क शामिल होते हैं।",
    "How do I calculate my refinance break-even point?": "रीफाइनेंस की लागत वसूली अवधि (Break-Even Point) कैसे निकालें?",
    "Divide your total refinance closing costs by your monthly payment savings. If closing costs are $3,000 and you save $150 per month, your break-even point is 20 months ($3,000 / $150).": "रीफाइनेंस के कुल खर्च को हर महीने होने वाली बचत से भाग दें। यदि कुल खर्च ₹30,000 है और बचत ₹1,500 प्रति माह है, तो ब्रेक-इवन 20 महीने में होगा।",
    "What is a 'no-closing-cost' refinance?": "शून्य लागत (No-Closing-Cost) रीफाइनेंस क्या है?",
    "A no-closing-cost refinance means the lender either rolls the closing fees into your new total loan balance or charges a slightly higher interest rate to cover them.": "इसका मतलब शुल्क माफ होना नहीं है; बैंक इन खर्चों को नए लोन के मूलधन में जोड़ देता है या थोड़ी अधिक ब्याज दर लगाकर वसूलता है।",
    "Does refinancing lower my monthly payment or total interest?": "क्या रीफाइनेंस से मासिक किस्त घटती है या कुल ब्याज?",
    "It depends on the term. Refinancing to a lower rate with the same or shorter term saves on both. Resetting your term back to 30 years lowers the monthly payment but can increase total lifetime interest.": "यह अवधि पर निर्भर करता है। समान अवधि पर कम दर मिलने से दोनों घटते हैं; लेकिन अवधि दोबारा 30 साल करने से किस्त तो घटती है मगर कुल ब्याज बढ़ सकता है।",

    // 5. Student Loan
    "What is the SAVE plan?": "SAVE छात्र ऋण पुनर्भुगतान योजना क्या है?",
    "The Saving on a Valuable Education (SAVE) plan is an income-driven repayment (IDR) plan that protects discretionary income up to 225% of the poverty line, lowers payments to 5%-10%, and stops unpaid interest from accumulating.": "यह आय-आधारित पुनर्भुगतान योजना है जो गरीबी रेखा के 225% तक की आय को सुरक्षित रखती है, किस्तों को 5%-10% तक सीमित करती है और बिना चुकाए ब्याज को बढ़ने से रोकती है।",
    "How is discretionary income calculated for student loans?": "छात्र ऋण में विवेकाधीन आय (Discretionary Income) की गणना कैसे होती है?",
    "Discretionary income is the difference between your Adjusted Gross Income (AGI) and a percentage of the federal poverty guideline for your family size (150% for PAYE/IBR, 225% for SAVE).": "यह आपकी समायोजित सकल आय (AGI) और आपके परिवार के आकार के अनुसार गरीबी रेखा सुरक्षा सीमा के बीच का अंतर है।",
    "How does student loan forgiveness work under IDR plans?": "आईडीआर योजनाओं में ऋण माफी (Loan Forgiveness) कैसे काम करती है?",
    "If you pay under an IDR plan for 20 or 25 years (or 10 years under SAVE for low initial balances), any remaining student debt is forgiven.": "यदि आप 20 या 25 वर्षों तक (कम कर्ज पर 10 साल) नियमित रूप से आय के अनुसार भुगतान करते हैं, तो शेष पूरा ऋण माफ कर दिया जाता है।",
    "Which IDR plan is best for me?": "मेरे लिए कौन सी पुनर्भुगतान योजना सबसे उपयुक्त है?",
    "For most borrowers, the SAVE plan offers the lowest monthly payment and the best interest subsidy. Borrowers with very high incomes relative to debt may prefer PAYE or IBR due to payment caps.": "अधिकांश छात्रों के लिए SAVE योजना सबसे कम मासिक किस्त देती है; अत्यधिक आय वाले उधारकर्ता अधिकतम सीमा होने के कारण PAYE या IBR चुनते हैं।",
    "Can I switch student loan repayment plans at any time?": "क्या कभी भी रीपेमेंट प्लान बदला जा सकता है?",
    "Yes, you can apply to switch repayment plans for free at studentaid.gov. However, switching plans can sometimes cause unpaid interest to capitalize.": "हाँ, आधिकारिक पोर्टल पर मुफ्त में योजना बदली जा सकती है, लेकिन योजना बदलने से कभी-कभी बकाया ब्याज मूलधन में जुड़ सकता है।",

    // 6. DTI
    "What is the 28/36 rule?": "28/36 अनुपात का वित्तीय नियम क्या है?",
    "The 28/36 rule is a standard mortgage underwriting guideline stating that housing costs should not exceed 28% of gross monthly income, and total debt payments should not exceed 36%.": "यह बैंक ऋण पात्रता नियम है: मासिक आवास खर्च आपकी कुल आय के 28% से अधिक नहीं होना चाहिए, और सभी कर्ज की कुल किस्तें 36% से अधिक नहीं होनी चाहिए।",
    "How does DTI affect my mortgage application?": "ऋण-आय अनुपात (DTI) होम लोन आवेदन को कैसे प्रभावित करता है?",
    "Lenders use DTI to measure your ability to manage monthly payments. Lower DTIs below 36% receive the most favorable mortgage terms and lowest interest rates.": "बैंक इसका उपयोग आपकी किस्त चुकाने की क्षमता जांचने के लिए करते हैं। 36% से कम DTI होने पर आसानी से और सबसे सस्ती ब्याज दरों पर लोन मिलता है।",
    "What is the difference between front-end and back-end DTI?": "फ्रंट-एंड और बैक-एंड DTI में क्या अंतर है?",
    "Front-end DTI only includes housing expenses (mortgage, property tax, insurance, HOA). Back-end DTI includes housing plus all recurring debts like credit cards, auto loans, and student loans.": "फ्रंट-एंड में केवल आवास खर्च (होम लोन, टैक्स, बीमा) शामिल होता है; बैक-एंड में आवास के साथ कार लोन, क्रेडिट कार्ड और पर्सनल लोन की किस्तें भी शामिल होती हैं।",
    "What is the maximum DTI ratio lenders will accept?": "बैंक अधिकतम कितना DTI अनुपात स्वीकार करते हैं?",
    "Conventional mortgages typically prefer back-end DTIs of 36% to 43%. Government-backed loans like FHA and VA may allow DTIs up to 50% with strong compensating factors.": "आमतौर पर बैंक 40% से 50% तक के अनुपात (FOIR / DTI) को सीमा मानते हैं; बहुत अच्छी साख होने पर ही 50% तक की अनुमति दी जाती है।",
    "How can I lower my Debt-to-Income ratio?": "अपना ऋण-आय अनुपात कैसे कम करें?",
    "You can lower your DTI by increasing gross income or paying off smaller debts completely to eliminate their recurring monthly minimum payments.": "अपनी आय बढ़ाकर या छोटे-मोटे पर्सनल लोन व क्रेडिट कार्ड का पूरा भुगतान करके उनकी मासिक किस्तों को समाप्त करके।",

    // 7. APR
    "What is the difference between interest rate and APR?": "ब्याज दर और प्रभावी वार्षिक दर (APR) में क्या अंतर है?",
    "The interest rate is the nominal cost of borrowing the principal balance. The Annual Percentage Rate (APR) reflects the total annual cost of the loan including points, broker fees, and origination charges.": "ब्याज दर केवल मूलधन पर लगने वाला साधारण ब्याज है; APR में ब्याज के अलावा बैंक प्रोसेसिंग फीस, बीमा और अन्य सभी छिपे हुए खर्च शामिल होते हैं।",
    "Why is APR higher than the advertised interest rate?": "विज्ञापन में दी गई ब्याज दर से APR अधिक क्यों होता है?",
    "APR is higher because it amortizes all upfront lender fees, discount points, and closing costs into the effective yearly rate, revealing the true cost of credit.": "क्योंकि APR लोन लेते समय लगने वाले सभी शुरुआती शुल्कों को वार्षिक आधार पर जोड़कर कर्ज की असली कुल लागत दिखाता है।",
    "Is APR useful for comparing different loan offers?": "क्या विभिन्न बैंकों के लोन की तुलना के लिए APR उपयोगी है?",
    "Yes, APR is the best metric for comparing loan offers with different fee structures, provided you plan to keep the loan for its full term.": "हाँ, यदि आप पूरी अवधि तक लोन रखने वाले हैं, तो अलग-अलग शुल्क ढांचे वाले बैंकों की निष्पक्ष तुलना के लिए APR सबसे सटीक पैमाना है।",

    // 8. Rent vs Buy
    "How long do I need to stay in a home for buying to beat renting?": "मकान खरीदना किराये पर रहने से बेहतर साबित होने में कितने साल लगते हैं?",
    "Because upfront closing costs, moving fees, and commissions are substantial, homeowners usually need to stay in a property for 4 to 7 years for buying to financially outperform renting.": "रजिस्ट्री, स्टांप शुल्क और ब्रोकरेज की भारी शुरुआती लागतों के कारण, मकान खरीदने का वित्तीय लाभ किराये से अधिक होने में कम से कम 4 से 7 साल लग जाते हैं।",
    "What hidden costs of homeownership should renters consider?": "किरायेदारों को घर खरीदते समय किन छिपे हुए खर्चों पर ध्यान देना चाहिए?",
    "Homeowners must pay property taxes, homeowners insurance, maintenance and repairs (typically 1-2% of home value annually), HOA dues, and potential capital improvement costs.": "संपत्ति कर, सोसाइटी मेंटेनेंस, बीमा, और हर साल घर के मूल्य का 1-2% मरम्मत व नवीनीकरण पर होने वाला खर्च।",
    "What is the opportunity cost of buying a home?": "मकान खरीदने की अवसर लागत (Opportunity Cost) क्या है?",
    "The money spent on down payment, closing costs, and ongoing property maintenance could otherwise remain invested in liquid assets like index funds that compound over time.": "डाउन पेमेंट और रजिस्ट्री में लगा बड़ा पैसा यदि इंडेक्स फंड या इक्विटी में निवेश रहता, तो समय के साथ भारी चक्रवृद्धि रिटर्न कमा सकता था।",

    // 9. Home Affordability
    "How much income should I spend on a mortgage?": "होम लोन की किस्त पर आय का कितना हिस्सा खर्च करना चाहिए?",
    "Most financial experts recommend spending no more than 25% to 28% of your gross monthly income on housing costs (the front-end DTI guideline).": "वित्तीय सलाहकार कुल मासिक इन-हैंड आय के 25% से 30% से अधिक राशि आवास खर्च व किस्तों पर न लगाने की सलाह देते हैं।",
    "How does down payment size impact affordability?": "डाउन पेमेंट का आकार घर खरीदने के बजट को कैसे प्रभावित करता है?",
    "A larger down payment reduces your loan amount, eliminates Private Mortgage Insurance (PMI) if you put down 20%, and lowers your monthly mortgage payment.": "बड़ा डाउन पेमेंट लोन राशि को कम करता है, अतिरिक्त बीमा से बचाता है और मासिक EMI के बोझ को काफी हल्का कर देता है।",
    "How do interest rates affect purchasing power?": "ब्याज दरों का घर खरीदने की क्षमता पर क्या प्रभाव पड़ता है?",
    "Every 1% increase in mortgage interest rates reduces your home purchasing power by roughly 10% for the same monthly payment budget.": "उसी मासिक किस्त के बजट में, ब्याज दर में 1% की वृद्धि होने से आपके द्वारा खरीदे जा सकने वाले घर का बजट लगभग 10% घट जाता है।",

    // 10. Auto Loan
    "What is the 20/4/10 rule for buying a car?": "कार खरीदने का '20/4/10 नियम' क्या है?",
    "The 20/4/10 rule recommends putting down at least 20%, financing for no longer than 4 years (48 months), and keeping total vehicle expenses under 10% of gross monthly income.": "कम से कम 20% डाउन पेमेंट करें, 4 साल (48 महीने) से अधिक का लोन न लें, और कार के सभी खर्च (ईएमआई, पेट्रोल, बीमा) आय के 10% से कम रखें।",
    "Is a longer auto loan term better?": "क्या 6 या 7 साल का लंबा कार लोन लेना सही है?",
    "Longer terms (like 72 or 84 months) lower your monthly payment, but you pay substantially more total interest and risk becoming 'underwater' (owing more than the vehicle is worth).": "लंबी अवधि से मासिक EMI भले कम दिखे, लेकिन कुल ब्याज बहुत ज्यादा बढ़ जाता है और कार का मूल्य बकाया लोन से कम हो जाने का खतरा रहता है।",
    "How does vehicle depreciation affect my loan?": "कार का मूल्य ह्रास (Depreciation) लोन को कैसे प्रभावित करता है?",
    "New cars depreciate rapidly (often losing 20% in the first year). Without an adequate down payment, you risk owing more on your loan than the car's market value.": "नई कार पहले ही साल में 20% तक मूल्य खो देती है; यदि डाउन पेमेंट कम हो तो बैंक का कर्ज गाड़ी की रीसेल वैल्यू से ज्यादा हो जाता है।",

    // 11. Credit Card Payoff
    "Why does paying only the minimum take so long?": "क्रेडिट कार्ड का केवल न्यूनतम भुगतान (Minimum Due) करने पर कर्ज दशकों तक क्यों चलता है?",
    "Credit card minimum payments are often set around 1% to 2% of the balance plus accrued interest. As the balance slowly drops, the required minimum drops, extending payoff times to decades.": "क्योंकि न्यूनतम राशि में केवल ब्याज और 1-2% मूलधन ही चुकता होता है; जैसे-जैसे बकाया घटता है, न्यूनतम राशि भी घटती जाती है और कर्ज दशकों खिंच जाता है।",
    "How much faster can I pay off credit cards by paying extra?": "अतिरिक्त भुगतान करने से क्रेडिट कार्ड कितनी जल्दी चुकता हो सकता है?",
    "Paying even $50 or $100 above the minimum payment can cut your payoff timeline by several years and save thousands of dollars in compounding interest charges.": "न्यूनतम राशि से केवल ₹1,000 या ₹2,000 अधिक देने पर भी कर्ज का समय कई वर्ष घट जाता है और 36%-42% के भारी ब्याज की बचत होती है।",
    "Should I use a balance transfer card to pay off debt?": "क्या कर्ज चुकाने के लिए बैलेंस ट्रांसफर या पर्सनल लोन लेना चाहिए?",
    "A 0% APR balance transfer credit card can save significant interest if you pay off the full balance during the promotional period (typically 12-21 months) and factor in the 3%-5% transfer fee.": "हाँ, भारी ब्याज वाले क्रेडिट कार्ड बिल को कम ब्याज वाले पर्सनल लोन में बदलकर एकमुश्त चुकाना बेहद बुद्धिमानी भरा कदम है।",

    // 12. Retirement Planner
    "What is the 4% rule in retirement planning?": "सेवानिवृत्ति योजना में '4% का नियम' क्या है?",
    "The 4% rule suggests that withdrawing 4% of your retirement portfolio in the first year, adjusted for inflation annually thereafter, provides a high probability that your nest egg will last at least 30 years.": "इसके अनुसार रिटायरमेंट के पहले साल अपने कुल फंड का 4% निकालें और बाद के सालों में महंगाई के अनुसार बढ़ाएं, तो आपका पैसा कम से कम 30 साल तक कभी खत्म नहीं होगा।",
    "How much money do I need to retire comfortably?": "आरामदायक रिटायरमेंट के लिए कितने फंड की आवश्यकता होती है?",
    "A common benchmark is accumulating 25 times your anticipated annual retirement expenses, or replacing 70% to 80% of your pre-retirement income.": "रिटायरमेंट के बाद के अनुमानित वार्षिक खर्च का 25 गुना फंड जमा करना, या काम करते समय की अंतिम आय का 70% से 80% पेंशन के रूप में सुनिश्चित करना।",
    "How does inflation impact retirement spending?": "महंगाई रिटायरमेंट के खर्चों को कैसे प्रभावित करती है?",
    "Inflation steadily reduces the purchasing power of your savings. At a 3% inflation rate, everyday living expenses double roughly every 24 years, requiring growing investment portfolios.": "महंगाई पैसे की क्रय शक्ति घटा देती है। 6% महंगाई दर पर हर 12 साल में खर्च दोगुना हो जाता है, इसलिए रिटायरमेंट फंड को इक्विटी में बढ़ते रहना चाहिए।",

    // 13. 401(k)
    "What is an employer 401(k) match?": "कंपनी द्वारा दिया जाने वाला पेंशन अंशदान (Employer Match) क्या है?",
    "An employer match is money your employer contributes to your 401(k) account based on your own contributions (e.g. matching 50% of contributions up to 6% of your salary). It is effectively an instant return on your savings.": "जब आप पेंशन फंड (जैसे EPF/NPS) में योगदान करते हैं, तो कंपनी अपनी ओर से भी उतना ही पैसा मिलाती है; यह आपकी बचत पर तुरंत 100% का सीधा फायदा है।",
    "What are the 401(k) contribution limits for 2024?": "पेंशन फंड में सालाना निवेश की सीमा क्या है?",
    "For 2024, the employee contribution limit is $23,000 for those under 50. Individuals aged 50 and older can contribute an additional $7,500 catch-up contribution for a total of $30,500.": "अमेरिका में 401(k) की सीमा $23,000 है; भारत में एनपीएस (NPS) में धारा 80CCD के तहत टैक्स छूट के लिए निवेश की सीमाएं निर्धारित हैं।",
    "What is the difference between Traditional 401(k) and Roth 401(k)?": "पारंपरिक और Roth पेंशन खातों में क्या अंतर है?",
    "Traditional 401(k) contributions are pre-tax and reduce your current taxable income, with withdrawals taxed in retirement. Roth 401(k) contributions are post-tax, but all qualified growth and withdrawals are completely tax-free.": "पारंपरिक खाते में आज टैक्स छूट मिलती है और निकासी के समय टैक्स लगता है; जबकि Roth में आज टैक्स चुकाकर निवेश होता है लेकिन भविष्य की सारी कमाई व निकासी पूरी तरह टैक्स-फ्री होती है।",

    // 14. IRA Comparison
    "What is the key difference between a Roth and Traditional IRA?": "Roth और पारंपरिक व्यक्तिगत पेंशन खाते में मुख्य अंतर क्या है?",
    "Traditional IRA contributions are generally made pre-tax (reducing your current taxable income), but withdrawals in retirement are taxed as ordinary income. Roth IRA contributions are made with post-tax dollars; growth and withdrawals in retirement are completely tax-free.": "पारंपरिक खाता वर्तमान में टैक्स छूट देता है और बुढ़ापे में कर योग्य होता है; Roth खाता बाद में मिलने वाले पूरे मुनाफे और पेंशन को आजीवन टैक्स-फ्री रखता है।",
    "Which IRA plan is better for me?": "मेरे लिए कौन सा पेंशन खाता बेहतर है?",
    "If you expect your tax bracket to be higher in retirement than it is today, a Roth IRA is better. If you expect your tax bracket in retirement to be lower, a Traditional IRA is better.": "यदि आपको लगता है कि भविष्य में आपकी टैक्स स्लैब ऊंची होगी तो Roth बेहतर है; यदि रिटायरमेंट में आय व टैक्स कम रहने की उम्मीद है तो पारंपरिक खाता बेहतर है।",
    "What are the contribution limits for IRAs in 2024?": "सालाना निवेश की अधिकतम सीमा क्या है?",
    "For 2024, the annual contribution limit for Traditional and Roth IRAs is $7,000 for individuals under age 50, and $8,000 for individuals age 50 or older.": "50 वर्ष से कम आयु वालों के लिए $7,000 और 50 या उससे अधिक आयु वालों के लिए $8,000 प्रति वर्ष।",
    "Are there income limits for contributing to Traditional and Roth IRAs?": "क्या खाता खोलने के लिए कोई आय सीमा की पाबंदी है?",
    "Roth IRAs have income phase-out ranges that restrict high earners. Anyone with earned income can contribute to a Traditional IRA, but tax deductibility may be limited by income and workplace retirement coverage.": "Roth खाते में उच्च आय वर्ग के लोगों पर प्रतिबंध होता है; पारंपरिक खाते में कोई भी कमाऊ व्यक्ति जमा कर सकता है।",
    "Can I withdraw money from my IRA before age 59½ without penalty?": "क्या 59.5 साल की उम्र से पहले बिना जुर्माने के पैसा निकाला जा सकता है?",
    "Roth IRA original contributions can be withdrawn at any time penalty-free. Withdrawing investment earnings early or withdrawing Traditional IRA funds before 59½ usually incurs income taxes and a 10% penalty.": "Roth में अपनी मूल जमा राशि कभी भी निकाली जा सकती है, लेकिन मुनाफे को समय से पहले निकालने पर टैक्स और 10% की पेनल्टी लगती है।",

    // 15. Compound Interest
    "What is compound interest?": "चक्रवृद्धि ब्याज क्या है?",
    "Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods. It causes your wealth to grow exponentially over time.": "यह मूलधन के साथ-साथ पहले कमाए गए ब्याज पर भी मिलने वाला ब्याज है। समय के साथ यह आपके पैसे को आश्चर्यजनक गति से गुणात्मक रूप से बढ़ाता है।",
    "What is the Rule of 72?": "72 का नियम क्या है?",
    "The Rule of 72 is a quick mental formula to estimate how many years it takes to double your money. Divide 72 by your annual interest rate (e.g. at 8%, your money doubles in about 9 years).": "पैसा कितने साल में दोगुना होगा, यह जानने का आसान फॉर्मूला: 72 को वार्षिक ब्याज दर से भाग दें (जैसे 8% पर पैसा लगभग 9 साल में दोगुना होगा)।",
    "How does compounding frequency affect total returns?": "ब्याज जुड़ने की आवृत्ति (सालाना, मासिक) का क्या प्रभाव होता है?",
    "The more frequently interest compounds (annually, monthly, daily), the higher your effective annual yield (APY) will be, as interest starts earning interest sooner.": "ब्याज जितनी जल्दी-जल्दी मूलधन में जुड़ेगा (सालाना के बजाय तिमाही या मासिक), उतनी ही तेजी से नया ब्याज बनेगा और कुल रिटर्न उतना ही अधिक होगा।",

    // 16. TVM
    "What is the Time Value of Money (TVM)?": "पैसे का समय मूल्य (Time Value of Money) क्या है?",
    "The Time Value of Money principle states that a dollar today is worth more than a dollar in the future because today's dollar can be invested and earn interest.": "आज के एक रुपये का मूल्य भविष्य में मिलने वाले एक रुपये से अधिक है, क्योंकि आज के पैसे को निवेश करके तुरंत नया ब्याज और लाभ कमाया जा सकता है।",
    "What are the core components of TVM calculations?": "समय मूल्य गणना के पांच प्रमुख घटक क्या हैं?",
    "The five core variables are Present Value (PV), Future Value (FV), Interest Rate per Period (Rate), Total Number of Periods (Nper), and Periodic Payment (PMT).": "वर्तमान मूल्य (PV), भविष्य का मूल्य (FV), ब्याज दर (Rate), कुल अवधियां (Nper), और नियमित किस्त (PMT)।",
    "What is the difference between an ordinary annuity and annuity due?": "सामान्य एन्युइटी और अग्रिम एन्युइटी में क्या अंतर है?",
    "In an ordinary annuity, payments occur at the end of each period. In an annuity due, payments occur at the beginning of each period, earning an extra compounding cycle of interest.": "सामान्य में भुगतान अवधि के अंत में होता है; अग्रिम में भुगतान अवधि की शुरुआत में होता है जिससे उसे एक अतिरिक्त चक्र का ब्याज मिलता है।",

    // 17. ROI
    "How is Return on Investment (ROI) calculated?": "निवेश पर प्रतिफल (ROI) की गणना कैसे की जाती है?",
    "ROI is calculated by subtracting the initial cost of the investment from the final value, and dividing that net gain by the initial cost: ROI = (Net Profit / Cost of Investment) × 100%.": "अंतिम मूल्य में से शुरुआती लागत घटाकर शुद्ध लाभ निकालें, फिर उसे लागत से भाग देकर 100 से गुणा करें: ROI = (शुद्ध लाभ / लागत) × 100%।",
    "What is the difference between simple ROI and annualized ROI?": "साधारण ROI और वार्षिक रिटर्न (CAGR) में क्या अंतर है?",
    "Simple ROI measures total percentage return regardless of duration. Annualized ROI (CAGR) standardizes the return into a per-year geometric rate, enabling fair comparison between investments held for different lengths of time.": "साधारण ROI बिना समय का ध्यान रखे कुल लाभ बताता है; जबकि वार्षिक रिटर्न (CAGR) विभिन्न अवधियों के निवेशों की निष्पक्ष तुलना के लिए सालाना औसत दर बताता है।",
    "What is considered a good ROI?": "कितना रिटर्न अच्छा माना जाता है?",
    "Historically, the broad stock market (S&P 500) has returned an average of 7% to 10% annually before inflation. Investments with higher expected returns generally involve higher risk of capital loss.": "शेयर बाजार का ऐतिहासिक औसत रिटर्न महंगाई से पहले 11% से 14% के बीच रहा है; इससे अत्यधिक रिटर्न की उम्मीद में पूंजी डूबने का जोखिम रहता है।",

    // 18. Savings Goal
    "How do I calculate how much to save monthly for a goal?": "किसी लक्ष्य के लिए मासिक बचत की गणना कैसे करें?",
    "You divide your target savings amount by the number of months until your deadline, while factoring in the compounding interest earned on your growing balance.": "अपने लक्ष्य की कुल राशि को शेष महीनों से भाग दें और उसमें जमा राशि पर मिलने वाले संभावित चक्रवृद्धि ब्याज को घटाकर आवश्यक बचत तय करें।",
    "Should I keep savings goal funds in high-yield savings or stocks?": "लक्ष्य का पैसा फिक्स्ड डिपॉजिट में रखें या शेयरों में?",
    "For goals under 3 to 5 years (like a car or home down payment), keep funds in safe, liquid instruments like High-Yield Savings Accounts (HYSA) or CDs. For goals 5+ years away, a diversified investment portfolio may be suitable.": "3 से 5 साल के लक्ष्यों (कार, डाउन पेमेंट) के लिए सुरक्षित एफडी या डेट फंड चुनें; 5 साल से अधिक के लक्ष्यों के लिए इक्विटी म्यूचुअल फंड बेहतर हैं।",
    "How can I stay on track with my savings goals?": "बचत के लक्ष्यों को बिना भटके कैसे हासिल करें?",
    "Automate recurring monthly transfers into a dedicated savings account immediately after your paycheck arrives (the 'pay yourself first' strategy).": "वेतन आते ही सबसे पहले ऑटोमैटिक ट्रांसफर (SIP) के जरिए बचत खाते में पैसा भेजें, जिसे 'पहले खुद को भुगतान करें' का सिद्धांत कहते हैं।",

    // 19. Stock Return
    "How do I calculate stock returns?": "शेयर के कुल रिटर्न की गणना कैसे की जाती है?",
    "Total stock return equals capital gains (ending price minus purchase price) plus any dividends received, divided by the original purchase cost.": "पूंजीगत लाभ (बिक्री मूल्य - खरीद मूल्य) में प्राप्त सभी डिविडेंड को जोड़ें और कुल खरीद लागत से भाग दें।",
    "What is CAGR in stock returns?": "शेयर बाजार में सीएजीआर (CAGR) का क्या अर्थ है?",
    "Compound Annual Growth Rate (CAGR) measures the geometric mean annual return of a stock over multiple years, smoothing out annual market fluctuations.": "चक्रवृद्धि वार्षिक वृद्धि दर, जो कई वर्षों के दौरान बाजार के उतार-चढ़ाव को सामान्य करके सालाना वास्तविक विकास दर दर्शाती है।",
    "What is the difference between simple return and annualized return?": "साधारण रिटर्न और सालाना रिटर्न में क्या अंतर है?",
    "Simple return measures absolute percentage gain over the entire holding period, while annualized return shows the steady annual rate required to achieve that result.": "साधारण रिटर्न पूरे समय की कुल बढ़त दिखाता है, जबकि सालाना रिटर्न हर वर्ष की समान औसत चक्रवृद्धि गति को प्रदर्शित करता है।",

    // 20. CAPM
    "What is the Capital Asset Pricing Model (CAPM)?": "कैपिटल एसेट प्राइसिंग मॉडल (CAPM) क्या है?",
    "CAPM calculates an asset's expected return based on its risk relative to the overall market, using the formula: Expected Return = Risk-Free Rate + Beta × (Market Return - Risk-Free Rate).": "यह बाजार जोखिम के आधार पर शेयर के अपेक्षित रिटर्न की गणना करता है: अपेक्षित रिटर्न = जोखिम-मुक्त दर + बीटा × (बाजार रिटर्न - जोखिम-मुक्त दर)।",
    "What does Asset Beta (β) represent?": "शेयर का बीटा (β) क्या दर्शाता है?",
    "Beta measures an asset's volatility compared to the broader market. A beta of 1.0 indicates market-level volatility; above 1.0 indicates higher volatility, and below 1.0 indicates lower volatility.": "यह बाजार के मुकाबले शेयर के उतार-चढ़ाव को मापता है। बीटा 1.0 बाजार जैसा है, 1.0 से ज्यादा अधिक जोखिम/रिटर्न दिखाता है, और कम स्थिर माना जाता है।",
    "What is the Risk-Free Rate?": "जोखिम-मुक्त ब्याज दर क्या है?",
    "The risk-free rate is the theoretical rate of return of an investment with zero risk of default, typically represented by long-term government bond yields (like 10-year US Treasuries).": "शून्य जोखिम वाले निवेश का रिटर्न, जिसे आमतौर पर 10-वर्षीय सरकारी बॉन्ड यील्ड द्वारा मापा जाता है।",
    "What is the Market Risk Premium?": "मार्केट रिस्क प्रीमियम क्या है?",
    "The market risk premium is the additional return investors demand for choosing risky market equities over risk-free government securities.": "सरकारी बॉन्ड के बजाय जोखिम भरे शेयर बाजार में पैसा लगाने के बदले निवेशकों द्वारा मांगा जाने वाला अतिरिक्त लाभ।",

    // 21. Dividend
    "What is dividend yield versus yield on cost?": "डिविडेंड यील्ड और खरीद लागत पर यील्ड (Yield on Cost) में क्या अंतर है?",
    "Dividend yield is the annual dividend divided by the current stock price. Yield on cost is the annual dividend divided by your original purchase price, which increases as companies raise their dividends over time.": "डिविडेंड यील्ड वर्तमान शेयर मूल्य के अनुपात में लाभांश है; जबकि Yield on Cost आपकी मूल खरीद कीमत के अनुपात में है जो लाभांश बढ़ने पर बढ़ती जाती है।",
    "What is a Dividend Reinvestment Plan (DRIP)?": "डिविडेंड पुनर्निवेश योजना (DRIP) क्या है?",
    "A DRIP automatically uses your cash dividend payments to purchase additional shares or fractional shares of the stock, compounding your share count and future payouts without commission fees.": "मिले हुए लाभांश के पैसों से बिना किसी दलाली शुल्क के स्वतः उसी कंपनी के और शेयर खरीद लेना, जिससे शेयरों की संख्या बढ़ती है।",
    "Are dividend payments guaranteed?": "क्या कंपनियों द्वारा डिविडेंड देना निश्चित व अनिवार्य होता है?",
    "No, company boards can reduce, suspend, or eliminate dividend payouts at any time depending on company profitability and economic conditions.": "नहीं, कंपनी का निदेशक मंडल मुनाफे और आर्थिक स्थिति को देखते हुए कभी भी लाभांश कम या बंद कर सकता है।",

    // 22. Inflation
    "What is inflation?": "मुद्रास्फीति (महंगाई) क्या है?",
    "Inflation is the general rise in prices for goods and services over time, resulting in a decline in the purchasing power of money.": "समय के साथ वस्तुओं और सेवाओं की कीमतों में होने वाली आम वृद्धि, जिसके कारण पैसे की वास्तविक खरीदने की क्षमता घट जाती है।",
    "How does inflation affect my savings?": "महंगाई बचत को कैसे नुकसान पहुँचाती है?",
    "Cash sitting in zero-interest accounts loses purchasing power each year. If inflation is 3%, $100 today will only buy about $97 worth of goods next year.": "बिना ब्याज के रखे पैसे का मूल्य हर साल घटता है; यदि महंगाई 6% है तो आज के ₹100 अगले साल केवल ₹94 का सामान खरीद पाएंगे।",
    "How is inflation officially measured?": "महंगाई की आधिकारिक गणना कैसे की जाती है?",
    "Inflation is primarily measured using the Consumer Price Index (CPI), which tracks price changes across a standard market basket of consumer goods and services.": "उपभोक्ता मूल्य सूचकांक (CPI) द्वारा, जो आम जनता द्वारा खरीदे जाने वाले जरूरी सामानों और सेवाओं की कीमतों पर नजर रखता है।",
    "What is the historical average inflation rate?": "ऐतिहासिक रूप से औसत महंगाई दर कितनी रही है?",
    "In the United States, inflation has historically averaged between 2.5% and 3.2% per year over long multi-decade horizons.": "भारत जैसी विकासशील अर्थव्यवस्थाओं में दीर्घकालिक औसत खुदरा महंगाई दर 5% से 7% प्रति वर्ष के आसपास रही है।",
    "How can I protect my money from losing value to inflation?": "अपने पैसे को महंगाई की मार से कैसे बचाएं?",
    "Investing in assets whose earnings outpace inflation—such as diversified equities, Treasury Inflation-Protected Securities (TIPS), real estate, and inflation-indexed bonds.": "ऐसे साधनों में निवेश करके जो महंगाई से ज्यादा रिटर्न दें, जैसे इक्विटी म्यूचुअल फंड, रियल एस्टेट और गोल्ड।",

    // 23. Paycheck
    "What is FICA tax?": "वेतन में से कटने वाले वैधानिक अंशदान (PF/ESI) क्या हैं?",
    "FICA is a federal payroll tax that funds Social Security (6.2% on wages up to the wage base limit) and Medicare (1.45% plus an additional 0.9% on high earners).": "कर्मचारी भविष्य निधि (EPF) और स्वास्थ्य सुरक्षा जैसे अनिवार्य सरकारी फंड, जो रिटायरमेंट और सुरक्षा के लिए वेतन से कटते हैं।",
    "What is the difference between pre-tax and post-tax deductions?": "टैक्स-पूर्व और टैक्स-पश्चात कटौतियों में क्या अंतर है?",
    "Pre-tax deductions (like 401k and health insurance) reduce your taxable gross income before taxes are computed. Post-tax deductions (like Roth contributions or wage garnishments) are taken after taxes.": "टैक्स-पूर्व कटौतियां (जैसे पीएफ, एनपीएस) कर योग्य आय को घटाती हैं; जबकि टैक्स-पश्चात कटौतियां टैक्स कटने के बाद के वेतन से ली जाती हैं।",
    "What is the difference between gross pay and net pay?": "सीटीसी / सकल वेतन और इन-हैंड वेतन में क्या अंतर है?",
    "Gross pay is the total amount earned before any taxes or deductions. Net pay (take-home pay) is the actual cash deposited into your bank account after all deductions.": "सकल वेतन बिना किसी टैक्स या पीएफ कटौती के कुल वेतन है; इन-हैंड वेतन वह वास्तविक नकदी है जो सब कटौतियों के बाद आपके बैंक खाते में आती है।",
    "How does my W-4 filing status affect my paycheck?": "टैक्स घोषणाएं और छूट इन-हैंड वेतन को कैसे प्रभावित करती हैं?",
    "Your W-4 form informs your employer how much federal income tax to withhold each pay period based on your filing status, dependents, and other income.": "आपके द्वारा दी गई टैक्स सेविंग घोषणा (80C आदि) के आधार पर कंपनी हर महीने टीडीएस (TDS) काटती है जिससे इन-हैंड वेतन तय होता है।",
    "Why do state and local taxes vary so much?": "विभिन्न राज्यों में टैक्स में अंतर क्यों होता है?",
    "State income tax rates range from 0% (in states like Texas, Florida, and Washington) to over 13% in high-tax states, while some cities also impose local municipal income taxes.": "अलग-अलग राज्यों और नगर निगमों के अपने स्थानीय नियम, प्रोफेशनल टैक्स और विकास उपकर होते हैं।",

    // 24. Net Worth
    "What is net worth?": "कुल संपत्ति या नेट वर्थ (Net Worth) क्या है?",
    "Net worth is the total market value of everything you own (assets) minus everything you owe to creditors (liabilities).": "आपके पास मौजूद सभी संपत्तियों (मकान, नकदी, शेयर) के कुल मूल्य में से आपके सभी कर्जों (लोन, कार्ड बकाया) को घटाने पर बची शुद्ध संपत्ति।",
    "How often should I calculate my net worth?": "नेट वर्थ की गणना कितनी बार करनी चाहिए?",
    "Reviewing your net worth quarterly or semi-annually gives you a clear high-level view of your financial health without obsessing over daily market swings.": "हर तीन या छह महीने में एक बार अपनी नेट वर्थ का आकलन करना आपकी वित्तीय प्रगति पर नजर रखने का सबसे स्वस्थ तरीका है।",
    "What counts as an asset vs. a liability?": "संपत्ति (Asset) और देनदारी (Liability) में क्या आता है?",
    "Assets include bank balances, investment accounts, home equity, and retirement funds. Liabilities include mortgages, student loans, car loans, and credit card debt.": "संपत्ति में बैंक बैलेंस, म्यूचुअल फंड, घर और सोना आता है; देनदारी में होम लोन, पर्सनल लोन और क्रेडिट कार्ड का बिल शामिल है।",
    "Should I include my house and mortgage in my net worth?": "क्या अपने घर और होम लोन को नेट वर्थ में शामिल करना चाहिए?",
    "Yes, you include the current fair market value of the home under assets and the remaining mortgage balance under liabilities. The difference is your home equity.": "हाँ, संपत्ति में घर की वर्तमान बाजार कीमत लिखें और देनदारी में बचा हुआ होम लोन; दोनों का अंतर आपकी शुद्ध संपत्ति में जुड़ेगा।",
    "What does it mean to have a negative net worth?": "नेगेटिव नेट वर्थ होने का क्या मतलब है?",
    "A negative net worth means your total debts exceed your total assets. This is common for young adults and recent graduates with student loans.": "इसका मतलब है कि आपके ऊपर कर्ज आपकी कुल संपत्ति से अधिक है, जो करियर की शुरुआत में शिक्षा ऋण वालों के लिए बहुत आम बात है।",

    // 25. Emergency Fund
    "How much emergency fund is recommended?": "इमरजेंसी फंड (आपातकालीन कोष) में कितना पैसा होना चाहिए?",
    "Most financial planners recommend saving 3 to 6 months of essential living expenses, or 9 to 12 months for freelancers or single-income households.": "नौकरीपेशा लोगों के लिए कम से कम 3 से 6 महीने का जरूरी खर्च, और व्यापारियों या फ्रीलांसरों के लिए 9 से 12 महीने का खर्च सुरक्षित रखना चाहिए।",
    "What expenses should be included in an emergency fund budget?": "आपातकालीन बजट में कौन से खर्चे गिने जाते हैं?",
    "Include only non-negotiable living costs: housing (rent/mortgage), utilities, groceries, basic transportation, minimum debt payments, and healthcare insurance.": "केवल अति-अनिवार्य खर्च: मकान का किराया/EMI, बिजली-पानी का बिल, राशन, दवाइयां, बच्चों की स्कूल फीस और अनिवार्य किस्तें।",
    "Where should I keep my emergency fund?": "इमरजेंसी फंड का पैसा कहाँ रखना चाहिए?",
    "In a dedicated High-Yield Savings Account (HYSA) or money market account where it is FDIC-insured, earns interest, and can be accessed immediately without risk.": "बचत खाते, लिक्विड म्यूचुअल फंड या ऐसी स्वीप-इन एफडी में जहाँ पूंजी सुरक्षित रहे और जरूरत पड़ने पर चौबीसों घंटे तुरंत निकाली जा सके।",
    "Should I pay off debt or build an emergency fund first?": "पहले कर्ज चुकाएं या इमरजेंसी फंड बनाएं?",
    "Build a starter emergency fund of 1 month of expenses or $1,000 to $2,000 first, then aggressively pay off high-interest consumer debt before expanding to 3-6 months.": "पहले 1 महीने के खर्च (₹25,000 - ₹50,000) का बुनियादी फंड बनाएं ताकि नया कर्ज न लेना पड़े, फिर महंगे कर्ज चुकाएं और उसके बाद फंड को 6 महीने का करें।",
    "When is it appropriate to use emergency fund savings?": "इमरजेंसी फंड का इस्तेमाल कब करना उचित है?",
    "Use it only for genuine, unexpected emergencies: sudden medical bills, unexpected car repairs, or living expenses following job loss.": "केवल अप्रत्याशित और गंभीर संकटों में: जैसे नौकरी छूटना, अचानक अस्पताल का खर्च या जरूरी वाहन की मरम्मत।",

    // 26. Fee Impact
    "What is an expense ratio?": "एक्सपेंस रेशियो (Expense Ratio) क्या है?",
    "An expense ratio is the annual percentage fee charged by mutual funds and ETFs to cover fund management, administrative expenses, and operating costs.": "म्यूचुअल फंड और ईटीएफ द्वारा अपने प्रबंधन, संचालन और विनियामक खर्चों को पूरा करने के लिए फंड से काटा जाने वाला वार्षिक प्रतिशत शुल्क।",
    "How do fees compound over time?": "समय के साथ फंड की फीस कैसे चक्रवृद्धि नुकसान पहुंचाती है?",
    "Fees are deducted annually from your total assets, meaning you lose both the fee money and all future compounding returns that money would have earned.": "फीस हर साल आपके कुल फंड से काटी जाती है, यानी आप न सिर्फ फीस की रकम खोते हैं बल्कि उस पैसे पर भविष्य में मिलने वाला सारा चक्रवृद्धि मुनाफा भी खो देते हैं।",
    "What is a good expense ratio for an index fund?": "इंडेक्स फंड के लिए कितना एक्सपेंस रेशियो सही माना जाता है?",
    "Low-cost index funds and ETFs typically have expense ratios between 0.02% and 0.10%, whereas actively managed mutual funds often charge 0.60% to 1.50% or more.": "सस्ते इंडेक्स फंड का शुल्क 0.10% से 0.25% के बीच होता है, जबकि एक्टिव म्यूचुअल फंड 1.0% से 2.0% तक चार्ज करते हैं।",
    "What other investment fees should I look out for?": "निवेश में किन अन्य शुल्कों से सावधान रहना चाहिए?",
    "Watch out for advisory fees (AUM fees of 1%), front-end or back-end sales loads, trading commissions, account maintenance fees, and custodial charges.": "एग्जिट लोड (समय से पहले निकासी शुल्क), ब्रोकरेज कमीशन, डीमैट एएमसी और पोर्टफोलियो मैनेजमेंट फीस।",
    "How much can a 1% fee difference affect my retirement savings?": "सिर्फ 1% फीस का अंतर रिटायरमेंट फंड पर कितना असर डाल सकता है?",
    "A 1% annual fee difference can erode 25% to 30% of your total ending portfolio wealth over a 30-year investment horizon.": "30 साल के निवेश में सालाना केवल 1% अतिरिक्त फीस आपके अंतिम कुल फंड का 25% से 30% हिस्सा चट कर सकती है!",

    // 27. College Savings
    "What is a 529 plan?": "हायर एजुकेशन बचत योजना (529 Plan) क्या है?",
    "A 529 plan is a tax-advantaged savings and investment plan designed to encourage saving for future higher education expenses with tax-free growth and qualified withdrawals.": "बच्चों की कॉलेज की पढ़ाई के लिए शुरू की गई विशेष कर-मुक्त निवेश योजना, जिसकी कमाई और शिक्षा हेतु निकासी पर कोई टैक्स नहीं लगता।",
    "How fast do college costs increase?": "कॉलेज और उच्च शिक्षा के खर्च किस रफ्तार से बढ़ रहे हैं?",
    "Historically, higher education tuition and fees have increased at an annual rate of 4% to 6%, outpacing general consumer inflation.": "उच्च शिक्षा की फीस ऐतिहासिक रूप से 8% से 10% की वार्षिक दर से बढ़ रही है, जो सामान्य महंगाई से कहीं अधिक तेज है।",
    "What happens to 529 funds if my child does not go to college?": "यदि बच्चा कॉलेज न जाए तो जमा किए गए पैसे का क्या होता है?",
    "You can change the beneficiary to another qualifying family member, use up to $10,000 for student loan repayment, or roll over up to $35,000 into a Roth IRA under SECURE 2.0 rules.": "खाता दूसरे बच्चे के नाम ट्रांसफर किया जा सकता है, शिक्षा लोन चुकाने में उपयोग हो सकता है, या रिटायरमेंट फंड में स्थानांतरित किया जा सकता है।",
    "Can I use a 529 plan for trade schools or K-12 tuition?": "क्या इसे वोकेशनल या स्कूल की फीस के लिए इस्तेमाल किया जा सकता है?",
    "Yes, qualified distributions can cover accredited trade schools, vocational programs, apprenticeships, and up to $10,000 per year for K-12 private school tuition.": "हाँ, मान्यता प्राप्त वोकेशनल कोर्स और निजी स्कूलों की सालाना फीस भरने के लिए भी इसकी अनुमति होती है।",
    "How does a 529 plan impact financial aid eligibility?": "क्या इससे छात्रवृत्ति या वित्तीय सहायता मिलने में अड़चन आती है?",
    "Parent-owned 529 plans are assessed as parental assets on the FAFSA at a maximum rate of 5.64%, having minimal negative impact on financial aid eligibility.": "यह माता-पिता की संपत्ति मानी जाती है और इसका सरकारी सहायता की पात्रता पर बहुत नगण्य (5% से कम) असर पड़ता है।",

    // 28. Crypto DCA
    "What is Dollar-Cost Averaging (DCA)?": "डॉलर-कॉस्ट एवरेजिंग (DCA या SIP) क्या है?",
    "Dollar-Cost Averaging is an investment strategy where you invest a fixed amount of money at regular intervals regardless of the asset's fluctuating market price.": "बाजार के उतार-चढ़ाव की चिंता किए बिना हर हफ्ते या महीने एक निश्चित तय रकम निवेश करने की अनुशासित रणनीति।",
    "How does DCA apply to high-volatility assets like Crypto?": "क्रिप्टो जैसी अस्थिर संपत्तियों में DCA क्यों उपयोगी है?",
    "DCA prevents emotional decisions during extreme market peaks and crashes, automatically buying more units when prices are low and fewer when prices are high.": "यह भावुकता में आकर ऊंचे भाव पर खरीदने या गिरावट में डरकर बेचने से बचाता है और मंदी में अपने आप ज्यादा सिक्के खरीदकर औसत खरीद भाव कम कर देता है।",
    "Is DCA better than investing a lump sum?": "क्या एकमुश्त निवेश के मुकाबले किस्तों में निवेश (DCA/SIP) बेहतर है?",
    "Lump sum investing historically wins in steadily rising markets, but DCA provides superior peace of mind, lower emotional risk, and downside protection in highly volatile markets.": "लगातार तेजी में एकमुश्त निवेश जीतता है, लेकिन भारी उथल-पुथल वाले बाजारों में DCA मानसिक शांति और जोखिम से अचूक सुरक्षा देता है।",
    "What is the best frequency for crypto DCA?": "क्रिप्टो में निवेश की सबसे सही आवृत्ति क्या है?",
    "Weekly or bi-weekly DCA aligned with your pay cycle is ideal for capturing market volatility while keeping trading fees manageable.": "सैलरी मिलने के अनुसार साप्ताहिक या पाक्षिक (15 दिन में) निवेश करना फीस को सीमित रखते हुए सर्वोत्तम औसत मूल्य दिलाता है।",
    "Does DCA guarantee profits in cryptocurrency?": "क्या DCA करने से क्रिप्टो में पक्का मुनाफा मिलने की गारंटी होती है?",
    "No, DCA does not protect against prolonged declines or failing crypto projects; it only ensures you achieve the weighted average market purchase price.": "नहीं, यदि कोई प्रोजेक्ट ही बंद हो जाए तो DCA नुकसान से नहीं बचा सकता; यह केवल आपके खरीद भाव का उचित औसत निकालता है।",

    // 29. Tip
    "What is the standard tipping percentage?": "टिप देने का सामान्य प्रतिशत क्या है?",
    "In the United States and Canada, standard restaurant tipping guidelines range from 15% for adequate service, 18% for good service, to 20% or more for exceptional service.": "अमेरिका में 15% से 20% का चलन है; भारत में सामान्यतः 5% से 10% स्वेच्छा से दिया जाता है (यदि बिल में सर्विस चार्ज न जुड़ा हो)।",
    "Should tips be calculated before or after sales tax?": "टिप टैक्स लगने से पहले की रकम पर देनी चाहिए या टैक्स के बाद?",
    "Etiquette traditionally dictates calculating the tip percentage on the pre-tax food and beverage subtotal, though many automated payment terminals calculate tip on the post-tax total.": "शिष्टाचार के अनुसार टिप भोजन और पेय के टैक्स-पूर्व मूल्य पर दी जानी चाहिए, हालांकि मशीनें अक्सर टैक्स सहित कुल बिल पर टिप निकालती हैं।",
    "How do you split a bill evenly among friends?": "दोस्तों के बीच बिल को बराबर-बराबर कैसे बांटें?",
    "Calculate the total bill including food, beverages, tax, and tip, and divide the total amount equally by the number of paying participants.": "खाने-पीने, टैक्स और टिप का पूरा कुल जोड़ें और उसे भुगतान करने वाले दोस्तों की संख्या से भाग दे दें।",

    // 30. Discount
    "How do you calculate a percentage discount?": "प्रतिशत छूट (डिस्काउंट) की गणना कैसे करें?",
    "Multiply the original price by the discount percentage divided by 100 to find the savings, and subtract that amount from the original price: Final Price = Original Price × (1 - Discount%).": "मूल कीमत को छूट प्रतिशत से गुणा करके 100 से भाग दें और उसे मूल कीमत में से घटाएं: अंतिम कीमत = मूल कीमत × (1 - छूट%).",
    "How do multiple stacked discounts work?": "क्रमिक छूट (जैसे 20% + अतिरिक्त 10% छूट) कैसे काम करती है?",
    "Stacked discounts apply sequentially rather than additively. For example, 20% off plus an extra 10% off results in an effective 28% total discount, not 30%.": "ये जुड़ती नहीं हैं बल्कि क्रमिक रूप से लगती हैं; जैसे 20% के बाद 10% की छूट कुल 30% नहीं बल्कि वास्तव में 28% की छूट बनती है।",
    "Is sales tax applied before or after store discounts?": "टैक्स (जीएसटी) छूट से पहले लगता है या छूट के बाद?",
    "In most jurisdictions, sales tax is calculated on the discounted post-sale price, meaning you pay sales tax only on the actual money spent.": "टैक्स हमेशा छूट के बाद बची हुई वास्तविक विक्रय कीमत पर लगता है, यानी आप केवल खर्च की गई रकम पर ही टैक्स देते हैं।"
  },

  // Russian (ru)
  ru: {
    // 1. Mortgage
    "How is a mortgage payment calculated?": "Как рассчитывается ежемесячный платеж по ипотеке?",
    "A standard monthly mortgage payment consists of Principal & Interest (P&I), property taxes, homeowners insurance, private mortgage insurance (PMI) if down payment is under 20%, and homeowner association (HOA) fees.": "Ежемесячный платеж состоит из основного долга и процентов (аннуитет), налога на имущество, страхования залога и жизни, а также коммунальных расходов и взносов за содержание жилья.",
    "What is PMI and when do I pay it?": "Что такое ипотечное страхование (PMI) и когда оно требуется?",
    "Private Mortgage Insurance (PMI) is a policy that protects the lender if you default. It is typically required on conventional loans if your down payment is less than 20% of the home purchase price.": "Это страхование рисков кредитора на случай дефолта заемщика. Банки требуют его оформления, если первоначальный взнос составляет менее 20% от стоимости недвижимости.",
    "What does PITI stand for?": "Что означает аббревиатура PITI?",
    "PITI stands for Principal, Interest, Taxes, and Insurance. These are the four basic components that make up a homeowner's monthly housing payment. Together, they reflect the true cost of owning a home on a month-to-month basis.": "Она расшифровывается как Основной долг (Principal), Проценты (Interest), Налоги (Taxes) и Страхование (Insurance) — четыре ключевые составляющие реальной ежемесячной стоимости жилья.",
    "Is a 15-year mortgage better than a 30-year mortgage?": "Что выгоднее: ипотека на 15 лет или на 30 лет?",
    "A 15-year mortgage typically offers a lower interest rate and allows you to pay off your home twice as fast, saving you tens of thousands of dollars in interest. However, a 30-year mortgage has lower monthly payments, which provides greater cash flow flexibility.": "Кредит на 15 лет сокращает переплату по процентам в разы и быстрее освобождает от долга, но ипотека на 30 лет обеспечивает меньший ежемесячный платеж и гибкость семейного бюджета.",
    "How do extra payments affect my mortgage payoff schedule?": "Как частичное досрочное погашение влияет на график ипотеки?",
    "Any extra money you pay towards your mortgage is applied directly to the principal balance. This reduces the remaining loan balance and decreases the amount of interest that accumulates, helping you pay off your mortgage years ahead of schedule.": "Все дополнительные суммы идут напрямую на уменьшение тела долга. Это резко снижает начисляемые в будущем проценты и позволяет закрыть ипотеку на годы раньше срока.",

    // 2. Loan Calculator
    "How does an amortized loan work?": "Как устроен аннуитетный кредит?",
    "With an amortized loan, you make equal periodic payments. Early in the loan term, the majority of each payment goes toward interest. Over time, an increasing portion goes toward paying down the principal balance until the debt is fully paid off.": "Заемщик вносит равные платежи каждый месяц. В первой половине срока большая часть денег идет на погашение начисленных процентов, а ближе к концу — на выплату основного долга.",
    "What is the difference between fixed-rate and variable-rate loans?": "В чем разница между фиксированной и плавающей ставкой?",
    "A fixed-rate loan maintains the exact same interest rate and payment throughout the loan term. A variable-rate loan has an interest rate that adjusts periodically based on benchmark interest rates, which can increase or decrease your payments.": "При фиксированной ставке процент и платеж неизменны весь срок; при плавающей ставке процент привязан к ключевой ставке ЦБ и может как снижаться, так и расти.",
    "Can I pay off my loan early without penalty?": "Можно ли погасить кредит досрочно без комиссий и штрафов?",
    "Most consumer loans and conventional mortgages allow prepayment without penalties, but some lenders include a prepayment penalty clause. Always verify your loan agreement terms before making accelerated principal payments.": "По закону заемщик имеет право на бесплатное досрочное погашение любого кредита без штрафов, предварительно уведомив банк в установленный договором срок.",

    // 3. Debt Payoff
    "What is the Debt Snowball method?": "Что такое метод «Снежного кома» при погашении долгов?",
    "The Debt Snowball method involves paying off your smallest debt balances first, regardless of interest rates. It builds psychological momentum and motivation through quick wins.": "Метод предполагает первоочередное закрытие кредитов с наименьшим остатком долга независимо от ставки. Быстрые победы создают мощный психологический стимул.",
    "What is the Debt Avalanche method?": "Что такое метод «Лавины» при выплате долгов?",
    "The Debt Avalanche method involves paying off your highest interest rate debts first. Mathematically, this minimizes the total interest you pay and helps you become debt-free faster.": "Метод ориентирован на первоочередное погашение кредитов с максимальной процентной ставкой. Математически это минимизирует общую переплату и ускоряет выход из долгов.",
    "Which method is better: Debt Snowball or Debt Avalanche?": "Какой метод лучше: «Снежный ком» или «Лавина»?",
    "Mathematically, the Debt Avalanche method is superior because it minimizes the total interest paid. However, studies show that the Debt Snowball method is often more successful in practice because the psychological momentum helps people stick to their plan.": "С точки зрения математики выгоднее «Лавина», но на практике люди чаще доводят план до конца с помощью «Снежного кома» благодаря быстрой эмоциональной отдаче.",
    "How does the 'extra payment' roll over in these strategies?": "Как высвободившиеся деньги переходят к следующему долгу?",
    "You continue paying minimums on all debts and add your extra cash to the target debt. Once that target debt is fully paid off, you roll its entire payment into the next debt on your list.": "Вы платите минимальные платежи по всем займам, направляя излишек на одну цель; после ее закрытия вся сумма платежа переносится на следующий кредит в списке.",
    "Can I do a hybrid of Snowball and Avalanche?": "Можно ли совмещать оба метода?",
    "Yes. Many people pay off one or two small debts first to free up immediate cash flow (Snowball), and then pivot to targeting the remaining debts by highest interest rate (Avalanche).": "Да. Разумно сначала закрыть один-два мелких кредита для высвобождения ежемесячного бюджета (Снежный ком), а затем направить силы на самые дорогие долги (Лавина).",

    // 4. Refinance
    "When should I refinance my loan?": "Когда выгодно делать рефинансирование кредита?",
    "It generally makes sense to refinance if you can secure a lower interest rate, reduce your monthly payment, or shorten your term, provided your total interest savings exceed the closing costs.": "Когда новая ставка ниже действующей хотя бы на 1,5–2 процентных пункта, а чистая экономия на процентах перекрывает все сопутствующие затраты на оформление.",
    "What closing costs are associated with refinancing?": "Какие расходы возникают при рефинансировании?",
    "Refinancing costs typically include application fees, origination fees, appraisal costs, title search and insurance, credit report fees, and recording fees, ranging from 2% to 6% of the loan amount.": "Оценка недвижимости, госпошлины за регистрацию залога, новые страховые полисы, а также возможные комиссии банка за выдачу.",
    "How do I calculate my refinance break-even point?": "Как рассчитать точку окупаемости рефинансирования?",
    "Divide your total refinance closing costs by your monthly payment savings. If closing costs are $3,000 and you save $150 per month, your break-even point is 20 months ($3,000 / $150).": "Разделите сумму всех расходов на ежемесячную экономию. При затратах в 30 000 ₽ и экономии 3 000 ₽ в месяц точка безубыточности наступит через 10 месяцев.",
    "What is a 'no-closing-cost' refinance?": "Что значит рефинансирование «без расходов»?",
    "A no-closing-cost refinance means the lender either rolls the closing fees into your new total loan balance or charges a slightly higher interest rate to cover them.": "Это не означает бесплатность: расходы либо включаются в тело нового займа, либо закладываются банком в чуть более высокую процентную ставку.",
    "Does refinancing lower my monthly payment or total interest?": "Что снижает рефинансирование: платеж или общую переплату?",
    "It depends on the term. Refinancing to a lower rate with the same or shorter term saves on both. Resetting your term back to 30 years lowers the monthly payment but can increase total lifetime interest.": "При сохранении срока кредита уменьшается и то, и другое; при растягивании срока платеж снизится, но общая переплата за весь период может даже возрасти.",

    // 5. Student Loan
    "What is the SAVE plan?": "Что такое программа SAVE для выплаты образовательных кредитов?",
    "The Saving on a Valuable Education (SAVE) plan is an income-driven repayment (IDR) plan that protects discretionary income up to 225% of the poverty line, lowers payments to 5%-10%, and stops unpaid interest from accumulating.": "Американская программа, которая привязывает платежи к доходу, защищает 225% прожиточного минимума и замораживает начисление неоплаченных процентов.",
    "How is discretionary income calculated for student loans?": "Как рассчитывается свободный располагаемый доход?",
    "Discretionary income is the difference between your Adjusted Gross Income (AGI) and a percentage of the federal poverty guideline for your family size (150% for PAYE/IBR, 225% for SAVE).": "Это разница между скорректированным валовым доходом и установленным государством нормативом прожиточного минимума на семью.",
    "How does student loan forgiveness work under IDR plans?": "Как работает списание студенческого долга?",
    "If you pay under an IDR plan for 20 or 25 years (or 10 years under SAVE for low initial balances), any remaining student debt is forgiven.": "При регулярных выплатах по доходу в течение 20–25 лет (для небольших сумм — от 10 лет) остаток долга полностью аннулируется государством.",
    "Which IDR plan is best for me?": "Какая программа выплат лучше всего подойдет мне?",
    "For most borrowers, the SAVE plan offers the lowest monthly payment and the best interest subsidy. Borrowers with very high incomes relative to debt may prefer PAYE or IBR due to payment caps.": "Для большинства минимальный платеж обеспечивает SAVE; лица с высоким доходом иногда выбирают PAYE или IBR из-за наличия верхнего лимита платежа.",
    "Can I switch student loan repayment plans at any time?": "Можно ли сменить программу выплат в любой момент?",
    "Yes, you can apply to switch repayment plans for free at studentaid.gov. However, switching plans can sometimes cause unpaid interest to capitalize.": "Да, переход осуществляется бесплатно, однако в ряде случаев накопившиеся проценты могут быть капитализированы в основной долг.",

    // 6. DTI
    "What is the 28/36 rule?": "Что представляет собой банковское правило 28/36?",
    "The 28/36 rule is a standard mortgage underwriting guideline stating that housing costs should not exceed 28% of gross monthly income, and total debt payments should not exceed 36%.": "Норматив андеррайтинга: расходы на жилье не должны превышать 28% от валового дохода, а совокупные кредитные обязательства семьи — 36%.",
    "How does DTI affect my mortgage application?": "Как показатель долговой нагрузки (ПДН / DTI) влияет на одобрение ипотеки?",
    "Lenders use DTI to measure your ability to manage monthly payments. Lower DTIs below 36% receive the most favorable mortgage terms and lowest interest rates.": "Банки оценивают платежеспособность: заемщики с ПДН ниже 36–40% получают одобрение на лучших условиях и по минимальным ставкам.",
    "What is the difference between front-end and back-end DTI?": "В чем разница между жилищным и общим показателем нагрузки?",
    "Front-end DTI only includes housing expenses (mortgage, property tax, insurance, HOA). Back-end DTI includes housing plus all recurring debts like credit cards, auto loans, and student loans.": "Первый учитывает только расходы на жилье (платеж по ипотеке, налог, страховку); второй суммирует абсолютно все кредиты (авто, кредитки, рассрочки).",
    "What is the maximum DTI ratio lenders will accept?": "Каков предельный уровень долговой нагрузки, допускаемый банками?",
    "Conventional mortgages typically prefer back-end DTIs of 36% to 43%. Government-backed loans like FHA and VA may allow DTIs up to 50% with strong compensating factors.": "Обычно безопасным лимитом считается 40–50%; при ПДН выше 50% регуляторы требуют от банков повышенного резервирования, что ведет к отказам.",
    "How can I lower my Debt-to-Income ratio?": "Как снизить свой показатель долговой нагрузки?",
    "You can lower your DTI by increasing gross income or paying off smaller debts completely to eliminate their recurring monthly minimum payments.": "Подтвердить дополнительный доход или закрыть мелкие потребительские кредиты и кредитные карты, чтобы исключить их платежи из расчета.",

    // 7. APR
    "What is the difference between interest rate and APR?": "В чем разница между номинальной ставкой и полной стоимостью кредита (ПСК / APR)?",
    "The interest rate is the nominal cost of borrowing the principal balance. The Annual Percentage Rate (APR) reflects the total annual cost of the loan including points, broker fees, and origination charges.": "Номинальная ставка — это чистый процент на остаток долга; ПСК (APR) отражает реальную стоимость с учетом страховок, комиссий и дополнительных платежей.",
    "Why is APR higher than the advertised interest rate?": "Почему ПСК всегда выше рекламной процентной ставки?",
    "APR is higher because it amortizes all upfront lender fees, discount points, and closing costs into the effective yearly rate, revealing the true cost of credit.": "Потому что ПСК распределяет все сопутствующие траты, страховки и сборы на весь период и показывает честную годовую переплату.",
    "Is APR useful for comparing different loan offers?": "Полезна ли ПСК для сравнения предложений разных банков?",
    "Yes, APR is the best metric for comparing loan offers with different fee structures, provided you plan to keep the loan for its full term.": "Да, это главный законодательно закрепленный ориентир, позволяющий сопоставить предложения с разными скрытыми комиссиями.",

    // 8. Rent vs Buy
    "How long do I need to stay in a home for buying to beat renting?": "Сколько лет нужно прожить в квартире, чтобы покупка обогнала аренду?",
    "Because upfront closing costs, moving fees, and commissions are substantial, homeowners usually need to stay in a property for 4 to 7 years for buying to financially outperform renting.": "Из-за высоких стартовых трат (риелторы, ремонт, госпошлины) покупка жилья становится выгоднее аренды только при проживании от 4 до 7 лет.",
    "What hidden costs of homeownership should renters consider?": "О каких скрытых тратах на свое жилье забывают арендаторы?",
    "Homeowners must pay property taxes, homeowners insurance, maintenance and repairs (typically 1-2% of home value annually), HOA dues, and potential capital improvement costs.": "Налог на имущество, взносы на капремонт, страховку и текущий ремонт (обычно от 1% до 2% стоимости квартиры ежегодно).",
    "What is the opportunity cost of buying a home?": "В чем заключается упущенная выгода покупки недвижимости?",
    "The money spent on down payment, closing costs, and ongoing property maintenance could otherwise remain invested in liquid assets like index funds that compound over time.": "Первоначальный взнос и расходы на сделку могли бы работать на фондовом рынке в индексных фондах, принося сложный процент.",

    // 9. Home Affordability
    "How much income should I spend on a mortgage?": "Какую долю дохода безопасно тратить на ипотеку?",
    "Most financial experts recommend spending no more than 25% to 28% of your gross monthly income on housing costs (the front-end DTI guideline).": "Финансовые консультанты рекомендуют, чтобы ежемесячный ипотечный платеж не превышал 25–30% от чистого дохода семьи.",
    "How does down payment size impact affordability?": "Как размер первого взноса влияет на доступность жилья?",
    "A larger down payment reduces your loan amount, eliminates Private Mortgage Insurance (PMI) if you put down 20%, and lowers your monthly mortgage payment.": "Большой взнос уменьшает сумму долга, избавляет от лишних страховок и позволяет получить у банка минимальную процентную ставку.",
    "How do interest rates affect purchasing power?": "Как изменение процентных ставок влияет на покупательскую способность?",
    "Every 1% increase in mortgage interest rates reduces your home purchasing power by roughly 10% for the same monthly payment budget.": "Каждый 1% роста ипотечной ставки снижает максимальную доступную вам стоимость недвижимости примерно на 10% при прежнем платеже.",

    // 10. Auto Loan
    "What is the 20/4/10 rule for buying a car?": "Что такое правило «20/4/10» при покупке автомобиля?",
    "The 20/4/10 rule recommends putting down at least 20%, financing for no longer than 4 years (48 months), and keeping total vehicle expenses under 10% of gross monthly income.": "Внести не менее 20% аванса, брать автокредит максимум на 4 года (48 месяцев) и не тратить на содержание машины более 10% дохода.",
    "Is a longer auto loan term better?": "Выгоден ли автокредит на 5–7 лет?",
    "Longer terms (like 72 or 84 months) lower your monthly payment, but you pay substantially more total interest and risk becoming 'underwater' (owing more than the vehicle is worth).": "Длинный срок уменьшает платеж, но многократно увеличивает переплату по процентам; кроме того, остаток долга может оказаться выше рыночной цены машины.",
    "How does vehicle depreciation affect my loan?": "Как удешевление автомобиля влияет на кредит?",
    "New cars depreciate rapidly (often losing 20% in the first year). Without an adequate down payment, you risk owing more on your loan than the car's market value.": "Новое авто теряет до 20% цены в первый год; без солидного первого взноса вы рискуете оказаться в ситуации, когда долг превышает цену авто.",

    // 11. Credit Card Payoff
    "Why does paying only the minimum take so long?": "Почему оплата только минимального платежа по кредитке затягивается на десятилетия?",
    "Credit card minimum payments are often set around 1% to 2% of the balance plus accrued interest. As the balance slowly drops, the required minimum drops, extending payoff times to decades.": "Минимальный платеж покрывает набежавшие проценты и всего 1–2% тела долга; уменьшаясь вместе с долгом, он растягивает выплату на десятки лет.",
    "How much faster can I pay off credit cards by paying extra?": "Насколько ускоряет закрытие карты доплата сверх минимума?",
    "Paying even $50 or $100 above the minimum payment can cut your payoff timeline by several years and save thousands of dollars in compounding interest charges.": "Внесение даже 3 000–5 000 ₽ сверх обязательного минимума сокращает срок погашения на годы и экономит огромные суммы на процентах.",
    "Should I use a balance transfer card to pay off debt?": "Стоит ли рефинансировать кредитные карты потребительским кредитом?",
    "A 0% APR balance transfer credit card can save significant interest if you pay off the full balance during the promotional period (typically 12-21 months) and factor in the 3%-5% transfer fee.": "Да, переход с дорогих кредиток со ставками 30–40% на потребительский кредит с фиксированной ставкой — эффективный способ выбраться из долгов.",

    // 12. Retirement Planner
    "What is the 4% rule in retirement planning?": "Что гласит «правило 4%» для жизни на пенсии?",
    "The 4% rule suggests that withdrawing 4% of your retirement portfolio in the first year, adjusted for inflation annually thereafter, provides a high probability that your nest egg will last at least 30 years.": "Если в первый год снять 4% капитала, а затем ежегодно индексировать сумму на инфляцию, вероятность того, что денег хватит на 30+ лет, близка к 100%.",
    "How much money do I need to retire comfortably?": "Сколько денег нужно накопить для комфортной жизни на пенсии?",
    "A common benchmark is accumulating 25 times your anticipated annual retirement expenses, or replacing 70% to 80% of your pre-retirement income.": "Классический ориентир — капитал в размере 25 годовых расходов либо обеспечение пассивного дохода на уровне 70–80% от текущего заработка.",
    "How does inflation impact retirement spending?": "Как инфляция угрожает пенсионным накоплениям?",
    "Inflation steadily reduces the purchasing power of your savings. At a 3% inflation rate, everyday living expenses double roughly every 24 years, requiring growing investment portfolios.": "Она обесценивает сбережения: при инфляции 4% расходы удваиваются каждые 18 лет, поэтому капитал обязан приносить инвестиционный доход.",

    // 13. 401(k)
    "What is an employer 401(k) match?": "Что такое софинансирование пенсии работодателем?",
    "An employer match is money your employer contributes to your 401(k) account based on your own contributions (e.g. matching 50% of contributions up to 6% of your salary). It is effectively an instant return on your savings.": "Это доплаты компании на ваш пенсионный счет пропорционально вашим взносам, что дает мгновенную гарантированную доходность на каждый вложенный рубль.",
    "What are the 401(k) contribution limits for 2024?": "Каковы лимиты взносов в пенсионные программы?",
    "For 2024, the employee contribution limit is $23,000 for those under 50. Individuals aged 50 and older can contribute an additional $7,500 catch-up contribution for a total of $30,500.": "В США лимит составляет 23 000 $; в России в рамках программы долгосрочных сбережений (ПДС) государство софинансирует до 36 000 ₽ в год.",
    "What is the difference between Traditional 401(k) and Roth 401(k)?": "Чем отличается классический пенсионный счет от счета типа Roth?",
    "Traditional 401(k) contributions are pre-tax and reduce your current taxable income, with withdrawals taxed in retirement. Roth 401(k) contributions are post-tax, but all qualified growth and withdrawals are completely tax-free.": "Классический дает налоговый вычет при взносе, но облагается налогом при выплате; счет Roth пополняется с чистого дохода, но все доходы в старости освобождены от налогов.",

    // 14. IRA Comparison
    "What is the key difference between a Roth and Traditional IRA?": "В чем ключевое различие индивидуальных пенсионных счетов?",
    "Traditional IRA contributions are generally made pre-tax (reducing your current taxable income), but withdrawals in retirement are taxed as ordinary income. Roth IRA contributions are made with post-tax dollars; growth and withdrawals in retirement are completely tax-free.": "Традиционный уменьшает налог на доходы сегодня и облагается в будущем; счет Roth освобождает от налога весь будущий инвестиционный доход.",
    "Which IRA plan is better for me?": "Какой тип пенсионного счета мне подходит?",
    "If you expect your tax bracket to be higher in retirement than it is today, a Roth IRA is better. If you expect your tax bracket in retirement to be lower, a Traditional IRA is better.": "Если ваша налоговая ставка на пенсии будет выше текущей — выбирайте Roth; если на пенсии доход и налоги будут ниже — традиционный вариант.",
    "What are the contribution limits for IRAs in 2024?": "Каков максимальный ежегодный взнос?",
    "For 2024, the annual contribution limit for Traditional and Roth IRAs is $7,000 for individuals under age 50, and $8,000 for individuals age 50 or older.": "Лимит составляет 7 000 $ в год (8 000 $ для лиц в возрасте от 50 лет).",
    "Are there income limits for contributing to Traditional and Roth IRAs?": "Есть ли ограничения по уровню дохода для участия?",
    "Roth IRAs have income phase-out ranges that restrict high earners. Anyone with earned income can contribute to a Traditional IRA, but tax deductibility may be limited by income and workplace retirement coverage.": "Счета Roth недоступны гражданам с очень высоким доходом; в традиционные счета вносить средства может любой работающий.",
    "Can I withdraw money from my IRA before age 59½ without penalty?": "Можно ли забрать деньги до возраста 59,5 лет без штрафа?",
    "Roth IRA original contributions can be withdrawn at any time penalty-free. Withdrawing investment earnings early or withdrawing Traditional IRA funds before 59½ usually incurs income taxes and a 10% penalty.": "Тело взносов со счета Roth можно снимать без штрафов; досрочный вывод прибыли или средств с традиционного счета облагается налогом и штрафом 10%.",

    // 15. Compound Interest
    "What is compound interest?": "Что такое сложный процент?",
    "Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods. It causes your wealth to grow exponentially over time.": "Это начисление процентов не только на исходную сумму, но и на ранее начисленные проценты, обеспечивающее лавинообразный экспоненциальный рост капитала.",
    "What is the Rule of 72?": "Что такое «Правило 72»?",
    "The Rule of 72 is a quick mental formula to estimate how many years it takes to double your money. Divide 72 by your annual interest rate (e.g. at 8%, your money doubles in about 9 years).": "Простая формула для оценки удвоения капитала: разделите 72 на годовую доходность (при ставке 8% капитал удвоится примерно за 9 лет).",
    "How does compounding frequency affect total returns?": "Как частота капитализации влияет на доходность?",
    "The more frequently interest compounds (annually, monthly, daily), the higher your effective annual yield (APY) will be, as interest starts earning interest sooner.": "Чем чаще начисляются проценты (ежемесячно, ежедневно), тем выше эффективная доходность, так как прибыль быстрее начинает приносить новый доход.",

    // 16. TVM
    "What is the Time Value of Money (TVM)?": "Что такое временная стоимость денег (TVM)?",
    "The Time Value of Money principle states that a dollar today is worth more than a dollar in the future because today's dollar can be invested and earn interest.": "Фундаментальный принцип: рубль сегодня стоит дороже, чем рубль завтра, так как имеющиеся сейчас деньги можно инвестировать и получить доход.",
    "What are the core components of TVM calculations?": "Каковы 5 ключевых переменных финансовых расчетов?",
    "The five core variables are Present Value (PV), Future Value (FV), Interest Rate per Period (Rate), Total Number of Periods (Nper), and Periodic Payment (PMT).": "Текущая стоимость (PV), будущая стоимость (FV), процентная ставка за период (Rate), число периодов (Nper) и периодический платеж (PMT).",
    "What is the difference between an ordinary annuity and annuity due?": "В чем разница между платежами постнумерандо и пренумерандо?",
    "In an ordinary annuity, payments occur at the end of each period. In an annuity due, payments occur at the beginning of each period, earning an extra compounding cycle of interest.": "Обычные платежи производятся в конце периода; авансовые (пренумерандо) — в начале, что дает дополнительный цикл капитализации процентов.",

    // 17. ROI
    "How is Return on Investment (ROI) calculated?": "Как рассчитывается окупаемость инвестиций (ROI)?",
    "ROI is calculated by subtracting the initial cost of the investment from the final value, and dividing that net gain by the initial cost: ROI = (Net Profit / Cost of Investment) × 100%.": "Чистая прибыль (конечная стоимость минус затраты) делится на объем инвестиций и умножается на 100%: ROI = (Прибыль / Затраты) × 100%.",
    "What is the difference between simple ROI and annualized ROI?": "В чем отличие простого ROI от среднегодового (CAGR)?",
    "Simple ROI measures total percentage return regardless of duration. Annualized ROI (CAGR) standardizes the return into a per-year geometric rate, enabling fair comparison between investments held for different lengths of time.": "Простой ROI показывает общую доходность за весь срок; среднегодовой (CAGR) пересчитывает результат в средний темп прироста в год для честного сравнения.",
    "What is considered a good ROI?": "Какой показатель ROI считается хорошим?",
    "Historically, the broad stock market (S&P 500) has returned an average of 7% to 10% annually before inflation. Investments with higher expected returns generally involve higher risk of capital loss.": "Широкий рынок акций исторически приносит 8–12% годовых в твердой валюте; доходность существенно выше этого уровня всегда несет риск потери капитала.",

    // 18. Savings Goal
    "How do I calculate how much to save monthly for a goal?": "Как рассчитать ежемесячную сумму для накопления на цель?",
    "You divide your target savings amount by the number of months until your deadline, while factoring in the compounding interest earned on your growing balance.": "Разделите целевую сумму на количество месяцев до дедлайна, сделав поправку на проценты, которые будут набегать на постепенно растущий счет.",
    "Should I keep savings goal funds in high-yield savings or stocks?": "Где держать деньги на цель: на накопительном счете или в акциях?",
    "For goals under 3 to 5 years (like a car or home down payment), keep funds in safe, liquid instruments like High-Yield Savings Accounts (HYSA) or CDs. For goals 5+ years away, a diversified investment portfolio may be suitable.": "На горизонте до 3–5 лет (автомобиль, взнос за квартиру) — на вкладах и накопительных счетах; на срок от 5 лет подойдет диверсифицированный портфель акций и облигаций.",
    "How can I stay on track with my savings goals?": "Как не сойти с дистанции и гарантированно накопить?",
    "Automate recurring monthly transfers into a dedicated savings account immediately after your paycheck arrives (the 'pay yourself first' strategy).": "Настройте автоперевод на отдельный счет в день зарплаты, следуя проверенному правилу «сначала заплати себе».",

    // 19. Stock Return
    "How do I calculate stock returns?": "Как рассчитать совокупную доходность по акциям?",
    "Total stock return equals capital gains (ending price minus purchase price) plus any dividends received, divided by the original purchase cost.": "Прирост стоимости (цена продажи минус цена покупки) плюс все выплаченные дивиденды, разделенные на сумму первоначальной покупки.",
    "What is CAGR in stock returns?": "Что означает показатель CAGR для акций?",
    "Compound Annual Growth Rate (CAGR) measures the geometric mean annual return of a stock over multiple years, smoothing out annual market fluctuations.": "Совокупный среднегодовой темп роста сглаживает скачки котировок и показывает эквивалентную стабильную годовую доходность за ряд лет.",
    "What is the difference between simple return and annualized return?": "В чем разница между абсолютной и годовой доходностью?",
    "Simple return measures absolute percentage gain over the entire holding period, while annualized return shows the steady annual rate required to achieve that result.": "Абсолютная доходность показывает суммарный прирост за все годы владения, а годовая — темп роста в пересчете на один календарный год.",

    // 20. CAPM
    "What is the Capital Asset Pricing Model (CAPM)?": "Что такое модель оценки финансовых активов (CAPM)?",
    "CAPM calculates an asset's expected return based on its risk relative to the overall market, using the formula: Expected Return = Risk-Free Rate + Beta × (Market Return - Risk-Free Rate).": "Модель, определяющая справедливую доходность актива с учетом рыночного риска: Ожидаемая доходность = Безрисковая ставка + Бета × Премия за риск рынка.",
    "What does Asset Beta (β) represent?": "Что показывает коэффициент Бета (β) акции?",
    "Beta measures an asset's volatility compared to the broader market. A beta of 1.0 indicates market-level volatility; above 1.0 indicates higher volatility, and below 1.0 indicates lower volatility.": "Меру изменчивости акции относительно рынка: Бета = 1 означает синхронное движение с индексом, выше 1 — высокую волатильность, ниже 1 — устойчивость.",
    "What is the Risk-Free Rate?": "Что считается безрисковой процентной ставкой?",
    "The risk-free rate is the theoretical rate of return of an investment with zero risk of default, typically represented by long-term government bond yields (like 10-year US Treasuries).": "Доходность актива с нулевым кредитным риском, в качестве которой берут процент по 10-летним государственным облигациям (ОФЗ или US Treasuries).",
    "What is the Market Risk Premium?": "Что такое премия за рыночный риск?",
    "The market risk premium is the additional return investors demand for choosing risky market equities over risk-free government securities.": "Надбавка к доходности, которую требуют инвесторы за покупку волатильных акций вместо надежных гособлигаций.",

    // 21. Dividend
    "What is dividend yield versus yield on cost?": "В чем разница между текущей дивидендной доходностью и доходностью к цене покупки?",
    "Dividend yield is the annual dividend divided by the current stock price. Yield on cost is the annual dividend divided by your original purchase price, which increases as companies raise their dividends over time.": "Текущая доходность рассчитывается от текущей биржевой цены, а доходность к цене покупки (Yield on Cost) — от цены вашего входа, возрастая при повышении выплат.",
    "What is a Dividend Reinvestment Plan (DRIP)?": "Что такое программа реинвестирования дивидендов (DRIP)?",
    "A DRIP automatically uses your cash dividend payments to purchase additional shares or fractional shares of the stock, compounding your share count and future payouts without commission fees.": "Автоматическая покупка дополнительных акций на поступившие дивиденды без брокерских комиссий, что ускоряет сложный процент.",
    "Are dividend payments guaranteed?": "Гарантированы ли выплаты дивидендов?",
    "No, company boards can reduce, suspend, or eliminate dividend payouts at any time depending on company profitability and economic conditions.": "Нет, совет директоров и собрание акционеров могут урезать или полностью отменить выплаты при ухудшении финансовых показателей.",

    // 22. Inflation
    "What is inflation?": "Что такое инфляция?",
    "Inflation is the general rise in prices for goods and services over time, resulting in a decline in the purchasing power of money.": "Устойчивый общий рост цен на товары и услуги, приводящий к снижению реальной покупательной способности денег.",
    "How does inflation affect my savings?": "Как инфляция сжигает сбережения?",
    "Cash sitting in zero-interest accounts loses purchasing power each year. If inflation is 3%, $100 today will only buy about $97 worth of goods next year.": "Наличные под подушкой теряют силу: при инфляции 6% на 10 000 ₽ через год можно будет купить товаров лишь на 9 400 ₽ в текущих ценах.",
    "How is inflation officially measured?": "Как официально рассчитывается уровень инфляции?",
    "Inflation is primarily measured using the Consumer Price Index (CPI), which tracks price changes across a standard market basket of consumer goods and services.": "Через индекс потребительских цен (ИПЦ), отражающий стоимость репрезентативной корзины продуктов, товаров и услуг домохозяйств.",
    "What is the historical average inflation rate?": "Какова средняя историческая инфляция?",
    "In the United States, inflation has historically averaged between 2.5% and 3.2% per year over long multi-decade horizons.": "В развитых странах она составляла 2,5–3,2% в год; в развивающихся экономиках в среднем колеблется около 5–8% годовых.",
    "How can I protect my money from losing value to inflation?": "Как уберечь капитал от обесценения?",
    "Investing in assets whose earnings outpace inflation—such as diversified equities, Treasury Inflation-Protected Securities (TIPS), real estate, and inflation-indexed bonds.": "Инвестируя в реальные активы, опережающие рост цен: акции компаний, недвижимость и облигации с индексируемым номиналом (ОФЗ-ИН).",

    // 23. Paycheck
    "What is FICA tax?": "Что такое страховые взносы и подоходный налог с зарплаты?",
    "FICA is a federal payroll tax that funds Social Security (6.2% on wages up to the wage base limit) and Medicare (1.45% plus an additional 0.9% on high earners).": "Обязательные отчисления с фонда оплаты труда в пенсионный и социальный фонды, а также удержание НДФЛ в пользу государства.",
    "What is the difference between pre-tax and post-tax deductions?": "В чем разница между вычетами до и после налогообложения?",
    "Pre-tax deductions (like 401k and health insurance) reduce your taxable gross income before taxes are computed. Post-tax deductions (like Roth contributions or wage garnishments) are taken after taxes.": "Вычеты до налога (взносы на лечение, софинансирование) уменьшают налогооблагаемую базу; вычеты после налога удерживаются из чистой выплаты.",
    "What is the difference between gross pay and net pay?": "В чем разница между окладом «грязными» и суммой «на руки»?",
    "Gross pay is the total amount earned before any taxes or deductions. Net pay (take-home pay) is the actual cash deposited into your bank account after all deductions.": "Оклад до вычета (Gross) — сумма по трудовому договору; сумма «на руки» (Net) — деньги, поступающие на карту после вычета НДФЛ.",
    "How does my W-4 filing status affect my paycheck?": "Как стандартные налоговые вычеты влияют на зарплату?",
    "Your W-4 form informs your employer how much federal income tax to withhold each pay period based on your filing status, dependents, and other income.": "Наличие детей и право на льготы уменьшают удерживаемый работодателем налог, увеличивая сумму, выдаваемую на руки.",
    "Why do state and local taxes vary so much?": "Почему налоги на доходы различаются по регионам?",
    "State income tax rates range from 0% (in states like Texas, Florida, and Washington) to over 13% in high-tax states, while some cities also impose local municipal income taxes.": "Субъекты федерации и штаты наделены налоговой автономией и могут вводить дополнительные ставки или освобождать от региональных налогов.",

    // 24. Net Worth
    "What is net worth?": "Что такое личный капитал (чистая стоимость активов)?",
    "Net worth is the total market value of everything you own (assets) minus everything you owe to creditors (liabilities).": "Рыночная стоимость всего вашего имущества и денег (активы) за вычетом всех долгов перед кредиторами (пассивы).",
    "How often should I calculate my net worth?": "Как часто нужно считать свой капитал?",
    "Reviewing your net worth quarterly or semi-annually gives you a clear high-level view of your financial health without obsessing over daily market swings.": "Одного раза в квартал или полугодие достаточно для объективной оценки динамики благосостояния без нервозности из-за колебаний рынка.",
    "What counts as an asset vs. a liability?": "Что относится к активам, а что к пассивам?",
    "Assets include bank balances, investment accounts, home equity, and retirement funds. Liabilities include mortgages, student loans, car loans, and credit card debt.": "Активы: вклады, инвестиции, недвижимость. Пассивы: остаток долга по ипотеке, автокредиту и кредитным картам.",
    "Should I include my house and mortgage in my net worth?": "Учитывать ли в капитале квартиру и ипотеку?",
    "Yes, you include the current fair market value of the home under assets and the remaining mortgage balance under liabilities. The difference is your home equity.": "Да, текущую рыночную стоимость квартиры вносят в активы, а остаток долга по кредиту — в пассивы. Разница составит ваш чистый капитал в жилье.",
    "What does it mean to have a negative net worth?": "Что значит отрицательный капитал?",
    "A negative net worth means your total debts exceed your total assets. This is common for young adults and recent graduates with student loans.": "Сумма долгов превышает стоимость всего имущества; типичная ситуация для недавних выпускников с кредитами на учебу или свежей ипотекой.",

    // 25. Emergency Fund
    "How much emergency fund is recommended?": "Каков оптимальный размер подушки безопасности?",
    "Most financial planners recommend saving 3 to 6 months of essential living expenses, or 9 to 12 months for freelancers or single-income households.": "От 3 до 6 месяцев базовых расходов для наемных сотрудников и от 9 до 12 месяцев для фрилансеров и предпринимателей.",
    "What expenses should be included in an emergency fund budget?": "Какие траты закладывать в расчет подушки?",
    "Include only non-negotiable living costs: housing (rent/mortgage), utilities, groceries, basic transportation, minimum debt payments, and healthcare insurance.": "Только критические расходы: аренда/ипотека, ЖКХ, простая еда, транспорт, обязательные платежи по кредитам и здоровье.",
    "Where should I keep my emergency fund?": "Где хранить подушку безопасности?",
    "In a dedicated High-Yield Savings Account (HYSA) or money market account where it is FDIC-insured, earns interest, and can be accessed immediately without risk.": "На накопительном счете с ежедневным процентом или вкладе с опцией снятия в надежном банке с госстраховкой вкладов.",
    "Should I pay off debt or build an emergency fund first?": "Что делать сначала: гасить долги или копить подушку?",
    "Build a starter emergency fund of 1 month of expenses or $1,000 to $2,000 first, then aggressively pay off high-interest consumer debt before expanding to 3-6 months.": "Сформируйте мини-подушку на 1 месяц (50 000–100 000 ₽), чтобы не влезать в новые долги, затем закройте дорогие кредиты и доведите фонд до нормы.",
    "When is it appropriate to use emergency fund savings?": "В каких случаях разрешено тратить подушку безопасности?",
    "Use it only for genuine, unexpected emergencies: sudden medical bills, unexpected car repairs, or living expenses following job loss.": "Только при форс-мажорах: потеря работы, экстренное лечение или срочный ремонт машины, критически необходимой для заработка.",

    // 26. Fee Impact
    "What is an expense ratio?": "Что такое совокупные расходы фонда (Expense Ratio / комиссия)?",
    "An expense ratio is the annual percentage fee charged by mutual funds and ETFs to cover fund management, administrative expenses, and operating costs.": "Ежегодная комиссия в процентах от стоимости чистых активов, взимаемая фондами за управление, депозитарий и аудит.",
    "How do fees compound over time?": "Как комиссии фондов съедают сложный процент?",
    "Fees are deducted annually from your total assets, meaning you lose both the fee money and all future compounding returns that money would have earned.": "Плата списывается ежегодно из всего портфеля, лишая вас не только самой комиссии, но и всей будущей прибыли, которую эти деньги могли принести.",
    "What is a good expense ratio for an index fund?": "Какая комиссия считается нормальной для ETF?",
    "Low-cost index funds and ETFs typically have expense ratios between 0.02% and 0.10%, whereas actively managed mutual funds often charge 0.60% to 1.50% or more.": "Для индексных ETF нормой является 0,05–0,2% в год; активные паевые фонды берут 1–3%, существенно отставая по доходности.",
    "What other investment fees should I look out for?": "За какими еще скрытыми расходами нужно следить?",
    "Watch out for advisory fees (AUM fees of 1%), front-end or back-end sales loads, trading commissions, account maintenance fees, and custodial charges.": "Комиссии брокера за сделки, депозитарный сбор, надбавки при покупке паев и плата за автоследование.",
    "How much can a 1% fee difference affect my retirement savings?": "Сколько денег крадет разница в комиссии всего в 1%?",
    "A 1% annual fee difference can erode 25% to 30% of your total ending portfolio wealth over a 30-year investment horizon.": "На 30-летнем горизонте разница в 1% годовой комиссии уничтожает до 25–30% всего накопленного вами итогового капитала!",

    // 27. College Savings
    "What is a 529 plan?": "Что такое план 529 для накоплений на образование?",
    "A 529 plan is a tax-advantaged savings and investment plan designed to encourage saving for future higher education expenses with tax-free growth and qualified withdrawals.": "Инвестиционный план с налоговыми льготами для накопления на обучение детей в вузе с безналоговым приростом капитала.",
    "How fast do college costs increase?": "Как быстро дорожает высшее образование?",
    "Historically, higher education tuition and fees have increased at an annual rate of 4% to 6%, outpacing general consumer inflation.": "Стоимость обучения исторически растет на 5–7% в год, опережая общий темп инфляции в стране.",
    "What happens to 529 funds if my child does not go to college?": "Что происходит со счетом, если ребенок не пошел в вуз?",
    "You can change the beneficiary to another qualifying family member, use up to $10,000 for student loan repayment, or roll over up to $35,000 into a Roth IRA under SECURE 2.0 rules.": "Получателя можно заменить на брата/сестру, направить до 10 000 $ на погашение кредитов или перевести до 35 000 $ на пенсионный счет Roth IRA.",
    "Can I use a 529 plan for trade schools or K-12 tuition?": "Можно ли оплачивать колледжи и частные школы?",
    "Yes, qualified distributions can cover accredited trade schools, vocational programs, apprenticeships, and up to $10,000 per year for K-12 private school tuition.": "Да, средства разрешено тратить на техникумы, профессиональные курсы и до 10 000 $ в год на частные средние школы.",
    "How does a 529 plan impact financial aid eligibility?": "Влияет ли наличие счета на получение стипендий?",
    "Parent-owned 529 plans are assessed as parental assets on the FAFSA at a maximum rate of 5.64%, having minimal negative impact on financial aid eligibility.": "Счет на имя родителей учитывается с коэффициентом не более 5,64%, оказывая минимальное влияние на господдержку.",

    // 28. Crypto DCA
    "What is Dollar-Cost Averaging (DCA)?": "Что такое усреднение долларовой стоимости (DCA)?",
    "Dollar-Cost Averaging is an investment strategy where you invest a fixed amount of money at regular intervals regardless of the asset's fluctuating market price.": "Стратегия регулярного инвестирования фиксированной суммы денег через равные промежутки времени вне зависимости от текущей цены актива.",
    "How does DCA apply to high-volatility assets like Crypto?": "Почему стратегия DCA идеальна для волатильной криптовалюты?",
    "DCA prevents emotional decisions during extreme market peaks and crashes, automatically buying more units when prices are low and fewer when prices are high.": "Она защищает от эмоций, автоматически покупая больше монет на дне и меньше на пиках, сглаживая среднюю цену покупки.",
    "Is DCA better than investing a lump sum?": "Что лучше: регулярная закупка (DCA) или вход на всю сумму?",
    "Lump sum investing historically wins in steadily rising markets, but DCA provides superior peace of mind, lower emotional risk, and downside protection in highly volatile markets.": "На стабильно растущем рынке выигрывает разовая покупка, но на непредсказуемом рынке DCA дает психологический комфорт и защиту от обвалов.",
    "What is the best frequency for crypto DCA?": "Какова оптимальная периодичность покупок крипты?",
    "Weekly or bi-weekly DCA aligned with your pay cycle is ideal for capturing market volatility while keeping trading fees manageable.": "Еженедельные или раз в две недели закупки под день зарплаты идеально улавливают волатильность без лишних комиссий.",
    "Does DCA guarantee profits in cryptocurrency?": "Гарантирует ли метод DCA прибыль в криптовалютах?",
    "No, DCA does not protect against prolonged declines or failing crypto projects; it only ensures you achieve the weighted average market purchase price.": "Нет, стратегия не защитит от краха безнадежного проекта, она лишь гарантирует получение средневзвешенной рыночной цены покупки.",

    // 29. Tip
    "What is the standard tipping percentage?": "Каков стандартный размер чаевых?",
    "In the United States and Canada, standard restaurant tipping guidelines range from 15% for adequate service, 18% for good service, to 20% or more for exceptional service.": "В США нормой считается 15–20%; в России и Европе общепринятый размер чаевых за качественное обслуживание составляет 5–10% от чека.",
    "Should tips be calculated before or after sales tax?": "Считать ли чаевые от суммы до налогов или после?",
    "Etiquette traditionally dictates calculating the tip percentage on the pre-tax food and beverage subtotal, though many automated payment terminals calculate tip on the post-tax total.": "По классическому этикету процент рассчитывается от чистой стоимости заказа без учета налогов, хотя терминалы считают от итоговой суммы.",
    "How do you split a bill evenly among friends?": "Как справедливо разделить общий счет в ресторане?",
    "Calculate the total bill including food, beverages, tax, and tip, and divide the total amount equally by the number of paying participants.": "Сложите всю сумму заказа, налоги и чаевые, а затем разделите полученный итог поровну на всех участников ужина.",

    // 30. Discount
    "How do you calculate a percentage discount?": "Как рассчитать процентную скидку на товар?",
    "Multiply the original price by the discount percentage divided by 100 to find the savings, and subtract that amount from the original price: Final Price = Original Price × (1 - Discount%).": "Умножьте исходную цену на процент скидки, деленный на 100, и вычтите результат из первоначальной цены: Итоговая цена = Цена × (1 - Скидка%).",
    "How do multiple stacked discounts work?": "Как работают суммирующиеся скидки (например, 20% + 10%)?",
    "Stacked discounts apply sequentially rather than additively. For example, 20% off plus an extra 10% off results in an effective 28% total discount, not 30%.": "Они применяются последовательно: скидка 20%, а затем еще 10% от остатка дают суммарную выгоду 28%, а не 30%.",
    "Is sales tax applied before or after store discounts?": "Начисляется ли налог (НДС) до скидки или после?",
    "In most jurisdictions, sales tax is calculated on the discounted post-sale price, meaning you pay sales tax only on the actual money spent.": "Налог начисляется на фактически уплаченную сумму со скидкой, то есть вы платите налог только за реальные расходы."
  },

  // Indonesian (id)
  id: {
    // 1. Mortgage
    "How is a mortgage payment calculated?": "Bagaimana cicilan bulanan KPR dihitung?",
    "A standard monthly mortgage payment consists of Principal & Interest (P&I), property taxes, homeowners insurance, private mortgage insurance (PMI) if down payment is under 20%, and homeowner association (HOA) fees.": "Angsuran KPR standar terdiri dari pokok pinjaman dan bunga, premi asuransi jiwa dan kebakaran, pajak bumi dan bangunan (PBB), serta iuran pemeliharaan lingkungan (IPL).",
    "What is PMI and when do I pay it?": "Apa itu asuransi penjaminan KPR dan kapan harus dibayar?",
    "Private Mortgage Insurance (PMI) is a policy that protects the lender if you default. It is typically required on conventional loans if your down payment is less than 20% of the home purchase price.": "Asuransi yang melindungi bank jika debitur gagal bayar, biasanya diwajibkan bila uang muka (DP) yang disetor kurang dari 20% harga rumah.",
    "What does PITI stand for?": "Apa kepanjangan dari PITI?",
    "PITI stands for Principal, Interest, Taxes, and Insurance. These are the four basic components that make up a homeowner's monthly housing payment. Together, they reflect the true cost of owning a home on a month-to-month basis.": "PITI adalah singkatan dari Pokok (Principal), Bunga (Interest), Pajak (Taxes), dan Asuransi (Insurance) yang mencerminkan biaya kepemilikan rumah bulanan sebenarnya.",
    "Is a 15-year mortgage better than a 30-year mortgage?": "Apakah tenor KPR 15 tahun lebih baik daripada 30 tahun?",
    "A 15-year mortgage typically offers a lower interest rate and allows you to pay off your home twice as fast, saving you tens of thousands of dollars in interest. However, a 30-year mortgage has lower monthly payments, which provides greater cash flow flexibility.": "Tenor 15 tahun mengenakan total bunga jauh lebih sedikit dan lunas dua kali lebih cepat; tenor 30 tahun menawarkan cicilan per bulan lebih ringan dan fleksibel.",
    "How do extra payments affect my mortgage payoff schedule?": "Bagaimana pelunasan pokok ekstra mempengaruhi jadwal KPR?",
    "Any extra money you pay towards your mortgage is applied directly to the principal balance. This reduces the remaining loan balance and decreases the amount of interest that accumulates, helping you pay off your mortgage years ahead of schedule.": "Setiap pembayaran ekstra langsung memotong sisa pokok utang, memangkas akumulasi bunga masa depan, dan mempercepat lunasnya KPR bertahun-tahun lebih awal.",

    // 2. Loan Calculator
    "How does an amortized loan work?": "Bagaimana cara kerja pinjaman amortisasi (anuitas)?",
    "With an amortized loan, you make equal periodic payments. Early in the loan term, the majority of each payment goes toward interest. Over time, an increasing portion goes toward paying down the principal balance until the debt is fully paid off.": "Peminjam membayar cicilan berkala dalam jumlah tetap. Di awal tenor, porsi bunga mendominasi; seiring berjalannya waktu, porsi pembayaran pokok akan semakin besar hingga lunas.",
    "What is the difference between fixed-rate and variable-rate loans?": "Apa perbedaan bunga tetap (fixed) dan bunga mengambang (floating)?",
    "A fixed-rate loan maintains the exact same interest rate and payment throughout the loan term. A variable-rate loan has an interest rate that adjusts periodically based on benchmark interest rates, which can increase or decrease your payments.": "Suku bunga tetap menjamin nominal bunga dan cicilan sama persis sepanjang masa kredit; bunga mengambang berubah berkala mengikuti suku bunga acuan pasar (BI-Rate).",
    "Can I pay off my loan early without penalty?": "Bisakah melunasi pinjaman lebih awal tanpa penalti?",
    "Most consumer loans and conventional mortgages allow prepayment without penalties, but some lenders include a prepayment penalty clause. Always verify your loan agreement terms before making accelerated principal payments.": "Sebagian besar kredit konsumsi mengizinkan pelunasan dipercepat, tetapi perbankan KPR biasanya menerapkan biaya penalti sekitar 1% hingga 3% jika dilunasi saat masa promo bunga tetap.",

    // 3. Debt Payoff
    "What is the Debt Snowball method?": "Apa itu metode Bola Salju (Debt Snowball) untuk melunasi utang?",
    "The Debt Snowball method involves paying off your smallest debt balances first, regardless of interest rates. It builds psychological momentum and motivation through quick wins.": "Metode yang memprioritaskan pelunasan saldo utang terkecil terlebih dahulu tanpa melihat suku bunga. Kemenangan cepat ini membangun motivasi psikologis untuk terus melunasi.",
    "What is the Debt Avalanche method?": "Apa itu metode Longsoran (Debt Avalanche) untuk melunasi utang?",
    "The Debt Avalanche method involves paying off your highest interest rate debts first. Mathematically, this minimizes the total interest you pay and helps you become debt-free faster.": "Metode melunasi utang dengan suku bunga tertinggi terlebih dahulu. Secara matematis, cara ini paling hemat bunga dan membuat Anda bebas utang lebih cepat.",
    "Which method is better: Debt Snowball or Debt Avalanche?": "Mana yang lebih baik: Bola Salju atau Longsoran?",
    "Mathematically, the Debt Avalanche method is superior because it minimizes the total interest paid. However, studies show that the Debt Snowball method is often more successful in practice because the psychological momentum helps people stick to their plan.": "Secara hitungan uang, metode Longsoran lebih unggul; namun dalam kenyataannya, metode Bola Salju terbukti lebih efektif karena kepuasan melunasi utang kecil membuat orang tidak menyerah.",
    "How does the 'extra payment' roll over in these strategies?": "Bagaimana dana ekstra dialihkan dalam strategi pelunasan ini?",
    "You continue paying minimums on all debts and add your extra cash to the target debt. Once that target debt is fully paid off, you roll its entire payment into the next debt on your list.": "Anda membayar cicilan minimum di semua utang dan mengalokasikan sisa uang ke utang target; setelah lunas, seluruh anggarannya dialihkan untuk melunasi utang berikutnya.",
    "Can I do a hybrid of Snowball and Avalanche?": "Bisakah menggabungkan metode Bola Salju dan Longsoran?",
    "Yes. Many people pay off one or two small debts first to free up immediate cash flow (Snowball), and then pivot to targeting the remaining debts by highest interest rate (Avalanche).": "Bisa. Banyak orang melunasi satu atau dua utang terkecil untuk melegakan arus kas (Bola Salju), lalu beralih menargetkan sisa utang dengan bunga tertinggi (Longsoran).",

    // 4. Refinance
    "When should I refinance my loan?": "Kapan waktu yang tepat untuk melakukan pembiayaan ulang (refinancing / take over)?",
    "It generally makes sense to refinance if you can secure a lower interest rate, reduce your monthly payment, or shorten your term, provided your total interest savings exceed the closing costs.": "Refinancing tepat dilakukan jika Anda mendapatkan bunga jauh lebih rendah atau tenor lebih singkat, dengan syarat total penghematan bunga melampaui biaya akad dan penalti.",
    "What closing costs are associated with refinancing?": "Biaya apa saja yang timbul saat refinancing pinjaman?",
    "Refinancing costs typically include application fees, origination fees, appraisal costs, title search and insurance, credit report fees, and recording fees, ranging from 2% to 6% of the loan amount.": "Biaya provisi bank, notaris, appraisal agunan, pengecekan sertifikat, dan premi asuransi baru berkisar 2% hingga 5% dari plafon kredit.",
    "How do I calculate my refinance break-even point?": "Bagaimana cara menghitung titik impas (Break-Even Point) refinancing?",
    "Divide your total refinance closing costs by your monthly payment savings. If closing costs are $3,000 and you save $150 per month, your break-even point is 20 months ($3,000 / $150).": "Bagi total biaya refinancing dengan selisih penghematan cicilan bulanan. Jika biaya Rp30 juta dan hemat Rp1,5 juta/bulan, titik impas tercapai dalam 20 bulan.",
    "What is a 'no-closing-cost' refinance?": "Apa itu refinancing tanpa biaya di muka?",
    "A no-closing-cost refinance means the lender either rolls the closing fees into your new total loan balance or charges a slightly higher interest rate to cover them.": "Bukan berarti gratis: biaya administrasi digabungkan ke dalam total pokok pinjaman baru atau dikompensasi dengan suku bunga yang sedikit lebih tinggi.",
    "Does refinancing lower my monthly payment or total interest?": "Apakah refinancing menurunkan cicilan bulanan atau total bunga?",
    "It depends on the term. Refinancing to a lower rate with the same or shorter term saves on both. Resetting your term back to 30 years lowers the monthly payment but can increase total lifetime interest.": "Tergantung tenornya. Jika tenor tetap atau diperpendek, keduanya berkurang; tetapi jika tenor diperpanjang kembali, cicilan mengecil namun akumulasi bunga bisa membengkak.",

    // 5. Student Loan
    "What is the SAVE plan?": "Apa itu program pelunasan pinjaman pendidikan SAVE?",
    "The Saving on a Valuable Education (SAVE) plan is an income-driven repayment (IDR) plan that protects discretionary income up to 225% of the poverty line, lowers payments to 5%-10%, and stops unpaid interest from accumulating.": "Program berbasis penghasilan yang melindungi 225% batas garis kemiskinan, memangkas cicilan menjadi 5%-10% dari sisa penghasilan bebas, dan menghentikan penumpukan bunga.",
    "How is discretionary income calculated for student loans?": "Bagaimana penghasilan bebas (discretionary income) dihitung?",
    "Discretionary income is the difference between your Adjusted Gross Income (AGI) and a percentage of the federal poverty guideline for your family size (150% for PAYE/IBR, 225% for SAVE).": "Selisih antara penghasilan kotor kena pajak tahunan dengan batas perlindungan biaya hidup layak sesuai jumlah tanggungan keluarga.",
    "How does student loan forgiveness work under IDR plans?": "Bagaimana mekanisme pemutihan utang studi berjalan?",
    "If you pay under an IDR plan for 20 or 25 years (or 10 years under SAVE for low initial balances), any remaining student debt is forgiven.": "Jika Anda rutin membayar sesuai penghasilan selama 20 hingga 25 tahun (atau 10 tahun untuk nominal kecil), seluruh sisa utang akan diputihkan.",
    "Which IDR plan is best for me?": "Skema pembayaran mana yang paling pas untuk saya?",
    "For most borrowers, the SAVE plan offers the lowest monthly payment and the best interest subsidy. Borrowers with very high incomes relative to debt may prefer PAYE or IBR due to payment caps.": "Bagi mayoritas peminjam, program SAVE memberi cicilan terendah; peminjam berpenghasilan sangat tinggi mungkin memilih skema dengan plafon pembayaran maksimal.",
    "Can I switch student loan repayment plans at any time?": "Bisakah mengganti skema cicilan pinjaman sewaktu-waktu?",
    "Yes, you can apply to switch repayment plans for free at studentaid.gov. However, switching plans can sometimes cause unpaid interest to capitalize.": "Ya, pengajuan pindah skema gratis, tetapi perpindahan skema terkadang dapat menyebabkan bunga yang tertunggak dikapitalisasi ke dalam pokok utang.",

    // 6. DTI
    "What is the 28/36 rule?": "Apa itu prinsip rasio keuangan 28/36?",
    "The 28/36 rule is a standard mortgage underwriting guideline stating that housing costs should not exceed 28% of gross monthly income, and total debt payments should not exceed 36%.": "Pedoman kelayakan kredit: biaya cicilan hunian tidak boleh melebihi 28% pendapatan kotor, dan total seluruh cicilan utang tidak boleh melampaui 36%.",
    "How does DTI affect my mortgage application?": "Bagaimana rasio utang terhadap pendapatan (DTI) mempengaruhi persetujuan KPR?",
    "Lenders use DTI to measure your ability to manage monthly payments. Lower DTIs below 36% receive the most favorable mortgage terms and lowest interest rates.": "Bank menggunakannya untuk menakar kemampuan bayar: DTI di bawah 30%-35% dipandang sehat dan diprioritaskan mendapat suku bunga termurah.",
    "What is the difference between front-end and back-end DTI?": "Apa perbedaan DTI perumahan (front-end) dan DTI total (back-end)?",
    "Front-end DTI only includes housing expenses (mortgage, property tax, insurance, HOA). Back-end DTI includes housing plus all recurring debts like credit cards, auto loans, and student loans.": "Front-end hanya menghitung cicilan KPR dan biaya rumah; back-end menghitung beban rumah ditambah cicilan kartu kredit, kendaraan, dan pinjaman pribadi.",
    "What is the maximum DTI ratio lenders will accept?": "Berapa batas maksimal DTI yang disetujui perbankan?",
    "Conventional mortgages typically prefer back-end DTIs of 36% to 43%. Government-backed loans like FHA and VA may allow DTIs up to 50% with strong compensating factors.": "Di Indonesia, perbankan umumnya membatasi rasio total cicilan utang maksimal 30% hingga 40% dari penghasilan bulanan resmi yang terverifikasi.",
    "How can I lower my Debt-to-Income ratio?": "Bagaimana cara menurunkan rasio DTI?",
    "You can lower your DTI by increasing gross income or paying off smaller debts completely to eliminate their recurring monthly minimum payments.": "Dengan menambah pemasukan resmi atau melunasi pinjaman-pinjaman kecil/paylater agar kewajiban cicilan bulanan terhapus dari riwayat SLIK OJK.",

    // 7. APR
    "What is the difference between interest rate and APR?": "Apa beda suku bunga nominal dengan suku bunga efektif tahunan (APR)?",
    "The interest rate is the nominal cost of borrowing the principal balance. The Annual Percentage Rate (APR) reflects the total annual cost of the loan including points, broker fees, and origination charges.": "Suku bunga dasar hanya menghitung bunga pinjaman pokok; APR menggambarkan total biaya pinjaman riil tahunan termasuk biaya provisi, administrasi, dan asuransi.",
    "Why is APR higher than the advertised interest rate?": "Mengapa nilai APR selalu lebih tinggi daripada suku bunga promo iklan?",
    "APR is higher because it amortizes all upfront lender fees, discount points, and closing costs into the effective yearly rate, revealing the true cost of credit.": "Karena APR menghitung seluruh potongan biaya administrasi di awal dan meratakannya menjadi persentase beban tahunan sesungguhnya.",
    "Is APR useful for comparing different loan offers?": "Apakah APR berguna untuk membandingkan tawaran bank?",
    "Yes, APR is the best metric for comparing loan offers with different fee structures, provided you plan to keep the loan for its full term.": "Ya, APR adalah indikator terbaik untuk membandingkan penawaran kredit dengan struktur biaya berbeda secara objektif.",

    // 8. Rent vs Buy
    "How long do I need to stay in a home for buying to beat renting?": "Berapa lama harus menempati rumah agar membeli lebih menguntungkan daripada menyewa?",
    "Because upfront closing costs, moving fees, and commissions are substantial, homeowners usually need to stay in a property for 4 to 7 years for buying to financially outperform renting.": "Karena adanya biaya BPHTB, notaris, dan komisi agen, pemilik rumah umumnya perlu tinggal minimal 4 hingga 7 tahun agar nilai beli mengungguli sewa.",
    "What hidden costs of homeownership should renters consider?": "Biaya tersembunyi apa saja yang wajib diketahui penyewa sebelum membeli rumah?",
    "Homeowners must pay property taxes, homeowners insurance, maintenance and repairs (typically 1-2% of home value annually), HOA dues, and potential capital improvement costs.": "PBB tahunan, asuransi, iuran IPL, dan biaya servis/renovasi berkala yang rata-rata mencapai 1% hingga 2% dari nilai properti setiap tahun.",
    "What is the opportunity cost of buying a home?": "Apa biaya peluang (opportunity cost) dari membeli rumah?",
    "The money spent on down payment, closing costs, and ongoing property maintenance could otherwise remain invested in liquid assets like index funds that compound over time.": "Uang muka dan biaya akad yang terkunci di properti sebenarnya bisa diinvestasikan pada instrumen likuid seperti reksa dana saham untuk berkembang dengan bunga majemuk.",

    // 9. Home Affordability
    "How much income should I spend on a mortgage?": "Berapa porsi penghasilan yang aman dialokasikan untuk cicilan KPR?",
    "Most financial experts recommend spending no more than 25% to 28% of your gross monthly income on housing costs (the front-end DTI guideline).": "Pakar perencana keuangan menyarankan untuk membatasi cicilan rumah tidak lebih dari 25% hingga 30% dari penghasilan bersih bulanan.",
    "How does down payment size impact affordability?": "Bagaimana besaran uang muka (DP) mempengaruhi kemampuan beli?",
    "A larger down payment reduces your loan amount, eliminates Private Mortgage Insurance (PMI) if you put down 20%, and lowers your monthly mortgage payment.": "DP yang lebih besar mengurangi pokok pinjaman, menurunkan angsuran bulanan, dan mempermudah negosiasi suku bunga terbaik dengan bank.",
    "How do interest rates affect purchasing power?": "Bagaimana kenaikan suku bunga KPR mempengaruhi daya beli properti?",
    "Every 1% increase in mortgage interest rates reduces your home purchasing power by roughly 10% for the same monthly payment budget.": "Kenaikan suku bunga sebesar 1% memangkas plafon harga rumah yang mampu Anda beli sekitar 10% pada anggaran cicilan bulanan yang sama.",

    // 10. Auto Loan
    "What is the 20/4/10 rule for buying a car?": "Apa itu aturan 20/4/10 dalam membeli kendaraan?",
    "The 20/4/10 rule recommends putting down at least 20%, financing for no longer than 4 years (48 months), and keeping total vehicle expenses under 10% of gross monthly income.": "Membayar DP minimal 20%, mengambil tenor kredit tidak lebih dari 4 tahun (48 bulan), dan membatasi biaya kendaraan (cicilan, bensin, servis) di bawah 10% penghasilan.",
    "Is a longer auto loan term better?": "Apakah tenor kredit mobil yang panjang (5-6 tahun) menguntungkan?",
    "Longer terms (like 72 or 84 months) lower your monthly payment, but you pay substantially more total interest and risk becoming 'underwater' (owing more than the vehicle is worth).": "Tenor panjang memang meringankan cicilan, namun total bunga membengkak dan nilai pasar mobil bekas bisa jatuh di bawah sisa pokok utang Anda.",
    "How does vehicle depreciation affect my loan?": "Bagaimana depresiasi harga mobil mempengaruhi kredit?",
    "New cars depreciate rapidly (often losing 20% in the first year). Without an adequate down payment, you risk owing more on your loan than the car's market value.": "Mobil baru mengalami penyusutan nilai hingga 20% di tahun pertama; tanpa DP yang cukup, utang Anda ke leasing akan lebih tinggi daripada harga jual mobil.",

    // 11. Credit Card Payoff
    "Why does paying only the minimum take so long?": "Mengapa hanya membayar tagihan minimum kartu kredit butuh waktu puluhan tahun untuk lunas?",
    "Credit card minimum payments are often set around 1% to 2% of the balance plus accrued interest. As the balance slowly drops, the required minimum drops, extending payoff times to decades.": "Karena pembayaran minimum hanya menutup bunga dan 1% hingga 2% pokok utang; nominal cicilan yang terus mengecil membuat utang berputar hingga puluhan tahun.",
    "How much faster can I pay off credit cards by paying extra?": "Seberapa cepat utang kartu kredit lunas jika membayar lebih?",
    "Paying even $50 or $100 above the minimum payment can cut your payoff timeline by several years and save thousands of dollars in compounding interest charges.": "Menambah pembayaran Rp500.000 hingga Rp1.000.000 di atas minimum payment dapat mempercepat pelunasan bertahun-tahun dan menghemat jutaan rupiah bunga berbunga.",
    "Should I use a balance transfer card to pay off debt?": "Perlukah mengambil pinjaman KTA bunga rendah untuk melunasi kartu kredit?",
    "A 0% APR balance transfer credit card can save significant interest if you pay off the full balance during the promotional period (typically 12-21 months) and factor in the 3%-5% transfer fee.": "Ya, mengalihkan utang bunga kartu kredit yang tinggi (hingga 21-24% per tahun) ke fasilitas pinjaman dengan bunga tetap yang lebih rendah adalah langkah restrukturisasi yang cerdas.",

    // 12. Retirement Planner
    "What is the 4% rule in retirement planning?": "Apa itu aturan 4% dalam perencanaan dana pensiun?",
    "The 4% rule suggests that withdrawing 4% of your retirement portfolio in the first year, adjusted for inflation annually thereafter, provides a high probability that your nest egg will last at least 30 years.": "Menarik 4% dari total portofolio di tahun pertama pensiun dan menyesuaikannya dengan inflasi setiap tahun memberi peluang sangat besar dana pensiun bertahan lebih dari 30 tahun.",
    "How much money do I need to retire comfortably?": "Berapa modal yang dibutuhkan untuk pensiun sejahtera?",
    "A common benchmark is accumulating 25 times your anticipated annual retirement expenses, or replacing 70% to 80% of your pre-retirement income.": "Standar praktisnya adalah mengumpulkan dana sebesar 25 kali estimasi pengeluaran tahunan di masa pensiun, atau memastikan penggantian 70% hingga 80% penghasilan aktif terakhir.",
    "How does inflation impact retirement spending?": "Bagaimana inflasi mengancam tabungan pensiun?",
    "Inflation steadily reduces the purchasing power of your savings. At a 3% inflation rate, everyday living expenses double roughly every 24 years, requiring growing investment portfolios.": "Inflasi menggerus daya beli uang tunai; pada laju inflasi 4%, biaya hidup akan berlipat ganda setiap 18 tahun, sehingga dana pensiun harus tetap diinvestasikan pada aset produktif.",

    // 13. 401(k)
    "What is an employer 401(k) match?": "Apa itu fasilitas iuran pensiun padanan perusahaan (DPLK)?",
    "An employer match is money your employer contributes to your 401(k) account based on your own contributions (e.g. matching 50% of contributions up to 6% of your salary). It is effectively an instant return on your savings.": "Kontribusi ekstra yang disetor pemberi kerja sebanding dengan setoran pensiun sukarela karyawan, memberikan imbal hasil instan tanpa risiko bagi tabungan Anda.",
    "What are the 401(k) contribution limits for 2024?": "Berapa batas maksimal iuran pensiun tahunan?",
    "For 2024, the employee contribution limit is $23,000 for those under 50. Individuals aged 50 and older can contribute an additional $7,500 catch-up contribution for a total of $30,500.": "Di AS batasnya 23.000 $; di Indonesia iuran jaminan pensiun BPJS Ketenagakerjaan dan DPLK memiliki ketentuan batas upah maksimal yang ditinjau berkala.",
    "What is the difference between Traditional 401(k) and Roth 401(k)?": "Apa perbedaan dana pensiun pra-pajak dan pasca-pajak?",
    "Traditional 401(k) contributions are pre-tax and reduce your current taxable income, with withdrawals taxed in retirement. Roth 401(k) contributions are post-tax, but all qualified growth and withdrawals are completely tax-free.": "Skema tradisional mengurangi penghasilan kena pajak saat ini dan dikenai pajak saat pensiun; skema Roth menyetor dari uang bersih namun seluruh hasil investasi dan pencairannya bebas pajak.",

    // 14. IRA Comparison
    "What is the key difference between a Roth and Traditional IRA?": "Apa perbedaan pokok rekening pensiun pribadi Roth dan Tradisional?",
    "Traditional IRA contributions are generally made pre-tax (reducing your current taxable income), but withdrawals in retirement are taxed as ordinary income. Roth IRA contributions are made with post-tax dollars; growth and withdrawals in retirement are completely tax-free.": "Akun tradisional memberi potongan pajak saat setor dan dipajaki saat dicairkan; akun Roth menyetor dari dana bersih namun membebaskan pajak keuntungan investasi selamanya.",
    "Which IRA plan is better for me?": "Skema pensiun mana yang lebih cocok untuk saya?",
    "If you expect your tax bracket to be higher in retirement than it is today, a Roth IRA is better. If you expect your tax bracket in retirement to be lower, a Traditional IRA is better.": "Jika tarif pajak Anda diperkirakan lebih tinggi di masa depan, pilih model Roth; jika pendapatan dan pajak Anda saat pensiun nanti lebih rendah, pilih model Tradisional.",
    "What are the contribution limits for IRAs in 2024?": "Berapa batas setoran tahunan akun pensiun pribadi?",
    "For 2024, the annual contribution limit for Traditional and Roth IRAs is $7,000 for individuals under age 50, and $8,000 for individuals age 50 or older.": "Batas setoran tahunan adalah 7.000 $ untuk usia di bawah 50 tahun, dan 8.000 $ untuk usia 50 tahun ke atas.",
    "Are there income limits for contributing to Traditional and Roth IRAs?": "Apakah ada batasan penghasilan untuk ikut serta?",
    "Roth IRAs have income phase-out ranges that restrict high earners. Anyone with earned income can contribute to a Traditional IRA, but tax deductibility may be limited by income and workplace retirement coverage.": "Akun Roth membatasi partisipasi bagi kalangan berpenghasilan sangat tinggi; akun Tradisional terbuka bagi siapa pun yang memiliki penghasilan aktif.",
    "Can I withdraw money from my IRA before age 59½ without penalty?": "Bisakah menarik dana sebelum usia 59,5 tahun tanpa penalti?",
    "Roth IRA original contributions can be withdrawn at any time penalty-free. Withdrawing investment earnings early or withdrawing Traditional IRA funds before 59½ usually incurs income taxes and a 10% penalty.": "Uang pokok setoran pada akun Roth dapat ditarik kapan saja tanpa penalti; namun penarikan imbal hasil investasi lebih awal dikenai pajak dan denda 10%.",

    // 15. Compound Interest
    "What is compound interest?": "Apa itu bunga majemuk (compound interest)?",
    "Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods. It causes your wealth to grow exponentially over time.": "Bunga yang dihitung dari modal pokok awal ditambah akumulasi bunga yang telah diperoleh sebelumnya, melipatgandakan kekayaan secara eksponensial seiring waktu.",
    "What is the Rule of 72?": "Apa itu aturan 72 (Rule of 72)?",
    "The Rule of 72 is a quick mental formula to estimate how many years it takes to double your money. Divide 72 by your annual interest rate (e.g. at 8%, your money doubles in about 9 years).": "Rumus cepat untuk memperkirakan waktu penggandaan uang: bagi angka 72 dengan suku bunga tahunan (misal bunga 8%, uang Anda berlipat dua dalam waktu sekitar 9 tahun).",
    "How does compounding frequency affect total returns?": "Bagaimana frekuensi penggabungan bunga mempengaruhi hasil akhir?",
    "The more frequently interest compounds (annually, monthly, daily), the higher your effective annual yield (APY) will be, as interest starts earning interest sooner.": "Semakin sering bunga digabungkan (bulanan, harian), semakin tinggi imbal hasil tahunan efektif (APY) yang diterima karena keuntungan lebih cepat menghasilkan keuntungan baru.",

    // 16. TVM
    "What is the Time Value of Money (TVM)?": "Apa itu nilai waktu dari uang (Time Value of Money)?",
    "The Time Value of Money principle states that a dollar today is worth more than a dollar in the future because today's dollar can be invested and earn interest.": "Prinsip dasar keuangan yang menyatakan bahwa uang saat ini bernilai lebih tinggi daripada jumlah yang sama di masa depan karena potensi kapasitas investasinya.",
    "What are the core components of TVM calculations?": "Apa saja 5 komponen utama dalam rumus TVM?",
    "The five core variables are Present Value (PV), Future Value (FV), Interest Rate per Period (Rate), Total Number of Periods (Nper), and Periodic Payment (PMT).": "Nilai Sekarang (PV), Nilai Masa Depan (FV), Suku Bunga per Periode (Rate), Jumlah Periode (Nper), dan Pembayaran Berkala (PMT).",
    "What is the difference between an ordinary annuity and annuity due?": "Apa perbedaan anuitas biasa dan anuitas di muka?",
    "In an ordinary annuity, payments occur at the end of each period. In an annuity due, payments occur at the beginning of each period, earning an extra compounding cycle of interest.": "Anuitas biasa disetor pada akhir periode; anuitas di muka disetor pada awal periode sehingga memperoleh satu siklus bunga majemuk tambahan.",

    // 17. ROI
    "How is Return on Investment (ROI) calculated?": "Bagaimana cara menghitung Return on Investment (ROI)?",
    "ROI is calculated by subtracting the initial cost of the investment from the final value, and dividing that net gain by the initial cost: ROI = (Net Profit / Cost of Investment) × 100%.": "Mengurangi nilai akhir dengan biaya investasi awal, lalu membagi keuntungan bersih tersebut dengan modal awal: ROI = (Laba Bersih / Modal Awal) × 100%.",
    "What is the difference between simple ROI and annualized ROI?": "Apa perbedaan ROI sederhana dan ROI disetahunkan (CAGR)?",
    "Simple ROI measures total percentage return regardless of duration. Annualized ROI (CAGR) standardizes the return into a per-year geometric rate, enabling fair comparison between investments held for different lengths of time.": "ROI sederhana mengukur total keuntungan tanpa memandang durasi; ROI disetahunkan (CAGR) menyetarakan hasil ke dalam laju pertumbuhan tahunan rata-rata.",
    "What is considered a good ROI?": "Berapa persentase ROI yang dianggap bagus?",
    "Historically, the broad stock market (S&P 500) has returned an average of 7% to 10% annually before inflation. Investments with higher expected returns generally involve higher risk of capital loss.": "Secara historis, pasar saham gabungan menghasilkan rata-rata 8% hingga 12% per tahun sebelum inflasi; target yang jauh lebih tinggi selalu disertai risiko penurunan modal.",

    // 18. Savings Goal
    "How do I calculate how much to save monthly for a goal?": "Bagaimana menghitung tabungan bulanan yang diperlukan untuk mencapai target?",
    "You divide your target savings amount by the number of months until your deadline, while factoring in the compounding interest earned on your growing balance.": "Bagi target nominal dengan sisa bulan yang tersedia, dikurangi proyeksi bunga majemuk yang akan dihasilkan saldo Anda selama masa menabung.",
    "Should I keep savings goal funds in high-yield savings or stocks?": "Haruskah dana target disimpan di tabungan/deposito atau saham?",
    "For goals under 3 to 5 years (like a car or home down payment), keep funds in safe, liquid instruments like High-Yield Savings Accounts (HYSA) or CDs. For goals 5+ years away, a diversified investment portfolio may be suitable.": "Untuk target di bawah 3 hingga 5 tahun (DP rumah, mobil), simpan di instrumen aman seperti deposito atau reksa dana pasar uang; di atas 5 tahun cocok di reksa dana saham.",
    "How can I stay on track with my savings goals?": "Bagaimana agar konsisten mencapai target tabungan?",
    "Automate recurring monthly transfers into a dedicated savings account immediately after your paycheck arrives (the 'pay yourself first' strategy).": "Gunakan fitur autodebet ke rekening tabungan khusus tepat pada hari gajian sesuai prinsip 'dahulukan membayar diri sendiri'.",

    // 19. Stock Return
    "How do I calculate stock returns?": "Bagaimana cara menghitung total imbal hasil saham?",
    "Total stock return equals capital gains (ending price minus purchase price) plus any dividends received, divided by the original purchase cost.": "Capital gain (harga jual dikurangi harga beli) ditambah seluruh dividen yang diterima, lalu dibagi dengan modal pembelian awal.",
    "What is CAGR in stock returns?": "Apa arti CAGR dalam investasi saham?",
    "Compound Annual Growth Rate (CAGR) measures the geometric mean annual return of a stock over multiple years, smoothing out annual market fluctuations.": "Laju pertumbuhan tahunan majemuk yang meratakan fluktuasi harga tahunan dan menunjukkan performa pertumbuhan rata-rata per tahun.",
    "What is the difference between simple return and annualized return?": "Apa beda imbal hasil absolut dan imbal hasil disetahunkan?",
    "Simple return measures absolute percentage gain over the entire holding period, while annualized return shows the steady annual rate required to achieve that result.": "Imbal hasil sederhana menunjukkan persentase kenaikan total selama memegang saham; imbal hasil disetahunkan menunjukkan kecepatan rata-rata per tahunnya.",

    // 20. CAPM
    "What is the Capital Asset Pricing Model (CAPM)?": "Apa itu Capital Asset Pricing Model (CAPM)?",
    "CAPM calculates an asset's expected return based on its risk relative to the overall market, using the formula: Expected Return = Risk-Free Rate + Beta × (Market Return - Risk-Free Rate).": "Model penetapan harga aset yang mengukur ekspektasi imbal hasil berdasarkan risiko sistematis: Ekspektasi Imbal Hasil = Suku Bunga Bebas Risiko + Beta × Premi Risiko Pasar.",
    "What does Asset Beta (β) represent?": "Apa arti koefisien Beta (β) saham?",
    "Beta measures an asset's volatility compared to the broader market. A beta of 1.0 indicates market-level volatility; above 1.0 indicates higher volatility, and below 1.0 indicates lower volatility.": "Mengukur sensitivitas pergerakan saham terhadap IHSG/pasar: Beta 1 bergerak seirama pasar; di atas 1 lebih volatil; di bawah 1 lebih defensif dan stabil.",
    "What is the Risk-Free Rate?": "Apa itu suku bunga bebas risiko?",
    "The risk-free rate is the theoretical rate of return of an investment with zero risk of default, typically represented by long-term government bond yields (like 10-year US Treasuries).": "Imbal hasil teoritis instrumen investasi tanpa risiko gagal bayar, yang biasanya diwakili oleh yield Surat Berharga Negara (SBN) tenor 10 tahun.",
    "What is the Market Risk Premium?": "Apa itu premi risiko pasar?",
    "The market risk premium is the additional return investors demand for choosing risky market equities over risk-free government securities.": "Kompensasi imbal hasil ekstra yang dituntut investor atas keberanian mengambil risiko di pasar saham dibandingkan menaruh uang di obligasi negara.",

    // 21. Dividend
    "What is dividend yield versus yield on cost?": "Apa perbedaan Dividend Yield dan Yield on Cost?",
    "Dividend yield is the annual dividend divided by the current stock price. Yield on cost is the annual dividend divided by your original purchase price, which increases as companies raise their dividends over time.": "Dividend yield membandingkan dividen tahunan dengan harga saham saat ini; Yield on Cost membandingkan dividen dengan harga beli awal Anda yang terus meningkat seiring bertumbuhnya dividen perusahaan.",
    "What is a Dividend Reinvestment Plan (DRIP)?": "Apa itu program reinvestasi dividen otomatis (DRIP)?",
    "A DRIP automatically uses your cash dividend payments to purchase additional shares or fractional shares of the stock, compounding your share count and future payouts without commission fees.": "Layanan otomatis yang menggunakan dividen tunai untuk membeli lembar saham tambahan tanpa komisi, melipatgandakan efek bunga majemuk kepemilikan Anda.",
    "Are dividend payments guaranteed?": "Apakah pembagian dividen saham dijamin pasti ada?",
    "No, company boards can reduce, suspend, or eliminate dividend payouts at any time depending on company profitability and economic conditions.": "Tidak, Rapat Umum Pemegang Saham (RUPS) dan direksi berhak menahan laba, memangkas, atau meniadakan dividen jika kinerja usaha menurun.",

    // 22. Inflation
    "What is inflation?": "Apa itu inflasi?",
    "Inflation is the general rise in prices for goods and services over time, resulting in a decline in the purchasing power of money.": "Kenaikan harga barang dan jasa secara umum dan terus-menerus, yang menyebabkan turunnya daya beli nilai uang.",
    "How does inflation affect my savings?": "Bagaimana inflasi merugikan tabungan?",
    "Cash sitting in zero-interest accounts loses purchasing power each year. If inflation is 3%, $100 today will only buy about $97 worth of goods next year.": "Uang tunai tanpa bunga kehilangan daya belinya setiap tahun; dengan inflasi 4%, uang Rp100.000 hari ini hanya bernilai riil Rp96.000 di tahun depan.",
    "How is inflation officially measured?": "Bagaimana inflasi diukur secara resmi?",
    "Inflation is primarily measured using the Consumer Price Index (CPI), which tracks price changes across a standard market basket of consumer goods and services.": "Melalui Indeks Harga Konsumen (IHK) yang mencatat pergerakan harga sekeranjang barang dan jasa kebutuhan pokok rumah tangga secara berkala.",
    "What is the historical average inflation rate?": "Berapa rata-rata inflasi tahunan historis?",
    "In the United States, inflation has historically averaged between 2.5% and 3.2% per year over long multi-decade horizons.": "Di negara berkembang rata-rata inflasi jangka panjang berada di kisaran 3% hingga 5% per tahun.",
    "How can I protect my money from losing value to inflation?": "Bagaimana melindungi nilai kekayaan dari ancaman inflasi?",
    "Investing in assets whose earnings outpace inflation—such as diversified equities, Treasury Inflation-Protected Securities (TIPS), real estate, and inflation-indexed bonds.": "Menginvestasikannya pada aset-aset produktif yang imbal hasilnya melampaui laju inflasi: reksa dana saham, obligasi ritel negara (ORI/SR), dan properti.",

    // 23. Paycheck
    "What is FICA tax?": "Apa itu potongan iuran BPJS dan pajak penghasilan karyawan?",
    "FICA is a federal payroll tax that funds Social Security (6.2% on wages up to the wage base limit) and Medicare (1.45% plus an additional 0.9% on high earners).": "Potongan wajib slip gaji yang mencakup PPh 21, iuran BPJS Ketenagakerjaan (JHT, JP), dan BPJS Kesehatan untuk jaminan sosial hari tua.",
    "What is the difference between pre-tax and post-tax deductions?": "Apa beda potongan sebelum pajak dan sesudah pajak?",
    "Pre-tax deductions (like 401k and health insurance) reduce your taxable gross income before taxes are computed. Post-tax deductions (like Roth contributions or wage garnishments) are taken after taxes.": "Potongan sebelum pajak (seperti iuran pensiun) mengurangi penghasilan kena pajak; potongan setelah pajak dipotong langsung dari take-home pay.",
    "What is the difference between gross pay and net pay?": "Apa perbedaan gaji kotor (gross) dan gaji bersih (take-home pay)?",
    "Gross pay is the total amount earned before any taxes or deductions. Net pay (take-home pay) is the actual cash deposited into your bank account after all deductions.": "Gaji kotor adalah upah total sesuai kontrak kerja; gaji bersih adalah nominal tunai yang benar-benar ditransfer ke rekening bank Anda.",
    "How does my W-4 filing status affect my paycheck?": "Bagaimana status Penghasilan Tidak Kena Pajak (PTKP) mempengaruhi gaji?",
    "Your W-4 form informs your employer how much federal income tax to withhold each pay period based on your filing status, dependents, and other income.": "Status pernikahan dan jumlah tanggungan menentukan besaran PTKP yang menjadi pengurang tarif pemotongan PPh 21 bulanan Anda.",
    "Why do state and local taxes vary so much?": "Mengapa potongan dan pajak daerah bisa berbeda-beda?",
    "State income tax rates range from 0% (in states like Texas, Florida, and Washington) to over 13% in high-tax states, while some cities also impose local municipal income taxes.": "Tiap yurisdiksi daerah memiliki peraturan upah minimum (UMR) dan retribusi daerah yang bervariasi sesuai regulasi setempat.",

    // 24. Net Worth
    "What is net worth?": "Apa itu kekayaan bersih (Net Worth)?",
    "Net worth is the total market value of everything you own (assets) minus everything you owe to creditors (liabilities).": "Nilai pasar seluruh harta benda dan simpanan yang Anda miliki (aset) dikurangi dengan total seluruh kewajiban utang piutang (liabilitas).",
    "How often should I calculate my net worth?": "Seberapa sering sebaiknya mengevaluasi kekayaan bersih?",
    "Reviewing your net worth quarterly or semi-annually gives you a clear high-level view of your financial health without obsessing over daily market swings.": "Mengevaluasinya setiap 3 atau 6 bulan sekali sudah cukup memberi gambaran komprehensif tanpa terganggu oleh fluktuasi harga harian.",
    "What counts as an asset vs. a liability?": "Apa saja yang tergolong aset dan liabilitas?",
    "Assets include bank balances, investment accounts, home equity, and retirement funds. Liabilities include mortgages, student loans, car loans, and credit card debt.": "Aset: tabungan, investasi saham, emas, nilai properti. Liabilitas: sisa pokok KPR, kredit mobil, utang kartu kredit, dan pinjaman pribadi.",
    "Should I include my house and mortgage in my net worth?": "Haruskah rumah dan cicilan KPR dimasukkan ke dalam kekayaan bersih?",
    "Yes, you include the current fair market value of the home under assets and the remaining mortgage balance under liabilities. The difference is your home equity.": "Ya, masukkan taksiran harga pasar rumah saat ini sebagai aset dan sisa pokok utang KPR sebagai liabilitas; selisihnya adalah ekuitas properti bersih Anda.",
    "What does it mean to have a negative net worth?": "Apa artinya jika kekayaan bersih bernilai negatif?",
    "A negative net worth means your total debts exceed your total assets. This is common for young adults and recent graduates with student loans.": "Artinya jumlah seluruh utang melebihi nilai harta yang dimiliki; situasi ini wajar dialami oleh lulusan baru atau yang baru mengambil KPR.",

    // 25. Emergency Fund
    "How much emergency fund is recommended?": "Berapa idealnya besaran dana darurat yang harus disiapkan?",
    "Most financial planners recommend saving 3 to 6 months of essential living expenses, or 9 to 12 months for freelancers or single-income households.": "Karyawan lajang disarankan memiliki 3 hingga 6 bulan pengeluaran rutin; keluarga dengan anak atau pekerja lepas disarankan memiliki 9 hingga 12 bulan.",
    "What expenses should be included in an emergency fund budget?": "Pengeluaran apa saja yang dihitung dalam dana darurat?",
    "Include only non-negotiable living costs: housing (rent/mortgage), utilities, groceries, basic transportation, minimum debt payments, and healthcare insurance.": "Hanya pos-pos biaya hidup primer yang tidak bisa ditunda: makan pokok, biaya sewa/cicilan rumah, listrik, air, transportasi dasar, dan premi asuransi.",
    "Where should I keep my emergency fund?": "Di mana tempat terbaik menyimpan dana darurat?",
    "In a dedicated High-Yield Savings Account (HYSA) or money market account where it is FDIC-insured, earns interest, and can be accessed immediately without risk.": "Di instrumen likuid bebas risiko seperti reksa dana pasar uang atau tabungan digital terpisah yang dijamin LPS dan bisa dicairkan kapan saja.",
    "Should I pay off debt or build an emergency fund first?": "Dahulukan melunasi utang atau mengumpulkan dana darurat?",
    "Build a starter emergency fund of 1 month of expenses or $1,000 to $2,000 first, then aggressively pay off high-interest consumer debt before expanding to 3-6 months.": "Kumpulkan dana darurat awal sebesar 1 bulan pengeluaran (Rp5-10 juta), kemudian fokus lunasi utang berbunga tinggi, baru lanjutkan memperbesar cadangan darurat.",
    "When is it appropriate to use emergency fund savings?": "Kapan waktu yang sah untuk memakai dana darurat?",
    "Use it only for genuine, unexpected emergencies: sudden medical bills, unexpected car repairs, or living expenses following job loss.": "Hanya untuk keadaan darurat tak terduga yang genting: PHK, rawat inap medis mendesak, atau perbaikan kendaraan penunjang kerja.",

    // 26. Fee Impact
    "What is an expense ratio?": "Apa itu rasio biaya pengelolaan (Expense Ratio)?",
    "An expense ratio is the annual percentage fee charged by mutual funds and ETFs to cover fund management, administrative expenses, and operating costs.": "Persentase biaya tahunan yang dipotong dari total Nilai Aktiva Bersih (NAB) reksa dana untuk membiayai manajer investasi, bank kustodian, dan audit.",
    "How do fees compound over time?": "Bagaimana biaya pengelolaan menggerus imbal hasil dalam jangka panjang?",
    "Fees are deducted annually from your total assets, meaning you lose both the fee money and all future compounding returns that money would have earned.": "Biaya dipotong setiap tahun dari total portofolio, sehingga Anda kehilangan uang biaya tersebut beserta seluruh potensi bunga majemuknya di masa depan.",
    "What is a good expense ratio for an index fund?": "Berapa rasio biaya yang wajar untuk reksa dana indeks?",
    "Low-cost index funds and ETFs typically have expense ratios between 0.02% and 0.10%, whereas actively managed mutual funds often charge 0.60% to 1.50% or more.": "Reksa dana indeks dan ETF yang efisien mematok biaya 0,2% hingga 0,5% per tahun; sedangkan reksa dana aktif sering membebankan biaya 1,5% hingga 3% per tahun.",
    "What other investment fees should I look out for?": "Biaya investasi apa lagi yang wajib diperhatikan?",
    "Watch out for advisory fees (AUM fees of 1%), front-end or back-end sales loads, trading commissions, account maintenance fees, and custodial charges.": "Biaya pembelian (subscription fee), biaya penjualan (redemption fee), biaya transaksi broker, dan biaya kustodian.",
    "How much can a 1% fee difference affect my retirement savings?": "Seberapa besar selisih biaya 1% dapat memangkas tabungan pensiun?",
    "A 1% annual fee difference can erode 25% to 30% of your total ending portfolio wealth over a 30-year investment horizon.": "Selisih biaya 1% per tahun dapat melenyapkan 25% hingga 30% dari total akumulasi kekayaan Anda selama 30 tahun berinvestasi!",

    // 27. College Savings
    "What is a 529 plan?": "Apa itu program tabungan pendidikan (529 Plan)?",
    "A 529 plan is a tax-advantaged savings and investment plan designed to encourage saving for future higher education expenses with tax-free growth and qualified withdrawals.": "Program investasi berinsentif pajak yang dirancang khusus untuk membiayai biaya kuliah anak dengan imbal hasil dan penarikan bebas pajak.",
    "How fast do college costs increase?": "Seberapa cepat kenaikan biaya pendidikan tinggi?",
    "Historically, higher education tuition and fees have increased at an annual rate of 4% to 6%, outpacing general consumer inflation.": "Secara historis, biaya uang kuliah tunggal (UKT) dan pendidikan tinggi naik 6% hingga 10% per tahun, jauh melampaui laju inflasi umum.",
    "What happens to 529 funds if my child does not go to college?": "Apa yang terjadi dengan dana tabungan jika anak tidak melanjutkan kuliah?",
    "You can change the beneficiary to another qualifying family member, use up to $10,000 for student loan repayment, or roll over up to $35,000 into a Roth IRA under SECURE 2.0 rules.": "Penerima manfaat dapat dialihkan ke saudara kandung lain, dipakai untuk melunasi utang studi, atau ditransfer ke rekening dana pensiun.",
    "Can I use a 529 plan for trade schools or K-12 tuition?": "Bisakah dipakai untuk sekolah kejuruan atau sekolah swasta?",
    "Yes, qualified distributions can cover accredited trade schools, vocational programs, apprenticeships, and up to $10,000 per year for K-12 private school tuition.": "Ya, dana dapat digunakan untuk kursus vokasi/pelatihan kejuruan terakreditasi dan biaya sekolah dasar/menengah hingga batas tertentu.",
    "How does a 529 plan impact financial aid eligibility?": "Apakah tabungan ini mempengaruhi peluang mendapatkan beasiswa?",
    "Parent-owned 529 plans are assessed as parental assets on the FAFSA at a maximum rate of 5.64%, having minimal negative impact on financial aid eligibility.": "Kepemilikan atas nama orang tua hanya dinilai maksimal 5,64% dalam evaluasi bantuan finansial sehingga dampaknya sangat kecil.",

    // 28. Crypto DCA
    "What is Dollar-Cost Averaging (DCA)?": "Apa itu strategi Dollar-Cost Averaging (DCA)?",
    "Dollar-Cost Averaging is an investment strategy where you invest a fixed amount of money at regular intervals regardless of the asset's fluctuating market price.": "Strategi menabung rutin dengan menyetor nominal uang yang sama secara konsisten di setiap periode tertentu tanpa memedulikan naik turunnya harga aset.",
    "How does DCA apply to high-volatility assets like Crypto?": "Mengapa DCA cocok diterapkan pada aset volatil seperti kripto?",
    "DCA prevents emotional decisions during extreme market peaks and crashes, automatically buying more units when prices are low and fewer when prices are high.": "DCA mencegah keputusan emosional akibat FOMO atau panik, secara otomatis membeli lebih banyak koin saat murah dan lebih sedikit saat mahal.",
    "Is DCA better than investing a lump sum?": "Apakah DCA lebih baik daripada investasi langsung sekaligus (lump sum)?",
    "Lump sum investing historically wins in steadily rising markets, but DCA provides superior peace of mind, lower emotional risk, and downside protection in highly volatile markets.": "Lump sum unggul saat tren pasar terus naik, namun DCA memberikan ketenangan pikiran dan perlindungan risiko saat pasar bergejolak hebat.",
    "What is the best frequency for crypto DCA?": "Berapa frekuensi terbaik untuk melakukan DCA kripto?",
    "Weekly or bi-weekly DCA aligned with your pay cycle is ideal for capturing market volatility while keeping trading fees manageable.": "Frekuensi mingguan atau dua mingguan yang selaras dengan tanggal gajian adalah pilihan ideal untuk meratakan harga tanpa membebani biaya transaksi.",
    "Does DCA guarantee profits in cryptocurrency?": "Apakah strategi DCA menjamin pasti untung?",
    "No, DCA does not protect against prolonged declines or failing crypto projects; it only ensures you achieve the weighted average market purchase price.": "Tidak, DCA tidak dapat melindungi dari kehancuran fundamental koin atau tren turun berkepanjangan; DCA hanya memastikan harga beli rata-rata tertimbang yang wajar.",

    // 29. Tip
    "What is the standard tipping percentage?": "Berapa persentase tip yang wajar?",
    "In the United States and Canada, standard restaurant tipping guidelines range from 15% for adequate service, 18% for good service, to 20% or more for exceptional service.": "Di restoran Amerika Utara standarnya 15% hingga 20%; di Indonesia pemberian uang tip bersifat sukarela, umumnya 5% hingga 10% jika layanan memuaskan.",
    "Should tips be calculated before or after sales tax?": "Apakah tip dihitung sebelum atau sesudah pajak PB1 / PPN?",
    "Etiquette traditionally dictates calculating the tip percentage on the pre-tax food and beverage subtotal, though many automated payment terminals calculate tip on the post-tax total.": "Secara etika, tip dihitung dari subtotal harga makanan dan minuman sebelum pajak, meski mesin kasir modern kerap menghitung dari total akhir.",
    "How do you split a bill evenly among friends?": "Bagaimana cara membagi tagihan restoran secara adil (split bill)?",
    "Calculate the total bill including food, beverages, tax, and tip, and divide the total amount equally by the number of paying participants.": "Jumlahkan seluruh total tagihan makanan, minuman, pajak, dan biaya layanan/tip, lalu bagi rata dengan jumlah orang yang ikut makan.",

    // 30. Discount
    "How do you calculate a percentage discount?": "Bagaimana cara menghitung diskon persen?",
    "Multiply the original price by the discount percentage divided by 100 to find the savings, and subtract that amount from the original price: Final Price = Original Price × (1 - Discount%).": "Kalikan harga awal dengan persentase diskon dibagi 100 untuk mengetahui nilai potongan, lalu kurangi harga awal: Harga Akhir = Harga Awal × (1 - Diskon%).",
    "How do multiple stacked discounts work?": "Bagaimana cara kerja diskon bertingkat (misal diskon 20% + 10%)?",
    "Stacked discounts apply sequentially rather than additively. For example, 20% off plus an extra 10% off results in an effective 28% total discount, not 30%.": "Dihitung bertahap dan bukan dijumlahkan langsung: diskon 20% kemudian dipotong lagi 10% dari harga sisa menghasilkan diskon riil 28%, bukan 30%.",
    "Is sales tax applied before or after store discounts?": "Apakah PPN dikenakan sebelum atau sesudah diskon?",
    "In most jurisdictions, sales tax is calculated on the discounted post-sale price, meaning you pay sales tax only on the actual money spent.": "Pajak dihitung berdasarkan harga akhir setelah potongan promo, artinya Anda hanya membayar pajak atas nilai transaksi riil yang dibelanjakan."
  }
};
