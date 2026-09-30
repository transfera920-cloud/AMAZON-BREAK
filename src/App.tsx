import React, { useState } from 'react';
import {
  Compass,
  ShieldCheck,
  Users,
  Radio,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Layers,
  MapPin,
  Mountain,
  UserCheck,
  RefreshCw,
  Info,
  Check,
  PhoneCall,
  GitBranch,
  SlidersHorizontal,
  BookmarkCheck,
  Timer,
  BookOpen,
} from 'lucide-react';

// The 9 chapters for navigation and content structure
const CHAPTERS = [
  { id: 'sec-01', num: '01', title: '核心管理哲學', subtitle: '管理才是目的' },
  { id: 'sec-02', num: '02', title: '避免失控分散', subtitle: '危險源於失去管理' },
  { id: 'sec-03', num: '03', title: '綁在一起的風險', subtitle: '強制同速的連鎖隱患' },
  { id: 'sec-04', num: '04', title: '可控分流效益', subtitle: '化解等待與摸黑危機' },
  { id: 'sec-05', num: '05', title: '十大管理要素', subtitle: '隊伍分開管理不斷' },
  { id: 'sec-06', num: '06', title: '雙層安全架構', subtitle: '山上決策與山下留守' },
  { id: 'sec-07', num: '07', title: '郡大西南稜案例', subtitle: '支線管理與安全會合' },
  { id: 'sec-08', num: '08', title: '現場思考模擬器', subtitle: '動態可控性評估' },
  { id: 'sec-09', num: '09', title: '分流前確認清單', subtitle: '執行前思考自檢' },
];

