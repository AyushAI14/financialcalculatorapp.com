import type { Lang } from './ui';

export interface LocalizedPost {
  title: string;
  description: string;
  content: string; // Markdown or HTML content
  pubDate: Date;
  author: string;
  tags: string[];
}

export const blogTranslations: Record<string, Partial<Record<Lang, { title: string; description: string; content: string }>>> = {
  "understanding-apr": {
    en: {
      title: "Understanding APR: Nominal vs. Effective Interest Rates",
      description: "Learn how the Annual Percentage Rate (APR) differs from your base interest rate, and why closing costs and fees make APR a truer measure of loan cost.",
      content: `
<p>When shopping for a loan—whether a mortgage, auto loan, or personal loan—you will often see two rates advertised: the <strong>Nominal Interest Rate</strong> (or base rate) and the <strong>Annual Percentage Rate (APR)</strong>.</p>
<p>Understanding the difference between these two rates is crucial to avoiding expensive lending traps.</p>
<h2>What is the Nominal Interest Rate?</h2>
<p>The nominal interest rate is the base cost of borrowing the principal amount. It is the percentage used by the lender to calculate the monthly interest charges accrued on your outstanding balance. For example, on a $300,000 mortgage with a nominal rate of 6%, your interest accrued in the first month is calculated directly using that 6% annual rate.</p>
<p>However, the nominal rate <strong>does not include any other borrowing costs</strong>.</p>
<h2>What is APR?</h2>
<p>The Annual Percentage Rate (APR) represents the <strong>total annual cost of borrowing</strong>, expressed as a percentage. It incorporates both the nominal interest rate and any upfront fees, points, and other closing charges required to secure the loan.</p>
<p>These fees include:</p>
<ul>
  <li>Loan origination fees</li>
  <li>Discount points (prepaid interest)</li>
  <li>Underwriting fees</li>
  <li>Private mortgage insurance (PMI)</li>
  <li>Broker commissions</li>
</ul>
<p>Because these fees are factored into the APR, <strong>the APR is almost always higher than the nominal rate</strong>.</p>
<h2>How APR is Calculated</h2>
<p>To calculate APR, the lender determines the standard monthly payment based on the nominal interest rate and the full loan principal. However, the borrower does not actually receive the full principal amount; they receive the principal <strong>minus the closing fees</strong>. By setting the monthly payment against this lower net proceeds amount, we solve for a new, higher effective interest rate. That rate is the APR.</p>
<p>Use our <a href="/loan/apr/">APR Calculator</a> to plug in your numbers and see the true cost of your next loan!</p>
`
    },
    es: {
      title: "Comprendiendo la TAE / APR: Tasa Nominal vs. Tasa Efectiva",
      description: "Descubre en qué se diferencia la Tasa Anual Equivalente (APR/TAE) de la tasa de interés base y por qué las comisiones la convierten en la medida real del costo del préstamo.",
      content: `
<p>Al solicitar un préstamo —sea una hipoteca, crédito automotriz o préstamo personal— con frecuencia verás dos tasas anunciadas: el <strong>Tipo de Interés Nominal (TIN)</strong> y la <strong>Tasa Anual Equivalente (TAE / APR)</strong>.</p>
<p>Comprender la diferencia entre estas dos tasas es fundamental para evitar costos ocultos y condiciones desfavorables.</p>
<h2>¿Qué es el Tipo de Interés Nominal (TIN)?</h2>
<p>El interés nominal es el coste base de pedir prestado el capital principal. Es el porcentaje que la entidad financiera aplica sobre el saldo pendiente para calcular los intereses mensuales devengados. Por ejemplo, en una hipoteca de 300.000 € al 6% nominal, los intereses del primer mes se calculan directamente sobre dicho 6% anual.</p>
<p>Sin embargo, la tasa nominal <strong>no incluye comisiones ni gastos de apertura</strong>.</p>
<h2>¿Qué es la TAE / APR?</h2>
<p>La Tasa Anual Equivalente (TAE o APR en inglés) refleja el <strong>coste real total y anualizado del préstamo</strong>. Incluye tanto el tipo de interés nominal como todas las comisiones de apertura, tasación, gastos de formalización y seguros obligatorios exigidos para conceder la operación.</p>
<p>Entre estos conceptos se incluyen:</p>
<ul>
  <li>Comisiones de apertura y estudio</li>
  <li>Puntos de descuento (intereses pagados por anticipado)</li>
  <li>Costes de tasación y verificación legal</li>
  <li>Seguros de crédito o de amortización vinculados</li>
  <li>Honorarios de intermediación</li>
</ul>
<p>Debido a que estos cargos se integran en el cálculo, <strong>la TAE / APR es prácticamente siempre superior al tipo nominal</strong>.</p>
<h2>Cómo se calcula la TAE / APR</h2>
<p>Para determinar la TAE, la entidad calcula la cuota mensual a partir del capital solicitado y el TIN. Sin embargo, el prestatario no recibe la totalidad del dinero, sino el capital <strong>menos los gastos y comisiones iniciales</strong>. Al calcular la tasa que iguala esa suma neta recibida con las cuotas futuras, se obtiene la tasa efectiva real.</p>
<p>¡Utiliza nuestra <a href="/es/loan/apr/">Calculadora de APR / TAE</a> para conocer el coste real de tu próxima financiación!</p>
`
    },
    de: {
      title: "Effektivzins (APR) verstehen: Sollzins vs. effektiver Jahreszins",
      description: "Erfahren Sie, wie sich der effektive Jahreszins vom gebundenen Sollzins unterscheidet und warum Bearbeitungsgebühren den effektiven Zins zur wahren Kostenmessung machen.",
      content: `
<p>Beim Vergleich von Krediten – sei es eine Baufinanzierung, ein Autokredit oder ein Ratenkredit – stößt man stets auf zwei Zinssätze: den <strong>Sollzins (Nominalzins)</strong> und den <strong>effektiven Jahreszins (APR)</strong>.</p>
<p>Den Unterschied zu verstehen, ist entscheidend für transparente Finanzierungsentscheidungen.</p>
<h2>Was ist der Sollzins (Nominalzins)?</h2>
<p>Der Sollzins stellt die reine Zinsgebühr für das geliehene Kapital dar. Die Bank nutzt diesen Prozentsatz, um die monatlichen Zinsraten auf die Restschuld zu berechnen. Bei einem Darlehen von 300.000 € zu 4 % Sollzins werden die Zinsen des ersten Monats exakt mit diesen 4 % berechnet.</p>
<p>Der Sollzins beinhaltet jedoch <strong>keinerlei Nebenkosten oder Gebühren</strong>.</p>
<h2>Was ist der effektive Jahreszins?</h2>
<p>Der effektive Jahreszins spiegelt die <strong>gesamten jährlichen Gesamtkosten der Kreditaufnahme</strong> wider. Er umfasst neben dem Sollzins alle festen Gebühren, Auszahlungsabschläge und Vermittlungskosten.</p>
<p>Dazu gehören typischerweise:</p>
<ul>
  <li>Bearbeitungs- und Bereitstellungsgebühren</li>
  <li>Wertermittlungskosten / Gutachterkosten</li>
  <li>Restschuldversicherungsprämien</li>
  <li>Disagio (Zinsabschlag)</li>
</ul>
<p>Da diese Kosten eingerechnet werden, liegt <strong>der Effektivzins fast immer über dem Sollzins</strong>.</p>
<h2>Berechnung des Effektivzinses</h2>
<p>Für die Berechnung wird die Monatsrate ermittelt und dem tatsächlich ausgezahlten Nettodarlehensbetrag (Darlehen abzüglich Nebenkosten) gegenübergestellt. Der so ermittelte interne Zinsfuß ist der Effektivzins.</p>
<p>Nutzen Sie unseren <a href="/de/loan/apr/">Effektivzins-Rechner</a>, um die tatsächlichen Kosten Ihres nächsten Kredits zu prüfen!</p>
`
    },
    ja: {
      title: "実質年率（APR）とは？表面金利との違いと借入総コストの算出",
      description: "表面利率と実質年率（APR）の違いを理解し、事務手数料や保証料が実際の借入金利に与える影響を正しく把握しましょう。",
      content: `
<p>住宅ローンやマイカーローン、カードローンを検討する際、広告には<strong>「表面金利（名義金利）」</strong>と<strong>「実質年率（APR）」</strong>の2つの金利が表記されます。</p>
<p>この2つの違いを理解することは、余計な利息負担を避けるための重要な基礎知識です。</p>
<h2>表面金利（名義金利）とは？</h2>
<p>表面金利とは、借入元金に対して課される基本金利のことです。金融機関はこの割合に基づいて毎月の利息額を算出します。例えば3,000万円の住宅ローンで年利1.5%の場合、1ヶ月目の利息はこの1.5%を元に直接計算されます。</p>
<p>しかし、表面金利には<strong>諸費用や事務手数料は一切含まれていません</strong>。</p>
<h2>実質年率（APR）とは？</h2>
<p>実質年率（APR: Annual Percentage Rate）とは、借入にかかる<strong>すべての年間総合コストをパーセンテージで表した指標</strong>です。名義金利だけでなく、契約時に必要な各種手数料や保証料を含めて計算されます。</p>
<p>代表的な諸費用には以下があります：</p>
<ul>
  <li>融資事務手数料</li>
  <li>保証会社への保証料</li>
  <li>抵当権設定費用や印紙税</li>
  <li>団信（団体信用生命保険）特約料</li>
</ul>
<p>これらの費用が上乗せされるため、<strong>実質年率はほぼ必ず表面金利よりも高くなります</strong>。</p>
<h2>実質年率の算出ロジック</h2>
<p>実質年率は、毎月の返済額と「実際に手元に入った金額（元金から初期費用を引いた額）」を比較し、真の利回りを逆算して求めます。</p>
<p>当サイトの <a href="/ja/loan/apr/">実質年率（APR）計算機</a> を使って、ローンの本当のコストをシミュレーションしてみましょう！</p>
`
    },
    fr: {
      title: "Comprendre le TAEG : Taux Nominal vs. Taux Effectif Global",
      description: "Découvrez en quoi le Taux Annuel Effectif Global (TAEG) diffère du taux d'intérêt de base et pourquoi les frais annexes reflètent le coût réel de votre crédit.",
      content: `
<p>Lors de la souscription d'un crédit immobilier, d'un prêt auto ou d'un crédit à la consommation, deux taux sont obligatoirement présentés : le <strong>Taux Nominal (taux débiteur)</strong> et le <strong>TAEG (Taux Annuel Effectif Global)</strong>.</p>
<p>Comprendre la nuance entre ces deux chiffres est essentiel pour comparer objectivement les offres bancaires.</p>
<h2>Qu'est-ce que le Taux Nominal ?</h2>
<p>Le taux nominal est le taux brut appliqué directement sur le capital emprunté pour calculer les intérêts mensuels. Par exemple, sur un emprunt de 200 000 € à 3,5 % nominal, la banque calcule vos intérêts initiaux uniquement à partir de ces 3,5 % annuels.</p>
<p>Ce taux <strong>n'intègre aucun frais annexe ni assurance obligatoire</strong>.</p>
<h2>Qu'est-ce que le TAEG ?</h2>
<p>Le TAEG représente le <strong>coût total annuel de l'emprunt</strong>, exprimé en pourcentage. Il intègre le taux nominal ainsi que tous les frais obligatoires exigés pour l'obtention du prêt.</p>
<p>Parmi ces frais figurent :</p>
<ul>
  <li>Les frais de dossier bancaire</li>
  <li>L'assurance emprunteur obligatoire (décès, invalidité)</li>
  <li>Les frais de garantie (cautionnement, hypothèque)</li>
  <li>Les frais d'ouverture de compte obligatoire</li>
</ul>
<p>Puisque ces éléments sont comptabilisés, <strong>le TAEG est systématiquement supérieur au taux nominal</strong>.</p>
<h2>Comment est calculé le TAEG ?</h2>
<p>Le calcul compare l'échéance mensuelle globale au montant net réellement perçu après déduction des frais initiaux, afin de déterminer le rendement actuariel réel.</p>
<p>Testez dès maintenant notre <a href="/fr/loan/apr/">Calculateur de TAEG</a> pour obtenir le coût exact de votre futur crédit !</p>
`
    },
    pt: {
      title: "Entendendo o CET e APR: Taxa Nominal vs. Taxa Efetiva de Juros",
      description: "Saiba como o Custo Efetivo Total (CET / APR) difere da taxa de juros nominal e por que as tarifas e seguros revelam o custo real do seu financiamento.",
      content: `
<p>Ao contratar um empréstimo ou financiamento imobiliário ou veicular, você certamente encontrará dois termos: a <strong>Taxa de Juros Nominal</strong> e o <strong>Custo Efetivo Total (CET / APR)</strong>.</p>
<p>Saber a diferença entre essas taxas é essencial para não cair em armadilhas de juros embutidos.</p>
<h2>O que é a Taxa de Juros Nominal?</h2>
<p>A taxa nominal é o percentual básico cobrado pelo credor sobre o saldo devedor. É essa taxa que determina os juros mensais brutos. Por exemplo, em um financiamento de R$ 300.000 com taxa nominal de 10% ao ano, os juros do primeiro mês são calculados sobre essa referência.</p>
<p>Porém, a taxa nominal <strong>não contempla despesas operacionais ou seguros</strong>.</p>
<h2>O que é o CET / APR?</h2>
<p>O CET (Custo Efetivo Total) expressa o <strong>custo percentual anual de todas as obrigações financeiras</strong> assumidas pelo tomador. Ele engloba a taxa nominal mais todas as tarifas de cadastro, avaliação de garantia e seguros obrigatórios.</p>
<p>Componentes típicos do CET:</p>
<ul>
  <li>Tarifa de Abertura de Crédito (TAC) / Cadastro</li>
  <li>Tarifa de Avaliação de Bens</li>
  <li>Seguro de Morte e Invalidez Permanente (MIP) e Danos Físicos (DFI)</li>
  <li>Imposto sobre Operações Financeiras (IOF)</li>
</ul>
<p>Por somar todos os encargos, <strong>o CET é invariavelmente mais elevado que a taxa nominal</strong>.</p>
<h2>Como calcular o CET</h2>
<p>O cálculo compara o valor líquido liberado em conta com as parcelas mensais devidas ao longo do prazo de amortização.</p>
<p>Confira nossa <a href="/pt/loan/apr/">Calculadora de CET / APR</a> e descubra o real impacto das taxas antes de assinar contrato!</p>
`
    },
  },

  "snowball-vs-avalanche": {
    en: {
      title: "Debt Snowball vs. Avalanche: Which Payoff Strategy Wins?",
      description: "A deep dive comparing the psychological momentum of the Debt Snowball method against the interest-saving math of the Debt Avalanche method.",
      content: `
<p>If you are carrying multiple debts—such as credit cards, student loans, or auto loans—you have likely heard of the two main strategies for paying them off: <strong>Debt Snowball</strong> and <strong>Debt Avalanche</strong>.</p>
<p>Both methods require you to pay the minimum payment on all debts, and then focus any extra monthly cash toward a single "target" debt. But how they select that target is very different.</p>
<h2>The Debt Snowball Method</h2>
<p>Popularized by personal finance figures like Dave Ramsey, the <strong>Debt Snowball</strong> method prioritizes <strong>balance sizes</strong>:</p>
<ol>
  <li>List your debts from smallest balance to largest balance.</li>
  <li>Focus all extra budget on paying off the <strong>smallest debt first</strong>.</li>
  <li>Once that is paid off, roll its entire minimum payment and surplus budget into the next smallest debt.</li>
</ol>
<h3>Why it works</h3>
<ul>
  <li><strong>Psychological Momentum:</strong> Getting quick wins by completely wiping out small accounts provides a strong sense of achievement.</li>
  <li><strong>Simplification:</strong> You have fewer open accounts to track quickly.</li>
</ul>
<h2>The Debt Avalanche Method</h2>
<p>The <strong>Debt Avalanche</strong> method focuses strictly on <strong>interest rates</strong>:</p>
<ol>
  <li>List your debts from highest interest rate (APR) to lowest interest rate.</li>
  <li>Focus all extra budget on paying off the <strong>highest interest rate debt first</strong>.</li>
  <li>Once that is paid off, roll the payments into the debt with the next highest rate.</li>
</ol>
<h3>Why it works</h3>
<ul>
  <li><strong>Mathematical Superiority:</strong> By paying down high-rate debt first, you prevent compounding interest fees from accumulating, saving you the maximum amount of money.</li>
  <li><strong>Shorter Timeframe:</strong> Paying less interest means more of your budget goes to principal, reducing the time needed to become debt-free.</li>
</ul>
<h2>Which Wins?</h2>
<p>Mathematically, the Avalanche method wins every single time because it minimizes interest paid. However, human psychology is not always driven by math. Many savers fail to stay motivated during the long periods it takes to pay off a large, high-rate balance first. If you need behavioral reinforcement, the Snowball is a great fit. If you want to optimize your savings, choose the Avalanche.</p>
<p>Run your own scenarios on our <a href="/loan/debt-payoff/">Debt Payoff Calculator</a> to compare timelines and total interest paid under both models!</p>
`
    },
    es: {
      title: "Método Bola de Nieve vs. Avalancha: ¿Cuál estrategia para pagar deudas es mejor?",
      description: "Análisis exhaustivo entre el impulso psicológico del método Bola de Nieve y el ahorro matemático de intereses del método Avalancha.",
      content: `
<p>Si tienes varias deudas acumuladas —tarjetas de crédito, préstamos de auto o deudas personales— probablemente conozcas las dos estrategias principales para eliminarlas: la <strong>Bola de Nieve</strong> y la <strong>Avalancha de Deuda</strong>.</p>
<p>Ambos métodos exigen pagar las cuotas mínimas en todas tus cuentas y volcar todo el dinero extra disponible hacia una única deuda objetivo. Lo que cambia es el criterio para elegirla.</p>
<h2>El Método Bola de Nieve</h2>
<p>El método <strong>Bola de Nieve</strong> clasifica las deudas por su <strong>importe total pendiente</strong>, de menor a mayor:</p>
<ol>
  <li>Ordena tus deudas desde el saldo más pequeño hasta el más grande.</li>
  <li>Destina todo el presupuesto extra a liquidar la <strong>deuda más pequeña primero</strong>.</li>
  <li>Cuando quede saldada, transfiere todo ese pago mensual hacia la siguiente deuda más pequeña.</li>
</ol>
<h3>Ventajas principales</h3>
<ul>
  <li><strong>Refuerzo psicológico:</strong> Lograr victorias rápidas cancelando cuentas pequeñas genera motivación y hábito financiero.</li>
  <li><strong>Simplificación:</strong> Reduces velozmente el número de acreedores y vencimientos mensuales.</li>
</ul>
<h2>El Método Avalancha</h2>
<p>El método de <strong>Avalancha</strong> se concentra exclusivamente en el <strong>tipo de interés (TAE/APR)</strong>:</p>
<ol>
  <li>Ordena tus cuentas desde la tasa de interés más alta hasta la más baja.</li>
  <li>Concentra todo tu dinero extra en liquidar la <strong>deuda más cara en intereses primero</strong>.</li>
  <li>Al cancelarla, transfiere toda la cuota liberada a la siguiente con mayor tipo de interés.</li>
</ol>
<h3>Ventajas principales</h3>
<ul>
  <li><strong>Superioridad matemática:</strong> Minimiza el importe total de intereses abonados, ahorrando la máxima cantidad de dinero.</li>
  <li><strong>Mayor rapidez global:</strong> Al no pagar intereses desorbitados, una mayor parte de tu cuota amortiza capital.</li>
</ul>
<h2>¿Cuál deberías elegir?</h2>
<p>Matemáticamente, la Avalancha siempre resulta ganadora porque minimiza los costes financieros. Sin embargo, las finanzas son conductuales: si necesitas motivación visible para no abandonar, la Bola de Nieve es excelente. Si buscas la máxima rentabilidad, elige la Avalancha.</p>
<p>¡Simula tu plan con nuestra <a href="/es/loan/debt-payoff/">Calculadora Bola de Nieve vs. Avalancha</a> y comprueba cuánto dinero puedes ahorrar!</p>
`
    },
    de: {
      title: "Schneeball- vs. Lawinen-Methode: Welche Entschuldungsstrategie gewinnt?",
      description: "Ein detaillierter Vergleich zwischen der psychologischen Motivation der Schneeball-Methode und der mathematischen Zinsersparnis der Lawinen-Methode.",
      content: `
<p>Wer mehrere Kredite gleichzeitig bedient – beispielsweise Kreditkarten, Ratenkredite oder Dispositionskredite –, trifft unweigerlich auf zwei etablierte Strategien zur Schuldentilgung: die <strong>Schneeball-Methode</strong> und die <strong>Lawinen-Methode</strong>.</p>
<p>Bei beiden Verfahren zahlen Sie auf alle Verbindlichkeiten die Mindestrate und leiten jeden zusätzlich verfügbaren Euro in die vorzeitige Tilgung einer einzigen gezielten Schuld. Der Unterschied liegt in der Priorisierung.</p>
<h2>Die Schneeball-Methode</h2>
<p>Die Schneeball-Methode sortiert Verbindlichkeiten nach der <strong>Kreditsumme</strong> von klein nach groß:</p>
<ol>
  <li>Listen Sie alle Schulden nach Restbetrag auf, beginnend mit der kleinsten Summe.</li>
  <li>Verwenden Sie das gesamte freie Budget auf die <strong>schnelle Tilgung des kleinsten Kredits</strong>.</li>
  <li>Sobald dieser abbezahlt ist, fließt die frei gewordene monatliche Rate in den nächstgrößeren Kredit.</li>
</ol>
<h3>Vorteile</h3>
<ul>
  <li><strong>Psychologischer Rückenwind:</strong> Schnelle Teilerfolge motivieren zum Durchhalten.</li>
  <li><strong>Übersicht:</strong> Die Anzahl der Gläubiger und monatlichen Abbuchungen verringert sich rasch.</li>
</ul>
<h2>Die Lawinen-Methode</h2>
<p>Die Lawinen-Methode orientiert sich strikt am <strong>effektiven Zinssatz</strong>:</p>
<ol>
  <li>Ordnen Sie alle Kredite vom höchsten zum niedrigsten Zinssatz.</li>
  <li>Konzentrieren Sie sämtliche Sondertilgungen auf die <strong>teuerste Schuld mit dem höchsten Zins</strong>.</li>
  <li>Nach deren Ablösung rollen Sie die Zahlungen in den Kredit mit dem nächsthöheren Zins weiter.</li>
</ol>
<h3>Vorteile</h3>
<ul>
  <li><strong>Mathematische Überlegenheit:</strong> Sie minimieren die gezahlten Gesamtzinsen und sparen das meiste Geld.</li>
  <li><strong>Schnellere Gesamtschuldenfreiheit:</strong> Weil weniger Geld in Zinsen versickert, tilgen Sie mehr Realkapital.</li>
</ul>
<h2>Fazit: Welche Methode ist die richtige?</h2>
<p>Rein rechnerisch gewinnt die Lawinen-Methode immer. In der Verhaltensökonomie zeigt sich jedoch: Wer schnelle Erfolgserlebnisse braucht, bleibt mit dem Schneeball-System eher am Ball.</p>
<p>Nutzen Sie unseren interaktiven <a href="/de/loan/debt-payoff/">Schuldentilgungs-Rechner</a>, um beide Wege direkt mit Ihren eigenen Zahlen zu vergleichen!</p>
`
    },
    ja: {
      title: "借金返済の二大戦略：スノーボール方式 vs. アバランチ方式の徹底比較",
      description: "心理的達成感を重視する「スノーボール方式」と、支払利息を最小限に抑える「アバランチ方式」の違いを解説します。",
      content: `
<p>リボ払い、マイカーローン、消費者金融など複数の債務を抱えている場合、早期完済を目指す上で知っておくべき2つの代表的戦略が<strong>「スノーボール方式（雪だるま式）」</strong>と<strong>「アバランチ方式（雪崩式）」</strong>です。</p>
<p>両戦略ともに、すべての借入に対して毎月の最低返済額を維持しつつ、余剰資金を特定の「ターゲット」に集中投下する手法ですが、その優先順位の付け方が異なります。</p>
<h2>スノーボール方式（残高が小さい順）</h2>
<p>スノーボール方式では、金利の高低にかかわらず<strong>借入残高の小ささ</strong>を最優先します：</p>
<ol>
  <li>すべての負債を残高の少ない順に並べ替えます。</li>
  <li>余剰資金をすべて<strong>最も残高が少ない借入の返済</strong>に充てます。</li>
  <li>完済したら、その返済枠を次の残高の借入へ雪だるま式に上乗せしていきます。</li>
</ol>
<h3>メリット</h3>
<ul>
  <li><strong>心理的モチベーション：</strong> 早い段階で「完済」という成功体験が得られ、返済の継続が容易になります。</li>
  <li><strong>管理の単純化：</strong> 返済先口座の数が迅速に減少し、管理の煩わしさが軽減します。</li>
</ul>
<h2>アバランチ方式（金利が高い順）</h2>
<p>アバランチ方式は、純粋に<strong>金利（実質年率）の高さ</strong>に着目します：</p>
<ol>
  <li>すべての負債を金利が高い順に並べ替えます。</li>
  <li>余剰資金を<strong>最も金利負担が重い借入</strong>に全額集中させます。</li>
  <li>完済後、浮いた資金を次に金利の高い負債へ繰り越します。</li>
</ol>
<h3>メリット</h3>
<ul>
  <li><strong>数学的な最適解：</strong> 高金利の元金を最優先で削減するため、総支払利息を最も少なく抑えられます。</li>
  <li><strong>完済期間の短縮：</strong> 無駄な利息に消えるお金が減る分、元金の減りが早くなります。</li>
</ul>
<h2>どちらを選ぶべきか？</h2>
<p>数字上はアバランチ方式が常に勝利します。しかし、何ヶ月も成果が見えないと挫折しやすい性格の方には、目に見える進捗が得られるスノーボール方式が適しています。</p>
<p>当サイトの <a href="/ja/loan/debt-payoff/">借金返済シミュレーター</a> で、自分にとって最適なプランを試算してみましょう！</p>
`
    },
    fr: {
      title: "Remboursement de dettes : Boule de Neige vs. Avalanche, quelle méthode choisir ?",
      description: "Comparatif complet entre la méthode de la Boule de Neige (victoires rapides) et la méthode Avalanche (économie maximale d'intérêts).",
      content: `
<p>Lorsque vous cumulez plusieurs emprunts — crédits renouvelables, prêt automobile ou crédit personnel —, deux méthodes de remboursement font référence : la méthode de la <strong>Boule de Neige</strong> et la méthode de l'<strong>Avalanche</strong>.</p>
<p>Dans les deux cas, vous assurez les mensualités minimales sur chaque crédit, et consacrez la totalité de votre épargne résiduelle à un emprunt cible unique.</p>
<h2>La Méthode Boule de Neige</h2>
<p>Cette approche classe vos dettes en fonction du <strong>montant du capital restant dû</strong>, du plus petit au plus grand :</p>
<ol>
  <li>Listez vos emprunts du solde le plus faible au plus élevé.</li>
  <li>Affectez toute votre capacité de remboursement supplémentaire au <strong>plus petit solde en priorité</strong>.</li>
  <li>Une fois remboursé, reportez la totalité de la mensualité libérée sur la dette suivante.</li>
</ol>
<h3>Pourquoi elle séduit</h3>
<ul>
  <li><strong>Motivation psychologique :</strong> Voir disparaître rapidement une première ligne de crédit renforce l'engagement.</li>
  <li><strong>Simplification :</strong> Moins de prélèvements bancaires mensuels à suivre.</li>
</ul>
<h2>La Méthode Avalanche</h2>
<p>La méthode Avalanche cible exclusivement le <strong>taux d'intérêt (TAEG)</strong> :</p>
<ol>
  <li>Classez vos emprunts du taux le plus élevé au plus bas.</li>
  <li>Remboursez en priorité absolue <strong>le prêt qui vous coûte le plus cher en intérêts</strong>.</li>
  <li>Basculez ensuite la force de frappe financière sur le taux immédiatement inférieur.</li>
</ol>
<h3>Ses atouts majeurs</h3>
<ul>
  <li><strong>Efficacité financière pure :</strong> En étouffant les taux usuraires en premier, vous réduisez le coût global du crédit au minimum.</li>
  <li><strong>Désendettement accéléré :</strong> Chaque euro supplémentaire amortit directement le capital le plus coûteux.</li>
</ul>
<h2>Laquelle est faite pour vous ?</h2>
<p>Sur le plan comptable, l'Avalanche bat la Boule de Neige à tous les coups. Mais la finance personnelle est avant tout comportementale : si vous avez besoin de victoires rapides pour garder le cap, la Boule de Neige est idéale. Si vous voulez économiser le plus d'argent possible, foncez sur l'Avalanche.</p>
<p>Calculez vos gains avec notre <a href="/fr/loan/debt-payoff/">Calculateur Boule de Neige vs. Avalanche</a> !</p>
`
    },
    pt: {
      title: "Método Bola de Neve vs. Avalanche: Qual a melhor estratégia para quitar dívidas?",
      description: "Compare o impacto motivacional do método Bola de Neve com a economia financeira de juros do método Avalanche.",
      content: `
<p>Para quem lida com várias dívidas ao mesmo tempo — rotativo do cartão, cheque especial ou financiamentos —, existem duas estratégias consagradas para recuperar a saúde financeira: a <strong>Bola de Neve</strong> e a <strong>Avalanche</strong>.</p>
<p>Nas duas opções, você mantém as parcelas mínimas de todas as dívidas e direciona qualquer valor extra para uma única dívida prioritária.</p>
<h2>O Método Bola de Neve</h2>
<p>Foca no <strong>valor total devedor</strong>, do menor para o maior:</p>
<ol>
  <li>Organize suas dívidas da que tem o menor saldo para a que tem o maior saldo.</li>
  <li>Use todo o dinheiro excedente para <strong>quitar a menor dívida primeiro</strong>.</li>
  <li>Assim que liquidá-la, direcione todo o valor daquela parcela para a próxima menor dívida.</li>
</ol>
<h3>Pontos fortes</h3>
<ul>
  <li><strong>Vitórias rápidas:</strong> Quitar contas pequenas rapidamente gera forte estímulo comportamental.</li>
  <li><strong>Menos cobranças:</strong> Reduz rapidamente a quantidade de boletos a acompanhar.</li>
</ul>
<h2>O Método Avalanche</h2>
<p>Foca estritamente na <strong>taxa de juros (CET)</strong>:</p>
<ol>
  <li>Organize suas dívidas da maior taxa de juros para a menor.</li>
  <li>Foque todo o recurso extra em <strong>liquidar a dívida mais cara primeiro</strong>.</li>
  <li>Passe em seguida para a segunda maior taxa de juros.</li>
</ol>
<h3>Pontos fortes</h3>
<ul>
  <li><strong>Eficiência matemática:</strong> Reduz ao máximo o pagamento de juros compostos.</li>
  <li><strong>Menor tempo total:</strong> Mais dinheiro vai direto para amortizar o principal.</li>
</ul>
<h2>Qual estratégia escolher?</h2>
<p>Pela matemática pura, a Avalanche sempre vence. Mas se você precisa de incentivo psicológico imediato para não desistir no meio do caminho, a Bola de Neve é a melhor pedida.</p>
<p>Calcule seu cronograma ideal com a nossa <a href="/pt/loan/debt-payoff/">Calculadora Bola de Neve vs. Avalanche</a>!</p>
`
    },
  },

  "traditional-vs-roth-ira-tax": {
    en: {
      title: "Traditional vs. Roth IRA: Which Saves More on Taxes?",
      description: "Choosing between a Traditional and Roth IRA can make a massive difference in your retirement savings. Learn how tax rates determine the winning strategy.",
      content: `
<p>When setting up an Individual Retirement Account (IRA), you face one primary choice: <strong>Traditional or Roth?</strong></p>
<p>The decision boils down to one simple question: <strong>When do you want to pay taxes?</strong></p>
<h2>1. Traditional IRA: Tax Break Now</h2>
<p>With a Traditional IRA, your contributions are generally <strong>tax-deductible</strong> in the year you make them.</p>
<ul>
  <li><strong>How it works:</strong> If you earn $70,000 this year and contribute $7,000, the government taxes you as if you only earned $63,000.</li>
  <li><strong>The Catch:</strong> Your money grows tax-deferred, but when you withdraw it in retirement, withdrawals are taxed as ordinary income.</li>
</ul>
<p><strong>Best for:</strong> People currently in high tax brackets who expect to be in a lower bracket during retirement.</p>
<h2>2. Roth IRA: Tax Break Later</h2>
<p>With a Roth IRA, you get <strong>no tax deduction today</strong>. You contribute post-tax dollars.</p>
<ul>
  <li><strong>How it works:</strong> You pay income tax now, contribute, and your investments compound.</li>
  <li><strong>The Reward:</strong> In retirement (after age 59½), both your contributions and all investment gains are <strong>100% tax-free</strong>.</li>
</ul>
<p><strong>Best for:</strong> Younger savers, lower earners, or anyone anticipating higher future tax rates.</p>
<h2>3. Which Saves More Money?</h2>
<p>The choice hinges on comparing your <strong>Current Tax Bracket</strong> with your <strong>Expected Retirement Tax Bracket</strong>:</p>
<ul>
  <li><strong>Current Rate > Future Rate:</strong> Traditional wins. You dodge heavy taxes today.</li>
  <li><strong>Current Rate < Future Rate:</strong> Roth wins. You pay low taxes now and enjoy tax-free withdrawals later.</li>
  <li><strong>Current Rate = Future Rate:</strong> Mathematically identical, though Roth offers perks like no Required Minimum Distributions (RMDs).</li>
</ul>
<p>Run your personalized tax projections with our <a href="/retirement/ira-comparison/">Roth vs Traditional IRA Calculator</a>!</p>
`
    },
    es: {
      title: "Plan de Pensiones vs. Cuenta Libre de Impuestos: Estrategias Fiscales de Retiro",
      description: "¿Conviene desgravar impuestos hoy o retirar el capital sin tributar en la jubilación? Compara el impacto fiscal en tu patrimonio.",
      content: `
<p>Al planificar el ahorro para la jubilación, surge la gran encrucijada tributaria: <strong>¿desgravar impuestos hoy o retirarlos libres de impuestos mañana?</strong></p>
<p>Todo se resume en una pregunta clave: <strong>¿cuándo te conviene pagar impuestos a Hacienda?</strong></p>
<h2>1. Aportaciones con Desgravación Inmediata (Tradicional)</h2>
<p>En este modelo, las aportaciones anuales <strong>reducen directamente la base imponible del IRPF</strong> del año en curso.</p>
<ul>
  <li><strong>Mecanismo:</strong> Si tus ingresos son de 50.000 € y aportas 5.000 €, tributas únicamente sobre 45.000 €.</li>
  <li><strong>La contrapartida:</strong> El dinero crece difiriendo impuestos, pero al rescatarlo durante la jubilación tributa como rendimiento del trabajo.</li>
</ul>
<p><strong>Ideal para:</strong> Profesionales en tramos impositivos altos que prevén percibir pensiones en tramos más bajos.</p>
<h2>2. Aportaciones Post-Impuestos (Tipo Roth)</h2>
<p>En este esquema no hay deducción fiscal inicial; se invierte dinero ya neto de impuestos.</p>
<ul>
  <li><strong>Mecanismo:</strong> Pagas tus impuestos hoy con normalidad e inviertes el remanente en una cuenta con ventajas de capitalización.</li>
  <li><strong>La recompensa:</strong> En el momento del rescate, tanto el capital aportado como todas las plusvalías generadas están <strong>100% exentos de tributación</strong>.</li>
</ul>
<p><strong>Ideal para:</strong> Jóvenes, personas en tramos impositivos moderados o quienes anticipan subidas generales de impuestos en el futuro.</p>
<h2>3. ¿Cuál genera más dinero neto?</h2>
<p>La regla de oro consiste en comparar tu <strong>tipo marginal actual</strong> con tu <strong>tipo impositivo estimado en la jubilación</strong>:</p>
<ul>
  <li><strong>Tipo Actual > Tipo Futuro:</strong> Conviene el modelo Tradicional para ahorrar hoy en el tramo más caro.</li>
  <li><strong>Tipo Actual < Tipo Futuro:</strong> Conviene el modelo tipo Roth para evitar una carga tributaria mayor en el futuro.</li>
</ul>
<p>¡Proyecta tu pensión neta con nuestra <a href="/es/retirement/ira-comparison/">Calculadora de Comparación Fiscal de Jubilación</a>!</p>
`
    },
    de: {
      title: "Steuerstundung vs. Steuerfreie Auszahlung: Altersvorsorge im Steuervergleich",
      description: "Entscheiden Sie zwischen sofortigem Steuerabzug und steuerfreiem Rentenbezug für Ihren optimalen Vermögensaufbau.",
      content: `
<p>Bei der privaten Altersvorsorge steht man vor der grundlegenden Frage: <strong>Sollte man heute Steuern sparen oder die Erträge im Alter steuerfrei genießen?</strong></p>
<p>Es geht im Kern um den idealen Zeitpunkt der Besteuerung.</p>
<h2>1. Vorsorge mit sofortigem Steuerabzug (nachgelagerte Besteuerung)</h2>
<p>Beiträge können in der Ansparphase als Sonderausgaben vom zu versteuernden Einkommen abgezogen werden.</p>
<ul>
  <li><strong>Vorteil:</strong> Sofortige Liquidität und Steuererstattung im Berufsleben.</li>
  <li><strong>Im Alter:</strong> Die Auszahlungen unterliegen im Rentenalter dem dann geltenden individuellen Steuersatz.</li>
</ul>
<p><strong>Ideal für:</strong> Gutverdiener in Spitzensteuersätzen, die im Ruhestand mit einem deutlich geringeren Einkommensteuersatz rechnen.</p>
<h2>2. Vorsorge aus versteuertem Einkommen mit steuerfreier Rendite</h2>
<p>Beiträge werden aus dem Nettoeinkommen geleistet, dafür bleiben Auszahlungen und Zinseszinsen im Ruhestand steuerbegünstigt oder steuerfrei.</p>
<ul>
  <li><strong>Vorteil:</strong> Sämtliche Kursgewinne und Dividenden wachsen über Jahrzehnte ohne steuerliche Einbußen heran.</li>
</ul>
<p><strong>Ideal für:</strong> Jüngere Sparer und Berufseinsteiger in niedrigeren Steuerklassen.</p>
<p>Prüfen Sie Ihre persönliche Steuerersparnis mit unserem <a href="/de/retirement/ira-comparison/">Vorsorge-Steuer-Rechner</a>!</p>
`
    },
    ja: {
      title: "確定拠出年金と非課税制度の比較：所得控除 vs. 運用益非課税どちらが得か？",
      description: "掛金の所得控除による現時点での節税と、将来の運用益・受取時非課税のどちらが有利かを徹底検証します。",
      content: `
<p>老後資金の形成にあたり、多くの投資家が直面するのが<strong>「今すぐ所得控除で節税するか、将来の受取時に非課税にするか」</strong>という選択です。</p>
<p>これは税制優遇を活用した資産形成において最も重要な分岐点です。</p>
<h2>1. 掛金が全額所得控除になる仕組み（伝統的年金型）</h2>
<p>拠出した掛金がその年の課税所得から差し引かれます。</p>
<ul>
  <li><strong>メリット：</strong> 今年の所得税・住民税が直接軽減されます。</li>
  <li><strong>受取時：</strong> 運用期間中は非課税で増えますが、老後の受取時に課税対象（退職所得または公的年金等控除の枠内）となります。</li>
</ul>
<p><strong>向いている人：</strong> 現在の年収が高く、高い所得税率が適用されている現役世代。</p>
<h2>2. 運用益が完全非課税になる仕組み（NISA・Roth型）</h2>
<p>手取り（課税済み資金）から投資を行い、将来の利益に税金がかからない設計です。</p>
<ul>
  <li><strong>メリット：</strong> 何十年もの間に生まれた複利運用益・配当金が<strong>100%非課税</strong>で手に入ります。</li>
</ul>
<p><strong>向いている人：</strong> 20代〜30代の若年層や、現在の税率が低めで長期の運用期間を確保できる方。</p>
<p>当サイトの <a href="/ja/retirement/ira-comparison/">老後資金・年金税制比較計算機</a> でシミュレーションしてみましょう！</p>
`
    },
    fr: {
      title: "Épargne Retraite : Déduction fiscale immédiate ou exonération à la sortie ?",
      description: "Comparez l'avantage d'une déduction d'impôt immédiate (type PER) avec une sortie en capital totalement défiscalisée.",
      content: `
<p>Pour préparer sa retraite, une question fiscale majeure s'impose : <strong>faut-il réduire ses impôts tout de suite ou bénéficier d'une rente exonérée plus tard ?</strong></p>
<h2>1. L'avantage fiscal à l'entrée (Déduction du revenu imposable)</h2>
<p>Les versements effectués réduisent directement votre assiette imposable sur le revenu de l'année.</p>
<ul>
  <li><strong>Fonctionnement :</strong> Une économie d'impôt immédiate proportionnelle à votre tranche marginale d'imposition (TMI).</li>
  <li><strong>À la sortie :</strong> Le capital ou la rente est soumis à l'impôt au moment de la retraite.</li>
</ul>
<p><strong>Recommandé pour :</strong> Les contribuables fortement imposés (TMI à 30%, 41% ou 45%).</p>
<h2>2. L'exonération totale des plus-values à la sortie</h2>
<p>Vous investissez des sommes déjà fiscalisées, mais profitez d'une exonération d'impôt sur les plus-values au moment du rachat.</p>
<p>Comparez vos gains nets avec notre <a href="/fr/retirement/ira-comparison/">Calculateur Fiscal Épargne Retraite</a> !</p>
`
    },
    pt: {
      title: "PGBL ou VGBL: Qual a melhor opção tributária para sua aposentadoria?",
      description: "Entenda a diferença entre abater as contribuições no imposto de renda hoje ou pagar tributos apenas sobre os rendimentos futuros.",
      content: `
<p>Ao planejar a previdência privada, a dúvida crucial é: <strong>escolher dedução tributária agora ou isenção sobre o principal lá na frente?</strong></p>
<p>A escolha depende da sua declaração do Imposto de Renda (Completa ou Simplificada) e da sua faixa de renda atual versus futura.</p>
<p>Calcule o saldo líquido com a nossa <a href="/pt/retirement/ira-comparison/">Calculadora Tributária de Aposentadoria</a>!</p>
`
    },
  },

  "understanding-mortgage-pmi": {
    en: {
      title: "What is PMI? How to Avoid and Cancel Private Mortgage Insurance",
      description: "Learn what Private Mortgage Insurance (PMI) is, how much it costs, and the exact steps you can take to cancel or avoid it entirely.",
      content: `
<p>When buying a home, you might notice an extra fee on your monthly payment estimate labeled <strong>PMI</strong>, or <strong>Private Mortgage Insurance</strong>.</p>
<p>Understanding what PMI is and how it works is the first step to saving thousands of dollars over the life of your home loan.</p>
<h2>1. What is PMI?</h2>
<p>PMI is insurance that conventional lenders require if your down payment is <strong>less than 20%</strong> of the home's purchase price.</p>
<p>Here is the most important thing to know: <strong>PMI does not protect you.</strong> It protects the <em>lender</em> in case you default on your mortgage payments.</p>
<h2>2. How much does PMI cost?</h2>
<p>PMI typically costs between <strong>0.5% and 1.5%</strong> of your total loan amount annually. For example, on a $400,000 loan, a 1% annual fee equals $4,000 per year—an extra <strong>$333 per month</strong>!</p>
<h2>3. How do I get rid of PMI?</h2>
<ul>
  <li><strong>Automatic Cancellation (78% LTV):</strong> By law, lenders must cancel PMI once your loan balance reaches 78% of the original home value through standard payments.</li>
  <li><strong>Borrower Request (80% LTV):</strong> You can request PMI cancellation once your balance drops to 80% equity.</li>
  <li><strong>Re-appraisal:</strong> If your home's market value has surged, a new appraisal can prove your equity exceeds 20%.</li>
</ul>
<p>Calculate your exact mortgage breakdown and PMI drop-off schedule using our interactive <a href="/loan/mortgage/">Mortgage Calculator</a>!</p>
`
    },
    es: {
      title: "¿Qué es el Seguro Privado de Hipoteca (PMI) y cómo cancelarlo?",
      description: "Aprende qué es el seguro PMI, cuánto cuesta mensualmente y qué pasos exactos dar para eliminarlo de tu cuota hipotecaria.",
      content: `
<p>Al solicitar una hipoteca con una entrada inferior al 20%, verás en la cuota un concepto denominado <strong>Seguro Privado de Hipoteca (PMI)</strong>.</p>
<h2>1. ¿Para qué sirve el PMI?</h2>
<p>El PMI es un seguro exigido por las entidades bancarias cuando el comprador aporta <strong>menos del 20% de entrada</strong>. Su único beneficiario es el <em>banco</em>, que queda protegido frente a un eventual impago.</p>
<h2>2. ¿Cuánto cuesta el PMI?</h2>
<p>Suele oscilar entre el <strong>0,5% y el 1,5%</strong> anual del capital pendiente del préstamo. En una hipoteca de 300.000 €, un 1% representa 3.000 € al año (250 € al mes adicionales en la cuota).</p>
<h2>3. ¿Cómo eliminar el PMI?</h2>
<ul>
  <li><strong>Cancelación automática (78% LTV):</strong> Por ley, la entidad debe eliminarlo cuando el saldo del préstamo baje al 78% del valor tasado original.</li>
  <li><strong>Petición formal (80% LTV):</strong> Puedes solicitar la eliminación tan pronto amortices el 20% del valor de la vivienda.</li>
  <li><strong>Nueva tasación:</strong> Si el mercado inmobiliario ha subido y tu vivienda vale más, una nueva tasación puede certificar que ya cuentas con más del 20% de patrimonio neto.</li>
</ul>
<p>¡Consulta las cuotas exactas y el ahorro en nuestra <a href="/es/loan/mortgage/">Calculadora de Hipotecas</a>!</p>
`
    },
    de: {
      title: "Was ist eine Restschuldversicherung / Hypothekenversicherung und wie spart man sie ein?",
      description: "Erfahren Sie, welche Zusatzkosten bei geringem Eigenkapital anfallen und wie Sie durch Tilgung und Wertsteigerung Kosten senken.",
      content: `
<p>Wer eine Immobilie mit wenig Eigenkapital finanziert, muss häufig eine zusätzliche Kreditversicherung oder Risikoaufschläge einkalkulieren.</p>
<h2>1. Zweck der Kreditausfallversicherung</h2>
<p>Sie schützt die finanzierende Bank vor Mietausfall oder Zahlungsunfähigkeit des Darlehensnehmers.</p>
<h2>2. Höhe der Kosten</h2>
<p>Je nach Beleihungsauslauf betragen die Aufschläge 0,5 % bis 1,5 % der Darlehenssumme pro Jahr.</p>
<p>Prüfen Sie Ihre Konditionen mit unserem <a href="/de/loan/mortgage/">Baufinanzierungs-Rechner</a>!</p>
`
    },
    ja: {
      title: "住宅ローンの保証料・保険料とは？自己資金割合と総支払額への影響",
      description: "頭金が少ない場合に発生する住宅ローン保証料の仕組みと、繰り上げ返済による負担軽減策を分かりやすく解説します。",
      content: `
<p>頭金（自己資金）が物件価格の20%未満の場合、住宅ローンには追加の<strong>保証料や保険料（PMI相当）</strong>が上乗せされるのが一般的です。</p>
<h2>1. 保証料の役割</h2>
<p>保証料は借入人ではなく、万が一の債務不履行時に金融機関を保護するための費用です。</p>
<h2>2. 負担を減らすには</h2>
<p>繰り上げ返済によって元金を減らし、担保評価額に対する借入比率を下げることで、保証料の戻しや金利優遇を得られるケースがあります。</p>
<p>当サイトの <a href="/ja/loan/mortgage/">住宅ローン返済計算機</a> で最適な頭金プランを比較してください！</p>
`
    },
    fr: {
      title: "Assurance Emprunteur et Prêt Immobilier : Coût et démarches de résiliation",
      description: "Comprendre le coût de l'assurance de prêt immobilier et les conditions pour réduire ou renégocier vos mensualités.",
      content: `
<p>Lors d'un achat immobilier avec un apport personnel faible, l'assurance de prêt représente une part majeure de votre mensualité globale.</p>
<h2>1. Rôle de l'assurance</h2>
<p>Elle garantit à l'établissement bancaire le remboursement du capital restant dû en cas d'aléa de la vie.</p>
<p>Faites vos calculs avec notre <a href="/fr/loan/mortgage/">Calculateur de Prêt Immobilier</a> !</p>
`
    },
    pt: {
      title: "Seguro Habitacional no Financiamento Imobiliário: Como funciona e custos",
      description: "Entenda a cobrança do seguro obrigatório (MIP/DFI) e como o valor da entrada reduz o custo total do imóvel.",
      content: `
<p>Ao financiar um imóvel com entrada inferior a 20%, o valor das apólices e taxas adicionais encarece a parcela mensal.</p>
<p>Faça a simulação completa na nossa <a href="/pt/loan/mortgage/">Calculadora de Financiamento Imobiliário</a>!</p>
`
    },
  },

  "student-loan-idr-save": {
    en: {
      title: "Understanding Student Loan IDR: How SAVE, PAYE, and IBR Work",
      description: "Confused by student loan income-driven repayment plans? Learn how discretionary income, poverty guidelines, and plan rules affect your payment.",
      content: `
<p>Federal student loan repayment can feel overwhelming, but government safety nets exist in the form of <strong>Income-Driven Repayment (IDR) plans</strong>.</p>
<p>Instead of demanding a fixed payment that exceeds your budget, these plans cap your monthly payments at a percentage of your <strong>discretionary income</strong>.</p>
<h2>1. What is Discretionary Income?</h2>
<p>To determine what you can realistically afford, the government subtracts a benchmark of the poverty line from your income. The money left over is your discretionary income, and your payment is calculated strictly as a percentage of that figure.</p>
<h2>2. Key Plan Comparison</h2>
<ul>
  <li><strong>The SAVE Plan:</strong> Protects up to 225% of the poverty line and caps payments at 5% to 10% of discretionary income, waiving unpaid accumulated interest.</li>
  <li><strong>PAYE Plan:</strong> Protects 150% of the poverty line, caps payments at 10%, with forgiveness after 20 years.</li>
  <li><strong>IBR Plan:</strong> Caps payments at 10% or 15% with forgiveness after 20 to 25 years.</li>
</ul>
<p>Test your exact repayment schedule with our <a href="/loan/student-loan/">Student Loan IDR Calculator</a>!</p>
`
    },
    es: {
      title: "Planes de Pago de Préstamos Estudiantiles Basados en Ingresos (IDR y SAVE)",
      description: "Descubre cómo funcionan los planes de amortización vinculados a tus ingresos y cómo se calcula la renta disponible para reducir tu cuota mensual.",
      content: `
<p>Los préstamos estudiantiles con amortización vinculada a los ingresos (IDR) adaptan la cuota mensual a la capacidad económica real del graduado.</p>
<h2>1. ¿Qué es el Ingreso Disponible?</h2>
<p>El cálculo protege un umbral mínimo para cubrir necesidades básicas (vivienda, alimentación, salud) y aplica un porcentaje únicamente sobre el exceso de renta.</p>
<h2>2. Principales modalidades</h2>
<ul>
  <li><strong>Plan SAVE:</strong> La opción más ventajosa, que reduce la cuota hasta el 5%-10% del ingreso disponible y elimina los intereses que superen la mensualidad.</li>
  <li><strong>Planes PAYE e IBR:</strong> Limitan el pago al 10%-15% con condonación total de la deuda restante tras 20 o 25 años de pagos regulares.</li>
</ul>
<p>¡Calcula tus cuotas con nuestra <a href="/es/loan/student-loan/">Calculadora de Préstamos Estudiantiles</a>!</p>
`
    },
    de: {
      title: "Einkommensabhängige Studienkredittilgung: Rückzahlungsmodelle im Überblick",
      description: "Erfahren Sie, wie einkommensabhängige Rückzahlungspläne junge Akademiker vor Überschuldung schützen.",
      content: `
<p>Einkommensabhängige Rückzahlungsmodelle passen die monatliche Kreditbelastung an das tatsächliche Gehalt von Berufseinsteigern an.</p>
<p>Übersteigt das Einkommen das Existenzminimum, wird nur der darüber liegende Betrag prozentual für die Darlehenstilgung herangezogen.</p>
<p>Prüfen Sie Ihre Raten in unserem <a href="/de/loan/student-loan/">Studienkredit-Rechner</a>!</p>
`
    },
    ja: {
      title: "所得連動型奨学金・教育ローンの返済プラン：負担軽減と免除の仕組み",
      description: "卒業後の収入水準に合わせて月々の返済額が変動する所得連動返済方式のメリットと計算方法を解説します。",
      content: `
<p>所得連動型返済方式は、新社会人の生活を圧迫しないよう、手取り収入から最低生活費を控除した可処分所得に応じて月々の返済額を決定する仕組みです。</p>
<p>無理のない返済スケジュールを当サイトの <a href="/ja/loan/student-loan/">奨学金返済計算機</a> でシミュレーションしてください。</p>
`
    },
    fr: {
      title: "Remboursement des Prêts Étudiants proportionnel aux revenus",
      description: "Comprendre les dispositifs de modulation des mensualités de crédit étudiant selon votre salaire de début de carrière.",
      content: `
<p>Les plans de remboursement liés aux revenus ajustent automatiquement les échéances mensuelles au salaire net réellement perçu.</p>
<p>Estimez vos mensualités sur notre <a href="/fr/loan/student-loan/">Calculateur de Prêt Étudiant</a> !</p>
`
    },
    pt: {
      title: "Financiamento Estudantil com parcelas proporcionais à renda",
      description: "Entenda como funcionam os modelos de amortização vinculados ao salário dos recém-formados.",
      content: `
<p>Modelos de amortização atrelados à renda evitam que o pagamento de mensalidades comprometa a subsistência de recém-formados.</p>
<p>Simule seus pagamentos na <a href="/pt/loan/student-loan/">Calculadora de Financiamento Estudantil</a>!</p>
`
    },
  },
  "calculadora-hp-12c-como-usar": {
    pt: {
      title: "Calculadora HP 12C: Como Usar, Lógica RPN e Guia Prático Passo a Passo",
      description: "Aprenda como usar a calculadora financeira HP 12C do zero. Guia prático com lógica RPN, cálculo de juros compostos, parcelas PMT (Tabela Price), taxas equivalentes e resolução do Pr Error.",
      content: `
<p>A <strong>calculadora financeira HP 12C</strong> é o instrumento mais consagrado do mercado financeiro mundial e um ícone absoluto no Brasil. Desde o seu lançamento em 1981 pela Hewlett-Packard, ela permanece como a ferramenta padrão em faculdades de Economia, Administração e Ciências Contábeis, no setor bancário e nas principais provas de certificação, como <strong>ANBIMA (CPA-10, CPA-20, CEA)</strong>, <strong>CFP</strong> e perícia judicial.</p>

<p>Se você está começando a usar a HP 12C pela primeira vez ou precisa revisar os cálculos para uma prova ou simulação de financiamento, este guia traz tudo o que você precisa saber com exemplos práticos resolvidos passo a passo.</p>

<p>Você pode testar todos os exemplos deste tutorial diretamente no nosso <a href="/pt/emulators/hp-12c/">Emulador da Calculadora HP 12C Online</a>, 100% grátis no seu navegador com suporte ao teclado físico do computador.</p>

<h2>1. Por que a HP 12C Não Tem Tecla de Igual (=)? A Lógica RPN</h2>
<p>A primeira grande surpresa de quem pega uma HP 12C pela primeira vez é a ausência da tecla de igual (<strong>=</strong>) e de parênteses.</p>
<p>A HP 12C opera com <strong>Notação Polonesa Reversa (RPN)</strong>. Em vez de digitar a fórmula na ordem tradicional (<code>2 + 3 =</code>), você insere os números primeiro em uma pilha operacional de memória e aperta o operador aritmético em seguida.</p>

<h3>A Pilha de 4 Registradores (Stack: X, Y, Z, T)</h3>
<ul>
  <li><strong>Registrador X:</strong> É o visor da calculadora. Exibe o número digitado no momento ou o resultado da operação anterior.</li>
  <li><strong>Registrador Y:</strong> O nível imediatamente superior. Quando você pressiona <code>ENTER</code>, o valor de X sobe para Y.</li>
  <li><strong>Registradores Z e T:</strong> Níveis mais altos que guardam resultados intermediários automaticamente em contas com múltiplos fatores.</li>
</ul>

<h3>Como Somar e Calcular na HP 12C (Passo a Passo)</h3>
<p>Para calcular <strong>25 + 15</strong> na HP 12C:</p>
<ol>
  <li>Digite <code>25</code></li>
  <li>Pressione <code>ENTER</code> (o valor 25 fica armazenado em Y)</li>
  <li>Digite <code>15</code></li>
  <li>Pressione a operação <code>+</code></li>
  <li><strong>Resultado imediato no visor: 40.00</strong></li>
</ol>

<p>Para contas encadeadas como <code>(10 + 5) × (8 - 2)</code>:</p>
<ol>
  <li>Digite <code>10</code>, aperte <code>ENTER</code>, digite <code>5</code>, aperte <code>+</code> (dá 15)</li>
  <li>Digite <code>8</code>, aperte <code>ENTER</code>, digite <code>2</code>, aperte <code>-</code> (dá 6)</li>
  <li>Aperte <code>×</code> (multiplica 15 por 6)</li>
  <li><strong>Resultado final: 90.00</strong></li>
</ol>
<p>Sem rascunhos de papel e sem risco de errar a ordem das operações!</p>

<h2>2. As Teclas Financeiras Fundamentais (TVM)</h2>
<p>Na primeira linha da calculadora encontram-se as 5 teclas de ouro da matemática financeira:</p>
<ul>
  <li><strong>n (Períodos):</strong> Número de parcelas ou meses do investimento/financiamento.</li>
  <li><strong>i (Taxa de juros):</strong> Taxa de juros periódica em percentual (ex.: 1.5 para 1,5% ao mês).</li>
  <li><strong>PV (Present Value):</strong> Valor presente ou capital inicial financiado/aplicado.</li>
  <li><strong>PMT (Payment):</strong> Valor da prestação ou parcela periódica constante (Tabela Price).</li>
  <li><strong>FV (Future Value):</strong> Valor futuro ou montante final acumulado.</li>
</ul>

<p><strong>Atenção à Convenção de Sinais:</strong> O dinheiro que sai do seu bolso deve ser lançado com sinal negativo usando a tecla <code>CHS</code> (Change Sign). Se você aplica R$ 5.000, digite <code>5000 CHS PV</code>.</p>

<h2>3. Tutoriais de Cálculos Mais Buscados no Brasil</h2>

<h3>Como Calcular Juros Compostos e Valor Futuro (FV)</h3>
<p><strong>Cenário:</strong> Aplicação de R$ 5.000,00 a uma taxa de juros de 1,2% ao mês durante 24 meses. Qual o montante final?</p>
<ol>
  <li>Limpe a memória financeira: <code>f</code> <code>CLX</code> (ou <code>f</code> <code>FIN</code>)</li>
  <li>Digite <code>5000</code> <code>CHS</code> <code>PV</code></li>
  <li>Digite <code>1.2</code> <code>i</code></li>
  <li>Digite <code>24</code> <code>n</code></li>
  <li>Pressione <code>FV</code></li>
  <li><strong>Resultado: R$ 6.649,22</strong></li>
</ol>

<h3>Como Calcular a Parcela do Financiamento (PMT - Tabela Price)</h3>
<p><strong>Cenário:</strong> Financiamento de um veículo de R$ 30.000,00 em 36 prestações mensais a 1,5% ao mês.</p>
<ol>
  <li>Limpe as variáveis: <code>f</code> <code>CLX</code></li>
  <li>Digite <code>30000</code> <code>PV</code></li>
  <li>Digite <code>1.5</code> <code>i</code></li>
  <li>Digite <code>36</code> <code>n</code></li>
  <li>Pressione <code>PMT</code></li>
  <li><strong>Resultado: -R$ 1.085,82</strong> (valor da parcela mensal)</li>
</ol>

<h3>Como Calcular o Prazo (n) em Juros Compostos</h3>
<p><strong>Cenário:</strong> Em quanto tempo R$ 10.000,00 dobram para R$ 20.000,00 rendendo 1,0% ao mês?</p>
<ol>
  <li><code>f</code> <code>CLX</code></li>
  <li><code>10000</code> <code>CHS</code> <code>PV</code></li>
  <li><code>20000</code> <code>FV</code></li>
  <li><code>1</code> <code>i</code></li>
  <li>Pressione <code>n</code></li>
  <li><strong>Resultado: 70 meses</strong></li>
</ol>

<h3>Como Calcular Juros Simples na HP 12C</h3>
<p>Para juros simples comerciais (ano de 360 dias), use a função <code>f INT</code>:</p>
<ol>
  <li>Digite o número de dias e tecle <code>n</code> (ex.: 90 n)</li>
  <li>Digite a taxa de juros anual e tecle <code>i</code> (ex.: 18 i)</li>
  <li>Digite o capital com sinal negativo e tecle <code>PV</code> (ex.: 12000 CHS PV)</li>
  <li>Pressione <code>f</code> <code>INT</code></li>
  <li><strong>Resultado dos Juros: R$ 540,00</strong> (pressione <code>+</code> para somar ao capital e obter R$ 12.540,00).</li>
</ol>

<h3>Como Calcular Taxas Equivalentes (Selic Anual para Mensal)</h3>
<p>No Brasil, uma taxa anual de 13,25% a.a. não pode ser dividida por 12 em juros compostos. A equivalência é: <code>(1 + i_ano) = (1 + i_mês)¹²</code>.</p>
<ol>
  <li>Digite <code>1</code> <code>ENTER</code> <code>13.25</code> <code>ENTER</code> <code>100</code> <code>÷</code> <code>+</code> (resulta 1,1325)</li>
  <li>Digite <code>1</code> <code>ENTER</code> <code>12</code> <code>÷</code> (resulta 0,08333)</li>
  <li>Pressione <code>yˣ</code></li>
  <li>Digite <code>1</code> <code>-</code> <code>100</code> <code>×</code></li>
  <li><strong>Resultado: 1,041% ao mês</strong></li>
</ol>

<h2>4. Resolução de Problemas e Dúvidas Frequentes</h2>

<h3>Como Zerar e Limpar a Calculadora HP 12C</h3>
<ul>
  <li><code>CLX</code>: limpa apenas o número digitado na tela.</li>
  <li><code>f</code> <code>CLX</code>: limpa os registradores financeiros (n, i, PV, PMT, FV). Sempre faça isso antes de uma conta nova!</li>
  <li><code>f</code> <code>REG</code>: limpa todos os registradores, memórias gerais e estatística.</li>
</ul>

<h3>Como Aumentar as Casas Decimais</h3>
<p>Pressione a tecla amarela <code>f</code> seguida do número de casas desejado (0 a 9): <code>f 2</code> para duas casas (0.00), <code>f 4</code> para quatro casas (0.0000) e <code>f 9</code> para máxima precisão.</p>

<h3>O que Fazer Quando Aparece 'Pr Error'?</h3>
<p>O <strong>Pr Error</strong> significa <em>Programming Error</em>. Ocorre quando a tecla <code>f P/R</code> foi acionada sem querer, travando a máquina no modo de programação. Para destravar imediatamente, pressione qualquer tecla (como <code>CLX</code> ou <code>f P/R</code>). Se a calculadora física travar de vez, retire as pilhas ou segure a tecla <code>-</code> e aperte <code>ON</code> para efetuar o reset de fábrica.</p>

<h2>5. Experimente Gratuitamente no Navegador</h2>
<p>Você não precisa gastar centenas de reais nem arriscar baixar emuladores com vírus no computador. Acesse a nossa <a href="/pt/emulators/hp-12c/">Calculadora HP 12C Online Grátis</a> e faça suas simulações agora mesmo com cronograma de amortização automático e total privacidade!</p>
`
    },
    en: {
      title: "HP 12C Financial Calculator: Complete Beginner Guide, RPN Logic & Tutorials",
      description: "Learn how to use the classic HP 12C financial calculator. Master Reverse Polish Notation (RPN), TVM compound interest, mortgage payments (PMT), and how to fix Pr Error.",
      content: `
<p>The <strong>HP 12C financial calculator</strong> is the gold standard for investment bankers, real estate appraisers, and students preparing for the CFA or CFP examinations. First introduced by Hewlett-Packard in 1981, its legendary durability, mathematical precision, and Reverse Polish Notation (RPN) make it a fixture on trading desks worldwide.</p>

<p>You can practice all the tutorials below directly on our free interactive <a href="/emulators/hp-12c/">HP 12C Calculator Online Emulator</a> with full computer keyboard support.</p>

<h2>1. Why Doesn't the HP 12C Have an Equals (=) Key? RPN Explained</h2>
<p>Traditional algebraic calculators evaluate formulas as entered (e.g., <code>2 + 3 =</code>). The HP 12C uses <strong>Reverse Polish Notation (RPN)</strong>, which evaluates calculations using an automatic 4-level memory stack (X, Y, Z, and T registers).</p>
<p>In RPN, you load numbers first and press the operator afterward. For example, to add 25 and 15:</p>
<ol>
  <li>Type <code>25</code></li>
  <li>Press <code>ENTER</code> (pushes 25 to register Y)</li>
  <li>Type <code>15</code></li>
  <li>Press <code>+</code></li>
  <li><strong>Display reads: 40.00</strong></li>
</ol>
<p>This eliminates the need for parentheses and equal keys in complex multi-step financial formulas.</p>

<h2>2. The Core Financial Registers (TVM)</h2>
<p>The top row features the 5 foundational Time Value of Money registers:</p>
<ul>
  <li><strong>n:</strong> Number of periods (months, years, days).</li>
  <li><strong>i:</strong> Interest rate per compounding period (e.g. 1.2 for 1.2%).</li>
  <li><strong>PV:</strong> Present Value (initial deposit or loan principal).</li>
  <li><strong>PMT:</strong> Periodic Payment (monthly mortgage or annuity payment).</li>
  <li><strong>FV:</strong> Future Value (final accumulated balance).</li>
</ul>
<p>Remember the cash flow convention: money leaving your pocket is entered as a negative number using <code>CHS</code> (Change Sign).</p>

<h2>3. Step-by-Step Financial Tutorials</h2>
<h3>Solving for Future Value (Compound Interest)</h3>
<p>Invest $5,000 for 24 months at 1.2% monthly interest:</p>
<ol>
  <li>Clear financial registers: <code>f</code> <code>CLX</code></li>
  <li><code>5000</code> <code>CHS</code> <code>PV</code></li>
  <li><code>1.2</code> <code>i</code></li>
  <li><code>24</code> <code>n</code></li>
  <li>Press <code>FV</code> → <strong>Result: $6,649.22</strong></li>
</ol>

<h3>Solving for Monthly Loan Payment (PMT)</h3>
<p>A $30,000 car loan over 36 months at 1.5% monthly interest:</p>
<ol>
  <li><code>f</code> <code>CLX</code></li>
  <li><code>30000</code> <code>PV</code></li>
  <li><code>1.5</code> <code>i</code></li>
  <li><code>36</code> <code>n</code></li>
  <li>Press <code>PMT</code> → <strong>Result: -$1,085.82</strong></li>
</ol>

<h2>4. Troubleshooting Common Issues</h2>
<h3>Clearing Memory</h3>
<ul>
  <li><code>CLX</code>: Clears the displayed number (X register).</li>
  <li><code>f</code> <code>CLX</code> (CLEAR FIN): Clears TVM registers (n, i, PV, PMT, FV).</li>
  <li><code>f</code> <code>REG</code>: Clears all registers and general memories.</li>
</ul>

<h3>Changing Decimal Places</h3>
<p>Press <code>f</code> followed by the desired number of digits: <code>f 2</code> for two decimals, <code>f 4</code> for four, or <code>f 9</code> for full precision.</p>

<h3>How to Fix "Pr Error"</h3>
<p><strong>Pr Error</strong> indicates a Programming Error, typically triggered when <code>f P/R</code> was pressed accidentally. Press any key like <code>CLX</code> or <code>f P/R</code> to return to normal calculation mode immediately.</p>

<p>Experience the authentic HP 12C right in your browser with our <a href="/emulators/hp-12c/">Free Online HP 12C Calculator Emulator</a>!</p>
`
    }
  },

  "what-is-p-y-on-financial-calculator": {
    en: {
      title: "What is P/Y on a Financial Calculator? (And How to Set It Right)",
      description: "Learn what P/Y (Payments per Year) and C/Y (Compounding per Year) mean on financial calculators like the TI BA II Plus, how to change them, and how to avoid the #1 TVM trap.",
      content: `
<p>If you have ever used a financial calculator—such as the <strong>Texas Instruments TI BA II Plus</strong>, <strong>TI BA II Plus Professional</strong>, or <strong>HP 10bII+</strong>—you have likely encountered the setting <strong>P/Y</strong>.</p>
<p>For university finance students, CFA candidates, and real estate professionals, <strong>P/Y is the single most common reason financial calculations produce completely wrong answers</strong>. A simple setting mismatch can turn an easy Time Value of Money (TVM) exam problem or loan amortization schedule into a costly calculation mistake.</p>
<p>Here is everything you need to know about what P/Y means, how it interacts with C/Y, how to set it correctly, and how to avoid the hidden default trap.</p>

<h2>What Does P/Y Mean?</h2>
<p><strong>P/Y</strong> stands for <strong>Payments per Year</strong> (or Periods per Year). It informs the calculator's internal processor how many cash flow payments occur within a single 12-month calendar year:</p>
<ul>
  <li><strong>P/Y = 12:</strong> Monthly payments (the standard for mortgages, auto loans, credit cards, and personal loans).</li>
  <li><strong>P/Y = 1:</strong> Annual payments (lump-sum investments, annual pension deposits, and traditional finance textbook problems).</li>
  <li><strong>P/Y = 2:</strong> Semi-annual payments (standard for US Treasury and corporate bonds).</li>
  <li><strong>P/Y = 4:</strong> Quarterly payments (quarterly stock dividends, corporate bond disbursements).</li>
  <li><strong>P/Y = 26 or 52:</strong> Bi-weekly or weekly loan payments.</li>
</ul>
<p>When you enter an annual interest rate into <strong>I/Y</strong> (Interest per Year), the calculator automatically divides that annual percentage by the <strong>P/Y</strong> value to determine the interest applied to each individual payment period.</p>

<h2>What is C/Y (Compounding Periods per Year)?</h2>
<p>Directly paired with P/Y is <strong>C/Y</strong>, which stands for <strong>Compounding Periods per Year</strong>.</p>
<p>While P/Y controls how often <em>you make or receive a payment</em>, C/Y controls how often the financial institution <em>calculates and adds accumulated interest</em> to the principal balance:</p>
<ul>
  <li>On most consumer loans in the United States and international markets, interest compounds with each payment: <strong>P/Y = 12 and C/Y = 12</strong>.</li>
  <li>On the Texas Instruments BA II Plus, <strong>when you enter a number for P/Y, the calculator automatically updates C/Y to the same value</strong>.</li>
  <li>In certain jurisdictions and financial products, P/Y and C/Y differ. For instance, <strong>Canadian residential mortgages</strong> legally compound semi-annually (C/Y = 2) while payments are made monthly (P/Y = 12).</li>
</ul>

<h2>The #1 Trap: Why P/Y Ruins Student & Investor Calculations</h2>
<p>The single greatest source of errors on financial calculators is the <strong>Factory Default Trap</strong>.</p>
<p>When you unpack a new TI BA II Plus, change its battery, or reset its memory, <strong>the calculator defaults to P/Y = 12 and C/Y = 12</strong>.</p>
<h3>The Scenario That Fails:</h3>
<p>Imagine a standard introductory finance question: <em>"You deposit $5,000 today into an investment yielding 8% compounded annually for 5 years. What is its Future Value (FV)?"</em></p>
<p>If you enter:</p>
<ul>
  <li><code>N = 5</code> (5 years)</li>
  <li><code>I/Y = 8</code> (8% annual interest)</li>
  <li><code>PV = -5000</code> (initial deposit)</li>
  <li><code>PMT = 0</code></li>
  <li>Compute <code>FV</code></li>
</ul>
<p>If your calculator is set to <strong>P/Y = 12</strong>, it assumes your 5 periods are <strong>5 months</strong>, and it converts your 8% annual rate into a monthly rate of <strong>0.667% per period</strong>.</p>
<ul>
  <li><strong>What the calculator gives you (WRONG):</strong> $5,168.91</li>
  <li><strong>The true mathematical answer (CORRECT):</strong> $7,346.64</li>
</ul>
<p>Because of this hidden setting, thousands of exam questions and investment analyses are botched every year.</p>

<h2>The Two Industry Standards: Which Setting Should You Use?</h2>
<p>In financial modeling and professional practice, two different schools of thought exist:</p>
<h3>Approach A: The "Always P/Y = 1" Rule (Recommended for CFA/FRM & Students)</h3>
<p>Top CFA prep programs (such as Kaplan Schweser) and university professors overwhelmingly recommend setting <strong>P/Y = 1 and C/Y = 1 permanently</strong>.</p>
<p>Under this method:</p>
<ol>
  <li>You keep <code>P/Y = 1</code> forever.</li>
  <li>For annual problems: enter years as <code>N</code> and annual rate as <code>I/Y</code>.</li>
  <li>For monthly problems: you manually enter <code>N = years × 12</code> and <code>I/Y = annual rate / 12</code>.</li>
</ol>
<p><strong>Why this wins:</strong> You never have to worry about an invisible internal setting altering your math. What you type on the keypad is exactly what the formula calculates.</p>

<h3>Approach B: The "P/Y = 12" Rule (Common for Mortgage & Auto Bankers)</h3>
<p>Loan officers who exclusively write 30-year mortgages or 60-month auto loans often keep <code>P/Y = 12</code> and <code>C/Y = 12</code>.</p>
<p>Under this method:</p>
<ol>
  <li><code>N</code> is entered as total months (e.g., <code>360</code> for a 30-year loan).</li>
  <li><code>I/Y</code> is entered as the unadjusted annual nominal rate (e.g., <code>6.5</code> for 6.5%).</li>
  <li>The calculator handles the division internally.</li>
</ol>

<h2>Step-by-Step Keystrokes to Check and Change P/Y</h2>
<h3>On the Texas Instruments TI BA II Plus & Professional:</h3>
<ol>
  <li>Press <code>[2nd]</code> then press <code>[I/Y]</code> (this opens the secondary <code>P/Y</code> menu).</li>
  <li>The LCD screen will display <code>P/Y = </code> along with the active setting (e.g., <code>12.00</code>).</li>
  <li>Type your desired frequency (e.g., press <code>1</code> or <code>12</code>).</li>
  <li><strong>CRITICAL STEP:</strong> Press <code>[ENTER]</code>. If you do not press <code>[ENTER]</code>, your change is not saved!</li>
  <li>Press the down arrow key <code>[↓]</code> to inspect <code>C/Y</code>. Ensure it matches your scenario.</li>
  <li>Press <code>[2nd]</code> then <code>[CPT]</code> (QUIT) to exit back to standard calculator mode.</li>
</ol>

<h3>On the HP 10bII+:</h3>
<ol>
  <li>Type the desired number (e.g., <code>12</code> or <code>1</code>).</li>
  <li>Press the orange <code>[Shift]</code> key.</li>
  <li>Press <code>[PMT]</code> (which has <code>P/YR</code> printed above it in orange).</li>
</ol>

<h3>What About the HP 12C?</h3>
<p>The classic <strong>HP 12C</strong> does not have a P/Y menu. It relies strictly on Reverse Polish Notation (RPN) and periodic inputs:</p>
<ul>
  <li>For monthly calculations on the HP 12C, enter total months into <code>n</code> (or press <code>g</code> then <code>12X</code>).</li>
  <li>Enter the annual interest rate divided by 12 into <code>i</code> (or press <code>g</code> then <code>12÷</code>).</li>
</ul>

<h2>Worked Example: Calculating a Car Loan Payment</h2>
<p>Let's calculate the monthly payment on a <strong>$25,000 auto loan</strong> at <strong>6% APR</strong> over <strong>5 years</strong> (60 monthly payments):</p>
<table class="w-full text-left border-collapse border border-hairline my-4 text-xs sm:text-sm">
  <thead>
    <tr class="bg-canvas-soft border-b border-hairline">
      <th class="p-2.5 font-bold text-ink">Key / Variable</th>
      <th class="p-2.5 font-bold text-ink">Approach A (P/Y = 1)</th>
      <th class="p-2.5 font-bold text-ink">Approach B (P/Y = 12)</th>
      <th class="p-2.5 font-bold text-ink">Common Mistake (P/Y = 12 with manual divide)</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">P/Y Setting</td>
      <td class="p-2.5 font-mono">1</td>
      <td class="p-2.5 font-mono">12</td>
      <td class="p-2.5 font-mono">12</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">N</td>
      <td class="p-2.5 font-mono">60 (5 × 12)</td>
      <td class="p-2.5 font-mono">60</td>
      <td class="p-2.5 font-mono">60</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">I/Y</td>
      <td class="p-2.5 font-mono">0.5 (6% / 12)</td>
      <td class="p-2.5 font-mono">6.0 (Annual APR)</td>
      <td class="p-2.5 font-mono">0.5 (Divided twice!)</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">PV</td>
      <td class="p-2.5 font-mono">25,000</td>
      <td class="p-2.5 font-mono">25,000</td>
      <td class="p-2.5 font-mono">25,000</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">FV</td>
      <td class="p-2.5 font-mono">0</td>
      <td class="p-2.5 font-mono">0</td>
      <td class="p-2.5 font-mono">0</td>
    </tr>
    <tr class="bg-canvas-soft/50 font-bold">
      <td class="p-2.5">Compute PMT</td>
      <td class="p-2.5 text-emerald-600 dark:text-emerald-400 font-mono">-$483.32 ✅</td>
      <td class="p-2.5 text-emerald-600 dark:text-emerald-400 font-mono">-$483.32 ✅</td>
      <td class="p-2.5 text-rose-600 dark:text-rose-400 font-mono">-$422.09 ❌</td>
    </tr>
  </tbody>
</table>
<p>Notice how in the third column, dividing the interest rate manually while leaving <code>P/Y = 12</code> caused the calculator to divide the rate <em>twice</em>, producing an incorrect payment of -$422.09 instead of -$483.32!</p>

<h2>Test It Online Without Buying Hardware</h2>
<p>Want to practice changing P/Y and testing TVM keystrokes without risking exam errors?</p>
<ul>
  <li>Practice on our authentic <a href="/emulators/ti-ba-ii-plus/">TI BA II Plus Online Simulator</a> with real-time worksheet synchronization.</li>
  <li>Run instant multi-variable scenarios on our <a href="/finance/tvm/">TVM Calculator</a>.</li>
  <li>Compare loan options on our <a href="/loan/calculator/">Loan Payment Calculator</a> with complete amortization breakdowns.</li>
  <li>If you prefer RPN keystrokes, try our free <a href="/emulators/hp-12c/">HP 12C Calculator Emulator</a>.</li>
</ul>
`
    },
    es: {
      title: "¿Qué es P/Y en una calculadora financiera y cómo configurarlo?",
      description: "Descubre el significado de P/Y (pagos por año) y C/Y (capitalizaciones por año) en calculadoras financieras como la TI BA II Plus, cómo ajustarlos y cómo evitar errores en TVM.",
      content: `
<p>Si alguna vez has utilizado una calculadora financiera —como la <strong>Texas Instruments TI BA II Plus</strong>, la <strong>TI BA II Plus Professional</strong> o la <strong>HP 10bII+</strong>— seguro te has encontrado con el parámetro <strong>P/Y</strong>.</p>
<p>Para estudiantes universitarios de finanzas, candidatos al CFA y profesionales inmobiliarios, <strong>el ajuste incorrecto de P/Y es la causa principal de cálculos erróneos</strong>. Un desajuste en este valor puede arruinar un examen de Valor del Dinheiro en el Tiempo (TVM) o generar cuadros de amortización con cifras completamente equivocadas.</p>
<p>A continuación te explicamos qué significa P/Y, su relación con C/Y, cómo configurarlo paso a paso y qué regla de oro seguir para no equivocarte nunca.</p>

<h2>¿Qué significa P/Y?</h2>
<p><strong>P/Y</strong> son las siglas de <strong>Payments per Year</strong> (Pagos o Periodos por Año). Indica al procesador interno de la calculadora cuántos pagos o cuotas se realizan a lo largo de un año calendario (12 meses):</p>
<ul>
  <li><strong>P/Y = 12:</strong> Pagos mensuales (el estándar en hipotecas, préstamos personales, tarjetas de crédito y créditos de auto).</li>
  <li><strong>P/Y = 1:</strong> Pagos anuales (inversiones a tanto alzado, depósitos anuales y la mayoría de ejercicios teóricos de libros de texto).</li>
  <li><strong>P/Y = 2:</strong> Pagos semestrales (habitual en bonos corporativos y deuda soberana).</li>
  <li><strong>P/Y = 4:</strong> Pagos trimestrales (dividendos de acciones o cupones trimestrales).</li>
  <li><strong>P/Y = 26 o 52:</strong> Pagos quincenales o semanales.</li>
</ul>
<p>Cuando introduces la tasa de interés anual en <strong>I/Y</strong> (Interest per Year), la calculadora divide automáticamente ese porcentaje entre el valor configurado en <strong>P/Y</strong> para aplicar el interés correspondiente a cada cuota.</p>

<h2>¿Qué es C/Y (Periodos de Capitalización por Año)?</h2>
<p>Estrechamente vinculado a P/Y está <strong>C/Y</strong> (Compounding Periods per Year / Periodos de Capitalización por Año).</p>
<p>Mientras que P/Y define la frecuencia con la que <em>tú pagas o cobras</em>, C/Y indica cada cuánto tiempo la entidad financiera <em>liquida y capitaliza los intereses devengados</em> sumándolos al capital:</p>
<ul>
  <li>En la mayoría de préstamos bancarios, la capitalización coincide con el pago: <strong>P/Y = 12 y C/Y = 12</strong>.</li>
  <li>En la Texas Instruments BA II Plus, <strong>al modificar P/Y, la calculadora actualiza automáticamente C/Y con el mismo valor</strong>.</li>
  <li>En algunos mercados internacionales existen diferencias: por ejemplo, las hipotecas en Canadá capitalizan por ley semestralmente (C/Y = 2) aunque las cuotas sean mensuales (P/Y = 12).</li>
</ul>

<h2>El Error Nº 1: La trampa de la configuración de fábrica</h2>
<p>El error más recurrente ocurre por la <strong>configuración predeterminada de fábrica</strong>.</p>
<p>Al estrenar una TI BA II Plus, sustituir su batería o restablecer su memoria, <strong>el dispositivo viene por defecto con P/Y = 12 y C/Y = 12</strong>.</p>
<h3>El ejemplo donde todo falla:</h3>
<p>Imagina una pregunta clásica de examen: <em>"Inviertes 5.000 € hoy al 8% de interés anual compuesto durante 5 años. ¿Cuál es el Valor Futuro (FV)?"</em></p>
<p>Si introduces:</p>
<ul>
  <li><code>N = 5</code> (5 años)</li>
  <li><code>I/Y = 8</code> (8% de interés anual)</li>
  <li><code>PV = -5000</code> (depósito inicial)</li>
  <li><code>PMT = 0</code></li>
  <li>Calculas <code>FV</code></li>
</ul>
<p>Si la calculadora sigue en <strong>P/Y = 12</strong>, interpretará que 5 no son 5 años sino <strong>5 meses</strong>, y dividirá el 8% anual entre 12 (0,667% mensual):</p>
<ul>
  <li><strong>Resultado de la calculadora (INCORRECTO):</strong> 5.168,91 €</li>
  <li><strong>Resultado matemático real (CORRECTO):</strong> 7.346,64 €</li>
</ul>

<h2>Los dos métodos de trabajo: ¿Cuál deberías utilizar?</h2>
<h3>Método A: La regla de "Mantener siempre P/Y = 1" (Recomendado para exámenes CFA y universitarios)</h3>
<p>Las principales academias de preparación para certificaciones financieras internacionales recomiendan dejar <strong>P/Y = 1 y C/Y = 1 de forma permanente</strong>.</p>
<p>Bajo este esquema:</p>
<ol>
  <li>Mantienes <code>P/Y = 1</code> siempre.</li>
  <li>Para problemas anuales: introduces los años en <code>N</code> y la tasa anual en <code>I/Y</code>.</li>
  <li>Para préstamos mensuales: conviertes manualmente <code>N = años × 12</code> e <code>I/Y = tasa anual / 12</code>.</li>
</ol>
<p><strong>Ventaja:</strong> Eliminas por completo el riesgo de que una variable oculta altere tus cálculos. Lo que digitas es exactamente lo que se calcula.</p>

<h3>Método B: La regla de "P/Y = 12" (Habitual en banca e hipotecas)</h3>
<p>Los analistas hipotecarios que calculan préstamos a 30 años configuran <code>P/Y = 12</code> y <code>C/Y = 12</code>:</p>
<ol>
  <li>Introducen <code>N</code> en meses totales (ej. <code>360</code>).</li>
  <li>Introducen <code>I/Y</code> con la tasa nominal anual directa (ej. <code>6.5</code>).</li>
  <li>La máquina realiza la conversión periódica internamente.</li>
</ol>

<h2>Cómo cambiar el valor de P/Y paso a paso</h2>
<h3>En la Texas Instruments TI BA II Plus & Professional:</h3>
<ol>
  <li>Presiona la tecla amarilla <code>[2nd]</code> y luego <code>[I/Y]</code> (accedes al menú secundario <code>P/Y</code>).</li>
  <li>La pantalla mostrará <code>P/Y = </code> con el valor actual (ej. <code>12.00</code>).</li>
  <li>Escribe el nuevo número deseado (ej. presiona <code>1</code> o <code>12</code>).</li>
  <li><strong>PASO VITAL:</strong> Presiona la tecla <code>[ENTER]</code>. ¡Si no presionas ENTER, el cambio no se guardará!</li>
  <li>Pulsa la flecha abajo <code>[↓]</code> para verificar <code>C/Y</code>.</li>
  <li>Pulsa <code>[2nd]</code> y después <code>[CPT]</code> (QUIT) para regresar a la pantalla de cálculo habitual.</li>
</ol>

<h3>En la HP 10bII+:</h3>
<ol>
  <li>Escribe el número deseado (ej. <code>12</code> o <code>1</code>).</li>
  <li>Presiona la tecla naranja <code>[Shift]</code>.</li>
  <li>Presiona la tecla <code>[PMT]</code> (que tiene serigrafiado <code>P/YR</code> en naranja).</li>
</ol>

<h3>¿Y en la clásica HP 12C?</h3>
<p>La emblemática <strong>HP 12C</strong> no tiene menú de P/Y, ya que opera bajo Notación Polaca Inversa (RPN) y lógica periódica directa:</p>
<ul>
  <li>Para operaciones mensuales, introduce los meses en <code>n</code> (o pulsa <code>g</code> seguido de <code>12X</code>).</li>
  <li>Divide el interés anual entre 12 antes de pulsar <code>i</code> (o pulsa <code>g</code> seguido de <code>12÷</code>).</li>
</ul>

<h2>Prueba tus cálculos online gratis</h2>
<p>¿Quieres practicar cambios de P/Y y funciones de TVM sin depender de un dispositivo físico?</p>
<ul>
  <li>Prueba nuestro <a href="/es/emulators/ti-ba-ii-plus/">Simulador TI BA II Plus Online</a> con sincronización en tiempo real.</li>
  <li>Resuelve incógnitas de capital y ahorro con la <a href="/es/finance/tvm/">Calculadora TVM (Valor del Dinero en el Tiempo)</a>.</li>
  <li>Calcula cuotas y amortizaciones completas con la <a href="/es/loan/calculator/">Calculadora de Préstamos</a>.</li>
  <li>Si prefieres el sistema RPN, utiliza nuestro <a href="/es/emulators/hp-12c/">Emulador Virtual HP 12C</a>.</li>
</ul>
`
    },
    de: {
      title: "Was bedeutet P/Y auf dem Finanzrechner? Erklärung & richtige Einstellung",
      description: "Erfahren Sie, was P/Y (Zahlungen pro Jahr) und C/Y (Zinsperioden pro Jahr) auf Finanzrechnern wie dem TI BA II Plus bedeuten, wie man sie einstellt und typische TVM-Fehler vermeidet.",
      content: `
<p>Wer mit einem Finanzrechner arbeitet – wie dem <strong>Texas Instruments TI BA II Plus</strong>, dem <strong>TI BA II Plus Professional</strong> oder dem <strong>HP 10bII+</strong> – stößt unweigerlich auf den Menüpunkt <strong>P/Y</strong>.</p>
<p>Für Wirtschaftsstudenten, CFA-Kandidaten und Immobilieninvestoren ist <strong>eine falsche P/Y-Einstellung die häufigste Ursache für fehlerhafte Rechenergebnisse</strong>. Eine fehlerhafte Periodeneinstellung kann selbst einfache TVM-Aufgaben (Time Value of Money) oder Tilgungspläne komplett verfälschen.</p>
<p>In diesem Leitfaden erfahren Sie, was P/Y bedeutet, wie es mit C/Y zusammenhängt, wie Sie den Rechner korrekt programmieren und typische Fallen sicher umgehen.</p>

<h2>Was bedeutet P/Y genau?</h2>
<p><strong>P/Y</strong> steht für <strong>Payments per Year</strong> (Zahlungen pro Kalenderjahr). Diese Variable definiert, wie viele Zahlungen oder Raten innerhalb eines 12-monatigen Jahreszyklus anfallen:</p>
<ul>
  <li><strong>P/Y = 12:</strong> Monatliche Raten (Standard bei Annuitätendarlehen, Ratenkrediten und Autofinanzierungen).</li>
  <li><strong>P/Y = 1:</strong> Jährliche Zahlungen (Einmalanlagen, jährliche Sparraten und typische universitäre Prüfungsaufgaben).</li>
  <li><strong>P/Y = 2:</strong> Halbjährliche Zahlungen (üblich bei US-Treasuries und festverzinslichen Industrieanleihen).</li>
  <li><strong>P/Y = 4:</strong> Quartalsweise Zahlungen (vierteljährliche Dividendenausschüttungen).</li>
  <li><strong>P/Y = 26 oder 52:</strong> Zweiwöchentliche bzw. wöchentliche Tilgungsmodelle.</li>
</ul>
<p>Wenn Sie den Jahreszins unter <strong>I/Y</strong> (Interest per Year) eingeben, dividiert der interne Prozessor diesen Nominalzins durch den Wert von <strong>P/Y</strong>, um den Zinsanspruch pro Zahlungsperiode zu ermitteln.</p>

<h2>Was bedeutet C/Y (Compounding Periods per Year)?</h2>
<p>Direkt mit P/Y gekoppelt ist <strong>C/Y</strong> (Zinseszins- bzw. Kapitalisierungsperioden pro Jahr).</p>
<p>Während P/Y angibt, wie oft <em>Zahlungen fließen</em>, bestimmt C/Y, wie häufig <em>Zinsen berechnet und dem Kapital zugeschlagen</em> werden:</p>
<ul>
  <li>Bei den meisten europäischen und US-Konsumentenkrediten fallen Zahlung und Zinseszinsperiode zusammen: <strong>P/Y = 12 und C/Y = 12</strong>.</li>
  <li>Beim TI BA II Plus passt der Rechner beim Ändern von P/Y den Wert von C/Y <strong>automatisch auf dieselbe Zahl</strong> an.</li>
  <li>Bei speziellen Produkten weichen die Werte ab: So werden kanadische Wohnbauhypotheken gesetzlich halbjährlich verzinst (C/Y = 2), die Tilgung erfolgt jedoch monatlich (P/Y = 12).</li>
</ul>

<h2>Die häufigste Falle: Die Werkseinstellung des Rechners</h2>
<p>Die häufigste Fehlerquelle ist die <strong>Werkseinstellung nach dem Zurücksetzen</strong>.</p>
<p>Nach einem Batteriewechsel, Neukauf oder RAM-Reset steht der TI BA II Plus standardmäßig auf <strong>P/Y = 12 und C/Y = 12</strong>.</p>
<h3>Klassisches Fehlerszenario:</h3>
<p>Aufgabe: <em>„Sie legen heute 5.000 € zu 8 % Jahreszins für 5 Jahre an. Wie hoch ist der Endwert (FV)?“</em></p>
<p>Eingabe:</p>
<ul>
  <li><code>N = 5</code> (5 Jahre)</li>
  <li><code>I/Y = 8</code> (8 % Jahreszins)</li>
  <li><code>PV = -5000</code> (Anfangsinvestition)</li>
  <li><code>PMT = 0</code></li>
  <li>Berechnung von <code>FV</code></li>
</ul>
<p>Bleibt der Rechner auf <strong>P/Y = 12</strong>, interpretiert er die Zahl 5 als <strong>5 Monate</strong> und rechnet intern mit 0,667 % Monatszins:</p>
<ul>
  <li><strong>Falsche Rechnerausgabe:</strong> 5.168,91 €</li>
  <li><strong>Mathematisch korrektes Ergebnis:</strong> 7.346,64 €</li>
</ul>

<h2>Die zwei Vorgehensweisen in der Praxis</h2>
<h3>Methode A: Die „Immer P/Y = 1“-Regel (Empfehlung für Prüfungen & CFA)</h3>
<p>Renommierte Prüfungsvorbereiter (wie Kaplan Schweser) und Hochschuldozenten empfehlen, <strong>P/Y = 1 und C/Y = 1 dauerhaft beizubehalten</strong>.</p>
<p>Die Spielregeln:</p>
<ol>
  <li><code>P/Y = 1</code> bleibt dauerhaft aktiv.</li>
  <li>Bei Jahresaufgaben: Jahre in <code>N</code> und Jahreszins in <code>I/Y</code> eintragen.</li>
  <li>Bei Monatsaufgaben: Manuelle Umrechnung mit <code>N = Jahre × 12</code> und <code>I/Y = Jahreszins / 12</code>.</li>
</ol>
<p><strong>Großer Vorteil:</strong> Keine versteckten internen Menüeinstellungen verfälschen Ihre Rechnungen. Was Sie eingeben, wird direkt berechnet.</p>

<h3>Methode B: Die „P/Y = 12“-Regel (Banken- & Maklerpraxis)</h3>
<p>Darlehensberater mit Fokus auf langfristige Immobilienfinanzierungen nutzen <code>P/Y = 12</code>:</p>
<ol>
  <li><code>N</code> wird in Gesamtmonaten eingegeben (z. B. <code>360</code> für 30 Jahre).</li>
  <li><code>I/Y</code> wird als unveränderter Jahresnominalzins eingetragen (z. B. <code>4.5</code>).</li>
  <li>Der Rechner führt die Monatsumrechnung automatisch im Hintergrund aus.</li>
</ol>

<h2>Schritt-für-Schritt-Anleitung: P/Y richtig einstellen</h2>
<h3>Auf dem Texas Instruments TI BA II Plus & Professional:</h3>
<ol>
  <li>Drücken Sie <code>[2nd]</code> gefolgt von <code>[I/Y]</code> (öffnet das Menü <code>P/Y</code>).</li>
  <li>Das Display zeigt <code>P/Y = </code> und den aktuellen Wert (z. B. <code>12.00</code>).</li>
  <li>Tippen Sie den gewünschten Wert ein (z. B. <code>1</code> oder <code>12</code>).</li>
  <li><strong>WICHTIGSTER SCHRITT:</strong> Drücken Sie die Taste <code>[ENTER]</code>. Ohne ENTER wird die Änderung nicht übernommen!</li>
  <li>Drücken Sie den Pfeil nach unten <code>[↓]</code>, um <code>C/Y</code> zu prüfen.</li>
  <li>Drücken Sie <code>[2nd]</code> und dann <code>[CPT]</code> (QUIT), um das Menü zu verlassen.</li>
</ol>

<h3>Auf dem HP 10bII+:</h3>
<ol>
  <li>Geben Sie die Zahl ein (z. B. <code>12</code> oder <code>1</code>).</li>
  <li>Drücken Sie die orangefarbene Taste <code>[Shift]</code>.</li>
  <li>Drücken Sie <code>[PMT]</code> (darüber steht in Orange <code>P/YR</code>).</li>
</ol>

<h3>Wie verhält sich der HP 12C?</h3>
<p>Der klassische <strong>HP 12C</strong> besitzt kein P/Y-Menü, da er auf der Umgekehrten Polnischen Notation (RPN) basiert:</p>
<ul>
  <li>Monatsberechnungen erfolgen über direkte Periodeneingabe: Monate in <code>n</code> (oder <code>g</code> und <code>12X</code>).</li>
  <li>Monatszins in <code>i</code> eintragen (oder <code>g</code> und <code>12÷</code>).</li>
</ul>

<h2>Finanzrechner kostenlos im Browser testen</h2>
<p>Möchten Sie TVM-Berechnungen und Tastenfolgen ohne teure Hardware üben?</p>
<ul>
  <li>Nutzen Sie unseren originalgetreuen <a href="/de/emulators/ti-ba-ii-plus/">Online TI BA II Plus Simulator</a> mit Live-Worksheet-Abgleich.</li>
  <li>Lösen Sie Zins- und Sparpläne mit unserem <a href="/de/finance/tvm/">TVM-Rechner (Zeitwert des Geldes)</a>.</li>
  <li>Erstellen Sie vollständige Tilgungspläne mit dem <a href="/de/loan/calculator/">Kreditrechner</a>.</li>
  <li>Für RPN-Liebhaber steht unser <a href="/de/emulators/hp-12c/">Kostenloser HP 12C Simulator</a> bereit.</li>
</ul>
`
    },
    ja: {
      title: "金融電卓の「P/Y」とは？意味と設定方法（TI BA II Plus対応）",
      description: "TI BA II Plusなどの金融電卓にある「P/Y（年間支払回数）」と「C/Y（年間複利回数）」の意味、正しい設定手順、試験や実務で頻発する計算ミスの防ぎ方を徹底解説。",
      content: `
<p><strong>Texas Instruments TI BA II Plus</strong>、<strong>TI BA II Plus Professional</strong>、または<strong>HP 10bII+</strong>などの金融電卓を使用する際、必ず遭遇するのが<strong>「P/Y」</strong>という設定項目です。</p>
<p>CFA（米国証券アナリスト）受験生、ファイナンス専攻の大学生、不動産投資家にとって、<strong>P/Yの設定不一致は金融電卓で最も多い誤答原因</strong>となっています。この設定を誤ると、時間価値（TVM）や元利均等返済の計算がすべて狂ってしまいます。</p>
<p>ここでは、P/Yの意味、C/Yとの関連性、設定変更のキー操作手順、そして試験で失敗しないためのベストプラクティスを分かりやすく解説します。</p>

<h2>P/Y（Payments per Year）とは？</h2>
<p><strong>P/Y</strong>とは、<strong>「年間支払回数（Payments per Year）」</strong>の略称です。1年間（12ヶ月）の間にキャッシュフローの支払いや受け取りが何回発生するかを計算機に指示します。</p>
<ul>
  <li><strong>P/Y = 12:</strong> 毎月払い（住宅ローン、自動車ローン、クレジットカード返済の標準）。</li>
  <li><strong>P/Y = 1:</strong> 年1回払い（一括投資、年金積立、大学講義の年次計算問題）。</li>
  <li><strong>P/Y = 2:</strong> 半年ごと払い（米国債や事業債の利払い）。</li>
  <li><strong>P/Y = 4:</strong> 四半期ごと払い（配当金受取など）。</li>
  <li><strong>P/Y = 26 または 52:</strong> 隔週払い・週払い。</li>
</ul>
<p>年利率を<strong>［I/Y］</strong>に入力すると、電卓内部でその数値を<strong>P/Y</strong>の値で自動的に割り算し、1期あたりの実質適用金利を算出します。</p>

<h2>C/Y（年間複利回数）との違い</h2>
<p>P/Yと常にセットになっているのが<strong>C/Y（Compounding Periods per Year: 年間複利計算回数）</strong>です。</p>
<ul>
  <li><strong>P/Y:</strong> あなたが「支払う（または受け取る）頻度」。</li>
  <li><strong>C/Y:</strong> 金融機関が「利息を計算して元本に組み入れる（複利化する）頻度」。</li>
</ul>
<p>日米の一般的な個人ローンでは、毎月返済かつ毎月複利となるため<strong>P/Y = 12、C/Y = 12</strong>に設定します。TI BA II Plusでは、P/Yに数値を入力して［ENTER］を押すと、<strong>C/Yも自動的に同じ数値に更新</strong>されます。</p>

<h2>最も危険な落とし穴：初期設定（デフォルト）の罠</h2>
<p>金融電卓を新品で購入した直後や、電池交換、リセット操作を行った直後は、<strong>自動的に「P/Y = 12、C/Y = 12」に設定</strong>されます。</p>
<h3>よくある失敗例：</h3>
<p>問題：<em>「現在500万円を年利8%（年1回複利）で5年間運用した場合の将来価値（FV）はいくらか？」</em></p>
<p>入力手順：</p>
<ul>
  <li><code>N = 5</code>（5年間）</li>
  <li><code>I/Y = 8</code>（年利8%）</li>
  <li><code>PV = -5000000</code>（現在価値）</li>
  <li><code>PMT = 0</code></li>
  <li><code>FV</code>を計算（CPT FV）</li>
</ul>
<p>もし電卓が<strong>P/Y = 12</strong>のままになっていると、電卓は「5」を5年ではなく<strong>「5ヶ月」</strong>と認識し、年利8%を12で割った月利（0.667%）で計算してしまいます。</p>
<ul>
  <li><strong>電卓の誤った表示:</strong> 約516.9万円（大間違い）</li>
  <li><strong>正しい数学的解:</strong> 約734.7万円（正解）</li>
</ul>

<h2>推奨される2つの運用方針</h2>
<h3>方針A：「常に P/Y = 1」固定ルール（CFA受験生・学生に推奨）</h3>
<p>Kaplan Schweserなどの大手CFA受験指導校では、<strong>電卓を常に「P/Y = 1、C/Y = 1」に固定</strong>することを強く推奨しています。</p>
<ol>
  <li>P/Yは常に「1」のまま触りません。</li>
  <li>年次計算の場合：年数をそのまま［N］に、年利を［I/Y］に入力。</li>
  <li>毎月払いの場合：期間を<code>年数 × 12</code>、金利を<code>年利 ÷ 12</code>と自分で計算して入力。</li>
</ol>
<p><strong>メリット:</strong> 内部設定による予期せぬ計算ミスを100%排除できます。画面に入力した数値の通りに数式が実行されます。</p>

<h3>方針B：「P/Y = 12」ルール（住宅ローン・実務担当者向け）</h3>
<p>日常的に住宅ローンやカーローンを取り扱う実務では、最初から<code>P/Y = 12</code>にしておくことで、金利を毎回12で割る手間を省けます。</p>

<h2>P/Yの確認・変更キー操作手順</h2>
<h3>Texas Instruments TI BA II Plus の場合：</h3>
<ol>
  <li>黄色い［2nd］キーを押してから、［I/Y］キーを押します（P/Yメニューが開きます）。</li>
  <li>画面に「P/Y = 12.00」のように現在の設定値が表示されます。</li>
  <li>変更したい数値（例: 「1」または「12」）を入力します。</li>
  <li><strong>【極めて重要】［ENTER］キーを押します。ENTERを押さないと設定は反映されません！</strong></li>
  <li>下矢印キー［↓］を押して、C/Yも意図した数値になっているか確認します。</li>
  <li>［2nd］を押してから［CPT］（QUIT）を押して通常画面に戻ります。</li>
</ol>

<h3>HP 10bII+ の場合：</h3>
<ol>
  <li>設定したい数値（「12」または「1」）を入力。</li>
  <li>オレンジの［Shift］キーを押す。</li>
  <li>［PMT］（キーの上にP/YRと記載）を押す。</li>
</ol>

<h3>名機 HP 12C の場合は？</h3>
<p>ロングセラーの<strong>HP 12C</strong>にはP/Yメニューが存在しません。RPN（逆ポーランド記法）による月単位計算を採用しているため、月数を直接［n］に入れ、月利を直接［i］に入力（または［g］［12X］、［g］［12÷］キーを利用）します。</p>

<h2>ブラウザ上で今すぐ試せる無料シミュレーター</h2>
<p>高価な実機を購入しなくても、当サイトで正確な金融計算キー操作をシミュレーションできます：</p>
<ul>
  <li>リアルタイムワークシート連動の<a href="/ja/emulators/ti-ba-ii-plus/">TI BA II Plus オンラインシミュレーター</a></li>
  <li>時間価値と積立利息を可視化する<a href="/ja/finance/tvm/">TVM計算機（Time Value of Money）</a></li>
  <li>毎月の返済額と元利償還表を算出する<a href="/ja/loan/calculator/">ローン返済計算ツール</a></li>
  <li>RPN記法に対応した<a href="/ja/emulators/hp-12c/">HP 12C オンラインエミュレーター</a></li>
</ul>
`
    },
    fr: {
      title: "Que signifie P/Y sur une calculatrice financière ? Guide et réglages",
      description: "Comprenez la signification de P/Y (paiements par an) et C/Y (capitalisations par an) sur les calculatrices financières comme la TI BA II Plus, et évitez l'erreur TVM la plus fréquente.",
      content: `
<p>Si vous utilisez une calculatrice financière telle que la <strong>Texas Instruments TI BA II Plus</strong>, la <strong>TI BA II Plus Professional</strong> ou la <strong>HP 10bII+</strong>, vous avez obligatoirement rencontré la variable <strong>P/Y</strong>.</p>
<p>Pour les étudiants en finance, les candidats aux examens du CFA et les professionnels de l'immobilier, <strong>un mauvais réglage de P/Y est la source numéro un de résultats erronés</strong>. Une incohérence dans ce paramètre peut compromettre l'intégralité d'un tableau d'amortissement ou d'un calcul de valeur temporelle de l'argent (TVM).</p>
<p>Découvrez ce que signifie P/Y, sa relation avec C/Y, la manipulation exacte des touches et la méthode recommandée pour fiabiliser vos calculs.</p>

<h2>Que signifie P/Y ?</h2>
<p><strong>P/Y</strong> est l'abréviation de <strong>Payments per Year</strong> (Paiements par An). Ce paramètre indique au processeur de la calculatrice combien de flux périodiques ont lieu au cours d'une année civile de 12 mois :</p>
<ul>
  <li><strong>P/Y = 12 :</strong> Échéances mensuelles (la norme pour les crédits immobiliers, les prêts automobiles et les cartes bancaires).</li>
  <li><strong>P/Y = 1 :</strong> Versements annuels (placements forfaitaires, cotisations de retraite annuelles et exercices académiques).</li>
  <li><strong>P/Y = 2 :</strong> Versements semestriels (obligations d'État et obligations d'entreprises).</li>
  <li><strong>P/Y = 4 :</strong> Versements trimestriels (dividendes d'actions).</li>
  <li><strong>P/Y = 26 ou 52 :</strong> Remboursements bimensuels ou hebdomadaires.</li>
</ul>
<p>Lorsque vous saisissez un taux d'intérêt annuel sous <strong>I/Y</strong> (Interest per Year), la calculatrice divise automatiquement ce taux par la valeur de <strong>P/Y</strong> pour appliquer l'intérêt exact à chaque échéance.</p>

<h2>Quelle est la différence avec C/Y (Capitalisations par an) ?</h2>
<p>Étroitement associé à P/Y se trouve <strong>C/Y</strong> (Compounding Periods per Year / Périodes de capitalisation par an).</p>
<ul>
  <li><strong>P/Y :</strong> La cadence à laquelle <em>vous payez ou recevez</em> de l'argent.</li>
  <li><strong>C/Y :</strong> La cadence à laquelle l'établissement financier <em>calcule et intègre les intérêts</em> au capital restant dû.</li>
</ul>
<p>Sur la TI BA II Plus, <strong>dès que vous modifiez la valeur de P/Y, la calculatrice synchronise automatiquement C/Y sur le même montant</strong>. Sur la plupart des crédits à la consommation, paiements et capitalisations sont mensuels (P/Y = 12 et C/Y = 12).</p>

<h2>Le piège n° 1 : La configuration d'usine par défaut</h2>
<p>La source d'erreur la plus fréquente découle de la <strong>réinitialisation par défaut</strong> de l'appareil.</p>
<p>Lors d'un changement de pile ou d'une remise à zéro (Reset), <strong>la calculatrice se repositionne automatiquement sur P/Y = 12 et C/Y = 12</strong>.</p>
<h3>Exemple typique d'erreur :</h3>
<p>Question : <em>« Vous placez 5 000 € au taux annuel de 8 % composé annuellement pendant 5 ans. Quelle est la valeur future (FV) ? »</em></p>
<p>Si vous saisissez <code>N = 5</code>, <code>I/Y = 8</code>, <code>PV = -5000</code> et <code>PMT = 0</code> alors que votre calculatrice est réglée sur <strong>P/Y = 12</strong>, l'appareil considérera que 5 correspond à <strong>5 mois</strong> et divisera le taux de 8 % par 12 (soit 0,667 % par mois) :</p>
<ul>
  <li><strong>Résultat affiché (FAUX) :</strong> 5 168,91 €</li>
  <li><strong>Valeur mathématique exacte (CORRECT) :</strong> 7 346,64 €</li>
</ul>

<h2>Les deux méthodes d'utilisation : Laquelle adopter ?</h2>
<h3>Méthode A : La règle du « P/Y = 1 permanent » (Recommandée pour le CFA et les examens)</h3>
<p>Les organismes de préparation aux concours financiers préconisent de <strong>conserver P/Y = 1 et C/Y = 1 en permanence</strong>.</p>
<ol>
  <li>Vous laissez <code>P/Y = 1</code> en tout temps.</li>
  <li>Pour les problèmes annuels : vous saisissez directement les années sous <code>N</code> et le taux sous <code>I/Y</code>.</li>
  <li>Pour les prêts mensuels : vous convertissez manuellement avec <code>N = années × 12</code> et <code>I/Y = taux / 12</code>.</li>
</ol>
<p><strong>Avantage :</strong> Aucun paramètre interne caché ne peut altérer votre raisonnement.</p>

<h3>Méthode B : La règle « P/Y = 12 » (Pratique courante en agence de crédit)</h3>
<p>Les spécialistes du prêt immobilier conservent <code>P/Y = 12</code> pour renseigner directement le taux nominal annuel sans division préalable.</p>

<h2>Comment modifier P/Y pas à pas sur votre calculatrice</h2>
<h3>Sur la Texas Instruments TI BA II Plus & Professional :</h3>
<ol>
  <li>Appuyez sur la touche jaune <code>[2nd]</code> puis sur <code>[I/Y]</code> (ouvre le menu secondaire <code>P/Y</code>).</li>
  <li>L'écran LCD affiche <code>P/Y = </code> suivi de la valeur actuelle (ex. <code>12.00</code>).</li>
  <li>Tapez la nouvelle valeur souhaitée (ex. appuyez sur <code>1</code> ou <code>12</code>).</li>
  <li><strong>ÉTAPE INDISPENSABLE :</strong> Appuyez sur la touche <code>[ENTER]</code>. Si vous oubliez d'appuyer sur ENTER, la modification est ignorée !</li>
  <li>Appuyez sur la flèche vers le bas <code>[↓]</code> pour vérifier <code>C/Y</code>.</li>
  <li>Appuyez sur <code>[2nd]</code> puis sur <code>[CPT]</code> (QUIT) pour revenir au mode de calcul normal.</li>
</ol>

<h3>Sur la HP 10bII+ :</h3>
<ol>
  <li>Tapez le chiffre souhaité (ex. <code>12</code> ou <code>1</code>).</li>
  <li>Appuyez sur la touche orange <code>[Shift]</code>.</li>
  <li>Appuyez sur <code>[PMT]</code> (portant la mention <code>P/YR</code> en orange).</li>
</ol>

<h2>Testez vos calculs en ligne sans matériel</h2>
<p>Entraînez-vous à manipuler les fonctions TVM directement dans votre navigateur :</p>
<ul>
  <li>Pratiquez sur notre <a href="/fr/emulators/ti-ba-ii-plus/">Simulateur TI BA II Plus en ligne</a> avec synchronisation de feuille de calcul.</li>
  <li>Évaluez vos projets d'épargne avec le <a href="/fr/finance/tvm/">Calculateur TVM (Valeur Temporelle de l'Argent)</a>.</li>
  <li>Simulez vos remboursements avec notre <a href="/fr/loan/calculator/">Calculateur de Prêt et Tableau d'Amortissement</a>.</li>
  <li>Pour les adeptes de la notation RPN, découvrez l'<a href="/fr/emulators/hp-12c/">Émulateur HP 12C en ligne</a>.</li>
</ul>
`
    },
    pt: {
      title: "O que é P/Y na calculadora financeira? Significado e configuração correta",
      description: "Entenda o que significam P/Y (pagamentos por ano) e C/Y (capitalizações por ano) em calculadoras como a TI BA II Plus, como ajustar e como evitar o principal erro em TVM.",
      content: `
<p>Se você já utilizou uma calculadora financeira — como a <strong>Texas Instruments TI BA II Plus</strong>, a <strong>TI BA II Plus Professional</strong> ou a <strong>HP 10bII+</strong> — certamente já se deparou com a configuração <strong>P/Y</strong>.</p>
<p>Para estudantes universitários, candidatos à certificação CFA e corretores de imóveis, <strong>o ajuste inadequado de P/Y é o erro mais comum em cálculos financeiros</strong>. Uma simples divergência nesse parâmetro pode arruinar uma questão de Valor do Dinheiro no Tempo (TVM) ou distorcer totalmente o valor de uma parcela de financiamento.</p>
<p>Aqui você confere o significado exato de P/Y, sua relação com C/Y, como alterar essa função no teclado e qual estratégia adotar para nunca mais errar.</p>

<h2>O que significa P/Y?</h2>
<p><strong>P/Y</strong> é a abreviação de <strong>Payments per Year</strong> (Pagamentos ou Períodos por Ano). Esse comando informa ao processador da calculadora financeira quantas parcelas ou fluxos de caixa ocorrem dentro de um período de 12 meses:</p>
<ul>
  <li><strong>P/Y = 12:</strong> Pagamentos mensais (padrão em financiamentos imobiliários, crédito automotivo e empréstimos pessoais).</li>
  <li><strong>P/Y = 1:</strong> Pagamentos anuais (aportes únicos, previdência privada com depósitos anuais e a grande maioria dos enunciados acadêmicos).</li>
  <li><strong>P/Y = 2:</strong> Pagamentos semestrais (comum em títulos de renda fixa e títulos públicos federais).</li>
  <li><strong>P/Y = 4:</strong> Pagamentos trimestrais (distribuição periódica de proventos e dividendos).</li>
  <li><strong>P/Y = 26 ou 52:</strong> Pagamentos quinzenais ou semanais.</li>
</ul>
<p>Ao inserir uma taxa anual na tecla <strong>I/Y</strong> (Interest per Year), a calculadora divide essa taxa pelo valor de <strong>P/Y</strong> para apurar a taxa de juros exata aplicada a cada prestação.</p>

<h2>O que é C/Y (Capitalizações por Ano)?</h2>
<p>Diretamente conectado a P/Y está o <strong>C/Y</strong> (Compounding Periods per Year / Períodos de Capitalização por Ano).</p>
<ul>
  <li><strong>P/Y:</strong> A frequência com que <em>você efetua ou recebe os pagamentos</em>.</li>
  <li><strong>C/Y:</strong> A frequência com que a instituição financeira <em>calcula e incorpora os juros ao saldo devedor</em>.</li>
</ul>
<p>Na Texas Instruments BA II Plus, <strong>ao alterar o valor de P/Y, a calculadora atualiza automaticamente C/Y com o mesmo número</strong>. Na maioria das operações de crédito comercial, pagamentos e capitalizações são mensais (P/Y = 12 e C/Y = 12).</p>

<h2>A Armadilha Nº 1: O padrão de fábrica</h2>
<p>A falha mais recorrente ocorre devido à <strong>configuração original de fábrica</strong>.</p>
<p>Ao tirar uma TI BA II Plus da embalagem, trocar suas baterias ou acionar o botão de Reset, <strong>o sistema é reiniciado com P/Y = 12 e C/Y = 12</strong>.</p>
<h3>Exemplo de erro clássico:</h3>
<p>Questão: <em>"Você aplica R$ 5.000 hoje a uma taxa de 8% ao ano com capitalização anual durante 5 anos. Qual o Valor Futuro (FV)?"</em></p>
<p>Se você digitar <code>N = 5</code>, <code>I/Y = 8</code>, <code>PV = -5000</code> e <code>PMT = 0</code>, mas a calculadora estiver configurada em <strong>P/Y = 12</strong>, ela assumirá que 5 corresponde a <strong>5 meses</strong> e dividirá a taxa anual por 12 (0,667% ao mês):</p>
<ul>
  <li><strong>Resultado retornado pela máquina (ERRADO):</strong> R$ 5.168,91</li>
  <li><strong>Resultado matemático real (CORRETO):</strong> R$ 7.346,64</li>
</ul>

<h2>Os dois métodos operacionais: Qual você deve escolher?</h2>
<h3>Método A: Manter sempre P/Y = 1 (Regra de Ouro para Exames CFA e Estudantes)</h3>
<p>Cursos preparatórios internacionais para o exame CFA recomendam <strong>manter permanentemente P/Y = 1 e C/Y = 1</strong>.</p>
<ol>
  <li>Você deixa <code>P/Y = 1</code> fixo.</li>
  <li>Para problemas com períodos anuais: digita os anos em <code>N</code> e a taxa anual em <code>I/Y</code>.</li>
  <li>Para problemas com parcelas mensais: converte manualmente <code>N = anos × 12</code> e <code>I/Y = taxa anual / 12</code>.</li>
</ol>
<p><strong>Vantagem:</strong> Elimina riscos de variáveis ocultas interferirem no seu resultado.</p>

<h3>Método B: Manter P/Y = 12 (Prática comum em crédito imobiliário)</h3>
<p>Correspondentes bancários e analistas que trabalham exclusivamente com crédito habitacional deixam <code>P/Y = 12</code> para inserir a taxa nominal anual sem precisar efetuar divisões a cada proposta.</p>

<h2>Como alterar o P/Y passo a passo</h2>
<h3>Na Texas Instruments TI BA II Plus & Professional:</h3>
<ol>
  <li>Pressione a tecla amarela <code>[2nd]</code> e em seguida <code>[I/Y]</code> (abre o menu <code>P/Y</code>).</li>
  <li>O visor exibirá <code>P/Y = </code> junto ao valor ativo (ex: <code>12.00</code>).</li>
  <li>Digite o número pretendido (ex: pressione <code>1</code> ou <code>12</code>).</li>
  <li><strong>PASSO OBRIGATÓRIO:</strong> Pressione a tecla <code>[ENTER]</code>. Sem pressionar ENTER, a configuração não é salva!</li>
  <li>Pressione a seta para baixo <code>[↓]</code> para conferir <code>C/Y</code>.</li>
  <li>Pressione <code>[2nd]</code> e depois <code>[CPT]</code> (QUIT) para retornar ao visor comum de cálculo.</li>
</ol>

<h3>Na HP 10bII+:</h3>
<ol>
  <li>Digite o número desejado (ex: <code>12</code> ou <code>1</code>).</li>
  <li>Pressione a tecla laranja <code>[Shift]</code>.</li>
  <li>Pressione <code>[PMT]</code> (com a inscrição <code>P/YR</code> em laranja).</li>
</ol>

<h3>E na tradicional HP 12C?</h3>
<p>A clássica <strong>HP 12C</strong> não possui menu de P/Y, pois funciona em Notação Polonesa Reversa (RPN) e lógica periódica pura:</p>
<ul>
  <li>Para cálculos mensais, informe os meses em <code>n</code> (ou pressione <code>g</code> seguido de <code>12X</code>).</li>
  <li>Divida a taxa anual por 12 antes de pressionar <code>i</code> (ou pressione <code>g</code> seguido de <code>12÷</code>).</li>
</ul>

<h2>Pratique online sem precisar comprar o aparelho</h2>
<p>Quer treinar as teclas financeiras e cálculos de TVM direto no seu navegador?</p>
<ul>
  <li>Acesse nosso <a href="/pt/emulators/ti-ba-ii-plus/">Simulador Online TI BA II Plus</a> com sincronização em tempo real.</li>
  <li>Projete seus rendimentos com a <a href="/pt/finance/tvm/">Calculadora TVM (Valor do Dinheiro no Tempo)</a>.</li>
  <li>Simule prestações e cronogramas de amortização na <a href="/pt/loan/calculator/">Calculadora de Financiamentos</a>.</li>
  <li>Para entusiastas da notação RPN, experimente o <a href="/pt/emulators/hp-12c/">Emulador Virtual HP 12C</a>.</li>
</ul>
`
    }
  }
};

/**
 * Returns localized blog post data. Falls back to English if requested language is missing.
 */
export function getLocalizedBlogPost(slug: string, lang: Lang): { title: string; description: string; content: string } {
  const post = blogTranslations[slug];
  if (!post) {
    return {
      title: "Article Not Found",
      description: "The requested article is not available.",
      content: "<p>Article content not available.</p>"
    };
  }

  const localized = post[lang] || post.en;
  return (
    localized || {
      title: "Article Not Found",
      description: "The requested article is not available.",
      content: "<p>Article content not available.</p>"
    }
  );
}
