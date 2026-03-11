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
    meta: '1 ședință @ 349.00 lei',
    bookingUrl: 'https://l.bttr.to/qc0Qu',
    description: [
      'Construiește-ți corpul și disciplina folosind un plan adaptat nevoilor tale biologice. Acest pachet este creat pentru cei care au nevoie de o structură clară, dar sunt autonomi în execuție.',
    ],
    sections: [
      {
        title: 'Ce primești:',
        items: [
          'Program de antrenament pentru sală: Personalizat în funcție de obiectivele tale (hipertrofie, forță sau longevitate) și echipamentul disponibil.',
          'Rutină Morning Yoga/Stretching: Un flux scurt de dimineață conceput pentru detensionare și activarea mobilității.',
          'Livrare digitală: Planul este livrat direct în portalul tău Practice Better sub formă de Protocol.',
        ],
      },
    ],
    notes: [
      'Notă: Acest pachet nu include ședințe de consiliere live sau suport pe chat. După plată, vei fi redirecționat către formularul de evaluare obligatoriu.',
    ],
  },
  {
    id: 'ghid-nutritie',
    category: 'fitness',
    title: 'Ghid Nutriție și Suplimentare Personalizat (Fără suport)',
    meta: '1 ședință @ 349.00 lei',
    bookingUrl: 'https://l.bttr.to/BKgEg',
    description: [
      'Optimizează-ți biologia prin nutriție adaptată stilului tău de viață și obiectivelor de longevitate. Acest ghid este un instrument de lucru pentru cei care doresc claritate în alegerile alimentare și o schemă de suplimentare bazată pe nevoi reale.',
    ],
    sections: [
      {
        title: 'Ce primești:',
        items: [
          'Ghid alimentar personalizat: Structurat pe baza preferințelor și obiectivelor tale (energie, compoziție corporală, sănătate metabolică).',
          'Protocol de suplimentare: Recomandări specifice pentru optimizarea stării de bine și a performanței.',
          'Livrare: Ghidul va fi disponibil în portalul tău în maxim 48 de ore de la completarea chestionarului.',
        ],
      },
    ],
    notes: [
      'Notă: Acest pachet nu include consiliere live sau suport pe chat.',
    ],
  },
  {
    id: 'combo-gym-nutritie',
    category: 'fitness',
    title: 'Combo: Arhitectura Mișcării (Gym + Nutriție) - Fără suport',
    meta: '2 ședințe @ 599.00 lei',
    bookingUrl: 'https://l.bttr.to/nLVTL',
    description: [
      'Acest pachet reprezintă soluția completă pentru cei care doresc să își reproiecteze stilul de viață, acționând simultan asupra celor doi piloni fundamentali: mișcarea și combustibilul biologic. Prin alegerea acestui combo, beneficiezi de o strategie integrată și de o economie de 100 RON față de achiziția separată a serviciilor.',
    ],
    sections: [
      {
        title: 'Ce include acest pachet integrat:',
        items: [
          'Pilonul 1: Antrenament & Mobilitate - Program personalizat pentru sală: Adaptat obiectivului tău (forță, hipertrofie sau tonifiere).',
          'Pilonul 1: Antrenament & Mobilitate - Rutină Morning Flow: Exerciții de stretching și yoga pentru a începe ziua cu mobilitate și claritate mentală.',
          'Pilonul 2: Nutriție & Suplimentare - Ghid alimentar personalizat: Nu o dietă restrictivă, ci o structură bazată pe nevoile tale metabolice și preferințe.',
          'Pilonul 2: Nutriție & Suplimentare - Protocol de suplimentare: Recomandări specifice pentru optimizarea energiei, a somnului și a longevității.',
        ],
      },
      {
        title: 'Cum funcționează (procesul tău de transformare):',
        items: [
          'Achiziție: După plată, vei primi automat acces la cele două chestionare detaliate (Fitness și Nutriție).',
          'Evaluare: Completezi datele solicitate. Această etapă este esențială pentru a putea proiecta planurile conform realității tale biologice.',
          'Livrare: În maxim 48 de ore, vei primi ambele protocoale direct în portalul tău Practice Better.',
        ],
      },
    ],
  },
  {
    id: 'arhitectura-nutritiei',
    category: 'fitness',
    title: 'Arhitectura Nutriției: Ghid Personalizat + Ședință Live & Suport Chat',
    meta: '2 ședințe @ 599.00 lei',
    bookingUrl: 'https://l.bttr.to/7CTMb',
    description: [
      'Transformă nutriția dintr-o corvoadă într-un sistem de suport pentru biologia ta. Acest pachet adaugă componenta de ghidaj direct la ghidul tău personalizat.',
    ],
    sections: [
      {
        title: 'Ce include acest pachet:',
        items: [
          'Ghid alimentar & suplimentare: O structură adaptată preferințelor tale, stilului de viață și obiectivelor de longevitate.',
          '1 ședință individuală (50 min): O sesiune de consultanță (Online sau la Cabinetul din B-dul Revoluției 29) în care explicăm mecanismele din spatele ghidului tău.',
          'Suport pe chat (30 de zile): Sunt alături de tine pentru a depăși momentele dificile, pentru a valida alegerile alimentare în timp real sau pentru a ajusta protocolul de suplimentare.',
          'Analiză chestionar: Evaluare detaliată a obiceiurilor actuale și a nevoilor metabolice.',
        ],
      },
    ],
    notes: [
      'Valabilitate: Toate beneficiile sunt active timp de 30 de zile, oferindu-ți timpul necesar pentru a integra noile obiceiuri alimentare.',
    ],
  },
  {
    id: 'arhitectura-miscarii',
    category: 'fitness',
    title: 'Arhitectura Mișcării: Plan Fitness + Ședință Live & Suport Chat',
    meta: '2 ședințe @ 599.00 lei',
    bookingUrl: 'https://l.bttr.to/pEKf1',
    description: [
      'Aceasta este varianta extinsă a programului de fitness, creată pentru cei care doresc nu doar un plan, ci și certitudinea execuției corecte și monitorizarea progresului în prima lună de transformare.',
    ],
    sections: [
      {
        title: 'Ce include acest pachet:',
        items: [
          'Plan de antrenament personalizat: Proiectat special pentru obiectivele tale (Gym & Morning Flow).',
          '1 ședință individuală (50 min): Ne întâlnim fizic la XOX Gym Arad (Calea Romanilor) pentru a regla tehnica exercițiilor sau Online pentru o sesiune de consultanță strategică.',
          'Suport pe chat (30 de zile): Ai acces direct la mine prin mesageria privată din portal pentru întrebări, ajustări de greutăți sau suport motivațional.',
          'Evaluare inițială: Acces la formularul de biometrie și obiective pentru o personalizare precisă.',
        ],
      },
    ],
    notes: [
      'Valabilitate: Pachetul și suportul pe chat expiră la 30 de zile de la achiziție, asigurând un ritm de lucru susținut și eficient.',
    ],
  },
  {
    id: 'master-body',
    category: 'fitness',
    title: 'Master your body: Arhitectura corpului (Gym + Nutriție) + Suport Live & Chat',
    meta: '3 ședințe @ 899.00 lei',
    bookingUrl: 'https://l.bttr.to/jxv6A',
    description: [
      'Acest Master Plan integrează ambii piloni - fitness și nutriție - într-o singură strategie coerentă, susținută de asistență directă.',
    ],
    sections: [
      {
        title: 'Ce include acest Master Plan:',
        items: [
          'Arhitectura Mișcării: Program complet de antrenament (Gym) și rutină de mobilitate (Morning Flow).',
          'Arhitectura Nutriției: Ghid alimentar personalizat și protocol de suplimentare pentru energie și longevitate.',
          '1 ședință individuală (50 min): Consultanță premium desfășurată la XOX Gym, la Cabinet sau Online, pentru a pune cap la cap întreaga strategie.',
          'Suport prioritar pe chat (30 de zile): Mesagerie directă pentru orice ține de antrenament sau alimentație, eliminând orice urmă de dubiu în procesul tău.',
          'Evaluare integrată: Completarea ambelor formulare de fitness și nutriție pentru un plan 100% personalizat.',
        ],
      },
    ],
    notes: [
      'Beneficiu: Reprezintă cea mai eficientă investiție, oferind economii substanțiale față de achiziția separată și cel mai înalt nivel de suport pe care îl ofer în segmentul fitness/nutriție.',
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
      'Cea mai intensă și completă experiență de transformare din ecosistemul Arhitectura Sinelui. Timp de 30 de zile, lucrăm integrat pe toate planurile biologice și psihologice pentru a reconstrui fundația stării tale de bine. Nu este doar un program de fitness sau de terapie, ci o recalibrare totală a modului în care trăiești, simți și te miști.',
    ],
    sections: [
      {
        title: 'Pilonul Minte (Psihologie Clinică):',
        items: [
          '4 sesiuni de consiliere psihologică (1/săptămână): Focus pe deblocarea mentală, gestionarea stresului și stabilirea unor noi tipare de gândire.',
        ],
      },
      {
        title: 'Pilonul Corp (Fitness & Nutriție):',
        items: [
          'Plan de antrenament personalizat (Gym & Morning Flow): Adaptat nivelului tău de energie.',
          'Ghid de nutriție & suplimentare: Protocol alimentar și de micronutrienți pentru optimizarea metabolismului și a focusului.',
        ],
      },
      {
        title: 'Pilonul Somatic (Sistem Nervos):',
        items: [
          '2 sesiuni de Somatic Alignment: O sesiune de deblocare la începutul programului și o sesiune de stabilizare spre final, pentru a elibera tensiunea fizică stocată și a regla sistemul nervos.',
        ],
      },
      {
        title: 'Monitorizare și evaluare:',
        items: [
          'Sesiune de evaluare inițială (Ziua 1): Stabilirea obiectivelor, analiza biometrică și scanarea stării actuale.',
          'Sesiune de evaluare finală (Ziua 30): Analiza progresului, măsurători și planul de menținere post-challenge.',
          'Suport zilnic pe chat: Acces prioritar la mine în portal pentru orice ajustare necesară pe parcursul celor 30 de zile.',
        ],
      },
    ],
    notes: [
      'Locații de desfășurare: Fizic (Cabinet Arad - B-dul Revoluției 29 & XOX Gym - Calea Romanilor) sau Digital (acces complet în aplicația Practice Better pentru planuri, chat/videochat).',
      'Preț program: 1.950 RON (valoare reală servicii individuale: peste 2.400 RON. Discount de 20% aplicat pentru formatul de Challenge).',
    ],
  },
]