export default function App() {
  const [activeChapter, setActiveChapter] = useState('sec-01');

  // Interactive state for Dual-layer view
  const [dualView, setDualView] = useState<'mountain' | 'base'>('mountain');

  // Interactive state for Decision Simulator
  const [simCadres, setSimCadres] = useState<'sufficient' | 'insufficient'>('sufficient');
  const [simRoute, setSimRoute] = useState<'branch' | 'complex'>('branch');
  const [simComms, setSimComms] = useState<'reliable' | 'blind'>('reliable');
  const [simTimeWindow, setSimTimeWindow] = useState<'ample' | 'tight'>('ample');

  // Interactive Checklist states
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    lead: true,
    sweep: true,
    purpose: true,
    route: false,
    rendezvous: false,
    comms: false,
    abort: false,
    time: false,
    external: false,
    structure: false,
  });

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;

  const scrollToChapter = (id: string) => {
    setActiveChapter(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* 2. 頁首（Header）：只留品牌，整塊是 <a href="https://amazon-hike.com/" title="亞馬遜國家山岳協會 首頁"> */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <a
            href="https://amazon-hike.com/"
            title="亞馬遜國家山岳協會 首頁"
            className="text-lg font-bold text-slate-100 hover:text-amber-400 transition inline-block"
          >
            亞馬遜國家山岳協會
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 pt-12 pb-14 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium mb-6">
            <Compass className="w-4 h-4 text-amber-400" />
            登山領隊管理教案
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            拆隊不是目的，<br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
              管理才是目的。
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            本教案真正要教的是「隊伍管理」，而不是建立一套固定且適用所有高山環境的拆隊標準。
            真正需要避免的不是拆隊，而是<strong className="text-amber-300 font-semibold">失去管理</strong>。
          </p>

          {/* Hero 資訊卡：依規範只保留三項：適用對象 領隊 / 副領隊 / 嚮導｜章節數 9 章｜教學時數 90 分鐘 */}
          <div className="max-w-2xl mx-auto bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-800 text-center">
              <div className="py-2 sm:py-0 px-3">
                <div className="text-xs text-slate-400 mb-1 flex items-center justify-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-amber-400" /> 適用對象
                </div>
                <div className="text-sm font-bold text-white">領隊 / 副領隊 / 嚮導</div>
              </div>
              <div className="py-2 sm:py-0 px-3">
                <div className="text-xs text-slate-400 mb-1 flex items-center justify-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" /> 章節數
                </div>
                <div className="text-sm font-bold text-white">9 章</div>
              </div>
              <div className="py-2 sm:py-0 px-3">
                <div className="text-xs text-slate-400 mb-1 flex items-center justify-center gap-1.5">
                  <Timer className="w-3.5 h-3.5 text-amber-400" /> 教學時數
                </div>
                <div className="text-sm font-bold text-white">90 分鐘</div>
              </div>
            </div>
          </div>

          {/* Three Preserved Essential Statements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div className="bg-slate-800/80 border border-amber-500/30 rounded-xl p-5 shadow-lg relative overflow-hidden group hover:border-amber-500/50 transition">
              <div className="text-amber-400 text-xs font-mono font-bold mb-2 flex items-center gap-1.5">
                <BookmarkCheck className="w-4 h-4 text-amber-400" /> 核心原則 01
              </div>
              <p className="text-slate-100 font-semibold text-base leading-snug">
                「拆隊不是目的，管理才是目的。」
              </p>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                拆隊本身不是危險來源；失去組織架構與聯絡控制，才是意外的起因。
              </p>
            </div>

            <div className="bg-slate-800/80 border border-amber-500/30 rounded-xl p-5 shadow-lg relative overflow-hidden group hover:border-amber-500/50 transition">
              <div className="text-amber-400 text-xs font-mono font-bold mb-2 flex items-center gap-1.5">
                <BookmarkCheck className="w-4 h-4 text-amber-400" /> 核心原則 02
              </div>
              <p className="text-slate-100 font-semibold text-base leading-snug">
                「安全不是所有人永遠走在一起，而是每個人都在可控制範圍內。」
              </p>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                全員強行同速可能衍生集體失溫與摸黑風險；可控才是安全的實質。
              </p>
            </div>

            <div className="bg-slate-800/80 border border-amber-500/30 rounded-xl p-5 shadow-lg relative overflow-hidden group hover:border-amber-500/50 transition">
              <div className="text-amber-400 text-xs font-mono font-bold mb-2 flex items-center gap-1.5">
                <BookmarkCheck className="w-4 h-4 text-amber-400" /> 核心原則 03
              </div>
              <p className="text-slate-100 font-semibold text-base leading-snug">
                「避免的是失控分散，而不是所有形式的隊伍分流。」
              </p>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                只要管理結構完整、責任明確、回報暢通，分流能帶來更佳的行程彈性。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 章節導覽（01～09）保留在 Hero 下方的 <nav aria-label="章節導覽"> */}
      <nav aria-label="章節導覽" className="border-b border-slate-800 bg-slate-900/95 sticky top-[65px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
            <span className="text-xs font-semibold text-slate-400 shrink-0 mr-1 hidden md:inline">
              章節導覽：
            </span>
            {CHAPTERS.map((chap) => (
              <button
                key={chap.id}
                onClick={() => scrollToChapter(chap.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition flex items-center gap-1.5 ${
                  activeChapter === chap.id
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800 bg-slate-950/60 border border-slate-800'
                }`}
              >
                <span className="font-mono opacity-80">{chap.num}</span>
                <span>{chap.title}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Chapters Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">

        {/* Chapter 01: 核心管理哲學 */}
        <section id="sec-01" className="scroll-mt-32">
          <div className="flex items-center gap-2.5 mb-2 text-amber-400 text-xs sm:text-sm font-semibold tracking-wider font-mono">
            <span>01</span>
            <span>/</span>
            <span>核心管理哲學</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            拆隊不是目的，管理才是目的
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-base font-bold text-amber-400 flex items-center gap-2 mb-3">
                <Compass className="w-4 h-4" /> 登山領隊的核心任務
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                本章真正要教的是「隊伍管理」，而不是建立一套固定且適用所有高山環境的拆隊標準。
              </p>
              <div className="space-y-3 text-xs text-slate-400 leading-relaxed">
                <p>
                  登山活動面對千變萬化的地理環境、天候動態與隊員身心素質，不存在任何放之四海皆準的機械化拆隊公式。
                </p>
                <p>
                  真正優秀的領隊，不是僵化執行某份固定標準，而是具備敏銳的<strong>情境洞察與動態管理能力</strong>。
                </p>
              </div>
            </div>

            <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-6 bg-gradient-to-b from-amber-500/5 to-transparent">
              <h3 className="text-base font-bold text-amber-300 flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-4 h-4" /> 領隊教案的思維基準
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed mb-4">
                避免把教材寫成搜救 SOP 或軍事行軍守則，回歸領隊管理的本質思考：
              </p>
              <ul className="text-xs text-slate-300 space-y-2.5">
                <li className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
                  <strong className="text-white">判斷優先於公式：</strong>
                  不以固定的時間或距離數字代替領隊對現場風險的直接評估。
                </li>
                <li className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
                  <strong className="text-white">可控優先於形式：</strong>
                  隊伍形式是集中還是分流，取決於現場哪種架構更能維持安全掌控。
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Chapter 02: 避免失控分散 */}
        <section id="sec-02" className="scroll-mt-32">
          <div className="flex items-center gap-2.5 mb-2 text-amber-400 text-xs sm:text-sm font-semibold tracking-wider font-mono">
            <span>02</span>
            <span>/</span>
            <span>避免失控分散</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            真正需要避免的不是拆隊，而是失去管理
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
            拆隊本身不是危險來源。登山史上多數隊伍分散引發的事故，其本質都是「失去了管理結構」，而非分流這個動作本身。
          </p>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              隊伍可以分開，但管理不能斷
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              失控的分散是指：隊員各自因體能落差擅自脫隊、前後無幹部照應、彼此不知道對方位置、無約定集合時間與通聯方式。
              而<strong className="text-amber-300">受控的分流</strong>則是：領隊主動規劃、幹部分工明確、目標路徑清晰、會合點確立的組織化管理調度。
            </p>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center gap-3">
              <Info className="w-5 h-5 text-amber-400 shrink-0" />
              <span>
                <strong>領隊準則：</strong>只要分流後的每一個小隊都能維持完整的管理結構，分流本身就是一種提升隊伍整體安全的管理手段。
              </span>
            </div>
          </div>
        </section>

        {/* Chapter 03: 綁在一起的風險 */}
        <section id="sec-03" className="scroll-mt-32">
          <div className="flex items-center gap-2.5 mb-2 text-amber-400 text-xs sm:text-sm font-semibold tracking-wider font-mono">
            <span>03</span>
            <span>/</span>
            <span>綁在一起的風險</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            「全隊走在一起」不等於「管理一定比較好」
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
            當隊伍能力出現巨大落差時，若領隊不顧實際狀況強行要求所有人綁死同速，往往會引發嚴重的連鎖隱患：
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2.5">
              <div className="text-rose-400 font-bold text-sm flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" /> 快隊：長時間等待與失溫
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                快隊在風口稜線或低溫潮濕處頻繁原地等待，體溫迅速散失，行進節奏反覆被打斷，隊員容易焦躁甚至私自脫序。
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2.5">
              <div className="text-rose-400 font-bold text-sm flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" /> 慢隊：追趕壓力與體能透支
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                慢隊隊員因害怕耽誤大家，往往在休息不足的狀況下倉促趕路，心肺與肌肉高度負荷，步伐動作變形，大幅提升跌倒滑墜風險。
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2.5">
              <div className="text-rose-400 font-bold text-sm flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" /> 全隊：時程嚴重拖長致摸黑
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                行進效率低落拖長整體在途時間，將全隊暴露於午後天候驟變或夜間摸黑的危險情境中，將局部問題演變為全隊系統性危機。
              </p>
            </div>
          </div>
        </section>

        {/* Chapter 04: 可控分流效益 */}
        <section id="sec-04" className="scroll-mt-32">
          <div className="flex items-center gap-2.5 mb-2 text-amber-400 text-xs sm:text-sm font-semibold tracking-wider font-mono">
            <span>04</span>
            <span>/</span>
            <span>可控分流效益</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            什麼時候拆隊，反而可能比全部綁在一起更容易管理？
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
            在具備足夠幹部照應與路線明確的前提下，受控分流能夠各取所長，讓全隊重回可控步調：
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-emerald-900/40 space-y-3">
              <div className="text-emerald-400 font-bold text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> 各自維持合理步頻與身心節奏
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                快隊依正常步伐行進，準時抵達預定點或營地整頓水源、準備熱食與營務；慢隊在幹部妥善照料下以平穩步調推進，獲得必要的休息調節。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-emerald-900/40 space-y-3">
              <div className="text-emerald-400 font-bold text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> 化解時間壓力，確保隊伍都在可控範圍
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                雙方依約定時程在節點會合。領隊的核心判斷標準始終是：<strong className="text-amber-300">「這支隊伍當前的管理結構，哪一種方式比較可控？」</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Chapter 05: 十大管理要素 */}
        <section id="sec-05" className="scroll-mt-32">
          <div className="flex items-center gap-2.5 mb-2 text-amber-400 text-xs sm:text-sm font-semibold tracking-wider font-mono">
            <span>05</span>
            <span>/</span>
            <span>十大管理要素</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            真正需要管理的十項要素
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            「隊伍可以分開，但管理不能斷。」領隊決定分流時，必須針對下列十個面向落實掌握：
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                num: '01',
                title: '誰帶隊',
                desc: '各分流隊伍必須指派明確的前嚮，負責路線判斷、路條識別與前方路況觀察。',
                icon: UserCheck,
              },
              {
                num: '02',
                title: '誰押隊',
                desc: '各隊尾端必須由具備獨立照顧與處置能力的幹部押後，確保無人落單。',
                icon: Users,
              },
              {
                num: '03',
                title: '每一隊去了哪裡',
                desc: '各組的目標方向、所走稜線、腰繞或鞍部路徑，必須在事前讓所有幹部充分掌握。',
                icon: MapPin,
              },
              {
                num: '04',
                title: '為什麼分流',
                desc: '具備明確實質的管理目的（如支線登頂與主線留守、能力差異配速），絕非任性分散。',
                icon: Compass,
              },
              {
                num: '05',
                title: '什麼時候會合',
                desc: '確立明確無爭議的集合點與約定會合時間，並保留合理時間緩衝。',
                icon: Clock,
              },
              {
                num: '06',
                title: '如何聯絡',
                desc: '確立通聯方式與備援方案（如無線電、衛星通訊、行動訊號點或約定中繼點）。',
                icon: Radio,
              },
              {
                num: '07',
                title: '什麼情況停止分流',
                desc: '明確約定終止分流與折返條件（如天候轉壞、逾時未達目標、隊員突發傷病）。',
                icon: AlertTriangle,
              },
              {
                num: '08',
                title: '誰掌握時間',
                desc: '各組指定幹部專責看錶，定期檢視預估進度落差，嚴格控制停留時長。',
                icon: Clock,
              },
              {
                num: '09',
                title: '誰負責對外通報',
                desc: '確立對山下留守人的統一回報窗口，避免多頭或缺漏回報導致後方誤判。',
                icon: PhoneCall,
              },
              {
                num: '10',
                title: '是否維持完整的管理結構',
                desc: '分流後的各隊均維持健全的照應幹部體系，不放任無自主能力者孤立盲走。',
                icon: ShieldCheck,
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 hover:border-amber-500/40 transition flex items-start gap-4"
              >
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-amber-400 font-bold px-1.5 py-0.5 rounded bg-amber-500/10">
                      {item.num}
                    </span>
                    <h3 className="font-semibold text-slate-100 text-sm">{item.title}</h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Chapter 06: 雙層安全架構 */}
        <section id="sec-06" className="scroll-mt-32">
          <div className="flex items-center gap-2.5 mb-2 text-amber-400 text-xs sm:text-sm font-semibold tracking-wider font-mono">
            <span>06</span>
            <span>/</span>
            <span>雙層安全架構</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            留守制度：山上決策與山下留守
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            雙層安全架構是分流管理不可或缺的外部保障。
            <strong className="text-amber-300">留守人不是讓隊伍隨意拆散的藉口</strong>，而是讓分流後的隊伍背後始終存在另一層穩固的外部管理。
          </p>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
            <div className="flex border-b border-slate-800 bg-slate-950/60 p-2 gap-2">
              <button
                onClick={() => setDualView('mountain')}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition ${
                  dualView === 'mountain'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <Mountain className="w-4 h-4" />
                第一層：山上現場管理（領隊 / 副領隊現場決策）
              </button>
              <button
                onClick={() => setDualView('base')}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition ${
                  dualView === 'base'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <Radio className="w-4 h-4" />
                第二層：山下後方留守（留守人掌握時間軸與外部管理）
              </button>
            </div>

            <div className="p-6">
              {dualView === 'mountain' ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                    <UserCheck className="w-4 h-4" /> 山上幹部職責
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="font-semibold text-white text-xs mb-1.5">1. 掌握隊況</div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        即時評估隊員步伐協調、體力消長與天候變化，動態調整步頻。
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="font-semibold text-white text-xs mb-1.5">2. 現場行止決策</div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        根據現地狀況決定是否分流、會合節點與終止分流條件。
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="font-semibold text-white text-xs mb-1.5">3. 定點回報留守</div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        在約定節點或有通訊處，主動向山下留守人回報分流進度與位置。
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                    <Clock className="w-4 h-4" /> 山下留守人職責
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="font-semibold text-white text-xs mb-1.5">1. 掌握時間軸</div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        手握客觀行程時間軸，接收山上回報並比對進度是否有重大滯後。
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="font-semibold text-white text-xs mb-1.5">2. 判斷逾時異常</div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        確認各組是否順利會合；若逾時且失聯，依應變機制評估是否異常。
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="font-semibold text-white text-xs mb-1.5">3. 啟動外部通報</div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        在確定異常無法排除時，第一時間代表隊伍對外通報與協調搜救。
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Chapter 07: 郡大西南稜案例 */}
        <section id="sec-07" className="scroll-mt-32">
          <div className="flex items-center gap-2.5 mb-2 text-amber-400 text-xs sm:text-sm font-semibold tracking-wider font-mono">
            <span>07</span>
            <span>/</span>
            <span>郡大西南稜案例</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            郡大西南稜＋郡大山支線管理實踐
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            以典型支線山徑為例：說明分流如何降低無謂等待，而管理結構如何確保全員安全可控。
          </p>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="space-y-3">
              <div className="text-amber-400 font-bold text-base">
                情境：主線行進與支線登頂
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                隊伍行進於郡大西南稜主線。郡大山在此處屬於單點往返的支線：
              </p>
              <div className="text-xs text-slate-300 space-y-1.5 pl-4 border-l-2 border-amber-500/50">
                <p>• <strong>已有完成經驗之隊員：</strong>先前已登頂過郡大山，沒有必要為了其他人再次前往受累，希望維持主線休息或整備。</p>
                <p>• <strong>希望完成之隊員：</strong>強烈希望完成郡大山登頂。</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-amber-400 font-mono text-xs font-bold mb-1">01 分流決策</div>
                <div className="text-xs text-slate-300 leading-relaxed">
                  不前往者維持主線，前往者輕裝分流，消除快慢隊彼此拖累。
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-amber-400 font-mono text-xs font-bold mb-1">02 指定幹部</div>
                <div className="text-xs text-slate-300 leading-relaxed">
                  兩隊各自指派清楚的帶隊與押隊人員，維持獨立管理體系。
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-amber-400 font-mono text-xs font-bold mb-1">03 約定會合</div>
                <div className="text-xs text-slate-300 leading-relaxed">
                  明確約定會合點（岔路口）、預計往返時間與通聯方式。
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-amber-400 font-mono text-xs font-bold mb-1">04 安全重組</div>
                <div className="text-xs text-slate-300 leading-relaxed">
                  準時重新會合，清點人數，恢復全隊架構繼續推進。
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm leading-relaxed">
              <strong>案例核心啟示：</strong>
              本案例的核心不是固定的拆隊 SOP，而是證明「分流可以有效降低無謂的等待；而<strong>嚴謹的管理結構</strong>讓分流始終處於領隊可控範圍內。」
            </div>
          </div>
        </section>

        {/* Chapter 08: 現場思考模擬器 */}
        <section id="sec-08" className="scroll-mt-32">
          <div className="flex items-center gap-2.5 mb-2 text-amber-400 text-xs sm:text-sm font-semibold tracking-wider font-mono">
            <span>08</span>
            <span>/</span>
            <span>現場思考模擬器</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            分流可控性動態思維演練
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            「如果不能管理，就不要拆；如果可以管理，分流本身不必然代表風險增加。」
            嘗試切換現場條件，檢視當前管理結構是否具備可控性：
          </p>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  1. 現場幹部照應能力
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={() => setSimCadres('sufficient')}
                    className={`py-2 px-2 rounded-lg border font-medium transition ${
                      simCadres === 'sufficient'
                        ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                        : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-white'
                    }`}
                  >
                    幹部充足 (各配領/押)
                  </button>
                  <button
                    onClick={() => setSimCadres('insufficient')}
                    className={`py-2 px-2 rounded-lg border font-medium transition ${
                      simCadres === 'insufficient'
                        ? 'bg-rose-500 text-white border-rose-400 font-bold'
                        : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-white'
                    }`}
                  >
                    僅單一幹部 (無副手)
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  2. 路線與集合點特徵
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={() => setSimRoute('branch')}
                    className={`py-2 px-2 rounded-lg border font-medium transition ${
                      simRoute === 'branch'
                        ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                        : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-white'
                    }`}
                  >
                    明確支線/單一路徑
                  </button>
                  <button
                    onClick={() => setSimRoute('complex')}
                    className={`py-2 px-2 rounded-lg border font-medium transition ${
                      simRoute === 'complex'
                        ? 'bg-rose-500 text-white border-rose-400 font-bold'
                        : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-white'
                    }`}
                  >
                    路徑紛雜/迷途高風險
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  3. 相互通聯與回報條件
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={() => setSimComms('reliable')}
                    className={`py-2 px-2 rounded-lg border font-medium transition ${
                      simComms === 'reliable'
                        ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                        : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-white'
                    }`}
                  >
                    約定暢通/有備援
                  </button>
                  <button
                    onClick={() => setSimComms('blind')}
                    className={`py-2 px-2 rounded-lg border font-medium transition ${
                      simComms === 'blind'
                        ? 'bg-rose-500 text-white border-rose-400 font-bold'
                        : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-white'
                    }`}
                  >
                    通聯盲區/無定點約定
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  4. 時間餘裕與天候窗口
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={() => setSimTimeWindow('ample')}
                    className={`py-2 px-2 rounded-lg border font-medium transition ${
                      simTimeWindow === 'ample'
                        ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                        : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-white'
                    }`}
                  >
                    充足時間/天候穩定
                  </button>
                  <button
                    onClick={() => setSimTimeWindow('tight')}
                    className={`py-2 px-2 rounded-lg border font-medium transition ${
                      simTimeWindow === 'tight'
                        ? 'bg-rose-500 text-white border-rose-400 font-bold'
                        : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-white'
                    }`}
                  >
                    逼近日落/惡化逼近
                  </button>
                </div>
              </div>
            </div>

            {(() => {
              const isManageable =
                simCadres === 'sufficient' &&
                simRoute === 'branch' &&
                simComms === 'reliable' &&
                simTimeWindow === 'ample';

              return (
                <div
                  className={`p-6 rounded-2xl border transition-all ${
                    isManageable
                      ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                      : 'bg-rose-950/30 border-rose-500/40 text-rose-200'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl shrink-0 ${
                        isManageable
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                      }`}
                    >
                      {isManageable ? (
                        <CheckCircle2 className="w-6 h-6" />
                      ) : (
                        <AlertTriangle className="w-6 h-6" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                        {isManageable
                          ? '條件具備：具完整管理結構，分流具備高可控性'
                          : '不可拆隊：管理結構不完整，嚴禁拆散隊伍！'}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {isManageable
                          ? '分流各組具備獨立帶隊與押隊能力，目標與會合點明確，時間充裕。此時分流能有效化解能力差異之拉扯，提升全體安全。'
                          : '現場存在重大管理盲點（幹部不足、路線紛雜、通聯不明或時間緊迫）。此時分流屬於失控分散，全隊應維持一體並及時修正行程。'}
                      </p>
                      <button
                        onClick={() => {
                          setSimCadres('sufficient');
                          setSimRoute('branch');
                          setSimComms('reliable');
                          setSimTimeWindow('ample');
                        }}
                        className="flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-medium"
                      >
                        <RefreshCw className="w-3.5 h-3.5" /> 重設理想條件
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>

        {/* Chapter 09: 分流前確認清單 */}
        <section id="sec-09" className="scroll-mt-32">
          <div className="flex items-center gap-2.5 mb-2 text-amber-400 text-xs sm:text-sm font-semibold tracking-wider font-mono">
            <span>09</span>
            <span>/</span>
            <span>分流前確認清單</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            分流執行前思考與確認項目
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            本清單呈現為「分流執行前思考與確認項目」，供領隊出發或分流前作為<strong>思維自檢引導</strong>，而非所有登山活動都必須遵守的固定法規或硬性法條。
          </p>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="text-xs sm:text-sm text-slate-300">
                思考確認進度：
                <span className="font-mono font-bold text-amber-400 ml-1">
                  {completedCount} / 10
                </span>
              </div>
              <div className="w-36 sm:w-48 bg-slate-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-amber-500 h-full transition-all duration-300"
                  style={{ width: `${(completedCount / 10) * 100}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {[
                {
                  id: 'lead',
                  title: '1. 誰帶隊？',
                  detail: '各分流組別已指派具路徑判定能力之前嚮。',
                },
                {
                  id: 'sweep',
                  title: '2. 誰押隊？',
                  detail: '各分流組別末端已安排穩健幹部，絕無人員落單。',
                },
                {
                  id: 'purpose',
                  title: '3. 為什麼分流？',
                  detail: '分流具備合理的隊伍管理目標（如支線登頂與主線休整）。',
                },
                {
                  id: 'route',
                  title: '4. 每一隊去了哪裡？',
                  detail: '雙方幹部皆完全清楚彼此的預定行進路徑與節點。',
                },
                {
                  id: 'rendezvous',
                  title: '5. 什麼時候會合？',
                  detail: '已約定不可混淆之集合點與預估會合時間。',
                },
                {
                  id: 'comms',
                  title: '6. 如何聯絡？',
                  detail: '雙方已確認通訊方式或約定失聯時之中繼確認方案。',
                },
                {
                  id: 'abort',
                  title: '7. 什麼情況停止分流？',
                  detail: '已約定中止分流條件（如天候轉壞、傷病或逾時折返點）。',
                },
                {
                  id: 'time',
                  title: '8. 誰掌握時間？',
                  detail: '各組幹部皆指定專人看管時程與配速，嚴格控制停留時長。',
                },
                {
                  id: 'external',
                  title: '9. 誰負責對外通報？',
                  detail: '已確認與山下留守人的對接窗口，避免多頭通報。',
                },
                {
                  id: 'structure',
                  title: '10. 管理結構是否完整？',
                  detail: '分流後兩邊隊伍皆為健全獨立體系，無人無照應。',
                },
              ].map((chk) => (
                <div
                  key={chk.id}
                  onClick={() => toggleCheck(chk.id)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition flex items-start gap-3 select-none ${
                    checkedItems[chk.id]
                      ? 'bg-amber-500/10 border-amber-500/40 text-slate-200'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition ${
                      checkedItems[chk.id]
                        ? 'bg-amber-500 border-amber-400 text-slate-950 font-bold'
                        : 'border-slate-700 bg-slate-900'
                    }`}
                  >
                    {checkedItems[chk.id] && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <div>
                    <div className="font-semibold text-xs sm:text-sm text-slate-200 mb-0.5">
                      {chk.title}
                    </div>
                    <div className="text-xs text-slate-400 leading-relaxed">{chk.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 leading-relaxed">
              💡 <strong>思維引導：</strong>
              本清單是為了幫助領隊建立全盤管理的思維習慣。若在出發或分流前，有任何一項心中懸念或無法掌握，領隊即應暫緩分流，維持一體行動。
            </div>
          </div>
        </section>

      </main>

      {/* 3. 頁尾（Footer）：只留品牌，整塊是 <a href="https://amazon-hike.com/"> */}
      {/* 4. 連結規則：站內連結，不加 rel="nofollow"，不用 target="_blank"，文字為「亞馬遜國家山岳協會」 */}
      <footer className="border-t border-slate-800 bg-slate-950 py-8 px-4 text-center">
        <a
          href="https://amazon-hike.com/"
          className="text-sm font-semibold text-slate-400 hover:text-amber-400 transition inline-block"
        >
          亞馬遜國家山岳協會
        </a>
      </footer>
    </div>
  );
}
