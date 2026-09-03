import type { Lang } from './ui';
import { faqsFinance } from './faqs-finance';
import { faqsLoansRetirement } from './faqs-loans-retirement';
import { faqsIntlBatch1 } from './faqs-intl-batch1';
import { faqsIntlBatch2 } from './faqs-intl-batch2';
import { faqsIntlBatch3 } from './faqs-intl-batch3';
import { faqsBatchEsZh } from './faqs-batch-es-zh';
import { faqsBatchEurope } from './faqs-batch-europe';
import { faqsBatchAsia } from './faqs-batch-asia';
import { faqsBatchRest } from './faqs-batch-rest';

export const allFaqs: Record<Lang, Record<string, string>> = {
  en: {},
  es: {
    // Student Loan FAQs
    "What is the SAVE plan?": "¿Qué es el plan SAVE?",
    "The Saving on a Valuable Education (SAVE) plan is the newest income-driven repayment (IDR) plan. It raises the discretionary income shield to 225% of the poverty line, lowers payments to 5% of discretionary income for undergraduate loans, and stops unpaid interest from accumulating.": "El plan SAVE (Saving on a Valuable Education) es el plan de pago basado en ingresos más reciente. Eleva la protección del ingreso disponible al 225% del umbral de pobreza, reduce las cuotas al 5% para préstamos de grado y detiene la acumulación de intereses impagados.",
    "How is discretionary income calculated for student loans?": "¿Cómo se calcula el ingreso disponible para préstamos estudiantiles?",
    "Discretionary income is the difference between your Adjusted Gross Income (AGI) and a percentage of the federal poverty guideline for your family size (150% for PAYE/IBR, 225% for SAVE).": "El ingreso disponible es la diferencia entre su Ingreso Bruto Ajustado (AGI) y un porcentaje del umbral federal de pobreza según el tamaño de su familia (150% para PAYE/IBR, 225% para SAVE).",
    "How does student loan forgiveness work under IDR plans?": "¿Cómo funciona la condonación de préstamos estudiantiles bajo los planes IDR?",
    "If you pay under an IDR plan for 20 or 25 years (or as little as 10 years under SAVE for low initial balances), any remaining student debt is forgiven. However, under current tax laws, this forgiven balance may be treated as taxable income, although federal tax on forgiven student loans is temporarily suspended through 2025.": "Si abonas tus cuotas bajo un plan IDR durante 20 o 25 años (o desde 10 años en SAVE para saldos iniciales bajos), el saldo restante queda condonado por completo.",
    "Which IDR plan is best for me?": "¿Cuál es el mejor plan IDR para mi caso?",
    "For most borrowers, the SAVE plan offers the lowest monthly payment and the best interest subsidy. However, if your income is very high relative to your debt, plans like PAYE or IBR might be better because they cap your monthly payment at what it would be under the Standard 10-Year Repayment Plan, whereas SAVE has no payment cap.": "Para la mayoría de los prestatarios, el plan SAVE ofrece el pago mensual más bajo y el mejor subsidio de intereses. Sin embargo, si tus ingresos son muy altos en relación con la deuda, PAYE o IBR tienen un tope mensual que puede convenirte.",
    "Can I switch student loan repayment plans at any time?": "¿Puedo cambiar de plan de amortización de préstamos en cualquier momento?",
    "Yes, you can apply to switch repayment plans for free at studentaid.gov. However, switching plans can sometimes cause outstanding unpaid interest to capitalize (be added to your principal balance), which means you will start paying interest on that interest.": "Sí, puedes solicitar el cambio de plan de forma gratuita en studentaid.gov. Sin embargo, cambiar de plan en ocasiones puede capitalizar intereses pendientes sobre el principal.",

    // Refinance FAQs
    "When should I refinance my loan?": "¿Cuándo conviene refinanciar un préstamo?",
    "It generally makes sense to refinance if you can secure a lower interest rate, reduce your monthly payment, or shorten your term. The main goal is ensuring your total interest savings exceed the closing costs.": "Conviene refinanciar si obtienes un tipo de interés más bajo, reduces la cuota mensual o acortas el plazo, asegurando que el ahorro total en intereses supere los gastos de formalización.",
    "What closing costs are associated with refinancing?": "¿Qué gastos de cierre conlleva una refinanciación?",
    "Refinancing costs typically include application fees, origination fees, appraisal costs, title search and insurance, credit report fees, and recording fees. These range from 2% to 6% of the loan amount.": "Suelen incluir comisiones de apertura, tasación, gestoría, registro y verificación legal, oscilando habitualmente entre el 2% y el 6% del importe financiado.",
    "How do I calculate my refinance break-even point?": "¿Cómo calculo el punto de equilibrio o amortización del gasto?",
    "To find your break-even point, divide your total refinance closing costs by your monthly payment savings. For example, if closing costs are $3,000 and you save $150 per month, your break-even point is 20 months ($3,000 / $150). If you plan to sell or move before reaching this point, refinancing may not make financial sense.": "Divide los gastos totales de cierre entre el ahorro mensual obtenido. Por ejemplo: 3.000 $ de gastos / 150 $ de ahorro al mes = 20 meses para recuperar el desembolso.",
    "What is a 'no-closing-cost' refinance?": "¿Qué es una refinanciación 'sin gastos de cierre'?",
    "A no-closing-cost refinance doesn't mean the fees are waived. Instead, the lender either rolls the closing costs into your new total loan balance or charges a slightly higher interest rate to cover them. This avoids paying cash upfront but increases the lifetime cost of the loan.": "No significa que los gastos desaparezcan. La entidad financiera añade los gastos al saldo financiado o aplica un tipo de interés ligeramente mayor para compensarlos.",
    "Does refinancing lower my monthly payment or total interest?": "¿La refinanciación reduce la cuota mensual o los intereses totales?",
    "It can do both, but it depends on the new loan's term. If you refinance to a lower rate with the same or shorter term, you save on both. However, if you reset your term back to 30 years to get the lowest possible monthly payment, you might end up paying more total interest over the life of the loan despite the monthly savings.": "Depende del plazo elegido. Si reduces el tipo manteniendo o acortando el plazo, ahorras en ambos. Si alargas el plazo a 30 años, la cuota baja pero los intereses totales pueden aumentar.",

    // DTI FAQs
    "What is the 28/36 rule?": "¿Qué es la regla 28/36?",
    "The 28/36 rule is a standard mortgage underwriting guideline. It states that a household should spend a maximum of 28% of its gross monthly income on housing expenses, and a maximum of 36% on total debt payments (including housing, credit cards, auto loans, and student loans).": "Es una norma estándar de suscripción hipotecaria que establece que los gastos de vivienda no deben superar el 28% de los ingresos brutos mensuales, y el total de deudas no debe exceder el 36%.",
    "How does DTI affect my mortgage application?": "¿Cómo influye el DTI en la solicitud de mi hipoteca?",
    "Lenders use DTI to measure your ability to manage monthly payments. A high DTI indicates you might be over-leveraged, leading to rejection or higher interest rates. DTIs below 36% are considered low risk.": "Los prestamistas usan el DTI para evaluar tu capacidad de pago. Un DTI elevado indica sobreendeudamiento, mientras que niveles inferiores al 36% se consideran de bajo riesgo.",
    "What is the difference between front-end and back-end DTI?": "¿Cuál es la diferencia entre el DTI de vivienda (front-end) y el DTI total (back-end)?",
    "Front-end DTI (housing ratio) only calculates the percentage of gross monthly income spent on housing costs like mortgage payments, property taxes, home insurance, and HOA fees. Back-end DTI (total debt ratio) includes your housing costs plus all other recurring monthly debts like student loans, credit cards, car payments, and personal loans.": "El DTI front-end sólo incluye los gastos de vivienda (cuota, impuestos, seguro). El DTI back-end añade todas las demás obligaciones mensuales recurrentes (tarjetas, créditos de coche, préstamos).",
    "What is the maximum DTI ratio lenders will accept?": "¿Cuál es el DTI máximo que aceptan los bancos?",
    "For standard conventional mortgages, lenders usually prefer a back-end DTI of 36% or less, though many will approve up to 43%. Government-backed loans like FHA and VA loans can be more flexible, sometimes allowing back-end DTIs up to 50% or higher if you have a strong credit score or significant cash reserves.": "En hipotecas convencionales se prefiere un 36% o menos, aunque muchos aprueban hasta el 43%. Con buen historial crediticio y ahorros, ciertos programas permiten hasta el 50%.",
    "How can I lower my Debt-to-Income ratio?": "¿Cómo puedo reducir mi ratio Deuda-Ingreso?",
    "You can lower your DTI by either increasing your gross monthly income (e.g., getting a raise, starting a side business) or paying down your recurring debts. Focus on paying off smaller loans entirely to eliminate their minimum monthly payment from your DTI calculation.": "Aumentando tus ingresos brutos mensuales o amortizando deudas para eliminar cuotas mensuales del cómputo general.",

    // Debt Snowball vs Avalanche FAQs
    "What is the Debt Snowball method?": "¿Qué es el método Bola de Nieve?",
    "The Debt Snowball method involves paying off your smallest debt balances first, regardless of interest rates. It builds psychological momentum and motivation through quick wins.": "Consiste en liquidar primero las deudas con saldos más pequeños, independientemente de sus tipos de interés, fomentando el impulso motivacional mediante logros rápidos.",
    "What is the Debt Avalanche method?": "¿Qué es el método Avalancha?",
    "The Debt Avalanche method involves paying off your highest interest rate debts first. Mathematically, this minimizes the total interest you pay and helps you become debt-free faster.": "Consiste en pagar primero las deudas con el tipo de interés más alto. Matemáticamente minimiza el gasto en intereses y acelera la liberación de deudas.",
    "Which method is better: Debt Snowball or Debt Avalanche?": "¿Cuál es mejor: Bola de Nieve o Avalancha?",
    "Mathematically, the Debt Avalanche method is superior because it minimizes the total interest paid. However, studies show that the Debt Snowball method is often more successful in practice because the psychological momentum of clearing individual accounts quickly helps people stay motivated and stick to their plan.": "Matemáticamente la Avalancha es superior al ahorrar más dinero, pero la Bola de Nieve suele tener mayor tasa de éxito práctico por el refuerzo psicológico de cancelar cuentas rápidamente.",
    "How does the 'extra payment' roll over in these strategies?": "¿Cómo se transfiere el pago extra en estas estrategias?",
    "In both methods, you continue paying the minimum required payments on all your debts. Any extra cash you can afford is added to the payment of your target debt (either the smallest balance or highest interest). Once that target debt is fully paid off, you roll its entire monthly payment (minimum + the extra cash) into the next debt on your list.": "Pagas los mínimos en todas las deudas y destinas el dinero extra a la deuda objetivo. Una vez saldada, transfieres esa cuota íntegra a la siguiente deuda.",
    "Can I do a hybrid of Snowball and Avalanche?": "¿Se puede combinar la Bola de Nieve y la Avalancha?",
    "Yes. Some people prefer to pay off one or two small debts first to get immediate visual progress and free up cash flow (Snowball), and then pivot to targeting the remaining debts by highest interest rate to save on interest costs (Avalanche).": "Sí. Puedes cancelar una o dos deudas pequeñas primero para ganar motivación y liquidez (Bola de Nieve), y luego liquidar las restantes por tipo de interés (Avalancha).",

    // Mortgage FAQs
    "How is a mortgage payment calculated?": "¿Cómo se calcula el pago mensual de la hipoteca?",
    "A standard monthly mortgage payment consists of Principal & Interest (P&I), property taxes, homeowners insurance, private mortgage insurance (PMI) if down payment is under 20%, and homeowner association (HOA) fees.": "Se compone de capital e intereses, impuestos sobre la propiedad, seguro de hogar, seguro hipotecario (PMI si la entrada es inferior al 20%) y gastos de comunidad.",
    "What is PMI and when do I pay it?": "¿Qué es el PMI y cuándo es necesario pagarlo?",
    "Private Mortgage Insurance (PMI) is a policy that protects the lender if you default. It is typically required on conventional loans if your down payment is less than 20% of the home purchase price.": "Es un seguro que protege al prestamista ante un posible impago. Se requiere habitualmente cuando la aportación inicial es menor al 20% del valor del inmueble.",
    "What does PITI stand for?": "¿Qué significa PITI?",
    "PITI stands for Principal, Interest, Taxes, and Insurance. These are the four basic components that make up a homeowner's monthly housing payment. Together, they reflect the true cost of owning a home on a month-to-month basis.": "Son las siglas en inglés de Principal, Interés, Impuestos y Seguro. Son los cuatro pilares que componen la cuota real mensual de la vivienda.",
    "Is a 15-year mortgage better than a 30-year mortgage?": "¿Es mejor una hipoteca a 15 años que una a 30 años?",
    "A 15-year mortgage typically offers a lower interest rate and allows you to pay off your home twice as fast, saving you tens of thousands of dollars in interest. However, a 30-year mortgage has lower monthly payments, which provides greater cash flow flexibility and makes the home more affordable on a month-to-month basis.": "A 15 años se obtiene menor interés y se liquida el préstamo en la mitad de tiempo ahorrando miles de euros. A 30 años la mensualidad es más baja y da mayor holgura mensual.",
    "How do extra payments affect my mortgage payoff schedule?": "¿Cómo repercuten las amortizaciones anticipadas en el plazo de la hipoteca?",
    "Any extra money you pay towards your mortgage is applied directly to the principal balance. This reduces the remaining loan balance and decreases the amount of interest that accumulates, helping you pay off your mortgage years ahead of schedule and saving you a substantial amount in interest fees.": "Cualquier pago extra reduce directamente el capital principal pendiente, disminuyendo los intereses futuros y acortando años de hipoteca.",

    // IRA Comparison FAQs
    "What is the key difference between a Roth and Traditional IRA?": "¿Cuál es la diferencia fundamental entre una cuenta Roth y una Tradicional?",
    "Traditional IRA contributions are generally made pre-tax (reducing your current taxable income), but withdrawals in retirement are taxed as ordinary income. Roth IRA contributions are made with post-tax dollars; growth and withdrawals in retirement are completely tax-free.": "Las aportaciones tradicionales reducen la base imponible del IRPF hoy pero tributan al rescatarse; las cuentas tipo Roth se aportan con dinero neto y se retiran 100% libres de impuestos.",
    "Which IRA plan is better for me?": "¿Qué modalidad me conviene más?",
    "As a general rule, if you expect your tax bracket to be higher in retirement than it is today, a Roth IRA is better. If you expect your tax bracket in retirement to be lower than it is today, a Traditional IRA is better.": "Si prevés estar en un tramo impositivo superior en la jubilación, conviene el modelo Roth. Si tu tramo fiscal será inferior, conviene el modelo Tradicional.",
    "What are the contribution limits for IRAs in 2024?": "¿Cuáles son los límites de aportación para 2024?",
    "For 2024, the annual contribution limit for both Traditional and Roth IRAs is $7,000 for those under age 50, and $8,000 for those age 50 or older (which includes a $1,000 catch-up contribution).": "El límite anual general es de 7.000 $ para menores de 50 años, y de 8.000 $ para personas de 50 años o más.",
    "Are there income limits for contributing to Traditional and Roth IRAs?": "¿Existen límites de ingresos para poder aportar?",
    "Roth IRAs have strict income limits; in 2024, eligibility phases out between $146,000 and $161,000 for single filers, and $230,000 to $240,000 for married couples filing jointly. Anyone can contribute to a Traditional IRA regardless of income, but the tax deductibility phases out if your income is high and you have access to a workplace retirement plan (like a 401k).": "Las cuentas Roth tienen límites de ingresos estrictos, mientras que en las tradicionales cualquiera puede aportar, variando la desgravación según los ingresos.",
    "Can I withdraw money from my IRA before age 59½ without penalty?": "¿Puedo rescatar dinero antes de los 59 años y medio sin penalización?",
    "With a Roth IRA, you can withdraw your original contributions at any time for any reason tax- and penalty-free, but withdrawing earnings early incurs taxes and a 10% penalty. With a Traditional IRA, withdrawing any funds early generally triggers both regular income tax and a 10% penalty, except for specific IRS-approved exemptions (e.g., qualifying first-time home purchase, higher education expenses, or disability).": "En cuentas Roth puedes retirar tus aportaciones iniciales en cualquier momento sin penalizaciones, pero retirar rendimientos antes de tiempo suele conllevar recargos fiscales."
  },
  "zh-cn": {
    "What is the SAVE plan?": "什么是 SAVE 助学贷款还款计划？",
    "The Saving on a Valuable Education (SAVE) plan is the newest income-driven repayment (IDR) plan. It raises the discretionary income shield to 225% of the poverty line, lowers payments to 5% of discretionary income for undergraduate loans, and stops unpaid interest from accumulating.": "SAVE 计划是最新的基于收入的还款计划，将免征生活保护额度提升至联邦贫困线的 225%，本科学贷月供降至可支配收入的 5%，且未结清利息不再滚入本金。",
    "How is discretionary income calculated for student loans?": "助学贷款的可支配收入是如何计算的？",
    "Discretionary income is the difference between your Adjusted Gross Income (AGI) and a percentage of the federal poverty guideline for your family size (150% for PAYE/IBR, 225% for SAVE).": "可支配收入为调整后总收入（AGI）减去根据家庭人口核定的联邦贫困线倍数（PAYE/IBR 为 150%，SAVE 为 225%）后的净额。",
    "How does student loan forgiveness work under IDR plans?": "基于收入的还款计划如何进行债务免除？",
    "If you pay under an IDR plan for 20 or 25 years (or as little as 10 years under SAVE for low initial balances), any remaining student debt is forgiven. However, under current tax laws, this forgiven balance may be treated as taxable income, although federal tax on forgiven student loans is temporarily suspended through 2025.": "在 IDR 计划下按期还款满 20 或 25 年（SAVE 计划下小额贷款最低仅需 10 年），剩余本息全部予以免除。",
    "Which IDR plan is best for me?": "哪种还款计划最适合我？",
    "For most borrowers, the SAVE plan offers the lowest monthly payment and the best interest subsidy. However, if your income is very high relative to your debt, plans like PAYE or IBR might be better because they cap your monthly payment at what it would be under the Standard 10-Year Repayment Plan, whereas SAVE has no payment cap.": "对多数借款人而言，SAVE 计划月供最低且有全额利息补贴；但若收入极高，PAYE 或 IBR 设有标准 10 年还款额上限，可能更划算。",
    "Can I switch student loan repayment plans at any time?": "我可以随时更改学贷还款方案吗？",
    "Yes, you can apply to switch repayment plans for free at studentaid.gov. However, switching plans can sometimes cause outstanding unpaid interest to capitalize (be added to your principal balance), which means you will start paying interest on that interest.": "可以，借款人随时可在官方平台免费申请调整还款方案，但需注意未结清利息可能发生资本化计息。",

    "When should I refinance my loan?": "什么时候办理转贷再融资最合适？",
    "It generally makes sense to refinance if you can secure a lower interest rate, reduce your monthly payment, or shorten your term. The main goal is ensuring your total interest savings exceed the closing costs.": "当获得更低的贷款利率、降低月供或缩短年限，且节省利息总额能够覆盖各项手续费用时，再融资非常划算。",
    "What closing costs are associated with refinancing?": "转贷再融资有哪些前期手续费用？",
    "Refinancing costs typically include application fees, origination fees, appraisal costs, title search and insurance, credit report fees, and recording fees. These range from 2% to 6% of the loan amount.": "主要包括申请费、放款手续费、房屋评估费、产权调查与保险费等，一般占贷款本金的 2% 至 6%。",
    "How do I calculate my refinance break-even point?": "如何计算转贷再融资的回本平衡期？",
    "To find your break-even point, divide your total refinance closing costs by your monthly payment savings. For example, if closing costs are $3,000 and you save $150 per month, your break-even point is 20 months ($3,000 / $150). If you plan to sell or move before reaching this point, refinancing may not make financial sense.": "用总转贷手续费除以每月节省的月供金额。例如手续费 3,000 美元，每月省 150 美元，则回本期为 20 个月。",
    "What is a 'no-closing-cost' refinance?": "什么是“零手续费”再融资？",
    "A no-closing-cost refinance doesn't mean the fees are waived. Instead, the lender either rolls the closing costs into your new total loan balance or charges a slightly higher interest rate to cover them. This avoids paying cash upfront but increases the lifetime cost of the loan.": "这并不代表费用被免除，而是机构将手续费计入了贷款总额或略微调高了利率作为补偿。",
    "Does refinancing lower my monthly payment or total interest?": "再融资是降低月供还是减少总利息？",
    "It can do both, but it depends on the new loan's term. If you refinance to a lower rate with the same or shorter term, you save on both. However, if you reset your term back to 30 years to get the lowest possible monthly payment, you might end up paying more total interest over the life of the loan despite the monthly savings.": "取决于所选期限。在更低利率下维持或缩短年限可两者兼得；若重置为 30 年，月供虽然降低但总利息支出可能增多。"
  },
  "zh-tw": {
    "What is the SAVE plan?": "什麼是 SAVE 就學貸款還款計畫？",
    "The Saving on a Valuable Education (SAVE) plan is the newest income-driven repayment (IDR) plan. It raises the discretionary income shield to 225% of the poverty line, lowers payments to 5% of discretionary income for undergraduate loans, and stops unpaid interest from accumulating.": "SAVE 是最新的所得連動還款計畫，保障額度提高至貧窮線的 225%，大學貸款月付金降至可支配所得的 5%，且未繳清利息不再滾入本金計算。",
    "How is discretionary income calculated for student loans?": "就學貸款的可支配所得如何計算？",
    "Discretionary income is the difference between your Adjusted Gross Income (AGI) and a percentage of the federal poverty guideline for your family size (150% for PAYE/IBR, 225% for SAVE).": "可支配所得為家庭調整後總所得扣除法定貧窮線倍數（SAVE 為 225%）後的淨所得。",
    "How does student loan forgiveness work under IDR plans?": "所得連動還款計畫如何免除剩餘債務？",
    "If you pay under an IDR plan for 20 or 25 years (or as little as 10 years under SAVE for low initial balances), any remaining student debt is forgiven. However, under current tax laws, this forgiven balance may be treated as taxable income, although federal tax on forgiven student loans is temporarily suspended through 2025.": "按時還款滿 20 或 25 年後（SAVE 計畫小額貸款最快僅需 10 年），剩餘債務將全數獲得官方豁免。",
    "Which IDR plan is best for me?": "哪種還款計畫最適合我？",
    "For most borrowers, the SAVE plan offers the lowest monthly payment and the best interest subsidy. However, if your income is very high relative to your debt, plans like PAYE or IBR might be better because they cap your monthly payment at what it would be under the Standard 10-Year Repayment Plan, whereas SAVE has no payment cap.": "對多數人而言，SAVE 計畫月繳最輕鬆且享有完整利息補貼；若收入極高，PAYE 或 IBR 因設有月繳上限，可能更為划算。",
    "Can I switch student loan repayment plans at any time?": "我可以隨時更換就學貸款還款方案嗎？",
    "Yes, you can apply to switch repayment plans for free at studentaid.gov. However, switching plans can sometimes cause outstanding unpaid interest to capitalize (be added to your principal balance), which means you will start paying interest on that interest.": "可以，申貸人可隨時免費申請變更方案，但需注意未繳利息可能被滾入本金。"
  },
  de: {
    "What is the SAVE plan?": "Was ist der einkommensabhängige SAVE-Rückzahlungsplan?",
    "The Saving on a Valuable Education (SAVE) plan is the newest income-driven repayment (IDR) plan. It raises the discretionary income shield to 225% of the poverty line, lowers payments to 5% of discretionary income for undergraduate loans, and stops unpaid interest from accumulating.": "Der SAVE-Plan schützt das Einkommen bis zu 225 % der Armutsgrenze, senkt Raten auf 5-10 % des verfügbaren Einkommens und stoppt das Anwachsen nicht bezahlter Zinsen.",
    "How is discretionary income calculated for student loans?": "Wie wird das frei verfügbare Einkommen berechnet?",
    "Discretionary income is the difference between your Adjusted Gross Income (AGI) and a percentage of the federal poverty guideline for your family size (150% for PAYE/IBR, 225% for SAVE).": "Es ist die Differenz zwischen dem bereinigten Bruttoeinkommen und der geschützten Freibetragsgrenze.",
    "How does student loan forgiveness work under IDR plans?": "Wie funktioniert der Schuldenerlass bei Studienkrediten?",
    "If you pay under an IDR plan for 20 or 25 years (or as little as 10 years under SAVE for low initial balances), any remaining student debt is forgiven. However, under current tax laws, this forgiven balance may be treated as taxable income, although federal tax on forgiven student loans is temporarily suspended through 2025.": "Nach 20 bis 25 Jahren regelmäßiger einkommensabhängiger Zahlungen wird die verbleibende Restschuld vollständig erlassen."
  },
  ja: {
    "What is the SAVE plan?": "所得連動型返済プラン（SAVEプラン）とは何ですか？",
    "The Saving on a Valuable Education (SAVE) plan is the newest income-driven repayment (IDR) plan. It raises the discretionary income shield to 225% of the poverty line, lowers payments to 5% of discretionary income for undergraduate loans, and stops unpaid interest from accumulating.": "卒業後の可処分所得に応じて月々の返済額を調整し、未払い利息の元金組入れを防ぐ最新の公的返済支援制度です。",
    "How is discretionary income calculated for student loans?": "奨学金返済における可処分所得はどのように計算されますか？",
    "Discretionary income is the difference between your Adjusted Gross Income (AGI) and a percentage of the federal poverty guideline for your family size (150% for PAYE/IBR, 225% for SAVE).": "総所得から世帯人数に応じた基礎生活費控除を差し引いた金額を可処分所得と定義します。"
  },
  fr: {
    "What is the SAVE plan?": "Qu'est-ce que le plan de remboursement SAVE ?",
    "The Saving on a Valuable Education (SAVE) plan is the newest income-driven repayment (IDR) plan. It raises the discretionary income shield to 225% of the poverty line, lowers payments to 5% of discretionary income for undergraduate loans, and stops unpaid interest from accumulating.": "C'est un plan indexé sur les revenus qui protège le revenu de base et plafonne les mensualités à 5-10 % du revenu disponible.",
    "How is discretionary income calculated for student loans?": "Comment est calculé le revenu disponible ?",
    "Discretionary income is the difference between your Adjusted Gross Income (AGI) and a percentage of the federal poverty guideline for your family size (150% for PAYE/IBR, 225% for SAVE).": "Il correspond à la différence entre le revenu brut ajusté et le seuil de protection du niveau de vie."
  },
  ko: {
    "What is the SAVE plan?": "소득연계 학자금 상환제도(SAVE 플랜)란 무엇인가요?",
    "The Saving on a Valuable Education (SAVE) plan is the newest income-driven repayment (IDR) plan. It raises the discretionary income shield to 225% of the poverty line, lowers payments to 5% of discretionary income for undergraduate loans, and stops unpaid interest from accumulating.": "소득 인정액을 대폭 보호하고 상환액을 가처분소득의 5% 수준으로 낮춰주며 미납 이자의 복리 증식을 차단하는 제도입니다.",
    "How is discretionary income calculated for student loans?": "학자금 상환 시 가처분 소득은 어떻게 계산되나요?",
    "Discretionary income is the difference between your Adjusted Gross Income (AGI) and a percentage of the federal poverty guideline for your family size (150% for PAYE/IBR, 225% for SAVE).": "조정총소득(AGI)에서 가구원 수에 따른 최저생계비 기준을 차감하여 산정합니다."
  },
  it: {
    "What is the SAVE plan?": "Che cos'è il piano di rimborso indicizzato SAVE?",
    "The Saving on a Valuable Education (SAVE) plan is the newest income-driven repayment (IDR) plan. It raises the discretionary income shield to 225% of the poverty line, lowers payments to 5% of discretionary income for undergraduate loans, and stops unpaid interest from accumulating.": "È un piano che ancora le rate del prestito al reddito reale del laureato, tutelando le spese di sostentamento.",
    "How is discretionary income calculated for student loans?": "Come si calcola il reddito disponibile?",
    "Discretionary income is the difference between your Adjusted Gross Income (AGI) and a percentage of the federal poverty guideline for your family size (150% for PAYE/IBR, 225% for SAVE).": "È la differenza tra il reddito lordo e la soglia di protezione calcolata sul numero dei familiari."
  },
  pt: {
    "What is the SAVE plan?": "O que é o plano de pagamento estudantil SAVE?",
    "The Saving on a Valuable Education (SAVE) plan is the newest income-driven repayment (IDR) plan. It raises the discretionary income shield to 225% of the poverty line, lowers payments to 5% of discretionary income for undergraduate loans, and stops unpaid interest from accumulating.": "É o mais novo modelo de amortização vinculado à renda, protegendo o salário mínimo e reduzindo o valor das parcelas.",
    "How is discretionary income calculated for student loans?": "Como é calculada a renda discricionária?",
    "Discretionary income is the difference between your Adjusted Gross Income (AGI) and a percentage of the federal poverty guideline for your family size (150% for PAYE/IBR, 225% for SAVE).": "É a diferença entre o salário e a faixa de proteção de subsistência familiar."
  },
  ar: {
    "What is the SAVE plan?": "ما هي خطة SAVE لسداد القروض الطلابية؟",
    "The Saving on a Valuable Education (SAVE) plan is the newest income-driven repayment (IDR) plan. It raises the discretionary income shield to 225% of the poverty line, lowers payments to 5% of discretionary income for undergraduate loans, and stops unpaid interest from accumulating.": "أحدث خطة لسداد القروض التعليمية بناءً على الدخل، حيث تحمي الدخل الأساسي وتقلص القسط الشهري مع إيقاف تراكم الفوائد غير المسددة.",
    "How is discretionary income calculated for student loans?": "كيف يُحسب الدخل المتاح للقروض الطلابية؟",
    "Discretionary income is the difference between your Adjusted Gross Income (AGI) and a percentage of the federal poverty guideline for your family size (150% for PAYE/IBR, 225% for SAVE).": "هو الفارق بين إجمالي الدخل الخاضع للضريبة وحد الكفاف المعيشي للأسرة."
  },
  hi: {
    "What is the SAVE plan?": "SAVE छात्र ऋण पुनर्भुगतान योजना क्या है?",
    "The Saving on a Valuable Education (SAVE) plan is the newest income-driven repayment (IDR) plan. It raises the discretionary income shield to 225% of the poverty line, lowers payments to 5% of discretionary income for undergraduate loans, and stops unpaid interest from accumulating.": "यह आय-आधारित नवीनतम ऋण भुगतान योजना है जो बुनियादी जीवन यापन खर्चों की सुरक्षा करती है और मासिक किस्त को केवल 5% रखती है।",
    "How is discretionary income calculated for student loans?": "शिक्षा ऋण के लिए खर्च योग्य आय (Discretionary Income) की गणना कैसे होती है?",
    "Discretionary income is the difference between your Adjusted Gross Income (AGI) and a percentage of the federal poverty guideline for your family size (150% for PAYE/IBR, 225% for SAVE).": "यह आपकी कुल आय और परिवार के न्यूनतम निर्वाह खर्च के बीच का अंतर होती है।"
  },
  ru: {
    "What is the SAVE plan?": "Что такое программа выплат SAVE для образовательных кредитов?",
    "The Saving on a Valuable Education (SAVE) plan is the newest income-driven repayment (IDR) plan. It raises the discretionary income shield to 225% of the poverty line, lowers payments to 5% of discretionary income for undergraduate loans, and stops unpaid interest from accumulating.": "Программа привязки выплат к доходу заемщика, защищающая базовый прожиточный минимум и ограничивающая платеж 5% от свободного дохода.",
    "How is discretionary income calculated for student loans?": "Как рассчитывается свободный располагаемый доход?",
    "Discretionary income is the difference between your Adjusted Gross Income (AGI) and a percentage of the federal poverty guideline for your family size (150% for PAYE/IBR, 225% for SAVE).": "Разница между совокупным доходом заемщика и защищенным порогом прожиточного минимума на семью."
  },
  id: {
    "What is the SAVE plan?": "Apa itu skema cicilan pinjaman pendidikan SAVE?",
    "The Saving on a Valuable Education (SAVE) plan is the newest income-driven repayment (IDR) plan. It raises the discretionary income shield to 225% of the poverty line, lowers payments to 5% of discretionary income for undergraduate loans, and stops unpaid interest from accumulating.": "Skema pembayaran pinjaman berbasis pendapatan terbaru yang melindungi kebutuhan hidup dasar dan membatasi cicilan bulanan hingga 5% saja.",
    "How is discretionary income calculated for student loans?": "Bagaimana penghasilan diskresioner dihitung?",
    "Discretionary income is the difference between your Adjusted Gross Income (AGI) and a percentage of the federal poverty guideline for your family size (150% for PAYE/IBR, 225% for SAVE).": "Selisih antara pendapatan kotor tahunan dengan standar biaya hidup minimum keluarga."
  }
};

// Merge all FAQ batches
const faqBatches = [
  faqsFinance,
  faqsLoansRetirement,
  faqsIntlBatch1,
  faqsIntlBatch2,
  faqsIntlBatch3,
  faqsBatchEsZh,
  faqsBatchEurope,
  faqsBatchAsia,
  faqsBatchRest,
];
for (const b of faqBatches) {
  for (const lang of Object.keys(b) as Lang[]) {
    if (!allFaqs[lang]) {
      allFaqs[lang] = {};
    }
    if (b[lang]) {
      Object.assign(allFaqs[lang], b[lang]);
    }
  }
}

