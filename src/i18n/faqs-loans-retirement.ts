import type { Lang } from './ui';

export const faqsLoansRetirement: Partial<Record<Lang, Record<string, string>>> = {
  en: {},
  es: {
    // Loan Calculator
    "How does an amortized loan work?": "¿Cómo funciona un préstamo amortizable?",
    "With an amortized loan, you make equal periodic payments. Early in the loan term, the majority of each payment goes toward interest. Over time, an increasing portion goes toward paying down the principal balance until the debt is fully paid off.": "En un préstamo amortizable las cuotas son constantes. Al principio la mayor parte del pago corresponde a intereses, y progresivamente se va amortizando más capital hasta liquidar la deuda por completo.",
    "What is the difference between fixed-rate and variable-rate loans?": "¿Cuál es la diferencia entre préstamos a tipo fijo y variable?",
    "A fixed-rate loan maintains the exact same interest rate and payment throughout the loan term. A variable-rate loan has an interest rate that adjusts periodically based on benchmark interest rates, which can increase or decrease your payments.": "El préstamo a tipo fijo mantiene la misma cuota e interés durante todo el plazo; el de tipo variable revisa el interés periódicamente según un índice de referencia (como el Euribor).",
    "Can I pay off my loan early without penalty?": "¿Puedo amortizar mi préstamo por anticipado sin comisiones?",
    "Most consumer loans and conventional mortgages allow prepayment without penalties, but some lenders include a prepayment penalty clause. Always verify your loan agreement terms before making accelerated principal payments.": "La mayoría de contratos permiten amortizaciones parciales o totales, aunque algunas entidades aplican comisiones por cancelación anticipada según la legislación vigente.",

    // APR
    "What is the difference between interest rate and APR?": "¿Cuál es la diferencia entre el tipo de interés nominal (TIN) y la TAE / APR?",
    "The interest rate is the nominal cost of borrowing the principal balance. The Annual Percentage Rate (APR) reflects the total annual cost of the loan including points, broker fees, and origination charges.": "El TIN o interés nominal solo mide el coste del dinero prestado; la TAE (APR) refleja el coste anual total incluyendo comisiones bancarias, gastos de apertura y productos asociados.",
    "Why is APR higher than the advertised interest rate?": "¿Por qué la TAE / APR es mayor que el tipo de interés anunciado?",
    "APR is higher because it amortizes all upfront lender fees, discount points, and closing costs into the effective yearly rate, revealing the true cost of credit.": "Es superior porque integra y anualiza todos los gastos de tramitación, comisiones de apertura y corretajes en una tasa anual efectiva real.",
    "Is APR useful for comparing different loan offers?": "¿Sirve la TAE / APR para comparar diferentes ofertas de crédito?",
    "Yes, APR is the best metric for comparing loan offers with different fee structures, provided you plan to keep the loan for its full term.": "Sí, es el indicador más transparente y fiable para comparar préstamos con diferentes estructuras de comisiones.",

    // Rent vs Buy
    "How long do I need to stay in a home for buying to beat renting?": "¿Cuántos años debo vivir en una casa para que comprar sea mejor que alquilar?",
    "Because upfront closing costs, moving fees, and commissions are substantial, homeowners usually need to stay in a property for 4 to 7 years for buying to financially outperform renting.": "Debido a los elevados gastos iniciales (impuestos de compra, notaría, registro e intermediación), suele requerirse habitar la vivienda entre 4 y 7 años para amortizar los costes frente al alquiler.",
    "What hidden costs of homeownership should renters consider?": "¿Qué costes ocultos de la compra deben considerar los inquilinos?",
    "Homeowners must pay property taxes, homeowners insurance, maintenance and repairs (typically 1-2% of home value annually), HOA dues, and potential capital improvement costs.": "Un propietario debe asumir IBI, seguros, cuotas comunitarias y gastos de conservación y mantenimiento (habitualmente entre el 1% y el 2% del valor del inmueble al año).",
    "What is the opportunity cost of buying a home?": "¿Cuál es el coste de oportunidad al comprar una vivienda?",
    "The money spent on down payment, closing costs, and ongoing property maintenance could otherwise remain invested in liquid assets like index funds that compound over time.": "El capital inmovilizado en la entrada y gastos de escrituración podría estar invertido en carteras diversificadas de bolsa generando rendimientos compuestos.",

    // Home Affordability
    "How much income should I spend on a mortgage?": "¿Qué porcentaje de mis ingresos debería destinar a la hipoteca?",
    "Most financial experts recommend spending no more than 25% to 28% of your gross monthly income on housing costs (the front-end DTI guideline).": "Los expertos recomiendan no comprometer más del 25% al 30% de los ingresos netos familiares mensuales en la cuota de la hipoteca.",
    "How does down payment size impact affordability?": "¿Cómo influye el importe de la entrada en mi capacidad de compra?",
    "A larger down payment reduces your loan amount, eliminates Private Mortgage Insurance (PMI) if you put down 20%, and lowers your monthly mortgage payment.": "Aportar mayor entrada reduce el importe solicitado, rebaja la cuota mensual y abarata las condiciones de tipos y seguros exigidos por la entidad.",
    "How do interest rates affect purchasing power?": "¿Cómo afectan los tipos de interés a mi capacidad de compra?",
    "Every 1% increase in mortgage interest rates reduces your home purchasing power by roughly 10% for the same monthly payment budget.": "Cada subida del 1% en los tipos de interés disminuye tu capacidad máxima de compra en aproximadamente un 10% para una misma cuota mensual.",

    // Auto Loan
    "What is the 20/4/10 rule for buying a car?": "¿Qué es la regla 20/4/10 para comprar un coche?",
    "The 20/4/10 rule recommends putting down at least 20%, financing for no longer than 4 years (48 months), and keeping total vehicle expenses under 10% of gross monthly income.": "Aconseja dar al menos un 20% de entrada, no financiar a más de 4 años (48 meses) y que el coste total del vehículo (cuota, seguro, combustible) no exceda el 10% de tus ingresos brutos.",
    "Is a longer auto loan term better?": "¿Conviene financiar el coche a más años?",
    "Longer terms (like 72 or 84 months) lower your monthly payment, but you pay substantially more total interest and risk becoming 'underwater' (owing more than the vehicle is worth).": "Plazos largos reducen la mensualidad pero disparan los intereses totales y provocan que debas más dinero de lo que el vehículo vale en el mercado de ocasión.",
    "How does vehicle depreciation affect my loan?": "¿Cómo afecta la depreciación del vehículo al préstamo?",
    "New cars depreciate rapidly (often losing 20% in the first year). Without an adequate down payment, you risk owing more on your loan than the car's market value.": "Los vehículos nuevos pierden en torno a un 20% de su valor el primer año. Sin una entrada adecuada, el saldo de la deuda superará el valor real del coche.",

    // Credit Card Payoff
    "Why does paying only the minimum take so long?": "¿Por qué se tarda tanto en pagar la tarjeta abonando solo el mínimo?",
    "Credit card minimum payments are often set around 1% to 2% of the balance plus accrued interest. As the balance slowly drops, the required minimum drops, extending payoff times to decades.": "La cuota mínima suele ser solo del 1% al 2% del saldo más intereses. Al descender el saldo, la cuota baja también, prolongando la deuda durante décadas.",
    "How much faster can I pay off credit cards by paying extra?": "¿Cuánto acelero la liquidación de la tarjeta pagando una cantidad fija adicional?",
    "Paying even $50 or $100 above the minimum payment can cut your payoff timeline by several years and save thousands of dollars in compounding interest charges.": "Pagar 50 € o 100 € adicionales al mes puede reducir el plazo en muchos años y ahorrar miles de euros en intereses abusivos.",
    "Should I use a balance transfer card to pay off debt?": "¿Conviene traspasar la deuda a una tarjeta con promoción al 0%?",
    "A 0% APR balance transfer credit card can save significant interest if you pay off the full balance during the promotional period (typically 12-21 months) and factor in the 3%-5% transfer fee.": "Puede ser muy ventajoso si liquidas el saldo durante el periodo promocional sin intereses y la comisión de apertura por traspaso es baja.",

    // Retirement Planner
    "What is the 4% rule in retirement planning?": "¿Qué es la regla del 4% en la jubilación?",
    "The 4% rule suggests that withdrawing 4% of your retirement portfolio in the first year, adjusted for inflation annually thereafter, provides a high probability that your nest egg will last at least 30 years.": "Establece que retirar un 4% del capital el primer año de jubilación y actualizar esa cantidad con la inflación anual permite que los ahorros duren al menos 30 años con alta probabilidad.",
    "How much money do I need to retire comfortably?": "¿Cuánto dinero necesito tener para jubilarme con tranquilidad?",
    "A common benchmark is accumulating 25 times your anticipated annual retirement expenses, or replacing 70% to 80% of your pre-retirement income.": "Una referencia habitual es acumular 25 veces tus gastos anuales previstos en el retiro o asegurar entre el 70% y el 80% de tu último sueldo.",
    "How does inflation impact retirement spending?": "¿Cómo afecta la inflación al dinero de la jubilación?",
    "Inflation steadily reduces the purchasing power of your savings. At a 3% inflation rate, everyday living expenses double roughly every 24 years, requiring growing investment portfolios.": "Con una inflación moderada del 3%, el coste de la vida se duplica cada 24 años, obligando a mantener carteras de inversión que sigan generando rentabilidad.",

    // 401(k)
    "What is an employer 401(k) match?": "¿Qué es la aportación empresarial compartida (Match)?",
    "An employer match is money your employer contributes to your 401(k) account based on your own contributions (e.g. matching 50% of contributions up to 6% of your salary). It is effectively an instant return on your savings.": "Es la aportación adicional que la empresa ingresa en tu plan de pensiones cuando tú aportas, constituyendo una rentabilidad inmediata del 50% al 100% sobre tu dinero.",
    "What are the 401(k) contribution limits for 2024?": "¿Cuáles son los límites anuales de aportación a planes de pensiones?",
    "For 2024, the employee contribution limit is $23,000 for those under 50. Individuals aged 50 and older can contribute an additional $7,500 catch-up contribution for a total of $30,500.": "Existen límites fiscales legales que varían según el país (en EE. UU. 23.000 $ más aportaciones extra a partir de los 50 años).",
    "What is the difference between Traditional 401(k) and Roth 401(k)?": "¿Cuál es la diferencia entre planes deducibles y exentos en la jubilación?",
    "Traditional 401(k) contributions are pre-tax and reduce your current taxable income, with withdrawals taxed in retirement. Roth 401(k) contributions are post-tax, but all qualified growth and withdrawals are completely tax-free.": "Los planes tradicionales desgravan en el IRPF al aportar y tributan al rescatar; los de aportación neta no desgravan hoy pero están 100% exentos de impuestos al jubilarse.",

    // Tip Calculator
    "What is the standard tipping percentage?": "¿Cuál es el porcentaje habitual de propina?",
    "In the United States and Canada, standard restaurant tipping guidelines range from 15% for adequate service, 18% for good service, to 20% or more for exceptional service.": "En hostelería internacional oscila entre el 10% y el 20% según la calidad del servicio, siendo habitual en Europa dejar redondeos o un 5-10% por buena atención.",
    "Should tips be calculated before or after sales tax?": "¿Se calcula la propina antes o después de impuestos?",
    "Etiquette traditionally dictates calculating the tip percentage on the pre-tax food and beverage subtotal, though many automated payment terminals calculate tip on the post-tax total.": "La costumbre financiera dicta aplicar el porcentaje sobre la base imponible (subtotal antes de impuestos y tasas).",
    "How do you split a bill evenly among friends?": "¿Cómo se reparte equitativamente una cuenta entre amigos?",
    "Calculate the total bill including food, beverages, tax, and tip, and divide the total amount equally by the number of paying participants.": "Suma el total de consumiciones, impuestos y propina acordada, y divide el importe resultante a partes iguales entre todos los comensales.",

    // Discount and Tax
    "How do you calculate a percentage discount?": "¿Cómo se calcula un descuento porcentual?",
    "Multiply the original price by the discount percentage divided by 100 to find the savings, and subtract that amount from the original price: Final Price = Original Price × (1 - Discount%).": "Multiplica el precio de catálogo por el porcentaje de descuento para hallar la rebaja, y réstala: Precio Final = Precio Original × (1 - % Descuento).",
    "How do multiple stacked discounts work?": "¿Cómo se aplican los descuentos acumulativos sucesivos?",
    "Stacked discounts apply sequentially rather than additively. For example, 20% off plus an extra 10% off results in an effective 28% total discount, not 30%.": "Se aplican en cascada y no sumándose: un 20% de descuento más un 10% adicional equivale a un 28% de descuento efectivo real, no a un 30%.",
    "Is sales tax applied before or after store discounts?": "¿El impuesto de venta o IVA se aplica antes o después del descuento?",
    "In most jurisdictions, sales tax is calculated on the discounted post-sale price, meaning you pay sales tax only on the actual money spent.": "El impuesto se liquida sobre el precio final rebajado, de modo que solo tributas por la cantidad real efectivamente desembolsada."
  },

};
