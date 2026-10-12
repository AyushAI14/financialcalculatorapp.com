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

};
