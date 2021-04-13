class Japanese < ActiveHash::Base
  self.data = [
    { id: 1, name: '①～(の後)に続く②<指示・方針など>に従う' },
    { id: 2, name: '～を考慮する' },
    { id: 3, name: '増える；～を増やす' },
    { id: 4, name: '～を予期する' },
    { id: 5, name: '～することを決意する' },
    { id: 6, name: '発達する；～を発達させる' },
    { id: 7, name: '～を供給する，与える' },
    { id: 8, name: '続く；(～を)続ける' },
    { id: 9, name: '～を含む，含める' },
    { id: 10, name: '（ある状態の）ままでいる' },
    { id: 11, name: '～に着く；～に達する' },
    { id: 12, name: '～を許可する' },
    { id: 13, name: '～を強制する' },
    { id: 14, name: '～を申し出る' },
    { id: 15, name: '～を悟る' },
    { id: 16, name: '①～と提案する②～をほのめかす' },
    { id: 17, name: '～を必要とする' },
    { id: 18, name: '心配する' },
    { id: 19, name: '～かと疑問に思う' },
    { id: 20, name: '<費用>を要する' },
    { id: 21, name: 'Vする傾向がある，Vしがちである' },
    { id: 22, name: 'Aに依存する，Aしだいで決まる' },
    { id: 23, name: '～を分け合う，共有する' },
    { id: 24, name: '～を要求する' },
    { id: 25, name: '①～を支持する②<家族など>を養う③～を立証する' },
    { id: 26, name: '～を雇う' },
    { id: 27, name: 'AをBだと思う，みなす' },
    { id: 28, name: 'AがBに基づいている' },
    { id: 29, name: '～を向上させる' },
    { id: 30, name: '～を認める' },
    { id: 31, name: '～に気づく' },
    { id: 32, name: '～だと思う' },
    { id: 33, name: '①～を上げる②～を育てる③<問題など>を提起する／賃上げ' },
    { id: 34, name: '～をより好む' },
    { id: 35, name: 'を励ます' },
    { id: 36, name: '<苦痛・損害など>を経験する，受ける；(病気などで)苦しむ' },
    { id: 37, name: '～を描写する，～の特徴を説明する' },
    { id: 38, name: '～をさまたげる' },
    { id: 39, name: '①～を減らす②ＡをＢにする' },
    { id: 40, name: '～を誤解する，まちがえる' },
    { id: 41, name: '(～の)準備をする' },
    { id: 42, name: '<人を>はげます' },
    { id: 43, name: '①～だとわかる②～を証明する' },
    { id: 44, name: '～をあつかう' },
    { id: 45, name: '～を設立する，創立する' },
    { id: 46, name: '関係がある' },
    { id: 47, name: '①～を比較する②～をたとえる' },
    { id: 48, name: '～を広げる；広がる' },
    { id: 49, name: 'Aを指示する' },
    { id: 50, name: '～を供給する' },
    { id: 51, name: '～を得る' },
    { id: 52, name: '～を破壊する' },
    { id: 53, name: '①当てはまる②申し込む' },
    { id: 54, name: '～を求める' },
    { id: 55, name: 'Aを捜す' },
    { id: 56, name: '①～と主張する②～を(当然の権利として)要求する' },
    { id: 57, name: '①～を引っぱる②<図・絵>を(線で)描く' },
    { id: 58, name: '<申し出など>を断る' },
    { id: 59, name: 'Aに返答する' },
    { id: 60, name: '～について述べる' },
    { id: 61, name: '～を判断する' },
    { id: 62, name: '①(～に)接近する②<問題など>に取り組む／方法' },
    { id: 63, name: '➀<自分に不利・不快なこと>を認める②<人>の入場[入学]を許可する' },
    { id: 64, name: '①～を反映する，反射する②Aについてよく考える' },
    { id: 65, name: '～を行う，～を遂行する' },
    { id: 66, name: '<人>をうんざりさせる' },
    { id: 67, name: '生き残る' },
    { id: 68, name: '～を表す' },
    { id: 69, name: '～と主張する' },
    { id: 70, name: '①～を認める②～を与える' },
    { id: 71, name: '～を指し示す' },
    { id: 72, name: '所属している' },
    { id: 73, name: '<言語，技術など>を習得する' },
    { id: 74, name: '返事をする' },
    { id: 75, name: '～にエサをやる，～を養う' },
    { id: 76, name: '逃げる' },
    { id: 77, name: '～に取って代わる，～を取り替える' },
    { id: 78, name: '～を明らかにする' },
    { id: 79, name: '～を取り囲む' },
    { id: 80, name: '～に合う' },
    { id: 81, name: '<数量>を推定する' },
    { id: 82, name: 'Aをねらう' },
    { id: 83, name: '<金>をもうける，かせぐ' },
    { id: 84, name: '①衰退する，低下する②～を辞退する' },
    { id: 85, name: '～をする[持つ]余裕がある' },
    { id: 86, name: '①<人>を当惑させる②～を混同する' },
    { id: 87, name: 'Aを卒業する' },
    { id: 88, name: '変わる，さまざまである' },
    { id: 89, name: '～を移す，取り去る' },
    { id: 90, name: '～と(強く)主張する，言い張る' },
    { id: 91, name: '～を調査する' },
    { id: 92, name: 'AにBのことを思い出させる' },
    { id: 93, name: '①Aに貢献する；Aの一因となる②AをBに寄付する' },
    { id: 94, name: '<人>に警告する' },
    { id: 95, name: '～をつなぐ' },
    { id: 96, name: '①～に匹敵する②～に調和する' },
    { id: 97, name: '焦点を合わせる' },
    { id: 98, name: '<提案など>を断る' },
    { id: 99, name: '<人>を納得させる，確信させる' },
    { id: 100, name: 'AをBに関連づける，AからBを連想する' }
  ]
end