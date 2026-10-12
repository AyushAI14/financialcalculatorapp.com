import type { Lang } from './ui';
import { titlesIntrosBatch1 } from './titles-intros-batch1';
import { titlesIntrosBatch2 } from './titles-intros-batch2';
import { titlesIntrosBatch3 } from './titles-intros-batch3';

export const titlesAndIntros: Record<Lang, Record<string, string>> = {
  en: {},
  es: {
    // Titles
    "Mortgage Calculator": "Calculadora de Hipoteca",
    "Loan Calculator": "Calculadora de Préstamos",
    "Debt Snowball vs Avalanche Calculator": "Calculadora Bola de Nieve vs Avalancha de Deudas",
    "Loan Refinance Calculator": "Calculadora de Refinanciación de Préstamos",
    "Student Loan IDR Calculator": "Calculadora de Préstamos Estudiantiles (IDR)",
    "Debt-to-Income (DTI) Ratio Calculator": "Calculadora de Ratio Deuda-Ingreso (DTI)",
    "APR Calculator": "Calculadora de TAE / APR",
    "Rent vs Buy Calculator": "Calculadora Alquilar vs Comprar Vivienda",
    "Home Affordability Calculator": "Calculadora de Capacidad de Compra de Vivienda",
    "Auto Loan Calculator": "Calculadora de Préstamo de Coche",
    "Credit Card Payoff Calculator": "Calculadora de Pago de Tarjetas de Crédito",
    "Retirement Planner": "Planificador de Jubilación",
    "401k Contribution Calculator": "Calculadora de Plan de Jubilación 401(k)",
    "Roth vs Traditional IRA Calculator": "Calculadora Roth vs Traditional IRA",
    "Compound Interest Calculator": "Calculadora de Interés Compuesto",
    "TVM Calculator": "Calculadora del Valor del Dinero en el Tiempo (TVM)",
    "ROI Calculator": "Calculadora de Retorno de Inversión (ROI)",
    "Savings Goal Calculator": "Calculadora de Meta de Ahorro",
    "Stock Return Calculator": "Calculadora de Rendimiento de Acciones",
    "CAPM Calculator": "Calculadora del Modelo CAPM",
    "Dividend Calculator": "Calculadora de Dividendos",
    "Inflation Calculator": "Calculadora de Inflación",
    "Paycheck Calculator": "Calculadora de Nómina y Sueldo Neto",
    "Paycheck Take-Home Pay Calculator": "Calculadora de Sueldo Neto y Nómina",
    "Net Worth Tracker": "Calculadora y Registro de Patrimonio Neto",
    "Emergency Fund Calculator": "Calculadora de Fondo de Emergencia",
    "Investment Fee Calculator": "Calculadora de Comisiones de Inversión",
    "Investment Fee & Expense Ratio Calculator": "Calculadora de Comisiones y Ratios de Gastos",
    "College Savings (529) Calculator": "Calculadora de Ahorro Universitario (Plan 529)",
    "Crypto DCA Calculator": "Calculadora DCA en Criptomonedas",
    "Tip Calculator": "Calculadora de Propinas",
    "Discount and Tax Calculator": "Calculadora de Descuentos e Impuestos",

    // Descriptions (Intros)
    "Calculate your monthly mortgage payments including principal and interest, property taxes, homeowners insurance, HOA fees, and private mortgage insurance (PMI).": "Calcula tus cuotas hipotecarias mensuales incluyendo capital e intereses, impuestos sobre bienes inmuebles, seguro de hogar, cuotas de comunidad y seguro hipotecario privado (PMI).",
    "Calculate monthly repayments, total interest, and compile complete amortization schedules for mortgages, auto loans, or personal loans.": "Calcula pagos mensuales, intereses totales y genera cuadros de amortización completos para hipotecas, préstamos para automóviles o préstamos personales.",
    "Compare two popular strategies for paying off multiple debts: the Snowball method (smallest balances first) and the Avalanche method (highest interest rates first).": "Compara dos estrategias populares para liquidar deudas: el método Bola de Nieve (saldos menores primero) y el método Avalancha (tasas de interés más altas primero).",
    "Evaluate if refinancing your mortgage or loan will save you money. Compare monthly payments, lifetime interest, and calculate your exact break-even timeline.": "Evalúa si refinanciar tu préstamo te permitirá ahorrar. Compara cuotas mensuales, intereses totales y calcula el punto exacto de equilibrio de los costes de cierre.",
    "Estimate your monthly student loan payments under Income-Driven Repayment (IDR) plans like SAVE, PAYE, and IBR based on your income, loan type, and family size.": "Calcula tus pagos mensuales de préstamos estudiantiles según planes basados en ingresos (IDR) como SAVE, PAYE e IBR según tus ingresos, tipo de préstamo y tamaño familiar.",
    "Calculate your front-end DTI (housing cost ratio) and back-end DTI (total monthly debt ratio) to see if you meet standard mortgage qualifying guidelines.": "Calcula tu ratio DTI de vivienda y DTI total de deudas para comprobar si cumples con las normativas estándar de suscripción hipotecaria.",
    "Determine the true Annual Percentage Rate (APR) of a loan by factoring in closing costs, points, and lender fees alongside the nominal interest rate.": "Determina la Tasa Anual Equivalente (TAE / APR) real de un préstamo integrando costes de cierre, comisiones bancarias y puntos de descuento con el tipo nominal.",
    "Compare the long-term wealth impact of buying a home versus renting and investing the difference over a 10 to 30 year horizon.": "Compara el impacto patrimonial a largo plazo entre comprar una casa o alquilar e invertir la diferencia de ahorro en un horizonte de 10 a 30 años.",
    "Calculate how much house you can afford based on your annual income, down payment, monthly debts, and local property taxes.": "Calcula el precio máximo de vivienda que puedes adquirir en función de tus ingresos anuales, entrada disponible, deudas mensuales e impuestos de propiedad.",
    "Estimate your monthly car payments, financed amounts, and overall cost of purchasing a vehicle. Factor in sales taxes, dealer fees, and trade-in credits.": "Calcula la cuota mensual de tu coche, el importe financiado y el coste total de adquisición, teniendo en cuenta impuestos de venta, gastos de concesionario y entrega de vehículo usado.",
    "Discover how long it will take to pay off your credit card balance with minimum payments versus accelerated payments, and calculate total interest savings.": "Descubre cuánto tiempo tardarás en cancelar tu saldo de tarjeta de crédito pagando el mínimo frente a cuotas aceleradas, y calcula el ahorro total en intereses.",
    "Calculate how much you need to save for retirement, forecast your portfolio balance at retirement age, and test sustainable withdrawal rates.": "Calcula cuánto dinero necesitas acumular para tu jubilación, proyecta tu patrimonio futuro y comprueba tasas sostenibles de retiro patrimonial.",
    "Simulate how your 401(k) retirement balance grows with salary deferrals and employer matching contributions.": "Simula cómo crece tu fondo de jubilación 401(k) con aportaciones salariales y contribuciones de contrapartida de la empresa.",
    "Compare Traditional and Roth IRAs to determine which retirement account will maximize your net take-home wealth after accounting for current and future tax brackets.": "Compara las cuentas Traditional y Roth IRA para descubrir cuál maximizará tu patrimonio neto disponible tras considerar los tramos fiscales actuales y futuros.",
    "Calculate how your money can grow over time with compound interest. Adjust starting principal, monthly additions, rates, and compounding terms.": "Calcula cómo puede crecer tu dinero en el tiempo con el interés compuesto. Ajusta capital inicial, aportaciones periódicas, rentabilidad y frecuencias de capitalización.",
    "Calculate Present Value (PV), Future Value (FV), Payment (PMT), Interest Rate (I/Y), and Number of Periods (N) using Time Value of Money principles.": "Calcula el Valor Actual (VA), Valor Futuro (VF), Pago Periódico (PMT), Tasa de Interés y Número de Períodos aplicando las fórmulas fundamentales del valor del dinero en el tiempo.",
    "Calculate the Return on Investment (ROI) and annualized ROI for any business venture, real estate deal, or stock purchase.": "Calcula el Retorno de Inversión (ROI) y el rendimiento anualizado (CAGR) para cualquier proyecto empresarial, operación inmobiliaria o cartera de acciones.",
    "Determine how much money you need to save each month to reach your financial savings target by a specific deadline.": "Determina cuánto dinero debes ahorrar cada mes para alcanzar tu objetivo financiero antes de una fecha límite determinada.",
    "Calculate the total return, annualized return (CAGR), and capital gains on stock investments, including dividend reinvestment.": "Calcula la rentabilidad total, el rendimiento anualizado (CAGR) y las ganancias de capital en inversiones bursátiles, incluyendo la reinversión de dividendos.",
    "Calculate the expected rate of return for an asset using the Capital Asset Pricing Model (CAPM) based on risk-free rate, beta, and market return.": "Calcula la tasa esperada de rentabilidad de un activo mediante el modelo CAPM según la tasa libre de riesgo, la beta del activo y el rendimiento del mercado.",
    "Project future dividend income, yield on cost, and portfolio growth with automatic dividend reinvestment (DRIP).": "Proyecta los ingresos futuros por dividendos, la rentabilidad sobre coste original (Yield on Cost) y el crecimiento patrimonial con reinversión automática (DRIP).",
    "Calculate how inflation erodes purchasing power over time and determine the future cost of goods and services.": "Calcula cómo la inflación reduce el poder adquisitivo del dinero a lo largo del tiempo y determina el coste futuro de bienes y servicios básicos.",
    "Estimate your take-home pay after federal taxes, state taxes, FICA, and pre-tax benefit deductions.": "Calcula tu salario neto disponible tras aplicar retenciones de impuestos federales, estatales, seguridad social (FICA) y deducciones previas a impuestos.",
    "Estimate your net take-home pay per paycheck and annually by calculating federal, state, and FICA tax withholdings along with pre-tax and post-tax deductions.": "Calcula tu salario neto por nómina y de forma anual estimando retenciones fiscales federales, estatales y aportaciones previas y posteriores a impuestos.",
    "Track and calculate your total personal net worth by summing all physical and liquid assets and subtracting outstanding debts and liabilities.": "Calcula tu patrimonio neto personal total sumando todos tus activos financieros e inmobiliarios y restando deudas y pasivos pendientes.",
    "Calculate the exact size of your emergency safety cushion based on your essential monthly expenses and job stability.": "Calcula el tamaño exacto de tu colchón de seguridad para emergencias en función de tus gastos fijos mensuales y estabilidad laboral.",
    "See how fund expense ratios, management fees, and advisory charges reduce your lifetime investment portfolio returns.": "Comprueba cómo los ratios de gastos, comisiones de gestión y costes de asesoramiento reducen el rendimiento acumulado de tus inversiones a largo plazo.",
    "See how expense ratios and annual fees drag down your investment portfolio's growth over time, and calculate how much you could save with lower-fee options.": "Analiza cómo las comisiones anuales reducen el crecimiento de tu cartera con el tiempo y calcula cuánto puedes ahorrar con fondos indexados de bajo coste.",
    "Forecast future college tuition costs and determine the monthly 529 plan savings needed to cover your child's higher education.": "Proyecta los costes futuros de la matrícula universitaria y calcula el ahorro mensual necesario en un plan 529 para financiar los estudios de tus hijos.",
    "Estimate the future cost of a 4-year college education and calculate how much you need to save monthly in a 529 plan to reach your funding goal.": "Estima el coste futuro de una carrera universitaria de 4 años y calcula el ahorro mensual en planes de ahorro educativo para alcanzar tu meta.",
    "Simulate dollar-cost averaging (DCA) into Bitcoin, Ethereum, or other crypto assets with recurring recurring purchases.": "Simula una estrategia de compras periódicas (DCA) en Bitcoin, Ethereum u otros criptoactivos para promediar el precio de entrada.",
    "Simulate the growth of a recurring dollar-cost-average (DCA) investment strategy in Bitcoin, Ethereum, or other crypto assets based on projected annual growth rates.": "Simula el crecimiento de una estrategia de inversión recurrente DCA en criptomonedas según rendimientos anuales proyectados.",
    "Quickly calculate bill tips, split total amounts among friends, and round up payments for dining and hospitality services.": "Calcula rápidamente propinas en restaurantes, divide el total de la cuenta entre amigos y redondea pagos en servicios de hostelería.",
    "Calculate the final discounted price and sales tax on retail purchases, store promotions, and clearance sales.": "Calcula el precio final con descuento y los impuestos sobre compras en tiendas, promociones especiales y rebajas comerciales.",

    // Input Box Titles (<h3> and <h4>)
    "Loan Parameters": "Parámetros del Préstamo",
    "Compounding and Pay Cadence": "Frecuencia de Pago y Capitalización",
    "Property & Loan Details": "Detalles de la Propiedad y Préstamo",
    "Taxes, Fees & Insurance": "Impuestos, Gastos y Seguros",
    "Your Debts": "Tus Deudas",
    "Monthly Budget allocation": "Asignación de Presupuesto Mensual",
    "Current Loan": "Préstamo Actual",
    "New Loan Offer": "Oferta del Nuevo Préstamo",
    "Loan & Income Details": "Detalles del Préstamo e Ingresos",
    "Income & Housing": "Ingresos y Vivienda",
    "Other Monthly Debt Payments": "Otros Pagos Mensuales de Deuda",
    "Loan & Rate Details": "Detalles del Préstamo y Tipos",
    "Upfront Fees & Closing Costs": "Gastos Iniciales y Costes de Formalización",
    "Home Purchase Details": "Detalles de Compra de Vivienda",
    "Rental Assumptions": "Condiciones del Alquiler",
    "Income & Savings": "Ingresos y Ahorro Disponible",
    "Monthly Debt Obligations": "Obligaciones Mensuales de Deuda",
    "Vehicle Pricing": "Precio del Vehículo",
    "Upfront Offsets": "Entradas y Pagos Iniciales",
    "Financing terms": "Condiciones de Financiación",
    "Credit Card Details": "Detalles de Tarjetas de Crédito",
    "Payoff Strategy": "Estrategia de Cancelación de Deuda",
    "Current Retirement Profile": "Perfil Actual de Jubilación",
    "Retirement Goals & Living Expenses": "Metas de Jubilación y Gastos de Vida",
    "Salary & Deferral Settings": "Configuración Salarial y de Aportación",
    "Growth & Match Assumptions": "Supuestos de Crecimiento y Aportación Empresarial",
    "Your Profile & Contribution": "Tu Perfil y Aportación",
    "Tax Bracket Assumptions": "Supuestos de Tramos Fiscales",
    "Investment Values": "Parámetros de la Inversión",
    "Time Value Variables": "Variables del Valor del Dinero",
    "Investment Costs & Returns": "Costes y Rendimientos de la Inversión",
    "Savings Goal Details": "Detalles de la Meta de Ahorro",
    "Stock Investment Details": "Detalles de la Inversión en Acciones",
    "CAPM Model Inputs": "Parámetros del Modelo CAPM",
    "Dividend Stock Profile": "Perfil de la Acción con Dividendos",
    "Inflation Parameters": "Parámetros de la Inflación",
    "Salary & Pay Schedule": "Salario y Calendario de Pagos",
    "Tax & Benefit Deductions": "Deducciones Fiscales y Beneficios",
    "Assets (What You Own)": "Activos (Bienes y Derechos)",
    "Liabilities (What You Owe)": "Pasivos (Deudas y Obligaciones)",
    "Essential Monthly Living Expenses": "Gastos Fijos Esenciales del Mes",
    "Portfolio & Fee Settings": "Configuración de Cartera y Comisiones",
    "Investment Settings": "Parámetros de la Inversión",
    "Child & College Details": "Detalles de los Hijos y la Universidad",
    "Education & Savings Settings": "Configuración Educativa y de Ahorro",
    "DCA Strategy Settings": "Configuración de Estrategia DCA",
    "DCA Settings": "Configuración DCA",
    "Bill & Tip Details": "Detalles de la Factura y Propina",
    "Pricing & Discount Settings": "Configuración de Precios y Descuento"
  },

  de: {},
  ja: {},
  fr: {},
  pt: {}
};

// Merge all batches
const batches = [titlesIntrosBatch1, titlesIntrosBatch2, titlesIntrosBatch3];
for (const b of batches) {
  for (const lang of Object.keys(b) as Lang[]) {
    if (!titlesAndIntros[lang]) {
      titlesAndIntros[lang] = {};
    }
    if (b[lang]) {
      Object.assign(titlesAndIntros[lang], b[lang]);
    }
  }
}

