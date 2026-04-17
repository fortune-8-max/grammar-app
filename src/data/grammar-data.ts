// Auto-generated — 長文読解のための英文法 全テーマデータ

export type Quiz = {
  question: string;
  options: [string, string, string];
  answer: 0 | 1 | 2;
  explanation: string;
};

export type ExampleItem = {
  english: string;
  japanese: string;
  point: string;
};

export type AdvancedItem = {
  english: string;
  japanese: string;
  point: string;
  source: string;
};

export type GrammarTheme = {
  id: string;
  theme_number: string;
  title: string;
  points: string[];
  quiz: Quiz;
  examples: ExampleItem[];
  advanced: AdvancedItem[];
};

export const grammarData: GrammarTheme[] = [
  {
    "id": "theme-01-1",
    "theme_number": "01-1",
    "title": "SVの発見で英文が読める①",
    "points": [
      "Sの発見: 長い主語をつくる単語（That/What/How）が文頭にきたら注意してカタマリを捉えます。",
      "Vの発見: Vと過去分詞の区別がポイント。Oがないこと、うしろに本当の動詞があることに注意します。",
      "SVの発見: 関係代名詞の省略がポイント。「名詞＋SV」の語順に注意します。"
    ],
    "quiz": {
      "question": "関係代名詞が省略されていることを見抜くための、最も重要な「語順」のサインはどれですか？",
      "options": [
        "名詞 ＋ V ＋ O",
        "名詞 ＋ S ＋ V",
        "S ＋ V ＋ 名詞"
      ],
      "answer": 1,
      "explanation": "「The bicycle I sold...」のように、『名詞＋S＋V』の語順になっていて、かつ動詞の目的語(O)が欠けている場合、関係代名詞が省略されています。"
    },
    "examples": [
      {
        "english": "That he ate ten hamburgers surprised me.",
        "japanese": "彼が10個のハンバーガーを食べたことが、私を驚かせた。",
        "point": "Thatから始まる名詞節がS、surprisedがVです。"
      },
      {
        "english": "The world we live in has changed in recent years.",
        "japanese": "私たちが暮らす世の中は、近年変化してきた。",
        "point": "The worldとweの間に名詞＋SVの語順があり、関係代名詞が省略されています。The worldがS、has changedがVです。"
      }
    ],
    "advanced": [
      {
        "english": "That the structure of society is key to health becomes clear.",
        "japanese": "社会の構造が健康の鍵であるということが、明らかになる。",
        "point": "Thatから始まる長い名詞節が文のSとなり、becomesが本当のVとして機能しています。",
        "source": "不明"
      }
    ]
  },
  {
    "id": "theme-01-2",
    "theme_number": "01-2",
    "title": "SVの発見で英文が読める②",
    "points": [
      "MSV: 文頭の群前置詞（2語以上からなる前置詞）に注意してM（修飾語）を括り出します。",
      "SMV: SとVの間に入る前置詞句、分詞句、不定詞句、関係詞節に注意します。",
      "SVMO: VとOの間に入る修飾語に注意し、Oが必要な他動詞の目的語を正確に発見します。"
    ],
    "quiz": {
      "question": "SとVの間に割り込んで「SMV」の形をつくる修飾語(M)として、当てはまらないものはどれですか？",
      "options": [
        "前置詞句や不定詞句",
        "関係詞節",
        "他動詞の目的語(O)"
      ],
      "answer": 2,
      "explanation": "目的語(O)は修飾語(M)ではありません。Oは他動詞の後ろに置かれますが、たまにVとOの間に修飾語が入り込んで「SVMO」の形になることがある点に注意が必要です。"
    },
    "examples": [
      {
        "english": "Thanks to vacuum cleaners homes are cleaner.",
        "japanese": "掃除機のおかげで、家はよりきれいになる。",
        "point": "Thanks toから始まる前置詞句(M)が先頭にあり、homesがS、areがVです(MSV)。"
      },
      {
        "english": "The man sitting in the corner is my father.",
        "japanese": "角に座っている男性は私の父だ。",
        "point": "sitting in the cornerが現在分詞句(M)としてSとVの間に入っています(SMV)。"
      }
    ],
    "advanced": [
      {
        "english": "We learn from a young age what food communicates in our particular culture or family.",
        "japanese": "私たちは幼い頃から、特定の文化や家族において食べ物が何を伝達するかを学ぶ。",
        "point": "他動詞learn(V)と目的語のwhat節(O)の間に、from a young age(M)が入り込んでいるSVMOの構造です。",
        "source": "不明"
      }
    ]
  },
  {
    "id": "theme-02",
    "theme_number": "02",
    "title": "名詞句で英文が読める",
    "points": [
      "動名詞「〜すること」: 意味のカタマリをつくり文のS・O・Cになります。",
      "不定詞の名詞的用法「〜すること」: 意味のカタマリをつくり文のS・O・Cになります。",
      "疑問詞+to不定詞: 「疑問詞＋〜すべきか」と訳し、すべてにshouldのニュアンスがあります。句の中にSVは入りません。"
    ],
    "quiz": {
      "question": "「what to do」や「when to do」などの『疑問詞＋to不定詞』の表現に共通して含まれるニュアンスは何ですか？",
      "options": [
        "can（〜できる）",
        "should（〜すべき）",
        "will（〜だろう）"
      ],
      "answer": 1,
      "explanation": "疑問詞＋to不定詞はすべて should（〜すべき）のニュアンスを含みます。例えば what to do は「何を〜すべきか」と訳します。"
    },
    "examples": [
      {
        "english": "Riding a bike is different from driving a car.",
        "japanese": "自転車に乗ることは、車を運転することとは違う。",
        "point": "Riding(S)とdriving(前置詞のO)が動名詞の名詞句をつくっています。"
      },
      {
        "english": "What to read is less important than how to read it.",
        "japanese": "何を読むべきかは、それをどう読むべきかほど重要ではない。",
        "point": "What to read(S)とhow to read itが疑問詞+to不定詞の名詞句をつくっています。"
      }
    ],
    "advanced": [
      {
        "english": "When making progress becomes difficult, taking a break allows the unconscious processes to operate.",
        "japanese": "進歩することが難しくなったとき、休憩をとることは無意識のプロセスを働かせる。",
        "point": "taking a breakという動名詞句が、主節の主語(S)として働いています。",
        "source": "不明"
      }
    ]
  },
  {
    "id": "theme-03",
    "theme_number": "03",
    "title": "名詞節で英文が読める",
    "points": [
      "関係代名詞のwhat（〜こと/もの）、名詞節のthat（〜ということ）、疑問詞の名詞節（疑問詞+〜か）、whether/if（〜かどうか）を見たら名詞節の範囲を決定します。",
      "名詞節は文のS・O・Cのいずれかになり、1つの節にSVは1つ含まれます。"
    ],
    "quiz": {
      "question": "名詞節をつくる接続詞「whether」や「if」は、名詞節として働く場合どのように訳しますか？",
      "options": [
        "もし〜なら",
        "〜ということ",
        "〜かどうか"
      ],
      "answer": 2,
      "explanation": "whether や if が文のS・O・Cになって名詞節をつくる場合は「〜かどうか」と訳します。"
    },
    "examples": [
      {
        "english": "What I don't understand is that he refused my offer.",
        "japanese": "私がわからないことは、彼が私の申し出を断ったということだ。",
        "point": "What節が文のS、that節が文のCになっています。"
      },
      {
        "english": "My friend asked me if he could borrow the book.",
        "japanese": "友人は私にその本を借りられるかどうか尋ねた。",
        "point": "if「〜かどうか」が名詞節をつくり、第4文型(ask O1 O2)のO2になっています。"
      }
    ],
    "advanced": [
      {
        "english": "Computers do what they are told to do, whether we meant it or not.",
        "japanese": "私たちがそれを意図したかどうかにかかわらず、コンピュータは指示されたことを行う。",
        "point": "what節が目的語(O)の名詞節として機能し、後半のwhether節は副詞節として働いています。",
        "source": "不明"
      }
    ]
  },
  {
    "id": "theme-04",
    "theme_number": "04",
    "title": "形容詞句で英文が読める",
    "points": [
      "前置詞、不定詞の形容詞的用法、分詞（現在分詞・過去分詞）を見たら、形容詞句の範囲を決定して意味のカタマリをつかみます。",
      "形容詞句は2語以上からなるSVのないカタマリで、前の名詞を修飾します。"
    ],
    "quiz": {
      "question": "「形容詞句」に関する説明として正しいものはどれですか？",
      "options": [
        "中にSVを含み、動詞を修飾する",
        "中にSVを含まず、前の名詞を修飾する",
        "中にSVを含み、文の主語になる"
      ],
      "answer": 1,
      "explanation": "「句（Phrase）」は中にSVを含みません。そして「形容詞句」は直前の名詞を後ろから修飾する役割を持ちます。"
    },
    "examples": [
      {
        "english": "The gap between ideal and reality has created pains.",
        "japanese": "理想と現実の間のギャップが、苦しみをつくり出してきた。",
        "point": "betweenから始まる前置詞句が形容詞のカタマリとなり、前の名詞(The gap)を修飾しています。"
      },
      {
        "english": "The man standing by the wall is a famous actor.",
        "japanese": "壁のそばに立っている人は、有名な俳優だ。",
        "point": "standingから始まる現在分詞のカタマリが、前の名詞(The man)を修飾しています。"
      }
    ],
    "advanced": [
      {
        "english": "The crop produced in one part of a field can be three times that of another.",
        "japanese": "畑の一部で生産された作物は、別の部分の作物の3倍になることがある。",
        "point": "produced in one part of a fieldという過去分詞句が、直前の名詞(The crop)を修飾しています。",
        "source": "不明"
      }
    ]
  },
  {
    "id": "theme-05",
    "theme_number": "05",
    "title": "形容詞節で英文が読める",
    "points": [
      "関係代名詞、前置詞+関係代名詞、関係副詞を見たら、形容詞節の範囲を決定して意味のカタマリをつかみます。",
      "1つの節のなかにSVは1つです。"
    ],
    "quiz": {
      "question": "関係代名詞がつくる「形容詞節」のカタマリの中には、通常SV（主語と動詞）はいくつ含まれますか？",
      "options": [
        "含まれない",
        "1つだけ含まれる",
        "2つ以上含まれる"
      ],
      "answer": 1,
      "explanation": "「節（Clause）」という名前がついている通り、カタマリの中には必ずSVが1つだけ含まれます。これを基準に節の終わりを見極めます。"
    },
    "examples": [
      {
        "english": "The woman who entered the room was my mother.",
        "japanese": "その部屋に入った女性は、私の母だった。",
        "point": "whoは関係代名詞で形容詞節をつくり、前の名詞（The woman）を修飾します。"
      },
      {
        "english": "I can remember the time when phones were still rare.",
        "japanese": "私は電話がまだ珍しかった時代を、思い出すことができる。",
        "point": "when（関係副詞）が形容詞節をつくり、the timeを修飾します。"
      }
    ],
    "advanced": [
      {
        "english": "There are times when I'll say something that I think is standard Japanese, only to have someone express their surprise at my use of Osaka-ben.",
        "japanese": "私が標準語だと思って言ったことに対して、大阪弁を使っていると誰かに驚かれることがある。",
        "point": "2つの形容詞節が使われています。when以下が先行詞 times を修飾する関係副詞の節で、that以下が先行詞 something を修飾する関係代名詞の節です。カタマリを正確に捉える力が問われます。",
        "source": "高知大"
      }
    ]
  },
  {
    "id": "theme-06",
    "theme_number": "06",
    "title": "副詞句で英文が読める",
    "points": [
      "句の中にはSVは入りません。副詞句はSVの前やうしろで動詞を修飾します。",
      "前置詞の副詞句、時の副詞句、不定詞の副詞的用法、分詞構文などがあります。"
    ],
    "quiz": {
      "question": "文頭や文尾に置かれる分詞構文（現在分詞や過去分詞のカタマリ）は、文の要素として何として働きますか？",
      "options": [
        "名詞句",
        "形容詞句",
        "副詞句"
      ],
      "answer": 2,
      "explanation": "分詞構文は、文全体や主節の動詞を修飾する「副詞句」として働き、「〜して」「〜なので」といった意味を添えます。"
    },
    "examples": [
      {
        "english": "I am going to take the bus to save money.",
        "japanese": "私はお金を節約するために、そのバスに乗る予定だ。",
        "point": "to save（不定詞の副詞的用法）が「～するため」という目的を表し、動詞（take）を修飾します。"
      },
      {
        "english": "Seen from a distance, the hill looks like a man's face.",
        "japanese": "遠くから見ると、その丘は人の顔のように見える。",
        "point": "Seen（過去分詞）を用いた文頭の分詞構文が、動詞（looks）を修飾します。"
      }
    ],
    "advanced": [
      {
        "english": "By its very nature much of medical practice is done without supervision.",
        "japanese": "その性質上、医療行為の多くは監督なしで行われる。",
        "point": "文頭の By its very nature が前置詞から始まる副詞句として働き、文全体の動詞 is done を修飾しています。SVの前に置かれた副詞句のカタマリを[ ]でくくって整理できるかが鍵です。",
        "source": "奈良県立医科大"
      }
    ]
  },
  {
    "id": "theme-07",
    "theme_number": "07",
    "title": "副詞節で英文が読める①・②",
    "points": [
      "接続詞はSVを伴い、文頭や文尾で動詞を修飾します。",
      "副詞や前置詞句、比較表現から接続詞に転用されたものにも注意します。"
    ],
    "quiz": {
      "question": "比較表現から転用されて、「〜するとすぐに」という副詞節をつくる接続詞はどれですか？",
      "options": [
        "by the time",
        "as soon as",
        "every time"
      ],
      "answer": 1,
      "explanation": "as soon as S V で「SがVするとすぐに」という副詞節になります。by the timeは「〜する時までに」、every timeは「〜するたびに」です。"
    },
    "examples": [
      {
        "english": "While I like the color of the bag, I don't like its size.",
        "japanese": "私はそのバッグの色が好きだけれども、その大きさが好きではない。",
        "point": "接続詞While（〜だけれども/譲歩）が文頭で副詞節をつくります。"
      },
      {
        "english": "As soon as I arrived at the town, I visited her.",
        "japanese": "私はその町に着くとすぐに、彼女のもとを訪ねた。",
        "point": "As soon as（比較表現から転用された接続詞）が「〜するとすぐに」という副詞節をつくります。"
      }
    ],
    "advanced": [
      {
        "english": "Once I'd learned that skill, the first task was to begin imagining the vision of who I wanted to be.",
        "japanese": "一度そのスキルを学んだら、最初の課題は自分がなりたい理想像を想像し始めることだった。",
        "point": "副詞から転用された接続詞 Once（一度〜すると）が文頭で副詞節をつくり、主節の動詞を修飾しています。",
        "source": "岩手大"
      }
    ]
  },
  {
    "id": "theme-08",
    "theme_number": "08",
    "title": "to do の識別で英文が読める",
    "points": [
      "to＋動詞の原形を見たら、名詞・形容詞・副詞の3用法か、「万能助動詞」であるbe to不定詞かを識別します。"
    ],
    "quiz": {
      "question": "be動詞のうしろに to不定詞があり、主語＝補語（S=C）の関係が成り立たない場合、これは何用法ですか？",
      "options": [
        "名詞的用法",
        "be to不定詞（万能助動詞）",
        "副詞的用法"
      ],
      "answer": 1,
      "explanation": "be動詞の後ろでSVC（〜することである）が成立しない場合、それは予定・義務・可能などを表す be to不定詞 となります。"
    },
    "examples": [
      {
        "english": "To know the temperature of the Earth is important.",
        "japanese": "地球の温度を知ることは重要だ。",
        "point": "文の主語(S)になっているため、名詞的用法「〜すること」です。"
      },
      {
        "english": "A new store is to be built next year.",
        "japanese": "来年、新しい店舗が建てられる予定だ。",
        "point": "be動詞のうしろにあり、SVCのC（名詞的用法）ではないため、be to不定詞（予定：〜する予定だ）です。"
      }
    ],
    "advanced": [
      {
        "english": "To keep this newly competitive labor market fair and open, equality of educational opportunities is necessary.",
        "japanese": "この新たに競争の激しい労働市場を公平で開かれたものに保つためには、教育機会の平等が必要である。",
        "point": "文頭の To keep... は主語ではなく（カンマで区切られ後ろにSVが続くため）、目的を表す「副詞的用法」として機能しています。",
        "source": "北海道大"
      }
    ]
  },
  {
    "id": "theme-09",
    "theme_number": "09",
    "title": "-ing の識別で英文が読める",
    "points": [
      "文中の-ingが、動名詞、進行形、現在分詞の形容詞用法、分詞構文のどれに当たるかを識別します。"
    ],
    "quiz": {
      "question": "be動詞のうしろに -ing があり、主語との間に「S＝C」の関係が成立しない場合、この -ing の役割は何ですか？",
      "options": [
        "動名詞（補語）",
        "進行形をつくる現在分詞",
        "分詞構文"
      ],
      "answer": 1,
      "explanation": "S＝C（私の趣味＝集めること等）が成立すれば動名詞ですが、成立しない場合（彼は＝走っている 等）は進行形をつくる現在分詞です。"
    },
    "examples": [
      {
        "english": "Learning to read a language is best taught in the classroom.",
        "japanese": "言語を読めるようになることは、教室で最もよく教えられる。",
        "point": "名詞のカタマリをつくり文の主語(S)になっているため、動名詞です。"
      },
      {
        "english": "Realizing that he had a talent for languages, he decided to train as an interpreter.",
        "japanese": "彼は言語の才能があると悟ったので、通訳の訓練をすることにした。",
        "point": "[-ing ~, SV.]の型にあてはまるため、現在分詞による分詞構文です。"
      }
    ],
    "advanced": [
      {
        "english": "There are significant differences between learning and teaching existing mathematics and creating new mathematics.",
        "japanese": "既存の数学を学び教えることと、新しい数学を創造することの間には、重大な違いがある。",
        "point": "前置詞 between の目的語として learning, teaching, creating という3つの「動名詞」が並列で使われています。-ing が名詞の役割を果たしていることを見抜く力が問われます。",
        "source": "京都大"
      }
    ]
  },
  {
    "id": "theme-10",
    "theme_number": "10",
    "title": "過去分詞の識別で英文が読める",
    "points": [
      "過去分詞を見たら、受動態、完了形、名詞修飾、分詞構文のいずれかを識別します。"
    ],
    "quiz": {
      "question": "過去分詞が名詞の直後に置かれてカタマリをつくっている場合、その役割は何ですか？",
      "options": [
        "名詞を修飾する形容詞句",
        "分詞構文",
        "完了形"
      ],
      "answer": 0,
      "explanation": "名詞の直後に置かれた過去分詞は「〜された(名詞)」というように、前の名詞を後ろから修飾する形容詞句の役割を果たします。"
    },
    "examples": [
      {
        "english": "Nothing will be gained by just waiting.",
        "japanese": "待っているだけでは、何も手に入らないだろう。",
        "point": "be動詞＋過去分詞で受動態をつくっています。"
      },
      {
        "english": "Compared with that company, our company gives longer holidays.",
        "japanese": "その会社と比べると、私たちの会社はより長い休日をくれる。",
        "point": "[p.p. ~, SV.]の型にあてはまるため、過去分詞による分詞構文です。"
      }
    ],
    "advanced": [
      {
        "english": "Although the responses to it may differ, concern about the changes brought on by technology continues.",
        "japanese": "それに対する反応は異なるかもしれないが、テクノロジーによってもたらされる変化への懸念は続いている。",
        "point": "brought on by technology が過去分詞から始まる形容詞句であり、直前の名詞 the changes を修飾しています。動詞の過去形と見間違えないことが重要です。",
        "source": "不明"
      }
    ]
  },
  {
    "id": "theme-11",
    "theme_number": "11",
    "title": "that の識別で英文が読める①・②",
    "points": [
      "thatの後ろが不完全文なら「関係代名詞」、完全文なら「同格のthat」または「名詞節（S・O・Cになる）」です。",
      "so ~ thatやnow thatなどの決まった表現も識別します。"
    ],
    "quiz": {
      "question": "「The fact that he wrote his essay is obvious.」の文で、thatの後ろは完全文です。このthatの役割は何ですか？",
      "options": [
        "関係代名詞",
        "同格のthat（接続詞）",
        "結果の副詞節"
      ],
      "answer": 1,
      "explanation": "後ろが完全文で、直前にfactやnewsなどの中身を説明すべき名詞がある場合、それは「〜という事実」を表す同格のthatです。"
    },
    "examples": [
      {
        "english": "Who that knows her can believe the story?",
        "japanese": "彼女を知る人のうちのだれが、その話を信じられるだろうか。",
        "point": "thatの後ろがSの欠けた不完全文なので関係代名詞です。"
      },
      {
        "english": "Now that he has a child, he has to work harder.",
        "japanese": "いまや彼には子どもがいるので、もっと一生懸命働かなければならない。",
        "point": "now that（いまや〜なので）が因果関係の副詞節をつくります。"
      }
    ],
    "advanced": [
      {
        "english": "Our belief that these ideas about birth and death are real creates a powerful illusion that causes us a great deal of suffering.",
        "japanese": "生と死に関するこれらの考えが現実であるという私たちの信念は、私たちに多大な苦しみをもたらす強力な幻想を生み出す。",
        "point": "最初の that は完全文を導く「同格のthat（〜という信念）」で、2つ目の that は後ろが causes と動詞から始まる不完全文であるため「関係代名詞のthat」です。2種類の識別が同時に問われます。",
        "source": "お茶の水女子大"
      }
    ]
  },
  {
    "id": "theme-12",
    "theme_number": "12",
    "title": "it の識別で英文が読める",
    "points": [
      "形式主語（うしろのthat節やto不定詞を指す）、形式目的語、訳さないit（状況・時・天候など）を識別します。"
    ],
    "quiz": {
      "question": "「It seems that he is not suitable for the task.」の It はどのように訳すべきですか？",
      "options": [
        "それは",
        "その状況は",
        "基本的に訳さない"
      ],
      "answer": 2,
      "explanation": "It seems that ~（〜のように思える）などで使われる it は、漠然とした状況を示す it であり、日本語には訳出しません。"
    },
    "examples": [
      {
        "english": "It is important that you understand her feelings.",
        "japanese": "あなたが彼女の感情を理解することが、重要だ。",
        "point": "Itは形式主語で、うしろのthat節を指します。"
      },
      {
        "english": "You should not take it for granted that I will help you.",
        "japanese": "私があなたを助けることを当然と思ってはいけない。",
        "point": "take it for granted that ~（〜を当然と思う）の形式目的語です。"
      }
    ],
    "advanced": [
      {
        "english": "Most social scientists take it for granted that a person's clothing expresses meaning.",
        "japanese": "ほとんどの社会科学者は、人の服装が意味を表現することを当然のことと考えている。",
        "point": "take it for granted that... の熟語表現において、it が後ろの that 節を受ける「形式目的語」として働いている構造を見抜く必要があります。",
        "source": "九州大"
      }
    ]
  },
  {
    "id": "theme-13",
    "theme_number": "13",
    "title": "as の識別で英文が読める",
    "points": [
      "asの後ろが名詞1語なら「前置詞」、SVが続くなら「接続詞（時、比例、理由、様態など）」です。"
    ],
    "quiz": {
      "question": "as の後ろに「名詞1語」だけが続く場合、この as は品詞として何として働き、主にどう訳しますか？",
      "options": [
        "接続詞（〜なので）",
        "前置詞（〜として / 〜なとき）",
        "副詞（同じくらい）"
      ],
      "answer": 1,
      "explanation": "後ろに名詞のみが続く as は前置詞であり、イコールの性質を持って「〜として」や「〜のころ（なとき）」と訳します。"
    },
    "examples": [
      {
        "english": "He worked as president of the company.",
        "japanese": "彼はその会社の社長として働いた。",
        "point": "後ろに名詞（president）があるため、前置詞「〜として」です。"
      },
      {
        "english": "As it grew darker, it became colder.",
        "japanese": "暗くなるにつれて、寒くなった。",
        "point": "接続詞「比例（〜につれて）」の用法で、比較級とセットでよく使われます。"
      }
    ],
    "advanced": [
      {
        "english": "As these languages become more powerful, their use as tools of business and culture increases.",
        "japanese": "これらの言語がより強力になるにつれて、ビジネスや文化の道具としてのそれらの使用は増加する。",
        "point": "最初の As はSVを伴うので「比例（〜するにつれて）」の接続詞、後半の as tools の as は名詞が続くため「〜として」の前置詞です。一つの文の中で as の使い分けが問われています。",
        "source": "佐賀大"
      }
    ]
  },
  {
    "id": "theme-14",
    "theme_number": "14",
    "title": "接続詞で英文が読める",
    "points": [
      "接続詞（and/but/or）を見たら、後ろの形を確認し、前で同じ形（並列構造）を探します。",
      "3つ以上の並列は「A, B, and C」の形をとります。"
    ],
    "quiz": {
      "question": "A, B, Cの3つ以上の要素を並列につなぐ場合、英語で最も正しい書き方はどれですか？",
      "options": [
        "A and B and C",
        "A, B, and C",
        "A, B, C"
      ],
      "answer": 1,
      "explanation": "英語では3つ以上を並列させる場合、最後の接続詞以外はカンマ(,)で代用し、「A, B, and(or) C」の形をとります。"
    },
    "examples": [
      {
        "english": "This poses a threat to agriculture and the food chain, and to human health.",
        "japanese": "このことは、農業と食物連鎖への脅威と、人間の健康への脅威を提示している。",
        "point": "最初のandはagricultureとthe food chainを、2つ目のandは2つのtoを伴う前置詞句を繋いでいます。"
      },
      {
        "english": "In Africa there are many people who do not have enough food, clothing or shelter.",
        "japanese": "アフリカでは、十分な衣食住をもてない多くの人がいる。",
        "point": "orを用いて、3つの名詞（food, clothing, shelter）を繋いでいます。"
      }
    ],
    "advanced": [
      {
        "english": "Being interested gives the people you are talking to the feeling that they are important and that you care about them.",
        "japanese": "興味を持つことは、あなたが話している人たちに、彼らが重要であり、あなたが彼らを気にかけているという感覚を与える。",
        "point": "and の後ろの形 that you care... に着目し、前にある同格の that they are important との並列構造であることを発見し、両方の節が the feeling の中身を説明していると捉える力が試されます。",
        "source": "山形大"
      }
    ]
  },
  {
    "id": "theme-15",
    "theme_number": "15",
    "title": "倒置で英文が読める①・②",
    "points": [
      "文型倒置にはMVSとCVSがあります。",
      "強制倒置は、否定の副詞が文頭に出ると疑問文の語順になります。",
      "nor/soの倒置や、仮定法if節の省略による倒置もあります。"
    ],
    "quiz": {
      "question": "LittleやNeverなどの「否定の副詞」が文頭に出た場合（強制倒置）、後ろに続く文の語順はどうなりますか？",
      "options": [
        "疑問文の語順になる",
        "SとVが入れ替わるだけ",
        "語順は変わらない"
      ],
      "answer": 0,
      "explanation": "否定語が文頭に出る強制倒置では、後ろの文は（MVSではなく）「did I dream」や「have I seen」のように疑問文の語順になります。"
    },
    "examples": [
      {
        "english": "Little did I dream that I met you in such a place.",
        "japanese": "私はそんな場所であなたに会うとは、夢にも思わなかった。",
        "point": "否定の副詞Littleが文頭に出て、後ろが疑問文の語順になる強制倒置です。"
      },
      {
        "english": "Had it not been for water, we could not have lived.",
        "japanese": "水がなかったら、私たちは生きていけなかっただろう。",
        "point": "仮定法のif省略による倒置です（If it had not been → Had it not been）。"
      }
    ],
    "advanced": [
      {
        "english": "From separate signs emerged a more comprehensible and personal perception.",
        "japanese": "別々の兆候から、より理解しやすく個人的な認識が現れた。",
        "point": "From separate signs という前置詞句(M)が文頭に出たことで、後ろが動詞(V) emerged 、その後に長い主語(S)が続く「MVS」の文型倒置が発生しています。",
        "source": "滋賀県立医科大"
      }
    ]
  },
  {
    "id": "theme-16",
    "theme_number": "16",
    "title": "省略で英文が読める",
    "points": [
      "主節と同じSとbe動詞の省略、比較表現での共通要素の省略、接続詞thatの省略などがあります。",
      "不定詞句の代わりにto 1語だけを残す代不定詞も頻出です。"
    ],
    "quiz": {
      "question": "「when」や「while」などの接続詞の後ろでよく省略されるのは、どのような組み合わせですか？",
      "options": [
        "動詞と目的語",
        "主節と同じ主語(S)とbe動詞",
        "前置詞とその目的語"
      ],
      "answer": 1,
      "explanation": "When (I was) young のように、主節と同じ主語とbe動詞は、接続詞の後ろで頻繁に省略されます。"
    },
    "examples": [
      {
        "english": "When young, I was very interested in Japanese movies.",
        "japanese": "若いころ、私は日本映画にとても興味があった。",
        "point": "接続詞Whenの後ろで、主節と同じ主語とbe動詞（I was）が省略されています。"
      },
      {
        "english": "The boy opened the window, although his mother told him not to.",
        "japanese": "彼の母はやらないように言ったが、その少年は窓を開けた。",
        "point": "toの後ろの繰り返し部分（open the window）が省略される、代不定詞の用法です。"
      }
    ],
    "advanced": [
      {
        "english": "When creating a video game, game designers feel it is important to keep within the limits of the computer's own power.",
        "japanese": "ビデオゲームを制作する際、ゲームデザイナーはコンピューター自体の能力の限界内に収めることが重要だと感じている。",
        "point": "接続詞 When の後ろに (they are) という主節（game designers）と同じ主語とbe動詞の省略が起きており、現在分詞の creating に直結しています。",
        "source": "青山学院大"
      }
    ]
  },
  {
    "id": "theme-17",
    "theme_number": "17",
    "title": "強調構文で英文が読める",
    "points": [
      "It is A that ~ のAに「副詞・副詞節」「前置詞句」が入る場合は強調構文です。",
      "Aに「名詞」が入りかつthat以下が不完全文の場合も強調構文です。"
    ],
    "quiz": {
      "question": "It is A that ~ の A の部分に「副詞」や「前置詞句」が入っている場合、この文の構造は形式主語構文と強調構文のどちらだと確定しますか？",
      "options": [
        "形式主語構文",
        "強調構文"
      ],
      "answer": 1,
      "explanation": "Aの部分に副詞や前置詞句がきたら、それは間違いなく強調構文です（形式主語構文のAには形容詞や名詞が来ます）。"
    },
    "examples": [
      {
        "english": "It was not until yesterday that I knew the news.",
        "japanese": "昨日まで、私はそのニュースを知らなかった。（昨日になってはじめて、私はそのニュースを知った）。",
        "point": "not untilの頻出表現を用いた強調構文です。"
      },
      {
        "english": "It was my mother that told me to do housework.",
        "japanese": "私に家事をやるように言ったのは、私の母だった。",
        "point": "Aに名詞（my mother）が入り、that以下が主語の欠けた不完全文になっている強調構文です。"
      }
    ],
    "advanced": [
      {
        "english": "It is only when they are about eighteen months old that they understand that they are being reflected in the mirror.",
        "japanese": "彼らが鏡に映っているのだと理解するのは、生後約18ヶ月になってからである。",
        "point": "It is A that... のAの部分に、only when ~ という長い副詞節が入り込んで強調されています。構造を的確に把握しないと訳にブレが生じてしまう問題です。",
        "source": "関西大"
      }
    ]
  },
  {
    "id": "theme-18",
    "theme_number": "18",
    "title": "呼応で英文が読める",
    "points": [
      "bothを見たらand、notやnot onlyを見たらbut (also)、eitherを見たらor、neitherを見たらnorを予測します。",
      "呼応は、前の単語にうしろの単語が引き合う表現です。"
    ],
    "quiz": {
      "question": "文中で「not only A」という表現を見たら、後ろに何が続くと予測して読むべきですか？",
      "options": [
        "and (also) B",
        "but (also) B",
        "or B"
      ],
      "answer": 1,
      "explanation": "not only A を見たら、自動的に but (also) B（AだけでなくBも）が来ると予測して呼応関係を見抜きます。"
    },
    "examples": [
      {
        "english": "The question is not whether we will die, but how we will live.",
        "japanese": "問題は私たちが死ぬかどうかではなくて、どう生きるかだ。",
        "point": "not A but B（AではなくてB）の呼応です。"
      },
      {
        "english": "They had neither met the author nor read any of his books.",
        "japanese": "その人たちは、その作者に会ったこともないし、その作者の本を1冊も読んだことがなかった。",
        "point": "neither A nor B（AもBもどちらもない）の呼応です。"
      }
    ],
    "advanced": [
      {
        "english": "What matters is not just the number of years of education people get, but its content.",
        "japanese": "重要なのは、人々が受ける教育の年数だけでなく、その内容である。",
        "point": "not just A but B という、not only A but B の変形表現が使われています。",
        "source": "名古屋市立大"
      }
    ]
  },
  {
    "id": "theme-19",
    "theme_number": "19",
    "title": "ネクサスで英文が読める",
    "points": [
      "第5文型のOとC、準動詞のSと準動詞（不定詞/動名詞/分詞構文）、付帯のwithのOとCに、隠れた主語・述語の関係（ネクサス）を見抜きます。"
    ],
    "quiz": {
      "question": "第5文型（SVOC）における O と C の間には、どのような関係（ネクサス）が隠れていますか？",
      "options": [
        "修飾・被修飾の関係",
        "主語・述語（S-V）の関係",
        "動詞・目的語（V-O）の関係"
      ],
      "answer": 1,
      "explanation": "例えば see her mother enter なら、her mother と enter の間に「母親が、入る」という主語・述語のネクサス関係があります。"
    },
    "examples": [
      {
        "english": "She saw her mother enter the neighbor's house.",
        "japanese": "彼女は、母親が隣人の家に入るのを見た。",
        "point": "see O C の文型で、her mother と enter の間に「母親が入る」というネクサス関係があります。"
      }
    ],
    "advanced": [
      {
        "english": "The large white area in human eyes makes it easy for us to see the direction of other people's gaze.",
        "japanese": "人間の目の白い部分が大きいことで、私たちは他人の視線の方向を容易に見ることができる。",
        "point": "for us と to see の間に、意味上の主語と述語のネクサス関係があります。",
        "source": "福島県立医科大"
      }
    ]
  },
  {
    "id": "theme-20",
    "theme_number": "20",
    "title": "挿入で英文が読める",
    "points": [
      "挿入は文の途中でカンマを2つ使って補足説明を入れる文体です。",
      "いったん挿入部分を読みとばして、文の骨格（SV）を把握するのがコツです。"
    ],
    "quiz": {
      "question": "文の途中にカンマ( , )ではさまれた挿入部分がある場合、まずどのように読んで骨格を把握するべきですか？",
      "options": [
        "挿入部分を最も重視して訳す",
        "いったん挿入部分を読みとばして、主語と動詞(SV)を見つける",
        "前の文から順に区切って訳す"
      ],
      "answer": 1,
      "explanation": "挿入による混乱を避けるため、カンマとカンマの間はいったんとばし、文の骨格であるSとVを先につなげるのが鉄則です。"
    },
    "examples": [
      {
        "english": "This statue, made in the 1600s, is the oldest around here.",
        "japanese": "この像は1600年代につくられて、このあたりで最も古いものだ。",
        "point": "made in the 1600s が分詞構文の挿入です。This statue is... と骨格を捉えます。"
      }
    ],
    "advanced": [
      {
        "english": "What makes them successful, given the basic ability to succeed, is that they are in jobs that are good matches to their styles of thinking.",
        "japanese": "彼らを成功させるものは、成功するための基本的な能力があるとして、彼らの思考スタイルにぴったり合った仕事に就いているということである。",
        "point": "主語(What makes them successful)と動詞(is)の間に、過去分詞(given)から始まる挿入句が挟まれています。",
        "source": "青山学院大"
      }
    ]
  },
  {
    "id": "theme-21",
    "theme_number": "21",
    "title": "比較で英文が読める①",
    "points": [
      "比較は「何と何を比べているか」を意識します。",
      "as-asの原級、-er thanの比較級、the -estの最上級の3つの世界を把握します。"
    ],
    "quiz": {
      "question": "比較の文を読む際に、構造を理解するために最も意識すべきポイントは何ですか？",
      "options": [
        "何と何を比べているか",
        "形容詞か副詞か",
        "文の時制"
      ],
      "answer": 0,
      "explanation": "比較表現（as~asや-er than）を見たら、主語と何が比較対象になっているのか（例：実際と見た目）を把握することが一番重要です。"
    },
    "examples": [
      {
        "english": "Mrs. Ryan is not as young as she looks.",
        "japanese": "ライアンさんは、見た目ほど若くはない。",
        "point": "「実際の若さ(is)」と「見た目の若さ(looks)」を比較しています。"
      }
    ],
    "advanced": [
      {
        "english": "People walk faster in wealthy cities like Tokyo and Toronto than they do in cities like Nairobi and Jakarta.",
        "japanese": "人々は、ナイロビやジャカルタのような都市よりも、東京やトロントのような裕福な都市においてより速く歩く。",
        "point": "wealthy cities と cities like Nairobi... における歩く速度を比較しています。",
        "source": "東北大"
      }
    ]
  },
  {
    "id": "theme-21-2",
    "theme_number": "21-2",
    "title": "比較で英文が読める②",
    "points": [
      "not so much A as B は「AというよりむしろB」を意味します。",
      "no more A than B は「Bと同様にAではない」という両者否定です。",
      "The + 比較級 ~, the + 比較級 ... は「〜すればするほどますます…」を表します。"
    ],
    "quiz": {
      "question": "「not so much A as B」が意味するものは次のうちどれですか？",
      "options": [
        "AとBは同じくらいだ",
        "BというよりむしろAだ",
        "AというよりむしろBだ"
      ],
      "answer": 2,
      "explanation": "直訳の「BほどAではない」から転じて、「AというよりむしろBだ」という意味で頻繁に使われる重要構文です。"
    },
    "examples": [
      {
        "english": "He is not so much a singer as a poet.",
        "japanese": "彼は歌手というよりむしろ詩人だ。",
        "point": "not so much A as B の構文です。"
      },
      {
        "english": "The more books you read, the more you'll know.",
        "japanese": "本を多く読めば読むほど、それだけ物知りになる。",
        "point": "The 比較級, the 比較級 の構文です。後半の the は「それだけ」という指示副詞です。"
      }
    ],
    "advanced": [
      {
        "english": "We do not so much believe what we see as see what we believe.",
        "japanese": "私たちは、自分が見ているものを信じるというよりはむしろ、自分が信じているものを見ているのだ。",
        "point": "not so much A as B を用いて、believe what we see (A) と see what we believe (B) を比較しています。",
        "source": "弘前大"
      }
    ]
  },
  {
    "id": "theme-22",
    "theme_number": "22",
    "title": "複合関係詞で英文が読める",
    "points": [
      "whoever, whatever, whichever, whenever, wherever, however の「たとえ〜でも」という譲歩の意味をしっかりおさえます。"
    ],
    "quiz": {
      "question": "whoever や however などの「-ever」がつく複合関係詞が持つ、共通のニュアンスは何ですか？",
      "options": [
        "必ず〜する",
        "たとえ〜でも（譲歩）",
        "なぜなら〜だから"
      ],
      "answer": 1,
      "explanation": "複合関係詞は名詞節や副詞節をつくりますが、根本に「たとえ誰が/何が/どんなに〜でも」という譲歩のニュアンスを持っています。"
    },
    "examples": [
      {
        "english": "Whoever visits that country will love it.",
        "japanese": "たとえだれがその国を訪れても、大好きになるだろう。",
        "point": "Whoever が名詞節をつくり、文の主語になっています。"
      },
      {
        "english": "However busy he is, he finds time for his friends.",
        "japanese": "たとえどれほど忙しくても、彼は友人のための時間を見つけ出す。",
        "point": "However が形容詞 busy を伴って副詞節をつくっています。"
      }
    ],
    "advanced": [
      {
        "english": "However much of all this you know, you did not find it out by observation.",
        "japanese": "このすべてについてあなたがどれほど多くを知っていようとも、あなたはそれを観察によって見つけ出したわけではない。",
        "point": "However much の譲歩の副詞節が文頭に置かれています。",
        "source": "三重大"
      }
    ]
  },
  {
    "id": "theme-23",
    "theme_number": "23",
    "title": "第4文型で英文が読める",
    "points": [
      "第4文型（SVO1O2）をとる動詞には「与える」系(give/tell/show)、「してあげる」系(buy/make)、「奪う」系(take/cost/save)の3種類があります。"
    ],
    "quiz": {
      "question": "第4文型（SVO1O2）の動詞が共通して持つ大きな意味の方向性はどれですか？",
      "options": [
        "状態の維持・変化",
        "与える・してあげる・奪う",
        "感覚・思考"
      ],
      "answer": 1,
      "explanation": "第4文型は基本的にO1（人）にO2（モノ・情報）を「与える」か、あるいは「奪う（省く）」という意味合いを持ちます。"
    },
    "examples": [
      {
        "english": "He gave his sister a postcard and a stamp.",
        "japanese": "彼は妹にポストカードと切手をあげた。",
        "point": "give O1 O2（O1にO2を与える）の「与える」系です。"
      },
      {
        "english": "It cost me fifty hundred dollars to buy the car.",
        "japanese": "私がその車を買うのに、5000ドルかかった。",
        "point": "cost O1 O2（O1からO2のお金を奪う）の「奪う」系です。"
      }
    ],
    "advanced": [
      {
        "english": "Common sense tells us that all of us would notice such a big change in the outcome of a choice.",
        "japanese": "常識は私たちに、選択の結果におけるそのような大きな変化に私たちは皆気づくだろうと教えている。",
        "point": "tell O1 O2（that節）の第4文型で、us(O1)にthat節(O2)という情報を与えています。",
        "source": "京都大"
      }
    ]
  },
  {
    "id": "theme-24",
    "theme_number": "24",
    "title": "第5文型で英文が読める",
    "points": [
      "第5文型（SVOC）のCには、①V原形（使役動詞/知覚動詞/help）、②-ing・過去分詞（keep/leave/get）、③形容詞・名詞（認識系/命名系）がきます。"
    ],
    "quiz": {
      "question": "使役動詞（make, let, have）や知覚動詞（see, hearなど）が第5文型（SVOC）をつくるとき、C（補語）には何がきますか？",
      "options": [
        "to不定詞",
        "動詞の原形",
        "前置詞句"
      ],
      "answer": 1,
      "explanation": "使役動詞や知覚動詞の大きな特徴は、C（補語）にtoを伴わない「動詞の原形（原形不定詞）」をとることです。"
    },
    "examples": [
      {
        "english": "My brother made me clean his room.",
        "japanese": "私の兄は、私に彼の部屋を掃除させた。",
        "point": "make O C（V原形）の使役動詞です。"
      },
      {
        "english": "I found San Francisco very cool.",
        "japanese": "私はサンフランシスコをとても涼しいと思った。",
        "point": "find O C（形容詞）の認識系です。"
      }
    ],
    "advanced": [
      {
        "english": "I smile and keep quiet, running the risk of letting her think that I agree with her.",
        "japanese": "彼女が私に同意していると思わせるリスクを冒しながら、私は微笑んで黙っている。",
        "point": "let her think（使役動詞 let O C）の構造が組み込まれています。",
        "source": "東京大"
      }
    ]
  },
  {
    "id": "theme-25",
    "theme_number": "25",
    "title": "SVO to do 型で英文が読める",
    "points": [
      "SVO to do 型をとる動詞には「伝達」系（tell/advise）、「因果」系（enable/cause）、「認識」系（expect/want）があります。"
    ],
    "quiz": {
      "question": "tell O to do や expect O to do のように、「S V O to do」型をとる動詞の主なニュアンスはどれですか？",
      "options": [
        "伝達・因果・認識",
        "所有・帰属",
        "感覚・知覚"
      ],
      "answer": 0,
      "explanation": "「Oに〜するよう伝える」「Oが〜するのを可能にする（因果）」「Oが〜すると思う（認識・期待）」の3系統がメインです。"
    },
    "examples": [
      {
        "english": "He told me to wait in the room.",
        "japanese": "彼は、私にその部屋で待つように言った。",
        "point": "tell O to do の「伝達」系の動詞です。"
      },
      {
        "english": "Her help will enable me to do the job sooner.",
        "japanese": "彼女の助けのおかげで、私はその仕事をより早くこなせるだろう。",
        "point": "enable O to do の「因果」系の動詞です。"
      }
    ],
    "advanced": [
      {
        "english": "She appealed to doctors in the USA to encourage parents to read to their young children.",
        "japanese": "彼女はアメリカの医師たちに、幼い子どもたちに本を読んであげるよう親に勧めることを心から願った。",
        "point": "encourage O to do（親に〜するよう勧める）という構造が含まれています。",
        "source": "信州大"
      }
    ]
  },
  {
    "id": "theme-26",
    "theme_number": "26",
    "title": "SVA from B型で英文が読める",
    "points": [
      "「分離」系（prevent/keep/stop）や「区別」系（distinguish/know/tell）の動詞は A from B の型をとり、fromがAとBを切り離すイメージを持ちます。"
    ],
    "quiz": {
      "question": "prevent A from -ing などの型において、前置詞 from が根本的に持つイメージは何ですか？",
      "options": [
        "AとBを接近・結合させる",
        "AとBを分離・区別する",
        "AからBへと状態を変化させる"
      ],
      "answer": 1,
      "explanation": "fromは起点・分離を表すため、「Aが〜する状態から引き離す＝妨げる」や「AをBから切り離して考える＝区別する」という意味につながります。"
    },
    "examples": [
      {
        "english": "Living in the city prevents people from becoming rich.",
        "japanese": "その町に住んでいるせいで、人びとは裕福になれない。",
        "point": "prevent A from -ing（Aが〜するのを妨げる）の分離系です。"
      },
      {
        "english": "Children can't distinguish good from evil.",
        "japanese": "子どもたちは、善悪を区別できない。",
        "point": "distinguish A from B（AをBと区別する）の区別系です。"
      }
    ],
    "advanced": [
      {
        "english": "Later in childhood, no doubt, they learn to distinguish fiction from fact.",
        "japanese": "幼少期の後半には、間違いなく、彼らはフィクションと事実を区別することを学ぶ。",
        "point": "distinguish A(fiction) from B(fact) の構造が使われています。",
        "source": "上智大/改"
      }
    ]
  },
  {
    "id": "theme-27",
    "theme_number": "27",
    "title": "SVA of B型で英文が読める",
    "points": [
      "「伝達」系（inform/remind/convince）は「AにBを伝える」、「略奪」系（rob/deprive/cure/relieve）は「AからBを奪う/取り除く」という意味になります。"
    ],
    "quiz": {
      "question": "rob A of B や inform A of B の型において、前置詞 of の後ろの B に置かれるものは何ですか？",
      "options": [
        "奪われる人・伝えられる人",
        "奪うモノ・伝える内容",
        "手段・道具"
      ],
      "answer": 1,
      "explanation": "Aには「人」が入り、of B の B には「関連」を表す対象物（奪うお金や自由、伝える情報など）が入ります。"
    },
    "examples": [
      {
        "english": "The police informed us of the traffic accident.",
        "japanese": "警察は私たちにその交通事故を知らせてくれた。",
        "point": "inform A of B（AにBを知らせる）の伝達系です。"
      },
      {
        "english": "They robbed her of her money on her way home.",
        "japanese": "その人たちは、彼女が家へ帰る途中に彼女からお金を奪った。",
        "point": "rob A of B（AからBを奪う）の略奪系です。"
      }
    ],
    "advanced": [
      {
        "english": "The appointment of another doctor to help me has relieved me of a lot of work.",
        "japanese": "私を助けるための別の医師の任命により、私は多くの仕事から解放された。",
        "point": "relieve A of B（AからBを取り除く）の構造が使われています。",
        "source": "大阪産業大/改"
      }
    ]
  },
  {
    "id": "theme-28",
    "theme_number": "28",
    "title": "SVA with B型で英文が読める",
    "points": [
      "「与える」系（provide/present/supply）は「AにBを与える」、「つなぐ」系（associate/combine/compare）は「AをBと結びつける」という意味になります。"
    ],
    "quiz": {
      "question": "provide A with B などの型において、前置詞 with が根本的に持つイメージは何ですか？",
      "options": [
        "所有・付帯（〜をもって）",
        "方向（〜へ）",
        "理由（〜のために）"
      ],
      "answer": 0,
      "explanation": "withは「一緒にある＝持っている状態」にするため、「AがBを持っている状態にする＝AにBを与える」や「AとBを一緒に考える＝結びつける」となります。"
    },
    "examples": [
      {
        "english": "Parents should provide their children with decent clothing.",
        "japanese": "両親は子どもたちに、きちんとした服を与えるべきだ。",
        "point": "provide A with B（AにBを与える）の型です。withは「所有」を表します。"
      },
      {
        "english": "Doctors associate smoking with lung cancer.",
        "japanese": "医師たちは喫煙を肺がんと関連づける。",
        "point": "associate A with B（AをBと関連づける）の型です。"
      }
    ],
    "advanced": [
      {
        "english": "Modern parents provide their children with far too many passive amusements, such as shows and good things to eat.",
        "japanese": "現代の親は子どもたちに、ショーや美味しい食べ物のような、あまりにも多くの受動的な娯楽を与えている。",
        "point": "provide A(their children) with B(far too many...) の構文です。",
        "source": "青山学院大"
      }
    ]
  },
  {
    "id": "theme-29",
    "theme_number": "29",
    "title": "SVA for B型で英文が読める",
    "points": [
      "「理由」系（thank/apologize/blame/praise）と「交換」系（exchange/take/substitute）の動詞は A for B の型をとります。"
    ],
    "quiz": {
      "question": "thank A for B や exchange A for B の型において、前置詞 for が根本的に持つイメージは何ですか？",
      "options": [
        "方向・到達",
        "分離・区別",
        "理由・交換（〜の代償として）"
      ],
      "answer": 2,
      "explanation": "for には「向かっていく方向」の他に、「価値の交換（〜と引き換えに）」や「理由（〜の対価として）」を表す強いイメージがあります。"
    },
    "examples": [
      {
        "english": "He thanked me for helping him across the road.",
        "japanese": "彼は私に、道を横断するのを手伝ったことで感謝した。",
        "point": "thank A for B（AにBの理由で感謝する）の「理由」系です。"
      },
      {
        "english": "I would like to exchange yen for dollars.",
        "japanese": "私は円をドルと交換したい。",
        "point": "exchange A for B（AをBと交換する）の「交換」系です。"
      }
    ],
    "advanced": [
      {
        "english": "It's important to praise children for the little steps they take toward their goals.",
        "japanese": "子どもたちが目標に向かって踏み出す小さな歩みに対して、彼らを褒めることが重要である。",
        "point": "praise A for B（AをBの理由で褒める）の構文です。",
        "source": "中央大"
      }
    ]
  },
  {
    "id": "theme-30",
    "theme_number": "30",
    "title": "SVA as B型で英文が読める",
    "points": [
      "「A=B」系（regard/think of/look on）と「S=B」系（strike/replace）の動詞は A as B の型をとります。"
    ],
    "quiz": {
      "question": "regard A as B などの型において、as が表す A と B の関係は何ですか？",
      "options": [
        "A ＞ B",
        "A ≠ B",
        "A ＝ B（イコール）"
      ],
      "answer": 2,
      "explanation": "前置詞の as には「〜として」という役割があり、A as B は「A＝B」とみなす、考える、という同格の働きをします。"
    },
    "examples": [
      {
        "english": "Americans do not regard Coca-Cola only as a drink.",
        "japanese": "アメリカ人は、コカコーラを単なる飲み物とはみなしていない。",
        "point": "regard A as B（AをBとみなす）の型です。A=Bの関係が成立します。"
      },
      {
        "english": "The jokes didn't strike me as being very funny.",
        "japanese": "その冗談は、私にはあまりおもしろい印象を与えなかった。",
        "point": "strike A as B（AにBという印象を与える）の型です。S=Bの関係になります。"
      }
    ],
    "advanced": [
      {
        "english": "Many students think of learning as something that just happens when they read a text over and over again.",
        "japanese": "多くの学生は、学習をテキストを何度も繰り返し読んだときにただ起こるものだとみなしている。",
        "point": "think of A as B（AをBとみなす）の構文が使われています。",
        "source": "宮城教育大"
      }
    ]
  },
  {
    "id": "theme-31",
    "theme_number": "31",
    "title": "SVA to B 型で英文が読める",
    "points": [
      "「方向」系（apply/attach/expose）、「oneself」系（adapt/adjust/devote）、「因果」系（attribute/owe）の動詞は A to B の型をとります。"
    ],
    "quiz": {
      "question": "apply A to B や owe A to B などの型において、前置詞 to が根本的に持つイメージは何ですか？",
      "options": [
        "方向・到達（矢印の先）",
        "分離・起点",
        "交換・理由"
      ],
      "answer": 0,
      "explanation": "to は「矢印（➔）」のイメージです。AをBに適用する(方向)、Aという結果はBへ行き着く(因果)など、すべて「方向・到達」で理解できます。"
    },
    "examples": [
      {
        "english": "It is necessary to apply Information Technology to education.",
        "japanese": "ITを教育に応用することは必要だ。",
        "point": "apply A to B（AをBに応用する）の方向系です。"
      },
      {
        "english": "I owe what I am to my grandmother.",
        "japanese": "いまの私があるのは、祖母のおかげだ。",
        "point": "owe A to B（AはBのおかげだ）の因果系です。"
      }
    ],
    "advanced": [
      {
        "english": "Babies attach the word 'mama' to their own mother and not to just any woman.",
        "japanese": "赤ちゃんは「ママ」という言葉を、ただのどんな女性にでもなく、自分自身の母親に結びつける。",
        "point": "attach A to B（AをBに取りつける/結びつける）の構文です。",
        "source": "滋賀大"
      }
    ]
  },
  {
    "id": "theme-32",
    "theme_number": "32",
    "title": "SVA into B 型で英文が読める",
    "points": [
      "「Bに-ing」系（talk/persuade）と「Bに名詞」系（change/turn/put/translate）の動詞は A into B の型をとり、「AがBに変化する」イメージを持ちます。"
    ],
    "quiz": {
      "question": "turn A into B や translate A into B などの型において、前置詞 into が根本的に持つイメージは何ですか？",
      "options": [
        "所有・付帯",
        "変化（AがBの中に入り込んで変わる）",
        "理由・原因"
      ],
      "answer": 1,
      "explanation": "into は「中に入り込む」ことから、「状態が完全に変わってしまう＝変化」を表す際によく使われます。"
    },
    "examples": [
      {
        "english": "I talked my father into buying me a camera.",
        "japanese": "私は父を説得して、カメラを買ってもらった。",
        "point": "talk A into -ing（Aを説得して〜させる）の型です。"
      },
      {
        "english": "The trees turn carbon dioxide into clean air.",
        "japanese": "木は二酸化炭素をきれいな空気に変化させる。",
        "point": "turn A into B（AをBに変化させる）の型です。"
      }
    ],
    "advanced": [
      {
        "english": "Her novels are well known all over the world and have been translated into a number of languages, including French and Chinese.",
        "japanese": "彼女の小説は世界中でよく知られており、フランス語や中国語を含む多くの言語に翻訳されている。",
        "point": "translate A into B（AをBに翻訳する）の受動態の構文です。",
        "source": "福島大"
      }
    ]
  },
  {
    "id": "theme-33",
    "theme_number": "33",
    "title": "受動態で英文が読める",
    "points": [
      "日本語に訳しにくい受動態は、「能動態で訳す」か「能動態になおして考える」ことで自然な意味をつかみます。"
    ],
    "quiz": {
      "question": "「れる・られる」で直訳すると日本語として不自然になる受動態の文は、どのように考えて訳すのがコツですか？",
      "options": [
        "文脈を無視して意訳する",
        "能動態になおして（主語と目的語を入れ替えて）考える",
        "すべて「〜してもらう」と訳す"
      ],
      "answer": 1,
      "explanation": "受動態のSは能動態のOです。「〜された」でおかしい場合は、「誰々が〜を…する」と元の能動態の構造に戻して考えると自然な訳が作れます。"
    },
    "examples": [
      {
        "english": "The special book can be bought by anyone.",
        "japanese": "だれでも、その特別な本を買うことができる。",
        "point": "「買われる」ではなく「だれでも買える」と能動態で訳します。"
      },
      {
        "english": "She was robbed of her ring last night.",
        "japanese": "彼女は昨晩、指輪を奪われた。",
        "point": "rob A of B の受動態として意味を捉えます。"
      }
    ],
    "advanced": [
      {
        "english": "Those people who do not require help will not be made to feel unfairly treated by high levels of taxation.",
        "japanese": "助けを必要としない人々は、高水準の課税によって不当に扱われていると感じさせられることはないだろう。",
        "point": "make O C（OにCと感じさせる）の使役動詞の受動態です。",
        "source": "東京大"
      }
    ]
  }
];
