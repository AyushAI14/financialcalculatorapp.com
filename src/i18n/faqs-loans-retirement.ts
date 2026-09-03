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

  // Chinese Simplified (zh-cn)
  "zh-cn": {
    "How does an amortized loan work?": "等额本息/本金等摊销贷款是如何运作的？",
    "With an amortized loan, you make equal periodic payments. Early in the loan term, the majority of each payment goes toward interest. Over time, an increasing portion goes toward paying down the principal balance until the debt is fully paid off.": "在等额摊销贷款中，初期每期还款中大部分是利息；随着剩余本金减少，后期每期还款中归还本金的比例逐渐增大，直至贷款全额结清。",
    "What is the difference between fixed-rate and variable-rate loans?": "固定利率贷款与浮动利率贷款有何区别？",
    "A fixed-rate loan maintains the exact same interest rate and payment throughout the loan term. A variable-rate loan has an interest rate that adjusts periodically based on benchmark interest rates, which can increase or decrease your payments.": "固定利率在整个贷款期内保持利率与月供绝对不变；浮动利率则锚定市场基准利率（如LPR），利率随市场周期调整并使月供上下浮动。",
    "Can I pay off my loan early without penalty?": "我可以提前还清贷款吗？是否有违约金？",
    "Most consumer loans and conventional mortgages allow prepayment without penalties, but some lenders include a prepayment penalty clause. Always verify your loan agreement terms before making accelerated principal payments.": "大部分房贷和消费贷支持提前还款，但部分金融机构在合同前1至3年内设有提前还款违约金条款，还款前需核对借款协议约定。",

    "What is the difference between interest rate and APR?": "名义利率与实际年化利率（APR）有何不同？",
    "The interest rate is the nominal cost of borrowing the principal balance. The Annual Percentage Rate (APR) reflects the total annual cost of the loan including points, broker fees, and origination charges.": "名义利率仅反映借款资金的票面利息成本；实际综合年化利率（APR）则将所有手续费、评估费、担保费折算入内，体现真实的资金借贷年化成本。",
    "Why is APR higher than the advertised interest rate?": "为什么实际 APR 往往高于广告宣传的票面利率？",
    "APR is higher because it amortizes all upfront lender fees, discount points, and closing costs into the effective yearly rate, revealing the true cost of credit.": "因为 APR 包含了借款人前期支付的开办费、中介佣金和杂项过户费，揭示了信贷借贷的全部真实成本。",
    "Is APR useful for comparing different loan offers?": "APR 是否是横向对比不同贷款产品的最佳指标？",
    "Yes, APR is the best metric for comparing loan offers with different fee structures, provided you plan to keep the loan for its full term.": "是的。APR 统一了不同银行的手续费与利率口径，是比较贷款真实综合成本最公允的标准。",

    "How long do I need to stay in a home for buying to beat renting?": "一套自住房通常需要居住多少年，买房才比租房更合算？",
    "Because upfront closing costs, moving fees, and commissions are substantial, homeowners usually need to stay in a property for 4 to 7 years for buying to financially outperform renting.": "由于购房涉及契税、中介佣金、过户及装修等大额前期沉没成本，通常需要在该房屋中居住4至7年以上，买房的财富沉淀效应才能超越租房。",
    "What hidden costs of homeownership should renters consider?": "租房一族在考虑购房时，容易忽视哪些隐性持有成本？",
    "Homeowners must pay property taxes, homeowners insurance, maintenance and repairs (typically 1-2% of home value annually), HOA dues, and potential capital improvement costs.": "房主需要常年承担物业管理费、房屋维修基金（通常每年约为房价的1%至2%）、房产税以及房屋保险等支出。",
    "What is the opportunity cost of buying a home?": "买房置业存在怎样的财务机会成本？",
    "The money spent on down payment, closing costs, and ongoing property maintenance could otherwise remain invested in liquid assets like index funds that compound over time.": "用于支付房屋大额首付和税费的现金，失去了在股票指数基金中享受长期复利增长的投资机会。",

    "How much income should I spend on a mortgage?": "月薪的多少比例用来支付房贷比较合理？",
    "Most financial experts recommend spending no more than 25% to 28% of your gross monthly income on housing costs (the front-end DTI guideline).": "理财专家普遍建议月供总额不宜超过税前月收入的25%至28%（或不超过税后净收入的三分之一），以维持健康现金流。",
    "How does down payment size impact affordability?": "首付金额的高低如何影响整体购房能力？",
    "A larger down payment reduces your loan amount, eliminates Private Mortgage Insurance (PMI) if you put down 20%, and lowers your monthly mortgage payment.": "更高的首付能够直接减少向银行借贷的本金，避免支付贷款保险，并显著降低每月的还贷压力。",
    "How do interest rates affect purchasing power?": "房贷利率变动对买房人的实际购买力影响有多大？",
    "Every 1% increase in mortgage interest rates reduces your home purchasing power by roughly 10% for the same monthly payment budget.": "在保持每月固定还款预算不变的前提下，房贷利率每上升1个百分点，您所能负担的房屋总价上限就会缩减约10%。",

    "What is the 20/4/10 rule for buying a car?": "买车理财的 20/4/10 黄金法则是什么？",
    "The 20/4/10 rule recommends putting down at least 20%, financing for no longer than 4 years (48 months), and keeping total vehicle expenses under 10% of gross monthly income.": "法则建议：购车首付不低于20%、贷款期限最长不超过4年（48个月），且车贷、油费、保险等全部用车开销控制在月总收入的10%以内。",
    "Is a longer auto loan term better?": "车贷分期期数拉得越长越好吗？",
    "Longer terms (like 72 or 84 months) lower your monthly payment, but you pay substantially more total interest and risk becoming 'underwater' (owing more than the vehicle is worth).": "较长期限（如6年或7年）虽然降低了月供，但总利息支出大幅增加，并且容易出现车子贬值后的二手残值低于剩余贷款余额的“倒挂”风险。",
    "How does vehicle depreciation affect my loan?": "汽车的折旧贬值对汽车贷款有何影响？",
    "New cars depreciate rapidly (often losing 20% in the first year). Without an adequate down payment, you risk owing more on your loan than the car's market value.": "新车购买首年贬值往往高达20%。如果首付比例不足，前期所欠车贷本金将高于车辆实际二手价值。",

    "Why does paying only the minimum take so long?": "为什么只还信用卡最低还款额会导致长期还不清？",
    "Credit card minimum payments are often set around 1% to 2% of the balance plus accrued interest. As the balance slowly drops, the required minimum drops, extending payoff times to decades.": "最低还款额通常仅包含当期利息加1%至2%的本金。随着欠款减少，最低还款金额也会降低，导致本金清偿极其缓慢，往往需要数十年才能结清。",
    "How much faster can I pay off credit cards by paying extra?": "每月多还一部分钱，能多大程度加速信用卡还款？",
    "Paying even $50 or $100 above the minimum payment can cut your payoff timeline by several years and save thousands of dollars in compounding interest charges.": "即使每月在最低还款额之外多还几十至上百元，也能将还款周期缩短数年甚至数十年，并省下巨额循环利息。",
    "Should I use a balance transfer card to pay off debt?": "我应该办理零息账单分期或转贷卡来偿还信用卡债务吗？",
    "A 0% APR balance transfer credit card can save significant interest if you pay off the full balance during the promotional period (typically 12-21 months) and factor in the 3%-5% transfer fee.": "在免息优惠期内（通常12至21个月）全力还清本金的前提下，转贷可以节省可观利息，但需权衡一次性转账手续费。",

    "What is the 4% rule in retirement planning?": "退休规划中的 4% 提领法则是怎么回事？",
    "The 4% rule suggests that withdrawing 4% of your retirement portfolio in the first year, adjusted for inflation annually thereafter, provides a high probability that your nest egg will last at least 30 years.": "4%法则指出：在退休第一年提取养老资产总额的4%，随后每年根据通胀率调增提取额，有极高概率确保资产至少能支撑30年而不枯竭。",
    "How much money do I need to retire comfortably?": "要安享退休生活，通常需要储备多少养老资金？",
    "A common benchmark is accumulating 25 times your anticipated annual retirement expenses, or replacing 70% to 80% of your pre-retirement income.": "普遍的测算标准是积累相当于退休后预估年支出25倍的资产总额，或达到退休前工作薪资收入的70%至80%替代率。",
    "How does inflation impact retirement spending?": "通货膨胀对退休养老资金有何长远威胁？",
    "Inflation steadily reduces the purchasing power of your savings. At a 3% inflation rate, everyday living expenses double roughly every 24 years, requiring growing investment portfolios.": "在3%的平均通胀率下，生活开支每24年便会翻倍，因此养老资产绝不能仅存放现金，必须通过权益类投资持续战胜通胀。",

    "What is an employer 401(k) match?": "什么是雇主养老金对等配比（401k Match）？",
    "An employer match is money your employer contributes to your 401(k) account based on your own contributions (e.g. matching 50% of contributions up to 6% of your salary). It is effectively an instant return on your savings.": "指公司根据员工自主缴存的金额，按比例赠予并打入个人养老账户的资金（如员工交6%薪资，公司补贴3%），相当于即时获得无风险回报。",
    "What are the 401(k) contribution limits for 2024?": "2024年度养老账户的个人缴存上限是多少？",
    "For 2024, the employee contribution limit is $23,000 for those under 50. Individuals aged 50 and older can contribute an additional $7,500 catch-up contribution for a total of $30,500.": "2024年50岁以下员工的个人年度免税缴存上限为23,000美元，50岁及以上可额外享受7,500美元的补足额度。",
    "What is the difference between Traditional 401(k) and Roth 401(k)?": "传统 401(k) 与 Roth 401(k) 的核心区别是什么？",
    "Traditional 401(k) contributions are pre-tax and reduce your current taxable income, with withdrawals taxed in retirement. Roth 401(k) contributions are post-tax, but all qualified growth and withdrawals are completely tax-free.": "传统401(k)现在税前缴存并抵扣当期所得税，退休领钱时按普通收入纳税；Roth 401(k)现在用税后工资缴存，退休后的投资收益与本金提取完全免税。",

    "What is the standard tipping percentage?": "就餐消费时标准的小费比例是多少？",
    "In the United States and Canada, standard restaurant tipping guidelines range from 15% for adequate service, 18% for good service, to 20% or more for exceptional service.": "北美餐饮服务中，满意服务一般给15%，良好服务给18%，优质出色服务通常给20%或以上。",
    "Should tips be calculated before or after sales tax?": "小费应该按税前消费额算，还是按含税总额算？",
    "Etiquette traditionally dictates calculating the tip percentage on the pre-tax food and beverage subtotal, though many automated payment terminals calculate tip on the post-tax total.": "传统餐饮礼仪标准是按税前的菜品酒水小计金额乘以小费比例，不过许多刷卡 POS 机终端默认按含税总额自动推算。",
    "How do you split a bill evenly among friends?": "朋友聚餐时如何公平 AA 制均摊总账单？",
    "Calculate the total bill including food, beverages, tax, and tip, and divide the total amount equally by the number of paying participants.": "将菜品总价、消费税和服务小费全部相加得出应付总额，再平摊除以实际参与买单的总人数。",

    "How do you calculate a percentage discount?": "如何快速计算打折后的优惠价格？",
    "Multiply the original price by the discount percentage divided by 100 to find the savings, and subtract that amount from the original price: Final Price = Original Price × (1 - Discount%).": "将原价乘以折后比例（例如7折即乘以0.7），或先算立减金额再扣减：最终实付 = 原价 × (1 - 折扣百分比)。",
    "How do multiple stacked discounts work?": "商场的多重叠加折扣（折上折）是如何计算的？",
    "Stacked discounts apply sequentially rather than additively. For example, 20% off plus an extra 10% off results in an effective 28% total discount, not 30%.": "叠加折扣是按先后顺序阶梯式计算，而非简单相加。例如先打8折再打9折，实际总折扣为72折（即省28%），并非直接减30%。",
    "Is sales tax applied before or after store discounts?": "消费税是在打折前收取，还是按折后实付价收取？",
    "In most jurisdictions, sales tax is calculated on the discounted post-sale price, meaning you pay sales tax only on the actual money spent.": "在绝大部分国家和地区，消费增值税均以打折后的最终成交价为税基进行核算，您只需为实际支出的金额交税。"
  }
};
