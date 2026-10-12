import type { Lang } from './ui';

export const faqsFinance: Partial<Record<Lang, Record<string, string>>> = {
  en: {},
  es: {
    // Compound Interest
    "What is compound interest?": "¿Qué es el interés compuesto?",
    "Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods. It causes your wealth to grow exponentially over time.": "El interés compuesto es aquel que se calcula tanto sobre el capital inicial como sobre los intereses generados en periodos anteriores, permitiendo que el patrimonio crezca de forma exponencial.",
    "What is the Rule of 72?": "¿Qué es la Regla del 72?",
    "The Rule of 72 is a quick mental formula to estimate how many years it takes to double your money. Divide 72 by your annual interest rate (e.g. at 8%, your money doubles in about 9 years).": "Es una fórmula mental para calcular cuántos años tarda en duplicarse tu dinero. Divide 72 entre la tasa de interés anual (ej. al 8%, se duplica en unos 9 años).",
    "How does compounding frequency affect total returns?": "¿Cómo influye la frecuencia de capitalización en el rendimiento?",
    "The more frequently interest compounds (annually, monthly, daily), the higher your effective annual yield (APY) will be, as interest starts earning interest sooner.": "Cuanto mayor sea la frecuencia de capitalización (anual, mensual, diaria), mayor será el rendimiento efectivo anual (TAE / APY), ya que los intereses generan nuevos intereses antes.",

    // TVM
    "What is the Time Value of Money (TVM)?": "¿Qué es el Valor del Dinero en el Tiempo (TVM)?",
    "The Time Value of Money principle states that a dollar today is worth more than a dollar in the future because today's dollar can be invested and earn interest.": "Es el principio financiero que establece que una cantidad de dinero hoy vale más que la misma cantidad en el futuro, debido a su capacidad de generar rendimientos al ser invertida.",
    "What are the core components of TVM calculations?": "¿Cuáles son los componentes clave del cálculo TVM?",
    "The five core variables are Present Value (PV), Future Value (FV), Interest Rate per Period (Rate), Total Number of Periods (Nper), and Periodic Payment (PMT).": "Las cinco variables fundamentales son: Valor Actual (VA/PV), Valor Futuro (VF/FV), Tasa de Interés (Rate), Número de Periodos (Nper) y Pago Periódico (PMT).",
    "What is the difference between an ordinary annuity and annuity due?": "¿Cuál es la diferencia entre una anualidad ordinaria y una anualidad vencida?",
    "In an ordinary annuity, payments occur at the end of each period. In an annuity due, payments occur at the beginning of each period, earning an extra compounding cycle of interest.": "En la ordinaria los pagos se realizan al final de cada periodo; en la vencida o anticipada se efectúan al inicio, devengando un ciclo adicional de intereses compuestos.",

    // ROI
    "How is Return on Investment (ROI) calculated?": "¿Cómo se calcula el Retorno de la Inversión (ROI)?",
    "ROI is calculated by subtracting the initial cost of the investment from the final value, and dividing that net gain by the initial cost: ROI = (Net Profit / Cost of Investment) × 100%.": "Se calcula restando el coste inicial al valor final de la inversión y dividiendo la ganancia neta entre el coste inicial: ROI = (Beneficio Neto / Coste) × 100%.",
    "What is the difference between simple ROI and annualized ROI?": "¿Cuál es la diferencia entre el ROI simple y el ROI anualizado?",
    "Simple ROI measures total percentage return regardless of duration. Annualized ROI (CAGR) standardizes the return into a per-year geometric rate, enabling fair comparison between investments held for different lengths of time.": "El ROI simple mide la ganancia porcentual total sin importar el plazo; el anualizado (CAGR) lo normaliza a una tasa geométrica por año, permitiendo comparar inversiones de distinta duración.",
    "What is considered a good ROI?": "¿Qué porcentaje se considera un buen ROI?",
    "Historically, the broad stock market (S&P 500) has returned an average of 7% to 10% annually before inflation. Investments with higher expected returns generally involve higher risk of capital loss.": "Históricamente, la bolsa global (S&P 500) ha rentado entre un 7% y un 10% anual medio antes de inflación. Rendimientos mayores conllevan habitualmente mayor riesgo.",

    // Savings Goal
    "How do I calculate how much to save monthly for a goal?": "¿Cómo calculo cuánto debo ahorrar al mes para una meta?",
    "You divide your target savings amount by the number of months until your deadline, while factoring in the compounding interest earned on your growing balance.": "Se divide el objetivo total de ahorro entre el número de meses disponibles, considerando los intereses compuestos que acumularás por el camino.",
    "Should I keep savings goal funds in high-yield savings or stocks?": "¿Debo guardar mis ahorros para una meta en cuentas remuneradas o en bolsa?",
    "For goals under 3 to 5 years (like a car or home down payment), keep funds in safe, liquid instruments like High-Yield Savings Accounts (HYSA) or CDs. For goals 5+ years away, a diversified investment portfolio may be suitable.": "Para metas a menos de 3 o 5 años (coche, entrada de vivienda), utiliza instrumentos seguros y líquidos como cuentas remuneradas o depósitos. A más de 5 años, una cartera de inversión diversificada es adecuada.",
    "How can I stay on track with my savings goals?": "¿Cómo puedo ser constante con mis metas de ahorro?",
    "Automate recurring monthly transfers into a dedicated savings account immediately after your paycheck arrives (the 'pay yourself first' strategy).": "Automatiza transferencias mensuales a una cuenta de ahorro independiente justo después de cobrar tu sueldo (la regla de 'pagarte a ti primero').",

    // Stock Return
    "How do I calculate stock returns?": "¿Cómo calculo el rendimiento de mis acciones?",
    "Total stock return equals capital gains (ending price minus purchase price) plus any dividends received, divided by the original purchase cost.": "El rendimiento total equivale a la plusvalía (precio final menos precio de compra) más los dividendos cobrados, dividido entre el importe de compra.",
    "What is CAGR in stock returns?": "¿Qué es el CAGR en el rendimiento bursátil?",
    "Compound Annual Growth Rate (CAGR) measures the geometric mean annual return of a stock over multiple years, smoothing out annual market fluctuations.": "La Tasa de Crecimiento Anual Compuesto (CAGR) mide la rentabilidad media anual geométrica de una inversión, suavizando la volatilidad anual.",
    "What is the difference between simple return and annualized return?": "¿Qué diferencia hay entre la rentabilidad simple y la anualizada?",
    "Simple return measures absolute percentage gain over the entire holding period, while annualized return shows the steady annual rate required to achieve that result.": "La rentabilidad simple mide el porcentaje ganado en todo el tiempo; la anualizada muestra el ritmo constante por año que habría producido ese resultado.",

    // CAPM
    "What is the Capital Asset Pricing Model (CAPM)?": "¿Qué es el modelo CAPM de valoración de activos?",
    "CAPM calculates an asset's expected return based on its risk relative to the overall market, using the formula: Expected Return = Risk-Free Rate + Beta × (Market Return - Risk-Free Rate).": "El modelo CAPM calcula la rentabilidad esperada de un activo en función de su riesgo de mercado: Rendimiento = Tasa Libre de Riesgo + Beta × (Rendimiento de Mercado - Tasa Libre de Riesgo).",
    "What does Asset Beta (β) represent?": "¿Qué representa la Beta (β) de un activo?",
    "Beta measures an asset's volatility compared to the broader market. A beta of 1.0 indicates market-level volatility; above 1.0 indicates higher volatility, and below 1.0 indicates lower volatility.": "Mide la volatilidad del activo respecto al mercado general. Una Beta de 1 indica volatilidad de mercado; superior a 1 es más volátil e inferior a 1 es más defensivo.",
    "What is the Risk-Free Rate?": "¿Qué es la tasa libre de riesgo?",
    "The risk-free rate is the theoretical rate of return of an investment with zero risk of default, typically represented by long-term government bond yields (like 10-year US Treasuries).": "Es la rentabilidad teórica de una inversión sin riesgo de impago, representada comúnmente por bonos gubernamentales soberanos a 10 años.",
    "What is the Market Risk Premium?": "¿Qué es la prima de riesgo de mercado?",
    "The market risk premium is the additional return investors demand for choosing risky market equities over risk-free government securities.": "Es la rentabilidad adicional que los inversores exigen por asumir el riesgo de invertir en bolsa frente a la deuda pública segura.",

    // Dividend
    "What is dividend yield versus yield on cost?": "¿Qué diferencia hay entre Dividend Yield y Yield on Cost?",
    "Dividend yield is the annual dividend divided by the current stock price. Yield on cost is the annual dividend divided by your original purchase price, which increases as companies raise their dividends over time.": "Dividend Yield es el dividendo anual entre la cotización actual; Yield on Cost es el dividendo anual entre el precio original de compra, el cual aumenta si la empresa sube dividendos.",
    "What is a Dividend Reinvestment Plan (DRIP)?": "¿Qué es un plan de reinversión de dividendos (DRIP)?",
    "A DRIP automatically uses your cash dividend payments to purchase additional shares or fractional shares of the stock, compounding your share count and future payouts without commission fees.": "Es un programa que reinvierte automáticamente los dividendos cobrados en comprar más acciones de la empresa, aprovechando el interés compuesto.",
    "Are dividend payments guaranteed?": "¿Los pagos de dividendos están garantizados?",
    "No, company boards can reduce, suspend, or eliminate dividend payouts at any time depending on company profitability and economic conditions.": "No, el consejo de administración de una empresa puede recortar, suspender o suprimir los dividendos en cualquier momento según la coyuntura del negocio.",

    // Inflation
    "What is inflation?": "¿Qué es la inflación?",
    "Inflation is the general rise in prices for goods and services over time, resulting in a decline in the purchasing power of money.": "La inflación es el aumento generalizado y sostenido de los precios de bienes y servicios a lo largo del tiempo, reduciendo el poder adquisitivo del dinero.",
    "How does inflation affect my savings?": "¿Cómo afecta la inflación a mis ahorros?",
    "Cash sitting in zero-interest accounts loses purchasing power each year. If inflation is 3%, $100 today will only buy about $97 worth of goods next year.": "El dinero en cuentas sin rentabilidad pierde valor real cada año. Con una inflación del 3%, 100 € hoy sólo comprarán bienes por valor de unos 97 € dentro de un año.",
    "How is inflation officially measured?": "¿Cómo se mide oficialmente la inflación?",
    "Inflation is primarily measured using the Consumer Price Index (CPI), which tracks price changes across a standard market basket of consumer goods and services.": "Se mide principalmente a través del Índice de Precios al Consumo (IPC), que monitoriza la variación de precios de una cesta representativa de bienes y servicios.",
    "What is the historical average inflation rate?": "¿Cuál ha sido la tasa histórica media de inflación?",
    "In the United States, inflation has historically averaged between 2.5% and 3.2% per year over long multi-decade horizons.": "Históricamente, en las economías desarrolladas la inflación media ha oscilado entre el 2% y el 3,5% anual a largo plazo.",
    "How can I protect my money from losing value to inflation?": "¿Cómo puedo proteger mi dinero de la inflación?",
    "Investing in assets whose earnings outpace inflation—such as diversified equities, Treasury Inflation-Protected Securities (TIPS), real estate, and inflation-indexed bonds.": "Invirtiendo en activos cuyos rendimientos superen la inflación: acciones diversificadas, bienes inmuebles o bonos ligados a la inflación (TIPS).",

    // Paycheck
    "What is FICA tax?": "¿Qué son los impuestos FICA / de seguridad social?",
    "FICA is a federal payroll tax that funds Social Security (6.2% on wages up to the wage base limit) and Medicare (1.45% plus an additional 0.9% on high earners).": "Son cotizaciones obligatorias que financian el sistema de Seguridad Social y pensiones de jubilación, invalidez y cobertura sanitaria pública.",
    "What is the difference between pre-tax and post-tax deductions?": "¿Cuál es la diferencia entre deducciones antes y después de impuestos?",
    "Pre-tax deductions (like 401k and health insurance) reduce your taxable gross income before taxes are computed. Post-tax deductions (like Roth contributions or wage garnishments) are taken after taxes.": "Las deducciones antes de impuestos (planes de pensiones, seguro médico) reducen la base imponible; las posteriores se descuentan una vez calculados los impuestos.",
    "What is the difference between gross pay and net pay?": "¿Cuál es la diferencia entre salario bruto y salario neto?",
    "Gross pay is the total amount earned before any taxes or deductions. Net pay (take-home pay) is the actual cash deposited into your bank account after all deductions.": "El salario bruto es la retribución íntegra acordada; el salario neto es la cantidad líquida real que ingresas en tu cuenta tras retenciones y cotizaciones.",
    "How does my W-4 filing status affect my paycheck?": "¿Cómo influye la situación fiscal o IRPF en mi nómina?",
    "Your W-4 form informs your employer how much federal income tax to withhold each pay period based on your filing status, dependents, and other income.": "Determina el porcentaje exacto de retención en origen que la empresa te aplica en función de tu estado civil, hijos a cargo y tramo de ingresos.",
    "Why do state and local taxes vary so much?": "¿Por qué varían los impuestos según la región?",
    "Each state set its own income tax brackets (some states have no income tax at all, like Texas and Florida, while others have progressive tax rates). Local taxes may also apply depending on the specific city or county you work or live in.": "Cada comunidad autónoma, estado o municipio fija sus propios tramos impositivos y deducciones, existiendo regiones con tipos notablemente más bajos o exenciones.",

    // Net Worth
    "What is net worth?": "¿Qué es el patrimonio neto?",
    "Net worth is the total market value of everything you own (assets) minus everything you owe to creditors (liabilities).": "El patrimonio neto es el valor económico real de todos tus bienes e inversiones (activo) restando todas tus deudas y obligaciones pendientes (pasivo).",
    "How often should I calculate my net worth?": "¿Con qué frecuencia debo calcular mi patrimonio neto?",
    "Reviewing your net worth quarterly or semi-annually gives you a clear high-level view of your financial health without obsessing over daily market swings.": "Revisarlo trimestral o semestralmente te brinda una perspectiva clara de tu salud financiera sin obsesionarte con las oscilaciones diarias de los mercados.",
    "What counts as an asset vs. a liability?": "¿Qué se considera un activo frente a un pasivo?",
    "Assets include bank balances, investment accounts, home equity, and retirement funds. Liabilities include mortgages, student loans, car loans, and credit card debt.": "Activos son cuentas corrientes, acciones, inmuebles y fondos de pensión. Pasivos son hipotecas, préstamos de vehículos, créditos de estudios y deudas de tarjetas.",
    "Should I include my house and mortgage in my net worth?": "¿Debo incluir mi vivienda habitual y la hipoteca en mi patrimonio?",
    "Yes, you include the current fair market value of the home under assets and the remaining mortgage balance under liabilities. The difference is your home equity.": "Sí: incluye el valor de mercado actual de la vivienda en tus activos y el saldo pendiente de hipoteca en los pasivos. La diferencia es tu capital neto en la vivienda.",
    "What does it mean to have a negative net worth?": "¿Qué significa tener un patrimonio neto negativo?",
    "A negative net worth means your total debts exceed your total assets. This is common for young adults and recent graduates with student loans.": "Significa que tus deudas totales superan el valor de tus bienes. Es algo habitual en recién graduados con préstamos de estudios o al inicio de la vida laboral.",

    // Emergency Fund
    "How much emergency fund is recommended?": "¿Qué cantidad se recomienda tener en un fondo de emergencia?",
    "Most financial planners recommend saving 3 to 6 months of essential living expenses, or 9 to 12 months for freelancers or single-income households.": "La mayoría de expertos recomiendan entre 3 y 6 meses de gastos fijos esenciales, o entre 9 y 12 meses para trabajadores autónomos o familias con un único sueldo.",
    "What expenses should be included in an emergency fund budget?": "¿Qué gastos deben incluirse en el cálculo del fondo de emergencia?",
    "Include only non-negotiable living costs: housing (rent/mortgage), utilities, groceries, basic transportation, minimum debt payments, and healthcare insurance.": "Solo los gastos indispensables: hipoteca o alquiler, suministros básicos, alimentación, transporte mínimo, cuotas de préstamos y seguro de salud.",
    "Where should I keep my emergency fund?": "¿Dónde debo custodiar el fondo de emergencia?",
    "In a dedicated High-Yield Savings Account (HYSA) or money market account where it is FDIC-insured, earns interest, and can be accessed immediately without risk.": "En cuentas remuneradas o fondos monetarios muy líquidos con garantía bancaria oficial, para que genere intereses sin riesgo y esté disponible de inmediato.",
    "Should I pay off debt or build an emergency fund first?": "¿Conviene antes amortizar deudas o crear el fondo de emergencia?",
    "Build a starter emergency fund of 1 month of expenses or $1,000 to $2,000 first, then aggressively pay off high-interest consumer debt before expanding to 3-6 months.": "Crea primero un colchón inicial de 1 mes de gastos o 1.000 €, liquida después deudas caras de tarjetas de crédito y amplía luego el fondo a 3-6 meses.",
    "When is it appropriate to use emergency fund savings?": "¿Cuándo está justificado usar el fondo de emergencia?",
    "Use it only for genuine, unexpected emergencies: sudden medical bills, unexpected car repairs, or living expenses following job loss.": "Únicamente ante imprevistos graves: avería indispensable del coche, urgencias médicas no cubiertas o pérdida sobrevenida del puesto de trabajo.",

    // Fee Impact
    "What is an expense ratio?": "¿Qué es el ratio de gastos (TER / Expense Ratio)?",
    "An expense ratio is the annual percentage fee charged by mutual funds and ETFs to cover fund management, administrative expenses, and operating costs.": "Es el porcentaje anual que deducen los fondos de inversión y ETFs para sufragar gastos de gestión, administración y custodia.",
    "How do fees compound over time?": "¿Cómo impactan las comisiones compuestas con los años?",
    "Fees are deducted annually from your total assets, meaning you lose both the fee money and all future compounding returns that money would have earned.": "Se deducen cada año de todo tu saldo, lo que te priva tanto del dinero de la comisión como de todos los rendimientos compuestos que habría generado.",
    "What is a good expense ratio for an index fund?": "¿Qué porcentaje se considera un buen ratio de gastos en un fondo indexado?",
    "Low-cost index funds and ETFs typically have expense ratios between 0.02% and 0.10%, whereas actively managed mutual funds often charge 0.60% to 1.50% or more.": "Los ETFs y fondos indexados de bajo coste cobran entre un 0,02% y un 0,10% anual, frente al 0,60% - 1,50% o más de los fondos de gestión activa tradicionales.",
    "What other investment fees should I look out for?": "¿Qué otras comisiones de inversión debo vigilar?",
    "Watch out for advisory fees (AUM fees of 1%), front-end or back-end sales loads, trading commissions, account maintenance fees, and custodial charges.": "Comisiones de corretaje por compraventa, custodia bancaria, corretaje, corretaje y comisiones de suscripción o reembolso.",
    "How much can a 1% fee difference affect my retirement savings?": "¿Cuánto puede restar una diferencia de un 1% de comisión en mi jubilación?",
    "A 1% annual fee difference can erode 25% to 30% of your total ending portfolio wealth over a 30-year investment horizon.": "Una diferencia de solo el 1% anual puede devorar entre el 25% y el 30% del patrimonio final acumulado tras 30 años de inversión.",

    // College Savings (529)
    "What is a 529 plan?": "¿Qué es un plan de ahorro para la universidad?",
    "A 529 plan is a tax-advantaged savings and investment plan designed to encourage saving for future higher education expenses with tax-free growth and qualified withdrawals.": "Es un plan de ahorro e inversión con ventajas fiscales diseñado para acumular fondos destinados a gastos educativos con exención de impuestos.",
    "How fast do college costs increase?": "¿A qué ritmo suben los costes de la universidad?",
    "Historically, higher education tuition and fees have increased at an annual rate of 4% to 6%, outpacing general consumer inflation.": "Históricamente, las tasas y matrículas universitarias han crecido a ritmos del 4% al 6% anual, superando ampliamente la inflación general.",
    "What happens to 529 funds if my child does not go to college?": "¿Qué ocurre si mi hijo finalmente no va a la universidad?",
    "You can change the beneficiary to another qualifying family member, use up to $10,000 for student loan repayment, or roll over up to $35,000 into a Roth IRA under SECURE 2.0 rules.": "Puedes cambiar el beneficiario a otro hijo o familiar, utilizarlo para formación profesional o traspasarlo a planes de jubilación según la normativa aplicable.",
    "Can I use a 529 plan for trade schools or K-12 tuition?": "¿Puedo usarlo para formación profesional o colegios privados?",
    "Yes, qualified distributions can cover accredited trade schools, vocational programs, apprenticeships, and up to $10,000 per year for K-12 private school tuition.": "Sí, cubre formación profesional reglada, grados técnicos acreditados y determinados cursos preparatorios reconocidos.",
    "How does a 529 plan impact financial aid eligibility?": "¿Afecta este plan de ahorro a las becas públicas?",
    "Parent-owned 529 plans are assessed as parental assets on the FAFSA at a maximum rate of 5.64%, having minimal negative impact on financial aid eligibility.": "Al considerarse patrimonio familiar de los progenitores, solo computa en un porcentaje muy bajo, preservando prácticamente intacto el derecho a becas.",

    // Crypto DCA
    "What is Dollar-Cost Averaging (DCA)?": "¿Qué es la estrategia DCA (Dollar-Cost Averaging)?",
    "Dollar-Cost Averaging is an investment strategy where you invest a fixed amount of money at regular intervals regardless of the asset's fluctuating market price.": "Es la técnica de invertir una cantidad fija de dinero a intervalos regulares (semanal, mensual) sin importar las fluctuaciones del precio del activo.",
    "How does DCA apply to high-volatility assets like Crypto?": "¿Cómo se aplica el DCA en activos volátiles como las criptomonedas?",
    "DCA prevents emotional decisions during extreme market peaks and crashes, automatically buying more units when prices are low and fewer when prices are high.": "Evita errores emocionales en picos y desplomes, adquiriendo automáticamente más unidades cuando el precio baja y menos cuando sube.",
    "Is DCA better than investing a lump sum?": "¿Es mejor el DCA que invertir todo el capital de golpe?",
    "Lump sum investing historically wins in steadily rising markets, but DCA provides superior peace of mind, lower emotional risk, and downside protection in highly volatile markets.": "Invertir de golpe suele rendir más en mercados alcistas continuos, pero el DCA ofrece tranquilidad mental y reduce drásticamente el riesgo de comprar en máximos.",
    "What is the best frequency for crypto DCA?": "¿Cuál es la mejor frecuencia para hacer DCA en criptomonedas?",
    "Weekly or bi-weekly DCA aligned with your pay cycle is ideal for capturing market volatility while keeping trading fees manageable.": "Una frecuencia semanal o quincenal coincidente con el cobro de tu nómina es idónea para promediar la volatilidad sin pagar comisiones excesivas.",
    "Does DCA guarantee profits in cryptocurrency?": "¿El DCA garantiza beneficios en criptomonedas?",
    "No, DCA does not protect against prolonged declines or failing crypto projects; it only ensures you achieve the weighted average market purchase price.": "No; si un proyecto fracasa o cae indefinidamente, el DCA solo promedia pérdidas. Requiere seleccionar activos con sólidos fundamentos a largo plazo."
  },

};
