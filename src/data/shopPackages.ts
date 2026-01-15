export type PackageSection = {
  title: string
  items: string[]
}

export type PackageItem = {
  id: string
  category: 'psihologie' | 'somatic' | 'fitness'
  title: string
  meta: string
  description: string[]
  sections?: PackageSection[]
  notes?: string[]
}

export const packages: PackageItem[] = [
  {
    id: 'discovery-call',
    category: 'psihologie',
    title: 'Discovery Call Gratuit (Apel de Cunoastere)',
    meta: '30 minutes @ Gratuit',
    description: [
      'O discutie scurta si directa pentru a vedea daca rezonam si care dintre pilonii Arhitectura Sinelui - Psihologie, Fitness sau Somatic - este cel mai potrivit pentru obiectivele tale actuale. Nu este o sesiune de consiliere propriu-zisa, ci o etapa de clarificare a directiei tale de evolutie.',
    ],
  },
  {
    id: 'consiliere-psihologica',
    category: 'psihologie',
    title: 'Consiliere Psihologica',
    meta: '50 minutes @ 250.00 lei',
    description: [
      'Aceasta sesiune de consiliere reprezinta primul pas in procesul de proiectare si reconstructie a echilibrului tau interior. Intr-un spatiu sigur si confidential, vom explora impreuna mecanismele care iti guverneaza gandurile si emotiile, identificand fundatia pe care vom cladi noua ta stare de bine.',
    ],
    sections: [
      {
        title: 'Ce vom aborda in cadrul sesiunii:',
        items: [
          'Explorarea Arhitecturii Interioare: Identificarea tiparelor de gandire si a blocajelor care te impiedica sa evoluezi.',
          'Autoreglare si Claritate: Tehnici pentru gestionarea stresului, anxietatii sau a dificultatilor de adaptare.',
          'Aliniere: Corelarea nevoilor tale emotionale cu realitatea cotidiana pentru a crea o structura de viata autentica si rezilienta.',
        ],
      },
    ],
    notes: [
      'Fie ca ne intalnim online sau la cabinetul din Arad, scopul nostru este sa transformam introspectia in actiune concreta. Aceasta este mai mult decat o discutie; este inceputul unui proiect dedicat celei mai importante constructii: propriul tau Sine.',
    ],
  },
  {
    id: 'consultanta-evaluare',
    category: 'somatic',
    title: 'Sesiune de Consultanta si Evaluare Initiala: Proiecteaza-ti Schimbarea',
    meta: '50 minutes @ 100.00 lei',
    description: [
      'Aceasta sesiune de 50 de minute reprezinta primul punct de contact cu ecosistemul Arhitectura Sinelui. Este spatiul in care transformam incertitudinea in claritate si obiectivele vagi in planuri de actiune concrete.',
    ],
    sections: [
      {
        title: 'Ce urmarim in cadrul acestei consultante:',
        items: [
          'Analiza Situatiei Actuale: Evaluam starea ta de bine, nivelul de fitness sau echilibrul emotional, in functie de nevoia ta principala.',
          'Identificarea Blocajelor: Depistam punctele de presiune care te impiedica sa progresezi in acest moment.',
          'Schitarea Strategiei: Stabilim daca ai nevoie de un program structurat de fitness, de un ghid de nutritie sau de suport psihologic prin consiliere.',
        ],
      },
      {
        title: 'Pentru cine este aceasta sesiune:',
        items: [
          'Pentru cei care nu stiu exact de unde sa inceapa procesul de transformare.',
          'Pentru cei care doresc o a doua opinie profesionala asupra rutinei lor actuale.',
          'Pentru oricine doreste sa vada daca abordarea mea integrativa (minte-corp) rezoneaza cu stilul lor.',
        ],
      },
    ],
    notes: [
      'Locatie: Online (confortul casei tale) sau Fizic (Arad - Cabinet/XOX Gym).',
      'Rezultat: La finalul discutiei, vei pleca cu o viziune clara asupra pasilor urmatori si cu o recomandare personalizata pentru unul dintre programele Arhitectura Sinelui.',
    ],
  },
  {
    id: 'somatic-alignment',
    category: 'somatic',
    title: 'Sesiune Somatic Alignment',
    meta: '1 hour 30 minutes @ 400.00 lei',
    description: [
      'Somatic Alignment este o metoda de lucru corporal care vizeaza restabilirea echilibrului dintre minte si corp prin interventii directe asupra sistemului nervos si a tensiunilor musculare cronice. Spre deosebire de terapia prin vorbire, aceasta sesiune se concentreaza pe limbajul corpului tau, abordand stresul si trauma acolo unde ele sunt stocate fizic.',
    ],
    sections: [
      {
        title: 'Ce urmarim:',
        items: [
          'Identificarea zonelor de blocaj.',
          'Eliberarea tensiunii acumulate.',
          'Recalibrarea raspunsului sistemului nervos la stres.',
        ],
      },
    ],
    notes: [
      'Locatie: Aceasta sesiune se desfasoara exclusiv fizic la cabinetul din B-dul Revolutiei 29, Arad.',
      'Ideal pentru: Persoane care resimt burnout, tensiuni fizice persistente care nu cedeaza la masaj clasic sau stari de anxietate care se manifesta puternic in corp.',
    ],
  },
  {
    id: 'abonament-4x',
    category: 'psihologie',
    title: 'Abonament 4x Consiliere Psihologica',
    meta: '4 sessions @ 800.00 lei',
    description: [
      'Acest abonament este conceput pentru cei care doresc sa treaca de la o simpla explorare la un proces real de reconstructie interioara. Patru sesiuni ofera timpul si spatiul necesar pentru ca schimbarile sa prinda radacini, permitandu-ne sa lucram asezat la fundatia echilibrului tau mental.',
    ],
    sections: [
      {
        title: 'Ce include acest pachet:',
        items: [
          '4 sesiuni individuale de consiliere psihologica (50 min): Desfasurate online sau fizic la cabinetul din Arad (Bulevardul Revolutiei nr. 29).',
          'Continuitate si profunzime: Frecventa saptamanala asigura un ritm optim pentru identificarea tiparelor limitative si implementarea unor noi structuri de gandire.',
          'Abordare integrativa: Vom lucra impreuna pentru a proiecta solutii adaptate realitatii tale, vizand rezilienta si claritatea.',
        ],
      },
      {
        title: 'Reguli de utilizare:',
        items: [
          'Valabilitate: Toate cele 4 sedinte trebuie programate si efectuate in termen de 30 de zile de la data achizitiei.',
          'Angajament: Aceasta perioada de valabilitate este menita sa te ajute sa prioritizezi propria evolutie si sa asigure eficienta procesului de consiliere.',
          'Flexibilitate: Poti alege locatia dorita (Online sau Cabinet) pentru fiecare sesiune in parte, in functie de disponibilitatea afisata in calendar.',
        ],
      },
    ],
  },
  {
    id: 'program-gym',
    category: 'fitness',
    title: 'Program Antrenament Gym + Rutina Morning Flow (Fara suport)',
    meta: '1 session @ 400.00 lei',
    description: [
      'Construieste-ti corpul si disciplina folosind un plan adaptat nevoilor tale biologice. Acest pachet este creat pentru cei care au nevoie de o structura clara, dar sunt autonomi in executie.',
    ],
    sections: [
      {
        title: 'Ce primesti:',
        items: [
          'Program de antrenament pentru sala: Personalizat in functie de obiectivele tale (hipertrofie, forta sau longevitate) si echipamentul disponibil.',
          'Rutina Morning Yoga/Stretching: Un flux scurt de dimineata conceput pentru detensionare si activarea mobilitatii.',
          'Livrare digitala: Planul este livrat direct in portalul tau Practice Better sub forma de Protocol.',
        ],
      },
    ],
    notes: [
      'Nota: Acest pachet nu include sedinte de consiliere live sau suport pe chat. Dupa plata, vei fi redirectionat catre formularul de evaluare obligatoriu.',
    ],
  },
  {
    id: 'ghid-nutritie',
    category: 'fitness',
    title: 'Ghid Nutritie si Suplimentare Personalizat (Fara suport)',
    meta: '1 session @ 400.00 lei',
    description: [
      'Optimizeaza-ti biologia prin nutritie adaptata stilului tau de viata si obiectivelor de longevitate. Acest ghid este un instrument de lucru pentru cei care doresc claritate in alegerile alimentare si o schema de suplimentare bazata pe nevoi reale.',
    ],
    sections: [
      {
        title: 'Ce primesti:',
        items: [
          'Ghid alimentar personalizat: Structurat pe baza preferintelor si obiectivelor tale (energie, compozitie corporala, sanatate metabolica).',
          'Protocol de suplimentare: Recomandari specifice pentru optimizarea starii de bine si a performantei.',
          'Livrare: Ghidul va fi disponibil in portalul tau in maxim 48 de ore de la completarea chestionarului.',
        ],
      },
    ],
    notes: [
      'Nota: Acest pachet nu include consiliere live sau suport pe chat.',
    ],
  },
  {
    id: 'combo-gym-nutritie',
    category: 'fitness',
    title: 'Combo: Arhitectura Corpului (Gym + Nutritie) - Fara suport',
    meta: '2 sessions @ 700.00 lei',
    description: [
      'Acest pachet reprezinta solutia completa pentru cei care doresc sa isi reproiecteze stilul de viata, actionand simultan asupra celor doi piloni fundamentali: miscarea si combustibilul biologic. Prin alegerea acestui combo, beneficiezi de o strategie integrata si de o economie de 100 RON fata de achizitia separata a serviciilor.',
    ],
    sections: [
      {
        title: 'Ce include acest pachet integrat:',
        items: [
          'Pilonul 1: Antrenament & Mobilitate - Program personalizat pentru sala: Adaptat obiectivului tau (forta, hipertrofie sau tonifiere).',
          'Pilonul 1: Antrenament & Mobilitate - Rutina Morning Flow: Exercitii de stretching si yoga pentru a incepe ziua cu mobilitate si claritate mentala.',
          'Pilonul 2: Nutritie & Suplimentare - Ghid alimentar personalizat: Nu o dieta restrictiva, ci o structura bazata pe nevoile tale metabolice si preferinte.',
          'Pilonul 2: Nutritie & Suplimentare - Protocol de suplimentare: Recomandari specifice pentru optimizarea energiei, a somnului si a longevitatii.',
        ],
      },
      {
        title: 'Cum functioneaza (Procesul tau de transformare):',
        items: [
          'Achizitie: Dupa plata, vei primi automat acces la cele doua chestionare detaliate (Fitness si Nutritie).',
          'Evaluare: Completezi datele solicitate. Aceasta etapa este esentiala pentru a putea proiecta planurile conform realitatii tale biologice.',
          'Livrare: In maxim 48 de ore, vei primi ambele protocoale direct in portalul tau Practice Better.',
        ],
      },
    ],
  },
  {
    id: 'arhitectura-nutritiei',
    category: 'fitness',
    title: 'Arhitectura Nutritiei: Ghid Personalizat + Sedinta Live & Suport Chat',
    meta: '2 sessions @ 700.00 lei',
    description: [
      'Transforma nutritia dintr-o corvoada intr-un sistem de suport pentru biologia ta. Acest pachet adauga componenta de ghidaj direct la ghidul tau personalizat.',
    ],
    sections: [
      {
        title: 'Ce include acest pachet:',
        items: [
          'Ghid alimentar & suplimentare: O structura adaptata preferintelor tale, stilului de viata si obiectivelor de longevitate.',
          '1 sedinta individuala (50 min): O sesiune de consultanta (Online sau la Cabinetul din B-dul Revolutiei 29) in care explicam mecanismele din spatele ghidului tau.',
          'Suport pe chat (30 de zile): Sunt alaturi de tine pentru a depasi momentele dificile, pentru a valida alegerile alimentare in timp real sau pentru a ajusta protocolul de suplimentare.',
          'Analiza chestionar: Evaluare detaliata a obiceiurilor actuale si a nevoilor metabolice.',
        ],
      },
    ],
    notes: [
      'Valabilitate: Toate beneficiile sunt active timp de 30 de zile, oferindu-ti timpul necesar pentru a integra noile obiceiuri alimentare.',
    ],
  },
  {
    id: 'arhitectura-miscarii',
    category: 'fitness',
    title: 'Arhitectura Miscarii: Plan Fitness + Sedinta Live & Suport Chat',
    meta: '2 sessions @ 700.00 lei',
    description: [
      'Aceasta este varianta extinsa a programului de fitness, creata pentru cei care doresc nu doar un plan, ci si certitudinea executiei corecte si monitorizarea progresului in prima luna de transformare.',
    ],
    sections: [
      {
        title: 'Ce include acest pachet:',
        items: [
          'Plan de antrenament personalizat: Proiectat special pentru obiectivele tale (Gym & Morning Flow).',
          '1 sedinta individuala (50 min): Ne intalnim fizic la XOX Gym Arad (Calea Romanilor) pentru a regla tehnica exercitiilor sau Online pentru o sesiune de consultanta strategica.',
          'Suport pe chat (30 de zile): Ai acces direct la mine prin mesageria privata din portal pentru intrebari, ajustari de greutati sau suport motivational.',
          'Evaluare initiala: Acces la formularul de biometrie si obiective pentru o personalizare precisa.',
        ],
      },
    ],
    notes: [
      'Valabilitate: Pachetul si suportul pe chat expira la 30 de zile de la achizitie, asigurand un ritm de lucru sustinut si eficient.',
    ],
  },
  {
    id: 'master-body',
    category: 'fitness',
    title: 'Master your body: Arhitectura corpului (Gym + Nutritie) + Suport Live & Chat',
    meta: '3 sessions @ 1,000.00 lei',
    description: [
      'Acest Master Plan integreaza ambii piloni - fitness si nutritie - intr-o singura strategie coerenta, sustinuta de asistenta directa.',
    ],
    sections: [
      {
        title: 'Ce include acest Master Plan:',
        items: [
          'Arhitectura Miscarii: Program complet de antrenament (Gym) si rutina de mobilitate (Morning Flow).',
          'Arhitectura Nutritiei: Ghid alimentar personalizat si protocol de suplimentare pentru energie si longevitate.',
          '1 sedinta individuala (50 min): Consultanta premium desfasurata la XOX Gym, la Cabinet sau Online, pentru a pune cap la cap intreaga strategie.',
          'Suport prioritar pe chat (30 de zile): Mesagerie directa pentru orice tine de antrenament sau alimentatie, eliminand orice urma de dubiu in procesul tau.',
          'Evaluare integrata: Completarea ambelor formulare de fitness si nutritie pentru un plan 100% personalizat.',
        ],
      },
    ],
    notes: [
      'Beneficiu: Reprezinta cea mai eficienta investitie, oferind economii substantiale fata de achizitia separata si cel mai inalt nivel de suport pe care il ofer in segmentul fitness/nutritie.',
    ],
  },
  {
    id: 'protocol-aliniere',
    category: 'somatic',
    title: 'Protocol Aliniere Somatica: Pregatire - Aliniere - Integrare',
    meta: '3 sessions @ 800.00 lei',
    description: [
      'Acesta este un protocol terapeutic structurat, conceput pentru a oferi un cadru sigur si complet procesului de eliberare somatica. Nu lucram doar cu corpul, ci ne asiguram ca mintea poate procesa si integra schimbarile aparute.',
    ],
    sections: [
      {
        title: 'Structura protocolului (cele 3 etape):',
        items: [
          'Sesiunea de Pregatire (50 min - Consiliere): Analizam starea actuala si pregatim spatiul mental si emotional pentru lucrul somatic. Stabilim obiectivele si cadrul de siguranta necesar eliberarii.',
          'Sesiunea de Somatic Alignment (50 min - Lucru Corporal): Interventia propriu-zisa la cabinet. Lucram fizic pentru a debloca tensiunile si a regla fluxul de energie si prezenta in corp.',
          'Sesiunea de Integrare (50 min - Consiliere): Traducem senzatiile si eliberarile corporale in intelegere cognitiva. Ne asiguram ca noua stare de echilibru este stabilizata si integrata in viata ta cotidiana.',
        ],
      },
    ],
    notes: [
      'Locatie: Toate cele 3 intalniri au loc fizic, la adresa: B-dul Revolutiei 29, Ap. 10, Etaj 2, Arad.',
      'Beneficiu: Aceasta structura tripartita elimina riscul de re-traumatizare sau confuzie, oferind o punte solida intre experienta corporala si viata ta psihica.',
    ],
  },
  {
    id: 'reset-challenge',
    category: 'fitness',
    title: 'Arhitectura Sinelui: 30-Day Reset Challenge',
    meta: '9 sessions @ 1,950.00 lei',
    description: [
      'Cea mai intensa si completa experienta de transformare din ecosistemul Arhitectura Sinelui. Timp de 30 de zile, lucram integrat pe toate planurile biologice si psihologice pentru a reconstrui fundatia starii tale de bine. Nu este doar un program de fitness sau de terapie, ci o recalibrare totala a modului in care traiesti, simti si te misti.',
    ],
    sections: [
      {
        title: 'Pilonul Minte (Psihologie Clinica):',
        items: [
          '4 sesiuni de consiliere psihologica (1/saptamana): Focus pe deblocarea mentala, gestionarea stresului si stabilirea unor noi tipare de gandire.',
        ],
      },
      {
        title: 'Pilonul Corp (Fitness & Nutritie):',
        items: [
          'Plan de antrenament personalizat (Gym & Morning Flow): Adaptat nivelului tau de energie.',
          'Ghid de nutritie & suplimentare: Protocol alimentar si de micronutrienti pentru optimizarea metabolismului si a focusului.',
        ],
      },
      {
        title: 'Pilonul Somatic (Sistem Nervos):',
        items: [
          '2 sesiuni de Somatic Alignment: O sesiune de deblocare la inceputul programului si o sesiune de stabilizare spre final, pentru a elibera tensiunea fizica stocata si a regla sistemul nervos.',
        ],
      },
      {
        title: 'Monitorizare si evaluare:',
        items: [
          'Sesiune de evaluare initiala (Ziua 1): Stabilirea obiectivelor, analiza biometrica si scanarea starii actuale.',
          'Sesiune de evaluare finala (Ziua 30): Analiza progresului, masuratori si planul de mentinere post-challenge.',
          'Suport zilnic pe chat: Acces prioritar la mine in portal pentru orice ajustare necesara pe parcursul celor 30 de zile.',
        ],
      },
    ],
    notes: [
      'Locatii de desfasurare: Fizic (Cabinet Arad - B-dul Revolutiei 29 & XOX Gym - Calea Romanilor) sau Digital (acces complet in aplicatia Practice Better pentru planuri, chat/videochat).',
      'Pret program: 1.950 RON (valoare reala servicii individuale: peste 2.400 RON. Discount de 20% aplicat pentru formatul de Challenge).',
    ],
  },
]
