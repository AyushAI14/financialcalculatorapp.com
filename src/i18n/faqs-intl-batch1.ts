import type { Lang } from './ui';

export const faqsIntlBatch1: Partial<Record<Lang, Record<string, string>>> = {
  "de": {
    "How does an amortized loan work?": "Wie funktioniert ein Annuitätendarlehen?",
    "With an amortized loan, you make equal periodic payments. Early in the loan term, the majority of each payment goes toward interest. Over time, an increasing portion goes toward paying down the principal balance until the debt is fully paid off.": "Bei einem Annuitätendarlehen zahlen Sie gleichbleibende Raten. Zu Beginn überwiegt der Zinsanteil; mit zunehmender Tilgung sinkt die Zinslast, sodass der Tilgungsanteil kontinuierlich steigt.",
    "What is the difference between fixed-rate and variable-rate loans?": "Was ist der Unterschied zwischen Festzins- und variablen Krediten?",
    "A fixed-rate loan maintains the exact same interest rate and payment throughout the loan term. A variable-rate loan has an interest rate that adjusts periodically based on benchmark interest rates, which can increase or decrease your payments.": "Ein Festzinskredit garantiert über die gesamte Laufzeit unveränderte Zinsen und Raten, während sich ein variabler Kredit an Marktreferenzzinssätzen orientiert.",
    "Can I pay off my loan early without penalty?": "Kann ich meinen Kredit vorzeitig ohne Vorfälligkeitsentschädigung tilgen?",
    "Most consumer loans and conventional mortgages allow prepayment without penalties, but some lenders include a prepayment penalty clause. Always verify your loan agreement terms before making accelerated principal payments.": "Viele Verbraucherkredite gestatten kostenlose Sondertilgungen, während Banken bei Baudarlehen oft eine Vorfälligkeitsentschädigung berechnen.",

    "What is the difference between interest rate and APR?": "Was unterscheidet den Sollzins vom effektiven Jahreszins (APR)?",
    "The interest rate is the nominal cost of borrowing the principal balance. The Annual Percentage Rate (APR) reflects the total annual cost of the loan including points, broker fees, and origination charges.": "Der Sollzins beziffert die reine Zinszahlung; der Effektivzins (APR) beziffert die tatsächlichen Gesamtkosten inklusive sämtlicher Nebenkosten und Bearbeitungsgebühren.",
    "What is the 4% rule in retirement planning?": "Was besagt die 4-Prozent-Regel in der Altersvorsorge?",
    "The 4% rule suggests that withdrawing 4% of your retirement portfolio in the first year, adjusted for inflation annually thereafter, provides a high probability that your nest egg will last at least 30 years.": "Die 4%-Regel besagt, dass bei einer anfänglichen Entnahme von 4% des Kapitals plus jährlichem Inflationsausgleich das Vermögen mit hoher Sicherheit mindestens 30 Jahre reicht.",

    "What is compound interest?": "Was ist der Zinseszinseffekt?",
    "Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods. It causes your wealth to grow exponentially over time.": "Der Zinseszins entsteht, wenn erwirtschaftete Zinsen dem Anlagebetrag gutgeschrieben und in den Folgejahren mitverzinst werden, wodurch das Kapital exponentiell wächst.",
    "What is the Rule of 72?": "Was ist die 72er-Regel?",
    "The Rule of 72 is a quick mental formula to estimate how many years it takes to double your money. Divide 72 by your annual interest rate (e.g. at 8%, your money doubles in about 9 years).": "Die 72er-Regel ist eine mathematische Faustformel: 72 geteilt durch den jährlichen Zinssatz ergibt die ungefähre Dauer in Jahren bis zur Verdopplung des Kapitals.",

    "What is Dollar-Cost Averaging (DCA)?": "Was bedeutet Dollar-Cost-Averaging (Durchschnittskosteneffekt)?",
    "Dollar-Cost Averaging is an investment strategy where you invest a fixed amount of money at regular intervals regardless of the asset's fluctuating market price.": "Beim Sparplan investieren Sie in festen Zeitintervallen einen konstanten Geldbetrag, um unabhängig von aktuellen Marktschwankungen einen günstigen Durchschnittskurs zu erzielen."
  },

  "ja": {
    "How does an amortized loan work?": "元利均等返済の仕組みはどうなっていますか？",
    "With an amortized loan, you make equal periodic payments. Early in the loan term, the majority of each payment goes toward interest. Over time, an increasing portion goes toward paying down the principal balance until the debt is fully paid off.": "毎回の返済額が一定となる方式です。返済初期は利息の割合が大部分を占め、元金の減少に伴って元金充当分が徐々に増えていきます。",
    "What is the difference between fixed-rate and variable-rate loans?": "固定金利型と変動金利型ローンの違いは何ですか？",
    "A fixed-rate loan maintains the exact same interest rate and payment throughout the loan term. A variable-rate loan has an interest rate that adjusts periodically based on benchmark interest rates, which can increase or decrease your payments.": "固定金利は借入期間中の適用金利と返済額が変わりません。変動金利は市場金利の動向に応じて半年ごとに金利と返済額が見直されます。",
    "Can I pay off my loan early without penalty?": "ローンを繰り上げ返済することは可能ですか？手数料はかかりますか？",
    "Most consumer loans and conventional mortgages allow prepayment without penalties, but some lenders include a prepayment penalty clause. Always verify your loan agreement terms before making accelerated principal payments.": "多くの金融機関で一部または全額の繰り上げ返済が可能ですが、借入規約によっては事務手数料や違約金が発生する場合があります。",

    "What is the difference between interest rate and APR?": "表面金利と実質年率（APR）の違いは何ですか？",
    "The interest rate is the nominal cost of borrowing the principal balance. The Annual Percentage Rate (APR) reflects the total annual cost of the loan including points, broker fees, and origination charges.": "表面金利は純粋な利息計算の割合であり、実質年率（APR）は保証料や事務取扱手数料などの諸経費をすべて含めた年間の実質負担割合を示します。",

    "What is the 4% rule in retirement planning?": "リタイアメント計画における「4%ルール」とは何ですか？",
    "The 4% rule suggests that withdrawing 4% of your retirement portfolio in the first year, adjusted for inflation annually thereafter, provides a high probability that your nest egg will last at least 30 years.": "引退初年度に資産総額の4%を取り崩し、翌年以降はインフレ率に合わせて引き出し額を調整することで、30年以上にわたり資産を枯渇させず維持できる確率が高いとする経験則です。",

    "What is compound interest?": "複利とはどのような仕組みですか？",
    "Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods. It causes your wealth to grow exponentially over time.": "元金だけでなく、これまでに生じた利息も含めた全体に対して利息が計算される仕組みです。時間をかけることで資産が加速度的に増大します。",
    "What is the Rule of 72?": "「72の法則」とは何ですか？",
    "The Rule of 72 is a quick mental formula to estimate how many years it takes to double your money. Divide 72 by your annual interest rate (e.g. at 8%, your money doubles in about 9 years).": "資産が2倍になるまでにかかるおおよその年数を簡単に暗算できる公式です。72を想定利回りで割ることで算出できます（例：年利8%なら約9年）。",

    "What is Dollar-Cost Averaging (DCA)?": "ドルコスト平均法（積立投資）とは何ですか？",
    "Dollar-Cost Averaging is an investment strategy where you invest a fixed amount of money at regular intervals regardless of the asset's fluctuating market price.": "価格の変動に関係なく、定期的に一定額を投資し続ける手法です。価格が低いときは多く、高いときは少なく買い付けることで平均取得単価を抑えられます。"
  }
};
