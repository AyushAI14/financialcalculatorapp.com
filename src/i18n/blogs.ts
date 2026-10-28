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
  },

  "how-to-decide-rent-vs-buy": {
    en: {
      title: "How to Decide: Rent vs. Buy Your Home (The Real Math Nobody Explains)",
      description: "Is renting really throwing money away? Learn how to calculate the 5% rule, evaluate unrecoverable owning costs, and discover your true rent vs. buy break-even point.",
      content: `
<p><em>"Renting is just paying your landlord's mortgage."</em><br />
<em>"Why throw away money on rent when you could build home equity?"</em></p>
<p>If you are trying to decide whether to rent or buy a home, you have undoubtedly heard these lines from well-meaning family, friends, and real estate professionals. For decades, homeownership has been championed as the undisputed rite of passage into financial adulthood.</p>
<p><strong>Yet in today's housing market—with elevated property prices and mortgage interest rates hovering between 6% and 7%—that conventional wisdom is dangerously obsolete.</strong></p>
<p>In many metropolitan markets, buying a median-priced home today costs <strong>30% to 60% more per month</strong> than renting an equivalent property. Does that mean buying is always a bad financial decision? Absolutely not. But it means buying a home is <strong>no longer an automatic financial victory</strong>.</p>
<p>Here is the exact mathematical framework, unrecoverable cost model, and decision checklist to help you determine whether renting or buying builds greater long-term wealth for your specific situation.</p>

<h2>The 30-Second Decision Test</h2>
<p>If you only have half a minute, these three rules of thumb will give you an immediate baseline:</p>
<ol>
  <li><strong>The 5-Year Horizon Rule:</strong> If there is any realistic chance you will relocate, switch careers, or outgrow the home within the next <strong>5 to 7 years</strong>, <strong>RENT</strong>. Buying and selling real estate incurs transaction friction (closing costs of 2%–5% when buying, plus agent commissions and transfer fees of 6%–10% when selling) that requires 5 to 7 years of typical appreciation just to break even.</li>
  <li><strong>The 5% Rule:</strong> Multiply your target purchase price by <strong>5%</strong>, then divide by 12. If you can rent an equivalent home for <strong>less</strong> than that figure, renting and investing the difference will mathematically build greater net worth.</li>
  <li><strong>The Liquidity Rule:</strong> If buying leaves you with less than 3 to 6 months of living expenses in an emergency fund, <strong>RENT</strong>. Remember: a mortgage payment is the <em>minimum</em> you will pay each month; rent is the <em>maximum</em>.</li>
</ol>

<h2>Debunking the Myth: "Renting is Throwing Money Away"</h2>
<p>The entire emotional argument in favor of homeownership relies on the premise that rent is a 100% loss, whereas mortgage payments accumulate equity.</p>
<p>This is a classic accounting fallacy. <strong>Homeownership is loaded with enormous "unrecoverable costs" that vanish just like rent:</strong></p>
<ul>
  <li><strong>Mortgage Interest:</strong> During the first 7 to 10 years of a standard 30-year mortgage, <strong>65% to 80% of every monthly payment goes strictly to bank interest</strong>, not principal reduction.</li>
  <li><strong>Property Taxes:</strong> You will surrender 1% to 2.5% of your home's assessed valuation each year to municipal government. This money generates zero personal equity.</li>
  <li><strong>Homeowners Hazard Insurance:</strong> Thousands of dollars annually protecting against storm, fire, and structural perils.</li>
  <li><strong>Maintenance and Capital Expenditures (CapEx):</strong> Roofs leak, air conditioners fail, and foundations crack. The standard industry rule is budgeting <strong>1% to 2% of the total property value every year</strong> for upkeep and major replacements.</li>
  <li><strong>HOA / Condominium Dues:</strong> Mandatory monthly dues that contribute nothing to property equity.</li>
</ul>

<h3>The Sunk Cost Comparison</h3>
<table class="w-full text-left border-collapse border border-hairline my-4 text-xs sm:text-sm">
  <thead>
    <tr class="bg-canvas-soft border-b border-hairline">
      <th class="p-2.5 font-bold text-ink">Housing Category</th>
      <th class="p-2.5 font-bold text-ink">When You Rent</th>
      <th class="p-2.5 font-bold text-ink">When You Buy</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Unrecoverable Monthly Cost</td>
      <td class="p-2.5">Monthly Rent Check</td>
      <td class="p-2.5 font-mono">Interest + Taxes + Insurance + Maintenance + HOA</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Wealth Building Engine</td>
      <td class="p-2.5">Surplus Cash & Down Payment invested in Index Funds (S&P 500)</td>
      <td class="p-2.5">Principal Amortization + Real Estate Appreciation</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Repair / Surprise Liabilities</td>
      <td class="p-2.5 text-emerald-600 dark:text-emerald-400 font-bold">$0 (Landlord's legal duty)</td>
      <td class="p-2.5 text-rose-600 dark:text-rose-400 font-bold">100% on you ($5k–$25k surprises)</td>
    </tr>
    <tr class="bg-canvas-soft/50">
      <td class="p-2.5 font-medium">Mobility & Flexibility</td>
      <td class="p-2.5 text-emerald-600 dark:text-emerald-400 font-bold">High (30-day notice or 1-yr lease)</td>
      <td class="p-2.5 text-amber-600 dark:text-amber-400 font-bold">Low (Requires selling & 6–10% friction)</td>
    </tr>
  </tbody>
</table>

<h2>The 5% Rule: How to Calculate Your Break-Even Rent in Seconds</h2>
<p>Developed by portfolio manager Ben Felix, the <strong>5% Rule</strong> provides an intuitive way to calculate the monthly unrecoverable cost of owning any home.</p>
<p>Owning a home incurs three fundamental unrecoverable expenses each year:</p>
<ol>
  <li><strong>Property Tax:</strong> ~1.0% of property value</li>
  <li><strong>Maintenance & Repairs:</strong> ~1.0% of property value</li>
  <li><strong>Cost of Capital (Mortgage Interest & Equity Opportunity Cost):</strong> ~3.0%</li>
</ol>
<p>Summing these: <strong>1% + 1% + 3% = 5%</strong>.</p>
<p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-3">
  <strong>Monthly Break-Even Rent = (Home Purchase Price × 0.05) ÷ 12</strong>
</p>

<h3>Worked Example:</h3>
<p>Suppose you are evaluating a <strong>$450,000 home</strong>:</p>
<ul>
  <li>Multiply $450,000 × 0.05 = <strong>$22,500/year</strong> in unrecoverable expenses.</li>
  <li>Divide by 12 = <strong>$1,875/month</strong>.</li>
</ul>
<p><strong>The Takeaway:</strong> If you can rent an equivalent home for <strong>less than $1,875 per month</strong>, renting is mathematically superior—provided you invest the down payment and monthly savings in a diversified stock portfolio. If comparable rent is <strong>greater than $1,875 per month</strong>, buying has the mathematical advantage.</p>

<h2>The Opportunity Cost: The Hidden Million-Dollar Difference</h2>
<p>When you purchase a $400,000 home with 20% down, you lock <strong>$80,000 cash</strong> plus approximately <strong>$10,000 in closing fees</strong> into the physical walls of the property.</p>
<ul>
  <li><strong>Long-Term Real Estate Appreciation:</strong> Over the last century, residential real estate in developed markets has appreciated at roughly <strong>3.5% to 4.5% per year</strong> (about 1% above inflation).</li>
  <li><strong>Long-Term Stock Market Returns:</strong> Broad-market equity index funds (like the S&P 500 or MSCI World) have historically delivered annualized returns of <strong>9% to 10% nominal</strong> (~7% after inflation).</li>
</ul>
<p>If a disciplined renter takes that initial $90,000 and invests it in a broad index fund compounding at 7.5%, that capital grows to <strong>$266,299 in 15 years</strong>—completely liquid, without paying a single dollar in roofing repairs, property taxes, or closing commissions.</p>

<h2>10-Year Case Study: Buyer vs. Renter in a 6.5% Rate Environment</h2>
<p>Let's examine what happens to two individuals with identical salaries and an initial $90,000 in savings over 10 years:</p>
<ul>
  <li><strong>Home Purchase:</strong> $400,000 price, 20% down ($80,000) + $10,000 closing costs. 30-year fixed rate at 6.5%.</li>
  <li><strong>Buyer Total Monthly Expense:</strong> $2,022 (P&I) + $400 (Taxes) + $125 (Insurance) + $333 (Maintenance reserve) = <strong>$2,880/month</strong>.</li>
  <li><strong>Renter Monthly Expense:</strong> $2,100/month rent (increasing at 3.0% annually).</li>
  <li><strong>Renter Savings:</strong> Renter invests the $780/month cash difference + their $90,000 initial capital at a 7.5% annualized return.</li>
  <li><strong>Home Appreciation:</strong> 3.8% annually; Selling fees at year 10: 7.0%.</li>
</ul>

<table class="w-full text-left border-collapse border border-hairline my-4 text-xs sm:text-sm">
  <thead>
    <tr class="bg-canvas-soft border-b border-hairline">
      <th class="p-2.5 font-bold text-ink">Metric at Year 10</th>
      <th class="p-2.5 font-bold text-ink">The Homebuyer</th>
      <th class="p-2.5 font-bold text-ink">The Disciplined Renter</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Initial Capital Outlay</td>
      <td class="p-2.5">$90,000 (Down payment + closing)</td>
      <td class="p-2.5">$0 ($90k remains invested)</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Total 10-Year Housing Payments</td>
      <td class="p-2.5 font-mono">~$345,600</td>
      <td class="p-2.5 font-mono">~$288,500</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Asset Valuation (Home / Portfolio)</td>
      <td class="p-2.5 font-mono">$580,780 (Home value)</td>
      <td class="p-2.5 font-mono">$328,400 (Liquid Portfolio)</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Remaining Mortgage Debt</td>
      <td class="p-2.5 font-mono">-$271,850</td>
      <td class="p-2.5 font-mono">$0</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Transaction Cost to Liquidate</td>
      <td class="p-2.5 font-mono">-$40,650 (7% selling fees)</td>
      <td class="p-2.5 font-mono">$0 (Instant liquidity)</td>
    </tr>
    <tr class="bg-canvas-soft/50 font-bold">
      <td class="p-2.5">Estimated Net Wealth</td>
      <td class="p-2.5 font-mono text-ink">~$268,280</td>
      <td class="p-2.5 font-mono text-emerald-600 dark:text-emerald-400">~$328,400 (+$60k ahead) ✅</td>
    </tr>
  </tbody>
</table>

<h2>The Decision Checklist: When to Buy vs. When to Rent</h2>
<h3>You Should BUY When:</h3>
<ul>
  <li>You plan to stay in the home for at least <strong>7 to 10 years</strong>.</li>
  <li>You want fixed, predictable monthly principal and interest payments for peace of mind.</li>
  <li>You value full autonomy to renovate, decorate, and landscape without landlord restrictions.</li>
  <li>You know you lack the self-discipline to invest surplus cash every month (the mortgage acts as forced savings).</li>
  <li>You maintain a 3- to 6-month cash reserve <em>after</em> paying down payment and closing costs.</li>
</ul>

<h3>You Should RENT When:</h3>
<ul>
  <li>Your career, marital status, or city could change in the next <strong>3 to 5 years</strong>.</li>
  <li>The price-to-rent ratio in your local market is high (renting is substantially cheaper than owning).</li>
  <li>You prefer compounding your capital in liquid, hands-off global stock portfolios.</li>
  <li>You dislike unpredictable maintenance bills and property management tasks.</li>
  <li>You are paying down higher-interest consumer debt or rebuilding your credit profile.</li>
</ul>

<h2>Run Your Own Numbers Privately</h2>
<p>Every local market and family situation is different. Plug your exact numbers into our free, 100% private financial calculators to see your customized break-even timeline:</p>
<ul>
  <li>Compare 5- to 30-year wealth trajectories with our <a href="/loan/rent-vs-buy/">Rent vs. Buy Calculator</a>.</li>
  <li>Calculate principal, interest, taxes, and PMI on our <a href="/loan/mortgage/">Mortgage Calculator</a>.</li>
  <li>Determine your safe borrowing limit on our <a href="/loan/home-affordability/">Home Affordability Calculator</a>.</li>
  <li>See how your invested down payment compounds over time with our <a href="/finance/compound-interest/">Compound Interest Calculator</a>.</li>
</ul>
`
    },
    es: {
      title: "¿Alquilar o comprar casa? La fórmula matemática para decidir sin errores",
      description: "¿Alquilar es realmente tirar el dinero? Descubre la regla del 5%, los costes irrecuperables de la propiedad y cómo calcular tu punto de equilibrio entre alquiler y compra.",
      content: `
<p><em>«Alquilar es tirar el dinero a la basura.»</em><br />
<em>«¿Por qué pagarle la hipoteca al casero cuando podrías crear patrimonio propio?»</em></p>
<p>Si estás evaluando si te conviene alquilar o comprar una vivienda, habrás escuchado estas frases una y otra vez. Durante décadas, comprar casa se ha considerado el pilar indiscutible del éxito financiero personal.</p>
<p><strong>Sin embargo, en el mercado actual —con precios de vivienda en máximos históricos y tipos de interés hipotecarios elevados— esa recomendación tradicional ha quedado desfasada.</strong></p>
<p>En muchas ciudades modernas, la cuota hipotecaria más los gastos de comunidad y mantenimiento supera entre un <strong>30% y un 50% el coste mensual de un alquiler equivalente</strong>. ¿Significa esto que comprar siempre es un error? Por supuesto que no. Pero demuestra que comprar una casa <strong>ya no es un éxito financiero garantizado por defecto</strong>.</p>

<h2>La regla rápida en 30 segundos</h2>
<p>Si necesitas una orientación inmediata, aplica estos tres criterios fundamentales:</p>
<ol>
  <li><strong>La regla del horizonte temporal (5 a 7 años):</strong> Si existe cualquier probabilidad de mudarte de ciudad, cambiar de empleo o necesitar más espacio en los próximos <strong>5 a 7 años</strong>, <strong>ALQUILA</strong>. Comprar y vender inmuebles acarrea costes de transacción (impuestos de transmisiones ITP/IVA, notaría, tasación y comisión de agencia del 8% al 12%) que exigen varios años de revalorización sólo para recuperar gastos.</li>
  <li><strong>La regla del 5%:</strong> Multiplica el precio de la vivienda por el <strong>5%</strong> y divide entre 12. Si puedes alquilar una casa equivalente por <strong>menos de esa cifra</strong>, alquilar e invertir el dinero sobrante genera matemáticamente mayor patrimonio neto.</li>
  <li><strong>La regla de la liquidez:</strong> Si la entrada de la hipoteca consume tu fondo de emergencia por debajo de 6 meses de gastos corrientes, <strong>ALQUILA</strong>. La hipoteca es el importe <em>mínimo</em> que pagarás cada mes; el alquiler es el <em>máximo</em>.</li>
</ol>

<h2>Desmontando el mito: «Alquilar es tirar el dinero»</h2>
<p>El argumento a favor de comprar asume falsamente que el alquiler es una pérdida total al 100%, mientras que la cuota hipotecaria crea patrimonio.</p>
<p>En la realidad contable, <strong>la propiedad inmobiliaria está repleta de costes irrecuperables que se esfuman exactamente igual que un alquiler:</strong></p>
<ul>
  <li><strong>Intereses bancarios:</strong> En los primeros años de una hipoteca, entre el <strong>60% y el 75% de cada cuota son intereses puros</strong> para el banco, no amortización de capital.</li>
  <li><strong>Impuestos municipales (IBI):</strong> Gravámenes anuales sobre el valor catastral que no generan un solo euro de patrimonio.</li>
  <li><strong>Seguros obligatorios y vinculados:</strong> Seguros de hogar, vida y protección de pagos exigidos por el banco.</li>
  <li><strong>Mantenimiento y derramas (1% al 2% anual):</strong> Averías de calderas, tejados, fontanería y derramas comunitarias. La regla empírica aconseja reservar del 1% al 2% del valor de la casa cada año.</li>
  <li><strong>Gastos de comunidad:</strong> Cuotas mensuales no amortizables.</li>
</ul>

<h2>La Regla del 5% explicada paso a paso</h2>
<p>Popularizada por analistas financieros, la <strong>Regla del 5%</strong> permite calcular el coste irrecuperable anual de ser propietario:</p>
<ul>
  <li><strong>Impuesto sobre bienes inmuebles:</strong> ~1,0%</li>
  <li><strong>Mantenimiento y reparaciones:</strong> ~1,0%</li>
  <li><strong>Coste de capital (interés hipotecario + coste de oportunidad de la entrada):</strong> ~3,0%</li>
</ul>
<p>Total: <strong>1% + 1% + 3% = 5% anual</strong>.</p>
<p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-3">
  <strong>Alquiler mensual de equilibrio = (Precio de la vivienda × 0,05) ÷ 12</strong>
</p>

<h3>Ejemplo práctico:</h3>
<p>Imagina una vivienda valorada en <strong>300.000 €</strong>:</p>
<ul>
  <li>300.000 € × 0,05 = <strong>15.000 € al año</strong> en costes irrecuperables.</li>
  <li>Dividido entre 12 meses = <strong>1.250 € al mes</strong>.</li>
</ul>
<p><strong>Conclusión:</strong> Si puedes alquilar una vivienda similar por <strong>menos de 1.250 € al mes</strong>, el alquiler resulta más ventajoso financieramente, siempre que inviertas la entrada (ahorros) y el diferencial mensual en un fondo indexado diversificado. Si el alquiler supera los 1.250 €, la compra empieza a tener ventaja matemática.</p>

<h2>El coste de oportunidad del dinero de la entrada</h2>
<p>El mayor coste oculto de comprar casa es el <strong>coste de oportunidad</strong>.</p>
<p>Al comprar un inmueble de 300.000 € aportando el 20% de entrada más un 10% en gastos e impuestos, inmovilizas <strong>90.000 € en liquidez</strong> dentro de cuatro paredes.</p>
<ul>
  <li><strong>Rentabilidad inmobiliaria histórica:</strong> Los inmuebles residenciales se revalorizan a largo plazo en torno a la inflación más un 1% o 2% anual (~3,5% a 4% nominal).</li>
  <li><strong>Rentabilidad bursátil histórica:</strong> Los fondos indexados globales (como el MSCI World o el S&P 500) han ofrecido históricamente entre un <strong>8% y un 10% anual nominal</strong> reinvirtiendo dividendos.</li>
</ul>

<h2>¿Cuándo te conviene COMPRAR? (Señales positivas)</h2>
<ul>
  <li>Planeas vivir en la misma localidad y vecindario al menos <strong>7 a 10 años</strong>.</li>
  <li>Valoras la estabilidad y la tranquilidad de tener una vivienda propia sin riesgo de rescisión de contrato.</li>
  <li>Deseas libertad para reformar y adaptar la vivienda a tu gusto sin pedir permiso.</li>
  <li>Sabes que no eres disciplinado invirtiendo mes a mes (la hipoteca actúa como ahorro forzoso).</li>
  <li>Conservas un fondo de emergencia para imprevistos tras desembolsar la entrada y los gastos.</li>
</ul>

<h2>¿Cuándo te conviene ALQUILAR? (Señales positivas)</h2>
<ul>
  <li>Prevé cambios de trabajo, ciudad o situación familiar en los próximos <strong>3 a 5 años</strong>.</li>
  <li>El precio de compra en tu zona es muy elevado en comparación con los alquileres disponibles.</li>
  <li>Prefieres que tus ahorros crezcan con liquidez en mercados financieros globales.</li>
  <li>No deseas asumir responsabilidades de mantenimiento, derramas ni problemas de comunidad.</li>
</ul>

<h2>Calcula tu situación exacta gratis y en privado</h2>
<p>Comprueba los números reales de tu ciudad en nuestras calculadoras financieras gratuitas y privadas en tu navegador:</p>
<ul>
  <li>Simula la comparativa patrimonial con la <a href="/es/loan/rent-vs-buy/">Calculadora de Alquilar vs. Comprar</a>.</li>
  <li>Calcula cuotas y amortizaciones en la <a href="/es/loan/mortgage/">Calculadora de Hipotecas</a>.</li>
  <li>Descubre tu presupuesto máximo en la <a href="/es/loan/home-affordability/">Calculadora de Asequibilidad de Vivienda</a>.</li>
  <li>Comprueba el crecimiento de tus ahorros en la <a href="/es/finance/compound-interest/">Calculadora de Interés Compuesto</a>.</li>
</ul>
`
    },
    de: {
      title: "Mieten oder Kaufen? Die ehrliche Vermögensrechnung für Ihre Entscheidung",
      description: "Ist Miete wirklich verlorenes Geld? Erfahren Sie, wie Sie mit der 5%-Regel und der Zinseszins-Opportunität objektiv berechnen, ob Mieten oder Kaufen mehr Vermögen aufbaut.",
      content: `
<p><em>„Miete ist rausgeschmissenes Geld.“</em><br />
<em>„Warum dem Vermieter die Wohnung abbezahlen, wenn man selbst Eigentum bilden kann?“</em></p>
<p>Wer vor der Entscheidung steht, eine Immobilie zu kaufen oder weiterhin zur Miete zu wohnen, kennt diese Glaubenssätze. Seit Generationen gilt das Eigenheim im deutschsprachigen Raum als Inbegriff von finanzieller Solidität und Altersvorsorge.</p>
<p><strong>Doch im aktuellen Marktumfeld – mit gestiegenen Bauzinsen und hohen Immobilienpreisen – ist diese pauschale Weisheit mathematisch überholt.</strong></p>
<p>In vielen Ballungsräumen übersteigt die monatliche Belastung aus Zins, Tilgung und Instandhaltung die Kaltmiete einer vergleichbaren Wohnung um <strong>30 % bis 60 %</strong>. Bedeutet das, dass Kaufen immer falsch ist? Keineswegs. Aber es beweist, dass Wohneigentum <strong>kein automatischer finanzieller Selbstläufer mehr ist</strong>.</p>

<h2>Der 30-Sekunden-Entscheidungstest</h2>
<p>Diese drei praxisnahen Faustregeln liefern eine verlässliche erste Orientierung:</p>
<ol>
  <li><strong>Die 7-Jahres-Horizont-Regel:</strong> Wenn die Wahrscheinlichkeit hoch ist, dass Sie innerhalb der nächsten <strong>5 bis 7 Jahre</strong> umziehen oder den Job wechseln, sollten Sie <strong>MIETEN</strong>. Kaufnebenkosten (Grunderwerbsteuer, Notar, Grundbuchamt und Maklercourtage) betragen 8 % bis 12 % des Kaufpreises und sind unwiederbringlich verloren, sofern nicht viele Jahre Wertsteigerung folgen.</li>
  <li><strong>Die 5%-Regel:</strong> Multiplizieren Sie den Kaufpreis mit <strong>5 %</strong> und teilen Sie das Ergebnis durch 12. Liegt eine vergleichbare Kaltmiete <strong>unter diesem Betrag</strong>, baut Mieten mit konsequenter Geldanlage am Kapitalmarkt statistisch mehr Vermögen auf.</li>
  <li><strong>Die Notgroschen-Regel:</strong> Wenn der Eigenkapitaleinsatz Ihre liquiden Reserven unter 6 Monatsausgaben drückt, sollten Sie <strong>MIETEN</strong>. Die Kreditrate ist das <em>Minimum</em>, das Sie monatlich zahlen; die Miete ist das <em>Maximum</em>.</li>
</ol>

<h2>Der Mythos vom „verlorenen Geld“</h2>
<p>Das Argument für den Kauf basiert auf dem Trugschluss, die Miete sei zu 100 % verloren, während die Kreditrate reines Vermögen schaffe.</p>
<p>Tatsächlich entstehen beim Immobilienkauf erhebliche <strong>unwiederbringliche Kosten</strong>:</p>
<ul>
  <li><strong>Kreditzinsen:</strong> In den ersten Jahren eines Annuitätendarlehens fließt der Löwenanteil jeder Rate rein an die Bank, ohne Schulden abzutragen.</li>
  <li><strong>Grundsteuer:</strong> Eine laufende Abgabe an die Kommune ohne Gegenwert im Vermögen.</li>
  <li><strong>Wohngebäude- und Haftpflichtversicherungen:</strong> Regelmäßige Fixkosten zur Risikoabsicherung.</li>
  <li><strong>Instandhaltungsrücklage (1 % bis 2 % p. a.):</strong> Heizung, Dach, Fassade und Fenster altern. Fachleute kalkulieren jährlich 1 % bis 2 % des Gebäudewerts für Instandhaltung ein.</li>
  <li><strong>Nicht umlagefähige Nebenkosten:</strong> Verwaltungskosten und Instandhaltungsbeiträge der WEG.</li>
</ul>

<h2>Die 5%-Regel als Rechenmodell</h2>
<p>Das Modell beziffert die unwiederbringlichen jährlichen Eigenheimkosten:</p>
<ul>
  <li><strong>Grundsteuer & Abgaben:</strong> ~1,0 %</li>
  <li><strong>Instandhaltung & Sanierung:</strong> ~1,0 %</li>
  <li><strong>Kapitalkosten (Zinsaufwand + Opportunitätskosten des Eigenkapitals):</strong> ~3,0 %</li>
</ul>
<p>Summe: <strong>5 % pro Jahr</strong> bezogen auf den Gesamtkaufpreis.</p>
<p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-3">
  <strong>Monatliche Grenz-Kaltmiete = (Kaufpreis × 0,05) ÷ 12</strong>
</p>

<h3>Beispielrechnung:</h3>
<p>Bei einer Immobilie für <strong>400.000 €</strong>:</p>
<ul>
  <li>400.000 € × 0,05 = <strong>20.000 € jährliche unwiederbringliche Kosten</strong>.</li>
  <li>Geteilt durch 12 = <strong>1.667 € monatlich</strong>.</li>
</ul>
<p><strong>Ergebnis:</strong> Beträgt die Monatsmiete für ein vergleichbares Objekt <strong>weniger als 1.667 €</strong>, ist Mieten und das Investieren der Differenz in ein weltweit gestreutes ETF-Portfolio finanziell vorteilhafter.</p>

<h2>Wann sollten Sie KAUFEN?</h2>
<ul>
  <li>Sie möchten nachweislich mindestens <strong>7 bis 10 Jahre</strong> im Objekt wohnen.</li>
  <li>Sie schätzen die emotionale Sicherheit, nicht durch Eigenbedarfskündigungen verdrängt werden zu können.</li>
  <li>Sie möchten Wohnraum nach eigenen Vorstellungen umbauen und gestalten.</li>
  <li>Sie benötigen die feste monatliche Tilgung als automatischen Sparzwang.</li>
</ul>

<h2>Wann sollten Sie MIETEN?</h2>
<ul>
  <li>Ihre berufliche oder familiäre Lebensplanung erfordert Flexibilität in den nächsten <strong>3 bis 5 Jahren</strong>.</li>
  <li>Die Kaufpreise in Ihrer Region stehen in einem ungünstigen Verhältnis zu den Mieten (hoher Kaufpreisfaktor).</li>
  <li>Sie bevorzugen liquide, weltweit gestreute Kapitalanlagen (Aktien-ETFs).</li>
  <li>Sie möchten unvorhersehbare Handwerkerkosten und Sanierungspflichten vermeiden.</li>
</ul>

<h2>Berechnen Sie Ihr Szenario kostenfrei</h2>
<p>Nutzen Sie unsere kostenlosen, datenschutzfreundlichen Online-Rechner direkt im Browser:</p>
<ul>
  <li>Vergleichen Sie Vermögensverläufe im <a href="/de/loan/rent-vs-buy/">Mieten-oder-Kaufen-Rechner</a>.</li>
  <li>Ermitteln Sie Monatsrate und Zinsanteil mit dem <a href="/de/loan/mortgage/">Hypothekenrechner</a>.</li>
  <li>Prüfen Sie Ihr maximales Budget im <a href="/de/loan/home-affordability/">Budget- & Erschwinglichkeitsrechner</a>.</li>
  <li>Berechnen Sie langfristiges Zinseszinswachstum mit dem <a href="/de/finance/compound-interest/">Zinseszinsrechner</a>.</li>
</ul>
`
    },
    ja: {
      title: "【徹底検証】賃貸 vs 持ち家 どっちが得？損益分岐点と「5%ルール」で導く最適解",
      description: "「家賃を払うのは現金を捨てるのと同じ」は本当か？固定資産税・修繕積立金・機会費用を踏まえた客観的な数理モデルと損益分岐点をわかりやすく解説。",
      content: `
<p><em>「家賃を払い続けるのは大家の住宅ローンを肩代わりしているだけ。」</em><br />
<em>「どうせ毎月お金を払うなら、資産として手元に残る持ち家を買うべき。」</em></p>
<p>住宅購入を巡る議論で、誰もが一度は耳にするフレーズです。長年にわたり「持ち家＝一人前の証・確実な資産形成」という固定観念が広く浸透してきました。</p>
<p><strong>しかし、物件価格が高騰し、金利環境も変動を見せる現代において、その単純な二者択一は非常に危険です。</strong></p>
<p>都市部では、同水準の住居に住む場合、住宅ローンの返済額や維持管理費の合計が<strong>賃貸物件の家賃を30%〜60%上回るケース</strong>が一般的になっています。「家賃＝掛け捨て」「持ち家＝資産」という素朴な比較は、数理的に正しいとは言えません。</p>

<h2>30秒でわかる判断チェックシート</h2>
<ol>
  <li><strong>5〜7年の居住期間ルール:</strong> 今後<strong>5〜7年以内</strong>に転職、転勤、結婚、家族構成の変化などで転居する可能性があるなら、<strong>「賃貸」</strong>が圧倒的に有利です。不動産の売買には仲介手数料、登記費用、不動産取得税など6%〜10%の諸費用（摩擦コスト）が発生するため、早期売却はほぼ確実に元本割れを招きます。</li>
  <li><strong>5%ルール（サンクコストの比較）:</strong> 物件価格の<strong>5%を12で割った金額</strong>を算出してください。同等クラスの物件がその金額<strong>未満の家賃</strong>で借りられるなら、賃貸を選んで頭金や余剰資金をインデックス投資に回す方が、長期的な純資産は大きくなります。</li>
  <li><strong>流動性ルール:</strong> 頭金や諸費用の支払いで手元の生活防衛資金が半年分未満に減少してしまうなら、<strong>「賃貸」</strong>を継続すべきです。住宅ローンの返済は毎月支払う「最低額」ですが、家賃は毎月支払う「最高額」です。</li>
</ol>

<h2>「賃貸は掛け捨て」という誤解の正体</h2>
<p>持ち家派が掲げる最大論点は「家賃はいくら払っても手元に残らない」という点です。しかし、<strong>持ち家にも手元に残らない「掛け捨てコスト（回収不能コスト）」が大量に存在します：</strong></p>
<ul>
  <li><strong>住宅ローンの利息負担:</strong> 30年〜35年の長期ローンでは、当初数年間は毎月の返済額のうち利息部分が大きな割合を占めます。</li>
  <li><strong>固定資産税・都市計画税:</strong> 所有している限り毎年自治体へ納付する税金であり、1円も資産形成にはなりません。</li>
  <li><strong>修繕費・リフォーム費用（年1%〜2%）:</strong> 給湯器、外壁、屋根、水回りの老朽化修繕。マンションの場合は管理費と修繕積立金が毎月徴収されます。</li>
  <li><strong>火災保険・地震保険料:</strong> 建物を保全するための経常的費用。</li>
</ul>

<h2>誰でも計算できる「5%ルール」とは</h2>
<p>住宅を保有することに伴う年間コストは、概ね次の3要素に集約されます：</p>
<ul>
  <li><strong>固定資産税・公租公課:</strong> 約1.0%</li>
  <li><strong>修繕・維持管理費:</strong> 約1.0%</li>
  <li><strong>資本コスト（金利と頭金の機会費用）:</strong> 約3.0%</li>
</ul>
<p>合計：<strong>物件価格の約5%が年間の回収不能コスト</strong>となります。</p>
<p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-3">
  <strong>損益分岐点の月額家賃 ＝（物件価格 × 0.05）÷ 12ヶ月</strong>
</p>

<h3>計算例（4,000万円の物件の場合）：</h3>
<ul>
  <li>4,000万円 × 0.05 ＝ <strong>年間200万円</strong>の回収不能コスト</li>
  <li>200万円 ÷ 12 ＝ <strong>月額 約16.7万円</strong></li>
</ul>
<p><strong>判断基準:</strong> 同等の住まいを<strong>月16.7万円未満</strong>で賃貸できるなら、賃貸＋株式投資の組み合わせが経済的に合理的です。家賃が16.7万円を超える場合は、持ち家購入に経済的メリットが生じ始めます。</p>

<h2>頭金の「機会費用（オポチュニティ・コスト）」</h2>
<p>頭金800万円と諸費用200万円の計1,000万円を不動産に投入することは、その1,000万円を<strong>世界株式インデックスファンド等で長期運用する機会を放棄したこと</strong>を意味します。</p>
<p>仮に1,000万円を年利7%で15年間運用した場合、元利合計は約<strong>2,759万円</strong>（約1,759万円の利益）に成長します。住宅の値上がり益がこの運用益と維持費の合計を上回らなければ、実質的な資産形成スピードは賃貸＋投資に軍配が上がります。</p>

<h2>「持ち家」を選ぶべき人の条件</h2>
<ul>
  <li>同一地域に<strong>最低7年〜10年以上</strong>定住する確信がある。</li>
  <li>大家の意向による退去リスクを完全に排除し、心理的安心感を得たい。</li>
  <li>リノベーションや間取り変更を自由に行いたい。</li>
  <li>毎月の余剰資金を投資に回す規律が弱く、住宅ローンを「強制的貯蓄」として活用したい。</li>
</ul>

<h2>「賃貸」を選ぶべき人の条件</h2>
<ul>
  <li>数年以内にキャリア変更、転勤、結婚などのライフイベントが見込まれる。</li>
  <li>都市部で物件価格に対して家賃相場が割安である。</li>
  <li>資産を不動産という単一の現物に固定化させず、流動性の高い金融資産で増やしたい。</li>
  <li>設備の故障修理や近隣トラブルの対応を管理会社に一任したい。</li>
</ul>

<h2>あなたの条件でシミュレーションを試す</h2>
<p>当サイトの金融シミュレーター（完全無料・個人情報送信なし）で具体的な損益を今すぐ検証できます：</p>
<ul>
  <li>資産の推移を比較する <a href="/ja/loan/rent-vs-buy/">賃貸 vs. 購入シミュレーター</a></li>
  <li>元利均等返済と利息総額を計算する <a href="/ja/loan/mortgage/">住宅ローン計算機</a></li>
  <li>安全な借入可能額を調べる <a href="/ja/loan/home-affordability/">借入可能額シミュレーター</a></li>
  <li>頭金の運用複利効果を計算する <a href="/ja/finance/compound-interest/">複利計算シミュレーター</a></li>
</ul>
`
    },
    fr: {
      title: "Louer ou acheter sa résidence principale ? La méthode mathématique pour bien choisir",
      description: "Louer, est-ce vraiment jeter l'argent par les fenêtres ? Découvrez la règle des 5 %, les coûts irrécupérables des propriétaires et le point de rentabilité achat vs location.",
      content: `
<p><em>« Être locataire, c'est jeter son argent par les fenêtres. »</em><br />
<em>« Pourquoi rembourser le prêt d'un propriétaire alors qu'on pourrait se constituer un patrimoine ? »</em></p>
<p>Toute personne hésitant entre la location et l'achat immobilier a déjà entendu ces arguments. Depuis des générations, la propriété immobilière est présentée comme le symbole ultime de la réussite patrimoniale.</p>
<p><strong>Pourtant, dans l'environnement économique actuel — avec des prix immobiliers élevés et des taux de crédit entre 3,5 % et 4,5 % —, cette règle empirique est mathématiquement obsolète.</strong></p>
<p>Dans de nombreuses métropoles, le coût mensuel d'un crédit immobilier et des charges de copropriété dépasse de <strong>30 % à 50 % le loyer d'un logement identique</strong>. Cela signifie-t-il qu'acheter est toujours une erreur ? Non. Mais cela prouve qu'acheter n'est <strong>plus une victoire financière automatique</strong>.</p>

<h2>Le test de décision en 30 secondes</h2>
<ol>
  <li><strong>La règle des 5 à 7 ans :</strong> Si vous risquez de déménager, de changer de poste ou d'agrandir votre famille d'ici <strong>5 à 7 ans</strong>, <strong>LOUEZ</strong>. Les frais de notaire, droits de mutation et commissions d'agence (8 % à 10 % du prix) imposent plusieurs années de valorisation pour simplement amortir ces coûts d'entrée.</li>
  <li><strong>La règle des 5 % :</strong> Multipliez le prix du bien convoité par <strong>5 %</strong>, puis divisez par 12. Si vous pouvez louer un bien équivalent pour <strong>moins que cette somme</strong>, la location couplée à l'investissement de votre épargne sur les marchés financiers générera davantage de patrimoine net.</li>
  <li><strong>La règle de précaution :</strong> Si votre apport personnel réduit votre épargne de sécurité à moins de 6 mois de dépenses courantes, <strong>LOUEZ</strong>. La mensualité de crédit est le <em>minimum</em> que vous paierez chaque mois ; le loyer est le <em>maximum</em>.</li>
</ol>

<h2>Le mythe de l'argent « jeté par les fenêtres »</h2>
<p>L'argument en faveur de l'achat repose sur l'idée reçue que le loyer est une perte pure, tandis que le crédit capitalise du patrimoine.</p>
<p>En réalité, <strong>le statut de propriétaire génère d'immenses coûts irrécupérables qui disparaissent sans créer le moindre euro de patrimoine :</strong></p>
<ul>
  <li><strong>Les intérêts d'emprunt :</strong> Durant les premières années d'un crédit, plus de 60 % de chaque mensualité est absorbée par les intérêts bancaires.</li>
  <li><strong>La taxe foncière :</strong> Un prélèvement obligatoire sans contrepartie patrimoniale.</li>
  <li><strong>L'entretien et les travaux (1 % à 2 % par an) :</strong> Ravalement, toiture, chaudière et plomberie incombent au propriétaire.</li>
  <li><strong>Les charges de copropriété non récupérables :</strong> Frais de gestion et fonds de travaux.</li>
</ul>

<h2>La Règle des 5 % en pratique</h2>
<p>Les dépenses annuelles à fonds perdu d'un bien immobilier se résument à :</p>
<ul>
  <li><strong>Taxe foncière :</strong> ~1,0 %</li>
  <li><strong>Entretien et gros travaux :</strong> ~1,0 %</li>
  <li><strong>Coût du capital (intérêts et manque à gagner sur l'apport) :</strong> ~3,0 %</li>
</ul>
<p>Total : <strong>5 % de la valeur du bien chaque année</strong>.</p>
<p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-3">
  <strong>Loyer mensuel d'équilibre = (Prix d'achat × 0,05) ÷ 12</strong>
</p>

<h3>Exemple concret :</h3>
<p>Pour un appartement de <strong>300 000 €</strong> :</p>
<ul>
  <li>300 000 € × 0,05 = <strong>15 000 € par an</strong> de coûts irrécupérables.</li>
  <li>Divisé par 12 mois = <strong>1 250 € par mois</strong>.</li>
</ul>
<p><strong>Verdict :</strong> Si vous pouvez vous loger dans un bien équivalent pour <strong>moins de 1 250 € par mois</strong>, la location est financièrement plus rentable si vous investissez la différence en bourse (ETF indiciels). Au-delà de 1 250 €, l'achat redevient attractif.</p>

<h2>Quand devez-vous ACHETER ?</h2>
<ul>
  <li>Vous êtes certain de rester dans le bien au moins <strong>7 à 10 ans</strong>.</li>
  <li>Vous privilégiez la stabilité et souhaitez vous prémunir d'un congé délivré par un bailleur.</li>
  <li>Vous désirez la liberté totale d'aménager et rénover votre espace.</li>
  <li>Vous manquez de discipline pour épargner chaque mois (le crédit fait office d'épargne forcée).</li>
</ul>

<h2>Quand devez-vous LOUER ?</h2>
<ul>
  <li>Votre vie professionnelle ou familiale peut évoluer dans les <strong>3 à 5 ans</strong>.</li>
  <li>Le ratio prix/loyer de votre secteur géographique est particulièrement défavorable aux acheteurs.</li>
  <li>Vous préférez faire fructifier votre capital sur des supports financiers liquides et performants.</li>
  <li>Vous ne souhaitez pas supporter la gestion des imprévus techniques et des assemblées de copropriété.</li>
</ul>

<h2>Faites vos propres simulations en ligne</h2>
<p>Testez gratuitement vos hypothèses financières sans aucune transmission de données :</p>
<ul>
  <li>Comparez vos perspectives de patrimoine avec le <a href="/fr/loan/rent-vs-buy/">Calculateur Acheter ou Louer</a>.</li>
  <li>Calculez vos mensualités et le coût du crédit avec le <a href="/fr/loan/mortgage/">Simulateur de Crédit Immobilier</a>.</li>
  <li>Évaluez votre capacité d'emprunt sur notre <a href="/fr/loan/home-affordability/">Calculateur de Capacité d'Achat</a>.</li>
  <li>Visualisez la puissance des intérêts réinvestis sur le <a href="/fr/finance/compound-interest/">Calculateur d'Intérêts Composés</a>.</li>
</ul>
`
    },
    pt: {
      title: "Alugar ou Comprar Imóvel? O cálculo real e o custo de oportunidade explicado",
      description: "Pagar aluguel é mesmo rasgar dinheiro? Conheça a regra dos 5%, os custos irrecuperáveis do financiamento e como descobrir se vale mais a pena comprar ou alugar.",
      content: `
<p><em>"Pagar aluguel é jogar dinheiro no lixo."</em><br />
<em>"Por que pagar as parcelas do imóvel de outra pessoa quando você poderia construir patrimônio próprio?"</em></p>
<p>Se você está diante do dilema de alugar ou comprar um imóvel, certamente já ouviu essas frases repetidas à exaustão por parentes, amigos e corretores. Durante décadas, a casa própria foi tratada como o troféu definitivo de maturidade financeira.</p>
<p><strong>Contudo, no cenário imobiliário atual — com preços elevados e taxas de financiamento em patamares expressivos —, esse conselho popular tornou-se matematicamente questionável.</strong></p>
<p>Em grande parte das capitais e cidades desenvolvidas, a soma da parcela do financiamento, condomínio e manutenção chega a ser <strong>30% a 60% maior do que o aluguel de um imóvel idêntico</strong>. Comprar imóvel é sempre um erro? De forma alguma. Mas significa que comprar <strong>não é uma vitória financeira automática garantida</strong>.</p>

<h2>O teste prático em 30 segundos</h2>
<ol>
  <li><strong>A regra do horizonte temporal (5 a 7 anos):</strong> Se existe chance concreta de você mudar de emprego, de cidade ou de tamanho familiar nos próximos <strong>5 a 7 anos</strong>, <strong>ALUGUE</strong>. Os custos de transação imobiliária (ITBI, escritura, registro cartorário e corretagem de 6% a 10%) demandam vários anos de valorização apenas para empatar os custos iniciais.</li>
  <li><strong>A regra dos 5%:</strong> Multiplique o valor venal do imóvel por <strong>5%</strong> e divida por 12. Se você puder alugar uma casa equivalente por <strong>menos do que esse valor</strong>, alugar e aplicar a diferença em investimentos líquidos produzirá um patrimônio líquido maior no longo prazo.</li>
  <li><strong>A regra da reserva de emergência:</strong> Se a entrada e os custos de transferência deixarem você com menos de 6 meses de custo de vida na conta, <strong>ALUGUE</strong>. A prestação do financiamento é o valor <em>mínimo</em> que você desembolsa no mês; o aluguel é o <em>máximo</em>.</li>
</ol>

<h2>Desmistificando o conceito de "jogar dinheiro fora"</h2>
<p>O apelo emocional a favor da compra parte do pressuposto de que o aluguel é 100% perdido, enquanto a parcela do financiamento constrói patrimônio.</p>
<p>Isso ignora a realidade dos <strong>custos irrecuperáveis do proprietário, que evaporam tanto quanto o aluguel:</strong></p>
<ul>
  <li><strong>Juros do financiamento bancário:</strong> Nos primeiros anos (tabela SAC ou Price), a maior fatia de cada prestação é composta estritamente de juros pagos ao banco.</li>
  <li><strong>IPTU:</strong> Tributo municipal anual que não agrega um único centavo ao seu patrimônio líquido.</li>
  <li><strong>Seguro habitacional e predial:</strong> Despesas compulsórias para proteger a operação.</li>
  <li><strong>Manutenção preventiva e corretiva (1% a 2% ao ano):</strong> Infiltrações, pintura, telhados, sistemas elétricos e hidráulicos. A regra de mercado orienta separar anualmente de 1% a 2% do valor do imóvel.</li>
  <li><strong>Taxas de condomínio não recuperáveis:</strong> Despesas operacionais e fundos de reserva da administração predial.</li>
</ul>

<h2>Como funciona a Regra dos 5%</h2>
<p>A regra quantifica os três custos anuais irrecuperáveis de um imóvel próprio:</p>
<ul>
  <li><strong>IPTU e taxas públicas:</strong> ~1,0%</li>
  <li><strong>Manutenção e depreciação física:</strong> ~1,0%</li>
  <li><strong>Custo de capital (juros do crédito e custo de oportunidade da entrada):</strong> ~3,0%</li>
</ul>
<p>Soma: <strong>5% ao ano sobre o valor do imóvel</strong>.</p>
<p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-3">
  <strong>Ponto de Equilíbrio do Aluguel Mensal = (Preço do Imóvel × 0,05) ÷ 12</strong>
</p>

<h3>Exemplo com números reais:</h3>
<p>Considere um apartamento avaliado em <strong>R$ 500.000</strong>:</p>
<ul>
  <li>R$ 500.000 × 0,05 = <strong>R$ 25.000 ao ano</strong> em custos que não viram patrimônio.</li>
  <li>Dividido por 12 meses = <strong>R$ 2.083 por mês</strong>.</li>
</ul>
<p><strong>Critério decisório:</strong> Se você conseguir alugar um apartamento equivalente por <strong>menos de R$ 2.083 mensais</strong>, permanecer no aluguel e investir a entrada e a folga mensal em renda fixa ou fundos diversificados é a escolha matematicamente mais rentável. Acima de R$ 2.083, a aquisição passa a ser mais atrativa.</p>

<h2>O custo de oportunidade da entrada</h2>
<p>Ao adquirir um imóvel de R$ 500.000 e dar R$ 100.000 de entrada mais R$ 25.000 em documentação, você imobiliza <strong>R$ 125.000 em tijolos</strong>.</p>
<p>Se esses R$ 125.000 forem investidos a uma taxa real de 7% ao ano (já descontada a inflação), após 15 anos o montante atinge cerca de <strong>R$ 344.800</strong> em patrimônio 100% líquido, sem despesas com reformas ou impostos de transmissão.</p>

<h2>Quando vale a pena COMPRAR?</h2>
<ul>
  <li>Você tem certeza de que permanecerá no imóvel e na região por <strong>pelo menos 7 a 10 anos</strong>.</li>
  <li>Você valoriza a previsibilidade e a tranquilidade de não correr risco de despejo ou rescisão contratual.</li>
  <li>Você faz questão de reformar, pintar paredes e alterar ambientes com total liberdade.</li>
  <li>Você reconhece que não possui disciplina para investir todos os meses (o financiamento vira uma poupança forçada).</li>
</ul>

<h2>Quando vale a pena ALUGAR?</h2>
<ul>
  <li>Você pode mudar de emprego, de cidade ou de planos familiares nos próximos <strong>3 a 5 anos</strong>.</li>
  <li>Na sua cidade, os aluguéis estão baratos em comparação com o preço de venda dos imóveis.</li>
  <li>Você prefere ver seu patrimônio render com liquidez em aplicações financeiras seguras e diversificadas.</li>
  <li>Você prefere transferir riscos de reformas e manutenção estrutural para o proprietário.</li>
</ul>

<h2>Faça as contas do seu cenário com nossas ferramentas</h2>
<p>Compare seus dados de forma 100% gratuita, instantânea e privada no seu navegador:</p>
<ul>
  <li>Compare as curvas de riqueza na <a href="/pt/loan/rent-vs-buy/">Calculadora Alugar vs. Comprar</a>.</li>
  <li>Simule parcelas e juros na <a href="/pt/loan/mortgage/">Calculadora de Financiamento Imobiliário</a>.</li>
  <li>Descubra seu limite seguro de parcela na <a href="/pt/loan/home-affordability/">Calculadora de Capacidade de Compra</a>.</li>
  <li>Projete o rendimento do seu dinheiro na <a href="/pt/finance/compound-interest/">Calculadora de Juros Compostos</a>.</li>
</ul>
`
    }
  },

  "how-much-401k-reduces-taxes-pays-monthly-lasts": {
    en: {
      title: "401(k) Calculator Guide: Tax Savings, Monthly Payouts, and How Long It Will Last",
      description: "Calculate how much your 401(k) contributions reduce your taxes today, estimate your monthly retirement paycheck, and determine how long your nest egg will last.",
      content: `
<p>When planning for retirement, three fundamental questions dominate almost every worker's mind:</p>
<ol>
  <li><strong>"How much will my 401(k) contribution reduce my taxes this year?"</strong></li>
  <li><strong>"How much will my 401(k) actually pay me per month when I retire?"</strong></li>
  <li><strong>"How long will my 401(k) money last before it runs out?"</strong></li>
</ol>
<p>Whether you are in your 20s starting your first job, in your 40s maximizing employer matching, or in your 60s preparing to transition into retirement, understanding the math behind these three stages is essential to achieving financial security.</p>
<p>Here is the complete guide and formula breakdown for each calculation, with real-world dollar examples and interactive calculator tools.</p>

<h2>Part 1: How Much Does a 401(k) Contribution Reduce Taxes?</h2>
<p>A Traditional 401(k) is funded with <strong>pre-tax dollars</strong>. Every dollar you contribute directly reduces your Gross Taxable Income reported on your tax return.</p>

<h3>The Tax Savings Formula</h3>
<p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-3">
  <strong>Immediate Tax Savings = Annual 401(k) Contribution × Marginal Tax Rate (Federal + State)</strong>
</p>
<p>Because contributions come off the top of your earnings, they are shielded at your <strong>highest marginal tax bracket</strong>, not your lower effective tax rate.</p>

<h3>The "Discounted Contribution" Effect on Your Paycheck</h3>
<p>Many workers hesitate to save because they fear a smaller paycheck. However, tax savings soften the blow substantially.</p>
<p>If you are in the <strong>24% federal tax bracket</strong> and pay <strong>5% state income tax</strong> (29% combined marginal rate):</p>
<ul>
  <li>A <strong>$10,000 contribution</strong> saves you <strong>$2,900 in taxes</strong>.</li>
  <li>Your take-home paycheck drops by only <strong>$7,100</strong>, while a full <strong>$10,000</strong> goes to work compounding in your retirement account.</li>
  <li>That is an immediate <strong>29% return on investment</strong> before market growth!</li>
</ul>

<h3>Tax Savings by Salary & Contribution Rate</h3>
<table class="w-full text-left border-collapse border border-hairline my-4 text-xs sm:text-sm">
  <thead>
    <tr class="bg-canvas-soft border-b border-hairline">
      <th class="p-2.5 font-bold text-ink">Annual Salary</th>
      <th class="p-2.5 font-bold text-ink">Contribution Rate</th>
      <th class="p-2.5 font-bold text-ink">Annual Deferral</th>
      <th class="p-2.5 font-bold text-ink">Marginal Tax Bracket</th>
      <th class="p-2.5 font-bold text-ink">Annual Tax Savings</th>
      <th class="p-2.5 font-bold text-ink">Take-Home Reduction</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">$60,000</td>
      <td class="p-2.5 font-mono">6%</td>
      <td class="p-2.5 font-mono">$3,600</td>
      <td class="p-2.5">12% Fed + 4% State (16%)</td>
      <td class="p-2.5 font-mono text-emerald-600 dark:text-emerald-400 font-bold">$576</td>
      <td class="p-2.5 font-mono">$3,024 ($252/mo)</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">$95,000</td>
      <td class="p-2.5 font-mono">8%</td>
      <td class="p-2.5 font-mono">$7,600</td>
      <td class="p-2.5">22% Fed + 5% State (27%)</td>
      <td class="p-2.5 font-mono text-emerald-600 dark:text-emerald-400 font-bold">$2,052</td>
      <td class="p-2.5 font-mono">$5,548 ($462/mo)</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">$140,000</td>
      <td class="p-2.5 font-mono">10%</td>
      <td class="p-2.5 font-mono">$14,000</td>
      <td class="p-2.5">24% Fed + 6% State (30%)</td>
      <td class="p-2.5 font-mono text-emerald-600 dark:text-emerald-400 font-bold">$4,200</td>
      <td class="p-2.5 font-mono">$9,800 ($817/mo)</td>
    </tr>
    <tr class="bg-canvas-soft/50 font-bold">
      <td class="p-2.5 font-medium">$200,000</td>
      <td class="p-2.5 font-mono">Max ($23,500)</td>
      <td class="p-2.5 font-mono">$23,500</td>
      <td class="p-2.5">32% Fed + 6% State (38%)</td>
      <td class="p-2.5 font-mono text-emerald-600 dark:text-emerald-400 font-bold">$8,930</td>
      <td class="p-2.5 font-mono">$14,570 ($1,214/mo)</td>
    </tr>
  </tbody>
</table>
<p><em>Note on Roth 401(k):</em> If you opt for a <strong>Roth 401(k)</strong>, you receive no upfront tax deduction today, but all qualified withdrawals in retirement—including decades of capital gains—are <strong>100% tax-free</strong>.</p>

<h2>Part 2: How Much Will My 401(k) Pay Me Per Month in Retirement?</h2>
<p>Once you retire, your 401(k) shifts from an accumulation vehicle into your personal <strong>monthly retirement paycheck</strong>.</p>

<h3>The 4% Safe Withdrawal Rule</h3>
<p>The standard benchmark for converting a nest egg into steady monthly income is the <strong>4% Rule</strong> (originating from the Trinity Study). Withdrawing 4% of your starting retirement balance in year one, adjusted annually for inflation, historically guarantees a 95%+ probability that your savings will last at least 30 years.</p>
<p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-3">
  <strong>Monthly Retirement Paycheck = (Total 401(k) Balance × 0.04) ÷ 12</strong>
</p>

<h3>401(k) Monthly Paycheck Matrix</h3>
<table class="w-full text-left border-collapse border border-hairline my-4 text-xs sm:text-sm">
  <thead>
    <tr class="bg-canvas-soft border-b border-hairline">
      <th class="p-2.5 font-bold text-ink">401(k) Nest Egg</th>
      <th class="p-2.5 font-bold text-ink">Annual Withdrawal (4%)</th>
      <th class="p-2.5 font-bold text-ink">Monthly 401(k) Paycheck</th>
      <th class="p-2.5 font-bold text-ink">Est. Social Security (Couple)</th>
      <th class="p-2.5 font-bold text-ink">Total Monthly Income</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-mono font-medium">$250,000</td>
      <td class="p-2.5 font-mono">$10,000/yr</td>
      <td class="p-2.5 font-mono font-bold">$833/mo</td>
      <td class="p-2.5 font-mono">$3,200/mo</td>
      <td class="p-2.5 font-mono text-emerald-600 dark:text-emerald-400 font-bold">$4,033/mo</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-mono font-medium">$500,000</td>
      <td class="p-2.5 font-mono">$20,000/yr</td>
      <td class="p-2.5 font-mono font-bold">$1,667/mo</td>
      <td class="p-2.5 font-mono">$3,200/mo</td>
      <td class="p-2.5 font-mono text-emerald-600 dark:text-emerald-400 font-bold">$4,867/mo</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-mono font-medium">$750,000</td>
      <td class="p-2.5 font-mono">$30,000/yr</td>
      <td class="p-2.5 font-mono font-bold">$2,500/mo</td>
      <td class="p-2.5 font-mono">$3,500/mo</td>
      <td class="p-2.5 font-mono text-emerald-600 dark:text-emerald-400 font-bold">$6,000/mo</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-mono font-medium">$1,000,000</td>
      <td class="p-2.5 font-mono">$40,000/yr</td>
      <td class="p-2.5 font-mono font-bold">$3,333/mo</td>
      <td class="p-2.5 font-mono">$3,800/mo</td>
      <td class="p-2.5 font-mono text-emerald-600 dark:text-emerald-400 font-bold">$7,133/mo</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-mono font-medium">$1,500,000</td>
      <td class="p-2.5 font-mono">$60,000/yr</td>
      <td class="p-2.5 font-mono font-bold">$5,000/mo</td>
      <td class="p-2.5 font-mono">$4,000/mo</td>
      <td class="p-2.5 font-mono text-emerald-600 dark:text-emerald-400 font-bold">$9,000/mo</td>
    </tr>
    <tr class="bg-canvas-soft/50 font-bold">
      <td class="p-2.5 font-mono font-medium">$2,000,000</td>
      <td class="p-2.5 font-mono">$80,000/yr</td>
      <td class="p-2.5 font-mono font-bold">$6,667/mo</td>
      <td class="p-2.5 font-mono">$4,200/mo</td>
      <td class="p-2.5 font-mono text-emerald-600 dark:text-emerald-400 font-bold">$10,867/mo</td>
    </tr>
  </tbody>
</table>

<h2>Part 3: How Long Will My 401(k) Last?</h2>
<p>The lifespan of your retirement portfolio depends on three interdependent levers:</p>
<ol>
  <li><strong>Your Initial Withdrawal Rate:</strong> Conservative (3.5%), Standard (4.0%), or Aggressive (5.0%+).</li>
  <li><strong>Investment Asset Allocation:</strong> Balancing growth equities with capital-preserving bonds and short-term yield.</li>
  <li><strong>Sequence of Returns Risk:</strong> Suffering an aggressive market downturn in the first 3 to 5 years of withdrawals.</li>
</ol>

<h3>Portfolio Longevity by Withdrawal Rate</h3>
<p class="text-xs text-mute">*(Assuming a classic 60/40 balanced portfolio earning 5.5% net annual return with 2.5% inflation)*</p>
<table class="w-full text-left border-collapse border border-hairline my-4 text-xs sm:text-sm">
  <thead>
    <tr class="bg-canvas-soft border-b border-hairline">
      <th class="p-2.5 font-bold text-ink">Withdrawal Rate</th>
      <th class="p-2.5 font-bold text-ink">Monthly on $500k</th>
      <th class="p-2.5 font-bold text-ink">Monthly on $1M</th>
      <th class="p-2.5 font-bold text-ink">Portfolio Longevity</th>
      <th class="p-2.5 font-bold text-ink">Depletion Risk</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">3.5% (Conservative)</td>
      <td class="p-2.5 font-mono">$1,458/mo</td>
      <td class="p-2.5 font-mono">$2,917/mo</td>
      <td class="p-2.5 font-bold text-emerald-600 dark:text-emerald-400">35+ Years (Indefinite)</td>
      <td class="p-2.5 text-emerald-600 dark:text-emerald-400 font-medium">Near 0% Risk</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">4.0% (Trinity Rule)</td>
      <td class="p-2.5 font-mono">$1,667/mo</td>
      <td class="p-2.5 font-mono">$3,333/mo</td>
      <td class="p-2.5 font-bold text-emerald-600 dark:text-emerald-400">30 to 33 Years</td>
      <td class="p-2.5 text-emerald-600 dark:text-emerald-400 font-medium">Low Risk (<5%)</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">5.0% (Aggressive)</td>
      <td class="p-2.5 font-mono">$2,083/mo</td>
      <td class="p-2.5 font-mono">$4,167/mo</td>
      <td class="p-2.5 font-bold text-amber-600 dark:text-amber-400">21 to 24 Years</td>
      <td class="p-2.5 text-amber-600 dark:text-amber-400 font-medium">Moderate Risk</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">6.0% (High Risk)</td>
      <td class="p-2.5 font-mono">$2,500/mo</td>
      <td class="p-2.5 font-mono">$5,000/mo</td>
      <td class="p-2.5 font-bold text-rose-600 dark:text-rose-400">15 to 17 Years</td>
      <td class="p-2.5 text-rose-600 dark:text-rose-400 font-medium">High Depletion Risk</td>
    </tr>
    <tr class="bg-canvas-soft/50 font-bold">
      <td class="p-2.5 font-medium">7.5%+ (Dangerous)</td>
      <td class="p-2.5 font-mono">$3,125/mo</td>
      <td class="p-2.5 font-mono">$6,250/mo</td>
      <td class="p-2.5 font-bold text-rose-600 dark:text-rose-400">10 to 12 Years</td>
      <td class="p-2.5 text-rose-600 dark:text-rose-400 font-medium">Extremely Dangerous</td>
    </tr>
  </tbody>
</table>

<h3>3 Rules to Protect Your 401(k) from Running Out</h3>
<ul>
  <li><strong>The Dynamic Spending Rule:</strong> In negative market years, freeze your annual inflation adjustment. Research shows this single habit increases portfolio longevity past 98%.</li>
  <li><strong>The 2-Year Cash Buffer:</strong> Keep 18 to 24 months of living expenses in high-yield cash equivalents or Treasury bills so you never have to sell equities during a market crash.</li>
  <li><strong>Plan for Required Minimum Distributions (RMDs):</strong> Under current IRS guidelines, mandatory withdrawals begin at <strong>age 73</strong> (rising to <strong>age 75 in 2033</strong>).</li>
</ul>

<h2>Calculate Your Exact 401(k) Numbers</h2>
<p>Model your exact salary, employer match, tax rate, and retirement timeline with our free, private online tools:</p>
<ul>
  <li>Calculate your balance, employer match, and tax savings on our <a href="/retirement/401k/">401(k) Calculator with Match</a>.</li>
  <li>Forecast your portfolio longevity and withdrawal rate with the <a href="/retirement/planner/">Retirement Planner</a>.</li>
  <li>Compare upfront tax deductions vs. tax-free growth with our <a href="/retirement/ira-comparison/">Roth vs. Traditional IRA Comparison</a>.</li>
  <li>Estimate your guaranteed monthly government benefits on our <a href="/retirement/social-security/">Social Security Calculator</a>.</li>
</ul>
`
    },
    es: {
      title: "Calculadora de 401(k): Ahorro en impuestos, pago mensual y cuánto durará tu dinero",
      description: "Calcula cuánto reducen tus impuestos las aportaciones al 401(k), estima tu sueldo mensual en la jubilación (regla del 4%) y descubre cuántos años durará tu fondo.",
      content: `
<p>Al planificar la jubilación, tres grandes preguntas preocupan a cualquier trabajador:</p>
<ol>
  <li><strong>«¿Cuánto reducirá mis impuestos aportar al 401(k) o plan de pensiones este año?»</strong></li>
  <li><strong>«¿Cuánto dinero cobraré al mes cuando me jubile?»</strong></li>
  <li><strong>«¿Cuántos años durarán mis ahorros antes de agotarse?»</strong></li>
</ol>
<p>Tanto si estás empezando tu carrera laboral como si estás en tu etapa de máxima capacidad de ahorro o a punto de jubilarte, entender estas tres fases es clave para garantizar tu tranquilidad financiera.</p>

<h2>Parte 1: ¿Cuánto reducen los impuestos las aportaciones al 401(k)?</h2>
<p>El 401(k) tradicional se nutre de <strong>dinero antes de impuestos (pre-tax)</strong>. Cada euro o dólar aportado se descuenta directamente de tu base imponible en la declaración de la renta.</p>

<h3>La fórmula del ahorro fiscal</h3>
<p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-3">
  <strong>Ahorro fiscal inmediato = Aportación anual al 401(k) × Tipo impositivo marginal</strong>
</p>
<p>Dado que las aportaciones se restan del tramo superior de tus ingresos, el ahorro se calcula sobre tu <strong>tramo marginal más alto</strong>, no sobre tu tipo impositivo medio.</p>

<h3>El impacto real en tu nómina</h3>
<p>Si te encuentras en un tramo marginal combinado del <strong>29%</strong> (federal + estatal / tramo IRPF):</p>
<ul>
  <li>Una aportación de <strong>10.000 $</strong> te ahorra <strong>2.900 $ en impuestos</strong> de forma inmediata.</li>
  <li>Tu sueldo neto mensual disminuye solo <strong>7.100 $ al año</strong>, mientras que en tu cuenta de jubilación crecen los <strong>10.000 $ íntegros</strong> con interés compuesto.</li>
</ul>

<h2>Parte 2: ¿Cuánto me pagará el 401(k) al mes en la jubilación?</h2>
<p>Llegado el retiro, tu fondo de jubilación se transforma en tu <strong>sueldo mensual privado</strong>.</p>

<h3>La Regla del 4% para retiradas seguras</h3>
<p>El estándar internacional más respetado es la <strong>Regla del 4%</strong> (estudio Trinity). Retirar el 4% del capital acumulado durante el primer año, ajustándolo anualmente por la inflación, garantiza con más de un 95% de probabilidad que el dinero durará al menos 30 años.</p>
<p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-3">
  <strong>Paga mensual estimada = (Fondo total acumulado × 0,04) ÷ 12</strong>
</p>

<h3>Tabla de ingresos mensuales según tu patrimonio acumulado</h3>
<ul>
  <li><strong>250.000 $:</strong> 833 $/mes (10.000 $/año)</li>
  <li><strong>500.000 $:</strong> 1.667 $/mes (20.000 $/año)</li>
  <li><strong>750.000 $:</strong> 2.500 $/mes (30.000 $/año)</li>
  <li><strong>1.000.000 $:</strong> 3.333 $/mes (40.000 $/año)</li>
  <li><strong>1.500.000 $:</strong> 5.000 $/mes (60.000 $/año)</li>
</ul>

<h2>Parte 3: ¿Cuánto tiempo durará mi 401(k)?</h2>
<p>La longevidad de tu fondo de retiro depende de tres variables:</p>
<ol>
  <li><strong>Porcentaje de retirada:</strong> 3,5% (muy conservador), 4% (estándar), 5% (arriesgado) o más del 6% (peligro de quiebra).</li>
  <li><strong>Distribución de activos:</strong> Proporción equilibrada entre renta variable (acciones para combatir la inflación) y renta fija (bonos para amortiguar caídas).</li>
  <li><strong>Riesgo de secuencia de rendimientos:</strong> El impacto negativo de atravesar un mercado bajista justo en los primeros 3 a 5 años tras la jubilación.</li>
</ol>

<h2>Calcula tus cifras exactas online gratis</h2>
<p>Utiliza nuestras herramientas privadas y gratuitas para simular tu plan de jubilación:</p>
<ul>
  <li>Simula aportaciones, aportación de la empresa y deducciones con la <a href="/es/retirement/401k/">Calculadora 401(k) con Empresa (Match)</a>.</li>
  <li>Estima la duración de tus ahorros con el <a href="/es/retirement/planner/">Planificador de Jubilación</a>.</li>
  <li>Compara planes tradicionales frente a Roth en la <a href="/es/retirement/ira-comparison/">Comparativa Roth vs. Tradicional</a>.</li>
  <li>Calcula tus ingresos públicos estimados con la <a href="/es/retirement/social-security/">Calculadora de Seguridad Social</a>.</li>
</ul>
`
    },
    de: {
      title: "401(k)- & Rentenrechner: Steuervorteile, monatliche Auszahlung & Haltbarkeit des Vermögens",
      description: "Berechnen Sie, wie stark 401(k)-Beiträge Ihre Steuerlast senken, wie hoch Ihre monatliche Rentenauszahlung (4%-Regel) ist und wie viele Jahre Ihr Altersguthaben reicht.",
      content: `
<p>Bei der Altersvorsorgeplanung stehen drei Kernfragen im Mittelpunkt:</p>
<ol>
  <li><strong>„Um wie viel senkt meine Einzahlung in die betriebliche Altersvorsorge (401k) meine Steuerlast?“</strong></li>
  <li><strong>„Wie viel monatliches Einkommen schüttet mein Depot im Ruhestand aus?“</strong></li>
  <li><strong>„Wie viele Jahre reicht mein Erspartes, bevor das Kapital aufgebraucht ist?“</strong></li>
</ol>
<p>Egal ob Berufseinsteiger, Angestellter in der Vermögensaufbauphase oder kurz vor dem Renteneintritt: Das Zusammenspiel dieser drei Phasen entscheidet über Ihren finanziellen Freiraum im Alter.</p>

<h2>Teil 1: Steuerersparnis durch steuerbegünstigte Vorsorge</h2>
<p>Einzahlungen in traditionelle Altersvorsorgepläne (wie das US-amerikanische 401k-Modell oder die betriebliche Altersvorsorge) erfolgen aus dem <strong>Bruttoeinkommen (vor Steuern)</strong>.</p>
<p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-3">
  <strong>Direkte Steuerersparnis = Jährlicher Sparbeitrag × Grenzsteuersatz</strong>
</p>
<p>Da die Beiträge von Ihrem Spitzeneinkommen abgezogen werden, sparen Sie Steuern mit Ihrem <strong>Grenzsteuersatz</strong>, nicht mit dem niedrigeren Durchschnittssteuersatz. Bei einem Grenzsteuersatz von 30 % und einem Beitrag von 10.000 € sinkt Ihr Nettoauszahlungsbetrag lediglich um 7.000 €, während die vollen 10.000 € renditestark für Sie arbeiten.</p>

<h2>Teil 2: Monatliche Auszahlung im Ruhestand (Die 4%-Regel)</h2>
<p>Im Ruhestand wird aus Ihrem angesparten Vermögen eine monatliche <strong>Privatrente</strong>.</p>
<p>Die international anerkannte <strong>4%-Regel</strong> (Trinity-Studie) besagt: Wer im ersten Rentenjahr 4 % seines Gesamtportfolios entnimmt und diesen Betrag künftig jährlich an die Inflation anpasst, hat eine über 95%ige Wahrscheinlichkeit, dass das Depot mindestens 30 Jahre lang liquide bleibt.</p>
<p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-3">
  <strong>Monatliche Entnahme = (Gesamtersparnisse × 0,04) ÷ 12</strong>
</p>
<ul>
  <li><strong>250.000 € Depot:</strong> ca. 833 € / Monat</li>
  <li><strong>500.000 € Depot:</strong> ca. 1.667 € / Monat</li>
  <li><strong>1.000.000 € Depot:</strong> ca. 3.333 € / Monat</li>
  <li><strong>1.500.000 € Depot:</strong> ca. 5.000 € / Monat</li>
</ul>

<h2>Teil 3: Wie lange hält das Altersvorsorgeguthaben?</h2>
<p>Die Lebensdauer Ihres Kapitals hängt von der gewählten Entnahmerate ab:</p>
<ul>
  <li><strong>3,5 % Entnahme:</strong> Dauerhafter Vermögenserhalt (35+ Jahre, Erhalt der Substanz).</li>
  <li><strong>4,0 % Entnahme:</strong> Standard für ca. 30 bis 33 Jahre Ruhestand.</li>
  <li><strong>5,0 % Entnahme:</strong> Erhöhtes Risiko – das Kapital reicht meist für ca. 20 bis 24 Jahre.</li>
  <li><strong>6,0 %+ Entnahme:</strong> Hohes Verzehrrisiko – Erschöpfung in unter 18 Jahren wahrscheinlich.</li>
</ul>

<h2>Berechnen Sie Ihre Vorsorge online</h2>
<p>Nutzen Sie unsere kostenlosen und diskreten Online-Rechner:</p>
<ul>
  <li>Berechnen Sie Sparbeitrag und Arbeitgeberzuschuss mit dem <a href="/de/retirement/401k/">401(k)-Rechner mit Arbeitgeberzuschuss</a>.</li>
  <li>Testen Sie Ihre Entnahmedauer im <a href="/de/retirement/planner/">Ruhestandsplaner</a>.</li>
  <li>Vergleichen Sie Vor- und Nachsteuer-Modelle im <a href="/de/retirement/ira-comparison/">IRA / Altersvorsorge-Vergleich</a>.</li>
  <li>Ermitteln Sie gesetzliche Ansprüche mit dem <a href="/de/retirement/social-security/">Renten- & Sozialversicherungsrechner</a>.</li>
</ul>
`
    },
    ja: {
      title: "【401k・確定拠出年金 計算ガイド】節税額・毎月の受取額・資産は何年持つかを徹底解説",
      description: "401(k)拠出による毎年の節税額、退職後に受け取れる毎月の年金収入（4%ルール）、資産の寿命（何歳まで持つか）の計算方法と数理モデルを詳しく解説。",
      content: `
<p>老後資金の計画を立てる際、誰もが知りたい3大疑問があります：</p>
<ol>
  <li><strong>「401(k)や確定拠出年金に拠出すると、今年の税金はいくら安くなるのか？」</strong></li>
  <li><strong>「退職後、毎月いくらの年金（取り崩し収入）を受け取れるのか？」</strong></li>
  <li><strong>「蓄えた資産は何年間持ちこたえるのか（何歳で底をつくか）？」</strong></li>
</ol>
<p>資産形成期から取り崩し期（デキュムレーション）まで、この3つの計算式を正しく把握しておくことで、老後の不安を解消できます。</p>

<h2>第1部：401(k)拠出による節税効果の計算</h2>
<p>一般的な401(k)や企業型・個人型確定拠出年金（iDeCo）は、<strong>税引き前の給与から拠出</strong>されます。拠出額の全額がその年の課税所得から控除されます。</p>
<p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-3">
  <strong>毎年の直接的な節税額 ＝ 年間拠出額 × 限界税率（所得税率 ＋ 住民税率）</strong>
</p>
<p>控除は所得の一番高い部分（限界税率）に適用されるため、実質的な手取り減少額よりもはるかに大きな資産が年金口座に積み立てられます。</p>

<h2>第2部：退職後に毎月いくら受け取れるか（4%ルール）</h2>
<p>退職後は、積み上げた資産を定期的に取り崩して<strong>「毎月の退職給与」</strong>を作ります。</p>
<p>安全な取り崩し率の世界的基準として知られるのが<strong>「4%ルール（トリニティ・スタディ）」</strong>です。退職初年度に資産総額の4%を取り崩し、翌年以降はインフレ率に合わせて引き出し額を調整すれば、30年以上にわたり資産が枯渇しない確率が95%以上と実証されています。</p>
<p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-3">
  <strong>毎月の安全な年金受取額 ＝（退職時資産残高 × 0.04）÷ 12ヶ月</strong>
</p>
<ul>
  <li><strong>残高 3,000万円:</strong> 毎月 約10万円（年間120万円）</li>
  <li><strong>残高 5,000万円:</strong> 毎月 約16.7万円（年間200万円）</li>
  <li><strong>残高 1億円:</strong> 毎月 約33.3万円（年間400万円）</li>
</ul>

<h2>第3部：老後資金は何年間持つか？</h2>
<p>資産の寿命は「取り崩し率」と「運用利回り」のバランスで決まります：</p>
<ul>
  <li><strong>取り崩し率 3.5%（極めて安全）:</strong> 35年以上（元本が減らず実質的に永久維持可能）。</li>
  <li><strong>取り崩し率 4.0%（標準）:</strong> 30年〜33年間安全に維持。</li>
  <li><strong>取り崩し率 5.0%（やや過大）:</strong> 20年〜24年程度で枯渇するリスクあり。</li>
  <li><strong>取り崩し率 6.0%以上（危険）:</strong> 15年〜17年程度で底をつく可能性大。</li>
</ul>

<h2>シミュレーターで自分の老後資金を試算する</h2>
<p>当サイトの金融計算ツールを使って、年収や拠出額に応じた詳細なシミュレーションを行えます：</p>
<ul>
  <li>会社マッチングと節税額を計算する <a href="/ja/retirement/401k/">401(k)計算シミュレーター</a></li>
  <li>取り崩し期間と必要額を試算する <a href="/ja/retirement/planner/">リタイアメント・プランナー</a></li>
  <li>税引き前と税引き後運用の違いを比べる <a href="/ja/retirement/ira-comparison/">確定拠出年金・IRA比較</a></li>
  <li>公的年金の受給見込額を調べる <a href="/ja/retirement/social-security/">ソーシャル・セキュリティ計算機</a></li>
</ul>
`
    },
    fr: {
      title: "Guide 401(k) & Épargne Retraite : Économies d'impôts, rente mensuelle et durée du capital",
      description: "Calculez l'économie d'impôt immédiate de vos versements 401(k), estimez votre rente mensuelle à la retraite (règle des 4 %) et découvrez combien d'années durera votre capital.",
      content: `
<p>Trois questions essentielles guident la préparation financière de la retraite :</p>
<ol>
  <li><strong>« Combien d'impôts mes versements sur un plan d'épargne retraite (401k) me font-ils économiser ? »</strong></li>
  <li><strong>« Quelle rente mensuelle pourrai-je percevoir une fois à la retraite ? »</strong></li>
  <li><strong>« Combien d'années mon capital durera-t-il avant d'être épuisé ? »</strong></li>
</ol>
<p>De la phase d'accumulation active à la phase de décaissement, voici les formules clés et les modèles de simulation pour piloter votre retraite en toute sérénité.</p>

<h2>1. Réduction d'impôts grâce aux versements déductibles</h2>
<p>Les versements sur un compte de retraite traditionnel (comme le 401k américain ou un plan d'épargne retraite déductible) sont effectués <strong>avant impôt</strong>.</p>
<p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-3">
  <strong>Économie d'impôt immédiate = Versement annuel × Taux marginal d'imposition</strong>
</p>
<p>L'économie s'applique sur votre tranche d'imposition la plus élevée. Si votre taux marginal est de 30 %, verser 10 000 € réduit votre revenu imposable et vous fait économiser immédiatement 3 000 € d'impôt. Votre effort net d'épargne n'est que de 7 000 € pour 10 000 € placés !</p>

<h2>2. Estimer sa rente mensuelle : La règle des 4 %</h2>
<p>Pour convertir un capital accumulé en revenu régulier, la référence financière est la <strong>règle des 4 %</strong> (Trinity Study). Retirer 4 % de son portefeuille la première année, puis indexer ce montant sur l'inflation chaque année, offre plus de 95 % de chances de préserver son capital pendant au moins 30 ans.</p>
<p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-3">
  <strong>Revenu mensuel sécurisé = (Capital total de retraite × 0,04) ÷ 12</strong>
</p>
<ul>
  <li><strong>Capital de 250 000 € :</strong> environ 833 € par mois</li>
  <li><strong>Capital de 500 000 € :</strong> environ 1 667 € par mois</li>
  <li><strong>Capital de 1 000 000 € :</strong> environ 3 333 € par mois</li>
</ul>

<h2>3. Combien de temps vos économies dureront-elles ?</h2>
<p>La pérennité de votre capital dépend du taux de retrait annuel :</p>
<ul>
  <li><strong>Taux de 3,5 % :</strong> Capital préservé indéfiniment (35 ans et plus).</li>
  <li><strong>Taux de 4,0 % :</strong> Horizon sécurisé de 30 à 33 ans.</li>
  <li><strong>Taux de 5,0 % :</strong> Durabilité estimée à 21-24 ans (risque d'épuisement).</li>
  <li><strong>Taux de 6,0 % et plus :</strong> Risque élevé de rupture en moins de 17 ans.</li>
</ul>

<h2>Simulez vos chiffres réels gratuitement</h2>
<p>Utilisez nos simulateurs financiers sans enregistrement ni collecte de données :</p>
<ul>
  <li>Estimez votre capital futur avec le <a href="/fr/retirement/401k/">Simulateur 401(k) avec abondement employeur</a>.</li>
  <li>Analysez votre horizon de décaissement sur le <a href="/fr/retirement/planner/">Planificateur de Retraite</a>.</li>
  <li>Comparez fiscalité immédiate et fiscalité de sortie avec le <a href="/fr/retirement/ira-comparison/">Comparateur Roth vs. Traditionnel</a>.</li>
  <li>Estimez votre pension publique sur le <a href="/fr/retirement/social-security/">Simulateur de Sécurité Sociale</a>.</li>
</ul>
`
    },
    pt: {
      title: "Guia 401(k) e Previdência: Economia de impostos, renda mensal e quanto tempo o dinheiro dura",
      description: "Calcule quanto as contribuições ao 401(k) reduzem seus impostos hoje, estime sua renda mensal na aposentadoria (regra dos 4%) e saiba quantos anos seu patrimônio vai durar.",
      content: `
<p>Ao planejar a aposentadoria, três dúvidas práticas estão no topo das prioridades de qualquer pessoa:</p>
<ol>
  <li><strong>"Quanto minhas contribuições para o plano de aposentadoria (401k ou PGBL) reduzem de imposto de renda hoje?"</strong></li>
  <li><strong>"Quanto meu patrimônio vai me pagar de renda mensal na aposentadoria?"</strong></li>
  <li><strong>"Por quanto tempo o dinheiro vai durar antes de acabar?"</strong></li>
</ol>
<p>Compreender o cálculo de cada uma dessas etapas permite planejar o valor exato a ser investido e ter clareza sobre o futuro financeiro.</p>

<h2>1. Como as contribuições reduzem o imposto de renda</h2>
<p>Planos como o 401(k) tradicional ou previdência com benefício fiscal utilizam <strong>recursos antes da tributação (pre-tax)</strong>. O valor investido é abatido diretamente da base de cálculo do imposto anual.</p>
<p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-3">
  <strong>Economia Fiscal Imediata = Contribuição Anual × Alíquota Marginal de Imposto</strong>
</p>
<p>Como a dedução incide sobre a faixa mais alta da sua renda (alíquota marginal), o benefício tributário é imediato e potencializa o poder dos juros compostos ao longo das décadas.</p>

<h2>2. Quanto o plano vai pagar por mês: A Regra dos 4%</h2>
<p>Na aposentadoria, o objetivo é transformar o montante acumulado em um <strong>salário mensal estável</strong>.</p>
<p>O modelo mais adotado no mundo financeiro é a <strong>Regra dos 4%</strong> (Estudo Trinity). Ao resgatar 4% do patrimônio no primeiro ano de aposentadoria e corrigir esse valor anualmente pela inflação, a probabilidade estatística de o dinheiro durar mais de 30 anos supera 95%.</p>
<p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-3">
  <strong>Salário Mensal da Aposentadoria = (Patrimônio Total × 0,04) ÷ 12</strong>
</p>
<ul>
  <li><strong>R$ 500.000 acumulados:</strong> R$ 1.667 / mês</li>
  <li><strong>R$ 1.000.000 acumulados:</strong> R$ 3.333 / mês</li>
  <li><strong>R$ 2.000.000 acumulados:</strong> R$ 6.667 / mês</li>
  <li><strong>R$ 3.000.000 acumulados:</strong> R$ 10.000 / mês</li>
</ul>

<h2>3. Quanto tempo o dinheiro vai durar?</h2>
<p>A taxa de retirada define diretamente a sobrevivência do seu patrimônio:</p>
<ul>
  <li><strong>Retirada de 3,5%:</strong> Preservação permanente (mais de 35 anos, com manutenção do poder de compra).</li>
  <li><strong>Retirada de 4,0%:</strong> Seguro para um período de 30 a 33 anos.</li>
  <li><strong>Retirada de 5,0%:</strong> Risco moderado a alto (o dinheiro costuma durar entre 21 e 24 anos).</li>
  <li><strong>Retirada acima de 6,0%:</strong> Risco crítico de esgotamento prematuro do capital.</li>
</ul>

<h2>Faça as contas do seu plano na prática</h2>
<p>Utilize nossas ferramentas gratuitas e 100% privadas no seu navegador:</p>
<ul>
  <li>Simule o crescimento e a contrapartida da empresa na <a href="/pt/retirement/401k/">Calculadora 401(k) com Match</a>.</li>
  <li>Teste a taxa de saque e a duração do patrimônio no <a href="/pt/retirement/planner/">Planejador de Aposentadoria</a>.</li>
  <li>Compare tributação imediata e diferida na <a href="/pt/retirement/ira-comparison/">Comparação de Planos Previdenciários</a>.</li>
  <li>Projete seus benefícios do governo na <a href="/pt/retirement/social-security/">Calculadora de Previdência e Benefícios Sociais</a>.</li>
</ul>
`
    }
  },
  "how-much-house-can-i-afford": {
    en: {
      title: "How Much House Can I Afford? (The Real Calculator Math Lenders Use)",
      description: "Discover how lenders calculate your maximum home purchase price using the 28/36 DTI rule, salary matrices, interest rate impacts, and hidden ownership costs.",
      content: `
<p><em>"How much house can I afford?"</em></p>
<p>It is one of the most consequential financial questions you will ever ask. Yet if you rely solely on a generic pre-approval letter from a mortgage bank, you risk making a catastrophic mistake: <strong>becoming "house poor."</strong></p>
<p>Commercial mortgage lenders are in the business of selling loans. They will gladly approve you for the <strong>maximum mathematical limit</strong> their underwriting algorithms allow—often pushing your household budget right to the edge of financial stress.</p>
<p>However, just because a bank says you <em>can</em> borrow $450,000 does not mean you <em>should</em>. To buy with confidence while protecting your retirement savings, emergency fund, and lifestyle, you must understand the exact math mortgage underwriters use.</p>

<h2>The 30-Second Affordability Benchmark: The 28/36 Rule</h2>
<p>Mortgage underwriters evaluate affordability using two <strong>Debt-to-Income (DTI)</strong> ratios:</p>
<ol>
  <li><strong>Front-End DTI Ratio (28% Rule):</strong> Your total monthly housing expense—including <strong>PITI</strong> (Principal, Interest, Property Taxes, and Homeowners Insurance), plus HOA dues and Private Mortgage Insurance (PMI)—should <strong>not exceed 28% of your gross monthly income</strong>.
    <p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-2">
      <strong>Front-End Budget = Gross Monthly Income × 0.28</strong>
    </p>
  </li>
  <li><strong>Back-End DTI Ratio (36% Rule):</strong> The sum of your monthly housing costs <strong>plus all recurring personal debt payments</strong> (car loans, student loans, minimum credit card payments) should <strong>not exceed 36% of your gross monthly income</strong>.
    <p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-2">
      <strong>Back-End Housing Budget = (Gross Monthly Income × 0.36) − Monthly Personal Debts</strong>
    </p>
  </li>
</ol>
<p><strong>The Binding Constraint Principle:</strong> Your true maximum monthly housing budget is always <strong>the lower of the Front-End and Back-End numbers</strong>:</p>
<p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-2">
  <strong>Affordable Housing Budget = min(Front-End Limit, Back-End Limit)</strong>
</p>

<h2>The True Anatomy of a Housing Payment: PITI + HOA + PMI</h2>
<p>First-time homebuyers frequently make the costly mistake of calculating affordability using only a basic loan payment formula (Principal + Interest). In reality, your monthly payment consists of up to six separate expenses:</p>
<table class="w-full text-left border-collapse border border-hairline my-4 text-xs sm:text-sm">
  <thead>
    <tr class="bg-canvas-soft border-b border-hairline">
      <th class="p-2.5 font-bold text-ink">Payment Component</th>
      <th class="p-2.5 font-bold text-ink">What It Covers</th>
      <th class="p-2.5 font-bold text-ink">Typical Cost Impact</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">P – Principal</td>
      <td class="p-2.5">Direct payback of the borrowed balance</td>
      <td class="p-2.5">Increases gradually over the 30-year amortization schedule</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">I – Interest</td>
      <td class="p-2.5">The lender's financing charge</td>
      <td class="p-2.5">Dominates 65%–80% of early payments at 6%–7% mortgage rates</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">T – Property Taxes</td>
      <td class="p-2.5">Municipal, county, and school district taxes</td>
      <td class="p-2.5">0.6% to 2.3% of home value annually ($250 to $900/month)</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">I – Hazard Insurance</td>
      <td class="p-2.5">Structural property and casualty insurance</td>
      <td class="p-2.5">$100 to $300/month depending on location and disaster risk</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">PMI (Private Mortgage Insurance)</td>
      <td class="p-2.5">Lender insurance required if down payment &lt; 20%</td>
      <td class="p-2.5">0.3% to 1.5% of loan value per year ($80 to $350/month)</td>
    </tr>
    <tr class="bg-canvas-soft/50">
      <td class="p-2.5 font-medium">HOA / Condo Dues</td>
      <td class="p-2.5">Association community maintenance and amenities</td>
      <td class="p-2.5">$0 to $600+/month (non-equity recurring fee)</td>
    </tr>
  </tbody>
</table>

<h2>Salary vs. Maximum Affordable Home Price Matrix</h2>
<p>Here is what standard underwriting guidelines produce based on a 30-year fixed loan at 6.5%, 10% down payment, 1.2% property taxes, $1,200 annual insurance, and 0.6% PMI:</p>
<table class="w-full text-left border-collapse border border-hairline my-4 text-xs sm:text-sm">
  <thead>
    <tr class="bg-canvas-soft border-b border-hairline">
      <th class="p-2.5 font-bold text-ink">Annual Gross Salary</th>
      <th class="p-2.5 font-bold text-ink">Max 28% Housing Budget</th>
      <th class="p-2.5 font-bold text-ink">Affordable Price ($0 Debts)</th>
      <th class="p-2.5 font-bold text-ink">Affordable Price ($500/mo Debts)</th>
      <th class="p-2.5 font-bold text-ink">Purchasing Power Loss</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">$60,000</td>
      <td class="p-2.5">$1,400 / mo</td>
      <td class="p-2.5 font-bold text-ink">$182,000</td>
      <td class="p-2.5 text-rose-600 dark:text-rose-400 font-bold">$124,000</td>
      <td class="p-2.5 text-rose-600 font-mono">-$58,000 (-31.9%)</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">$80,000</td>
      <td class="p-2.5">$1,867 / mo</td>
      <td class="p-2.5 font-bold text-ink">$248,000</td>
      <td class="p-2.5 text-rose-600 dark:text-rose-400 font-bold">$190,000</td>
      <td class="p-2.5 text-rose-600 font-mono">-$58,000 (-23.4%)</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">$100,000</td>
      <td class="p-2.5">$2,333 / mo</td>
      <td class="p-2.5 font-bold text-ink">$314,000</td>
      <td class="p-2.5 text-rose-600 dark:text-rose-400 font-bold">$256,000</td>
      <td class="p-2.5 text-rose-600 font-mono">-$58,000 (-18.5%)</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">$120,000</td>
      <td class="p-2.5">$2,800 / mo</td>
      <td class="p-2.5 font-bold text-ink">$380,000</td>
      <td class="p-2.5 text-rose-600 dark:text-rose-400 font-bold">$322,000</td>
      <td class="p-2.5 text-rose-600 font-mono">-$58,000 (-15.3%)</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">$150,000</td>
      <td class="p-2.5">$3,500 / mo</td>
      <td class="p-2.5 font-bold text-ink">$480,000</td>
      <td class="p-2.5 text-rose-600 dark:text-rose-400 font-bold">$422,000</td>
      <td class="p-2.5 text-rose-600 font-mono">-$58,000 (-12.1%)</td>
    </tr>
    <tr class="bg-canvas-soft/50">
      <td class="p-2.5 font-medium">$200,000</td>
      <td class="p-2.5">$4,667 / mo</td>
      <td class="p-2.5 font-bold text-ink">$645,000</td>
      <td class="p-2.5 text-rose-600 dark:text-rose-400 font-bold">$587,000</td>
      <td class="p-2.5 text-rose-600 font-mono">-$58,000 (-9.0%)</td>
    </tr>
  </tbody>
</table>

<p><strong>The "Car Payment Penalty":</strong> A $500 monthly personal debt obligation (auto loan, student loan, or credit cards) reduces your home purchasing power by roughly <strong>$58,000 to $65,000</strong> across all income brackets.</p>

<h2>How Mortgage Interest Rates Decimate Affordability</h2>
<p>Every <strong>1.00% rise in mortgage rates</strong> reduces borrowing power by <strong>9% to 11%</strong> for the exact same monthly budget. On a $2,500/month payment budget:</p>
<ul>
  <li><strong>5.00% Interest Rate:</strong> $465,700 loan power</li>
  <li><strong>6.00% Interest Rate:</strong> $417,000 loan power (-$48,700)</li>
  <li><strong>7.00% Interest Rate:</strong> $375,800 loan power (-$89,900)</li>
  <li><strong>8.00% Interest Rate:</strong> $340,700 loan power (-$125,000)</li>
</ul>

<h2>5 High-Impact Ways to Increase How Much House You Can Afford</h2>
<ol>
  <li><strong>Eliminate recurring debts:</strong> Paying off a $300/month car loan or personal loan instantly frees up ~$35,000 to $45,000 in mortgage capacity.</li>
  <li><strong>Boost your credit score above 760:</strong> Higher credit scores unlock the lowest interest rate tiers, potentially saving 0.5%–0.75% in annual interest and reducing PMI premiums.</li>
  <li><strong>Save toward 20% down payment:</strong> Reaching 20% equity completely wipes out Private Mortgage Insurance (PMI), redirecting $100 to $300/month directly into your home budget.</li>
  <li><strong>Compare local property tax districts:</strong> Choosing a home in a municipality with a 1.0% tax rate vs 2.2% adds $40,000+ to your affordable purchase price at the same salary.</li>
  <li><strong>Get quotes from at least 3 lenders:</strong> Comparing rate quotes saves the average homebuyer thousands over the life of the loan.</li>
</ol>

<h2>Test Your Real Numbers in Our Free Calculators</h2>
<p>Run your personal numbers through our fast, 100% private browser tools:</p>
<ul>
  <li><a href="/loan/home-affordability/">Home Affordability Calculator</a>: Calculate your exact maximum purchase price and PITI breakdown.</li>
  <li><a href="/loan/mortgage/">Mortgage Calculator with PMI</a>: View detailed amortization schedules and payment graphs.</li>
  <li><a href="/loan/dti/">Debt-to-Income (DTI) Calculator</a>: Audit your Front-End and Back-End lending ratios.</li>
  <li><a href="/loan/rent-vs-buy/">Rent vs. Buy Calculator</a>: Determine whether buying or renting builds greater net worth.</li>
</ul>
`
    },
    es: {
      title: "¿Cuánto Puedo Pagar por una Casa? (La Verdadera Matemática de los Bancos)",
      description: "Descubre cómo calculan los bancos tu capacidad máxima de compra hipotecaria mediante la regla 28/36 de DTI, tablas por salario, impacto de tasas y costes ocultos.",
      content: `
<p><em>"¿Cuánto puedo pagar por una casa?"</em></p>
<p>Es una de las decisiones financieras más importantes de tu vida. Sin embargo, confiar ciegamente en la carta de aprobación previa de un banco puede llevarte a cometer un error crítico: <strong>convertirte en "pobre con casa propia" (house poor)</strong>.</p>
<p>Las entidades financieras se dedican a vender créditos. Con gusto te aprobarán por el <strong>máximo límite matemático</strong> que permitan sus modelos de riesgo, empujando tu presupuesto mensual al límite de la solvencia.</p>
<p>Que el banco te preste cierta cantidad no significa que debas aceptarla. Para comprar con tranquilidad y mantener tus ahorros, fondo de emergencia y calidad de vida, necesitas dominar las fórmulas exactas que utilizan los evaluadores de riesgo bancario.</p>

<h2>La Regla de Oro 28/36: Ratios de Endeudamiento (DTI)</h2>
<p>Los bancos evalúan tu capacidad de endeudamiento mediante dos ratios clave sobre tus ingresos brutos mensuales:</p>
<ol>
  <li><strong>Ratio Front-End (Regla del 28%):</strong> La suma total de los costes de vivienda—cuota hipotecaria (capital e intereses), impuestos sobre bienes inmuebles (IBI/predial), seguro del hogar y cuotas de comunidad—<strong>no debe superar el 28% de tus ingresos brutos mensuales</strong>.
    <p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-2">
      <strong>Límite Front-End = Ingreso Bruto Mensual × 0,28</strong>
    </p>
  </li>
  <li><strong>Ratio Back-End (Regla del 36%):</strong> La suma de los gastos de vivienda <strong>más todas las deudas personales recurrentes</strong> (préstamos de auto, créditos estudiantiles, tarjetas de crédito) <strong>no debe superar el 36% de tus ingresos brutos mensuales</strong>.
    <p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-2">
      <strong>Límite Back-End = (Ingreso Bruto Mensual × 0,36) − Deudas Personales Mensuales</strong>
    </p>
  </li>
</ol>
<p><strong>El Principio Restrictivo:</strong> Tu presupuesto hipotecario mensual real siempre es <strong>el menor de los dos ratios</strong>:</p>
<p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-2">
  <strong>Presupuesto de Vivienda = min(Límite Front-End, Límite Back-End)</strong>
</p>

<h2>La Verdadera Cuota Mensual: PITI + Comunidad + Seguro</h2>
<p>Muchos compradores cometen el error de calcular únicamente la cuota de amortización e intereses. En la práctica, el pago mensual de vivienda comprende múltiples conceptos:</p>
<table class="w-full text-left border-collapse border border-hairline my-4 text-xs sm:text-sm">
  <thead>
    <tr class="bg-canvas-soft border-b border-hairline">
      <th class="p-2.5 font-bold text-ink">Componente</th>
      <th class="p-2.5 font-bold text-ink">Concepto</th>
      <th class="p-2.5 font-bold text-ink">Impacto Financiero</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Principal (Capital)</td>
      <td class="p-2.5">Amortización directa de la deuda contraída</td>
      <td class="p-2.5">Aumenta gradualmente a lo largo del cuadro de amortización</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Intereses</td>
      <td class="p-2.5">El coste financiero cobrado por la entidad bancaria</td>
      <td class="p-2.5">Representa entre el 60% y el 80% de las cuotas iniciales con tipos al 6%–7%</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Impuestos Inmobiliarios</td>
      <td class="p-2.5">Tasas municipales, IBI o impuesto predial</td>
      <td class="p-2.5">Entre 0,5% y 2,0% del valor del inmueble cada año</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Seguro de Hogar / Daños</td>
      <td class="p-2.5">Póliza obligatoria contra incendios y siniestros</td>
      <td class="p-2.5">Coste anual recurrente exigido por el acreedor hipotecario</td>
    </tr>
    <tr class="bg-canvas-soft/50">
      <td class="p-2.5 font-medium">Comunidad / HOA</td>
      <td class="p-2.5">Mantenimiento de zonas comunes y servicios del edificio</td>
      <td class="p-2.5">Gasto mensual fijo que no genera patrimonio alguno</td>
    </tr>
  </tbody>
</table>

<h2>Tabla de Ingresos vs. Precio Máximo de Vivienda</h2>
<p>Bajo condiciones estándar (hipoteca a 30 años al 6,5%, 10% de entrada, 1,2% de impuestos y seguros estándar):</p>
<ul>
  <li><strong>Sueldo bruto de 60.000 $/€ al año:</strong> Precio asequible de ~182.000 $ sin deudas (se reduce a ~124.000 $ si tienes 500 $/mes en préstamos de coche o personales).</li>
  <li><strong>Sueldo bruto de 80.000 $/€ al año:</strong> Precio asequible de ~248.000 $ sin deudas (se reduce a ~190.000 $ con 500 $/mes de deudas).</li>
  <li><strong>Sueldo bruto de 100.000 $/€ al año:</strong> Precio asequible de ~314.000 $ sin deudas (se reduce a ~256.000 $ con 500 $/mes de deudas).</li>
  <li><strong>Sueldo bruto de 120.000 $/€ al año:</strong> Precio asequible de ~380.000 $ sin deudas (se reduce a ~322.000 $ con 500 $/mes de deudas).</li>
  <li><strong>Sueldo bruto de 150.000 $/€ al año:</strong> Precio asequible de ~480.000 $ sin deudas (se reduce a ~422.000 $ con 500 $/mes de deudas).</li>
</ul>
<p><strong>El Efecto de las Deudas de Consumo:</strong> Pagar 500 $/mes en préstamos personales o de automóvil destruye aproximadamente <strong>58.000 a 65.000 $/€ de tu capacidad de compra hipotecaria</strong>.</p>

<h2>El Impacto Directo de los Tipos de Interés</h2>
<p>Por cada <strong>1% que sube la tasa de interés hipotecaria</strong>, tu capacidad de compra se reduce entre un <strong>9% y un 11%</strong> para la misma cuota mensual exacta. Un presupuesto mensual de 2.500 $/€ financia 465.000 $ al 5% de interés, pero solo 395.000 $ al 6,5% y 340.000 $ al 8%.</p>

<h2>Calcula tu Presupuesto Hipotecario en Tiempo Real</h2>
<p>Aprovecha nuestras herramientas gratuitas, privadas y sin registro:</p>
<ul>
  <li><a href="/es/loan/home-affordability/">Calculadora de Asequibilidad de Vivienda</a>: Descubre tu precio máximo y cuota detallada.</li>
  <li><a href="/es/loan/mortgage/">Calculadora de Hipotecas</a>: Simula amortizaciones y calendarios completos.</li>
  <li><a href="/es/loan/dti/">Calculadora de Ratio DTI (Endeudamiento)</a>: Conoce tus porcentajes exactos antes de acudir al banco.</li>
  <li><a href="/es/loan/rent-vs-buy/">Calculadora Alquilar vs. Comprar</a>: Compara la rentabilidad a largo plazo.</li>
</ul>
`
    },
    de: {
      title: "Wie viel Haus kann ich mir leisten? (Die echte Banken-Formel)",
      description: "Erfahre, wie Banken deine maximale Kreditsumme und Kaufpreisgrenze berechnen: 28/36 DTI-Regel, Einkommenstabellen, Zinshebel und versteckte Nebenkosten.",
      content: `
<p><em>„Wie viel Haus kann ich mir leisten?“</em></p>
<p>Diese Frage gehört zu den folgenschwersten Entscheidungen deines finanziellen Lebens. Verlässt du dich jedoch blind auf die Kreditauskunft einer Bank, droht eine gefährliche Falle: <strong>das „House-Poor“-Phänomen (im eigenen Haus finanziell gefangen zu sein)</strong>.</p>
<p>Kreditinstitute verkaufen Darlehen. Sie berechnen das <strong>mathematische Maximum</strong>, das ihre Risikomodelle erlauben – und schöpfen dein monatliches Budget oft bis zur Belastungsgrenze aus.</p>
<p>Nur weil dir eine Bank 450.000 Euro leihen würde, heißt das keineswegs, dass du diese Summe auch aufnehmen solltest. Um mit ruhigem Schlaf zu kaufen, musst du die Berechnungslogik der Banken verstehen.</p>

<h2>Die 28/36-Regel: Die Leitplanken der Kreditprüfung</h2>
<p>Banken und Finanzierungsberater ermitteln die Leistbarkeit anhand von zwei <strong>DTI-Kennzahlen (Debt-to-Income / Verschuldungsgrad)</strong>:</p>
<ol>
  <li><strong>Front-End DTI (28 %-Wohnkostenquote):</strong> Die monatliche Gesamtbelastung für das Wohnen – bestehend aus Zins, Tilgung, Grundsteuer, Wohngebäudeversicherung und Hausgeld – sollte <strong>maximal 28 % deines monatlichen Bruttoeinkommens</strong> ausmachen.
    <p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-2">
      <strong>Wohnkosten-Budget = Monatliches Bruttoeinkommen × 0,28</strong>
    </p>
  </li>
  <li><strong>Back-End DTI (36 %-Gesamtverschuldungsquote):</strong> Die Summe aus Wohnkosten <strong>und sämtlichen weiteren monatlichen Verbindlichkeiten</strong> (Autokredit, Ratenkredite, Leasing, Kreditkarten) darf <strong>36 % des Bruttoeinkommens nicht überschreiten</strong>.
    <p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-2">
      <strong>Gesamtbudget = (Monatliches Bruttoeinkommen × 0,36) − Monatliche Konsumkredite</strong>
    </p>
  </li>
</ol>
<p><strong>Die bindende Budgetgrenze:</strong> Die tatsächlich tragfähige Monatsrate ist stets <strong>das Minimum aus beiden Werten</strong>.</p>

<h2>Die reale Monatsrate: Nicht nur Zins und Tilgung</h2>
<p>Viele Immobilienkäufer kalkulieren fälschlicherweise nur mit der reinen Darlehensannuität. Zur monatlichen Wohnbelastung gehören jedoch unvermeidbare Positionen:</p>
<ul>
  <li><strong>Tilgung:</strong> Der tatsächliche Abbau der Restschuld (Aufbau von Nettovermögen).</li>
  <li><strong>Zinsen:</strong> Die Gebühr der Bank für das geliehene Kapital (bei 6 %–7 % Zinsen der Löwenanteil der ersten Jahre).</li>
  <li><strong>Grundsteuer & Abgaben:</strong> Jährliche kommunale Abgaben an die Stadt oder Gemeinde.</li>
  <li><strong>Wohngebäudeversicherung:</strong> Pflichtabsicherung gegen Brand, Sturm und Elementarschäden.</li>
  <li><strong>Hausgeld & Instandhaltungsrücklage:</strong> Die Faustregel empfiehlt mindestens <strong>1 % bis 2 % des Gebäudewerts pro Jahr</strong> für Reparaturen (Dach, Heizung, Rohre) zurückzulegen.</li>
</ul>

<h2>Einkommenstabelle: Maximaler Kaufpreis bei 6,5 % Zinsen</h2>
<table class="w-full text-left border-collapse border border-hairline my-4 text-xs sm:text-sm">
  <thead>
    <tr class="bg-canvas-soft border-b border-hairline">
      <th class="p-2.5 font-bold text-ink">Bruttojahreseinkommen</th>
      <th class="p-2.5 font-bold text-ink">Max. 28 % Wohnbudget</th>
      <th class="p-2.5 font-bold text-ink">Kaufpreis (0 € Schulden)</th>
      <th class="p-2.5 font-bold text-ink">Kaufpreis (500 €/Monat Schulden)</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">60.000 €</td>
      <td class="p-2.5">1.400 € / Monat</td>
      <td class="p-2.5 font-bold">~182.000 €</td>
      <td class="p-2.5 text-rose-600 font-bold">~124.000 €</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">80.000 €</td>
      <td class="p-2.5">1.867 € / Monat</td>
      <td class="p-2.5 font-bold">~248.000 €</td>
      <td class="p-2.5 text-rose-600 font-bold">~190.000 €</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">100.000 €</td>
      <td class="p-2.5">2.333 € / Monat</td>
      <td class="p-2.5 font-bold">~314.000 €</td>
      <td class="p-2.5 text-rose-600 font-bold">~256.000 €</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">120.000 €</td>
      <td class="p-2.5">2.800 € / Monat</td>
      <td class="p-2.5 font-bold">~380.000 €</td>
      <td class="p-2.5 text-rose-600 font-bold">~322.000 €</td>
    </tr>
    <tr class="bg-canvas-soft/50">
      <td class="p-2.5 font-medium">150.000 €</td>
      <td class="p-2.5">3.500 € / Monat</td>
      <td class="p-2.5 font-bold">~480.000 €</td>
      <td class="p-2.5 text-rose-600 font-bold">~422.000 €</td>
    </tr>
  </tbody>
</table>

<p><strong>Die Autofallen-Konsequenz:</strong> Eine monatliche Leasing- oder Kreditrate von 500 € vernichtet rund <strong>58.000 € bis 65.000 € deiner Darlehenskapazität</strong>.</p>

<h2>Der 1 %-Zinshebel</h2>
<p>Ein Anstieg des Bauzinses um nur <strong>1,00 % senkt die finanzierbare Kreditsumme um etwa 10 %</strong> bei unveränderter Monatsrate. Bei 2.500 € Monatsbudget finanziert man bei 5 % Zinsen ca. 465.000 €, bei 6,5 % Zinsen nur noch 395.000 €.</p>

<h2>Berechne deine persönliche Finanzierungsgrenze</h2>
<p>Nutze unsere 100 % privaten Onlinerechner im Browser:</p>
<ul>
  <li><a href="/de/loan/home-affordability/">Budgetrechner für Immobilienkauf</a>: Berechne deinen maximalen Kaufpreis.</li>
  <li><a href="/de/loan/mortgage/">Baufinanzierungs- & Tilgungsrechner</a>: Tilgungspläne und Gesamtkosten visualisieren.</li>
  <li><a href="/de/loan/dti/">DTI-Verschuldungsrechner</a>: Überprüfe deine Kreditwürdigkeit vor Bankgesprächen.</li>
  <li><a href="/de/loan/rent-vs-buy/">Mieten oder Kaufen Rechner</a>: Vergleiche den langfristigen Vermögensaufbau.</li>
</ul>
`
    },
    fr: {
      title: "Combien Puis-je Emprunter pour Acheter une Maison ? (Le Calcul Réel des Banques)",
      description: "Découvrez comment les banques calculent votre budget d'achat immobilier maximal avec la règle 28/36 du taux d'endettement, matrices de salaire et frais annexes.",
      content: `
<p><em>« Combien puis-je emprunter pour acheter mon logement ? »</em></p>
<p>C'est l'une des questions les plus cruciales de votre vie financière. Pourtant, se baser uniquement sur le montant maximal annoncé par un courtier ou une banque présente un risque majeur : <strong>devenir « esclave de son logement » (house poor)</strong>.</p>
<p>Les établissements bancaires sont des commerçants de crédit. Ils vous accorderont volontiers la somme maximale que leurs algorithmes de risque permettent, quitte à saturer votre capacité d'épargne et vos marges de manœuvre.</p>
<p>Pour acheter sereinement tout en préservant votre épargne de précaution et vos projets de vie, découvrez les formules de calcul réelles appliquées par les organismes prêteurs.</p>

<h2>La Règle d'Endettement 28/36</h2>
<p>Les critères bancaires reposent sur deux ratios de solvabilité (taux d'effort) :</p>
<ol>
  <li><strong>Le Ratio Logement Front-End (28 %) :</strong> La mensualité totale du logement—incluant le capital emprunté, les intérêts d'emprunt, la taxe foncière, l'assurance emprunteur et habitation, ainsi que les charges de copropriété—<strong>ne doit pas dépasser 28 % de vos revenus bruts mensuels</strong>.
    <p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-2">
      <strong>Budget Logement = Revenus Bruts Mensuels × 0,28</strong>
    </p>
  </li>
  <li><strong>Le Ratio d'Endettement Global Back-End (36 % / Norme HCSF 35 %) :</strong> La somme des mensualités immobilières <strong>et de l'ensemble de vos crédits à la consommation</strong> (prêt auto, crédits renouvelables, prêts étudiants) ne doit pas dépasser <strong>35 % à 36 % de vos revenus mensuels</strong>.
    <p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-2">
      <strong>Budget Disponible = (Revenus Bruts × 0,36) − Mensualités de Crédits Conso</strong>
    </p>
  </li>
</ol>
<p><strong>La Limite Contraignante :</strong> Votre budget réel pour le logement est toujours <strong>le montant le plus bas entre les deux ratios</strong>.</p>

<h2>La Réalité des Coûts Mensuels d'un Propriétaire</h2>
<p>Beaucoup d'acquéreurs commettent l'erreur de ne calculer que la mensualité brute de crédit. Un logement englobe pourtant plusieurs frais obligatoires :</p>
<ul>
  <li><strong>Amortissement du capital :</strong> La part qui rembourse réellement le bien et crée votre patrimoine net.</li>
  <li><strong>Intérêts d'emprunt :</strong> Le coût de l'argent facturé par la banque (représente 60 % à 80 % des mensualités initiales avec des taux entre 3,5 % et 4,5 %).</li>
  <li><strong>Assurance emprunteur :</strong> Protection obligatoire en cas de décès, invalidité et incapacité de travail.</li>
  <li><strong>Taxe foncière :</strong> Impôt local annuel prélevé par les collectivités territoriales.</li>
  <li><strong>Charges de copropriété et entretien :</strong> Il est recommandé de provisionner <strong>1 % à 2 % de la valeur du bien chaque année</strong> pour les gros travaux (ravalement, toiture, chaudière).</li>
</ul>

<h2>Capacité d'Emprunt selon vos Revenus</h2>
<p>Estimation pour un prêt sur 25 ans à 3,8 % avec assurance et apport de 10 % :</p>
<ul>
  <li><strong>Salaire brut de 50 000 €/an :</strong> Capacité d'achat d'environ 235 000 € sans autre crédit (chute à 175 000 € avec 350 €/mois de crédit auto).</li>
  <li><strong>Salaire brut de 80 000 €/an :</strong> Capacité d'achat d'environ 375 000 € sans crédit (chute à 315 000 € avec crédit auto).</li>
  <li><strong>Salaire brut de 100 000 €/an :</strong> Capacité d'achat d'environ 470 000 € sans crédit (chute à 410 000 € avec crédit auto).</li>
</ul>
<p><strong>L'Impact des Crédits à la Consommation :</strong> Un simple crédit auto de 350 €/mois supprime directement près de <strong>60 000 € de capacité d'emprunt immobilier</strong>.</p>

<h2>Simulez votre Projet en Toute Confidentialité</h2>
<p>Nos outils fonctionnent directement dans votre navigateur sans collecte de données :</p>
<ul>
  <li><a href="/fr/loan/home-affordability/">Calculateur de Capacité d'Emprunt Immobilier</a> : Calculez votre prix d'achat maximal.</li>
  <li><a href="/fr/loan/mortgage/">Calculateur de Prêt Immobilier</a> : Visualisez le tableau d'amortissement complet.</li>
  <li><a href="/fr/loan/dti/">Calculateur du Taux d'Endettement</a> : Vérifiez votre éligibilité bancaire.</li>
  <li><a href="/fr/loan/rent-vs-buy/">Simulateur Acheter ou Louer</a> : Comparez l'enrichissement net à 5, 10 et 20 ans.</li>
</ul>
`
    },
    ja: {
      title: "いくらの家が買える？住宅ローン借入可能額の計算方法と年収別目安",
      description: "銀行の審査基準（返済比率 28/36 ルール）に基づき、年収・金利・自己資金から住宅ローンの適正借入可能額と購入予算を正確に計算する方法を徹底解説。",
      content: `
<p><em>「自分の年収で、一体いくらの家が買えるのだろう？」</em></p>
<p>住宅購入は、人生で最も大きなお金が動く決断です。しかし、不動産会社や金融機関から提示される「借入可能限度額」をそのまま鵜呑みにしてしまうと、<strong>「住宅ローン貧乏（住宅ローン破綻予備軍）」</strong>に陥る深刻なリスクがあります。</p>
<p>金融機関は融資のプロであり、審査基準の<strong>上限ギリギリまで貸し出すこと</strong>を厭いません。しかし、「借りられる額」と「無理なく返せる額」は全くの別物です。</p>
<p>老後資金や教育費、趣味の余裕を維持しながら安心してマイホームを購入するために、銀行の審査基準と正確な計算ロジックを把握しましょう。</p>

<h2>住宅ローンの審査基準：28/36 ルール（返済比率）</h2>
<p>金融機関の審査では、年収（総支給額）に対する年間返済額の割合である<strong>返済負担率（返済比率 / DTI）</strong>が用いられます：</p>
<ol>
  <li><strong>フロントエンド比率（住居費比率・28%基準）：</strong> 住宅ローン返済額（元利金）に加え、固定資産税・都市計画税、火災保険料、管理費・修繕積立金の合計が、<strong>月収総支給額の28%以下</strong>であること。
    <p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-2">
      <strong>住居費の安全上限 = 月収（総支給額） × 0.28</strong>
    </p>
  </li>
  <li><strong>バックエンド比率（総負債比率・36%基準）：</strong> 住宅関連費用に加え、<strong>自動車ローン、教育ローン、奨学金、クレジットカードのリボ払いなどすべての負債返済額</strong>を含めた合計が、<strong>月収の36%以下</strong>であること。
    <p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-2">
      <strong>住宅に回せる最大枠 = (月収 × 0.36) − 他の毎月負債返済額</strong>
    </p>
  </li>
</ol>
<p><strong>ボトルネックの原則：</strong> 実際の借入可能枠は、<strong>フロントエンドとバックエンドの小さい方</strong>で決定されます。マイカーローンなどを抱えている場合、住宅ローンの借入枠は大幅に削られます。</p>

<h2>住宅にかかる毎月の「真の費用」（PITI）</h2>
<p>多くの初購入者が「住宅ローンの元金＋利息」の支払いだけを計算しがちですが、実際には以下のランニングコストが加算されます：</p>
<ul>
  <li><strong>元金（Principal）：</strong> 借入残高の直接的な返済（純資産の形成）。</li>
  <li><strong>利息（Interest）：</strong> 金融機関に支払う資金調達コスト。</li>
  <li><strong>固定資産税・都市計画税（Taxes）：</strong> 年間数十万円規模で課税される地方税。</li>
  <li><strong>火災・地震保険料（Insurance）：</strong> 災害リスクに備える必須の損害保険料。</li>
  <li><strong>修繕積立金・管理費：</strong> マンションの共用部管理費や、戸建て住宅の将来の屋根・外壁塗装・給湯器交換のための積立費（年間住宅価格の1〜2%が目安）。</li>
</ul>

<h2>年収別の借入可能額と購入予算の目安（35年返済・金利1.5%想定）</h2>
<table class="w-full text-left border-collapse border border-hairline my-4 text-xs sm:text-sm">
  <thead>
    <tr class="bg-canvas-soft border-b border-hairline">
      <th class="p-2.5 font-bold text-ink">世帯年収（額面）</th>
      <th class="p-2.5 font-bold text-ink">推奨月額住居費（28%）</th>
      <th class="p-2.5 font-bold text-ink">適正借入額（他負債0円）</th>
      <th class="p-2.5 font-bold text-ink">借入可能額（車ローン等月4万円あり）</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">500万円</td>
      <td class="p-2.5">約11.6万円</td>
      <td class="p-2.5 font-bold">約3,800万円</td>
      <td class="p-2.5 text-rose-600 font-bold">約2,500万円（−1,300万円）</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">700万円</td>
      <td class="p-2.5">約16.3万円</td>
      <td class="p-2.5 font-bold">約5,300万円</td>
      <td class="p-2.5 text-rose-600 font-bold">約4,000万円（−1,300万円）</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">1,000万円</td>
      <td class="p-2.5">約23.3万円</td>
      <td class="p-2.5 font-bold">約7,600万円</td>
      <td class="p-2.5 text-rose-600 font-bold">約6,300万円（−1,300万円）</td>
    </tr>
    <tr class="bg-canvas-soft/50">
      <td class="p-2.5 font-medium">1,200万円</td>
      <td class="p-2.5">約28.0万円</td>
      <td class="p-2.5 font-bold">約9,100万円</td>
      <td class="p-2.5 text-rose-600 font-bold">約7,800万円（−1,300万円）</td>
    </tr>
  </tbody>
</table>

<p><strong>マイカーローンの落とし穴：</strong> 毎月わずか4万円の自動車ローン返済があるだけで、住宅ローンの借入可能枠は約<strong>1,300万円も消失</strong>します。</p>

<h2>金利変動がもたらす借入力への影響</h2>
<p>金利が<strong>1.0%上昇すると、同じ毎月返済額で借りられる金額は約10%減少</strong>します。金利上昇局面に備え、固定金利と変動金利のリスク許容度を慎重に見極めることが不可欠です。</p>

<h2>完全無料・登録不要のシミュレーターで試算する</h2>
<p>ブラウザ上で瞬時に正確な計算ができる当サイトの計算ツールをご活用ください：</p>
<ul>
  <li><a href="/ja/loan/home-affordability/">住宅購入可能額計算機</a>：年収・負債から最大予算と月々の内訳を試算。</li>
  <li><a href="/ja/loan/mortgage/">住宅ローン返済シミュレーター</a>：毎月の返済スケジュールと利息総額を把握。</li>
  <li><a href="/ja/loan/dti/">返済負担率（DTI）計算機</a>：事前審査前の返済比率チェック。</li>
  <li><a href="/ja/loan/rent-vs-buy/">賃貸 vs 持ち家 比較計算機</a>: 長期的な資産形成の違いを徹底検証。</li>
</ul>
`
    },
    pt: {
      title: "Quanto Posso Pagar por um Imóvel? (O Cálculo Real que os Bancos Utilizam)",
      description: "Saiba como os bancos calculam seu limite máximo de financiamento imobiliário através da regra 28/36 de DTI, tabelas salariais, impacto dos juros e custos ocultos.",
      content: `
<p><em>"Quanto posso pagar por um imóvel ou casa própria?"</em></p>
<p>Essa é uma das perguntas de maior impacto sobre o seu patrimônio. No entanto, confiar apenas na carta de aprovação de crédito do banco pode levar a uma armadilha perigosa: <strong>tornar-se "escravo da casa própria" (house poor)</strong>.</p>
<p>Bancos e financeiras lucram com a concessão de crédito. Eles aprovarão você com satisfação no <strong>limite matemático máximo</strong> permitido pelas diretrizes bancárias, esticando seu orçamento familiar até o limite do estresse financeiro.</p>
<p>O fato de uma instituição financeira dizer que você <em>pode</em> financiar determinado valor não significa que você <em>deva</em> fazê-lo. Para comprar com tranquilidade e manter sua reserva de emergência e investimentos, entenda as fórmulas reais de análise de crédito.</p>

<h2>A Regra 28/36: Comprometimento de Renda e DTI</h2>
<p>Os analistas de crédito avaliam a solvência do comprador através de dois índices de <strong>DTI (Debt-to-Income / Comprometimento de Renda)</strong>:</p>
<ol>
  <li><strong>Índice Front-End (Regra dos 28% de Moradia):</strong> O custo total mensal com a habitação—incluindo a parcela do financiamento (amortização e juros), IPTU, seguro habitacional obrigatório (MIP/DFI) e taxa de condomínio—<strong>não deve ultrapassar 28% da sua renda bruta mensal</strong>.
    <p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-2">
      <strong>Teto de Moradia = Renda Bruta Mensal × 0,28</strong>
    </p>
  </li>
  <li><strong>Índice Back-End (Regra dos 36% de Endividamento Total):</strong> A soma dos encargos de moradia <strong>mais todas as suas dívidas pessoais recorrentes</strong> (parcelas de automóvel, empréstimos consignados, cartões de crédito) <strong>não deve ultrapassar 36% da sua renda bruta mensal</strong>.
    <p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-2">
      <strong>Margem para Imóvel = (Renda Bruta × 0,36) − Dívidas Mensais Pré-existentes</strong>
    </p>
  </li>
</ol>
<p><strong>O Princípio do Menor Valor:</strong> O seu orçamento habitacional real é sempre <strong>o menor valor entre o limite Front-End e o Back-End</strong>.</p>

<h2>A Composição Real da Parcela Mensal: PITI + Condomínio</h2>
<p>Muitos compradores de primeira viagem erram ao calcular apenas a parcela do financiamento bancário. Na vida real, o custo mensal do imóvel reúne diversos itens obrigatórios:</p>
<ul>
  <li><strong>Amortização (Principal):</strong> Valor que efetivamente abate o saldo devedor do imóvel.</li>
  <li><strong>Juros:</strong> O custo cobrado pelo banco sobre o capital emprestado.</li>
  <li><strong>IPTU:</strong> Imposto territorial e predial urbano pago anualmente aos municípios.</li>
  <li><strong>Seguro Habitacional Obrigatório:</strong> Cobertura para Danos Físicos ao Imóvel (DFI) e Morte ou Invalidez Permanente (MIP).</li>
  <li><strong>Condomínio e Fundo de Reserva:</strong> Custo mensal obrigatório para edifícios e loteamentos fechados.</li>
  <li><strong>Reserva de Manutenção:</strong> A regra prática do mercado recomenda guardar <strong>1% a 2% do valor do imóvel ao ano</strong> para reformas estruturais, pintura e consertos.</li>
</ul>

<h2>Faixa de Renda vs. Valor Máximo do Imóvel</h2>
<p>Com financiamento de 30 anos, taxa de juros de mercado e 20% de entrada:</p>
<ul>
  <li><strong>Renda bruta de R$ 10.000 / mês:</strong> Valor máximo do imóvel em torno de R$ 320.000 (cai para ~R$ 240.000 se houver R$ 800/mês em parcelas de financiamento automotivo).</li>
  <li><strong>Renda bruta de R$ 15.000 / mês:</strong> Valor máximo do imóvel em torno de R$ 480.000 (cai para ~R$ 400.000 com parcelas de auto/empréstimo).</li>
  <li><strong>Renda bruta de R$ 20.000 / mês:</strong> Valor máximo do imóvel em torno de R$ 640.000 (cai para ~R$ 560.000 com parcelas de auto/empréstimo).</li>
</ul>
<p><strong>O Efeito das Parcelas do Carro:</strong> Uma dívida mensal de R$ 800 em financiamento automotivo destrói cerca de <strong>R$ 80.000 da sua capacidade de compra imobiliária</strong>.</p>

<h2>Calcule seu Limite Real nas Nossas Ferramentas Gratuitas</h2>
<p>Simule seus valores no seu navegador de forma 100% confidencial:</p>
<ul>
  <li><a href="/pt/loan/home-affordability/">Calculadora de Poder de Compra Imobiliário</a>: Descubra o valor máximo da casa ou apartamento.</li>
  <li><a href="/pt/loan/mortgage/">Calculadora de Financiamento Imobiliário</a>: Simule a tabela SAC e Price completa.</li>
  <li><a href="/pt/loan/dti/">Calculadora de Comprometimento de Renda (DTI)</a>: Analise suas margens antes de solicitar crédito.</li>
  <li><a href="/pt/loan/rent-vs-buy/">Calculadora Alugar vs. Comprar</a>: Veja qual decisão constrói mais riqueza no longo prazo.</li>
</ul>
`
    }
  },
  "what-is-a-reverse-mortgage-how-it-works": {
    en: {
      title: "What is a Reverse Mortgage? How It Works, Payment Calculations, and Key Rules",
      description: "Learn what a reverse mortgage (HECM) is, how mortgage payments are calculated for both traditional and reverse loans, and the pros, cons, and risks for homeowners.",
      content: `
<p><em>"What is a reverse mortgage, and how does it actually work?"</em></p>
<p>For millions of older homeowners sitting on substantial home equity but feeling squeezed by inflation and fixed retirement incomes, a reverse mortgage sounds tempting: <strong>convert your home equity into tax-free cash with zero monthly mortgage payments.</strong></p>
<p>Commercials promote them as stress-free retirement supplements, while critics warn they can lead to losing the family home. To make an informed decision for yourself or an aging parent, you need to understand the real financial mechanics.</p>

<h2>1. What is a Reverse Mortgage?</h2>
<p>A <strong>reverse mortgage</strong> is a specialized loan for homeowners aged <strong>62 and older</strong> that allows them to borrow against their accumulated home equity without making monthly payments to a lender.</p>
<p>Instead of you paying the bank each month—as you do with a traditional forward mortgage—<strong>the lender pays you</strong> (via monthly tenure checks, a lump sum, or a growing line of credit). You retain full title and legal ownership of your home.</p>
<p>Over 90% of reverse mortgages are FHA-insured <strong>Home Equity Conversion Mortgages (HECMs)</strong>. They feature a mandatory <strong>non-recourse guarantee</strong>: neither you nor your heirs can ever owe more than the home's fair market value when the loan is settled.</p>

<h2>2. Forward Mortgage vs. Reverse Mortgage</h2>
<table class="w-full text-left border-collapse border border-hairline my-4 text-xs sm:text-sm">
  <thead>
    <tr class="bg-canvas-soft border-b border-hairline">
      <th class="p-2.5 font-bold text-ink">Feature</th>
      <th class="p-2.5 font-bold text-ink">Traditional (Forward) Mortgage</th>
      <th class="p-2.5 font-bold text-ink">Reverse Mortgage (HECM)</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Cash Flow Direction</td>
      <td class="p-2.5">You pay the lender monthly</td>
      <td class="p-2.5">The lender pays you / eliminates monthly debt</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Loan Balance</td>
      <td class="p-2.5 text-emerald-600 dark:text-emerald-400 font-bold">Decreases monthly (amortization)</td>
      <td class="p-2.5 text-rose-600 dark:text-rose-400 font-bold">Increases monthly (negative amortization)</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Home Equity</td>
      <td class="p-2.5 font-bold">Builds up over time</td>
      <td class="p-2.5 font-bold">Decreases over time</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Minimum Age</td>
      <td class="p-2.5">18+</td>
      <td class="p-2.5 font-bold">62+ (HUD/FHA requirement)</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Monthly Mortgage Payment</td>
      <td class="p-2.5">Mandatory principal + interest</td>
      <td class="p-2.5 text-emerald-600 font-bold">$0 required</td>
    </tr>
    <tr class="bg-canvas-soft/50">
      <td class="p-2.5 font-medium">Tax &amp; Insurance Duty</td>
      <td class="p-2.5">Borrower pays</td>
      <td class="p-2.5 text-amber-600 font-bold">Borrower must still pay (property tax, insurance, upkeep)</td>
    </tr>
  </tbody>
</table>

<h2>3. How to Calculate Mortgage Payments: Forward vs. Reverse</h2>

<h3>A. Calculating Traditional Mortgage Payments</h3>
<p>For standard fixed mortgages, the monthly Principal &amp; Interest payment (M) is determined by the annuity formula:</p>
<p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-2">
  <strong>M = P × [r(1 + r)^n] ÷ [(1 + r)^n − 1]</strong>
</p>
<p>Where <em>P</em> is loan principal, <em>r</em> is monthly interest rate, and <em>n</em> is total number of monthly payments. On a $320,000 loan at 6.5% for 30 years, monthly P&amp;I equals <strong>$2,022.62</strong>. Adding property taxes ($400/mo) and insurance ($125/mo) brings the true <strong>PITI payment to $2,547.62/month</strong>.</p>

<h3>B. Calculating Reverse Mortgage Payouts and Balances</h3>
<p>With a reverse mortgage, you cannot borrow 100% of your equity. HUD calculates your maximum borrowing limit using the <strong>Principal Limit Factor (PLF)</strong>:</p>
<p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-2">
  <strong>Principal Limit = Home Value (up to FHA cap) × Principal Limit Factor (PLF)</strong>
</p>
<p>The PLF depends directly on the <strong>age of the youngest borrower</strong> and current market interest rates. On a $500,000 home at 6.5% expected rates:</p>
<ul>
  <li><strong>Age 62:</strong> ~36% PLF = ~$180,000 borrowing power</li>
  <li><strong>Age 72:</strong> ~46% PLF = ~$230,000 borrowing power</li>
  <li><strong>Age 82:</strong> ~59% PLF = ~$295,000 borrowing power</li>
</ul>
<p>Because you make no payments, interest and the 0.5% annual FHA mortgage insurance compound into the loan balance monthly, meaning your debt grows as your remaining equity shrinks.</p>

<h2>4. Pros, Cons, and Key Rules</h2>
<ul>
  <li><strong>Pro - Zero Monthly Mortgage Bills:</strong> Frees up hundreds or thousands in monthly cash flow.</li>
  <li><strong>Pro - Tax-Free Cash:</strong> Loan proceeds are not earned income and do not trigger higher income taxes or Social Security clawbacks.</li>
  <li><strong>Pro - Non-Recourse Guarantee:</strong> If the loan balance exceeds the home's value at sale, FHA insurance absorbs the loss.</li>
  <li><strong>Con - The Foreclosure Trap:</strong> You must continue paying property taxes, home insurance, and basic maintenance. Failure to pay property taxes can trigger lender foreclosure.</li>
  <li><strong>Con - Reduced Inheritance:</strong> Compounding interest significantly erodes the equity passed to heirs.</li>
</ul>

<h2>Explore Our Free Calculators</h2>
<p>Model your housing and retirement scenarios with our 100% private, browser-based tools:</p>
<ul>
  <li><a href="/loan/mortgage/">Mortgage Calculator with PMI</a>: Calculate monthly payments, amortization schedules, and interest costs.</li>
  <li><a href="/loan/home-affordability/">Home Affordability Calculator</a>: Discover your maximum home purchase price based on income and debt.</li>
  <li><a href="/loan/refinance/">Loan Refinance Calculator</a>: Evaluate when refinancing saves money.</li>
  <li><a href="/retirement/planner/">Retirement Planner</a>: Model safe withdrawal rates and long-term nest egg longevity.</li>
</ul>
`
    },
    es: {
      title: "¿Qué es una Hipoteca Inversa? Cómo Funciona, Cálculo de Pagos y Reglas Clave",
      description: "Descubre qué es una hipoteca inversa (reverse mortgage/hipoteca revertida), cómo se calculan las cuotas de hipotecas tradicionales e inversas, y sus ventajas y riesgos.",
      content: `
<p><em>"¿Qué es una hipoteca inversa y cómo funciona en la práctica?"</em></p>
<p>Para millones de propietarios mayores que tienen un valor significativo acumulado en su vivienda pero perciben ingresos de jubilación ajustados, la hipoteca inversa promete una solución atractiva: <strong>convertir el valor de la vivienda en dinero en efectivo libre de impuestos sin tener que pagar cuotas mensuales al banco.</strong></p>
<p>Sin embargo, entender cómo funciona realmente la acumulación de intereses y cuáles son los deberes del propietario resulta indispensable para evitar sorpresas desagradables.</p>

<h2>1. ¿Qué es una Hipoteca Inversa?</h2>
<p>Una <strong>hipoteca inversa (o hipoteca revertida)</strong> es un préstamo dirigido a propietarios de <strong>62 años o más</strong> (en España y varios países a partir de 65 años) que les permite disponer de parte del valor de su vivienda habitual sin pagar cuotas mensuales de amortización.</p>
<p>A diferencia de una hipoteca tradicional donde tú pagas al banco cada mes, en la hipoteca inversa <strong>la entidad financiera te abona el dinero a ti</strong> (en una renta mensual vitalicia, una disposición única o una línea de crédito). Mantienes la propiedad y el derecho de vivir en ella de por vida.</p>
<p>La deuda no se amortiza hasta que se vende el inmueble, los prestatarios se trasladan de forma definitiva o fallecen. Además, cuentan con <strong>garantía de no recurso</strong>: ni los titulares ni sus herederos responderán con su patrimonio personal si la deuda llega a superar el valor de la casa.</p>

<h2>2. Hipoteca Tradicional vs. Hipoteca Inversa</h2>
<table class="w-full text-left border-collapse border border-hairline my-4 text-xs sm:text-sm">
  <thead>
    <tr class="bg-canvas-soft border-b border-hairline">
      <th class="p-2.5 font-bold text-ink">Característica</th>
      <th class="p-2.5 font-bold text-ink">Hipoteca Tradicional</th>
      <th class="p-2.5 font-bold text-ink">Hipoteca Inversa</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Flujo de Dinero</td>
      <td class="p-2.5">El prestatario paga mensualmente al banco</td>
      <td class="p-2.5">El banco paga al propietario / elimina cuotas</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Saldo de la Deuda</td>
      <td class="p-2.5 text-emerald-600 font-bold">Disminuye con cada cuota (amortización)</td>
      <td class="p-2.5 text-rose-600 font-bold">Aumenta mensualmente (amortización negativa)</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Patrimonio Neto en la Casa</td>
      <td class="p-2.5 font-bold">Aumenta con el tiempo</td>
      <td class="p-2.5 font-bold">Disminuye con el tiempo</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Edad Mínima</td>
      <td class="p-2.5">18+ años</td>
      <td class="p-2.5 font-bold">62 a 65+ años</td>
    </tr>
    <tr class="bg-canvas-soft/50">
      <td class="p-2.5 font-medium">Pago de Impuestos y Seguros</td>
      <td class="p-2.5">A cargo del propietario</td>
      <td class="p-2.5 text-amber-600 font-bold">Sigue siendo 100% obligación del propietario (IBI, seguro y comunidad)</td>
    </tr>
  </tbody>
</table>

<h2>3. Cómo se Calculan las Cuotas</h2>
<p>En una <strong>hipoteca tradicional</strong>, la cuota mensual se obtiene con la fórmula de amortización financiera (sistema francés):</p>
<p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-2">
  <strong>Cuota Mensual = Capital × [i(1 + i)^n] ÷ [(1 + i)^n − 1]</strong>
</p>
<p>En una <strong>hipoteca inversa</strong>, el importe máximo disponible no es el 100% de la vivienda, sino un porcentaje que oscila entre el 30% y el 60% dependiendo de la edad del titular y el tipo de interés. Al no pagarse cuotas, los intereses y comisiones se suman al capital prestado mes a mes (capitalización de intereses).</p>

<h2>4. Ventajas, Riesgos y Herencias</h2>
<ul>
  <li><strong>Mayor Liquidez:</strong> Aporta una fuente de ingresos regular sin tener que abandonar el hogar.</li>
  <li><strong>Tratamiento Fiscal Favorable:</strong> Al tratarse de disposiciones de crédito y no de rentas del trabajo, no tributan en el IRPF.</li>
  <li><strong>Obligación de Mantenimiento e Impuestos:</strong> El titular debe seguir abonando el IBI, la póliza de hogar y los gastos de comunidad; de no hacerlo, la entidad podría instar la resolución del contrato.</li>
  <li><strong>Impacto en la Herencia:</strong> Al fallecer el titular, los herederos pueden vender la vivienda y liquidar el crédito (quedándose con el sobrante), pagar la deuda con fondos propios o hipotecarios para conservar la casa, o entregarla en dación en pago.</li>
</ul>

<h2>Calculadoras Gratuitas y Privadas</h2>
<p>Realiza tus simulaciones financieras sin registro en nuestras herramientas en línea:</p>
<ul>
  <li><a href="/es/loan/mortgage/">Calculadora de Hipotecas</a>: Simula cuotas mensuales y cuadros de amortización.</li>
  <li><a href="/es/loan/home-affordability/">Calculadora de Asequibilidad de Vivienda</a>: Evalúa tu presupuesto máximo de compra.</li>
  <li><a href="/es/loan/refinance/">Calculadora de Refinanciación</a>: Compara costes al cambiar de préstamo.</li>
  <li><a href="/es/retirement/planner/">Planejador de Jubilación</a>: Calcula la duración de tu patrimonio en el retiro.</li>
</ul>
`
    },
    de: {
      title: "Was ist eine Umkehrhypothek? Funktionsweise, Ratenberechnung und Regeln",
      description: "Erfahre, wie eine Umkehrhypothek (Reverse Mortgage) funktioniert, wie klassische vs. umgekehrte Hypothekenraten berechnet werden, und welche Vor- und Nachteile bestehen.",
      content: `
<p><em>„Was ist eine Umkehrhypothek und wie funktioniert sie genau?“</em></p>
<p>Für viele ältere Immobilieneigentümer, die mietfrei im eigenen Heim leben, aber unter steigenden Lebenshaltungskosten leiden, klingt das Prinzip verlockend: <strong>das in den eigenen vier Wänden gebundene Vermögen in steuerfreie Liquidität verwandeln – ganz ohne monatliche Kreditraten.</strong></p>
<p>Doch hinter dem Begriff „Reverse Mortgage“ bzw. Umkehrhypothek (Immobilienrente) verbergen sich spezifische mathematische und rechtliche Spielregeln, die jeder Eigentümer kennen muss.</p>

<h2>1. Was ist eine Umkehrhypothek?</h2>
<p>Eine <strong>Umkehrhypothek</strong> ist ein spezielles Darlehen für Immobilieneigentümer (in der Regel ab 60 bis 62 Jahren), bei dem die eigene schuldenfreie Immobilie als Kreditsicherheit dient, ohne dass während der Vertragslaufzeit laufende Zins- oder Tilgungszahlungen an die Bank geleistet werden müssen.</p>
<p>Im Gegensatz zu einem klassischen Baudarlehen, bei dem du monatlich an die Bank zahlst, <strong>fließt das Geld bei einer Umkehrhypothek von der Bank an dich</strong> – entweder als Einmalbetrag, monatliche Zusatzrente oder flexible Kreditlinie. Du bleibst weiterhin Eigentümer und behältst das lebenslange Wohnrecht.</p>
<p>Die Rückzahlung des Darlehens samt Zinsen erfolgt erst, wenn der Eigentümer dauerhaft auszieht (z. B. ins Pflegeheim), die Immobilie verkauft oder verstirbt. Meist gilt ein <strong>Non-Recourse-Schutz</strong>: Die Erben haften niemals mit ihrem privaten Vermögen, falls die Kreditschuld den Verkaufswert übersteigen sollte.</p>

<h2>2. Klassische Hypothek vs. Umkehrhypothek</h2>
<table class="w-full text-left border-collapse border border-hairline my-4 text-xs sm:text-sm">
  <thead>
    <tr class="bg-canvas-soft border-b border-hairline">
      <th class="p-2.5 font-bold text-ink">Kriterium</th>
      <th class="p-2.5 font-bold text-ink">Klassische Baufinanzierung</th>
      <th class="p-2.5 font-bold text-ink">Umkehrhypothek</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Zahlungsfluss</td>
      <td class="p-2.5">Darlehensnehmer zahlt monatlich an die Bank</td>
      <td class="p-2.5">Bank zahlt an den Darlehensnehmer</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Kreditschuld</td>
      <td class="p-2.5 text-emerald-600 font-bold">Sinkt kontinuierlich (Tilgung)</td>
      <td class="p-2.5 text-rose-600 font-bold">Steigt monatlich (negative Amortisation durch Zinseszins)</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Eigenkapital im Haus</td>
      <td class="p-2.5 font-bold">Wächst im Zeitverlauf</td>
      <td class="p-2.5 font-bold">Schrumpft im Zeitverlauf</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Mindestalter</td>
      <td class="p-2.5">Ab 18 Jahren</td>
      <td class="p-2.5 font-bold">Ab 60 bis 62 Jahren</td>
    </tr>
    <tr class="bg-canvas-soft/50">
      <td class="p-2.5 font-medium">Nebenkosten &amp; Instandhaltung</td>
      <td class="p-2.5">Eigentümerpflicht</td>
      <td class="p-2.5 text-amber-600 font-bold">Weiterhin 100 % Pflicht des Eigentümers (Grundsteuer, Versicherung, Reparaturen)</td>
    </tr>
  </tbody>
</table>

<h2>3. Berechnung von Hypothekenraten</h2>
<p>Bei einem <strong>Standarddarlehen</strong> errechnet sich die Monatsrate (Annuität) nach der mathematischen Rentenbarwertformel:</p>
<p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-2">
  <strong>Rate = Kreditsumme × [z(1 + z)^n] ÷ [(1 + z)^n − 1]</strong>
</p>
<p>Bei einer <strong>Umkehrhypothek</strong> berechnet sich die maximale Auszahlungssumme als Prozentsatz des Immobilienwertes (Beleihungsauslauf meist 30 % bis 60 %, abhängig von Alter und Lebenserwartung). Weil keine laufenden Raten gezahlt werden, fallen Zinseszinsen an, die den Kreditbetrag über die Jahre anschwellen lassen.</p>

<h2>4. Vor- und Nachteile sowie Erbschaft</h2>
<ul>
  <li><strong>Vorteil:</strong> Zusätzliche monatliche Altersvorsorge ohne Auszug aus den vertrauten vier Wänden.</li>
  <li><strong>Vorteil:</strong> Darlehensauszahlungen sind kein zu versteuerndes Einkommen.</li>
  <li><strong>Nachteil:</strong> Hohe Zinseszinswirkung und anfängliche Abschlusskosten verringern den verbleibenden Erbschaftswert.</li>
  <li><strong>Regelung für Erben:</strong> Erben können die Restschuld aus eigenem Vermögen begleichen und das Haus behalten oder die Immobilie verkaufen, um die Bank auszuzahlen.</li>
</ul>

<h2>Kostenlose Rechentools für deine Immobilienfinanzierung</h2>
<p>Nutze unsere 100 % privaten Browser-Rechner:</p>
<ul>
  <li><a href="/de/loan/mortgage/">Baufinanzierungsrechner</a>: Annuität, Tilgungsplan und Restschuld berechnen.</li>
  <li><a href="/de/loan/home-affordability/">Budgetrechner für Immobilienkauf</a>: Maximalen Kaufpreis ermitteln.</li>
  <li><a href="/de/loan/refinance/">Umschuldungsrechner</a>: Zinsersparnis bei Anschlussfinanzierung prüfen.</li>
  <li><a href="/de/retirement/planner/">Ruhestandsplaner</a>: Notwendiges Erspartes für den Ruhestand berechnen.</li>
</ul>
`
    },
    fr: {
      title: "Qu'est-ce qu'un Prêt Viager Hypothécaire ? Fonctionnement, Calcul et Règles",
      description: "Découvrez le fonctionnement du prêt viager hypothécaire (reverse mortgage), le calcul des mensualités traditionnelles vs inversées, et ses avantages et risques pour les seniors.",
      content: `
<p><em>« Qu'est-ce qu'un prêt viager hypothécaire et comment fonctionne-t-il réellement ? »</em></p>
<p>Pour des millions de seniors propriétaires détenant un patrimoine immobilier important mais disposant d'une pension de retraite limitée, le prêt viager hypothécaire (ou hypothèque inversée / reverse mortgage) constitue une solution attractive : <strong>mobiliser la valeur de son logement sous forme de capital ou de rente sans verser aucune mensualité de remboursement.</strong></p>
<p>Comprendre la mécanique financière et les conséquences successorales de cette formule est indispensable avant tout engagement.</p>

<h2>1. Qu'est-ce qu'un Prêt Viager Hypothécaire ?</h2>
<p>Le <strong>prêt viager hypothécaire (hypothèque inversée)</strong> est un crédit garanti par une hypothèque sur un bien immobilier à usage d'habitation, réservé aux personnes âgées (généralement dès 60 ou 62 ans), sans obligation de rembourser le capital ni les intérêts chaque mois.</p>
<p>Contrairement à un prêt immobilier classique où vous remboursez la banque, c'est ici <strong>la banque qui vous verse les fonds</strong> (en une fois sous forme de capital, ou par versements périodiques sous forme de rente). Vous conservez la pleine propriété du bien et le droit d'y habiter toute votre vie.</p>
<p>Le remboursement intégral (capital + intérêts capitalisés) n'intervient qu'au décès de l'emprunteur ou en cas de vente ou de déménagement définitif. La législation plafonne la dette à la valeur du bien au moment du dénouement : les héritiers ne peuvent jamais être tenus de payer plus que la valeur vénale de la maison.</p>

<h2>2. Prêt Immobilier Classique vs. Prêt Viager Hypothécaire</h2>
<table class="w-full text-left border-collapse border border-hairline my-4 text-xs sm:text-sm">
  <thead>
    <tr class="bg-canvas-soft border-b border-hairline">
      <th class="p-2.5 font-bold text-ink">Critère</th>
      <th class="p-2.5 font-bold text-ink">Prêt Immobilier Amortissable</th>
      <th class="p-2.5 font-bold text-ink">Prêt Viager Hypothécaire</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Flux Financier</td>
      <td class="p-2.5">L'emprunteur paie chaque mois la banque</td>
      <td class="p-2.5">La banque verse de l'argent à l'emprunteur</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Évolution de la Dette</td>
      <td class="p-2.5 text-emerald-600 font-bold">Diminue chaque mois (amortissement)</td>
      <td class="p-2.5 text-rose-600 font-bold">Augmente chaque mois (intérêts composés)</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Patrimoine Net Restant</td>
      <td class="p-2.5 font-bold">Augmente avec le temps</td>
      <td class="p-2.5 font-bold">Diminue avec le temps</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Mensualité Obligatoire</td>
      <td class="p-2.5">Obligatoire (capital + intérêts)</td>
      <td class="p-2.5 text-emerald-600 font-bold">0 € par mois exigé</td>
    </tr>
    <tr class="bg-canvas-soft/50">
      <td class="p-2.5 font-medium">Charges et Taxes</td>
      <td class="p-2.5">À la charge du propriétaire</td>
      <td class="p-2.5 text-amber-600 font-bold">Toujours 100 % à la charge du senior (taxe foncière, assurance, entretien)</td>
    </tr>
  </tbody>
</table>

<h2>3. Comment sont Calculées les Mensualités ?</h2>
<p>Pour un <strong>crédit classique</strong>, la mensualité constante est déterminée par la formule d'amortissement :</p>
<p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-2">
  <strong>Mensualité = Capital × [t(1 + t)^n] ÷ [(1 + t)^n − 1]</strong>
</p>
<p>Pour un <strong>prêt viager hypothécaire</strong>, la quotité empruntable dépend de l'âge de l'emprunteur et de la valeur estimée du logement (en moyenne 25 % à 50 % de la valeur). Les intérêts sont capitalisés annuellement, ce qui fait croître la dette sans affecter la trésorerie mensuelle de l'emprunteur.</p>

<h2>4. Droits des Héritiers et Précautions</h2>
<p>Au décès de l'emprunteur, les héritiers disposent d'un choix clair :</p>
<ul>
  <li>Rembourser le montant de la dette pour conserver le logement dans la famille.</li>
  <li>Faire vendre le bien : la banque récupère sa créance et le surplus net revient intégralement aux héritiers.</li>
  <li>Renoncer à la succession : si la dette dépasse la valeur vénale du bien, la banque assume la perte sans recours contre le patrimoine des héritiers.</li>
</ul>

<h2>Calculez vos Projets avec nos Outils Gratuits</h2>
<ul>
  <li><a href="/fr/loan/mortgage/">Calculateur de Prêt Immobilier</a> : Mensualités, coût total et tableau d'amortissement.</li>
  <li><a href="/fr/loan/home-affordability/">Calculateur de Capacité d'Emprunt</a> : Budget d'achat maximal selon vos revenus.</li>
  <li><a href="/fr/loan/refinance/">Calculateur de Rachat de Crédit</a> : Évaluez l'opportunité d'une renégociation.</li>
  <li><a href="/fr/retirement/planner/">Simulateur de Retraite</a> : Estimez vos besoins et la longévité de votre épargne.</li>
</ul>
`
    },
    ja: {
      title: "リバースモーゲージとは？仕組み・返済額の計算方法とメリット・注意点",
      description: "高齢者向け「リバースモーゲージ」の仕組み、通常住宅ローンとリバースモーゲージの返済計算の違い、借入限度額の決定要因、注意すべきリスクを徹底解説。",
      content: `
<p><em>「リバースモーゲージとは何か？通常の住宅ローンとどう違うのか？」</em></p>
<p>自宅を所有しているものの、年金収入だけでは生活費や医療費に不安を抱えるシニア世代の間で、注目を集めているのが「リバースモーゲージ（逆住宅ローン）」です。<strong>自宅に住み続けながら、自宅の資産価値（含み益）を非課税の生活資金に変えられる仕組み</strong>として知られています。</p>
<p>しかし、通常の住宅ローンとは正反対の資金移動や金利計算の仕組みを持つため、利用前に正しいリスクと計算ロジックを理解しておくことが欠かせません。</p>

<h2>1. リバースモーゲージの基本の仕組み</h2>
<p><strong>リバースモーゲージ</strong>とは、主に<strong>60歳〜62歳以上の高齢者</strong>を対象に、所有する自宅を担保に入れて金融機関から融資を受けられる制度です。</p>
<p>通常の住宅ローンでは毎月「元金と利息」を返済しますが、リバースモーゲージでは<strong>生存中の毎月の元金返済が不要</strong>（または利息のみ支払い）であり、金融機関から年金形式・一括・または必要な都度の融資枠（極度額）として資金を受け取ります。</p>
<p>借入金の元本は、利用者が亡くなった際や施設入居等で退去した際に、自宅を売却して一括清算します。多くの場合、<strong>ノンリコース型（非遡及型）</strong>が採用されており、自宅の売却額が借入総額を下回っても、相続人が不足分を自腹で弁済する必要はありません。</p>

<h2>2. 通常の住宅ローン vs. リバースモーゲージ 徹底比較</h2>
<table class="w-full text-left border-collapse border border-hairline my-4 text-xs sm:text-sm">
  <thead>
    <tr class="bg-canvas-soft border-b border-hairline">
      <th class="p-2.5 font-bold text-ink">項目</th>
      <th class="p-2.5 font-bold text-ink">通常の住宅ローン</th>
      <th class="p-2.5 font-bold text-ink">リバースモーゲージ</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">お金の流れ</td>
      <td class="p-2.5">契約者が金融機関に毎月返済する</td>
      <td class="p-2.5">金融機関から契約者へ資金が支払われる</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">ローン残高</td>
      <td class="p-2.5 text-emerald-600 font-bold">毎月減少していく（償還）</td>
      <td class="p-2.5 text-rose-600 font-bold">毎月増加していく（負の償還・利息の元加）</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">住宅の純資産価値</td>
      <td class="p-2.5 font-bold">年々増加する</td>
      <td class="p-2.5 font-bold">年々減少する</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">対象年齢</td>
      <td class="p-2.5">満18歳以上</td>
      <td class="p-2.5 font-bold">満60歳〜62歳以上</td>
    </tr>
    <tr class="bg-canvas-soft/50">
      <td class="p-2.5 font-medium">固定資産税・管理費</td>
      <td class="p-2.5">所有者が負担</td>
      <td class="p-2.5 text-amber-600 font-bold">引き続き100%所有者の自己負担（滞納すると契約解除リスク）</td>
    </tr>
  </tbody>
</table>

<h2>3. 返済額・受取可能額の計算ロジック</h2>

<h3>通常住宅ローンの返済計算（元利均等返済）</h3>
<p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-2">
  <strong>毎月返済額 = 借入元金 × [r(1 + r)^n] ÷ [(1 + r)^n − 1]</strong>
</p>
<p>毎回の支払いで元金が確実に減っていきます。</p>

<h3>リバースモーゲージの借入可能枠と残高計算</h3>
<p>リバースモーゲージでは担保評価額の50%〜60%程度（年齢や金利によって変動）が上限枠となります。毎月の元金返済を行わないプランでは、未払い利息が元金に組み入れられ（複利効果）、年数が経つほど残高が膨らむ点に留意が必要です。</p>

<h2>4. メリット・デメリットと相続時の選択肢</h2>
<ul>
  <li><strong>メリット：</strong> 住み慣れた自宅を離れることなく、老後資金や医療介護費を補填できる。</li>
  <li><strong>注意点（固定資産税の義務）：</strong> ローン返済がなくても、固定資産税や火災保険料、修繕費は継続して自己負担する必要があります。</li>
  <li><strong>相続人の対応：</strong> 相続人は自宅を売却して一括清算する（余剰金は相続人が受取）、または自らの資金で残高を精算して自宅を相続するかを選択できます。</li>
</ul>

<h2>無料・高精度シミュレーターを活用する</h2>
<p>ブラウザ上で瞬時に試算できる当サイトの計算ツールをご利用ください：</p>
<ul>
  <li><a href="/ja/loan/mortgage/">住宅ローン返済シミュレーター</a>：元利金返済額と詳細な償還予定表を算出。</li>
  <li><a href="/ja/loan/home-affordability/">住宅購入可能額計算機</a>：年収と負債から適正借入可能額を試算。</li>
  <li><a href="/ja/loan/refinance/">住宅ローン借り換え計算機</a>：金利差による総支払削減額を比較。</li>
  <li><a href="/ja/retirement/planner/">退職金・老後資金プランナー</a>：老後資産の取り崩しシミュレーション。</li>
</ul>
`
    },
    pt: {
      title: "O que é Hipoteca Reversa? Como Funciona, Cálculo de Parcelas e Regras",
      description: "Entenda o que é a hipoteca reversa (reverse mortgage), como são calculadas as parcelas no financiamento tradicional vs. inverso, vantagens, riscos e sucessão.",
      content: `
<p><em>"O que é uma hipoteca reversa e como ela funciona na prática?"</em></p>
<p>Para milhões de idosos proprietários que possuem um imóvel quitado mas enfrentam aposentadorias apertadas e custos médicos crescentes, a hipoteca reversa surge como uma proposta tentadora: <strong>transformar o patrimônio imobiliário em liquidez isenta de imposto de renda, sem pagar parcelas mensais ao banco.</strong></p>
<p>Entretanto, por envolver amortização negativa e juros compostos, compreender o funcionamento dessa operação é fundamental para proteger a segurança familiar.</p>

<h2>1. O que é Hipoteca Reversa?</h2>
<p>A <strong>hipoteca reversa</strong> (ou hipoteca inversa) é uma modalidade de empréstimo voltada para proprietários com <strong>62 anos ou mais</strong>, permitindo que utilizem o patrimônio líquido acumulado no imóvel como garantia sem a necessidade de pagar prestações mensais de amortização.</p>
<p>Diferente de um financiamento tradicional em que o comprador paga ao banco todos os meses, na hipoteca reversa <strong>é o banco que paga ao proprietário</strong> (em renda mensal vitalícia, montante único ou linha de crédito). Você continua com o título de propriedade e com o direito de morar no imóvel.</p>
<p>A liquidação da dívida só ocorre quando o proprietário vende o imóvel, muda-se definitivamente ou falece. Pela regra de <strong>não recurso (non-recourse)</strong>, os herdeiros nunca respondem por débitos que excedam o valor de mercado da propriedade.</p>

<h2>2. Financiamento Tradicional vs. Hipoteca Reversa</h2>
<table class="w-full text-left border-collapse border border-hairline my-4 text-xs sm:text-sm">
  <thead>
    <tr class="bg-canvas-soft border-b border-hairline">
      <th class="p-2.5 font-bold text-ink">Aspecto</th>
      <th class="p-2.5 font-bold text-ink">Financiamento Tradicional (SAC/Price)</th>
      <th class="p-2.5 font-bold text-ink">Hipoteca Reversa</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Fluxo Financeiro</td>
      <td class="p-2.5">O cliente paga mensalmente ao banco</td>
      <td class="p-2.5">O banco paga ao cliente / quita dívidas existentes</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Saldo Devedor</td>
      <td class="p-2.5 text-emerald-600 font-bold">Diminui a cada mês (amortização)</td>
      <td class="p-2.5 text-rose-600 font-bold">Aumenta a cada mês (juros capitalizados)</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Patrimônio Líquido no Imóvel</td>
      <td class="p-2.5 font-bold">Cresce ao longo do tempo</td>
      <td class="p-2.5 font-bold">Reduz-se ao longo do tempo</td>
    </tr>
    <tr class="border-b border-hairline/60">
      <td class="p-2.5 font-medium">Idade Mínima</td>
      <td class="p-2.5">18 anos</td>
      <td class="p-2.5 font-bold">62 anos ou mais</td>
    </tr>
    <tr class="bg-canvas-soft/50">
      <td class="p-2.5 font-medium">IPTU, Seguro e Condomínio</td>
      <td class="p-2.5">Dever do comprador</td>
      <td class="p-2.5 text-amber-600 font-bold">Permanece 100% responsabilidade do proprietário (inadimplência gera risco de execução)</td>
    </tr>
  </tbody>
</table>

<h2>3. Como são Calculadas as Parcelas</h2>
<p>Em um <strong>financiamento tradicional</strong> (Tabela Price), a parcela mensal fixa é calculada pela fórmula de anuidade:</p>
<p class="font-mono bg-canvas-soft p-3 rounded border border-hairline text-center text-xs sm:text-sm my-2">
  <strong>Parcela = Saldo Devedor × [i(1 + i)^n] ÷ [(1 + i)^n − 1]</strong>
</p>
<p>Na <strong>hipoteca reversa</strong>, o teto disponível para saque gira em torno de 35% a 60% do valor avaliado do imóvel, dependendo estritamente da idade do tomador e da taxa de juros praticada. Ao não pagar parcelas, os juros acumulam-se ao saldo principal mês após mês.</p>

<h2>4. Vantagens, Riscos e Regras de Sucessão</h2>
<ul>
  <li><strong>Renda na Terceira Idade:</strong> Proporciona fluxo de caixa estável sem obrigar a pessoa idosa a vender o imóvel e se mudar.</li>
  <li><strong>Armadilha do IPTU e Manutenção:</strong> O proprietário continua obrigado a manter o IPTU, seguro contra incêndio e taxa de condomínio em dia. O atraso continuado pode ensejar cobrança e execução do imóvel.</li>
  <li><strong>Destino aos Herdeiros:</strong> Com o falecimento, os herdeiros têm a prerrogativa de vender o imóvel para pagar o saldo (ficando com o excedente financeiro) ou quitar o saldo com recursos próprios para manter a casa na família.</li>
</ul>

<h2>Simule nas Nossas Ferramentas Gratuitas</h2>
<p>Faça suas projeções financeiras com privacidade absoluta no navegador:</p>
<ul>
  <li><a href="/pt/loan/mortgage/">Calculadora de Financiamento Imobiliário</a>: Simule parcelas mensais e cronogramas completos.</li>
  <li><a href="/pt/loan/home-affordability/">Calculadora de Poder de Compra Imobiliário</a>: Calcule o preço máximo da moradia.</li>
  <li><a href="/pt/loan/refinance/">Calculadora de Refinanciamento</a>: Verifique a economia em trocar de taxa de juros.</li>
  <li><a href="/pt/retirement/planner/">Planejador de Aposentadoria</a>: Projete sua renda mensal e longevidade financeira.</li>
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
