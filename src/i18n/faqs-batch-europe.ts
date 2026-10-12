import type { Lang } from './ui';

export const faqsBatchEurope: Partial<Record<Lang, Record<string, string>>> = {
  // German (de)
  de: {
    // 1. Mortgage
    "How is a mortgage payment calculated?": "Wie setzt sich eine Baufinanzierungsrate zusammen?",
    "A standard monthly mortgage payment consists of Principal & Interest (P&I), property taxes, homeowners insurance, private mortgage insurance (PMI) if down payment is under 20%, and homeowner association (HOA) fees.": "Eine typische Monatsrate besteht aus Zins und Tilgung (Kapitaldienst), Grundsteuer, Wohngebäudeversicherung, ggf. Restschuld- oder Risikolebensversicherung sowie Nebenkosten und Hausgeld.",
    "What is PMI and when do I pay it?": "Was ist eine Hypothekenversicherung (PMI) und wann fällt sie an?",
    "Private Mortgage Insurance (PMI) is a policy that protects the lender if you default. It is typically required on conventional loans if your down payment is less than 20% of the home purchase price.": "Die Private Mortgage Insurance (PMI) schützt das Kreditinstitut vor Kreditausfällen. Sie wird fällig, wenn das eingebrachte Eigenkapital unter 20 % des Kaufpreises liegt.",
    "What does PITI stand for?": "Wofür steht die Abkürzung PITI?",
    "PITI stands for Principal, Interest, Taxes, and Insurance. These are the four basic components that make up a homeowner's monthly housing payment. Together, they reflect the true cost of owning a home on a month-to-month basis.": "PITI steht für Tilgung (Principal), Zinsen (Interest), Steuern (Taxes) und Versicherungen (Insurance) – die vier Kernkomponenten der monatlichen Immobilienbetriebskosten.",
    "Is a 15-year mortgage better than a 30-year mortgage?": "Ist eine 15-jährige Zinsbindung besser als eine 30-jährige?",
    "A 15-year mortgage typically offers a lower interest rate and allows you to pay off your home twice as fast, saving you tens of thousands of dollars in interest. However, a 30-year mortgage has lower monthly payments, which provides greater cash flow flexibility.": "Ein Darlehen mit 15 Jahren Laufzeit bietet meist günstigere Zinsen und halbiert die Entschuldungszeit, was erhebliche Zinskosten spart; 30 Jahre bieten jedoch niedrigere Monatsraten und mehr Liquiditätsspielraum.",
    "How do extra payments affect my mortgage payoff schedule?": "Wie wirken sich Sondertilgungen auf die Baufinanzierung aus?",
    "Any extra money you pay towards your mortgage is applied directly to the principal balance. This reduces the remaining loan balance and decreases the amount of interest that accumulates, helping you pay off your mortgage years ahead of schedule.": "Sondertilgungen fließen direkt in die Rückzahlung der Restschuld. Dadurch sinkt der verbleibende Zinsaufwand rapide, sodass die Immobilie viele Jahre früher schuldenfrei wird.",

    // 2. Loan Calculator
    "How does an amortized loan work?": "Wie funktioniert ein Annuitätendarlehen?",
    "With an amortized loan, you make equal periodic payments. Early in the loan term, the majority of each payment goes toward interest. Over time, an increasing portion goes toward paying down the principal balance until the debt is fully paid off.": "Bei einem Annuitätendarlehen zahlen Sie konstante Raten. Anfangs überwiegt der Zinsanteil; mit sinkender Restschuld steigt der Tilgungsanteil kontinuierlich bis zur vollständigen Rückzahlung.",
    "What is the difference between fixed-rate and variable-rate loans?": "Was unterscheidet ein Festzinsdarlehen von einem variablen Kredit?",
    "A fixed-rate loan maintains the exact same interest rate and payment throughout the loan term. A variable-rate loan has an interest rate that adjusts periodically based on benchmark interest rates, which can increase or decrease your payments.": "Ein Festzinskredit garantiert feste Zinssätze und gleichbleibende Raten über die gesamte Sollzinsbindung; variable Kredite passen sich regelmäßig dem Marktzinsniveau an.",
    "Can I pay off my loan early without penalty?": "Kann ich meinen Kredit jederzeit ohne Vorfälligkeitsentschädigung ablösen?",
    "Most consumer loans and conventional mortgages allow prepayment without penalties, but some lenders include a prepayment penalty clause. Always verify your loan agreement terms before making accelerated principal payments.": "Bei Ratenkrediten sind Sondertilgungen oft kostenlos, bei Baudarlehen verlangen Banken außerhalb vertraglicher Sondertilgungsrechte meist eine Vorfälligkeitsentschädigung.",

    // 3. Debt Payoff
    "What is the Debt Snowball method?": "Was ist die Schneeball-Methode zum Schuldenabbau?",
    "The Debt Snowball method involves paying off your smallest debt balances first, regardless of interest rates. It builds psychological momentum and motivation through quick wins.": "Sie tilgen die Kredite mit den kleinsten Restbeträgen zuerst, unabhängig vom Zinssatz. Schnelle Erfolge schaffen psychologische Motivation zum Weitermachen.",
    "What is the Debt Avalanche method?": "Was ist die Lawinen-Methode zum Schuldenabbau?",
    "The Debt Avalanche method involves paying off your highest interest rate debts first. Mathematically, this minimizes the total interest you pay and helps you become debt-free faster.": "Sie tilgen Verbindlichkeiten mit den höchsten Zinsen zuerst. Rein rechnerisch minimiert dies die Zinslast und führt am schnellsten zur Schuldenfreiheit.",
    "Which method is better: Debt Snowball or Debt Avalanche?": "Welche Methode ist besser: Schneeball oder Lawine?",
    "Mathematically, the Debt Avalanche method is superior because it minimizes the total interest paid. However, studies show that the Debt Snowball method is often more successful in practice because the psychological momentum helps people stick to their plan.": "Mathematisch ist die Lawinen-Methode überlegen, in der Praxis führt der Schneeball durch frühe Erfolgserlebnisse jedoch oft verlässlicher zum Ziel.",
    "How does the 'extra payment' roll over in these strategies?": "Wie wird der zusätzliche Tilgungsbetrag weitergegeben?",
    "You continue paying minimums on all debts and add your extra cash to the target debt. Once that target debt is fully paid off, you roll its entire payment into the next debt on your list.": "Sie zahlen überall die Mindestraten und bündeln alle Überschüsse auf die Zielforderung. Ist diese getilgt, übertragen Sie das frei gewordene Budget auf den nächsten Kredit.",
    "Can I do a hybrid of Snowball and Avalanche?": "Kann man Schneeball- und Lawinen-Methode kombinieren?",
    "Yes. Many people pay off one or two small debts first to free up immediate cash flow (Snowball), and then pivot to targeting the remaining debts by highest interest rate (Avalanche).": "Ja. Viele tilgen anfangs ein oder zwei Minikredite für sofortige Erleichterung (Schneeball) und gehen danach strikt nach dem höchsten Zinssatz vor (Lawine).",

    // 4. Refinance
    "When should I refinance my loan?": "Wann lohnt sich eine Umschuldung oder Anschlussfinanzierung?",
    "It generally makes sense to refinance if you can secure a lower interest rate, reduce your monthly payment, or shorten your term, provided your total interest savings exceed the closing costs.": "Eine Umschuldung lohnt sich, wenn ein spürbar günstigerer Zinssatz die monatliche Belastung senkt und die Zinsersparnis sämtliche Wechselgebühren übersteigt.",
    "What closing costs are associated with refinancing?": "Welche Kosten fallen bei einer Kreditumschuldung an?",
    "Refinancing costs typically include application fees, origination fees, appraisal costs, title search and insurance, credit report fees, and recording fees, ranging from 2% to 6% of the loan amount.": "Typisch sind Notar- und Grundbuchgebühren für die Grundschuldabtretung sowie eventuelle Vorfälligkeitsentschädigungen der alten Bank (meist 1 % bis 3 %).",
    "How do I calculate my refinance break-even point?": "Wie berechnet man den Amortisationszeitpunkt (Break-Even)?",
    "Divide your total refinance closing costs by your monthly payment savings. If closing costs are $3,000 and you save $150 per month, your break-even point is 20 months ($3,000 / $150).": "Teilen Sie die gesamten Umschuldungskosten durch die monatliche Ersparnis. Bei 3.000 € Kosten und 150 € Ersparnis/Monat ist der Break-Even nach 20 Monaten erreicht.",
    "What is a 'no-closing-cost' refinance?": "Was bedeutet eine Umschuldung 'ohne Abschlusskosten'?",
    "A no-closing-cost refinance means the lender either rolls the closing fees into your new total loan balance or charges a slightly higher interest rate to cover them.": "Die Kosten entfallen nicht, sondern werden auf den Darlehensbetrag aufgeschlagen oder über einen geringfügig höheren Zinssatz einkalkuliert.",
    "Does refinancing lower my monthly payment or total interest?": "Senkt eine Umschuldung die Monatsrate oder die Gesamtzinsen?",
    "It depends on the term. Refinancing to a lower rate with the same or shorter term saves on both. Resetting your term back to 30 years lowers the monthly payment but can increase total lifetime interest.": "Bei gleicher oder kürzerer Laufzeit sinken sowohl Rate als auch Gesamtzinsen; verlängert man die Laufzeit stark, sinkt die Rate, die Zinslast über die Zeit kann jedoch steigen.",

    // 5. Student Loan
    "What is the SAVE plan?": "Was ist das einkommensabhängige SAVE-Rückzahlungsmodell?",
    "The Saving on a Valuable Education (SAVE) plan is an income-driven repayment (IDR) plan that protects discretionary income up to 225% of the poverty line, lowers payments to 5%-10%, and stops unpaid interest from accumulating.": "Ein US-amerikanisches Rückzahlungsmodell für Studienkredite, das das geschützte Einkommen auf 225 % der Armutsgrenze anhebt und Raten auf 5 % bis 10 % begrenzt.",
    "How is discretionary income calculated for student loans?": "Wie wird das frei verfügbare Einkommen bei Studienkrediten berechnet?",
    "Discretionary income is the difference between your Adjusted Gross Income (AGI) and a percentage of the federal poverty guideline for your family size (150% for PAYE/IBR, 225% for SAVE).": "Es ist die Differenz zwischen dem bereinigten Bruttoeinkommen und dem gesetzlichen Existenzminimum multipliziert mit der Familiengröße.",
    "How does student loan forgiveness work under IDR plans?": "Wie funktioniert der Schuldenerlass bei einkommensabhängigen Krediten?",
    "If you pay under an IDR plan for 20 or 25 years (or 10 years under SAVE for low initial balances), any remaining student debt is forgiven.": "Nach 20 bis 25 Jahren regelmäßiger Ratenzahlung (bei geringen Kreditsummen im SAVE-Plan teils nach 10 Jahren) wird die verbleibende Restschuld vollständig erlassen.",
    "Which IDR plan is best for me?": "Welcher einkommensabhängige Tilgungsplan ist am besten?",
    "For most borrowers, the SAVE plan offers the lowest monthly payment and the best interest subsidy. Borrowers with very high incomes relative to debt may prefer PAYE or IBR due to payment caps.": "Für die meisten bietet der SAVE-Plan die niedrigste Rate; Besserverdiener bevorzugen oft PAYE oder IBR, da diese Pläne eine Ratenobergrenze haben.",
    "Can I switch student loan repayment plans at any time?": "Kann man den Tilgungsplan für Studienkredite jederzeit wechseln?",
    "Yes, you can apply to switch repayment plans for free at studentaid.gov. However, switching plans can sometimes cause unpaid interest to capitalize.": "Ja, ein Wechsel ist kostenlos möglich, kann jedoch dazu führen, dass aufgelaufene Zinsen der Hauptschuld zugeschlagen werden.",

    // 6. DTI
    "What is the 28/36 rule?": "Was besagt die 28/36-Haushaltsregel?",
    "The 28/36 rule is a standard mortgage underwriting guideline stating that housing costs should not exceed 28% of gross monthly income, and total debt payments should not exceed 36%.": "Maximal 28 % des Bruttoeinkommens sollten für Wohnkosten aufgewendet werden und nicht mehr als 36 % für alle Kredite und Verbindlichkeiten zusammen.",
    "How does DTI affect my mortgage application?": "Wie beeinflusst die Schuldenquote (DTI) die Darlehenszusage?",
    "Lenders use DTI to measure your ability to manage monthly payments. Lower DTIs below 36% receive the most favorable mortgage terms and lowest interest rates.": "Banken prüfen die Tragfähigkeit der Raten. Eine Quote unter 36 % gilt als risikoarm und sichert erstklassige Zinskonditionen.",
    "What is the difference between front-end and back-end DTI?": "Was unterscheidet Front-End- von Back-End-DTI?",
    "Front-end DTI only includes housing expenses (mortgage, property tax, insurance, HOA). Back-end DTI includes housing plus all recurring debts like credit cards, auto loans, and student loans.": "Front-End-DTI umfasst nur die reinen Wohnkosten; Back-End-DTI addiert alle weiteren monatlichen Verbindlichkeiten (Autokredit, Ratenkauf, Kreditkarten).",
    "What is the maximum DTI ratio lenders will accept?": "Welche maximale Schuldenquote akzeptieren Kreditinstitute?",
    "Conventional mortgages typically prefer back-end DTIs of 36% to 43%. Government-backed loans like FHA and VA may allow DTIs up to 50% with strong compensating factors.": "Standardkredite fordern meist maximal 36 % bis 43 %; bei guter Bonität und hohem Eigenkapital werden vereinzelt bis zu 50 % bewilligt.",
    "How can I lower my Debt-to-Income ratio?": "Wie kann ich meine persönliche Schuldenquote senken?",
    "You can lower your DTI by increasing gross income or paying off smaller debts completely to eliminate their recurring monthly minimum payments.": "Durch Erhöhung des Bruttoeinkommens oder die vollständige Tilgung kleinerer Kredite, um deren monatliche Mindestrate aus der Rechnung zu entfernen.",

    // 7. APR
    "What is the difference between interest rate and APR?": "Was ist der Unterschied zwischen Sollzins und effektivem Jahreszins (APR)?",
    "The interest rate is the nominal cost of borrowing the principal balance. The Annual Percentage Rate (APR) reflects the total annual cost of the loan including points, broker fees, and origination charges.": "Der Sollzins beziffert nur die reine Zinszahlung; der Effektivzins (APR) beinhaltet zusätzlich alle Bearbeitungsgebühren, Vermittlungskosten und Nebenspesen.",
    "Why is APR higher than the advertised interest rate?": "Warum ist der Effektivzins höher als der nominale Werbezins?",
    "APR is higher because it amortizes all upfront lender fees, discount points, and closing costs into the effective yearly rate, revealing the true cost of credit.": "Weil er alle einmaligen Nebenkosten und Gebühren auf die Jahresrate umlegt und so die echten Kreditkosten transparent macht.",
    "Is APR useful for comparing different loan offers?": "Eignet sich der Effektivzins zum Vergleich verschiedener Kreditangebote?",
    "Yes, APR is the best metric for comparing loan offers with different fee structures, provided you plan to keep the loan for its full term.": "Ja, der Effektivzins normiert unterschiedliche Gebührenmodelle und ist die verlässlichste Kennzahl für den Angebotsvergleich.",

    // 8. Rent vs Buy
    "How long do I need to stay in a home for buying to beat renting?": "Wie lange muss man in einer Immobilie wohnen, damit sich Kaufen gegenüber Mieten lohnt?",
    "Because upfront closing costs, moving fees, and commissions are substantial, homeowners usually need to stay in a property for 4 to 7 years for buying to financially outperform renting.": "Wegen hoher Kaufnebenkosten (Grunderwerbsteuer, Notar, Makler) amortisiert sich ein Immobilienkauf finanziell meist erst nach 4 bis 7 Jahren Wohndauer.",
    "What hidden costs of homeownership should renters consider?": "Welche versteckten Kosten müssen Mieter beim Eigenheimkauf beachten?",
    "Homeowners must pay property taxes, homeowners insurance, maintenance and repairs (typically 1-2% of home value annually), HOA dues, and potential capital improvement costs.": "Eigentümer tragen Grundsteuer, Gebäudeversicherungen, Instandhaltungsrücklagen (oft 1-2 % des Gebäudewerts pro Jahr) sowie Sanierungskosten.",
    "What is the opportunity cost of buying a home?": "Welche Opportunitätskosten entstehen beim Immobilienkauf?",
    "The money spent on down payment, closing costs, and ongoing property maintenance could otherwise remain invested in liquid assets like index funds that compound over time.": "Eigenkapital und Nebenkosten sind in der Immobilie gebunden und können nicht mehr am Kapitalmarkt (z. B. in ETFs) Zinseszinsen erwirtschaften.",

    // 9. Home Affordability
    "How much income should I spend on a mortgage?": "Wie viel vom Einkommen darf maximal in die Baufinanzierung fließen?",
    "Most financial experts recommend spending no more than 25% to 28% of your gross monthly income on housing costs (the front-end DTI guideline).": "Finanzexperten raten dazu, nicht mehr als 25 % bis 30 % des monatlichen Nettoeinkommens für Zins und Tilgung auszugeben.",
    "How does down payment size impact affordability?": "Wie wirkt sich die Eigenkapitalhöhe auf die Finanzierbarkeit aus?",
    "A larger down payment reduces your loan amount, eliminates Private Mortgage Insurance (PMI) if you put down 20%, and lowers your monthly mortgage payment.": "Mehr Eigenkapital senkt die Kreditsumme, verbessert den Beleihungsauslauf und sorgt für erstklassige Zinskonditionen der Bank.",
    "How do interest rates affect purchasing power?": "Wie stark beeinflussen Zinsänderungen das Kaufkraftbudget?",
    "Every 1% increase in mortgage interest rates reduces your home purchasing power by roughly 10% for the same monthly payment budget.": "Ein Zinsanstieg um 1 Prozentpunkt verringert das bezahlbare Immobilienbudget bei gleichbleibender Wunschrate um etwa 10 %.",

    // 10. Auto Loan
    "What is the 20/4/10 rule for buying a car?": "Was besagt die 20/4/10-Autoregel?",
    "The 20/4/10 rule recommends putting down at least 20%, financing for no longer than 4 years (48 months), and keeping total vehicle expenses under 10% of gross monthly income.": "Mindestens 20 % Anzahlung leisten, die Finanzierung auf maximal 4 Jahre (48 Monate) begrenzen und die gesamten Kfz-Kosten unter 10 % des Bruttoeinkommens halten.",
    "Is a longer auto loan term better?": "Sind sehr lange Autokredit-Laufzeiten sinnvoll?",
    "Longer terms (like 72 or 84 months) lower your monthly payment, but you pay substantially more total interest and risk becoming 'underwater' (owing more than the vehicle is worth).": "Lange Laufzeiten drücken zwar die Monatsrate, erhöhen aber den Gesamtzins massiv und führen oft dazu, dass der Autowert unter die Restschuld sinkt.",
    "How does vehicle depreciation affect my loan?": "Wie wirkt sich der Wertverlust auf den Kredit aus?",
    "New cars depreciate rapidly (often losing 20% in the first year). Without an adequate down payment, you risk owing more on your loan than the car's market value.": "Neuwagen verlieren im ersten Jahr bis zu 20 % ihres Werts; ohne ausreichende Anzahlung droht eine gefährliche Unterdeckung.",

    // 11. Credit Card Payoff
    "Why does paying only the minimum take so long?": "Warum dauert die Tilgung bei Mindestrückzahlung so lange?",
    "Credit card minimum payments are often set around 1% to 2% of the balance plus accrued interest. As the balance slowly drops, the required minimum drops, extending payoff times to decades.": "Die Mindestrate deckt oft nur die Zinsen und 1 % bis 2 % der Schuld. Weil die Rate mit sinkender Schuld schrumpft, zieht sich die Tilgung über Jahrzehnte.",
    "How much faster can I pay off credit cards by paying extra?": "Wie viel bringt eine feste monatliche Mehrzahlung bei der Kreditkarte?",
    "Paying even $50 or $100 above the minimum payment can cut your payoff timeline by several years and save thousands of dollars in compounding interest charges.": "Bereits 50 € oder 100 € zusätzlich pro Monat verkürzen die Entschuldungszeit um viele Jahre und sparen beträchtliche Zinskosten.",
    "Should I use a balance transfer card to pay off debt?": "Lohnt sich eine Umschuldungskarte mit 0 % Aktionszins?",
    "A 0% APR balance transfer credit card can save significant interest if you pay off the full balance during the promotional period (typically 12-21 months) and factor in the 3%-5% transfer fee.": "Ja, wenn Sie den Saldo innerhalb der zinsfreien Frist komplett tilgen und die anfallende Übertragungsgebühr (meist 2 % bis 4 %) einkalkulieren.",

    // 12. Retirement Planner
    "What is the 4% rule in retirement planning?": "Was besagt die 4-Prozent-Regel für den Ruhestand?",
    "The 4% rule suggests that withdrawing 4% of your retirement portfolio in the first year, adjusted for inflation annually thereafter, provides a high probability that your nest egg will last at least 30 years.": "Wer im ersten Rentenjahr 4 % seines Kapitals entnimmt und den Betrag künftig nur um die Inflation anpasst, hat eine hohe Wahrscheinlichkeit, dass das Vermögen mindestens 30 Jahre reicht.",
    "How much money do I need to retire comfortably?": "Wie viel Vermögen benötigt man für einen sorgenfreien Ruhestand?",
    "A common benchmark is accumulating 25 times your anticipated annual retirement expenses, or replacing 70% to 80% of your pre-retirement income.": "Als Faustregel gilt das 25-Fache der erwarteten jährlichen Ausgaben oder eine Absicherung von 70 % bis 80 % des bisherigen Nettoeinkommens.",
    "How does inflation impact retirement spending?": "Wie gefährdet die Inflation das Altersruhegeld?",
    "Inflation steadily reduces the purchasing power of your savings. At a 3% inflation rate, everyday living expenses double roughly every 24 years, requiring growing investment portfolios.": "Sie halbiert bei 3 % Teuerungsrate die Kaufkraft in ca. 24 Jahren, weshalb ein Teil des Alterskapitals zwingend rentabel angelegt bleiben muss.",

    // 13. 401(k)
    "What is an employer 401(k) match?": "Was ist der Arbeitgeberzuschuss (Employer Match)?",
    "An employer match is money your employer contributes to your 401(k) account based on your own contributions (e.g. matching 50% of contributions up to 6% of your salary). It is effectively an instant return on your savings.": "Eine direkte finanzielle Beteiligung des Arbeitgebers an der betrieblichen Altersvorsorge, die eine sofortige risikolose Rendite auf eigene Sparbeiträge darstellt.",
    "What are the 401(k) contribution limits for 2024?": "Wie hoch sind die steuerlichen Höchstbeiträge?",
    "For 2024, the employee contribution limit is $23,000 for those under 50. Individuals aged 50 and older can contribute an additional $7,500 catch-up contribution for a total of $30,500.": "Für unter 50-Jährige liegt der Höchstbetrag bei 23.000 $, ab 50 Jahren dürfen zusätzlich 7.500 $ als Nachholbeitrag eingezahlt werden.",
    "What is the difference between Traditional 401(k) and Roth 401(k)?": "Was ist der Unterschied zwischen klassischer und Roth-Altersvorsorge?",
    "Traditional 401(k) contributions are pre-tax and reduce your current taxable income, with withdrawals taxed in retirement. Roth 401(k) contributions are post-tax, but all qualified growth and withdrawals are completely tax-free.": "Klassische Beiträge mindern das aktuelle Bruttoeinkommen steuerlich, Auszahlungen im Alter werden versteuert; Roth-Modelle nutzen Nettoeinkommen, dafür sind alle Erträge im Alter komplett steuerfrei.",

    // 14. IRA Comparison
    "What is the key difference between a Roth and Traditional IRA?": "Was unterscheidet ein traditionelles IRA von einem Roth IRA?",
    "Traditional IRA contributions are generally made pre-tax (reducing your current taxable income), but withdrawals in retirement are taxed as ordinary income. Roth IRA contributions are made with post-tax dollars; growth and withdrawals in retirement are completely tax-free.": "Beim traditionellen IRA sind Einzahlungen heute steuerlich abzugsfähig und im Alter steuerpflichtig; beim Roth IRA erfolgt die Anlage aus versteuertem Einkommen mit lebenslanger Steuerfreiheit auf Erträge.",
    "Which IRA plan is better for me?": "Welches Vorsorgekonto passt besser zu mir?",
    "If you expect your tax bracket to be higher in retirement than it is today, a Roth IRA is better. If you expect your tax bracket in retirement to be lower, a Traditional IRA is better.": "Erwarten Sie im Alter einen höheren Steuersatz, lohnt sich das Roth-Modell; rechnen Sie mit einem geringeren Alterseinkommen, ist das traditionelle Modell günstiger.",
    "What are the contribution limits for IRAs in 2024?": "Wie hoch ist der jährliche Maximalbeitrag für IRAs?",
    "For 2024, the annual contribution limit for Traditional and Roth IRAs is $7,000 for individuals under age 50, and $8,000 for individuals age 50 or older.": "Der Höchstbetrag beträgt 7.000 $ pro Jahr (8.000 $ für Personen ab 50 Jahren).",
    "Are there income limits for contributing to Traditional and Roth IRAs?": "Gibt es Einkommensgrenzen für die Einzahlung?",
    "Roth IRAs have income phase-out ranges that restrict high earners. Anyone with earned income can contribute to a Traditional IRA, but tax deductibility may be limited by income and workplace retirement coverage.": "Für Roth IRAs gelten Einkommensobergrenzen für Spitzenverdiener; in traditionelle Konten darf jeder Erwerbstätige einzahlen, die steuerliche Abzugsfähigkeit variiert.",
    "Can I withdraw money from my IRA before age 59½ without penalty?": "Kann man vor dem Alter von 59½ Jahren straffrei Geld entnehmen?",
    "Roth IRA original contributions can be withdrawn at any time penalty-free. Withdrawing investment earnings early or withdrawing Traditional IRA funds before 59½ usually incurs income taxes and a 10% penalty.": "Eigene Einzahlungen im Roth IRA können jederzeit straffrei entnommen werden; bei Erträgen oder traditionellen IRAs fallen vor 59½ Steuern plus 10 % Strafgebühr an.",

    // 15. Compound Interest
    "What is compound interest?": "Was versteht man unter dem Zinseszinseffekt?",
    "Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods. It causes your wealth to grow exponentially over time.": "Zinsen werden nicht nur auf das Startkapital berechnet, sondern auch auf bereits gutgeschriebene Zinserträge früherer Perioden, was zu exponentiellem Vermögenswachstum führt.",
    "What is the Rule of 72?": "Was ist die 72er-Regel?",
    "The Rule of 72 is a quick mental formula to estimate how many years it takes to double your money. Divide 72 by your annual interest rate (e.g. at 8%, your money doubles in about 9 years).": "Eine Faustformel zur Berechnung der Verdopplungszeit von Kapital: 72 geteilt durch den Zinssatz (bei 8 % Zinsen verdoppelt sich das Geld in ca. 9 Jahren).",
    "How does compounding frequency affect total returns?": "Wie beeinflusst das Zinsintervall den Endertrag?",
    "The more frequently interest compounds (annually, monthly, daily), the higher your effective annual yield (APY) will be, as interest starts earning interest sooner.": "Je häufiger Zinsen gutgeschrieben werden (monatlich, täglich), desto höher ist die effektive Jahresrendite (APY).",

    // 16. TVM
    "What is the Time Value of Money (TVM)?": "Was bedeutet der Zeitwert des Geldes (TVM)?",
    "The Time Value of Money principle states that a dollar today is worth more than a dollar in the future because today's dollar can be invested and earn interest.": "Ein Euro heute ist mehr wert als ein Euro in der Zukunft, weil das heutige Geld sofort investiert werden kann und Rendite erwirtschaftet.",
    "What are the core components of TVM calculations?": "Welche fünf Kernvariablen bestimmen die Barwert- und Endwertrechnung?",
    "The five core variables are Present Value (PV), Future Value (FV), Interest Rate per Period (Rate), Total Number of Periods (Nper), and Periodic Payment (PMT).": "Barwert (PV), Endwert (FV), Periodenzinssatz (Rate), Laufzeit/Periodenanzahl (Nper) und periodische Zahlung/Rate (PMT).",
    "What is the difference between an ordinary annuity and annuity due?": "Was unterscheidet vorschüssige von nachschüssigen Zahlungen?",
    "In an ordinary annuity, payments occur at the end of each period. In an annuity due, payments occur at the beginning of each period, earning an extra compounding cycle of interest.": "Nachschüssige Zahlungen erfolgen am Periodenende; vorschüssige Zahlungen zu Periodenbeginn, wodurch sie eine Zinsperiode länger Erträge generieren.",

    // 17. ROI
    "How is Return on Investment (ROI) calculated?": "Wie wird der Return on Investment (ROI) berechnet?",
    "ROI is calculated by subtracting the initial cost of the investment from the final value, and dividing that net gain by the initial cost: ROI = (Net Profit / Cost of Investment) × 100%.": "Nettogewinn (Endwert minus Anschaffungskosten) geteilt durch die Anschaffungskosten multipliziert mit 100: ROI = (Gewinn / Kapitaleinsatz) × 100 %.",
    "What is the difference between simple ROI and annualized ROI?": "Was unterscheidet den einfachen ROI von der annualisierten Rendite (CAGR)?",
    "Simple ROI measures total percentage return regardless of duration. Annualized ROI (CAGR) standardizes the return into a per-year geometric rate, enabling fair comparison between investments held for different lengths of time.": "Der einfache ROI misst den Gesamterfolg über die gesamte Laufzeit; die annualisierte Rendite (CAGR) normiert das Ergebnis auf ein durchschnittliches Jahreswachstum.",
    "What is considered a good ROI?": "Was gilt als gute Rendite?",
    "Historically, the broad stock market (S&P 500) has returned an average of 7% to 10% annually before inflation. Investments with higher expected returns generally involve higher risk of capital loss.": "Der breite Aktienmarkt hat historisch rund 7 % bis 10 % p.a. vor Inflation erzielt; deutlich höhere Renditeerwartungen erfordern entsprechend höhere Risiken.",

    // 18. Savings Goal
    "How do I calculate how much to save monthly for a goal?": "Wie berechnet man die monatliche Sparrate für ein festes Ziel?",
    "You divide your target savings amount by the number of months until your deadline, while factoring in the compounding interest earned on your growing balance.": "Teilen Sie die Zielsumme durch die Restmonate und berücksichtigen Sie die erwirtschafteten Zinsen auf das anwachsende Guthaben.",
    "Should I keep savings goal funds in high-yield savings or stocks?": "Gehört das Sparziel aufs Tagesgeld oder in Aktien?",
    "For goals under 3 to 5 years (like a car or home down payment), keep funds in safe, liquid instruments like High-Yield Savings Accounts (HYSA) or CDs. For goals 5+ years away, a diversified investment portfolio may be suitable.": "Für Ziele unter 3 bis 5 Jahren (Autokauf, Anzahlung) empfiehlt sich risikoarmes Tages- oder Festgeld; ab 5 Jahren Laufzeit sind breit gestreute ETFs sinnvoll.",
    "How can I stay on track with my savings goals?": "Wie erreicht man Sparziele diszipliniert?",
    "Automate recurring monthly transfers into a dedicated savings account immediately after your paycheck arrives (the 'pay yourself first' strategy).": "Richten Sie am Tag des Gehaltseingangs einen automatischen Dauerauftrag auf ein separates Sparkonto ein ('Pay yourself first').",

    // 19. Stock Return
    "How do I calculate stock returns?": "Wie berechnet man die Gesamtrendite einer Aktie?",
    "Total stock return equals capital gains (ending price minus purchase price) plus any dividends received, divided by the original purchase cost.": "Kursgewinn plus alle vereinnahmten Dividenden geteilt durch das ursprünglich eingesetzte Kaufkapital.",
    "What is CAGR in stock returns?": "Was bedeutet CAGR bei Aktien?",
    "Compound Annual Growth Rate (CAGR) measures the geometric mean annual return of a stock over multiple years, smoothing out annual market fluctuations.": "Die durchschnittliche jährliche Wachstumsrate (CAGR) glättet Kursschwankungen und zeigt die rechnerische Jahresrendite bei Reinvestition.",
    "What is the difference between simple return and annualized return?": "Was unterscheidet die absolute von der jährlichen Rendite?",
    "Simple return measures absolute percentage gain over the entire holding period, while annualized return shows the steady annual rate required to achieve that result.": "Die absolute Rendite zeigt den prozentualen Zuwachs über die gesamte Haltedauer; die annualisierte Rendite zeigt das jährliche Äquivalent.",

    // 20. CAPM
    "What is the Capital Asset Pricing Model (CAPM)?": "Was ist das Capital Asset Pricing Model (CAPM)?",
    "CAPM calculates an asset's expected return based on its risk relative to the overall market, using the formula: Expected Return = Risk-Free Rate + Beta × (Market Return - Risk-Free Rate).": "Ein finanzmathematisches Modell, das die erwartete Rendite eines Wertpapiers anhand seines Marktrisikos (Beta) berechnet: Erwartete Rendite = Risikofreier Zins + Beta × Marktrisikoprämie.",
    "What does Asset Beta (β) represent?": "Was misst das Beta (β) einer Aktie?",
    "Beta measures an asset's volatility compared to the broader market. A beta of 1.0 indicates market-level volatility; above 1.0 indicates higher volatility, and below 1.0 indicates lower volatility.": "Es misst die Schwankungsintensität relativ zum Gesamtmarkt: Beta = 1 bedeutet Marktbewegung, Beta > 1 höhere Volatilität, Beta < 1 geringere Schwankung.",
    "What is the Risk-Free Rate?": "Was ist der risikolose Zinssatz?",
    "The risk-free rate is the theoretical rate of return of an investment with zero risk of default, typically represented by long-term government bond yields (like 10-year US Treasuries).": "Die theoretische Rendite einer Anlage ohne Ausfallrisiko, meist abgeleitet aus 10-jährigen Staatsanleihen bester Bonität (z. B. deutsche Bundesanleihen).",
    "What is the Market Risk Premium?": "Was ist die Marktrisikoprämie?",
    "The market risk premium is the additional return investors demand for choosing risky market equities over risk-free government securities.": "Die Mehrrendite, die Investoren für das Eingehen von Aktienmarktrisiken gegenüber risikofreien Staatsanleihen einfordern.",

    // 21. Dividend
    "What is dividend yield versus yield on cost?": "Was unterscheidet Dividendenrendite und persönliche Einstandsrendite (Yield on Cost)?",
    "Dividend yield is the annual dividend divided by the current stock price. Yield on cost is the annual dividend divided by your original purchase price, which increases as companies raise their dividends over time.": "Die Dividendenrendite bezieht sich auf den aktuellen Börsenkurs; die persönliche Einstandsrendite bezieht die Ausschüttung auf den damaligen Kaufkurs.",
    "What is a Dividend Reinvestment Plan (DRIP)?": "Was ist ein Dividenden-Wiederanlageplan (DRIP)?",
    "A DRIP automatically uses your cash dividend payments to purchase additional shares or fractional shares of the stock, compounding your share count and future payouts without commission fees.": "Ein automatisierter Service, der erhaltene Bardividenden sofort gebührenfrei in neue Aktienanteile reinvestiert, um den Zinseszins zu maximieren.",
    "Are dividend payments guaranteed?": "Sind Dividendenzahlungen garantiert?",
    "No, company boards can reduce, suspend, or eliminate dividend payouts at any time depending on company profitability and economic conditions.": "Nein, der Vorstand kann Dividendenausschüttungen je nach Geschäftslage und Liquidität jederzeit kürzen oder streichen.",

    // 22. Inflation
    "What is inflation?": "Was ist Inflation?",
    "Inflation is the general rise in prices for goods and services over time, resulting in a decline in the purchasing power of money.": "Der allgemeine und anhaltende Anstieg des Preisniveaus für Waren und Dienstleistungen, der den realen Geldwert mindert.",
    "How does inflation affect my savings?": "Wie schadet Inflation meinen Ersparnissen?",
    "Cash sitting in zero-interest accounts loses purchasing power each year. If inflation is 3%, $100 today will only buy about $97 worth of goods next year.": "Unverzinstes Barvermögen verliert stetig an Kaufkraft; bei 3 % Inflation haben 100 € im Folgejahr nur noch die reale Kaufkraft von 97 €.",
    "How is inflation officially measured?": "Wie wird die Inflationsrate ermittelt?",
    "Inflation is primarily measured using the Consumer Price Index (CPI), which tracks price changes across a standard market basket of consumer goods and services.": "Primär über den Verbraucherpreisindex (VPI), der die Preisentwicklung eines repräsentativen Warenkorbs für private Haushalte erfasst.",
    "What is the historical average inflation rate?": "Wie hoch war die Inflation historisch im Schnitt?",
    "In the United States, inflation has historically averaged between 2.5% and 3.2% per year over long multi-decade horizons.": "In den westlichen Industrienationen lag sie langfristig über mehrere Jahrzehnte im Schnitt zwischen 2,0 % und 3,0 % pro Jahr.",
    "How can I protect my money from losing value to inflation?": "Wie schützt man Vermögen vor Entwertung?",
    "Investing in assets whose earnings outpace inflation—such as diversified equities, Treasury Inflation-Protected Securities (TIPS), real estate, and inflation-indexed bonds.": "Durch Anlage in Sachwerte wie breit gestreute Aktien, inflationsgeschützte Staatsanleihen und werthaltige Immobilien.",

    // 23. Paycheck
    "What is FICA tax?": "Was sind Lohnnebenkosten und Sozialabgaben?",
    "FICA is a federal payroll tax that funds Social Security (6.2% on wages up to the wage base limit) and Medicare (1.45% plus an additional 0.9% on high earners).": "Gesetzliche Pflichtabgaben zur Finanzierung von Renten-, Kranken-, Pflege- und Arbeitslosenversicherung, die direkt vom Bruttoentgelt abgezogen werden.",
    "What is the difference between pre-tax and post-tax deductions?": "Was unterscheidet steuerfreie von steuerpflichtigen Entgeltabzügen?",
    "Pre-tax deductions (like 401k and health insurance) reduce your taxable gross income before taxes are computed. Post-tax deductions (like Roth contributions or wage garnishments) are taken after taxes.": "Vorbesteuerte Abzüge (z. B. Entgeltumwandlung) mindern das zu versteuernde Einkommen direkt; nachgelagerte Abzüge erfolgen erst nach Steuerabzug vom Netto.",
    "What is the difference between gross pay and net pay?": "Was ist der Unterschied zwischen Brutto- und Nettogehalt?",
    "Gross pay is the total amount earned before any taxes or deductions. Net pay (take-home pay) is the actual cash deposited into your bank account after all deductions.": "Das Bruttogehalt ist das vertraglich vereinbarte Gesamteinkommen; das Nettogehalt ist der Auszahlungsbetrag nach Abzug aller Steuern und Sozialbeiträge.",
    "How does my W-4 filing status affect my paycheck?": "Welchen Einfluss hat die Steuerklasse auf das Nettogehalt?",
    "Your W-4 form informs your employer how much federal income tax to withhold each pay period based on your filing status, dependents, and other income.": "Sie bestimmt die Höhe des monatlichen Lohnsteuerabzugs anhand von Familienstand, Kinderfreibeträgen und Zweiteinkommen.",
    "Why do state and local taxes vary so much?": "Warum variieren regionale Steuern so stark?",
    "State income tax rates range from 0% (in states like Texas, Florida, and Washington) to over 13% in high-tax states, while some cities also impose local municipal income taxes.": "Je nach Bundesland oder Gemeinde gelten unterschiedliche Hebesätze, Kirchensteuersätze oder regionale Zuschläge.",

    // 24. Net Worth
    "What is net worth?": "Was ist das persönliche Nettovermögen?",
    "Net worth is the total market value of everything you own (assets) minus everything you owe to creditors (liabilities).": "Der Marktwert aller Vermögenswerte (Aktiva) abzüglich sämtlicher bestehender Schulden und Verbindlichkeiten (Passiva).",
    "How often should I calculate my net worth?": "Wie oft sollte man sein Nettovermögen ermitteln?",
    "Reviewing your net worth quarterly or semi-annually gives you a clear high-level view of your financial health without obsessing over daily market swings.": "Ein viertel- oder halbjährlicher Überblick reicht völlig aus, um den finanziellen Fortschritt objektiv zu bewerten.",
    "What counts as an asset vs. a liability?": "Was zählt als Vermögenswert und was als Verbindlichkeit?",
    "Assets include bank balances, investment accounts, home equity, and retirement funds. Liabilities include mortgages, student loans, car loans, and credit card debt.": "Aktiva: Kontoguthaben, Depots, Immobilienwert, Altersvorsorge. Passiva: Hypotheken, Autokredite, Ratenkredite, Kreditkartenschulden.",
    "Should I include my house and mortgage in my net worth?": "Gehören Eigenheim und Hypothek ins Nettovermögen?",
    "Yes, you include the current fair market value of the home under assets and the remaining mortgage balance under liabilities. The difference is your home equity.": "Ja, der aktuelle Marktwert wird als Vermögen verbucht und die Restschuld als Verbindlichkeit; die Differenz ist das reine Eigenkapital.",
    "What does it mean to have a negative net worth?": "Was bedeutet ein negatives Nettovermögen?",
    "A negative net worth means your total debts exceed your total assets. This is common for young adults and recent graduates with student loans.": "Die Schulden übersteigen das Vermögen; dies ist bei Studienabsolventen oder zu Beginn einer Immobilienfinanzierung nicht unüblich.",

    // 25. Emergency Fund
    "How much emergency fund is recommended?": "Wie hoch sollte der Notgroschen sein?",
    "Most financial planners recommend saving 3 to 6 months of essential living expenses, or 9 to 12 months for freelancers or single-income households.": "Finanzexperten raten zu 3 bis 6 monatlichen Grundlebenshaltungskosten (bei Selbstständigen 9 bis 12 Monate).",
    "What expenses should be included in an emergency fund budget?": "Welche Ausgaben gehören in das Notfall-Budget?",
    "Include only non-negotiable living costs: housing (rent/mortgage), utilities, groceries, basic transportation, minimum debt payments, and healthcare insurance.": "Ausschließlich unverzichtbare Fixkosten: Miete/Rate, Energie, Grundnahrungsmittel, Basismobilität und notwendige Versicherungen.",
    "Where should I keep my emergency fund?": "Wo sollte der Notgroschen geparkt werden?",
    "In a dedicated High-Yield Savings Account (HYSA) or money market account where it is FDIC-insured, earns interest, and can be accessed immediately without risk.": "Auf einem separaten, täglich verfügbaren Tagesgeldkonto mit Einlagensicherung, ohne Kursrisiko.",
    "Should I pay off debt or build an emergency fund first?": "Erst Schulden tilgen oder den Notgroschen aufbauen?",
    "Build a starter emergency fund of 1 month of expenses or $1,000 to $2,000 first, then aggressively pay off high-interest consumer debt before expanding to 3-6 months.": "Zuerst einen Mini-Notgroschen von ca. 1 Monatsausgabe (1.000-2.000 €) ansparen, dann teure Konsumschulden tilgen und danach das Polster auf 3 bis 6 Monate ausbauen.",
    "When is it appropriate to use emergency fund savings?": "Wann darf man an den Notgroschen ran?",
    "Use it only for genuine, unexpected emergencies: sudden medical bills, unexpected car repairs, or living expenses following job loss.": "Ausschließlich für unvorhersehbare echte Notfälle: unaufschiebbare Reparaturen, Zahnersatz oder Überbrückung bei Jobverlust.",

    // 26. Fee Impact
    "What is an expense ratio?": "Was ist die Gesamtkostenquote (TER)?",
    "An expense ratio is the annual percentage fee charged by mutual funds and ETFs to cover fund management, administrative expenses, and operating costs.": "Die Total Expense Ratio beziffert die jährliche Gebühr in Prozent des Fondsvolumens für Verwaltung, Verwahrung und Betrieb.",
    "How do fees compound over time?": "Wie wirkt sich der Gebühren-Zinseszins langfristig aus?",
    "Fees are deducted annually from your total assets, meaning you lose both the fee money and all future compounding returns that money would have earned.": "Gebühren mindern das Anlagevermögen jedes Jahr, wodurch auch sämtliche künftigen Zinseszinsen auf diesen Betrag unwiederbringlich verloren gehen.",
    "What is a good expense ratio for an index fund?": "Welche Kostenquote gilt bei ETFs als günstig?",
    "Low-cost index funds and ETFs typically have expense ratios between 0.02% and 0.10%, whereas actively managed mutual funds often charge 0.60% to 1.50% or more.": "Günstige Indexfonds und ETFs kosten 0,05 % bis 0,20 % p.a.; aktiv gemanagte Fonds verlangen häufig 1,5 % bis 2,0 % plus Ausgabeaufschlag.",
    "What other investment fees should I look out for?": "Auf welche weiteren Wertpapiergebühren ist zu achten?",
    "Watch out for advisory fees (AUM fees of 1%), front-end or back-end sales loads, trading commissions, account maintenance fees, and custodial charges.": "Depotgebühren, Transaktionskosten (Orderprovisionen), Ausgabeaufschläge und laufende Vermögensverwaltungsgebühren.",
    "How much can a 1% fee difference affect my retirement savings?": "Wie viel Vermögen kostet ein Gebührenunterschied von 1 %?",
    "A 1% annual fee difference can erode 25% to 30% of your total ending portfolio wealth over a 30-year investment horizon.": "Über einen Zeitraum von 30 Jahren vernichtet ein scheinbar kleiner Gebührenunterschied von 1 % rund 25 % bis 30 % des gesamten Endvermögens!",

    // 27. College Savings
    "What is a 529 plan?": "Was ist ein Ausbildungssparplan (529 Plan)?",
    "A 529 plan is a tax-advantaged savings and investment plan designed to encourage saving for future higher education expenses with tax-free growth and qualified withdrawals.": "Ein steuerbegünstigter Sparplan für künftige Bildungs- und Studienkosten mit steuerfreiem Vermögenswachstum.",
    "How fast do college costs increase?": "Wie stark steigen Ausbildungskosten?",
    "Historically, higher education tuition and fees have increased at an annual rate of 4% to 6%, outpacing general consumer inflation.": "Studiengebühren und Ausbildungsausgaben steigen historisch mit 4 % bis 6 % pro Jahr deutlich schneller als die allgemeine Teuerungsrate.",
    "What happens to 529 funds if my child does not go to college?": "Was geschieht mit dem Geld, wenn das Kind nicht studiert?",
    "You can change the beneficiary to another qualifying family member, use up to $10,000 for student loan repayment, or roll over up to $35,000 into a Roth IRA under SECURE 2.0 rules.": "Man kann den Begünstigten auf Geschwister übertragen, Kredite ablösen oder bis zu 35.000 $ in ein Rentenkonto überführen.",
    "Can I use a 529 plan for trade schools or K-12 tuition?": "Kann man die Mittel auch für Berufsausbildung oder Schulen nutzen?",
    "Yes, qualified distributions can cover accredited trade schools, vocational programs, apprenticeships, and up to $10,000 per year for K-12 private school tuition.": "Ja, anerkannte Fach- und Meisterschulen sowie bis zu 10.000 $ Schulgeld pro Jahr für Privatschulen sind förderfähig.",
    "How does a 529 plan impact financial aid eligibility?": "Beeinflusst der Sparplan staatliche BAföG- oder Stipendienansprüche?",
    "Parent-owned 529 plans are assessed as parental assets on the FAFSA at a maximum rate of 5.64%, having minimal negative impact on financial aid eligibility.": "Elterliche Bildungssparvermögen werden nur zu einem geringen Bruchteil angerechnet und mindern die Förderchancen kaum.",

    // 28. Crypto DCA
    "What is Dollar-Cost Averaging (DCA)?": "Was ist der Durchschnittskosteneffekt (DCA / Sparplan)?",
    "Dollar-Cost Averaging is an investment strategy where you invest a fixed amount of money at regular intervals regardless of the asset's fluctuating market price.": "Man investiert in festen Zeitabständen stets denselben Geldbetrag, unabhängig vom aktuellen Börsenkurs des Vermögenswerts.",
    "How does DCA apply to high-volatility assets like Crypto?": "Warum ist DCA bei volatilen Krypto-Assets besonders nützlich?",
    "DCA prevents emotional decisions during extreme market peaks and crashes, automatically buying more units when prices are low and fewer when prices are high.": "Es schaltet Emotionen aus, kauft bei Kurseinbrüchen automatisch mehr Anteile und senkt so den mittleren Einstiegspreis über die Zeit.",
    "Is DCA better than investing a lump sum?": "Ist ein Sparplan besser als eine Einmalanlage?",
    "Lump sum investing historically wins in steadily rising markets, but DCA provides superior peace of mind, lower emotional risk, and downside protection in highly volatile markets.": "In rein steigenden Märkten gewinnt historisch die Einmalanlage; bei starken Schwankungen bietet DCA jedoch emotionalen Schutz vor Fehl-Timings.",
    "What is the best frequency for crypto DCA?": "Welches Intervall eignet sich für Krypto-Sparpläne?",
    "Weekly or bi-weekly DCA aligned with your pay cycle is ideal for capturing market volatility while keeping trading fees manageable.": "Wöchentliche oder zweiwöchentliche Ausführungen glätten Kursspitzen optimal ab, ohne übermäßige Transaktionsgebühren zu verursachen.",
    "Does DCA guarantee profits in cryptocurrency?": "Garantiert DCA sichere Gewinne bei Krypto-Anlagen?",
    "No, DCA does not protect against prolonged declines or failing crypto projects; it only ensures you achieve the weighted average market purchase price.": "Nein, ein Sparplan schützt nicht vor Totalverlust oder dauerhaften Bärenmärkten; er garantiert lediglich den fairen Durchschnittspreis.",

    // 29. Tip
    "What is the standard tipping percentage?": "Welche Trinkgeldhöhe ist üblich?",
    "In the United States and Canada, standard restaurant tipping guidelines range from 15% for adequate service, 18% for good service, to 20% or more for exceptional service.": "In Nordamerika sind 15 % bis 20 % Standard; im europäischen Raum gelten bei gutem Service im Restaurant 5 % bis 10 % als üblich.",
    "Should tips be calculated before or after sales tax?": "Berechnet man Trinkgeld vom Rechnungsbetrag vor oder nach Steuern?",
    "Etiquette traditionally dictates calculating the tip percentage on the pre-tax food and beverage subtotal, though many automated payment terminals calculate tip on the post-tax total.": "Klassisch wird das Trinkgeld auf den reinen Speisen- und Getränkebetrag vor Mehrwertsteuer berechnet, Kartenterminals nutzen oft die Bruttosumme.",
    "How do you split a bill evenly among friends?": "Wie teilt man eine Restaurantrechnung fair unter Freunden auf?",
    "Calculate the total bill including food, beverages, tax, and tip, and divide the total amount equally by the number of paying participants.": "Gesamtsumme inklusive Mehrwertsteuer und Trinkgeld addieren und gleichmäßig durch die Zahl der zahlenden Personen teilen.",

    // 30. Discount
    "How do you calculate a percentage discount?": "Wie berechnet man einen prozentualen Rabatt?",
    "Multiply the original price by the discount percentage divided by 100 to find the savings, and subtract that amount from the original price: Final Price = Original Price × (1 - Discount%).": "Originalpreis mit dem Rabattsatz multiplizieren und durch 100 teilen, dann vom Ausgangspreis abziehen: Endpreis = Grundpreis × (1 - Rabatt%).",
    "How do multiple stacked discounts work?": "Wie funktionieren kombinierte Rabatte?",
    "Stacked discounts apply sequentially rather than additively. For example, 20% off plus an extra 10% off results in an effective 28% total discount, not 30%.": "Mehrere Rabatte werden nacheinander angewandt, nicht addiert: 20 % plus 10 % extra ergeben rechnerisch 28 % Gesamtrabatt (nicht 30 %).",
    "Is sales tax applied before or after store discounts?": "Fällt die Mehrwertsteuer vor oder nach Abzug des Rabatts an?",
    "In most jurisdictions, sales tax is calculated on the discounted post-sale price, meaning you pay sales tax only on the actual money spent.": "Die Mehrwertsteuer wird auf den tatsächlich reduzierten Kaufpreis berechnet, Sie zahlen Steuer also nur auf den reell gezahlten Betrag."
  },

  // French (fr)
  fr: {
    // 1. Mortgage
    "How is a mortgage payment calculated?": "Comment est calculée la mensualité d'un prêt immobilier ?",
    "A standard monthly mortgage payment consists of Principal & Interest (P&I), property taxes, homeowners insurance, private mortgage insurance (PMI) if down payment is under 20%, and homeowner association (HOA) fees.": "Une mensualité de prêt comprend le capital et les intérêts, l'assurance emprunteur, les taxes foncières éventuelles et les frais de copropriété.",
    "What is PMI and when do I pay it?": "Qu'est-ce que l'assurance emprunteur / PMI et quand s'applique-t-elle ?",
    "Private Mortgage Insurance (PMI) is a policy that protects the lender if you default. It is typically required on conventional loans if your down payment is less than 20% of the home purchase price.": "Elle protège le prêteur en cas de défaillance. Elle est couramment exigée lorsque l'apport personnel est inférieur à 20 % du prix d'acquisition.",
    "What does PITI stand for?": "Que signifie le sigle PITI ?",
    "PITI stands for Principal, Interest, Taxes, and Insurance. These are the four basic components that make up a homeowner's monthly housing payment. Together, they reflect the true cost of owning a home on a month-to-month basis.": "PITI désigne le Capital (Principal), les Intérêts (Interest), les Impôts (Taxes) et l'Assurance (Insurance) : les quatre piliers de la charge mensuelle immobilière.",
    "Is a 15-year mortgage better than a 30-year mortgage?": "Un prêt sur 15 ans est-il préférable à un prêt sur 30 ans ?",
    "A 15-year mortgage typically offers a lower interest rate and allows you to pay off your home twice as fast, saving you tens of thousands of dollars in interest. However, a 30-year mortgage has lower monthly payments, which provides greater cash flow flexibility.": "Sur 15 ans, le taux d'intérêt est plus bas et le coût total du crédit est nettement réduit ; sur 30 ans, les mensualités sont allégées, préservant votre trésorerie.",
    "How do extra payments affect my mortgage payoff schedule?": "Quel est l'impact des remboursements anticipés sur le prêt ?",
    "Any extra money you pay towards your mortgage is applied directly to the principal balance. This reduces the remaining loan balance and decreases the amount of interest that accumulates, helping you pay off your mortgage years ahead of schedule.": "Tout remboursement supplémentaire vient amortir le capital restant dû, ce qui réduit les intérêts futurs et permet de solder le crédit plusieurs années à l'avance.",

    // 2. Loan Calculator
    "How does an amortized loan work?": "Comment fonctionne un prêt amortissable classique ?",
    "With an amortized loan, you make equal periodic payments. Early in the loan term, the majority of each payment goes toward interest. Over time, an increasing portion goes toward paying down the principal balance until the debt is fully paid off.": "Vous versez des échéances constantes. Au début, la part d'intérêts prédomine ; avec le temps, la part de capital remboursé augmente jusqu'à extinction de la dette.",
    "What is the difference between fixed-rate and variable-rate loans?": "Quelle est la différence entre un taux fixe et un taux variable ?",
    "A fixed-rate loan maintains the exact same interest rate and payment throughout the loan term. A variable-rate loan has an interest rate that adjusts periodically based on benchmark interest rates, which can increase or decrease your payments.": "Le taux fixe garantit un taux et des mensualités inchangés jusqu'au terme ; le taux variable s'ajuste périodiquement selon les indices de référence du marché.",
    "Can I pay off my loan early without penalty?": "Puis-je rembourser mon crédit par anticipation sans frais ?",
    "Most consumer loans and conventional mortgages allow prepayment without penalties, but some lenders include a prepayment penalty clause. Always verify your loan agreement terms before making accelerated principal payments.": "Les crédits à la consommation permettent souvent le remboursement sans pénalités, mais les prêts immobiliers peuvent comporter des indemnités de remboursement anticipé (IRA).",

    // 3. Debt Payoff
    "What is the Debt Snowball method?": "Qu'est-ce que la méthode de la 'Boule de neige' ?",
    "The Debt Snowball method involves paying off your smallest debt balances first, regardless of interest rates. It builds psychological momentum and motivation through quick wins.": "Elle consiste à solder d'abord les plus petits montants de dette, sans tenir compte du taux d'intérêt, procurant des victoires psychologiques rapides.",
    "What is the Debt Avalanche method?": "Qu'est-ce que la méthode de l''Avalanche' ?",
    "The Debt Avalanche method involves paying off your highest interest rate debts first. Mathematically, this minimizes the total interest you pay and helps you become debt-free faster.": "Elle consiste à rembourser en priorité les dettes aux taux d'intérêt les plus élevés, ce qui minimise le coût financier total du crédit.",
    "Which method is better: Debt Snowball or Debt Avalanche?": "Laquelle est la meilleure : Boule de neige ou Avalanche ?",
    "Mathematically, the Debt Avalanche method is superior because it minimizes the total interest paid. However, studies show that the Debt Snowball method is often more successful in practice because the psychological momentum helps people stick to their plan.": "Mathématiquement, l'avalanche est optimale ; dans la réalité, la boule de neige rencontre un taux de réussite souvent plus élevé grâce au renforcement positif rapide.",
    "How does the 'extra payment' roll over in these strategies?": "Comment se reporte l'effort d'épargne supplémentaire ?",
    "You continue paying minimums on all debts and add your extra cash to the target debt. Once that target debt is fully paid off, you roll its entire payment into the next debt on your list.": "Vous payez le minimum sur chaque ligne et concentrez votre surplus sur la dette cible ; une fois celle-ci liquidée, vous basculez l'intégralité du budget sur la suivante.",
    "Can I do a hybrid of Snowball and Avalanche?": "Peut-on combiner les méthodes Boule de neige et Avalanche ?",
    "Yes. Many people pay off one or two small debts first to free up immediate cash flow (Snowball), and then pivot to targeting the remaining debts by highest interest rate (Avalanche).": "Oui. Vous pouvez éteindre une ou deux petites dettes pour libérer de la trésorerie (boule de neige), puis attaquer les dettes restantes par ordre de taux d'intérêt (avalanche).",

    // 4. Refinance
    "When should I refinance my loan?": "Quand est-il judicieux de renégocier ou faire racheter son prêt ?",
    "It generally makes sense to refinance if you can secure a lower interest rate, reduce your monthly payment, or shorten your term, provided your total interest savings exceed the closing costs.": "L'opération est rentable si l'écart de taux permet de réduire la mensualité ou la durée, et que le gain sur les intérêts compense largement les frais de dossier et d'avenant.",
    "What closing costs are associated with refinancing?": "Quels sont les frais liés au rachat de crédit ?",
    "Refinancing costs typically include application fees, origination fees, appraisal costs, title search and insurance, credit report fees, and recording fees, ranging from 2% to 6% of the loan amount.": "Ils comprennent les indemnités de remboursement anticipé, les frais de dossier de la nouvelle banque et les frais de garantie ou de mainlevée d'hypothèque.",
    "How do I calculate my refinance break-even point?": "Comment calculer le point mort (retour sur investissement) du rachat ?",
    "Divide your total refinance closing costs by your monthly payment savings. If closing costs are $3,000 and you save $150 per month, your break-even point is 20 months ($3,000 / $150).": "Divisez le total des frais engagés par l'économie mensuelle réalisée : 3 000 € de frais / 150 € d'économie = 20 mois pour rentabiliser l'opération.",
    "What is a 'no-closing-cost' refinance?": "Qu'est-ce qu'un rachat 'sans frais initiaux' ?",
    "A no-closing-cost refinance means the lender either rolls the closing fees into your new total loan balance or charges a slightly higher interest rate to cover them.": "Les frais ne disparaissent pas : ils sont soit intégrés au capital emprunté, soit compensés par un taux d'intérêt légèrement supérieur.",
    "Does refinancing lower my monthly payment or total interest?": "Le rachat réduit-il la mensualité ou le coût total ?",
    "It depends on the term. Refinancing to a lower rate with the same or shorter term saves on both. Resetting your term back to 30 years lowers the monthly payment but can increase total lifetime interest.": "À durée égale ou raccourcie, vous gagnez sur les deux tableaux ; rallonger la durée réduit la mensualité mais peut augmenter le coût global des intérêts.",

    // 5. Student Loan
    "What is the SAVE plan?": "Qu'est-ce que le dispositif de remboursement SAVE ?",
    "The Saving on a Valuable Education (SAVE) plan is an income-driven repayment (IDR) plan that protects discretionary income up to 225% of the poverty line, lowers payments to 5%-10%, and stops unpaid interest from accumulating.": "Un plan américain indexé sur les revenus qui protège 225 % du seuil de pauvreté, réduit les mensualités et empêche l'accumulation d'intérêts impayés.",
    "How is discretionary income calculated for student loans?": "Comment est calculé le revenu disponible pour les prêts étudiants ?",
    "Discretionary income is the difference between your Adjusted Gross Income (AGI) and a percentage of the federal poverty guideline for your family size (150% for PAYE/IBR, 225% for SAVE).": "C'est l'écart entre le revenu brut ajusté et le seuil de pauvreté fédéral applicable à la taille du foyer fiscal.",
    "How does student loan forgiveness work under IDR plans?": "Comment fonctionne l'effacement de la dette étudiante ?",
    "If you pay under an IDR plan for 20 or 25 years (or 10 years under SAVE for low initial balances), any remaining student debt is forgiven.": "Après 20 à 25 ans d'échéances régulières indexées sur les revenus, le reliquat de dette fait l'objet d'une remise totale.",
    "Which IDR plan is best for me?": "Quel plan de remboursement choisir ?",
    "For most borrowers, the SAVE plan offers the lowest monthly payment and the best interest subsidy. Borrowers with very high incomes relative to debt may prefer PAYE or IBR due to payment caps.": "Le plan SAVE offre la mensualité la plus basse à la majorité des emprunteurs ; ceux aux revenus très élevés préfèrent souvent PAYE ou IBR avec plafonnement.",
    "Can I switch student loan repayment plans at any time?": "Peut-on changer de plan de remboursement en cours de route ?",
    "Yes, you can apply to switch repayment plans for free at studentaid.gov. However, switching plans can sometimes cause unpaid interest to capitalize.": "Oui, le changement est gratuit, mais il peut dans certains cas entraîner la capitalisation des intérêts en attente.",

    // 6. DTI
    "What is the 28/36 rule?": "Qu'est-ce que la règle budgétaire des 28/36 % ?",
    "The 28/36 rule is a standard mortgage underwriting guideline stating that housing costs should not exceed 28% of gross monthly income, and total debt payments should not exceed 36%.": "Elle préconise de ne pas consacrer plus de 28 % de ses revenus bruts au logement, et pas plus de 36 % au remboursement de l'ensemble de ses crédits.",
    "How does DTI affect my mortgage application?": "Comment le taux d'endettement influence-t-il la demande de prêt ?",
    "Lenders use DTI to measure your ability to manage monthly payments. Lower DTIs below 36% receive the most favorable mortgage terms and lowest interest rates.": "Les banques l'analysent pour mesurer votre capacité de remboursement. Un taux inférieur à 35 % est la norme requise pour obtenir les meilleures conditions.",
    "What is the difference between front-end and back-end DTI?": "Quelle est la différence entre endettement logement et endettement global ?",
    "Front-end DTI only includes housing expenses (mortgage, property tax, insurance, HOA). Back-end DTI includes housing plus all recurring debts like credit cards, auto loans, and student loans.": "Le premier ne prend en compte que la charge de logement ; le second additionne l'ensemble des crédits en cours (consommation, automobile, revolving).",
    "What is the maximum DTI ratio lenders will accept?": "Quel est le taux d'endettement maximal accordé par les banques ?",
    "Conventional mortgages typically prefer back-end DTIs of 36% to 43%. Government-backed loans like FHA and VA may allow DTIs up to 50% with strong compensating factors.": "En France et en Europe, la règle prudentielle limite généralement le taux à 35 % assurance comprise (jusqu'à 43 % ou 50 % aux USA selon garanties).",
    "How can I lower my Debt-to-Income ratio?": "Comment réduire son taux d'endettement ?",
    "You can lower your DTI by increasing gross income or paying off smaller debts completely to eliminate their recurring monthly minimum payments.": "En augmentant ses revenus réguliers ou en remboursant par anticipation les petits crédits à la consommation pour supprimer leurs mensualités.",

    // 7. APR
    "What is the difference between interest rate and APR?": "Quelle est la différence entre le taux nominal et le TAEG / APR ?",
    "The interest rate is the nominal cost of borrowing the principal balance. The Annual Percentage Rate (APR) reflects the total annual cost of the loan including points, broker fees, and origination charges.": "Le taux nominal correspond aux seuls intérêts du capital ; le TAEG (APR) intègre l'ensemble des frais obligatoires : assurance, dossier, garanties et courtage.",
    "Why is APR higher than the advertised interest rate?": "Pourquoi le TAEG est-il supérieur au taux débiteur affiché ?",
    "APR is higher because it amortizes all upfront lender fees, discount points, and closing costs into the effective yearly rate, revealing the true cost of credit.": "Parce qu'il convertit tous les frais annexes en un taux annuel équivalent, révélant le véritable coût global du financement.",
    "Is APR useful for comparing different loan offers?": "Le TAEG est-il l'indicateur le plus pertinent pour comparer ?",
    "Yes, APR is the best metric for comparing loan offers with different fee structures, provided you plan to keep the loan for its full term.": "Oui, c'est l'étalon officiel qui permet de comparer équitablement des offres aux structures de frais et d'assurance différentes.",

    // 8. Rent vs Buy
    "How long do I need to stay in a home for buying to beat renting?": "Combien d'années faut-il occuper un logement pour amortir l'achat ?",
    "Because upfront closing costs, moving fees, and commissions are substantial, homeowners usually need to stay in a property for 4 to 7 years for buying to financially outperform renting.": "En raison des frais de notaire et des droits de mutation, il faut généralement conserver le bien entre 4 et 7 ans pour que l'achat surpasse la location.",
    "What hidden costs of homeownership should renters consider?": "Quels coûts cachés un locataire doit-il anticiper avant d'acheter ?",
    "Homeowners must pay property taxes, homeowners insurance, maintenance and repairs (typically 1-2% of home value annually), HOA dues, and potential capital improvement costs.": "La taxe foncière, les charges de copropriété, l'entretien courant (1 à 2 % de la valeur du bien par an) et les gros travaux de rénovation.",
    "What is the opportunity cost of buying a home?": "Quel est le coût d'opportunité de l'achat immobilier ?",
    "The money spent on down payment, closing costs, and ongoing property maintenance could otherwise remain invested in liquid assets like index funds that compound over time.": "L'apport personnel et les frais annexes mobilisés ne profitent plus du rendement composé des marchés boursiers (actions, ETF).",

    // 9. Home Affordability
    "How much income should I spend on a mortgage?": "Quelle part de mon salaire puis-je consacrer à un prêt immobilier ?",
    "Most financial experts recommend spending no more than 25% to 28% of your gross monthly income on housing costs (the front-end DTI guideline).": "La règle générale recommande de limiter la mensualité de prêt entre 25 % et 33 % de vos revenus nets mensuels.",
    "How does down payment size impact affordability?": "Quel est l'impact de l'apport personnel sur le budget d'achat ?",
    "A larger down payment reduces your loan amount, eliminates Private Mortgage Insurance (PMI) if you put down 20%, and lowers your monthly mortgage payment.": "Un apport solide réduit le montant à emprunter, supprime les surcoûts d'assurance et permet de négocier les meilleurs taux bancaires.",
    "How do interest rates affect purchasing power?": "Comment la hausse des taux affecte-t-elle le pouvoir d'achat immobilier ?",
    "Every 1% increase in mortgage interest rates reduces your home purchasing power by roughly 10% for the same monthly payment budget.": "Chaque point de pourcentage (+1 %) de taux d'intérêt supplémentaire ampute votre capacité d'emprunt d'environ 10 % à mensualité égale.",

    // 10. Auto Loan
    "What is the 20/4/10 rule for buying a car?": "Qu'est-ce que la règle 20/4/10 pour financer une voiture ?",
    "The 20/4/10 rule recommends putting down at least 20%, financing for no longer than 4 years (48 months), and keeping total vehicle expenses under 10% of gross monthly income.": "Apporter au moins 20 %, emprunter sur 4 ans maximum (48 mois) et plafonner l'ensemble des dépenses automobiles à 10 % de ses revenus bruts.",
    "Is a longer auto loan term better?": "Est-il avantageux d'allonger la durée d'un crédit auto ?",
    "Longer terms (like 72 or 84 months) lower your monthly payment, but you pay substantially more total interest and risk becoming 'underwater' (owing more than the vehicle is worth).": "Une durée longue abaisse la mensualité mais fait exploser les intérêts, avec le risque d'avoir un véhicule qui décote plus vite que le capital remboursé.",
    "How does vehicle depreciation affect my loan?": "Quel est le risque lié à la décote automobile ?",
    "New cars depreciate rapidly (often losing 20% in the first year). Without an adequate down payment, you risk owing more on your loan than the car's market value.": "Un véhicule neuf perd environ 20 % de sa valeur dès la première année ; sans apport, votre dette dépassera la valeur réelle du véhicule.",

    // 11. Credit Card Payoff
    "Why does paying only the minimum take so long?": "Pourquoi ne rembourser que le minimum prend-il autant d'années ?",
    "Credit card minimum payments are often set around 1% to 2% of the balance plus accrued interest. As the balance slowly drops, the required minimum drops, extending payoff times to decades.": "Le paiement minimum couvre à peine les intérêts et 1 à 2 % du capital. La mensualité diminuant avec le solde, l'amortissement s'étire sur des décennies.",
    "How much faster can I pay off credit cards by paying extra?": "À quel point des versements volontaires accélèrent-ils le désendettement ?",
    "Paying even $50 or $100 above the minimum payment can cut your payoff timeline by several years and save thousands of dollars in compounding interest charges.": "Ajouter ne serait-ce que 50 € ou 100 € par mois permet de solder le compte plusieurs années plus tôt et d'économiser une fortune en agios.",
    "Should I use a balance transfer card to pay off debt?": "Faut-il recourir au rachat de crédit ou à une carte 0 % ?",
    "A 0% APR balance transfer credit card can save significant interest if you pay off the full balance during the promotional period (typically 12-21 months) and factor in the 3%-5% transfer fee.": "Une offre promotionnelle à 0 % est très efficace pour effacer la dette si vous remboursez tout pendant la période d'exonération, frais de transfert inclus.",

    // 12. Retirement Planner
    "What is the 4% rule in retirement planning?": "Qu'est-ce que la règle des 4 % pour la retraite ?",
    "The 4% rule suggests that withdrawing 4% of your retirement portfolio in the first year, adjusted for inflation annually thereafter, provides a high probability that your nest egg will last at least 30 years.": "Elle indique que retirer 4 % de son capital la première année, puis indexer ce montant sur l'inflation, offre une quasi-certitude de préserver ses fonds sur 30 ans.",
    "How much money do I need to retire comfortably?": "De quel capital a-t-on besoin pour une retraite sereine ?",
    "A common benchmark is accumulating 25 times your anticipated annual retirement expenses, or replacing 70% to 80% of your pre-retirement income.": "La référence financière courante est de posséder 25 fois ses dépenses annuelles estimées, ou de garantir 70 % à 80 % de son dernier revenu d'activité.",
    "How does inflation impact retirement spending?": "Comment l'inflation affecte-t-elle le pouvoir d'achat des retraités ?",
    "Inflation steadily reduces the purchasing power of your savings. At a 3% inflation rate, everyday living expenses double roughly every 24 years, requiring growing investment portfolios.": "Avec 3 % d'inflation, le coût de la vie double en 24 ans : une partie de l'épargne retraite doit obligatoirement être investie sur des actifs de rendement.",

    // 13. 401(k)
    "What is an employer 401(k) match?": "Qu'est-ce que l'abondement de l'employeur ?",
    "An employer match is money your employer contributes to your 401(k) account based on your own contributions (e.g. matching 50% of contributions up to 6% of your salary). It is effectively an instant return on your savings.": "C'est une contribution financière versée par l'entreprise en complément de votre propre épargne salariale (PERCO, PEE), constituant un gain immédiat à 100 %.",
    "What are the 401(k) contribution limits for 2024?": "Quels sont les plafonds de versement ?",
    "For 2024, the employee contribution limit is $23,000 for those under 50. Individuals aged 50 and older can contribute an additional $7,500 catch-up contribution for a total of $30,500.": "Le plafond légal est fixé à 23 000 $ pour les moins de 50 ans, avec une majoration de 7 500 $ pour les salariés de 50 ans et plus.",
    "What is the difference between Traditional 401(k) and Roth 401(k)?": "Quelle est la différence entre plan classique et plan Roth ?",
    "Traditional 401(k) contributions are pre-tax and reduce your current taxable income, with withdrawals taxed in retirement. Roth 401(k) contributions are post-tax, but all qualified growth and withdrawals are completely tax-free.": "Le modèle traditionnel permet de déduire les versements de ses impôts actuels et taxe les retraits à la retraite ; le Roth investit du net et exonère totalement les gains futurs.",

    // 14. IRA Comparison
    "What is the key difference between a Roth and Traditional IRA?": "Quelle est la différence fondamentale entre IRA traditionnel et IRA Roth ?",
    "Traditional IRA contributions are generally made pre-tax (reducing your current taxable income), but withdrawals in retirement are taxed as ordinary income. Roth IRA contributions are made with post-tax dollars; growth and withdrawals in retirement are completely tax-free.": "L'IRA traditionnel est défiscalisé à l'entrée et imposé à la sortie ; le Roth est alimenté après impôts mais garantit une exonération fiscale totale sur les plus-values.",
    "Which IRA plan is better for me?": "Quel compte de retraite individuel privilégier ?",
    "If you expect your tax bracket to be higher in retirement than it is today, a Roth IRA is better. If you expect your tax bracket in retirement to be lower, a Traditional IRA is better.": "Si votre tranche marginale d'imposition sera plus haute à la retraite, choisissez le Roth ; si vos revenus baisseront à la retraite, privilégiez le traditionnel.",
    "What are the contribution limits for IRAs in 2024?": "Quel est le plafond de versement annuel ?",
    "For 2024, the annual contribution limit for Traditional and Roth IRAs is $7,000 for individuals under age 50, and $8,000 for individuals age 50 or older.": "Le plafond annuel est de 7 000 $ (8 000 $ pour les 50 ans et plus).",
    "Are there income limits for contributing to Traditional and Roth IRAs?": "Existe-t-il des plafonds de revenus pour cotiser ?",
    "Roth IRAs have income phase-out ranges that restrict high earners. Anyone with earned income can contribute to a Traditional IRA, but tax deductibility may be limited by income and workplace retirement coverage.": "Le Roth IRA comporte des plafonds d'éligibilité pour les hauts revenus ; l'IRA traditionnel est ouvert à tous mais la déductibilité peut être plafonnée.",
    "Can I withdraw money from my IRA before age 59½ without penalty?": "Peut-on retirer ses fonds avant 59 ans et demi sans pénalité ?",
    "Roth IRA original contributions can be withdrawn at any time penalty-free. Withdrawing investment earnings early or withdrawing Traditional IRA funds before 59½ usually incurs income taxes and a 10% penalty.": "Les versements initiaux d'un Roth peuvent être retirés sans pénalité ; les gains et les retraits d'IRA classique avant 59 ans et demi subissent l'impôt et 10 % de pénalité.",

    // 15. Compound Interest
    "What is compound interest?": "Qu'est-ce que les intérêts composés ?",
    "Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods. It causes your wealth to grow exponentially over time.": "C'est la rémunération calculée à la fois sur le capital initial et sur les intérêts accumulés au fil des périodes, entraînant une croissance exponentielle.",
    "What is the Rule of 72?": "Qu'est-ce que la règle de 72 ?",
    "The Rule of 72 is a quick mental formula to estimate how many years it takes to double your money. Divide 72 by your annual interest rate (e.g. at 8%, your money doubles in about 9 years).": "Une méthode de calcul mental pour estimer le temps nécessaire pour doubler son capital : divisez 72 par le taux de rendement (ex. à 8 %, doublement en 9 ans).",
    "How does compounding frequency affect total returns?": "Quel est l'effet de la fréquence de capitalisation sur le capital final ?",
    "The more frequently interest compounds (annually, monthly, daily), the higher your effective annual yield (APY) will be, as interest starts earning interest sooner.": "Plus les intérêts sont crédités fréquemment (mensuellement, quotidiennement), plus le rendement effectif annuel (TAEG/APY) est élevé.",

    // 16. TVM
    "What is the Time Value of Money (TVM)?": "Qu'est-ce que la valeur temps de l'argent (TVM) ?",
    "The Time Value of Money principle states that a dollar today is worth more than a dollar in the future because today's dollar can be invested and earn interest.": "Ce principe financier fondamental affirme qu'un euro aujourd'hui vaut plus qu'un euro demain, car il peut être immédiatement investi pour produire des intérêts.",
    "What are the core components of TVM calculations?": "Quelles sont les composantes clés du calcul TVM ?",
    "The five core variables are Present Value (PV), Future Value (FV), Interest Rate per Period (Rate), Total Number of Periods (Nper), and Periodic Payment (PMT).": "La Valeur Actuelle (PV), la Valeur Future (FV), le Taux d'intérêt (Rate), le Nombre de périodes (Nper) et le Paiement régulier (PMT).",
    "What is the difference between an ordinary annuity and annuity due?": "Quelle est la différence entre rente ordinaire et rente à terme échu ?",
    "In an ordinary annuity, payments occur at the end of each period. In an annuity due, payments occur at the beginning of each period, earning an extra compounding cycle of interest.": "La rente ordinaire se verse en fin de période ; la rente d'avance (terme à échoir) en début de période, profitant d'un cycle de capitalisation supplémentaire.",

    // 17. ROI
    "How is Return on Investment (ROI) calculated?": "Comment se calcule le retour sur investissement (ROI) ?",
    "ROI is calculated by subtracting the initial cost of the investment from the final value, and dividing that net gain by the initial cost: ROI = (Net Profit / Cost of Investment) × 100%.": "En soustrayant le coût d'achat initial à la valeur finale et en divisant ce profit par le coût initial : ROI = (Gain Net / Coût d'Investissement) × 100 %.",
    "What is the difference between simple ROI and annualized ROI?": "Quelle est la différence entre ROI simple et ROI annualisé (TCAC) ?",
    "Simple ROI measures total percentage return regardless of duration. Annualized ROI (CAGR) standardizes the return into a per-year geometric rate, enabling fair comparison between investments held for different lengths of time.": "Le ROI simple donne le gain total sur toute la durée ; le ROI annualisé ramène cette performance à un rythme annuel moyen, permettant la comparaison.",
    "What is considered a good ROI?": "Qu'est-ce qu'un bon rendement financier ?",
    "Historically, the broad stock market (S&P 500) has returned an average of 7% to 10% annually before inflation. Investments with higher expected returns generally involve higher risk of capital loss.": "Historiquement, les actions mondiales rapportent en moyenne 7 % à 10 % par an avant inflation ; des rendements plus élevés impliquent des risques proportionnels.",

    // 18. Savings Goal
    "How do I calculate how much to save monthly for a goal?": "Comment calculer l'épargne mensuelle nécessaire pour un projet ?",
    "You divide your target savings amount by the number of months until your deadline, while factoring in the compounding interest earned on your growing balance.": "Divisez le montant cible par le nombre de mois restants, en déduisant les intérêts composés générés par votre capital au fil de l'eau.",
    "Should I keep savings goal funds in high-yield savings or stocks?": "Faut-il placer son épargne projet sur livret ou en bourse ?",
    "For goals under 3 to 5 years (like a car or home down payment), keep funds in safe, liquid instruments like High-Yield Savings Accounts (HYSA) or CDs. For goals 5+ years away, a diversified investment portfolio may be suitable.": "À moins de 3 à 5 ans (apport, auto), préférez les livrets bancaires sécurisés ; au-delà de 5 ans, un portefeuille diversifié en ETF est adapté.",
    "How can I stay on track with my savings goals?": "Comment respecter son plan d'épargne sur la durée ?",
    "Automate recurring monthly transfers into a dedicated savings account immediately after your paycheck arrives (the 'pay yourself first' strategy).": "Automatisez un virement permanent vers un compte séparé dès le versement de votre salaire (le principe de 'se payer en premier').",

    // 19. Stock Return
    "How do I calculate stock returns?": "Comment calculer le rendement total d'une action ?",
    "Total stock return equals capital gains (ending price minus purchase price) plus any dividends received, divided by the original purchase cost.": "Il est égal à la plus-value latente ou réalisée (cours de vente moins cours d'achat) augmentée des dividendes perçus, rapportée au prix d'achat.",
    "What is CAGR in stock returns?": "Que signifie le CAGR en bourse ?",
    "Compound Annual Growth Rate (CAGR) measures the geometric mean annual return of a stock over multiple years, smoothing out annual market fluctuations.": "Le taux de croissance annuel composé (CAGR) mesure la performance annuelle lissée d'un placement sur plusieurs exercices financiers.",
    "What is the difference between simple return and annualized return?": "Quelle est la différence entre performance absolue et annualisée ?",
    "Simple return measures absolute percentage gain over the entire holding period, while annualized return shows the steady annual rate required to achieve that result.": "La performance absolue indique le gain total cumulé ; la performance annualisée indique la vitesse de progression annuelle constante correspondante.",

    // 20. CAPM
    "What is the Capital Asset Pricing Model (CAPM)?": "Qu'est-ce que le MEDAF / CAPM ?",
    "CAPM calculates an asset's expected return based on its risk relative to the overall market, using the formula: Expected Return = Risk-Free Rate + Beta × (Market Return - Risk-Free Rate).": "Le modèle d'évaluation des actifs financiers détermine la rentabilité exigée d'un titre selon son risque de marché : Rendement = Taux sans risque + Bêta × Prime de risque.",
    "What does Asset Beta (β) represent?": "Que représente le Bêta (β) d'un titre ?",
    "Beta measures an asset's volatility compared to the broader market. A beta of 1.0 indicates market-level volatility; above 1.0 indicates higher volatility, and below 1.0 indicates lower volatility.": "Il mesure la sensibilité du titre par rapport à l'indice de référence : Bêta = 1 réplique le marché ; supérieur à 1, l'actif est plus volatil que le marché.",
    "What is the Risk-Free Rate?": "Qu'est-ce que le taux sans risque ?",
    "The risk-free rate is the theoretical rate of return of an investment with zero risk of default, typically represented by long-term government bond yields (like 10-year US Treasuries).": "Le rendement garanti d'un placement sans risque de défaut, représenté par les obligations d'État à 10 ans des pays solvables.",
    "What is the Market Risk Premium?": "Qu'est-ce que la prime de risque de marché ?",
    "The market risk premium is the additional return investors demand for choosing risky market equities over risk-free government securities.": "Le surplus de rentabilité exigé par les investisseurs pour détenir des actions plutôt que des titres d'État souverains sans risque.",

    // 21. Dividend
    "What is dividend yield versus yield on cost?": "Quelle différence entre rendement actuel et rendement sur coût d'achat ?",
    "Dividend yield is the annual dividend divided by the current stock price. Yield on cost is the annual dividend divided by your original purchase price, which increases as companies raise their dividends over time.": "Le rendement actuel rapporte le dividende au cours du jour ; le rendement sur coût le rapporte à votre prix d'achat historique, augmentant à chaque hausse de dividende.",
    "What is a Dividend Reinvestment Plan (DRIP)?": "Qu'est-ce qu'un plan de réinvestissement des dividendes (DRIP) ?",
    "A DRIP automatically uses your cash dividend payments to purchase additional shares or fractional shares of the stock, compounding your share count and future payouts without commission fees.": "Un mécanisme qui réinvestit automatiquement vos dividendes dans de nouvelles actions de l'entreprise sans frais de courtage, décuplant l'effet boule de neige.",
    "Are dividend payments guaranteed?": "Les dividendes sont-ils garantis ?",
    "No, company boards can reduce, suspend, or eliminate dividend payouts at any time depending on company profitability and economic conditions.": "Non, le conseil d'administration peut réduire, suspendre ou supprimer les dividendes à tout moment selon les résultats et la conjoncture.",

    // 22. Inflation
    "What is inflation?": "Qu'est-ce que l'inflation ?",
    "Inflation is the general rise in prices for goods and services over time, resulting in a decline in the purchasing power of money.": "La hausse généralisée et continue des prix des biens et services, qui entraîne une perte de pouvoir d'achat de la monnaie.",
    "How does inflation affect my savings?": "Quel est l'impact de l'inflation sur l'épargne ?",
    "Cash sitting in zero-interest accounts loses purchasing power each year. If inflation is 3%, $100 today will only buy about $97 worth of goods next year.": "L'argent non rémunéré se déprécie : avec 3 % d'inflation, 100 € aujourd'hui ne permettront d'acheter que 97 € de biens l'an prochain.",
    "How is inflation officially measured?": "Comment mesure-t-on l'inflation ?",
    "Inflation is primarily measured using the Consumer Price Index (CPI), which tracks price changes across a standard market basket of consumer goods and services.": "Principalement à travers l'Indice des Prix à la Consommation (IPC), qui suit l'évolution des prix d'un panier représentatif de biens et services ménagers.",
    "What is the historical average inflation rate?": "Quelle est la moyenne historique de l'inflation ?",
    "In the United States, inflation has historically averaged between 2.5% and 3.2% per year over long multi-decade horizons.": "Dans les économies développées, elle s'est établie en moyenne historique de long terme entre 2 % et 3 % par an.",
    "How can I protect my money from losing value to inflation?": "Comment protéger son capital contre l'inflation ?",
    "Investing in assets whose earnings outpace inflation—such as diversified equities, Treasury Inflation-Protected Securities (TIPS), real estate, and inflation-indexed bonds.": "En investissant dans des actifs de croissance dont la performance surpasse la hausse des prix : actions mondiales, obligations indexées et immobilier.",

    // 23. Paycheck
    "What is FICA tax?": "Que sont les cotisations sociales et taxes salariales ?",
    "FICA is a federal payroll tax that funds Social Security (6.2% on wages up to the wage base limit) and Medicare (1.45% plus an additional 0.9% on high earners).": "Ce sont les cotisations prélevées sur le salaire pour financer la retraite, l'assurance maladie, le chômage et la prévoyance.",
    "What is the difference between pre-tax and post-tax deductions?": "Quelle est la différence entre déductions avant et après impôt ?",
    "Pre-tax deductions (like 401k and health insurance) reduce your taxable gross income before taxes are computed. Post-tax deductions (like Roth contributions or wage garnishments) are taken after taxes.": "Les cotisations avant impôt (mutuelle, épargne retraite) minorent le revenu imposable ; les retenues après impôt sont prélevées sur le net fiscal.",
    "What is the difference between gross pay and net pay?": "Quelle est la différence entre salaire brut et salaire net ?",
    "Gross pay is the total amount earned before any taxes or deductions. Net pay (take-home pay) is the actual cash deposited into your bank account after all deductions.": "Le brut est la rémunération contractuelle avant retenues ; le net est la somme réellement créditée sur votre compte bancaire.",
    "How does my W-4 filing status affect my paycheck?": "Quel est l'impact du taux de prélèvement à la source ?",
    "Your W-4 form informs your employer how much federal income tax to withhold each pay period based on your filing status, dependents, and other income.": "Il détermine le montant d'impôt sur le revenu retenu chaque mois par l'employeur selon votre situation familiale et vos revenus annexes.",
    "Why do state and local taxes vary so much?": "Pourquoi les fiscalités locales varient-elles autant ?",
    "State income tax rates range from 0% (in states like Texas, Florida, and Washington) to over 13% in high-tax states, while some cities also impose local municipal income taxes.": "Chaque collectivité ou État dispose de ses propres barèmes d'imposition sur le revenu et taxes d'habitation locales.",

    // 24. Net Worth
    "What is net worth?": "Qu'est-ce que le patrimoine net ?",
    "Net worth is the total market value of everything you own (assets) minus everything you owe to creditors (liabilities).": "C'est la valorisation marchande totale de ce que vous possédez (actifs) diminuée de la totalité de vos dettes (passifs).",
    "How often should I calculate my net worth?": "À quelle fréquence faut-il faire son bilan patrimonial ?",
    "Reviewing your net worth quarterly or semi-annually gives you a clear high-level view of your financial health without obsessing over daily market swings.": "Un pointage trimestriel ou semestriel offre une vision claire et stratégique sans se focaliser sur les fluctuations quotidiennes des marchés.",
    "What counts as an asset vs. a liability?": "Que comprend l'actif et le passif ?",
    "Assets include bank balances, investment accounts, home equity, and retirement funds. Liabilities include mortgages, student loans, car loans, and credit card debt.": "Actifs : épargne bancaire, comptes titres, valeur des biens immobiliers, PER. Passifs : prêts immobiliers, crédits conso, découverts.",
    "Should I include my house and mortgage in my net worth?": "Faut-il inclure son logement et son prêt dans le patrimoine net ?",
    "Yes, you include the current fair market value of the home under assets and the remaining mortgage balance under liabilities. The difference is your home equity.": "Oui, on inscrit la valeur vénale de la maison à l'actif et le capital restant dû au passif ; la différence est votre valeur nette immobilière.",
    "What does it mean to have a negative net worth?": "Que signifie avoir un patrimoine net négatif ?",
    "A negative net worth means your total debts exceed your total assets. This is common for young adults and recent graduates with student loans.": "Cela signifie que vos dettes dépassent vos avoirs, ce qui est fréquent chez les jeunes diplômés ou lors d'un achat immobilier récent.",

    // 25. Emergency Fund
    "How much emergency fund is recommended?": "Quel montant dédier au fonds d'urgence ?",
    "Most financial planners recommend saving 3 to 6 months of essential living expenses, or 9 to 12 months for freelancers or single-income households.": "Les conseillers recommandent d'épargner 3 à 6 mois de dépenses courantes incompressibles (jusqu'à 12 mois pour les indépendants).",
    "What expenses should be included in an emergency fund budget?": "Quelles dépenses budgétiser dans l'épargne de précaution ?",
    "Include only non-negotiable living costs: housing (rent/mortgage), utilities, groceries, basic transportation, minimum debt payments, and healthcare insurance.": "Uniquement les charges fixes indispensables : loyer ou mensualité, alimentation de base, énergies, assurances et santé.",
    "Where should I keep my emergency fund?": "Où placer son épargne de précaution ?",
    "In a dedicated High-Yield Savings Account (HYSA) or money market account where it is FDIC-insured, earns interest, and can be accessed immediately without risk.": "Sur des livrets réglementés ou comptes d'épargne liquides et sécurisés, disponibles sans risque de perte en capital.",
    "Should I pay off debt or build an emergency fund first?": "Faut-il solder ses dettes ou constituer son matelas d'abord ?",
    "Build a starter emergency fund of 1 month of expenses or $1,000 to $2,000 first, then aggressively pay off high-interest consumer debt before expanding to 3-6 months.": "Créez d'abord une réserve initiale de 1 000 € à 2 000 €, remboursez ensuite agressivement vos crédits renouvelables, puis portez l'épargne à 3-6 mois.",
    "When is it appropriate to use emergency fund savings?": "Quand est-il légitime de piocher dans le fonds d'urgence ?",
    "Use it only for genuine, unexpected emergencies: sudden medical bills, unexpected car repairs, or living expenses following job loss.": "Exclusivement pour des imprévus critiques : panne de véhicule indispensable, dépenses de santé urgentes ou perte d'emploi.",

    // 26. Fee Impact
    "What is an expense ratio?": "Qu'est-ce que le ratio de frais sur encours (TER) ?",
    "An expense ratio is the annual percentage fee charged by mutual funds and ETFs to cover fund management, administrative expenses, and operating costs.": "C'est le pourcentage annuel prélevé par les fonds et ETF pour couvrir les coûts de gestion financière et d'administration.",
    "How do fees compound over time?": "Comment les frais de gestion se répercutent-ils dans le temps ?",
    "Fees are deducted annually from your total assets, meaning you lose both the fee money and all future compounding returns that money would have earned.": "Prélevés chaque année sur l'encours global, ils vous privent du capital prélevé ainsi que de tous les intérêts composés qu'il aurait générés.",
    "What is a good expense ratio for an index fund?": "Quel est le bon niveau de frais pour un ETF ?",
    "Low-cost index funds and ETFs typically have expense ratios between 0.02% and 0.10%, whereas actively managed mutual funds often charge 0.60% to 1.50% or more.": "Les ETF indiciels compétitifs facturent entre 0,05 % et 0,25 % par an, contre 1,5 % à 2,5 % pour les fonds traditionnels gérés activement.",
    "What other investment fees should I look out for?": "Quels autres frais de placement surveiller ?",
    "Watch out for advisory fees (AUM fees of 1%), front-end or back-end sales loads, trading commissions, account maintenance fees, and custodial charges.": "Les droits d'entrée, les frais d'arbitrage, les commissions de courtage et les frais de tenue de compte du courtier.",
    "How much can a 1% fee difference affect my retirement savings?": "Quel est l'impact d'un écart de frais de 1 % sur la retraite ?",
    "A 1% annual fee difference can erode 25% to 30% of your total ending portfolio wealth over a 30-year investment horizon.": "Un modeste écart de 1 % de frais annuels peut engloutir 25 % à 30 % de votre capital total final après 30 ans d'épargne !",

    // 27. College Savings
    "What is a 529 plan?": "Qu'est-ce qu'un plan d'épargne études (529) ?",
    "A 529 plan is a tax-advantaged savings and investment plan designed to encourage saving for future higher education expenses with tax-free growth and qualified withdrawals.": "Un plan d'investissement fiscalement avantageux permettant de financer les études supérieures avec plus-values et retraits exonérés d'impôt.",
    "How fast do college costs increase?": "À quel rythme augmentent les frais de scolarité ?",
    "Historically, higher education tuition and fees have increased at an annual rate of 4% to 6%, outpacing general consumer inflation.": "Ils progressent historiquement de 4 % à 6 % par an, dépassant nettement l'inflation générale des prix.",
    "What happens to 529 funds if my child does not go to college?": "Que devient l'épargne si l'enfant ne fait pas d'études supérieures ?",
    "You can change the beneficiary to another qualifying family member, use up to $10,000 for student loan repayment, or roll over up to $35,000 into a Roth IRA under SECURE 2.0 rules.": "Vous pouvez désigner un autre bénéficiaire au sein de la fratrie ou transférer jusqu'à 35 000 $ vers un compte de retraite individuel.",
    "Can I use a 529 plan for trade schools or K-12 tuition?": "Peut-on l'utiliser pour des formations professionnelles ou le secondaire ?",
    "Yes, qualified distributions can cover accredited trade schools, vocational programs, apprenticeships, and up to $10,000 per year for K-12 private school tuition.": "Oui, les apprentissages certifiés, écoles de métiers et jusqu'à 10 000 $ par an pour l'enseignement privé secondaire sont éligibles.",
    "How does a 529 plan impact financial aid eligibility?": "Quel est l'impact sur l'attribution de bourses d'études ?",
    "Parent-owned 529 plans are assessed as parental assets on the FAFSA at a maximum rate of 5.64%, having minimal negative impact on financial aid eligibility.": "Détenu par les parents, il n'est comptabilisé qu'à un taux minime (environ 5,64 %), avec un impact négligeable sur les aides.",

    // 28. Crypto DCA
    "What is Dollar-Cost Averaging (DCA)?": "Qu'est-ce que l'investissement programmé (DCA) ?",
    "Dollar-Cost Averaging is an investment strategy where you invest a fixed amount of money at regular intervals regardless of the asset's fluctuating market price.": "Une méthode consistant à investir une somme fixe à intervalles réguliers, indépendamment des variations de cours du marché.",
    "How does DCA apply to high-volatility assets like Crypto?": "Pourquoi le DCA est-il adapté aux cryptomonnaies ?",
    "DCA prevents emotional decisions during extreme market peaks and crashes, automatically buying more units when prices are low and fewer when prices are high.": "Il élimine le facteur émotionnel, achète plus d'unités lorsque les cours chutent et lisse le prix de revient moyen.",
    "Is DCA better than investing a lump sum?": "Le DCA est-il supérieur à l'investissement en une seule fois ?",
    "Lump sum investing historically wins in steadily rising markets, but DCA provides superior peace of mind, lower emotional risk, and downside protection in highly volatile markets.": "Dans un marché haussier continu, le versement unique l'emporte ; mais sur des actifs très volatils, le DCA protège du mauvais timing.",
    "What is the best frequency for crypto DCA?": "Quelle est la fréquence optimale pour un DCA crypto ?",
    "Weekly or bi-weekly DCA aligned with your pay cycle is ideal for capturing market volatility while keeping trading fees manageable.": "Une fréquence hebdomadaire ou bimensuelle calée sur vos entrées de salaire optimise le lissage sans multiplier les frais de réseau.",
    "Does DCA guarantee profits in cryptocurrency?": "Le DCA garantit-il des gains certains ?",
    "No, DCA does not protect against prolonged declines or failing crypto projects; it only ensures you achieve the weighted average market purchase price.": "Non, le DCA ne protège pas de la faillite d'un projet ; il garantit seulement d'obtenir le cours moyen pondéré du marché.",

    // 29. Tip
    "What is the standard tipping percentage?": "Quel est le pourcentage d'usage pour un pourboire ?",
    "In the United States and Canada, standard restaurant tipping guidelines range from 15% for adequate service, 18% for good service, to 20% or more for exceptional service.": "En Amérique du Nord, la norme va de 15 % à 20 % ; en Europe où le service est inclus, laisser 5 % à 10 % en espèces récompense un service soigné.",
    "Should tips be calculated before or after sales tax?": "Le pourboire se calcule-t-il sur le montant hors taxe ou TTC ?",
    "Etiquette traditionally dictates calculating the tip percentage on the pre-tax food and beverage subtotal, though many automated payment terminals calculate tip on the post-tax total.": "La tradition veut qu'on le calcule sur le montant hors taxe des consommations, bien que les terminaux électroniques l'appliquent souvent sur le TTC.",
    "How do you split a bill evenly among friends?": "Comment partager équitablement l'addition entre convives ?",
    "Calculate the total bill including food, beverages, tax, and tip, and divide the total amount equally by the number of paying participants.": "Additionnez le montant global comprenant plats, boissons, taxes et pourboire, puis divisez équitablement par le nombre de personnes.",

    // 30. Discount
    "How do you calculate a percentage discount?": "Comment calculer une réduction commerciale en pourcentage ?",
    "Multiply the original price by the discount percentage divided by 100 to find the savings, and subtract that amount from the original price: Final Price = Original Price × (1 - Discount%).": "Multipliez le prix initial par le pourcentage de remise divisé par 100 pour trouver l'économie, puis déduisez-la : Prix Final = Prix Initial × (1 - Remise%).",
    "How do multiple stacked discounts work?": "Comment s'appliquent les remises successives cumulées ?",
    "Stacked discounts apply sequentially rather than additively. For example, 20% off plus an extra 10% off results in an effective 28% total discount, not 30%.": "Elles se calculent en cascade et non par simple addition : 20 % puis 10 % supplémentaires équivalent à 28 % de remise totale réelle (et non 30 %).",
    "Is sales tax applied before or after store discounts?": "La TVA s'applique-t-elle avant ou après remise ?",
    "In most jurisdictions, sales tax is calculated on the discounted post-sale price, meaning you pay sales tax only on the actual money spent.": "La taxe est calculée sur le prix net remisé : vous ne payez la TVA que sur la somme réellement dépensée."
  },

  // Italian (it)

  // Portuguese (pt)
  pt: {
    // 1. Mortgage
    "How is a mortgage payment calculated?": "Como é calculada a prestação do financiamento imobiliário?",
    "A standard monthly mortgage payment consists of Principal & Interest (P&I), property taxes, homeowners insurance, private mortgage insurance (PMI) if down payment is under 20%, and homeowner association (HOA) fees.": "A parcela mensal é composta por amortização e juros, seguros obrigatórios (MIP e DFI), taxas administrativas e condomínio.",
    "What is PMI and when do I pay it?": "O que é o seguro de garantia habitacional (PMI)?",
    "Private Mortgage Insurance (PMI) is a policy that protects the lender if you default. It is typically required on conventional loans if your down payment is less than 20% of the home purchase price.": "É um seguro exigido pelos bancos para proteger o credor caso a entrada fornecida pelo comprador seja inferior a 20% do valor do imóvel.",
    "What does PITI stand for?": "O que significa a sigla PITI?",
    "PITI stands for Principal, Interest, Taxes, and Insurance. These are the four basic components that make up a homeowner's monthly housing payment. Together, they reflect the true cost of owning a home on a month-to-month basis.": "Representa Principal (amortização), Juros (Interest), Impostos (Taxes) e Seguros (Insurance), que compõem o custo habitacional mensal integral.",
    "Is a 15-year mortgage better than a 30-year mortgage?": "Financiar em 15 anos é melhor do que em 30 anos?",
    "A 15-year mortgage typically offers a lower interest rate and allows you to pay off your home twice as fast, saving you tens of thousands of dollars in interest. However, a 30-year mortgage has lower monthly payments, which provides greater cash flow flexibility.": "Em 15 anos os juros totais são muito menores e o imóvel é quitado na metade do tempo; em 30 anos as parcelas mensais são mais acessíveis e dão flexibilidade.",
    "How do extra payments affect my mortgage payoff schedule?": "Qual o efeito das amortizações extraordinárias no financiamento?",
    "Any extra money you pay towards your mortgage is applied directly to the principal balance. This reduces the remaining loan balance and decreases the amount of interest that accumulates, helping you pay off your mortgage years ahead of schedule.": "Todo pagamento adicional abate diretamente o saldo devedor, reduzindo juros futuros e permitindo quitar o contrato anos mais cedo.",

    // 2. Loan Calculator
    "How does an amortized loan work?": "Como funciona um empréstimo com tabela Price ou SAC?",
    "With an amortized loan, you make equal periodic payments. Early in the loan term, the majority of each payment goes toward interest. Over time, an increasing portion goes toward paying down the principal balance until the debt is fully paid off.": "Na Tabela Price as parcelas são fixas (no início paga-se mais juros e no final mais amortização); na Tabela SAC a amortização é constante e as parcelas decrescem.",
    "What is the difference between fixed-rate and variable-rate loans?": "Qual a diferença entre taxa pré-fixada e pós-fixada?",
    "A fixed-rate loan maintains the exact same interest rate and payment throughout the loan term. A variable-rate loan has an interest rate that adjusts periodically based on benchmark interest rates, which can increase or decrease your payments.": "A taxa pré-fixada mantém os juros inalterados do início ao fim; a pós-fixada oscila conforme índices de referência como IPCA, TR ou Selic.",
    "Can I pay off my loan early without penalty?": "Posso quitar o empréstimo antecipadamente sem tarifas?",
    "Most consumer loans and conventional mortgages allow prepayment without penalties, but some lenders include a prepayment penalty clause. Always verify your loan agreement terms before making accelerated principal payments.": "No Brasil a liquidação antecipada de dívidas com desconto proporcional de juros é um direito garantido pelo Código de Defesa do Consumidor sem cobrança de multas.",

    // 3. Debt Payoff
    "What is the Debt Snowball method?": "O que é o método Bola de Neve para quitar dívidas?",
    "The Debt Snowball method involves paying off your smallest debt balances first, regardless of interest rates. It builds psychological momentum and motivation through quick wins.": "Consiste em pagar primeiro as dívidas de menor valor, independentemente da taxa de juros, gerando motivação psicológica através de vitórias rápidas.",
    "What is the Debt Avalanche method?": "O que é o método Avalanche para quitar dívidas?",
    "The Debt Avalanche method involves paying off your highest interest rate debts first. Mathematically, this minimizes the total interest you pay and helps you become debt-free faster.": "Prioriza o pagamento das dívidas com os maiores juros primeiro. Matematicamente, minimiza o total pago em juros e acelera a quitação.",
    "Which method is better: Debt Snowball or Debt Avalanche?": "Qual é o melhor método: Bola de Neve ou Avalanche?",
    "Mathematically, the Debt Avalanche method is superior because it minimizes the total interest paid. However, studies show that the Debt Snowball method is often more successful in practice because the psychological momentum helps people stick to their plan.": "Matematicamente a Avalanche economiza mais dinheiro, mas na prática a Bola de Neve tem maior taxa de adesão pelo incentivo psicológico constante.",
    "How does the 'extra payment' roll over in these strategies?": "Como o valor extra é reaproveitado nas estratégias?",
    "You continue paying minimums on all debts and add your extra cash to the target debt. Once that target debt is fully paid off, you roll its entire payment into the next debt on your list.": "Você paga os mínimos em todas as dívidas e direciona a folga financeira para a dívida foco; quitada esta, todo o valor mensal é somado à dívida seguinte.",
    "Can I do a hybrid of Snowball and Avalanche?": "Posso fazer um modelo híbrido entre Bola de Neve e Avalanche?",
    "Yes. Many people pay off one or two small debts first to free up immediate cash flow (Snowball), and then pivot to targeting the remaining debts by highest interest rate (Avalanche).": "Sim. Muitas pessoas liquidam uma ou duas dívidas pequenas primeiro para desafogar o orçamento (Bola de Neve) e depois atacam as de maiores juros (Avalanche).",

    // 4. Refinance
    "When should I refinance my loan?": "Quando vale a pena fazer a portabilidade de crédito?",
    "It generally makes sense to refinance if you can secure a lower interest rate, reduce your monthly payment, or shorten your term, provided your total interest savings exceed the closing costs.": "Vale a pena quando você consegue uma taxa de juros menor, reduzindo o valor da parcela ou o prazo, com economia superior aos custos de transferência.",
    "What closing costs are associated with refinancing?": "Quais são os custos na portabilidade ou refinanciamento?",
    "Refinancing costs typically include application fees, origination fees, appraisal costs, title search and insurance, credit report fees, and recording fees, ranging from 2% to 6% of the loan amount.": "No crédito imobiliário podem existir taxas de avaliação do imóvel e averbação em cartório de registro de imóveis.",
    "How do I calculate my refinance break-even point?": "Como calcular o ponto de equilíbrio (Break-Even)?",
    "Divide your total refinance closing costs by your monthly payment savings. If closing costs are $3,000 and you save $150 per month, your break-even point is 20 months ($3,000 / $150).": "Divida os custos totais pela economia mensal na parcela: R$ 3.000 em custos / R$ 150 economizados = 20 meses para recuperar o investimento.",
    "What is a 'no-closing-cost' refinance?": "O que é um refinanciamento 'sem custos iniciais'?",
    "A no-closing-cost refinance means the lender either rolls the closing fees into your new total loan balance or charges a slightly higher interest rate to cover them.": "Os custos não desaparecem: são embutidos no saldo devedor total financiado ou compensados com uma taxa de juros ligeiramente mais alta.",
    "Does refinancing lower my monthly payment or total interest?": "A portabilidade reduz a parcela ou os juros totais?",
    "It depends on the term. Refinancing to a lower rate with the same or shorter term saves on both. Resetting your term back to 30 years lowers the monthly payment but can increase total lifetime interest.": "Se mantiver ou encurtar o prazo, economiza em ambos; se estender o prazo, a parcela diminui mas os juros totais pagos podem aumentar.",

    // 5. Student Loan
    "What is the SAVE plan?": "O que é o plano estudantil de pagamento por renda (SAVE)?",
    "The Saving on a Valuable Education (SAVE) plan is an income-driven repayment (IDR) plan that protects discretionary income up to 225% of the poverty line, lowers payments to 5%-10%, and stops unpaid interest from accumulating.": "Um plano governamental americano que ajusta a parcela à renda, protege 225% da linha de pobreza e impede o acúmulo de juros não pagos.",
    "How is discretionary income calculated for student loans?": "Como é calculada a renda discricionária para o crédito estudantil?",
    "Discretionary income is the difference between your Adjusted Gross Income (AGI) and a percentage of the federal poverty guideline for your family size (150% for PAYE/IBR, 225% for SAVE).": "É a diferença entre a renda bruta tributável e a faixa de proteção da renda familiar legalmente resguardada.",
    "How does student loan forgiveness work under IDR plans?": "Como funciona o perdão da dívida estudantil?",
    "If you pay under an IDR plan for 20 or 25 years (or 10 years under SAVE for low initial balances), any remaining student debt is forgiven.": "Pagando as parcelas vinculadas à renda durante 20 ou 25 anos, o saldo restante da dívida é perdoado pelo governo.",
    "Which IDR plan is best for me?": "Qual modalidade de amortização é mais vantajosa?",
    "For most borrowers, the SAVE plan offers the lowest monthly payment and the best interest subsidy. Borrowers with very high incomes relative to debt may prefer PAYE or IBR due to payment caps.": "Para a maioria o plano SAVE oferece o menor desembolso; quem tem renda alta prefere opções com teto máximo estipulado de parcela.",
    "Can I switch student loan repayment plans at any time?": "Posso mudar de plano de pagamento a qualquer momento?",
    "Yes, you can apply to switch repayment plans for free at studentaid.gov. However, switching plans can sometimes cause unpaid interest to capitalize.": "Sim, a solicitação é gratuita, mas a migração pode por vezes capitalizar juros acumulados sobre o principal.",

    // 6. DTI
    "What is the 28/36 rule?": "O que é a regra do 28/36%?",
    "The 28/36 rule is a standard mortgage underwriting guideline stating that housing costs should not exceed 28% of gross monthly income, and total debt payments should not exceed 36%.": "Diretriz que orienta não comprometer mais de 28% da renda bruta em moradia e até no máximo 30-36% em parcelas de dívidas totais.",
    "How does DTI affect my mortgage application?": "Como a relação dívida/renda afeta a aprovação do crédito?",
    "Lenders use DTI to measure your ability to manage monthly payments. Lower DTIs below 36% receive the most favorable mortgage terms and lowest interest rates.": "Os bancos avaliam a capacidade de pagamento: um comprometimento de renda abaixo de 30% garante aprovação rápida e melhores taxas.",
    "What is the difference between front-end and back-end DTI?": "Qual a diferença entre DTI habitacional e DTI total?",
    "Front-end DTI only includes housing expenses (mortgage, property tax, insurance, HOA). Back-end DTI includes housing plus all recurring debts like credit cards, auto loans, and student loans.": "O primeiro inclui apenas os custos da moradia; o segundo soma todos os financiamentos ativos (empréstimos, cartão e automóvel).",
    "What is the maximum DTI ratio lenders will accept?": "Qual o limite máximo de comprometimento de renda aceito?",
    "Conventional mortgages typically prefer back-end DTIs of 36% to 43%. Government-backed loans like FHA and VA may allow DTIs up to 50% with strong compensating factors.": "No Brasil a legislação e os bancos limitam o comprometimento financeiro habitacional geralmente a no máximo 30% da renda comprovada.",
    "How can I lower my Debt-to-Income ratio?": "Como reduzir o comprometimento da renda?",
    "You can lower your DTI by increasing gross income or paying off smaller debts completely to eliminate their recurring monthly minimum payments.": "Aumentando a renda comprovada ou quitando pequenos empréstimos e cartões para eliminar as parcelas do orçamento.",

    // 7. APR
    "What is the difference between interest rate and APR?": "Qual a diferença entre taxa nominal e Custo Efetivo Total (CET / APR)?",
    "The interest rate is the nominal cost of borrowing the principal balance. The Annual Percentage Rate (APR) reflects the total annual cost of the loan including points, broker fees, and origination charges.": "A taxa nominal reflete apenas os juros; o Custo Efetivo Total (CET / APR) engloba todas as tarifas bancárias, IOF, seguros e encargos.",
    "Why is APR higher than the advertised interest rate?": "Por que o CET é maior que a taxa de juros anunciada?",
    "APR is higher because it amortizes all upfront lender fees, discount points, and closing costs into the effective yearly rate, revealing the true cost of credit.": "Porque embute todos os custos contratuais, tarifas e tributos diluídos na taxa anualizada.",
    "Is APR useful for comparing different loan offers?": "O CET / APR é a melhor métrica para comparar propostas?",
    "Yes, APR is the best metric for comparing loan offers with different fee structures, provided you plan to keep the loan for its full term.": "Sim, é o índice oficial mais seguro para comparar ofertas de instituições com tabelas de tarifas diferentes.",

    // 8. Rent vs Buy
    "How long do I need to stay in a home for buying to beat renting?": "Quantos anos é preciso morar no imóvel para a compra superar o aluguel?",
    "Because upfront closing costs, moving fees, and commissions are substantial, homeowners usually need to stay in a property for 4 to 7 years for buying to financially outperform renting.": "Devido aos custos de ITBI, escritura e comissões, geralmente são necessários entre 4 e 7 anos para a compra ser financeiramente vantajosa.",
    "What hidden costs of homeownership should renters consider?": "Quais custos ocultos da casa própria o inquilino deve considerar?",
    "Homeowners must pay property taxes, homeowners insurance, maintenance and repairs (typically 1-2% of home value annually), HOA dues, and potential capital improvement costs.": "IPTU, taxa de condomínio, manutenções e reformas periódicas (cerca de 1% a 2% do valor do imóvel ao ano).",
    "What is the opportunity cost of buying a home?": "Qual o custo de oportunidade na compra de um imóvel?",
    "The money spent on down payment, closing costs, and ongoing property maintenance could otherwise remain invested in liquid assets like index funds that compound over time.": "O valor gasto em entrada e documentação poderia ficar investido rendendo juros compostos em títulos públicos e ações.",

    // 9. Home Affordability
    "How much income should I spend on a mortgage?": "Quanto da renda pode ser comprometido na prestação da casa?",
    "Most financial experts recommend spending no more than 25% to 28% of your gross monthly income on housing costs (the front-end DTI guideline).": "Especialistas recomendam comprometer no máximo 25% a 30% da renda líquida mensal com parcelas imobiliárias.",
    "How does down payment size impact affordability?": "Como o valor da entrada afeta o financiamento?",
    "A larger down payment reduces your loan amount, eliminates Private Mortgage Insurance (PMI) if you put down 20%, and lowers your monthly mortgage payment.": "Uma entrada maior reduz o saldo devedor, barateia as parcelas mensais e garante acesso às melhores taxas do mercado.",
    "How do interest rates affect purchasing power?": "De que forma os juros afetam a capacidade de compra?",
    "Every 1% increase in mortgage interest rates reduces your home purchasing power by roughly 10% for the same monthly payment budget.": "Cada 1% a mais na taxa de juros reduz o valor do imóvel que você consegue financiar em cerca de 10% para uma mesma parcela.",

    // 10. Auto Loan
    "What is the 20/4/10 rule for buying a car?": "O que é a regra 20/4/10 para comprar um carro?",
    "The 20/4/10 rule recommends putting down at least 20%, financing for no longer than 4 years (48 months), and keeping total vehicle expenses under 10% of gross monthly income.": "Dar ao menos 20% de entrada, financiar em no máximo 4 anos (48 meses) e manter as despesas automotivas totais abaixo de 10% da renda bruta.",
    "Is a longer auto loan term better?": "Financiar o veículo em 60 ou 72 meses é vantajoso?",
    "Longer terms (like 72 or 84 months) lower your monthly payment, but you pay substantially more total interest and risk becoming 'underwater' (owing more than the vehicle is worth).": "Prazos muito longos baixam a parcela, mas aumentam excessivamente os juros e geram risco de a dívida superar o valor de tabela do carro.",
    "How does vehicle depreciation affect my loan?": "Como a depreciação do veículo afeta o financiamento?",
    "New cars depreciate rapidly (often losing 20% in the first year). Without an adequate down payment, you risk owing more on your loan than the car's market value.": "Carros novos perdem até 20% do valor no primeiro ano; sem uma boa entrada, a dívida fica superior ao valor de revenda do automóvel.",

    // 11. Credit Card Payoff
    "Why does paying only the minimum take so long?": "Por que pagar apenas o mínimo da fatura do cartão é uma armadilha?",
    "Credit card minimum payments are often set around 1% to 2% of the balance plus accrued interest. As the balance slowly drops, the required minimum drops, extending payoff times to decades.": "O pagamento mínimo cobre apenas os juros e 1% a 2% do saldo. Como o valor cai conforme a dívida desce, o pagamento pode durar décadas.",
    "How much faster can I pay off credit cards by paying extra?": "Quanto amortizações extras aceleram o fim das dívidas de cartão?",
    "Paying even $50 or $100 above the minimum payment can cut your payoff timeline by several years and save thousands of dollars in compounding interest charges.": "Pagar R$ 100 ou R$ 200 a mais por mês encurta anos de endividamento e economiza valores astronômicos em juros rotativos.",
    "Should I use a balance transfer card to pay off debt?": "Vale a pena pegar um empréstimo com juros menores para quitar o cartão?",
    "A 0% APR balance transfer credit card can save significant interest if you pay off the full balance during the promotional period (typically 12-21 months) and factor in the 3%-5% transfer fee.": "Sim, trocar o juro rotativo do cartão por um crédito consignado ou empréstimo pessoal com taxa fixa reduz drasticamente a dívida.",

    // 12. Retirement Planner
    "What is the 4% rule in retirement planning?": "O que é a regra dos 4% para a aposentadoria?",
    "The 4% rule suggests that withdrawing 4% of your retirement portfolio in the first year, adjusted for inflation annually thereafter, provides a high probability that your nest egg will last at least 30 years.": "Dita que retirar 4% do patrimônio no primeiro ano e corrigir pela inflação dá alta probabilidade de que os recursos durem mais de 30 anos.",
    "How much money do I need to retire comfortably?": "De quanto patrimônio preciso para ter uma aposentadoria tranquila?",
    "A common benchmark is accumulating 25 times your anticipated annual retirement expenses, or replacing 70% to 80% of your pre-retirement income.": "A regra comum é acumular 25 vezes o seu custo de vida anual estimado, ou garantir de 70% a 80% da sua última remuneração ativa.",
    "How does inflation impact retirement spending?": "Qual o impacto da inflação no custo de vida aposentado?",
    "Inflation steadily reduces the purchasing power of your savings. At a 3% inflation rate, everyday living expenses double roughly every 24 years, requiring growing investment portfolios.": "Com 3% de inflação anual, o custo de vida dobra em cerca de 24 anos, exigindo que o patrimônio continue investido em ativos rentáveis.",

    // 13. 401(k)
    "What is an employer 401(k) match?": "O que é a contrapartida da empresa na previdência fechada?",
    "An employer match is money your employer contributes to your 401(k) account based on your own contributions (e.g. matching 50% of contributions up to 6% of your salary). It is effectively an instant return on your savings.": "É a contribuição paritária que a empresa deposita para cada real investido pelo funcionário, representando um ganho imediato de 100%.",
    "What are the 401(k) contribution limits for 2024?": "Quais são os limites de aporte anual?",
    "For 2024, the employee contribution limit is $23,000 for those under 50. Individuals aged 50 and older can contribute an additional $7,500 catch-up contribution for a total of $30,500.": "Nos EUA o teto é de 23.000 $; no Brasil, no PGBL permite-se deduzir da base do IRPF aportes até o limite de 12% da renda bruta tributável.",
    "What is the difference between Traditional 401(k) and Roth 401(k)?": "Qual a diferença entre o modelo PGBL e VGBL?",
    "Traditional 401(k) contributions are pre-tax and reduce your current taxable income, with withdrawals taxed in retirement. Roth 401(k) contributions are post-tax, but all qualified growth and withdrawals are completely tax-free.": "O modelo tradicional (PGBL) abate do IRPF hoje e tributa o total no resgate; o modelo pós-tributado (VGBL) não deduz agora, mas tributa apenas os rendimentos no futuro.",

    // 14. IRA Comparison
    "What is the key difference between a Roth and Traditional IRA?": "Qual a diferença central entre previdência tradicional e modelo isento?",
    "Traditional IRA contributions are generally made pre-tax (reducing your current taxable income), but withdrawals in retirement are taxed as ordinary income. Roth IRA contributions are made with post-tax dollars; growth and withdrawals in retirement are completely tax-free.": "O tradicional permite dedução fiscal imediata e tributa na aposentadoria; o modelo Roth investe valor líquido mas isenta todos os lucros futuros.",
    "Which IRA plan is better for me?": "Qual plano previdenciário escolher?",
    "If you expect your tax bracket to be higher in retirement than it is today, a Roth IRA is better. If you expect your tax bracket in retirement to be lower, a Traditional IRA is better.": "Se sua alíquota de imposto for maior no futuro, prefira o modelo pós-fixado; se for menor no futuro, aproveite o benefício fiscal presente.",
    "What are the contribution limits for IRAs in 2024?": "Qual o limite de contribuição?",
    "For 2024, the annual contribution limit for Traditional and Roth IRAs is $7,000 for individuals under age 50, and $8,000 for individuals age 50 or older.": "O teto anual é de 7.000 $ para menores de 50 anos e 8.000 $ a partir dessa idade.",
    "Are there income limits for contributing to Traditional and Roth IRAs?": "Há restrições de renda para contribuir?",
    "Roth IRAs have income phase-out ranges that restrict high earners. Anyone with earned income can contribute to a Traditional IRA, but tax deductibility may be limited by income and workplace retirement coverage.": "O plano Roth tem faixas de renda limite para participantes com altos salários; o modelo tradicional é acessível a todos.",
    "Can I withdraw money from my IRA before age 59½ without penalty?": "Posso resgatar os recursos antes dos 59 anos e meio sem multa?",
    "Roth IRA original contributions can be withdrawn at any time penalty-free. Withdrawing investment earnings early or withdrawing Traditional IRA funds before 59½ usually incurs income taxes and a 10% penalty.": "Os valores aportados no plano Roth podem ser sacados a qualquer momento; rendimentos e planos tradicionais pagam IR e multa de 10%.",

    // 15. Compound Interest
    "What is compound interest?": "O que são juros compostos?",
    "Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods. It causes your wealth to grow exponentially over time.": "São juros sobre juros: os rendimentos de cada período são incorporados ao capital inicial, gerando crescimento exponencial do patrimônio.",
    "What is the Rule of 72?": "O que é a regra dos 72?",
    "The Rule of 72 is a quick mental formula to estimate how many years it takes to double your money. Divide 72 by your annual interest rate (e.g. at 8%, your money doubles in about 9 years).": "Cálculo mental para saber em quantos anos o capital dobra: divida 72 pela taxa anual de juros (com 8% ao ano, o dinheiro dobra em cerca de 9 anos).",
    "How does compounding frequency affect total returns?": "Como a frequência de capitalização afeta o saldo final?",
    "The more frequently interest compounds (annually, monthly, daily), the higher your effective annual yield (APY) will be, as interest starts earning interest sooner.": "Quanto mais frequente for a capitalização (mensal, diária), maior será a rentabilidade efetiva anual.",

    // 16. TVM
    "What is the Time Value of Money (TVM)?": "O que é o valor do dinheiro no tempo (TVM)?",
    "The Time Value of Money principle states that a dollar today is worth more than a dollar in the future because today's dollar can be invested and earn interest.": "Princípio financeiro que estabelece que um real hoje vale mais do que um real amanhã, pois pode ser aplicado e gerar juros imediatamente.",
    "What are the core components of TVM calculations?": "Quais são as 5 variáveis essenciais dos cálculos de matemática financeira?",
    "The five core variables are Present Value (PV), Future Value (FV), Interest Rate per Period (Rate), Total Number of Periods (Nper), and Periodic Payment (PMT).": "Valor Presente (PV), Valor Futuro (FV), Taxa de juros (Rate), Número de períodos (Nper) e Pagamento periódico constante (PMT).",
    "What is the difference between an ordinary annuity and annuity due?": "Qual a diferença entre pagamentos postecipados e antecipados?",
    "In an ordinary annuity, payments occur at the end of each period. In an annuity due, payments occur at the beginning of each period, earning an extra compounding cycle of interest.": "Na anuidade postecipada o pagamento ocorre no fim do período; na antecipada no início, rendendo um ciclo a mais de juros compostos.",

    // 17. ROI
    "How is Return on Investment (ROI) calculated?": "Como é calculado o Retorno sobre o Investimento (ROI)?",
    "ROI is calculated by subtracting the initial cost of the investment from the final value, and dividing that net gain by the initial cost: ROI = (Net Profit / Cost of Investment) × 100%.": "Diminui-se o custo inicial do valor final e divide-se esse lucro pelo custo de aquisição: ROI = (Lucro Líquido / Custo do Investimento) × 100%.",
    "What is the difference between simple ROI and annualized ROI?": "Qual a diferença entre retorno simples e retorno anualizado (CAGR)?",
    "Simple ROI measures total percentage return regardless of duration. Annualized ROI (CAGR) standardizes the return into a per-year geometric rate, enabling fair comparison between investments held for different lengths of time.": "O retorno simples mede o ganho acumulado total; o anualizado padroniza o ganho a uma taxa anual média, permitindo comparar investimentos de prazos distintos.",
    "What is considered a good ROI?": "O que é considerado uma boa rentabilidade?",
    "Historically, the broad stock market (S&P 500) has returned an average of 7% to 10% annually before inflation. Investments with higher expected returns generally involve higher risk of capital loss.": "Historicamente a bolsa ampla rende de 7% a 10% ao ano antes da inflação; rentabilidades muito maiores exigem tolerância a perdas de capital.",

    // 18. Savings Goal
    "How do I calculate how much to save monthly for a goal?": "Como calcular o valor a poupar mensalmente para uma meta?",
    "You divide your target savings amount by the number of months until your deadline, while factoring in the compounding interest earned on your growing balance.": "Divide-se o valor da meta pelos meses disponíveis, descontando os juros compostos que o saldo renderá ao longo do tempo.",
    "Should I keep savings goal funds in high-yield savings or stocks?": "Onde deixar o dinheiro das metas: renda fixa ou ações?",
    "For goals under 3 to 5 years (like a car or home down payment), keep funds in safe, liquid instruments like High-Yield Savings Accounts (HYSA) or CDs. For goals 5+ years away, a diversified investment portfolio may be suitable.": "Para metas de até 3 a 5 anos (carro, entrada do imóvel), use Tesouro Selic e CDBs com liquidez; acima de 5 anos, uma carteira de ações e fundos é adequada.",
    "How can I stay on track with my savings goals?": "Como manter a disciplina com as metas de economia?",
    "Automate recurring monthly transfers into a dedicated savings account immediately after your paycheck arrives (the 'pay yourself first' strategy).": "Configure uma transferência automática para a aplicação financeira no dia do pagamento do salário ('pague a si mesmo primeiro').",

    // 19. Stock Return
    "How do I calculate stock returns?": "Como calcular a rentabilidade total de ações?",
    "Total stock return equals capital gains (ending price minus purchase price) plus any dividends received, divided by the original purchase cost.": "Soma-se a valorização das cotas (ganho de capital) a todos os dividendos e juros sobre capital próprio recebidos, dividindo pelo custo de compra.",
    "What is CAGR in stock returns?": "O que significa CAGR em ações?",
    "Compound Annual Growth Rate (CAGR) measures the geometric mean annual return of a stock over multiple years, smoothing out annual market fluctuations.": "A Taxa de Crescimento Anual Composto mede a rentabilidade geométrica média por ano, suavizando as oscilações do mercado.",
    "What is the difference between simple return and annualized return?": "Qual a diferença entre retorno nominal absoluto e anualizado?",
    "Simple return measures absolute percentage gain over the entire holding period, while annualized return shows the steady annual rate required to achieve that result.": "O retorno simples mostra o ganho acumulado em todo o período; o anualizado aponta o ritmo de valorização médio por ano.",

    // 20. CAPM
    "What is the Capital Asset Pricing Model (CAPM)?": "O que é o modelo CAPM?",
    "CAPM calculates an asset's expected return based on its risk relative to the overall market, using the formula: Expected Return = Risk-Free Rate + Beta × (Market Return - Risk-Free Rate).": "Calcula o retorno esperado de um ativo a partir do seu risco de mercado: Retorno = Taxa Livre de Risco + Beta × Prêmio de Risco do Mercado.",
    "What does Asset Beta (β) represent?": "O que representa o Beta (β) de uma ação?",
    "Beta measures an asset's volatility compared to the broader market. A beta of 1.0 indicates market-level volatility; above 1.0 indicates higher volatility, and below 1.0 indicates lower volatility.": "Mede a sensibilidade de um papel em relação ao índice de mercado: Beta 1 oscila igual ao Ibovespa; acima de 1 é mais volátil; abaixo de 1 é mais defensivo.",
    "What is the Risk-Free Rate?": "O que é a taxa livre de risco?",
    "The risk-free rate is the theoretical rate of return of an investment with zero risk of default, typically represented by long-term government bond yields (like 10-year US Treasuries).": "O rendimento de títulos soberanos com risco de inadimplência nulo (como títulos públicos do Tesouro de 10 anos).",
    "What is the Market Risk Premium?": "O que é o prêmio de risco do mercado?",
    "The market risk premium is the additional return investors demand for choosing risky market equities over risk-free government securities.": "O retorno adicional exigido pelos investidores para assumir o risco da renda variável em relação à renda fixa garantida.",

    // 21. Dividend
    "What is dividend yield versus yield on cost?": "Qual a diferença entre Dividend Yield e Yield on Cost?",
    "Dividend yield is the annual dividend divided by the current stock price. Yield on cost is the annual dividend divided by your original purchase price, which increases as companies raise their dividends over time.": "O Dividend Yield divide o dividendo pelo preço atual da ação; o Yield on Cost divide o provento pelo preço pago na compra original.",
    "What is a Dividend Reinvestment Plan (DRIP)?": "O que é o reinvestimento automático de dividendos?",
    "A DRIP automatically uses your cash dividend payments to purchase additional shares or fractional shares of the stock, compounding your share count and future payouts without commission fees.": "Mecanismo que utiliza os proventos recebidos para comprar mais cotas da mesma empresa sem corretagem, multiplicando os juros compostos.",
    "Are dividend payments guaranteed?": "Os dividendos de ações são garantidos?",
    "No, company boards can reduce, suspend, or eliminate dividend payouts at any time depending on company profitability and economic conditions.": "Não, o conselho de administração pode reduzir, adiar ou cancelar os proventos dependendo dos lucros e do cenário econômico.",

    // 22. Inflation
    "What is inflation?": "O que é a inflação?",
    "Inflation is the general rise in prices for goods and services over time, resulting in a decline in the purchasing power of money.": "É o aumento generalizado e contínuo nos preços de produtos e serviços, que reduz o poder de compra da moeda ao longo do tempo.",
    "How does inflation affect my savings?": "Como a inflação prejudica o dinheiro guardado?",
    "Cash sitting in zero-interest accounts loses purchasing power each year. If inflation is 3%, $100 today will only buy about $97 worth of goods next year.": "Dinheiro parado sem rendimento perde valor: com inflação de 3%, R$ 100 de hoje só comprarão o equivalente a R$ 97 no ano que vem.",
    "How is inflation officially measured?": "Como a inflação é calculada oficialmente?",
    "Inflation is primarily measured using the Consumer Price Index (CPI), which tracks price changes across a standard market basket of consumer goods and services.": "No Brasil pelo IPCA (Índice Nacional de Preços ao Consumidor Amplo), que acompanha uma cesta de produtos de famílias consumidoras.",
    "What is the historical average inflation rate?": "Qual a média histórica da inflação?",
    "In the United States, inflation has historically averaged between 2.5% and 3.2% per year over long multi-decade horizons.": "Em economias estáveis gira historicamente entre 2% e 3% ao ano em prazos pluridecenais.",
    "How can I protect my money from losing value to inflation?": "Como proteger os investimentos contra a inflação?",
    "Investing in assets whose earnings outpace inflation—such as diversified equities, Treasury Inflation-Protected Securities (TIPS), real estate, and inflation-indexed bonds.": "Investindo em títulos atrelados ao IPCA (como Tesouro IPCA+), fundos imobiliários e ações de boas empresas.",

    // 23. Paycheck
    "What is FICA tax?": "O que são descontos de INSS e encargos de folha?",
    "FICA is a federal payroll tax that funds Social Security (6.2% on wages up to the wage base limit) and Medicare (1.45% plus an additional 0.9% on high earners).": "São contribuições previdenciárias e sociais deduzidas da folha de pagamento para financiar a aposentadoria pública e a seguridade social.",
    "What is the difference between pre-tax and post-tax deductions?": "Qual a diferença entre deduções antes e depois do imposto?",
    "Pre-tax deductions (like 401k and health insurance) reduce your taxable gross income before taxes are computed. Post-tax deductions (like Roth contributions or wage garnishments) are taken after taxes.": "Deduções pré-tributáveis (previdência, plano de saúde) diminuem a base de cálculo do IR; deduções pós-tributáveis ocorrem sobre o salário líquido.",
    "What is the difference between gross pay and net pay?": "Qual a diferença entre salário bruto e salário líquido?",
    "Gross pay is the total amount earned before any taxes or deductions. Net pay (take-home pay) is the actual cash deposited into your bank account after all deductions.": "Salário bruto é a remuneração estipulada em contrato; salário líquido é o valor que cai na conta bancária após o desconto de INSS e IRRF.",
    "How does my W-4 filing status affect my paycheck?": "Como os dependentes afetam a retenção na fonte?",
    "Your W-4 form informs your employer how much federal income tax to withhold each pay period based on your filing status, dependents, and other income.": "A declaração de dependentes e pensões reduz a retenção mensal do imposto de renda retido na fonte pela empresa.",
    "Why do state and local taxes vary so much?": "Por que os impostos variam entre regiões?",
    "State income tax rates range from 0% (in states like Texas, Florida, and Washington) to over 13% in high-tax states, while some cities also impose local municipal income taxes.": "Cada estado ou município possui regras próprias de tributação, com alíquotas diferenciadas de ICMS e ISS.",

    // 24. Net Worth
    "What is net worth?": "O que é o patrimônio líquido pessoal?",
    "Net worth is the total market value of everything you own (assets) minus everything you owe to creditors (liabilities).": "É a soma do valor de mercado de todos os seus bens e direitos (ativos) menos todas as suas dívidas (passivos).",
    "How often should I calculate my net worth?": "Com que frequência devo medir meu patrimônio líquido?",
    "Reviewing your net worth quarterly or semi-annually gives you a clear high-level view of your financial health without obsessing over daily market swings.": "Uma checagem semestral ou trimestral oferece uma fotografia macro do progresso financeiro sem ansiedade pelas variações diárias.",
    "What counts as an asset vs. a liability?": "O que entra no ativo e o que entra no passivo?",
    "Assets include bank balances, investment accounts, home equity, and retirement funds. Liabilities include mortgages, student loans, car loans, and credit card debt.": "Ativos: contas bancárias, ações, imóveis e previdência. Passivos: financiamento imobiliário, dívida do carro e cartões.",
    "Should I include my house and mortgage in my net worth?": "Devo incluir minha casa financiada no patrimônio líquido?",
    "Yes, you include the current fair market value of the home under assets and the remaining mortgage balance under liabilities. The difference is your home equity.": "Sim, cadastra-se o valor de mercado atual do imóvel como ativo e o saldo devedor do financiamento como passivo; a diferença é o patrimônio imobiliário líquido.",
    "What does it mean to have a negative net worth?": "O que significa estar com patrimônio líquido negativo?",
    "A negative net worth means your total debts exceed your total assets. This is common for young adults and recent graduates with student loans.": "Significa que o valor das dívidas é maior que todos os bens que você possui, algo comum no início da vida adulta.",

    // 25. Emergency Fund
    "How much emergency fund is recommended?": "De quanto deve ser a reserva de emergência?",
    "Most financial planners recommend saving 3 to 6 months of essential living expenses, or 9 to 12 months for freelancers or single-income households.": "Recomenda-se de 3 a 6 meses do custo de vida básico para assalariados (ou 9 a 12 meses para autônomos e empreendedores).",
    "What expenses should be included in an emergency fund budget?": "Quais contas entram no cálculo da reserva de emergência?",
    "Include only non-negotiable living costs: housing (rent/mortgage), utilities, groceries, basic transportation, minimum debt payments, and healthcare insurance.": "Apenas gastos básicos essenciais: moradia, contas de luz e água, alimentação essencial, plano de saúde e parcelas obrigatórias.",
    "Where should I keep my emergency fund?": "Onde deixar guardada a reserva de emergência?",
    "In a dedicated High-Yield Savings Account (HYSA) or money market account where it is FDIC-insured, earns interest, and can be accessed immediately without risk.": "Em aplicações de alta liquidez e baixo risco, como Tesouro Selic ou CDBs com liquidez diária e garantia do FGC.",
    "Should I pay off debt or build an emergency fund first?": "Devo pagar as dívidas ou montar a reserva primeiro?",
    "Build a starter emergency fund of 1 month of expenses or $1,000 to $2,000 first, then aggressively pay off high-interest consumer debt before expanding to 3-6 months.": "Junte uma reserva inicial de 1 mês de despesas (R$ 1.000 a R$ 2.000), liquide as dívidas com juros altos e depois complete os 3 a 6 meses de reserva.",
    "When is it appropriate to use emergency fund savings?": "Quando é correto utilizar a reserva de emergência?",
    "Use it only for genuine, unexpected emergencies: sudden medical bills, unexpected car repairs, or living expenses following job loss.": "Apenas em emergências imprevisíveis: demissão, emergência médica inadiável ou conserto indispensável no automóvel.",

    // 26. Fee Impact
    "What is an expense ratio?": "O que é a taxa de administração (Expense Ratio)?",
    "An expense ratio is the annual percentage fee charged by mutual funds and ETFs to cover fund management, administrative expenses, and operating costs.": "O percentual anual cobrado por fundos de investimento e ETFs para remunerar a gestão, administração e custódia.",
    "How do fees compound over time?": "Como as taxas corroem a rentabilidade no longo prazo?",
    "Fees are deducted annually from your total assets, meaning you lose both the fee money and all future compounding returns that money would have earned.": "Como a taxa é deduzida anualmente do patrimônio total, você perde o valor cobrado e todos os juros compostos que ele geraria ao longo da vida.",
    "What is a good expense ratio for an index fund?": "Qual é uma boa taxa para um fundo de índice (ETF)?",
    "Low-cost index funds and ETFs typically have expense ratios between 0.02% and 0.10%, whereas actively managed mutual funds often charge 0.60% to 1.50% or more.": "ETFs de índice custam tipicamente entre 0,05% e 0,30% ao ano, enquanto fundos multimercados ativos costumam cobrar 2% ao ano mais taxa de performance.",
    "What other investment fees should I look out for?": "A quais outras taxas financeiras devo ficar atento?",
    "Watch out for advisory fees (AUM fees of 1%), front-end or back-end sales loads, trading commissions, account maintenance fees, and custodial charges.": "Taxas de corretagem, emolumentos da bolsa, custódia e taxa de performance de fundos de investimento.",
    "How much can a 1% fee difference affect my retirement savings?": "Qual o impacto de 1% a mais de taxa na aposentadoria?",
    "A 1% annual fee difference can erode 25% to 30% of your total ending portfolio wealth over a 30-year investment horizon.": "Uma diferença de apenas 1% ao ano em taxas pode corroer entre 25% e 30% de todo o patrimônio final acumulado em 30 anos!",

    // 27. College Savings
    "What is a 529 plan?": "O que é o plano 529 de poupança universitária?",
    "A 529 plan is a tax-advantaged savings and investment plan designed to encourage saving for future higher education expenses with tax-free growth and qualified withdrawals.": "Um plano americano com incentivo fiscal voltado para custear a faculdade dos filhos com isenção de impostos sobre os lucros.",
    "How fast do college costs increase?": "A que ritmo sobem os custos do ensino superior?",
    "Historically, higher education tuition and fees have increased at an annual rate of 4% to 6%, outpacing general consumer inflation.": "Historicamente as mensalidades de faculdades sobem entre 4% e 6% ao ano, acima da inflação oficial média.",
    "What happens to 529 funds if my child does not go to college?": "O que acontece com os recursos se o filho não for para a faculdade?",
    "You can change the beneficiary to another qualifying family member, use up to $10,000 for student loan repayment, or roll over up to $35,000 into a Roth IRA under SECURE 2.0 rules.": "É possível transferir o titular para outro filho da família ou migrar até 35.000 $ para uma conta individual de aposentadoria.",
    "Can I use a 529 plan for trade schools or K-12 tuition?": "Pode ser usado para cursos técnicos ou escola de ensino fundamental/médio?",
    "Yes, qualified distributions can cover accredited trade schools, vocational programs, apprenticeships, and up to $10,000 per year for K-12 private school tuition.": "Sim, escolas técnicas credenciadas e até 10.000 $ por ano para mensalidades escolares privadas são elegíveis.",
    "How does a 529 plan impact financial aid eligibility?": "Qual o impacto na obtenção de bolsas e auxílios estudantis?",
    "Parent-owned 529 plans are assessed as parental assets on the FAFSA at a maximum rate of 5.64%, having minimal negative impact on financial aid eligibility.": "Se estiver em nome dos pais, apenas até 5,64% do saldo entra no cômputo da renda familiar, com impacto mínimo.",

    // 28. Crypto DCA
    "What is Dollar-Cost Averaging (DCA)?": "O que é Dollar-Cost Averaging (DCA / Aporte Regular)?",
    "Dollar-Cost Averaging is an investment strategy where you invest a fixed amount of money at regular intervals regardless of the asset's fluctuating market price.": "Estratégia de investir um valor financeiro constante em intervalos periódicos pré-definidos, ignorando os preços momentâneos de tela.",
    "How does DCA apply to high-volatility assets like Crypto?": "Por que o DCA é ideal para criptomoedas?",
    "DCA prevents emotional decisions during extreme market peaks and crashes, automatically buying more units when prices are low and fewer when prices are high.": "Evita decisões precipitadas e emocionais, comprando mais frações de moeda nas quedas e diminuindo o preço médio de aquisição.",
    "Is DCA better than investing a lump sum?": "O aporte regular é melhor do que investir tudo de uma vez?",
    "Lump sum investing historically wins in steadily rising markets, but DCA provides superior peace of mind, lower emotional risk, and downside protection in highly volatile markets.": "Em mercados em forte alta o aporte único rende mais; mas em ativos com oscilações extremas, o DCA oferece tranquilidade e proteção.",
    "What is the best frequency for crypto DCA?": "Qual é a frequência recomendada para fazer aportes em cripto?",
    "Weekly or bi-weekly DCA aligned with your pay cycle is ideal for capturing market volatility while keeping trading fees manageable.": "Aportes semanais ou quinzenais alinhados ao recebimento do salário equilibram o efeito preço médio sem gerar custos excessivos de taxas.",
    "Does DCA guarantee profits in cryptocurrency?": "O DCA assegura lucro garantido em criptoativos?",
    "No, DCA does not protect against prolonged declines or failing crypto projects; it only ensures you achieve the weighted average market purchase price.": "Não, ele não impede perdas em projetos ruins ou em quedas estruturais contínuas; garante apenas o preço médio ponderado de mercado.",

    // 29. Tip
    "What is the standard tipping percentage?": "Qual é o valor habitual de gorjeta?",
    "In the United States and Canada, standard restaurant tipping guidelines range from 15% for adequate service, 18% for good service, to 20% or more for exceptional service.": "Na América do Norte varia entre 15% e 20%; no Brasil a taxa de serviço sugerida na conta de bares e restaurantes é costumeiramente de 10% a 13%.",
    "Should tips be calculated before or after sales tax?": "A gorjeta deve ser calculada antes ou depois dos impostos?",
    "Etiquette traditionally dictates calculating the tip percentage on the pre-tax food and beverage subtotal, though many automated payment terminals calculate tip on the post-tax total.": "A etiqueta recomenda calcular sobre o subtotal consumido sem tributos, embora a maioria das maquininhas de cartão calcule sobre o total final.",
    "How do you split a bill evenly among friends?": "Como dividir a conta de restaurante igualmente entre amigos?",
    "Calculate the total bill including food, beverages, tax, and tip, and divide the total amount equally by the number of paying participants.": "Some todo o consumo de comidas, bebidas, tributos e gorjeta, e divida o valor integral de forma equitativa pelo número de pagantes.",

    // 30. Discount
    "How do you calculate a percentage discount?": "Como calcular um desconto percentual?",
    "Multiply the original price by the discount percentage divided by 100 to find the savings, and subtract that amount from the original price: Final Price = Original Price × (1 - Discount%).": "Multiplique o preço original pela porcentagem de desconto dividida por 100 para descobrir a economia e subtraia: Preço Final = Preço Original × (1 - Desconto%).",
    "How do multiple stacked discounts work?": "Como funcionam descontos sucessivos acumulados?",
    "Stacked discounts apply sequentially rather than additively. For example, 20% off plus an extra 10% off results in an effective 28% total discount, not 30%.": "Eles são aplicados em sequência sobre o saldo restante: 20% de desconto mais 10% extra resultam em 28% de abatimento real, e não 30%.",
    "Is sales tax applied before or after store discounts?": "O imposto incide antes ou após o desconto?",
    "In most jurisdictions, sales tax is calculated on the discounted post-sale price, meaning you pay sales tax only on the actual money spent.": "Os impostos sobre o consumo incidem sobre o preço líquido com desconto, tributando apenas o valor efetivamente pago pelo consumidor."
  }
};
