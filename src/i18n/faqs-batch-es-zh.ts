import type { Lang } from './ui';

export const faqsBatchEsZh: Partial<Record<Lang, Record<string, string>>> = {
  es: {
    // 1. Mortgage
    "How is a mortgage payment calculated?": "¿Cómo se calcula el pago de una hipoteca?",
    "A standard monthly mortgage payment consists of Principal & Interest (P&I), property taxes, homeowners insurance, private mortgage insurance (PMI) if down payment is under 20%, and homeowner association (HOA) fees.": "El pago hipotecario mensual estándar se compone de Capital e Intereses (P&I), impuestos sobre la propiedad, seguro de hogar, seguro hipotecario privado (PMI) si el pago inicial es inferior al 20%, y cuotas de comunidad (HOA).",
    "What is PMI and when do I pay it?": "¿Qué es el PMI y cuándo se paga?",
    "Private Mortgage Insurance (PMI) is a policy that protects the lender if you default. It is typically required on conventional loans if your down payment is less than 20% of the home purchase price.": "El Seguro Hipotecario Privado (PMI) protege al prestamista en caso de impago. Generalmente se exige en préstamos convencionales si la entrada es inferior al 20% del precio de la vivienda.",
    "What does PITI stand for?": "¿Qué significa PITI?",
    "PITI stands for Principal, Interest, Taxes, and Insurance. These are the four basic components that make up a homeowner's monthly housing payment. Together, they reflect the true cost of owning a home on a month-to-month basis.": "PITI significa Capital (Principal), Intereses, Impuestos (Taxes) y Seguros (Insurance). Son los cuatro componentes clave de la cuota mensual de una vivienda.",
    "Is a 15-year mortgage better than a 30-year mortgage?": "¿Es mejor una hipoteca a 15 años que una a 30 años?",
    "A 15-year mortgage typically offers a lower interest rate and allows you to pay off your home twice as fast, saving you tens of thousands of dollars in interest. However, a 30-year mortgage has lower monthly payments, which provides greater cash flow flexibility.": "Una hipoteca a 15 años ofrece un tipo de interés más bajo y amortiza el inmueble el doble de rápido, ahorrando decenas de miles en intereses. Sin embargo, a 30 años la mensualidad es menor, ofreciendo mayor liquidez mes a mes.",
    "How do extra payments affect my mortgage payoff schedule?": "¿Cómo afectan los pagos adicionales al calendario de la hipoteca?",
    "Any extra money you pay towards your mortgage is applied directly to the principal balance. This reduces the remaining loan balance and decreases the amount of interest that accumulates, helping you pay off your mortgage years ahead of schedule.": "Todo pago adicional amortiza directamente el capital principal. Esto reduce el saldo pendiente y los intereses futuros, permitiendo liquidar la hipoteca años antes y ahorrando gran cantidad de dinero.",

    // 2. Loan Calculator
    "How does an amortized loan work?": "¿Cómo funciona un préstamo amortizable?",
    "With an amortized loan, you make equal periodic payments. Early in the loan term, the majority of each payment goes toward interest. Over time, an increasing portion goes toward paying down the principal balance until the debt is fully paid off.": "En un préstamo amortizable realizas pagos periódicos iguales. Al principio, la mayor parte de cada cuota se destina a intereses; con el tiempo, una proporción creciente amortiza capital hasta liquidar la deuda.",
    "What is the difference between fixed-rate and variable-rate loans?": "¿Cuál es la diferencia entre un préstamo a tipo fijo y uno variable?",
    "A fixed-rate loan maintains the exact same interest rate and payment throughout the loan term. A variable-rate loan has an interest rate that adjusts periodically based on benchmark interest rates, which can increase or decrease your payments.": "Un préstamo a tipo fijo mantiene exactamente el mismo interés y cuota durante todo el plazo. En uno variable, el tipo se revisa periódicamente según índices de referencia, haciendo variar la cuota.",
    "Can I pay off my loan early without penalty?": "¿Puedo cancelar mi préstamo anticipadamente sin penalización?",
    "Most consumer loans and conventional mortgages allow prepayment without penalties, but some lenders include a prepayment penalty clause. Always verify your loan agreement terms before making accelerated principal payments.": "Muchos préstamos permiten amortizaciones anticipadas gratuitas, pero algunos contratos bancarios incluyen comisiones por cancelación total o parcial. Revise siempre su contrato.",

    // 3. Debt Payoff
    "What is the Debt Snowball method?": "¿Qué es el método Bola de Nieve?",
    "The Debt Snowball method involves paying off your smallest debt balances first, regardless of interest rates. It builds psychological momentum and motivation through quick wins.": "Consiste en liquidar primero las deudas de menor saldo, sin importar su tipo de interés, fomentando la motivación mediante victorias psicológicas rápidas.",
    "What is the Debt Avalanche method?": "¿Qué es el método Avalancha?",
    "The Debt Avalanche method involves paying off your highest interest rate debts first. Mathematically, this minimizes the total interest you pay and helps you become debt-free faster.": "Consiste en pagar primero las deudas con el tipo de interés más alto. Matemáticamente minimiza los intereses totales pagados y acelera la liberación de deudas.",
    "Which method is better: Debt Snowball or Debt Avalanche?": "¿Cuál es mejor: Bola de Nieve o Avalancha?",
    "Mathematically, the Debt Avalanche method is superior because it minimizes the total interest paid. However, studies show that the Debt Snowball method is often more successful in practice because the psychological momentum helps people stick to their plan.": "Matemáticamente la Avalancha es superior al ahorrar más intereses. No obstante, en la práctica la Bola de Nieve suele tener mayor éxito porque el refuerzo anímico ayuda a mantener el compromiso.",
    "How does the 'extra payment' roll over in these strategies?": "¿Cómo se transfiere el 'pago extra' en estas estrategias?",
    "You continue paying minimums on all debts and add your extra cash to the target debt. Once that target debt is fully paid off, you roll its entire payment into the next debt on your list.": "Pagas las cuotas mínimas en todas las deudas y concentras el excedente en la deuda prioritaria. Al liquidarla, transfieres todo ese dinero a la siguiente deuda de la lista.",
    "Can I do a hybrid of Snowball and Avalanche?": "¿Se puede combinar la Bola de Nieve y la Avalancha?",
    "Yes. Many people pay off one or two small debts first to free up immediate cash flow (Snowball), and then pivot to targeting the remaining debts by highest interest rate (Avalanche).": "Sí. Muchas personas amortizan primero una o dos deudas pequeñas para liberar flujo de caja (Bola de Nieve), y luego atacan las restantes por mayor tipo de interés (Avalancha).",

    // 4. Refinance
    "When should I refinance my loan?": "¿Cuándo conviene refinanciar un préstamo?",
    "It generally makes sense to refinance if you can secure a lower interest rate, reduce your monthly payment, or shorten your term, provided your total interest savings exceed the closing costs.": "Conviene refinanciar si consigues una tasa de interés menor, reduces la cuota mensual o acortas el plazo, siempre que el ahorro total en intereses supere los gastos de cierre.",
    "What closing costs are associated with refinancing?": "¿Qué costes de cierre conlleva la refinanciación?",
    "Refinancing costs typically include application fees, origination fees, appraisal costs, title search and insurance, credit report fees, and recording fees, ranging from 2% to 6% of the loan amount.": "Suelen incluir comisiones de apertura, tasación, gastos de notaría y registro, oscilando habitualmente entre el 2% y el 6% del importe del préstamo.",
    "How do I calculate my refinance break-even point?": "¿Cómo calculo el punto de equilibrio de la refinanciación?",
    "Divide your total refinance closing costs by your monthly payment savings. If closing costs are $3,000 and you save $150 per month, your break-even point is 20 months ($3,000 / $150).": "Divide los costes totales de cierre entre el ahorro mensual obtenido. Si los gastos son 3.000 $ y ahorras 150 $ al mes, tu punto de equilibrio es de 20 meses.",
    "What is a 'no-closing-cost' refinance?": "¿Qué es una refinanciación 'sin gastos de cierre'?",
    "A no-closing-cost refinance means the lender either rolls the closing fees into your new total loan balance or charges a slightly higher interest rate to cover them.": "Significa que la entidad financiera suma dichos gastos al capital financiado o aplica un tipo de interés ligeramente mayor para compensarlos.",
    "Does refinancing lower my monthly payment or total interest?": "¿La refinanciación reduce la cuota mensual o los intereses totales?",
    "It depends on the term. Refinancing to a lower rate with the same or shorter term saves on both. Resetting your term back to 30 years lowers the monthly payment but can increase total lifetime interest.": "Depende del plazo. Si refinancias a un tipo menor manteniendo o acortando el plazo, ahorras en ambos. Si alargas el plazo a 30 años, la cuota baja pero el interés total puede aumentar.",

    // 5. Student Loan
    "What is the SAVE plan?": "¿Qué es el plan SAVE?",
    "The Saving on a Valuable Education (SAVE) plan is an income-driven repayment (IDR) plan that protects discretionary income up to 225% of the poverty line, lowers payments to 5%-10%, and stops unpaid interest from accumulating.": "Es un plan de pago basado en ingresos (IDR) que protege el 225% del umbral de pobreza, reduce las cuotas al 5%-10% del ingreso disponible y frena la acumulación de intereses no pagados.",
    "How is discretionary income calculated for student loans?": "¿Cómo se calcula el ingreso disponible para préstamos estudiantiles?",
    "Discretionary income is the difference between your Adjusted Gross Income (AGI) and a percentage of the federal poverty guideline for your family size (150% for PAYE/IBR, 225% for SAVE).": "Es la diferencia entre el Ingreso Bruto Ajustado (AGI) y un porcentaje del umbral federal de pobreza fijado para el tamaño de su familia.",
    "How does student loan forgiveness work under IDR plans?": "¿Cómo funciona la condonación de préstamos estudiantiles bajo planes IDR?",
    "If you pay under an IDR plan for 20 or 25 years (or 10 years under SAVE for low initial balances), any remaining student debt is forgiven.": "Si abonas tus cuotas bajo un plan IDR durante 20 o 25 años (o 10 años en SAVE para importes iniciales bajos), el saldo restante queda condonado por completo.",
    "Which IDR plan is best for me?": "¿Cuál es el mejor plan IDR para mí?",
    "For most borrowers, the SAVE plan offers the lowest monthly payment and the best interest subsidy. Borrowers with very high incomes relative to debt may prefer PAYE or IBR due to payment caps.": "Para la mayoría, el plan SAVE brinda la cuota más reducida y el mejor subsidio de intereses. Quienes perciben ingresos muy altos pueden preferir PAYE o IBR por tener topes de pago.",
    "Can I switch student loan repayment plans at any time?": "¿Puedo cambiar de plan de amortización en cualquier momento?",
    "Yes, you can apply to switch repayment plans for free at studentaid.gov. However, switching plans can sometimes cause unpaid interest to capitalize.": "Sí, puede solicitar el cambio de forma gratuita en studentaid.gov. No obstante, cambiar de plan a veces puede provocar que los intereses pendientes se capitalicen.",

    // 6. DTI
    "What is the 28/36 rule?": "¿Qué es la regla 28/36?",
    "The 28/36 rule is a standard mortgage underwriting guideline stating that housing costs should not exceed 28% of gross monthly income, and total debt payments should not exceed 36%.": "Es una guía bancaria que estipula que los gastos de vivienda no deben exceder el 28% de los ingresos brutos mensuales, y el pago total de deudas no debe sobrepasar el 36%.",
    "How does DTI affect my mortgage application?": "¿Cómo influye el DTI en la solicitud de hipoteca?",
    "Lenders use DTI to measure your ability to manage monthly payments. Lower DTIs below 36% receive the most favorable mortgage terms and lowest interest rates.": "Las entidades utilizan el ratio deuda-ingreso para valorar el riesgo. Un DTI inferior al 36% obtiene las mejores condiciones y tipos de interés más competitivos.",
    "What is the difference between front-end and back-end DTI?": "¿Cuál es la diferencia entre el DTI inicial y el DTI total?",
    "Front-end DTI only includes housing expenses (mortgage, property tax, insurance, HOA). Back-end DTI includes housing plus all recurring debts like credit cards, auto loans, and student loans.": "El DTI inicial contempla únicamente la vivienda (hipoteca, impuestos, seguros, comunidad). El DTI total añade todos los créditos recurrentes como tarjetas, coche y estudios.",
    "What is the maximum DTI ratio lenders will accept?": "¿Cuál es el DTI máximo que aceptan las entidades bancarias?",
    "Conventional mortgages typically prefer back-end DTIs of 36% to 43%. Government-backed loans like FHA and VA may allow DTIs up to 50% with strong compensating factors.": "En hipotecas estándar se suele exigir un DTI total de hasta el 36% o 43%. Con buen perfil de solvencia y ahorros, ciertos programas permiten hasta el 50%.",
    "How can I lower my Debt-to-Income ratio?": "¿Cómo puedo reducir mi ratio Deuda-Ingreso?",
    "You can lower your DTI by increasing gross income or paying off smaller debts completely to eliminate their recurring monthly minimum payments.": "Puede rebajarlo incrementando sus ingresos brutos o amortizando préstamos pequeños para eliminar cuotas mensuales del cómputo.",

    // 7. APR
    "What is the difference between interest rate and APR?": "¿Qué diferencia hay entre el tipo de interés y la TAE / APR?",
    "The interest rate is the nominal cost of borrowing the principal balance. The Annual Percentage Rate (APR) reflects the total annual cost of the loan including points, broker fees, and origination charges.": "El tipo de interés es el coste nominal del capital prestado. La Tasa Anual Equivalente (TAE / APR) refleja el coste real anual integrando comisiones bancarias y gastos de apertura.",
    "Why is APR higher than the advertised interest rate?": "¿Por qué la TAE suele ser mayor que el tipo de interés nominal anunciado?",
    "APR is higher because it amortizes all upfront lender fees, discount points, and closing costs into the effective yearly rate, revealing the true cost of credit.": "Es mayor porque prorratea todos los gastos iniciales, comisiones y costes de formalización en una tasa porcentual anual efectiva.",
    "Is APR useful for comparing different loan offers?": "¿Es útil la TAE para comparar distintas ofertas de préstamo?",
    "Yes, APR is the best metric for comparing loan offers with different fee structures, provided you plan to keep the loan for its full term.": "Sí, la TAE / APR es el mejor indicador para comparar ofertas financieras con distintas comisiones, siempre que mantenga el préstamo durante el plazo acordado.",

    // 8. Rent vs Buy
    "How long do I need to stay in a home for buying to beat renting?": "¿Cuánto tiempo debo vivir en una casa para que comprar sea mejor que alquilar?",
    "Because upfront closing costs, moving fees, and commissions are substantial, homeowners usually need to stay in a property for 4 to 7 years for buying to financially outperform renting.": "Dado que los gastos de escrituración e impuestos iniciales son elevados, suele requerirse habitar la vivienda entre 4 y 7 años para que comprar supere al alquiler.",
    "What hidden costs of homeownership should renters consider?": "¿Qué gastos ocultos de tener vivienda propia debe considerar un inquilino?",
    "Homeowners must pay property taxes, homeowners insurance, maintenance and repairs (typically 1-2% of home value annually), HOA dues, and potential capital improvement costs.": "Se deben asumir impuestos sobre bienes inmuebles, seguros, mantenimiento (un 1-2% del valor anual), cuotas de comunidad y derramas extraordinarias.",
    "What is the opportunity cost of buying a home?": "¿Cuál es el coste de oportunidad al comprar una vivienda?",
    "The money spent on down payment, closing costs, and ongoing property maintenance could otherwise remain invested in liquid assets like index funds that compound over time.": "El capital desembolsado en la entrada y gastos iniciales deja de estar invertido en activos líquidos como fondos indexados, que generan interés compuesto.",

    // 9. Home Affordability
    "How much income should I spend on a mortgage?": "¿Qué porcentaje de mis ingresos debo destinar a la hipoteca?",
    "Most financial experts recommend spending no more than 25% to 28% of your gross monthly income on housing costs (the front-end DTI guideline).": "Los expertos recomiendan no sobrepasar el 25% o 28% de los ingresos brutos mensuales en gastos de vivienda (cuota hipotecaria, impuestos y seguro).",
    "How does down payment size impact affordability?": "¿Cómo repercute el importe de la entrada en la capacidad de compra?",
    "A larger down payment reduces your loan amount, eliminates Private Mortgage Insurance (PMI) if you put down 20%, and lowers your monthly mortgage payment.": "Una mayor entrada reduce el importe a financiar, elimina el seguro hipotecario privado (con el 20% o más) y abarata la cuota mensual.",
    "How do interest rates affect purchasing power?": "¿Cómo afectan los tipos de interés a mi poder adquisitivo inmobiliario?",
    "Every 1% increase in mortgage interest rates reduces your home purchasing power by roughly 10% for the same monthly payment budget.": "Cada incremento del 1% en el tipo de interés hipotecario reduce su capacidad de compra en torno a un 10% para la misma mensualidad.",

    // 10. Auto Loan
    "What is the 20/4/10 rule for buying a car?": "¿En qué consiste la regla 20/4/10 para comprar un coche?",
    "The 20/4/10 rule recommends putting down at least 20%, financing for no longer than 4 years (48 months), and keeping total vehicle expenses under 10% of gross monthly income.": "Aconseja dar al menos el 20% de entrada, financiar a un máximo de 4 años (48 meses) y que los gastos del vehículo no superen el 10% de sus ingresos brutos.",
    "Is a longer auto loan term better?": "¿Conviene alargar el plazo del préstamo de coche a 6 o 7 años?",
    "Longer terms (like 72 or 84 months) lower your monthly payment, but you pay substantially more total interest and risk becoming 'underwater' (owing more than the vehicle is worth).": "Plazos largos bajan la cuota mensual, pero multiplican los intereses totales y provocan que el valor residual del coche sea inferior a la deuda restante.",
    "How does vehicle depreciation affect my loan?": "¿Cómo influye la depreciación del vehículo en el préstamo?",
    "New cars depreciate rapidly (often losing 20% in the first year). Without an adequate down payment, you risk owing more on your loan than the car's market value.": "Los vehículos nuevos pierden en torno a un 20% de su valor el primer año; sin una buena entrada inicial, la deuda puede superar el valor real de mercado del coche.",

    // 11. Credit Card Payoff
    "Why does paying only the minimum take so long?": "¿Por qué pagar solo el mínimo retrasa tanto la liquidación de la tarjeta?",
    "Credit card minimum payments are often set around 1% to 2% of the balance plus accrued interest. As the balance slowly drops, the required minimum drops, extending payoff times to decades.": "Los pagos mínimos cubren apenas los intereses devengados y un 1% o 2% del saldo, prolongando la deuda durante décadas.",
    "How much faster can I pay off credit cards by paying extra?": "¿Cuánto acelero la amortización aportando pagos extraordinarios?",
    "Paying even $50 or $100 above the minimum payment can cut your payoff timeline by several years and save thousands of dollars in compounding interest charges.": "Añadir 50 $ o 100 $ adicionales sobre el mínimo recorta años de endeudamiento y ahorra miles de dólares en intereses acumulados.",
    "Should I use a balance transfer card to pay off debt?": "¿Conviene usar una tarjeta con transferencia de saldo al 0% TAE?",
    "A 0% APR balance transfer credit card can save significant interest if you pay off the full balance during the promotional period (typically 12-21 months) and factor in the 3%-5% transfer fee.": "Puede ser muy ventajosa para ahorrar intereses si cancela la totalidad dentro del periodo promocional sin intereses (12-21 meses), asumiendo la comisión de transferencia (3%-5%).",

    // 12. Retirement Planner
    "What is the 4% rule in retirement planning?": "¿Qué es la regla del 4% en la jubilación?",
    "The 4% rule suggests that withdrawing 4% of your retirement portfolio in the first year, adjusted for inflation annually thereafter, provides a high probability that your nest egg will last at least 30 years.": "Establece que retirar un 4% del patrimonio el primer año, ajustándolo anualmente por inflación, ofrece una altísima probabilidad de que los fondos duren al menos 30 años.",
    "How much money do I need to retire comfortably?": "¿Cuánto dinero necesito para jubilarme con tranquilidad?",
    "A common benchmark is accumulating 25 times your anticipated annual retirement expenses, or replacing 70% to 80% of your pre-retirement income.": "La referencia más extendida es acumular 25 veces sus gastos anuales previstos de jubilación, o asegurar entre un 70% y un 80% de sus ingresos previos.",
    "How does inflation impact retirement spending?": "¿Cómo afecta la inflación a los gastos en la jubilación?",
    "Inflation steadily reduces the purchasing power of your savings. At a 3% inflation rate, everyday living expenses double roughly every 24 years, requiring growing investment portfolios.": "La inflación deteriora el poder adquisitivo; con una tasa del 3%, el coste de la vida se duplica cada 24 años, lo que exige invertir en activos de crecimiento.",

    // 13. 401(k)
    "What is an employer 401(k) match?": "¿Qué es la aportación complementaria de la empresa (Match)?",
    "An employer match is money your employer contributes to your 401(k) account based on your own contributions (e.g. matching 50% of contributions up to 6% of your salary). It is effectively an instant return on your savings.": "Es una contribución que el empleador abona a su plan en función de sus propias aportaciones (ej. 50% hasta el 6% del salario). Supone una rentabilidad directa e inmediata.",
    "What are the 401(k) contribution limits for 2024?": "¿Cuáles son los límites de aportación para 2024?",
    "For 2024, the employee contribution limit is $23,000 for those under 50. Individuals aged 50 and older can contribute an additional $7,500 catch-up contribution for a total of $30,500.": "El límite legal de aportación para menores de 50 años es de 23.000 $. A partir de 50 años se permite una aportación adicional de 7.500 $ (total 30.500 $).",
    "What is the difference between Traditional 401(k) and Roth 401(k)?": "¿Cuál es la diferencia entre un plan Tradicional y uno Roth?",
    "Traditional 401(k) contributions are pre-tax and reduce your current taxable income, with withdrawals taxed in retirement. Roth 401(k) contributions are post-tax, but all qualified growth and withdrawals are completely tax-free.": "El plan Tradicional reduce los impuestos hoy y tributa al rescatarlo en la jubilación. El Roth se aporta con dinero neto, pero sus plusvalías y retiradas futuras son 100% libres de impuestos.",

    // 14. IRA Comparison
    "What is the key difference between a Roth and Traditional IRA?": "¿Cuál es la diferencia esencial entre una cuenta IRA Roth y una Tradicional?",
    "Traditional IRA contributions are generally made pre-tax (reducing your current taxable income), but withdrawals in retirement are taxed as ordinary income. Roth IRA contributions are made with post-tax dollars; growth and withdrawals in retirement are completely tax-free.": "La Tradicional permite desgravar las aportaciones hoy y tributar en la jubilación. La Roth utiliza capital neto y garantiza que el crecimiento y rescate queden exentos de impuestos.",
    "Which IRA plan is better for me?": "¿Qué plan IRA me conviene más?",
    "If you expect your tax bracket to be higher in retirement than it is today, a Roth IRA is better. If you expect your tax bracket in retirement to be lower, a Traditional IRA is better.": "Si espera tributar a un tipo superior en su jubilación, elija Roth. Si prevé estar en un tramo impositivo más bajo al jubilarse, elija la Tradicional.",
    "What are the contribution limits for IRAs in 2024?": "¿Cuáles son los límites de aportación a cuentas IRA?",
    "For 2024, the annual contribution limit for Traditional and Roth IRAs is $7,000 for individuals under age 50, and $8,000 for individuals age 50 or older.": "El límite anual es de 7.000 $ para menores de 50 años y de 8.000 $ para personas de 50 años o más.",
    "Are there income limits for contributing to Traditional and Roth IRAs?": "¿Existen límites de ingresos para poder aportar a las cuentas IRA?",
    "Roth IRAs have income phase-out ranges that restrict high earners. Anyone with earned income can contribute to a Traditional IRA, but tax deductibility may be limited by income and workplace retirement coverage.": "Las cuentas Roth tienen topes de ingresos que restringen a rentas altas. A la Tradicional puede aportar cualquiera, aunque la deducibilidad fiscal depende de los ingresos.",
    "Can I withdraw money from my IRA before age 59½ without penalty?": "¿Puedo retirar dinero antes de los 59 años y medio sin penalización?",
    "Roth IRA original contributions can be withdrawn at any time penalty-free. Withdrawing investment earnings early or withdrawing Traditional IRA funds before 59½ usually incurs income taxes and a 10% penalty.": "En la Roth puede retirar sus aportaciones originales en cualquier momento sin recargo. Retirar rendimientos antes de los 59 años y medio suele acarrear impuestos y un 10% de penalización.",

    // 15. Compound Interest
    "What is compound interest?": "¿Qué es el interés compuesto?",
    "Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods. It causes your wealth to grow exponentially over time.": "Es el interés calculado sobre el capital inicial más los intereses acumulados de periodos anteriores, provocando un crecimiento exponencial del patrimonio.",
    "What is the Rule of 72?": "¿Qué es la regla del 72?",
    "The Rule of 72 is a quick mental formula to estimate how many years it takes to double your money. Divide 72 by your annual interest rate (e.g. at 8%, your money doubles in about 9 years).": "Es una fórmula rápida para estimar en cuántos años se duplica su dinero: divida 72 entre la tasa de interés anual (al 8%, se duplica en unos 9 años).",
    "How does compounding frequency affect total returns?": "¿Cómo afecta la frecuencia de capitalización al rendimiento final?",
    "The more frequently interest compounds (annually, monthly, daily), the higher your effective annual yield (APY) will be, as interest starts earning interest sooner.": "A mayor frecuencia de capitalización (mensual, diaria), mayor rendimiento efectivo anual (APY) se obtiene, al reinvertirse los beneficios con mayor celeridad.",

    // 16. TVM
    "What is the Time Value of Money (TVM)?": "¿Qué es el valor temporal del dinero (TVM)?",
    "The Time Value of Money principle states that a dollar today is worth more than a dollar in the future because today's dollar can be invested and earn interest.": "Es el principio financiero que postula que un dólar hoy vale más que un dólar en el futuro por su capacidad intrínseca de generar rendimientos invertido.",
    "What are the core components of TVM calculations?": "¿Cuáles son las variables clave del modelo TVM?",
    "The five core variables are Present Value (PV), Future Value (FV), Interest Rate per Period (Rate), Total Number of Periods (Nper), and Periodic Payment (PMT).": "Las cinco magnitudes son: Valor Actual (PV), Valor Futuro (FV), Tasa de Interés (Rate), Número de Periodos (Nper) y Cuota Periódica (PMT).",
    "What is the difference between an ordinary annuity and annuity due?": "¿Cuál es la diferencia entre una renta ordinaria y una renta anticipada?",
    "In an ordinary annuity, payments occur at the end of each period. In an annuity due, payments occur at the beginning of each period, earning an extra compounding cycle of interest.": "En la ordinaria los pagos se realizan al final de cada periodo. En la anticipada se hacen al inicio, devengando un ciclo adicional de intereses compuestos.",

    // 17. ROI
    "How is Return on Investment (ROI) calculated?": "¿Cómo se calcula el retorno sobre la inversión (ROI)?",
    "ROI is calculated by subtracting the initial cost of the investment from the final value, and dividing that net gain by the initial cost: ROI = (Net Profit / Cost of Investment) × 100%.": "Se calcula restando el coste inicial al valor final y dividiendo la ganancia neta entre el coste inicial: ROI = (Beneficio Neto / Coste de Inversión) × 100%.",
    "What is the difference between simple ROI and annualized ROI?": "¿Qué diferencia hay entre el ROI simple y el ROI anualizado?",
    "Simple ROI measures total percentage return regardless of duration. Annualized ROI (CAGR) standardizes the return into a per-year geometric rate, enabling fair comparison between investments held for different lengths of time.": "El ROI simple mide la rentabilidad porcentual global; el anualizado (CAGR) la estandariza a una tasa geométrica por año para poder comparar activos de distinta duración.",
    "What is considered a good ROI?": "¿Qué porcentaje se considera un buen ROI?",
    "Historically, the broad stock market (S&P 500) has returned an average of 7% to 10% annually before inflation. Investments with higher expected returns generally involve higher risk of capital loss.": "Históricamente, la renta variable diversificada (S&P 500) ha generado una media anual del 7% al 10% antes de inflación. Rendimientos mayores implican asumir mayor volatilidad y riesgo.",

    // 18. Savings Goal
    "How do I calculate how much to save monthly for a goal?": "¿Cómo calculo cuánto ahorrar mensualmente para una meta?",
    "You divide your target savings amount by the number of months until your deadline, while factoring in the compounding interest earned on your growing balance.": "Divida el capital objetivo entre los meses disponibles, descontando los intereses compuestos que irá generando el saldo acumulado.",
    "Should I keep savings goal funds in high-yield savings or stocks?": "¿Debo mantener mis ahorros para metas a corto plazo en cuentas remuneradas o en bolsa?",
    "For goals under 3 to 5 years (like a car or home down payment), keep funds in safe, liquid instruments like High-Yield Savings Accounts (HYSA) or CDs. For goals 5+ years away, a diversified investment portfolio may be suitable.": "Para metas a menos de 3 o 5 años (coche, entrada de vivienda), recurra a cuentas remuneradas o depósitos seguros. Para horizontes superiores a 5 años, una cartera de inversión es apropiada.",
    "How can I stay on track with my savings goals?": "¿Cómo ser constante y alcanzar los objetivos de ahorro?",
    "Automate recurring monthly transfers into a dedicated savings account immediately after your paycheck arrives (the 'pay yourself first' strategy).": "Automatice transferencias mensuales a una cuenta separada nada más cobrar la nómina (estrategia de 'pagarse a uno mismo primero').",

    // 19. Stock Return
    "How do I calculate stock returns?": "¿Cómo se calcula la rentabilidad de las acciones?",
    "Total stock return equals capital gains (ending price minus purchase price) plus any dividends received, divided by the original purchase cost.": "El rendimiento total equivale a las plusvalías (precio final menos precio de compra) más los dividendos percibidos, dividido entre el coste inicial de compra.",
    "What is CAGR in stock returns?": "¿Qué es la tasa CAGR en bolsa?",
    "Compound Annual Growth Rate (CAGR) measures the geometric mean annual return of a stock over multiple years, smoothing out annual market fluctuations.": "La Tasa de Crecimiento Anual Compuesto (CAGR) mide el rendimiento geométrico medio por año suavizando la volatilidad entre ejercicios.",
    "What is the difference between simple return and annualized return?": "¿Qué diferencia existe entre el rendimiento simple y el anualizado?",
    "Simple return measures absolute percentage gain over the entire holding period, while annualized return shows the steady annual rate required to achieve that result.": "El rendimiento simple expresa el beneficio porcentual de todo el periodo, mientras que el anualizado indica el ritmo de crecimiento anual constante equivalente.",

    // 20. CAPM
    "What is the Capital Asset Pricing Model (CAPM)?": "¿Qué es el modelo de valoración de activos financieros (CAPM)?",
    "CAPM calculates an asset's expected return based on its risk relative to the overall market, using the formula: Expected Return = Risk-Free Rate + Beta × (Market Return - Risk-Free Rate).": "Calcula el rendimiento esperado de un activo según su riesgo sistemático: Rentabilidad Esperada = Tasa Libre de Riesgo + Beta × (Rentabilidad de Mercado - Tasa Libre de Riesgo).",
    "What does Asset Beta (β) represent?": "¿Qué mide la Beta (β) de un activo?",
    "Beta measures an asset's volatility compared to the broader market. A beta of 1.0 indicates market-level volatility; above 1.0 indicates higher volatility, and below 1.0 indicates lower volatility.": "Mide la sensibilidad de un activo frente al mercado. Beta = 1 replica el mercado; Beta > 1 implica mayor volatilidad y riesgo; Beta < 1 menor volatilidad.",
    "What is the Risk-Free Rate?": "¿Qué es la tasa libre de riesgo?",
    "The risk-free rate is the theoretical rate of return of an investment with zero risk of default, typically represented by long-term government bond yields (like 10-year US Treasuries).": "Es el rendimiento de un activo con riesgo de impago nulo, habitualmente representado por la rentabilidad de los bonos soberanos a 10 años de máxima calificación.",
    "What is the Market Risk Premium?": "¿Qué es la prima de riesgo de mercado?",
    "The market risk premium is the additional return investors demand for choosing risky market equities over risk-free government securities.": "Es la rentabilidad adicional que exigen los inversores por asumir el riesgo de invertir en bolsa en lugar de activos libres de riesgo.",

    // 21. Dividend
    "What is dividend yield versus yield on cost?": "¿Qué diferencia hay entre el Dividend Yield y el Yield on Cost?",
    "Dividend yield is the annual dividend divided by the current stock price. Yield on cost is the annual dividend divided by your original purchase price, which increases as companies raise their dividends over time.": "El Dividend Yield divide el dividendo entre la cotización actual. El Yield on Cost lo divide entre el precio original de compra, creciendo conforme la empresa incrementa dividendos.",
    "What is a Dividend Reinvestment Plan (DRIP)?": "¿Qué es un plan de reinversión de dividendos (DRIP)?",
    "A DRIP automatically uses your cash dividend payments to purchase additional shares or fractional shares of the stock, compounding your share count and future payouts without commission fees.": "Es un mecanismo que utiliza automáticamente los dividendos cobrados para comprar más acciones o fracciones de la misma empresa, acelerando el interés compuesto.",
    "Are dividend payments guaranteed?": "¿Están garantizados los dividendos de las empresas?",
    "No, company boards can reduce, suspend, or eliminate dividend payouts at any time depending on company profitability and economic conditions.": "No, el consejo de administración puede recortar, suspender o cancelar los dividendos en función de los resultados del negocio y del ciclo económico.",

    // 22. Inflation
    "What is inflation?": "¿Qué es la inflación?",
    "Inflation is the general rise in prices for goods and services over time, resulting in a decline in the purchasing power of money.": "Es el aumento generalizado y sostenido en los precios de bienes y servicios, lo que disminuye progresivamente el poder adquisitivo del dinero.",
    "How does inflation affect my savings?": "¿Cómo deteriora la inflación los ahorros?",
    "Cash sitting in zero-interest accounts loses purchasing power each year. If inflation is 3%, $100 today will only buy about $97 worth of goods next year.": "El dinero en efectivo o en cuentas sin remuneración pierde valor. Con una inflación del 3%, 100 $ de hoy comprarán bienes equivalentes a 97 $ el próximo año.",
    "How is inflation officially measured?": "¿Cómo se mide oficialmente la inflación?",
    "Inflation is primarily measured using the Consumer Price Index (CPI), which tracks price changes across a standard market basket of consumer goods and services.": "Se mide principalmente mediante el Índice de Precios al Consumo (IPC), que monitoriza la cesta de la compra representativa de las familias.",
    "What is the historical average inflation rate?": "¿Cuál ha sido la inflación histórica promedio?",
    "In the United States, inflation has historically averaged between 2.5% and 3.2% per year over long multi-decade horizons.": "Históricamente, en las economías desarrolladas la inflación media ha oscilado entre el 2,5% y el 3,2% anual a largo plazo.",
    "How can I protect my money from losing value to inflation?": "¿Cómo proteger el patrimonio frente a la pérdida de valor por inflación?",
    "Investing in assets whose earnings outpace inflation—such as diversified equities, Treasury Inflation-Protected Securities (TIPS), real estate, and inflation-indexed bonds.": "Invirtiendo en activos con rendimientos superiores a la inflación: renta variable global, bonos indexados a la inflación (TIPS) e inmuebles.",

    // 23. Paycheck
    "What is FICA tax?": "¿Qué son los impuestos FICA / seguridad social?",
    "FICA is a federal payroll tax that funds Social Security (6.2% on wages up to the wage base limit) and Medicare (1.45% plus an additional 0.9% on high earners).": "Son cotizaciones de nómina destinadas a financiar la pensión de jubilación pública y la cobertura médica pública de salud.",
    "What is the difference between pre-tax and post-tax deductions?": "¿Qué diferencia hay entre deducciones antes y después de impuestos?",
    "Pre-tax deductions (like 401k and health insurance) reduce your taxable gross income before taxes are computed. Post-tax deductions (like Roth contributions or wage garnishments) are taken after taxes.": "Las deducciones antes de impuestos (planes de pensiones, seguro médico) minoran la base imponible; las posteriores se retienen tras liquidar el impuesto.",
    "What is the difference between gross pay and net pay?": "¿Cuál es la diferencia entre sueldo bruto y sueldo neto?",
    "Gross pay is the total amount earned before any taxes or deductions. Net pay (take-home pay) is the actual cash deposited into your bank account after all deductions.": "El sueldo bruto es la retribución total pactada; el sueldo neto es la cantidad líquida real que ingresa en su cuenta bancaria tras retenciones fiscales.",
    "How does my W-4 filing status affect my paycheck?": "¿Cómo influyen las retenciones en mi nómina?",
    "Your W-4 form informs your employer how much federal income tax to withhold each pay period based on your filing status, dependents, and other income.": "Determina qué porcentaje de IRPF retiene su empleador en cada paga según su estado civil, personas a cargo y tramo de ingresos.",
    "Why do state and local taxes vary so much?": "¿Por qué varían los impuestos regionales y locales?",
    "State income tax rates range from 0% (in states like Texas, Florida, and Washington) to over 13% in high-tax states, while some cities also impose local municipal income taxes.": "Cada región o autonomía aplica sus propios tramos impositivos sobre la renta, existiendo zonas con gravámenes muy reducidos y otras con tipos superiores.",

    // 24. Net Worth
    "What is net worth?": "¿Qué es el patrimonio neto?",
    "Net worth is the total market value of everything you own (assets) minus everything you owe to creditors (liabilities).": "Es el valor de mercado de todos sus bienes y derechos (activos) menos el conjunto de sus deudas y obligaciones financieras (pasivos).",
    "How often should I calculate my net worth?": "¿Con qué frecuencia se debe calcular el patrimonio neto?",
    "Reviewing your net worth quarterly or semi-annually gives you a clear high-level view of your financial health without obsessing over daily market swings.": "Revisarlo de forma trimestral o semestral brinda una visión estratégica de su salud financiera sin verse afectado por el ruido diario de los mercados.",
    "What counts as an asset vs. a liability?": "¿Qué se considera un activo y qué un pasivo?",
    "Assets include bank balances, investment accounts, home equity, and retirement funds. Liabilities include mortgages, student loans, car loans, and credit card debt.": "Activos son cuentas corrientes, carteras de inversión, inmuebles y fondos de pensiones. Pasivos son hipotecas, préstamos personales y deudas en tarjetas.",
    "Should I include my house and mortgage in my net worth?": "¿Debo incluir mi vivienda habitual y la hipoteca en mi patrimonio neto?",
    "Yes, you include the current fair market value of the home under assets and the remaining mortgage balance under liabilities. The difference is your home equity.": "Sí, imputando el valor razonable actual de la vivienda como activo y la deuda hipotecaria pendiente como pasivo; la diferencia es su patrimonio neto inmobiliario.",
    "What does it mean to have a negative net worth?": "¿Qué significa tener un patrimonio neto negativo?",
    "A negative net worth means your total debts exceed your total assets. This is common for young adults and recent graduates with student loans.": "Significa que las deudas superan el valor total de los bienes. Es una situación habitual en graduados recientes o al inicio de la vida laboral.",

    // 25. Emergency Fund
    "How much emergency fund is recommended?": "¿Cuánto dinero se recomienda tener en el fondo de emergencia?",
    "Most financial planners recommend saving 3 to 6 months of essential living expenses, or 9 to 12 months for freelancers or single-income households.": "Los asesores financieros recomiendan entre 3 y 6 meses de gastos fijos básicos, elevándose a 9 o 12 meses en profesionales autónomos o familias con un único sueldo.",
    "What expenses should be included in an emergency fund budget?": "¿Qué gastos deben incluirse al presupuestar el fondo de emergencia?",
    "Include only non-negotiable living costs: housing (rent/mortgage), utilities, groceries, basic transportation, minimum debt payments, and healthcare insurance.": "Únicamente costes imprescindibles de subsistencia: hipoteca/alquiler, suministros, alimentación básica, seguros y cuotas mínimas de deuda.",
    "Where should I keep my emergency fund?": "¿Dónde se debe depositar el fondo de emergencia?",
    "In a dedicated High-Yield Savings Account (HYSA) or money market account where it is FDIC-insured, earns interest, and can be accessed immediately without risk.": "En cuentas remuneradas seguras o fondos monetarios con total liquidez, garantizados y sin riesgo de pérdida de capital.",
    "Should I pay off debt or build an emergency fund first?": "¿Es mejor liquidar deudas o crear el fondo de emergencia primero?",
    "Build a starter emergency fund of 1 month of expenses or $1,000 to $2,000 first, then aggressively pay off high-interest consumer debt before expanding to 3-6 months.": "Cree primero un fondo inicial de emergencia de 1 mes de gastos (o 1.000-2.000 $), amortice luego las deudas de alto interés y finalmente amplíe el fondo a 3-6 meses.",
    "When is it appropriate to use emergency fund savings?": "¿Cuándo está justificado recurrir al fondo de emergencia?",
    "Use it only for genuine, unexpected emergencies: sudden medical bills, unexpected car repairs, or living expenses following job loss.": "Únicamente ante emergencias imprevistas y sobrevenidas: gastos médicos urgentes, reparaciones indispensables del vehículo o desempleo.",

    // 26. Fee Impact
    "What is an expense ratio?": "¿Qué es el ratio de gastos (Expense Ratio)?",
    "An expense ratio is the annual percentage fee charged by mutual funds and ETFs to cover fund management, administrative expenses, and operating costs.": "Es el porcentaje anual que deducen los fondos de inversión y ETFs para sufragar su gestión, custodia y costes operativos.",
    "How do fees compound over time?": "¿Cómo se multiplican las comisiones en el tiempo?",
    "Fees are deducted annually from your total assets, meaning you lose both the fee money and all future compounding returns that money would have earned.": "Las comisiones se descuentan anualmente del capital total, provocando que se pierda tanto el dinero de la comisión como el interés compuesto que habría generado en décadas.",
    "What is a good expense ratio for an index fund?": "¿Cuál es un buen ratio de gastos en un fondo indexado?",
    "Low-cost index funds and ETFs typically have expense ratios between 0.02% and 0.10%, whereas actively managed mutual funds often charge 0.60% to 1.50% or more.": "Los fondos indexados y ETFs competitivos cobran entre el 0,02% y el 0,10%, mientras que los fondos tradicionales de gestión activa suelen aplicar entre el 0,60% y el 1,50% o más.",
    "What other investment fees should I look out for?": "¿De qué otras comisiones de inversión debo cuidarme?",
    "Watch out for advisory fees (AUM fees of 1%), front-end or back-end sales loads, trading commissions, account maintenance fees, and custodial charges.": "Comisiones por asesoramiento (1% sobre patrimonio), comisiones de suscripción o reembolso, corretaje por compraventa y mantenimiento de cuenta.",
    "How much can a 1% fee difference affect my retirement savings?": "¿Cuánto merman mis ahorros para la jubilación una comisión del 1%?",
    "A 1% annual fee difference can erode 25% to 30% of your total ending portfolio wealth over a 30-year investment horizon.": "Una diferencia del 1% en comisiones anuales puede llegar a devorar entre un 25% y un 30% del patrimonio acumulado final tras 30 años de inversión.",

    // 27. College Savings
    "What is a 529 plan?": "¿Qué es un plan de ahorro universitario 529?",
    "A 529 plan is a tax-advantaged savings and investment plan designed to encourage saving for future higher education expenses with tax-free growth and qualified withdrawals.": "Es un plan de ahorro con beneficios fiscales diseñado para financiar la educación superior con plusvalías y retiradas exentas de tributación.",
    "How fast do college costs increase?": "¿A qué ritmo se encarecen los costes de la universidad?",
    "Historically, higher education tuition and fees have increased at an annual rate of 4% to 6%, outpacing general consumer inflation.": "Históricamente, las matrículas y gastos universitarios han crecido a un ritmo del 4% al 6% anual, superando a la inflación general.",
    "What happens to 529 funds if my child does not go to college?": "¿Qué ocurre con los fondos si mi hijo decide no ir a la universidad?",
    "You can change the beneficiary to another qualifying family member, use up to $10,000 for student loan repayment, or roll over up to $35,000 into a Roth IRA under SECURE 2.0 rules.": "Puede transferir el beneficiario a otro familiar, amortizar hasta 10.000 $ en préstamos de estudios o traspasar hasta 35.000 $ a una cuenta Roth IRA.",
    "Can I use a 529 plan for trade schools or K-12 tuition?": "¿Sirve el plan para escuelas de oficios o colegios privados?",
    "Yes, qualified distributions can cover accredited trade schools, vocational programs, apprenticeships, and up to $10,000 per year for K-12 private school tuition.": "Sí, cubre escuelas de formación profesional y hasta 10.000 $ al año en matrícula de educación primaria o secundaria.",
    "How does a 529 plan impact financial aid eligibility?": "¿Cómo afecta el plan 529 a las becas y ayudas estudiantiles?",
    "Parent-owned 529 plans are assessed as parental assets on the FAFSA at a maximum rate of 5.64%, having minimal negative impact on financial aid eligibility.": "Si está a nombre de los padres, solo computa hasta un máximo del 5,64% como patrimonio, teniendo un impacto mínimo sobre la concesión de becas.",

    // 28. Crypto DCA
    "What is Dollar-Cost Averaging (DCA)?": "¿Qué es el Dollar-Cost Averaging (DCA)?",
    "Dollar-Cost Averaging is an investment strategy where you invest a fixed amount of money at regular intervals regardless of the asset's fluctuating market price.": "Es una estrategia en la que se invierte una suma fija de dinero de forma periódica con independencia de la cotización puntual del activo.",
    "How does DCA apply to high-volatility assets like Crypto?": "¿Cómo ayuda el DCA en activos muy volátiles como las criptomonedas?",
    "DCA prevents emotional decisions during extreme market peaks and crashes, automatically buying more units when prices are low and fewer when prices are high.": "Evita decisiones emocionales durante euforias o caídas de mercado, comprando más unidades a precios bajos y menos cuando suben.",
    "Is DCA better than investing a lump sum?": "¿Es mejor el DCA o invertir todo el capital de golpe (Lump Sum)?",
    "Lump sum investing historically wins in steadily rising markets, but DCA provides superior peace of mind, lower emotional risk, and downside protection in highly volatile markets.": "Invertir de golpe suele ganar en mercados alcistas constantes, pero el DCA ofrece mayor tranquilidad mental y protección en activos con fuerte volatilidad.",
    "What is the best frequency for crypto DCA?": "¿Cuál es la frecuencia ideal para hacer DCA?",
    "Weekly or bi-weekly DCA aligned with your pay cycle is ideal for capturing market volatility while keeping trading fees manageable.": "Efectuar compras semanales o quincenales sincronizadas con la nómina permite aprovechar la volatilidad conteniendo las comisiones.",
    "Does DCA guarantee profits in cryptocurrency?": "¿Garantiza el DCA ganancias en criptoactivos?",
    "No, DCA does not protect against prolonged declines or failing crypto projects; it only ensures you achieve the weighted average market purchase price.": "No, no protege contra proyectos fallidos o tendencias bajistas prolongadas; únicamente asegura obtener el precio medio ponderado del mercado.",

    // 29. Tip
    "What is the standard tipping percentage?": "¿Cuál es el porcentaje habitual de propina?",
    "In the United States and Canada, standard restaurant tipping guidelines range from 15% for adequate service, 18% for good service, to 20% or more for exceptional service.": "En países donde es costumbre, las pautas oscilan entre el 15% por servicio correcto, el 18% por buen servicio y el 20% o más por un trato excelente.",
    "Should tips be calculated before or after sales tax?": "¿Debe calcularse la propina antes o después de impuestos?",
    "Etiquette traditionally dictates calculating the tip percentage on the pre-tax food and beverage subtotal, though many automated payment terminals calculate tip on the post-tax total.": "Tradicionalmente se calcula sobre el subtotal de comida y bebida antes de impuestos, aunque muchos datáfonos la calculan sobre el total final.",
    "How do you split a bill evenly among friends?": "¿Cómo dividir la cuenta a partes iguales entre amigos?",
    "Calculate the total bill including food, beverages, tax, and tip, and divide the total amount equally by the number of paying participants.": "Sume el importe íntegro de consumiciones, impuestos y propina, y divida la cifra resultante entre el número total de comensales.",

    // 30. Discount
    "How do you calculate a percentage discount?": "¿Cómo se calcula un descuento porcentual?",
    "Multiply the original price by the discount percentage divided by 100 to find the savings, and subtract that amount from the original price: Final Price = Original Price × (1 - Discount%).": "Multiplique el precio original por el porcentaje de rebaja dividido entre 100 y reste el resultado al precio original: Precio Final = Precio Original × (1 - Descuento%).",
    "How do multiple stacked discounts work?": "¿Cómo funcionan los descuentos acumulables?",
    "Stacked discounts apply sequentially rather than additively. For example, 20% off plus an extra 10% off results in an effective 28% total discount, not 30%.": "Se aplican de forma sucesiva y no sumatoria. Por ejemplo, un 20% de descuento más un 10% extra equivale a una rebaja real del 28%, no del 30%.",
    "Is sales tax applied before or after store discounts?": "¿Se aplica el impuesto antes o después de la rebaja?",
    "In most jurisdictions, sales tax is calculated on the discounted post-sale price, meaning you pay sales tax only on the actual money spent.": "En la mayoría de normativas, los impuestos sobre ventas o IVA se calculan sobre el precio ya rebajado, pagando impuestos solo por lo realmente desembolsado."
  },

  // Simplified Chinese (zh-cn)
  'zh-cn': {
    // 1. Mortgage
    "How is a mortgage payment calculated?": "房贷月供是如何计算的？",
    "A standard monthly mortgage payment consists of Principal & Interest (P&I), property taxes, homeowners insurance, private mortgage insurance (PMI) if down payment is under 20%, and homeowner association (HOA) fees.": "标准的房贷月供通常包含本金与利息（P&I）、房产税、房屋财产保险、首付低于20%时的个人房贷保险（PMI）以及物业管理费（HOA）。",
    "What is PMI and when do I pay it?": "什么是房贷保险 (PMI)，什么时候需要缴纳？",
    "Private Mortgage Insurance (PMI) is a policy that protects the lender if you default. It is typically required on conventional loans if your down payment is less than 20% of the home purchase price.": "房贷保险（PMI）是保护放贷机构免受借款人违约损失的险种。在常规按揭贷款中，如果购房首付低于房屋总价的20%，通常会被强制要求购买。",
    "What does PITI stand for?": "什么是 PITI？",
    "PITI stands for Principal, Interest, Taxes, and Insurance. These are the four basic components that make up a homeowner's monthly housing payment. Together, they reflect the true cost of owning a home on a month-to-month basis.": "PITI 是本金（Principal）、利息（Interest）、税费（Taxes）和保险（Insurance）的首字母缩写，构成业主每月真实的综合住房开销。",
    "Is a 15-year mortgage better than a 30-year mortgage?": "15年期房贷比30年期房贷更好吗？",
    "A 15-year mortgage typically offers a lower interest rate and allows you to pay off your home twice as fast, saving you tens of thousands of dollars in interest. However, a 30-year mortgage has lower monthly payments, which provides greater cash flow flexibility.": "15年期房贷利率通常更低，能让您以两倍速度还清贷款并省下巨额利息；而30年期房贷月供更低，能提供更充裕的每月现金流灵活性。",
    "How do extra payments affect my mortgage payoff schedule?": "提前多还本金对房贷还款计划有什么影响？",
    "Any extra money you pay towards your mortgage is applied directly to the principal balance. This reduces the remaining loan balance and decreases the amount of interest that accumulates, helping you pay off your mortgage years ahead of schedule.": "所有超额支付的还款金额都会直接冲抵贷款本金，减少后续累计的利息总额，助您提前数年还清房贷并节省可观的财务成本。",

    // 2. Loan Calculator
    "How does an amortized loan work?": "等额本息还款贷款是如何运作的？",
    "With an amortized loan, you make equal periodic payments. Early in the loan term, the majority of each payment goes toward interest. Over time, an increasing portion goes toward paying down the principal balance until the debt is fully paid off.": "等额分期贷款中，您每期偿还等额资金。前期绝大部分资金用于支付利息；随着本金递减，后期偿还本金的比例逐渐升高，直至全部清偿。",
    "What is the difference between fixed-rate and variable-rate loans?": "固定利率贷款与浮动利率贷款有什么区别？",
    "A fixed-rate loan maintains the exact same interest rate and payment throughout the loan term. A variable-rate loan has an interest rate that adjusts periodically based on benchmark interest rates, which can increase or decrease your payments.": "固定利率贷款在整个周期内利率和每期还款额保持恒定；浮动利率贷款则随基准利率定期重置，月供可能随市场升降息而波动。",
    "Can I pay off my loan early without penalty?": "我可以提前还贷吗？是否有违约金罚款？",
    "Most consumer loans and conventional mortgages allow prepayment without penalties, but some lenders include a prepayment penalty clause. Always verify your loan agreement terms before making accelerated principal payments.": "大多数常规贷款允许提前偿还本金而不收罚金，但某些合同可能包含提前还款违约金条款。加速还款前请务必仔细核对借款协议。",

    // 3. Debt Payoff
    "What is the Debt Snowball method?": "什么是滚雪球还债法？",
    "The Debt Snowball method involves paying off your smallest debt balances first, regardless of interest rates. It builds psychological momentum and motivation through quick wins.": "滚雪球法优先偿还本金余额最小的债务，不考虑利率高低。它通过迅速清除单项债务带来的成就感来建立心理动力。",
    "What is the Debt Avalanche method?": "什么是雪崩还债法？",
    "The Debt Avalanche method involves paying off your highest interest rate debts first. Mathematically, this minimizes the total interest you pay and helps you become debt-free faster.": "雪崩法优先全额清偿利率最高的债务。从数学角度来看，这种方法能最大程度减少利息总支出并最快还清所有欠款。",
    "Which method is better: Debt Snowball or Debt Avalanche?": "滚雪球法和雪崩法哪个更好？",
    "Mathematically, the Debt Avalanche method is superior because it minimizes the total interest paid. However, studies show that the Debt Snowball method is often more successful in practice because the psychological momentum helps people stick to their plan.": "理论上雪崩法更优，因为它能节省更多利息；但实际中滚雪球法的成功率往往更高，因为快速清零单笔债务的正向激励更容易让人坚持到底。",
    "How does the 'extra payment' roll over in these strategies?": "在这些还债策略中，超额还款资金是如何流转的？",
    "You continue paying minimums on all debts and add your extra cash to the target debt. Once that target debt is fully paid off, you roll its entire payment into the next debt on your list.": "您在维持其他债务最低还款的同时，把所有额外现金集中偿还目标债务；一旦该债务还清，便将其全部还款预算合并加码到下一笔债务上。",
    "Can I do a hybrid of Snowball and Avalanche?": "我可以结合滚雪球和雪崩法采取混合策略吗？",
    "Yes. Many people pay off one or two small debts first to free up immediate cash flow (Snowball), and then pivot to targeting the remaining debts by highest interest rate (Avalanche).": "完全可以。许多人先还清一两笔极小额债务以快速释放现金流并获得心理激励（雪球法），随后转向集中攻克高息债务以节约利息（雪崩法）。",

    // 4. Refinance
    "When should I refinance my loan?": "什么时候应该办理转贷（重新按揭）？",
    "It generally makes sense to refinance if you can secure a lower interest rate, reduce your monthly payment, or shorten your term, provided your total interest savings exceed the closing costs.": "当您能获得更低利率、减少月供或缩短贷款年限，且节约的利息总额超过转贷所需的交易手续费时，转贷才具有经济价值。",
    "What closing costs are associated with refinancing?": "重新贷款通常包含哪些手续费？",
    "Refinancing costs typically include application fees, origination fees, appraisal costs, title search and insurance, credit report fees, and recording fees, ranging from 2% to 6% of the loan amount.": "主要包括银行开办费、房屋评估费、产权调查与保险费、征信费及登记费等，通常占贷款总额的2%至6%。",
    "How do I calculate my refinance break-even point?": "如何计算转贷的保本回本期（Break-Even）？",
    "Divide your total refinance closing costs by your monthly payment savings. If closing costs are $3,000 and you save $150 per month, your break-even point is 20 months ($3,000 / $150).": "将转贷的所有前期手续费除以每月节省的月供金额。例如手续费为3000美元且每月节省150美元，则回本期为20个月。",
    "What is a 'no-closing-cost' refinance?": "什么是‘零手续费’重新贷款？",
    "A no-closing-cost refinance means the lender either rolls the closing fees into your new total loan balance or charges a slightly higher interest rate to cover them.": "零手续费并不意味着免除费用，放贷机构通常是将手续费计入新的贷款本金总额中，或略微调高贷款利率予以弥补。",
    "Does refinancing lower my monthly payment or total interest?": "转贷是降低了每月月供还是减少了总利息？",
    "It depends on the term. Refinancing to a lower rate with the same or shorter term saves on both. Resetting your term back to 30 years lowers the monthly payment but can increase total lifetime interest.": "取决于新期限。若利率更低且保持或缩短期限，则两者皆省；若为了追求超低月供而重新拉长到30年，全周期总利息支出反而可能增加。",

    // 5. Student Loan
    "What is the SAVE plan?": "什么是 SAVE 助学贷款还款计划？",
    "The Saving on a Valuable Education (SAVE) plan is an income-driven repayment (IDR) plan that protects discretionary income up to 225% of the poverty line, lowers payments to 5%-10%, and stops unpaid interest from accumulating.": "SAVE 是美国最新的收入挂钩还款方案，将可支配收入免征门槛提高至贫困线的225%，将月供降至可支配收入的5%-10%，并停止累计未缴利息。",
    "How is discretionary income calculated for student loans?": "助学贷款中的可支配收入是如何计算的？",
    "Discretionary income is the difference between your Adjusted Gross Income (AGI) and a percentage of the federal poverty guideline for your family size (150% for PAYE/IBR, 225% for SAVE).": "可支配收入指您的调整后申报总收入（AGI）减去根据家庭人口数确定的联邦贫困线免偿基数（SAVE 方案为贫困线的 225%）。",
    "How does student loan forgiveness work under IDR plans?": "在 IDR 计划下，助学贷款豁免是如何运作的？",
    "If you pay under an IDR plan for 20 or 25 years (or 10 years under SAVE for low initial balances), any remaining student debt is forgiven.": "只要在 IDR 方案下持续按期还款20至25年（初始额度低者在 SAVE 计划下最快10年），剩余未还清的债务即可获得全额豁免。",
    "Which IDR plan is best for me?": "哪种 IDR 还款方案最适合我？",
    "For most borrowers, the SAVE plan offers the lowest monthly payment and the best interest subsidy. Borrowers with very high incomes relative to debt may prefer PAYE or IBR due to payment caps.": "对绝大多数借款人而言，SAVE 方案的月供最低且利息补贴最好；但收入相对债务极高的借款人可能更青睐有月供上限的 PAYE 或 IBR 方案。",
    "Can I switch student loan repayment plans at any time?": "我可以随时更换助学贷款还款计划吗？",
    "Yes, you can apply to switch repayment plans for free at studentaid.gov. However, switching plans can sometimes cause unpaid interest to capitalize.": "可以，借款人可在官方网站随时免费申请转换方案，但转换计划有时可能导致累积的未付利息资本化计入本金。",

    // 6. DTI
    "What is the 28/36 rule?": "什么是 28/36 房贷准则？",
    "The 28/36 rule is a standard mortgage underwriting guideline stating that housing costs should not exceed 28% of gross monthly income, and total debt payments should not exceed 36%.": "这是标准的按揭风控准则：每月住房总开销不宜超过税前月收入的28%，包含各类信用卡与车贷在内的总负债月供不宜超过36%。",
    "How does DTI affect my mortgage application?": "DTI 债务收入比如何影响房贷申请？",
    "Lenders use DTI to measure your ability to manage monthly payments. Lower DTIs below 36% receive the most favorable mortgage terms and lowest interest rates.": "银行依据 DTI 评估您的偿债能力。DTI 保持在36%以下的申请人更容易获批且能争取到最优惠的利率条件。",
    "What is the difference between front-end and back-end DTI?": "前端 DTI 和后端 DTI 有什么区别？",
    "Front-end DTI only includes housing expenses (mortgage, property tax, insurance, HOA). Back-end DTI includes housing plus all recurring debts like credit cards, auto loans, and student loans.": "前端 DTI 仅涵盖住房本身的开支（月供、房产税、保险、物业费）；后端 DTI 则在此基础上加上车贷、信用卡、助学贷款等全部固定负债。",
    "What is the maximum DTI ratio lenders will accept?": "金融机构能接受的最高 DTI 上限是多少？",
    "Conventional mortgages typically prefer back-end DTIs of 36% to 43%. Government-backed loans like FHA and VA may allow DTIs up to 50% with strong compensating factors.": "常规房贷通常倾向于将总 DTI 控制在36%至43%以内；若借款人信用极高或拥有充裕现金储备，部分政策性贷款最高可放宽至50%。",
    "How can I lower my Debt-to-Income ratio?": "我该如何降低自己的债务收入比 (DTI)？",
    "You can lower your DTI by increasing gross income or paying off smaller debts completely to eliminate their recurring monthly minimum payments.": "您可以通过提高每月税前收入或彻底结清部分小额贷款来消除其月供，从而快速优化 DTI 指标。",

    // 7. APR
    "What is the difference between interest rate and APR?": "名义利率与实际年利率 (APR) 有何不同？",
    "The interest rate is the nominal cost of borrowing the principal balance. The Annual Percentage Rate (APR) reflects the total annual cost of the loan including points, broker fees, and origination charges.": "名义利率仅体现借款本金的利息成本；综合年化利率 (APR) 则将开办费、中介费、点数等前期综合杂费均摊折算，反映全包借贷成本。",
    "Why is APR higher than the advertised interest rate?": "为什么 APR 通常比广告宣传的名义利率更高？",
    "APR is higher because it amortizes all upfront lender fees, discount points, and closing costs into the effective yearly rate, revealing the true cost of credit.": "因为 APR 将借款人前期支付的开办费与结算规费平摊到整个借款周期，揭示出真实的综合借贷成本。",
    "Is APR useful for comparing different loan offers?": "APR 是对比不同贷款方案的最佳指标吗？",
    "Yes, APR is the best metric for comparing loan offers with different fee structures, provided you plan to keep the loan for its full term.": "是的，在打算持有贷款全周期的前提下，APR 能够统一不同机构复杂的收费口径，是横向对比借贷成本的最客观指标。",

    // 8. Rent vs Buy
    "How long do I need to stay in a home for buying to beat renting?": "买房自住通常需要持有多少年才能跑赢租房？",
    "Because upfront closing costs, moving fees, and commissions are substantial, homeowners usually need to stay in a property for 4 to 7 years for buying to financially outperform renting.": "由于购房契税、中介费与交易规费等前期沉没成本巨大，业主通常需要持有该房产4到7年以上，其财务积累才能超越租房投资。",
    "What hidden costs of homeownership should renters consider?": "租客在考虑买房时需注意哪些隐形成本？",
    "Homeowners must pay property taxes, homeowners insurance, maintenance and repairs (typically 1-2% of home value annually), HOA dues, and potential capital improvement costs.": "业主必须长期承担房产税、房屋保险、日常修缮折旧（通常每年为房屋价值的1%-2%）、物业费及不可预测的大修开支。",
    "What is the opportunity cost of buying a home?": "买房自住的机会成本是什么？",
    "The money spent on down payment, closing costs, and ongoing property maintenance could otherwise remain invested in liquid assets like index funds that compound over time.": "用于支付首付、契税及维护费用的资金，若留在股票指数基金等高流动性资产中，能随着时间享受强大的复利增值。",

    // 9. Home Affordability
    "How much income should I spend on a mortgage?": "房贷月供占收入的多大比例最为合适？",
    "Most financial experts recommend spending no more than 25% to 28% of your gross monthly income on housing costs (the front-end DTI guideline).": "理财专家普遍建议每月全部住房总开支（含本息、税费与保险）不宜超过税前月总收入的25%至28%。",
    "How does down payment size impact affordability?": "首付比例高低如何影响购房预算？",
    "A larger down payment reduces your loan amount, eliminates Private Mortgage Insurance (PMI) if you put down 20%, and lowers your monthly mortgage payment.": "充足的首付能直接削减借款总额，首付达到20%可免去个人房贷保险（PMI），从而有效降低月供负担。",
    "How do interest rates affect purchasing power?": "房贷利率变动对购房承受力有多大影响？",
    "Every 1% increase in mortgage interest rates reduces your home purchasing power by roughly 10% for the same monthly payment budget.": "在保持月供预算不变的前提下，房贷利率每上升1个百分点，您能买得起的最高房屋总价就会萎缩约10%。",

    // 10. Auto Loan
    "What is the 20/4/10 rule for buying a car?": "买车的 20/4/10 黄金法则是指什么？",
    "The 20/4/10 rule recommends putting down at least 20%, financing for no longer than 4 years (48 months), and keeping total vehicle expenses under 10% of gross monthly income.": "该准则建议购车首付不低于20%、贷款期限不超过4年（48期），且将油费、保险与车贷在内的总养车费用控制在月总收入的10%以内。",
    "Is a longer auto loan term better?": "车贷期数拉长到6年或7年更划算吗？",
    "Longer terms (like 72 or 84 months) lower your monthly payment, but you pay substantially more total interest and risk becoming 'underwater' (owing more than the vehicle is worth).": "过长的分期虽能降低月供，但会显著增加利息总支出，且容易陷入车辆残值低于未还车贷本金的‘资不抵债’境地。",
    "How does vehicle depreciation affect my loan?": "汽车贬值速度对车贷有何影响？",
    "New cars depreciate rapidly (often losing 20% in the first year). Without an adequate down payment, you risk owing more on your loan than the car's market value.": "新车折旧极为迅速（首年往往贬值20%）；若首付不足，极易导致车贷余额高于二手车实际市值的风险。",

    // 11. Credit Card Payoff
    "Why does paying only the minimum take so long?": "为什么只还信用卡最低还款额要还几十年？",
    "Credit card minimum payments are often set around 1% to 2% of the balance plus accrued interest. As the balance slowly drops, the required minimum drops, extending payoff times to decades.": "最低还款额通常仅覆盖当期利息和1%-2%的本金。随着欠款缓慢减少，最低还款额也随之减少，导致清偿周期被无限拉长到数十年。",
    "How much faster can I pay off credit cards by paying extra?": "每月多还一点钱能提前多久还清信用卡？",
    "Paying even $50 or $100 above the minimum payment can cut your payoff timeline by several years and save thousands of dollars in compounding interest charges.": "即便每月在最低还款额之外多还50或100美元，也能将还款周期缩短数年，并节省数千美元的高额循环利息。",
    "Should I use a balance transfer card to pay off debt?": "我应该办理 0% APR 余额代偿卡来还债吗？",
    "A 0% APR balance transfer credit card can save significant interest if you pay off the full balance during the promotional period (typically 12-21 months) and factor in the 3%-5% transfer fee.": "若能在免息推广期内（通常12-21个月）全额还清，并扣除3%-5%的转账手续费后，0% APR 余额代偿卡确实能省下巨额利息。",

    // 12. Retirement Planner
    "What is the 4% rule in retirement planning?": "退休规划中的 4% 法则是指什么？",
    "The 4% rule suggests that withdrawing 4% of your retirement portfolio in the first year, adjusted for inflation annually thereafter, provides a high probability that your nest egg will last at least 30 years.": "该法则指出，退休首年从投资组合中提取4%的资金，其后每年依通胀微调提取额，有极高概率确保资金池平稳支撑30年以上。",
    "How much money do I need to retire comfortably?": "要想体面安心退休，究竟需要积累多少资金？",
    "A common benchmark is accumulating 25 times your anticipated annual retirement expenses, or replacing 70% to 80% of your pre-retirement income.": "业内通行的经验标准是储备相当于退休后预计年开支25倍的资产规模，或实现退休前工作薪资70%-80%的收入替代率。",
    "How does inflation impact retirement spending?": "通胀对退休生活有何实质冲击？",
    "Inflation steadily reduces the purchasing power of your savings. At a 3% inflation rate, everyday living expenses double roughly every 24 years, requiring growing investment portfolios.": "通货膨胀会持续侵蚀现金的购买力。在3%的通胀率下，生活开支每24年便会翻倍，因此养老资产必须持续投资于具有抗通胀属性的标的。",

    // 13. 401(k)
    "What is an employer 401(k) match?": "什么是雇主 401(k) 配缴福利？",
    "An employer match is money your employer contributes to your 401(k) account based on your own contributions (e.g. matching 50% of contributions up to 6% of your salary). It is effectively an instant return on your savings.": "雇主配缴是公司在员工自行存入养老金时按比例补充发放的免费福利金（如对工资6%以内的缴费给予50%配缴），相当于瞬间获得高额确定收益。",
    "What are the 401(k) contribution limits for 2024?": "2024年度 401(k) 个人缴费法定上限是多少？",
    "For 2024, the employee contribution limit is $23,000 for those under 50. Individuals aged 50 and older can contribute an additional $7,500 catch-up contribution for a total of $30,500.": "50岁以下员工的年供款上限为23,000美元；50岁及以上员工可额外追加7,500美元追赶供款，合计上限达30,500美元。",
    "What is the difference between Traditional 401(k) and Roth 401(k)?": "传统 401(k) 和 Roth 401(k) 的主要差异是什么？",
    "Traditional 401(k) contributions are pre-tax and reduce your current taxable income, with withdrawals taxed in retirement. Roth 401(k) contributions are post-tax, but all qualified growth and withdrawals are completely tax-free.": "传统 401(k) 采用税前供款以抵减当年应税收入，退休提取时缴纳所得税；Roth 401(k) 采用税后资金供款，但在退休期所有收益及提取全额免税。",

    // 14. IRA Comparison
    "What is the key difference between a Roth and Traditional IRA?": "Roth IRA 与传统 IRA 的核心区别是什么？",
    "Traditional IRA contributions are generally made pre-tax (reducing your current taxable income), but withdrawals in retirement are taxed as ordinary income. Roth IRA contributions are made with post-tax dollars; growth and withdrawals in retirement are completely tax-free.": "传统 IRA 的缴款通常可税前抵扣，但在退休取出时按常规收入征税；Roth IRA 使用税后资金缴费，但投资增值和未来取款全部免税。",
    "Which IRA plan is better for me?": "我应该选择哪种 IRA 个人退休账户？",
    "If you expect your tax bracket to be higher in retirement than it is today, a Roth IRA is better. If you expect your tax bracket in retirement to be lower, a Traditional IRA is better.": "若您预计退休后的税率高于当前水平，Roth IRA 更佳；若预计退休后收入与税率会显著下降，则传统 IRA 更具优势。",
    "What are the contribution limits for IRAs in 2024?": "2024年度 IRA 账户的缴费限额是多少？",
    "For 2024, the annual contribution limit for Traditional and Roth IRAs is $7,000 for individuals under age 50, and $8,000 for individuals age 50 or older.": "50岁以下人士每年的法定供款上限为7,000美元；50岁及以上人士上限为8,000美元。",
    "Are there income limits for contributing to Traditional and Roth IRAs?": "向 IRA 账户存入资金有收入限制吗？",
    "Roth IRAs have income phase-out ranges that restrict high earners. Anyone with earned income can contribute to a Traditional IRA, but tax deductibility may be limited by income and workplace retirement coverage.": "Roth IRA 设有收入渐减区间，限制高薪人群直接开户；任何有主动收入的人均可向传统 IRA 存钱，但抵税资格可能受收入限制。",
    "Can I withdraw money from my IRA before age 59½ without penalty?": "未满 59岁半 可以免罚金提前从 IRA 中取钱吗？",
    "Roth IRA original contributions can be withdrawn at any time penalty-free. Withdrawing investment earnings early or withdrawing Traditional IRA funds before 59½ usually incurs income taxes and a 10% penalty.": "Roth IRA 中的本金部分可随时免税免罚金提取；但提前支取投资收益或在59岁半前提前支取传统 IRA 资金通常需补税并缴纳10%罚金。",

    // 15. Compound Interest
    "What is compound interest?": "什么是复利？",
    "Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods. It causes your wealth to grow exponentially over time.": "复利是指将上期产生的利息并入本金重新计算利息的计息方式，能让财富随时间推移实现指数级爆发增长。",
    "What is the Rule of 72?": "什么是 72 法则？",
    "The Rule of 72 is a quick mental formula to estimate how many years it takes to double your money. Divide 72 by your annual interest rate (e.g. at 8%, your money doubles in about 9 years).": "72法则是快速估算资产翻倍年限的心算工具：用72除以预期年化收益率即可（如按8%年利计算，资金约9年翻倍）。",
    "How does compounding frequency affect total returns?": "复利计息频率如何影响最终财富回报？",
    "The more frequently interest compounds (annually, monthly, daily), the higher your effective annual yield (APY) will be, as interest starts earning interest sooner.": "复利计息越频繁（按年、按月、按日），实际年化收益率（APY）就越高，因为利息能更快地投入再生产产生新利息。",

    // 16. TVM
    "What is the Time Value of Money (TVM)?": "什么是货币的时间价值 (TVM)？",
    "The Time Value of Money principle states that a dollar today is worth more than a dollar in the future because today's dollar can be invested and earn interest.": "这一金融核心法则指出，由于当前的资金能够通过投资产生利息，因此今天的1元钱价值必然高于未来的1元钱。",
    "What are the core components of TVM calculations?": "货币时间价值计算包含哪些核心变量？",
    "The five core variables are Present Value (PV), Future Value (FV), Interest Rate per Period (Rate), Total Number of Periods (Nper), and Periodic Payment (PMT).": "核心变量共有五个：现值 (PV)、终值 (FV)、每期利率 (Rate)、期数 (Nper) 以及每期定期付款额 (PMT)。",
    "What is the difference between an ordinary annuity and annuity due?": "普通年金与先付年金有何区别？",
    "In an ordinary annuity, payments occur at the end of each period. In an annuity due, payments occur at the beginning of each period, earning an extra compounding cycle of interest.": "普通年金在每期期末付款；先付年金（即付年金）在每期期初付款，因此能多享受一个计息周期的复利增值。",

    // 17. ROI
    "How is Return on Investment (ROI) calculated?": "投资回报率 (ROI) 是如何计算的？",
    "ROI is calculated by subtracting the initial cost of the investment from the final value, and dividing that net gain by the initial cost: ROI = (Net Profit / Cost of Investment) × 100%.": "计算方法是用期末总价值减去初始投资成本得到净收益，再除以初始投资成本：ROI = (净利润 / 投资成本) × 100%。",
    "What is the difference between simple ROI and annualized ROI?": "简单 ROI 与年化 ROI (CAGR) 有何不同？",
    "Simple ROI measures total percentage return regardless of duration. Annualized ROI (CAGR) standardizes the return into a per-year geometric rate, enabling fair comparison between investments held for different lengths of time.": "简单 ROI 衡量不计时间长短的累计收益率；年化 ROI 则将其折算为每年几何平均复合增长率，以便公平对比不同期限的项目。",
    "What is considered a good ROI?": "多高的投资回报率才算优秀？",
    "Historically, the broad stock market (S&P 500) has returned an average of 7% to 10% annually before inflation. Investments with higher expected returns generally involve higher risk of capital loss.": "历史上标普500大盘年均名义回报率约为7%至10%。追求更高期望回报通常必须承担本金发生永久性损失的高风险。",

    // 18. Savings Goal
    "How do I calculate how much to save monthly for a goal?": "我该如何计算每月为特定目标储蓄多少钱？",
    "You divide your target savings amount by the number of months until your deadline, while factoring in the compounding interest earned on your growing balance.": "将目标储蓄金额除以距离截止日期的月份数，同时把已存余额在此期间所产生的复利利息考量在内。",
    "Should I keep savings goal funds in high-yield savings or stocks?": "目标储蓄金应该放在高息活期账户还是股票里？",
    "For goals under 3 to 5 years (like a car or home down payment), keep funds in safe, liquid instruments like High-Yield Savings Accounts (HYSA) or CDs. For goals 5+ years away, a diversified investment portfolio may be suitable.": "3至5年内的短期目标（如买车、首付）应存放在高息定存等保本理财中；5年以上的长线目标则更适合投资于分散的股票组合。",
    "How can I stay on track with my savings goals?": "怎样才能确保储蓄目标按部就班达成？",
    "Automate recurring monthly transfers into a dedicated savings account immediately after your paycheck arrives (the 'pay yourself first' strategy).": "在发薪日当天立即设置自动转账将储蓄划入专用账户（即‘先付给自己’的自律法则）。",

    // 19. Stock Return
    "How do I calculate stock returns?": "股票的总投资回报率如何计算？",
    "Total stock return equals capital gains (ending price minus purchase price) plus any dividends received, divided by the original purchase cost.": "股票总回报等于资本利得（卖出价减去买入成本）加上持有期间收到的所有分红股息，再除以初始购入总成本。",
    "What is CAGR in stock returns?": "股票投资中的 CAGR 是什么意思？",
    "Compound Annual Growth Rate (CAGR) measures the geometric mean annual return of a stock over multiple years, smoothing out annual market fluctuations.": "复合年均增长率 (CAGR) 衡量多年度内股票投资的几何平均收益，能够平滑各单一年份的极端市场波动。",
    "What is the difference between simple return and annualized return?": "单期绝对收益与年化复合收益的区别是什么？",
    "Simple return measures absolute percentage gain over the entire holding period, while annualized return shows the steady annual rate required to achieve that result.": "绝对收益展示持仓全过程的累计增值百分比；年化收益则反映实现该业绩所需的平均每年复合增值速率。",

    // 20. CAPM
    "What is the Capital Asset Pricing Model (CAPM)?": "什么是资本资产定价模型 (CAPM)？",
    "CAPM calculates an asset's expected return based on its risk relative to the overall market, using the formula: Expected Return = Risk-Free Rate + Beta × (Market Return - Risk-Free Rate).": "CAPM 根据资产相对市场的系统性风险测算其期望回报：期望收益率 = 无风险利率 + 贝塔系数 × (市场平均回报率 - 无风险利率)。",
    "What does Asset Beta (β) represent?": "股票贝塔系数 (β) 代表什么含义？",
    "Beta measures an asset's volatility compared to the broader market. A beta of 1.0 indicates market-level volatility; above 1.0 indicates higher volatility, and below 1.0 indicates lower volatility.": "贝塔系数衡量资产相对大盘的波动率。β=1表示波动与大盘同步；β>1表示波动大于大盘（高风险高回报）；β<1表示走势更平稳。",
    "What is the Risk-Free Rate?": "什么是无风险基准利率？",
    "The risk-free rate is the theoretical rate of return of an investment with zero risk of default, typically represented by long-term government bond yields (like 10-year US Treasuries).": "无风险利率是指完全不存在违约风险的理论投资回报率，通常以10年期国债收益率为基准。",
    "What is the Market Risk Premium?": "什么是市场风险溢价？",
    "The market risk premium is the additional return investors demand for choosing risky market equities over risk-free government securities.": "市场风险溢价指投资者因放弃确定无风险的国债、转而承担股市波动风险所索取的额外必要补偿回报。",

    // 21. Dividend
    "What is dividend yield versus yield on cost?": "股息率 (Dividend Yield) 与成本股息率 (Yield on Cost) 有何不同？",
    "Dividend yield is the annual dividend divided by the current stock price. Yield on cost is the annual dividend divided by your original purchase price, which increases as companies raise their dividends over time.": "当前股息率是年分红除以最新股票市价；成本股息率是年分红除以您的原始买入成本，随着优质公司持续增配股息，该指标会越来越高。",
    "What is a Dividend Reinvestment Plan (DRIP)?": "什么是股息自动再投资计划 (DRIP)？",
    "A DRIP automatically uses your cash dividend payments to purchase additional shares or fractional shares of the stock, compounding your share count and future payouts without commission fees.": "DRIP 允许将发放的现金股息自动用于免佣金增购该股票的新份额，使持股总数与未来现金流呈复利扩张。",
    "Are dividend payments guaranteed?": "上市公司的股息分红是有保证的吗？",
    "No, company boards can reduce, suspend, or eliminate dividend payouts at any time depending on company profitability and economic conditions.": "不具有法定保证。董事会有权根据公司盈利情况、现金流和宏观环境随时下调、暂停或取消派息。",

    // 22. Inflation
    "What is inflation?": "什么是通货膨胀？",
    "Inflation is the general rise in prices for goods and services over time, resulting in a decline in the purchasing power of money.": "通胀指商品与服务价格普遍持续上涨的经济现象，直接导致货币实际购买力发生不可逆缩水。",
    "How does inflation affect my savings?": "通胀如何侵蚀我们的个人储蓄？",
    "Cash sitting in zero-interest accounts loses purchasing power each year. If inflation is 3%, $100 today will only buy about $97 worth of goods next year.": "零利息闲置的现金购买力逐年下降；若年通胀率为3%，今天的100元明年只能买到相当于现在97元价值的商品。",
    "How is inflation officially measured?": "官方通常如何衡量通胀水平？",
    "Inflation is primarily measured using the Consumer Price Index (CPI), which tracks price changes across a standard market basket of consumer goods and services.": "主要通过居民消费价格指数（CPI）进行跟踪，监测一篮子具有代表性的商品与服务的物价走势。",
    "What is the historical average inflation rate?": "长周期来看历史平均通胀率通常在什么区间？",
    "In the United States, inflation has historically averaged between 2.5% and 3.2% per year over long multi-decade horizons.": "跨越几十年的长期统计显示，主要成熟经济体的历史平均年化通胀率约在2.5%至3.2%之间。",
    "How can I protect my money from losing value to inflation?": "如何防止财富被通货膨胀侵蚀？",
    "Investing in assets whose earnings outpace inflation—such as diversified equities, Treasury Inflation-Protected Securities (TIPS), real estate, and inflation-indexed bonds.": "投资于长期回报率跑赢通胀的优质资产，如股票权益资产、抗通胀国债（TIPS）及核心地段房产等。",

    // 23. Paycheck
    "What is FICA tax?": "什么是 FICA 薪资税（社会保障税）？",
    "FICA is a federal payroll tax that funds Social Security (6.2% on wages up to the wage base limit) and Medicare (1.45% plus an additional 0.9% on high earners).": "这是用于统筹公共养老金与医疗保险的国家薪金税，雇主和雇员通常按比例共同分担。",
    "What is the difference between pre-tax and post-tax deductions?": "税前扣除项与税后扣除项有什么区别？",
    "Pre-tax deductions (like 401k and health insurance) reduce your taxable gross income before taxes are computed. Post-tax deductions (like Roth contributions or wage garnishments) are taken after taxes.": "税前扣除（如企业年金、公积金、医保）先于所得税核算并冲减应税收入；税后扣除则在完税之后由工资代扣。",
    "What is the difference between gross pay and net pay?": "应发工资（毛收入）与实发到手工资有何区别？",
    "Gross pay is the total amount earned before any taxes or deductions. Net pay (take-home pay) is the actual cash deposited into your bank account after all deductions.": "应发工资是扣减前合同约定的全部薪酬；实发工资是依法代扣个税与社保后实际打入银行卡中的净现金额度。",
    "How does my W-4 filing status affect my paycheck?": "个税申报专项扣除如何影响到手薪资？",
    "Your W-4 form informs your employer how much federal income tax to withhold each pay period based on your filing status, dependents, and other income.": "个税抵扣申报表依据借款人的家庭供养情况、子女教育等专项附加扣除，决定每月工资预扣个税的额度。",
    "Why do state and local taxes vary so much?": "为什么不同地区的地方税率差异巨大？",
    "State income tax rates range from 0% (in states like Texas, Florida, and Washington) to over 13% in high-tax states, while some cities also impose local municipal income taxes.": "不同省州拥有独立的税法管辖权，部分地区免征地方所得税，而高税率地区可能征收超过10%的地方税。",

    // 24. Net Worth
    "What is net worth?": "什么是个人资产净值 (Net Worth)？",
    "Net worth is the total market value of everything you own (assets) minus everything you owe to creditors (liabilities).": "资产净值是您名下拥有的全部财产公允市值（总资产）减去所欠债权人全部债务（总负债）后的剩余权益。",
    "How often should I calculate my net worth?": "应该多久盘点一次个人净资产？",
    "Reviewing your net worth quarterly or semi-annually gives you a clear high-level view of your financial health without obsessing over daily market swings.": "每季度或每半年复盘一次净资产，足以让您在宏观上把脉财务健康，而不会被短期的行情波动扰乱心态。",
    "What counts as an asset vs. a liability?": "哪些属于资产，哪些属于负债？",
    "Assets include bank balances, investment accounts, home equity, and retirement funds. Liabilities include mortgages, student loans, car loans, and credit card debt.": "现金、股票证券、公积金与房产属资产；按揭贷款、车贷、助学贷款和信用卡欠款属负债。",
    "Should I include my house and mortgage in my net worth?": "计算净资产时应否包含自有住房和房贷？",
    "Yes, you include the current fair market value of the home under assets and the remaining mortgage balance under liabilities. The difference is your home equity.": "应当包含：将房屋最新市场公允价列入资产，将房贷未偿本金列入负债，二者之差即为纯房产净权益。",
    "What does it mean to have a negative net worth?": "净资产为负数意味着什么？",
    "A negative net worth means your total debts exceed your total assets. This is common for young adults and recent graduates with student loans.": "说明总负债大于总资产，属于资不抵债状态，这在刚毕业背负学贷或年轻刚需购房群体中十分普遍。",

    // 25. Emergency Fund
    "How much emergency fund is recommended?": "应急备用金存多少个月最合理？",
    "Most financial planners recommend saving 3 to 6 months of essential living expenses, or 9 to 12 months for freelancers or single-income households.": "理财顾问建议储备3至6个月的刚性基本生活开销；自由职业或单职工家庭则宜储备9至12个月。",
    "What expenses should be included in an emergency fund budget?": "应急基金预算应囊括哪些开销项目？",
    "Include only non-negotiable living costs: housing (rent/mortgage), utilities, groceries, basic transportation, minimum debt payments, and healthcare insurance.": "仅包含不可削减的生存必要开销：房贷房租、基本水电燃气、伙食费、基础交通、最低还款额及医疗险。",
    "Where should I keep my emergency fund?": "应急备用金应该存放在哪里？",
    "In a dedicated High-Yield Savings Account (HYSA) or money market account where it is FDIC-insured, earns interest, and can be accessed immediately without risk.": "存放在保本且支持随时取现的货币基金或高流动性银行账户中，确保资金本金安全无风险。",
    "Should I pay off debt or build an emergency fund first?": "应该先还清债务还是先建立应急备用金？",
    "Build a starter emergency fund of 1 month of expenses or $1,000 to $2,000 first, then aggressively pay off high-interest consumer debt before expanding to 3-6 months.": "应先存下1个月生活费或1000-2000美元的初级安全垫，随后全力偿还高息消费贷，最后再扩充至3-6个月规模。",
    "When is it appropriate to use emergency fund savings?": "什么时候才可以动用应急备用金？",
    "Use it only for genuine, unexpected emergencies: sudden medical bills, unexpected car repairs, or living expenses following job loss.": "仅能用于突发且重大的紧急事件：如意外医疗支出、刚需车辆抢修、或失业期间的基本家庭开支。",

    // 26. Fee Impact
    "What is an expense ratio?": "什么是基金的管理费率（Expense Ratio）？",
    "An expense ratio is the annual percentage fee charged by mutual funds and ETFs to cover fund management, administrative expenses, and operating costs.": "费率是公募基金和 ETF 每年按持仓资产比例直接扣除的综合运营、托管与投研管理费率。",
    "How do fees compound over time?": "投资管理费是如何随时间复利侵蚀财富的？",
    "Fees are deducted annually from your total assets, meaning you lose both the fee money and all future compounding returns that money would have earned.": "费率每年从您的总本息中扣除，这不仅让您失去了这笔管理费本身，还永久失去了它在未来几十年本可创造的全部复利收益。",
    "What is a good expense ratio for an index fund?": "指数基金的合理费率区间是多少？",
    "Low-cost index funds and ETFs typically have expense ratios between 0.02% and 0.10%, whereas actively managed mutual funds often charge 0.60% to 1.50% or more.": "优秀的宽基指数 ETF 费率通常低至0.02%至0.10%；而主动管理型股票基金的管理费通常高达0.60%至1.50%甚至更高。",
    "What other investment fees should I look out for?": "还有哪些投资隐形成本需要引起警惕？",
    "Watch out for advisory fees (AUM fees of 1%), front-end or back-end sales loads, trading commissions, account maintenance fees, and custodial charges.": "包括1%的资产投顾管理费、申购赎回费、频繁交易佣金、账户年费以及托管手续费等。",
    "How much can a 1% fee difference affect my retirement savings?": "1%的微小费率差异对长期养老资产有多大打击？",
    "A 1% annual fee difference can erode 25% to 30% of your total ending portfolio wealth over a 30-year investment horizon.": "在30年的投资长跑中，每年仅仅1%的费率差异，能吞噬您期末总资产规模的25%至30%！",

    // 27. College Savings
    "What is a 529 plan?": "什么是 529 教育储蓄计划？",
    "A 529 plan is a tax-advantaged savings and investment plan designed to encourage saving for future higher education expenses with tax-free growth and qualified withdrawals.": "这是由政府设立的享受税收优待的高等教育专项投资计划，投资收益增值和合规教育取款全额免税。",
    "How fast do college costs increase?": "大学教育学杂费每年上涨有多快？",
    "Historically, higher education tuition and fees have increased at an annual rate of 4% to 6%, outpacing general consumer inflation.": "历史上大学学杂费年均上涨幅度高达4%至6%，显著高于普通消费品物价通胀。",
    "What happens to 529 funds if my child does not go to college?": "如果孩子将来不上大学，529 账户里的钱怎么办？",
    "You can change the beneficiary to another qualifying family member, use up to $10,000 for student loan repayment, or roll over up to $35,000 into a Roth IRA under SECURE 2.0 rules.": "您可以将受益人转给其他家庭成员，或用于偿还最多10,000美元学贷，亦可转入最多35,000美元至 Roth IRA 养老账户。",
    "Can I use a 529 plan for trade schools or K-12 tuition?": "529 基金能用于职业技校或中小学学费吗？",
    "Yes, qualified distributions can cover accredited trade schools, vocational programs, apprenticeships, and up to $10,000 per year for K-12 private school tuition.": "可以，该款项可用于认证的职业技校，且每年可支持最高10,000美元的K-12基础私立教育学费。",
    "How does a 529 plan impact financial aid eligibility?": "529 账户对申请助学金资格有何影响？",
    "Parent-owned 529 plans are assessed as parental assets on the FAFSA at a maximum rate of 5.64%, having minimal negative impact on financial aid eligibility.": "父母名下的 529 资产在助学金评估中最多仅计入5.64%，对申请助学金的影响微乎其微。",

    // 28. Crypto DCA
    "What is Dollar-Cost Averaging (DCA)?": "什么是定期定额投资法 (DCA)？",
    "Dollar-Cost Averaging is an investment strategy where you invest a fixed amount of money at regular intervals regardless of the asset's fluctuating market price.": "定期定额是一种在固定时间周期投入固定金额的纪律性投资策略，无需理会资产价格的短期波动。",
    "How does DCA apply to high-volatility assets like Crypto?": "定投如何帮助平滑加密资产的高波动风险？",
    "DCA prevents emotional decisions during extreme market peaks and crashes, automatically buying more units when prices are low and fewer when prices are high.": "定投能帮投资者克服暴涨追高和暴跌割肉的人性弱点，在价格偏低时自动买入更多份额，有效降低综合持仓成本。",
    "Is DCA better than investing a lump sum?": "定投比单笔一次性全仓买入更好吗？",
    "Lump sum investing historically wins in steadily rising markets, but DCA provides superior peace of mind, lower emotional risk, and downside protection in highly volatile markets.": "在单边牛市中单笔投资收益通常更优，但对于极端波动的资产，定投能提供极佳的心态平和度与回撤保护。",
    "What is the best frequency for crypto DCA?": "定投的最佳执行频率是什么？",
    "Weekly or bi-weekly DCA aligned with your pay cycle is ideal for capturing market volatility while keeping trading fees manageable.": "配合发薪周期进行每周或双周定投最为理想，既能平滑波动，又不会产生过于密集的交易手续费。",
    "Does DCA guarantee profits in cryptocurrency?": "坚持定投加密货币一定能确保稳赚不赔吗？",
    "No, DCA does not protect against prolonged declines or failing crypto projects; it only ensures you achieve the weighted average market purchase price.": "不能。定投无法消除标的归零或长期下行的根本风险，它仅能确保您获得市场的加权平均买入成本。",

    // 29. Tip
    "What is the standard tipping percentage?": "小费的常见通用比例是多少？",
    "In the United States and Canada, standard restaurant tipping guidelines range from 15% for adequate service, 18% for good service, to 20% or more for exceptional service.": "在北美餐厅就餐，标准服务通常给15%，良好服务给18%，体验卓越或高端餐饮通常给20%或更多。",
    "Should tips be calculated before or after sales tax?": "小费应按税前消费还是税后总额计算？",
    "Etiquette traditionally dictates calculating the tip percentage on the pre-tax food and beverage subtotal, though many automated payment terminals calculate tip on the post-tax total.": "传统就餐礼仪通常以税前餐费小计为基数计算小费，尽管许多刷卡机终端默认以税后总额计算。",
    "How do you split a bill evenly among friends?": "朋友聚餐如何公平AA制分摊账单？",
    "Calculate the total bill including food, beverages, tax, and tip, and divide the total amount equally by the number of paying participants.": "将菜品、饮料、消费税及全部小费汇总后，除以实际付款人数即可得出每人应付金额。",

    // 30. Discount
    "How do you calculate a percentage discount?": "百分比折扣是如何计算的？",
    "Multiply the original price by the discount percentage divided by 100 to find the savings, and subtract that amount from the original price: Final Price = Original Price × (1 - Discount%).": "将原价乘以折扣百分比得出省下的金额，再用原价减去该金额：最终价格 = 原价 × (1 - 折扣率)。",
    "How do multiple stacked discounts work?": "多重叠加优惠折扣是如何计算的？",
    "Stacked discounts apply sequentially rather than additively. For example, 20% off plus an extra 10% off results in an effective 28% total discount, not 30%.": "叠加折扣是顺次连乘计算而非简单相加。例如打八折（降20%）基础上再打九折（再降10%），综合折扣实为28%，而非30%。",
    "Is sales tax applied before or after store discounts?": "消费税是在打折前计征还是在折后计征？",
    "In most jurisdictions, sales tax is calculated on the discounted post-sale price, meaning you pay sales tax only on the actual money spent.": "在大多数地区，消费税均以折后的实际成交价格为税基，您只需为您实际付出的金额纳税。"
  }
};
