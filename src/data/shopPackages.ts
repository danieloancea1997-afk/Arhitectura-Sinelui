export type PackageSection = {
  title: string
  items: string[]
}

export type PackageItem = {
  id: string
  category: 'psihologie' | 'somatic' | 'fitness'
  title: string
  meta: string
  bookingUrl: string
  description: string[]
  sections?: PackageSection[]
  notes?: string[]
}

export const packages: PackageItem[] = [
  {
    id: 'discovery-call',
    category: 'psihologie',
    title: 'Discovery Call Gratuit (Apel de Cunoaștere)',
    meta: '30 minute @ Gratuit',
    bookingUrl: 'https://l.bttr.to/eldnZ',
    description: [
      'O discuție scurtă și directă pentru a vedea dacă rezonăm și care dintre pilonii Arhitectura Sinelui - Psihologie, Fitness sau Somatic - este cel mai potrivit pentru obiectivele tale actuale. Nu este o sesiune de consiliere propriu-zisă, ci o etapă de clarificare a direcției tale de evoluție.',
    ],
  },
  {
    id: 'consiliere-psihologica',
    category: 'psihologie',
    title: 'Consiliere Psihologică',
    meta: '50 minute @ 199.00 lei',
    bookingUrl: 'https://l.bttr.to/5Fx8y',
    description: [
      'Această sesiune de consiliere reprezintă primul pas în procesul de proiectare și reconstrucție a echilibrului tău interior. Într-un spațiu sigur și confidențial, vom explora împreună mecanismele care îți guvernează gândurile și emoțiile, identificând fundația pe care vom clădi noua ta stare de bine.',
    ],
    sections: [
      {
        title: 'Ce vom aborda în cadrul sesiunii:',
        items: [
          'Explorarea Arhitecturii Interioare: Identificarea tiparelor de gândire și a blocajelor care te împiedică să evoluezi.',
          'Autoreglare și Claritate: Tehnici pentru gestionarea stresului, anxietății sau a dificultăților de adaptare.',
          'Aliniere: Corelarea nevoilor tale emoționale cu realitatea cotidiană pentru a crea o structură de viață autentică și rezilientă.',
        ],
      },
    ],
    notes: [
      'Fie că ne întâlnim online sau la cabinetul din Arad, scopul nostru este să transformăm introspecția în acțiune concretă. Aceasta este mai mult decât o discuție; este începutul unui proiect dedicat celei mai importante construcții: propriul tău Sine.',
    ],
  },
  {
    id: 'consultanta-evaluare',
    category: 'somatic',
    title: 'Sesiune de Consultanță și Evaluare Inițială: Proiectează-ți Schimbarea',
    meta: '50 minute @ 89.00 lei',
    bookingUrl: 'https://l.bttr.to/zDbJM',
    description: [
      'Această sesiune de 50 de minute reprezintă primul punct de contact cu ecosistemul Arhitectura Sinelui. Este spațiul în care transformăm incertitudinea în claritate și obiectivele vagi în planuri de acțiune concrete.',
    ],
    sections: [
      {
        title: 'Ce urmărim în cadrul acestei consultanțe:',
        items: [
          'Analiza Situației Actuale: Evaluăm starea ta de bine, nivelul de fitness sau echilibrul emoțional, în funcție de nevoia ta principală.',
          'Identificarea Blocajelor: Depistăm punctele de presiune care te împiedică să progresezi în acest moment.',
          'Schițarea Strategiei: Stabilim dacă ai nevoie de un program structurat de fitness, de un ghid de nutriție sau de suport psihologic prin consiliere.',
        ],
      },
      {
        title: 'Pentru cine este această sesiune:',
        items: [
          'Pentru cei care nu știu exact de unde să înceapă procesul de transformare.',
          'Pentru cei care doresc o a doua opinie profesională asupra rutinei lor actuale.',
          'Pentru oricine dorește să vadă dacă abordarea mea integrativă (minte-corp) rezonează cu stilul lor.',
        ],
      },
    ],
    notes: [
      'Locație: Online (confortul casei tale) sau Fizic (Arad - Cabinet/XOX Gym).',
      'Rezultat: La finalul discuției, vei pleca cu o viziune clară asupra pașilor următori și cu o recomandare personalizată pentru unul dintre programele Arhitectura Sinelui.',
    ],
  },
  {
    id: 'somatic-alignment',
    category: 'somatic',
    title: 'Sesiune Somatic Alignment',
    meta: '1 oră 30 minute @ 400.00 lei',
    bookingUrl: 'https://l.bttr.to/RX9NP',
    description: [
      'Somatic Alignment este o metodă de lucru corporal care vizează restabilirea echilibrului dintre minte și corp prin intervenții directe asupra sistemului nervos și a tensiunilor musculare cronice. Spre deosebire de terapia prin vorbire, această sesiune se concentrează pe limbajul corpului tău, abordând stresul și trauma acolo unde ele sunt stocate fizic.',
    ],
    sections: [
      {
        title: 'Ce urmărim:',
        items: [
          'Identificarea zonelor de blocaj.',
          'Eliberarea tensiunii acumulate.',
          'Recalibrarea răspunsului sistemului nervos la stres.',
        ],
      },
    ],
    notes: [
      'Locație: Această sesiune se desfășoară exclusiv fizic la cabinetul din B-dul Revoluției 29, Arad.',
      'Ideal pentru: Persoane care resimt burnout, tensiuni fizice persistente care nu cedează la masaj clasic sau stări de anxietate care se manifestă puternic în corp.',
    ],
  },
  {
    id: 'abonament-4x',
    category: 'psihologie',
    title: 'Abonament 4x Consiliere Psihologică',
    meta: '4 ședințe @ 699.00 lei',
    bookingUrl: 'https://l.bttr.to/FBsrB',
    description: [
      'Acest abonament este conceput pentru cei care doresc să treacă de la o simplă explorare la un proces real de reconstrucție interioară. Patru sesiuni oferă timpul și spațiul necesar pentru ca schimbările să prindă rădăcini, permițându-ne să lucrăm așezat la fundația echilibrului tău mental.',
    ],
    sections: [
      {
        title: 'Ce include acest pachet:',
        items: [
          '4 sesiuni individuale de consiliere psihologică (50 min): Desfășurate online sau fizic la cabinetul din Arad (Bulevardul Revoluției nr. 29).',
          'Continuitate și profunzime: Frecvența săptămânală asigură un ritm optim pentru identificarea tiparelor limitative și implementarea unor noi structuri de gândire.',
          'Abordare integrativă: Vom lucra împreună pentru a proiecta soluții adaptate realității tale, vizând reziliența și claritatea.',
        ],
      },
      {
        title: 'Reguli de utilizare:',
        items: [
          'Valabilitate: Toate cele 4 ședințe trebuie programate și efectuate în termen de 30 de zile de la data achiziției.',
          'Angajament: Această perioadă de valabilitate este menită să te ajute să prioritizezi propria evoluție și să asigure eficiența procesului de consiliere.',
          'Flexibilitate: Poți alege locația dorită (Online sau Cabinet) pentru fiecare sesiune în parte, în funcție de disponibilitatea afișată în calendar.',
        ],
      },
    ],
  },
  {
    id: 'program-gym',
    category: 'fitness',
    title: 'Program Antrenament Gym + Rutină Morning Flow (Fără suport)',
    meta: '1 ședință @ 249.00 lei',
    bookingUrl: 'https://l.bttr.to/qc0Qu',
    description: [
      'Construiește-ți corpul și disciplina folosind un plan de antrenament adaptat nevoilor tale. Acest pachet este creat pentru cei care au nevoie de o structură clară și de un sistem eficient, dar preferă să se antreneze autonom.',
    ],
    sections: [
      {
        title: 'Ce primești în acest pachet:',
        items: [
          'Program de antrenament pentru sală: Personalizat în funcție de obiectivele tale (masă musculară, forță sau longevitate) și de echipamentul pe care îl ai la dispoziție.',
          'Rutină Morning Flow: Un flux scurt de yoga și stretching pentru dimineață, conceput pentru a-ți trezi corpul, a elimina tensiunea și a-ți oferi claritate mentală pentru restul zilei.',
          'Livrare Digitală: Planul tău va fi încărcat direct în portalul securizat Practice Better, sub formă de Protocol ușor de urmărit.',
        ],
      },
    ],
    notes: [
      'Cum funcționează: După efectuarea plății, vei fi redirecționat către un formular de evaluare obligatoriu. Pe baza răspunsurilor tale, eu voi „proiecta” programul astfel încât să se potrivească perfect cu nivelul și țintele tale.',
      'Notă: Acest serviciu este oferit de BORCOȘ D. PAUL-CRISTIAN - CABINET INDIVIDUAL DE PSIHOLOGIE și reprezintă o intervenție de psihologia sănătății pentru optimizarea stilului de viață. Pachetul nu include ședințe de consiliere live sau suport pe chat.',
    ],
  },
  {
    id: 'ghid-nutritie',
    category: 'fitness',
    title: 'Ghid Nutriție și Suplimentare Personalizat (Fără suport)',
    meta: '1 ședință @ 249.00 lei',
    bookingUrl: 'https://l.bttr.to/BKgEg',
    description: [
      'Optimizează-ți biologia prin nutriție adaptată stilului tău de viață și obiectivelor tale de sănătate. Acest ghid este instrumentul tău de lucru dacă vrei claritate în alegerile alimentare și o schemă de suplimente bazată pe nevoi biologice reale, nu pe ghicite.',
    ],
    sections: [
      {
        title: 'Ce primești în acest ghid:',
        items: [
          'Ghid alimentar personalizat: Nu o dietă restrictivă, ci o structură bazată pe preferințele tale și pe obiectivele tale (energie, compoziție corporală sau sănătate metabolică). Este un suport real pentru a-ți schimba obiceiurile pe termen lung.',
          'Protocol de suplimentare: Recomandări specifice pentru a-ți susține starea de bine, calitatea somnului și performanța cognitivă (focus și claritate).',
          'Livrare rapidă: Ghidul va fi disponibil în portalul tău securizat în maxim 48 de ore de la completarea chestionarului de evaluare.',
        ],
      },
    ],
    notes: [
      'Cum funcționează: După plată, vei completa un formular detaliat despre stilul tău de viață și preferințe. Pe baza acestuia, eu îți voi „proiecta” strategia nutrițională și de suplimentare.',
      'Notă: Serviciile sunt furnizate de BORCOȘ D. PAUL-CRISTIAN - CABINET INDIVIDUAL DE PSIHOLOGIE. Această intervenție face parte din sfera psihologiei sănătății (modificarea comportamentului alimentar) și nu înlocuiește un tratament medical sau sfatul unui dietetician.',
    ],
  },
  {
    id: 'combo-gym-nutritie',
    category: 'fitness',
    title: 'Combo: Arhitectura Mișcării (Gym + Nutriție) – Fără suport',
    meta: '2 ședințe @ 449.00 lei',
    bookingUrl: 'https://l.bttr.to/nLVTL',
    description: [
      'Acest pachet este soluția completă dacă vrei să-ți reproiectezi stilul de viață de la zero, acționând simultan pe cele mai importante direcții: cum te miști și cum te hrănești. Prin alegerea acestui combo, primești o strategie integrată pentru corp și minte, profitând în plus de o economie de 100 RON față de achiziția separată a programelor.',
    ],
    sections: [
      {
        title: 'Ce primești în acest pachet:',
        items: [
          'Pilonul 1: Antrenament & Mobilitate - Program personalizat pentru sală: Creat special pentru obiectivul tău (forță, masă musculară sau longevitate) și adaptat la ce echipament ai la dispoziție.',
          'Pilonul 1: Antrenament & Mobilitate - Rutină Morning Flow: Un flux scurt de exerciții de stretching și yoga pentru a-ți începe ziua cu energie și claritate mentală.',
          'Pilonul 2: Nutriție & Suplimente - Ghid alimentar personalizat: Nu e o dietă restrictivă, ci o structură clară bazată pe nevoile tale metabolice și preferințele tale alimentare.',
          'Pilonul 2: Nutriție & Suplimente - Protocol de suplimentare: Recomandări specifice pentru a-ți optimiza nivelul de energie, calitatea somnului și sănătatea pe termen lung.',
        ],
      },
      {
        title: 'Cum funcționează (Pașii tăi):',
        items: [
          'Chestionarele: După plată, vei primi acces la două formulare detaliate (Fitness și Nutriție).',
          'Personalizarea: Analizez datele tale pentru a-ți „proiecta” planurile conform obiectivelor și stilului tău de viață.',
          'Livrarea: În maxim 48 de ore, vei primi ambele protocoale direct în portalul tău securizat Practice Better.',
        ],
      },
    ],
    notes: [
      'Notă: Serviciile sunt furnizate de BORCOȘ D. PAUL-CRISTIAN - CABINET INDIVIDUAL DE PSIHOLOGIE și vizează optimizarea stilului de viață prin schimbarea obiceiurilor. Aceste planuri nu înlocuiesc sfatul medicului sau al unui dietetician autorizat.',
    ],
  },
  {
    id: 'arhitectura-nutritiei',
    category: 'fitness',
    title: 'Arhitectura Nutriției: Ghid Personalizat + Ședință Live & Suport Chat',
    meta: '2 ședințe @ 449.00 lei',
    bookingUrl: 'https://l.bttr.to/7CTMb',
    description: [
      'Transformă nutriția dintr-o corvoadă într-un sistem care să lucreze pentru tine, nu împotriva ta. Acest pachet este creat pentru cei care nu vor doar un plan pe hârtie, ci au nevoie de ghidaj direct și monitorizare pentru a se asigura că noile obiceiuri „se prind”.',
    ],
    sections: [
      {
        title: 'Ce include acest pachet:',
        items: [
          'Ghid Alimentar & Suplimentare: O structură personalizată în funcție de preferințele tale, stilul de viață și obiectivele tale de longevitate. Fără rețete complicate, doar claritate.',
          '1 Ședință Individuală (50 min): Ne întâlnim Online sau la Cabinet (B-dul Revoluției 29) pentru a descifra mecanismele din spatele ghidului tău și pentru a personaliza strategia până la ultimul detaliu.',
          'Suport pe Chat (30 de zile): Sunt alături de tine prin mesageria privată din portal. Te ajut să treci peste momentele dificile, să-ți validezi alegerile alimentare în timp real sau să ajustăm protocolul de suplimente pe parcurs.',
          'Evaluare detaliată: Analizăm obiceiurile tale actuale și nevoile tale metabolice pentru a „proiecta” un sistem care să funcționeze cu adevărat pentru biologia ta.',
        ],
      },
    ],
    notes: [
      'Valabilitate: Toate beneficiile (ședința și accesul pe chat) sunt active timp de 30 de zile de la achiziție, oferindu-ți timpul necesar pentru o integrare eficientă.',
      'Notă: Serviciile sunt furnizate de BORCOȘ D. PAUL-CRISTIAN - CABINET INDIVIDUAL DE PSIHOLOGIE. Această intervenție face parte din sfera psihologiei sănătății (modificarea comportamentului alimentar) și nu înlocuiește un tratament medical specializat sau sfatul unui dietetician.',
    ],
  },
  {
    id: 'arhitectura-miscarii',
    category: 'fitness',
    title: 'Arhitectura Mișcării: Plan Fitness + Ședință Live & Suport Chat',
    meta: '2 ședințe @ 449.00 lei',
    bookingUrl: 'https://l.bttr.to/pEKf1',
    description: [
      'Aceasta este varianta extinsă pentru cei care nu vor doar un simplu document, ci vor să se asigure că execută mișcările corect și că au pe cine să întrebe atunci când se blochează în prima lună.',
    ],
    sections: [
      {
        title: 'Ce include acest pachet:',
        items: [
          'Plan de Antrenament Personalizat: Un program creat special pentru tine (Gym & Morning Flow), adaptat obiectivelor tale și echipamentului pe care îl ai.',
          '1 Ședință Individuală (50 min): Ne întâlnim față în față la XOX Gym Arad (Calea Romanilor) ca să verificăm tehnica exercițiilor sau Online pentru a pune la punct strategia de lucru.',
          'Suport pe Chat (30 de zile): Îmi poți scrie oricând în mesageria privată din portal. Sunt acolo pentru întrebări despre greutăți, ajustări ale planului sau un „șut în fund” motivațional când ai nevoie.',
          'Evaluare Inițială: Înainte de toate, completezi formularul de obiective pentru ca eu să pot proiecta planul exact pe măsura ta.',
        ],
      },
    ],
    notes: [
      'Notă: Serviciile sunt oferite de BORCOȘ D. PAUL-CRISTIAN - CABINET INDIVIDUAL DE PSIHOLOGIE și vizează optimizarea stilului de viață prin mișcare. Pachetul și suportul pe chat sunt valabile timp de 30 de zile de la achiziție.',
    ],
  },
  {
    id: 'master-body',
    category: 'fitness',
    title: 'Master your body: Arhitectura corpului (Gym + Nutriție) + Suport Live & Chat',
    meta: '3 ședințe @ 799.00 lei',
    bookingUrl: 'https://l.bttr.to/jxv6A',
    description: [
      'Acest Master Plan este soluția supremă pentru cineva care vrea să elimine orice urmă de presupunere. Integrăm ambii piloni — fitness și nutriție — într-o singură strategie coerentă, susținută de asistență directă și monitorizare constantă din partea mea.',
    ],
    sections: [
      {
        title: 'Ce include acest Master Plan:',
        items: [
          'Arhitectura Mișcării: Un program complet de antrenament (Gym) și o rutină de mobilitate (Morning Flow), ambele adaptate obiectivelor tale de forță și longevitate.',
          'Arhitectura Nutriției: Ghid alimentar personalizat și un protocol de suplimentare gândit să-ți susțină energia, somnul și performanța cognitivă.',
          '1 Ședință Individuală (50 min): Ne întâlnim pentru a pune cap la cap întreaga strategie. Poți alege să ne vedem fizic la XOX Gym, la Cabinet (B-dul Revoluției) sau Online, în funcție de ce ai nevoie să reglăm (tehnică sau strategie).',
          'Suport Prioritar pe Chat (30 de zile): Ai acces direct la mine prin mesageria privată. Orice dubiu legat de antrenament sau alimentație este rezolvat pe loc, astfel încât să nu pierzi ritmul.',
          'Evaluare Integrată: Analizăm ambele chestionare (Fitness și Nutriție) pentru a proiecta un plan 100% personalizat conform realității tale biologice.',
        ],
      },
    ],
    notes: [
      'Beneficiu: Acesta este cel mai eficient mod de a lucra cu mine. Oferă o economie substanțială față de achiziția separată a modulelor și cel mai înalt nivel de suport pe care îl pun la dispoziție.',
      'Notă: Serviciile sunt furnizate de BORCOȘ D. PAUL-CRISTIAN - CABINET INDIVIDUAL DE PSIHOLOGIE. Această intervenție vizează optimizarea stilului de viață prin schimbarea comportamentelor fundamentale și nu înlocuiește actul medical sau dietetic specializat.',
    ],
  },
  {
    id: 'protocol-aliniere',
    category: 'somatic',
    title: 'Protocol Aliniere Somatică: Pregătire - Aliniere - Integrare',
    meta: '3 ședințe @ 800.00 lei',
    bookingUrl: 'https://l.bttr.to/6oXpK',
    description: [
      'Acesta este un protocol terapeutic structurat, conceput pentru a oferi un cadru sigur și complet procesului de eliberare somatică. Nu lucrăm doar cu corpul, ci ne asigurăm că mintea poate procesa și integra schimbările apărute.',
    ],
    sections: [
      {
        title: 'Structura protocolului (cele 3 etape):',
        items: [
          'Sesiunea de Pregătire (50 min - Consiliere): Analizăm starea actuală și pregătim spațiul mental și emoțional pentru lucrul somatic. Stabilim obiectivele și cadrul de siguranță necesar eliberării.',
          'Sesiunea de Somatic Alignment (50 min - Lucru Corporal): Intervenția propriu-zisă la cabinet. Lucrăm fizic pentru a debloca tensiunile și a regla fluxul de energie și prezența în corp.',
          'Sesiunea de Integrare (50 min - Consiliere): Traducem senzațiile și eliberările corporale în înțelegere cognitivă. Ne asigurăm că noua stare de echilibru este stabilizată și integrată în viața ta cotidiană.',
        ],
      },
    ],
    notes: [
      'Locație: Toate cele 3 întâlniri au loc fizic, la adresa: B-dul Revoluției 29, Ap. 10, Etaj 2, Arad.',
      'Beneficiu: Această structură tripartită elimină riscul de re-traumatizare sau confuzie, oferind o punte solidă între experiența corporală și viața ta psihică.',
    ],
  },
  {
    id: 'reset-challenge',
    category: 'fitness',
    title: 'Arhitectura Sinelui: 30-Day Reset Challenge',
    meta: '9 ședințe @ 1,799.00 lei',
    bookingUrl: 'https://l.bttr.to/PhXF6',
    description: [
      'Cea mai intensă și completă experiență de transformare din ecosistemul Arhitectura Sinelui. Timp de 30 de zile, lucrăm integrat pentru a reconstrui fundația stării tale de bine. Nu este doar un program de fitness sau de nutriție, ci o recalibrare totală a modului în care trăiești, simți și te miști.',
    ],
    sections: [
      {
        title: '1. PILONUL MINTE (Consiliere Psihologică)',
        items: [
          '4 Sesiuni de Consiliere Individuală (1/săptămână): Ne concentrăm pe deblocarea mentală, gestionarea stresului și instalarea unor noi tipare de gândire care să susțină schimbarea.',
        ],
      },
      {
        title: '2. PILONUL CORP (Fitness & Nutriție)',
        items: [
          'Plan de Antrenament Personalizat: Un program complet (Gym & Morning Flow) adaptat nivelului tău actual.',
          'Ghid de Nutriție & Suplimentare: Protocol alimentar și de micronutrienți pentru a-ți optimiza energia și focusul.',
        ],
      },
      {
        title: '3. PILONUL SOMATIC (Reglarea Sistemului Nervos)',
        items: [
          '2 Sesiuni de Somatic Alignment: O sesiune la început și una spre finalul programului. Rolul lor este de a elibera tensiunea fizică acumulată și de a-ți învăța sistemul nervos să revină la o stare de calm și echilibru.',
        ],
      },
      {
        title: '4. MONITORIZARE ȘI EVALUARE',
        items: [
          'Evaluare Inițială & Finală: Sesiuni dedicate în Ziua 1 și Ziua 30 pentru a măsura progresul, analiza biometria și a stabili planul de menținere.',
          'Suport Zilnic pe Chat: Acces prioritar la mine prin mesageria privată pentru orice ajustare necesară pe parcursul celor 30 de zile.',
        ],
      },
    ],
    notes: [
      'Locații de desfășurare: Fizic: Cabinet Arad (B-dul Revoluției 29) & XOX Gym (Calea Romanilor).',
      'Digital: Acces complet în aplicația Practice Better (pentru planuri, chat și videochat).',
      'Preț Program: 1.950 RON (Economisești 20% față de achiziția separată a serviciilor).',
      'Notă legală: Serviciile sunt furnizate de BORCOȘ D. PAUL-CRISTIAN - CABINET INDIVIDUAL DE PSIHOLOGIE. Programul reprezintă o intervenție intensivă de psihologia sănătății și optimizarea stilului de viață.',
    ],
  },
]
