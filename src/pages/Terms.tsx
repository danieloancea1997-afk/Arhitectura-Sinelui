import { Link, useLocation } from 'react-router-dom'

function Terms() {
  const location = useLocation()
  const state =
    location.state && typeof location.state === 'object'
      ? (location.state as {
          returnTo?: string
          acceptedStateKey?: 'acceptedTerms' | 'acceptedInitialEvalTerms'
          reopenPackageId?: string
          returnScrollY?: number
        })
      : undefined

  const returnTo = state?.returnTo ?? '/cursuri'
  const returnState =
    state?.acceptedStateKey === 'acceptedInitialEvalTerms'
      ? {
          acceptedInitialEvalTerms: true,
          reopenPackageId: state.reopenPackageId ?? 'consultanta-evaluare',
          returnScrollY: state.returnScrollY ?? 0,
        }
      : { acceptedTerms: true, returnScrollY: state?.returnScrollY ?? 0 }

  return (
    <section className="terms-page">
      <div className="card terms-card">
        <h1>Termeni și Condiții Generale – Arhitectura Sinelui</h1>

        <p>
          Prezenții Termeni și Condiții reglementează utilizarea site-ului și
          achiziționarea programelor, cursurilor și serviciilor furnizate de către
          BORCOȘ D. PAUL-CRISTIAN - CABINET INDIVIDUAL DE PSIHOLOGIE, în
          conformitate cu Legea nr. 213/2004 și Normele metodologice aprobate prin
          H.G. nr. 788/2005.
        </p>

        <p>
          Prin bifarea căsuței de acceptare a termenilor la finalizarea oricărei
          comenzi sau programări, Beneficiarul își exprimă acordul expres cu
          prevederile de mai jos, prezentul document având valoarea juridică a unui
          contract de adeziune.
        </p>

        <h3>CAPITOLUL 1. Dispoziții Generale și Identificarea Furnizorului</h3>
        <p>Serviciile și produsele prezentate pe acest site sunt furnizate de:</p>
        <p>
          <strong>Furnizor:</strong> BORCOȘ D. PAUL-CRISTIAN - CABINET INDIVIDUAL DE
          PSIHOLOGIE
        </p>
        <p>
          <strong>Cont Bancar (IBAN):</strong> RO93BTRLRONCRT0CW4159301 (Banca
          Transilvania)
        </p>
        <p>
          <strong>Contact:</strong> contact@arhitecturasinelui.ro
        </p>
        <p>
          <strong>Natura Serviciilor:</strong> Furnizorul oferă servicii
          psihologice autorizate (psihologie clinică, psihologia sănătății,
          intervenții pentru modificarea stilului de viață, optimizarea
          performanței și tehnici de reglare conștientă/Somatic Alignment).
        </p>

        <h3>CAPITOLUL 2. Programul Psihoeducațional (Cursuri Online)</h3>
        <p>
          Prevederi specifice pentru programul „Neurobiologia și Psihologia
          Adicției: O Abordare Integrativă” și alte materiale digitale.
        </p>
        <p>
          <strong>2.1. Natura Serviciului (Psihoeducație vs. Terapie)</strong>
        </p>
        <p>
          Acest program reprezintă un serviciu de psihoeducație și ghidaj
          informativ. Conținutul (video, audio, text) are scop strict educațional,
          de autocunoaștere și optimizare personală. Participarea la acest program
          nu constituie și nu înlocuiește un proces de psihoterapie clinică
          individuală, un diagnostic psihiatric sau un tratament medical de
          specialitate pentru detoxifiere/recuperare.
        </p>
        <p>
          <strong>2.2. Exonerare de Răspundere Medicală</strong>
        </p>
        <p>
          Informațiile prezentate sunt bazate pe literatura de specialitate și
          experiența profesională a Furnizorului. În cazul adicțiilor severe sau al
          crizelor acute de sevraj, Beneficiarul are obligația și responsabilitatea
          de a apela la servicii medicale de urgență sau clinici specializate.
        </p>
        <p>
          <strong>2.3. Absența Dreptului de Retur (Produse Digitale)</strong>
        </p>
        <p>
          Conform OUG nr. 34/2014 (art. 16, lit. m), furnizarea de conținut digital
          care nu este livrat pe un suport material nu beneficiază de dreptul de
          retragere (retur în 14 zile) dacă executarea a început cu acordul
          prealabil expres al consumatorului. By finalizarea plății, Beneficiarul
          solicită accesul instant la conținut și confirmă că își pierde dreptul la
          retragere/rambursare odată ce materialele au fost puse la dispoziție în
          platforma Systeme.io.
        </p>

        <h3>CAPITOLUL 3. Ședința Inițială de Evaluare (Triaj pre-terapeutic)</h3>
        <p>Prevederi specifice pentru primul apel de orientare.</p>
        <p>
          <strong>Obiectul și Durata:</strong> Acest apel are o durată standard de 50
          de minute (tarif: 89 lei) și reprezintă o etapă de evaluare și orientare
          pre-terapeutică. Scopul sesiunii este identificarea nevoilor și stabilirea
          compatibilității, fără a constitui un proces de consiliere pe termen lung
          la acest stadiu.
        </p>
        <p>
          <strong>Politică de Anulare și Reprogramare:</strong> Având în vedere
          timpul alocat, suma achitată nu este rambursabilă în caz de neprezentare
          (no-show). Reprogramarea sesiunii este permisă o singură dată, cu un
          preaviz de minimum 24 de ore înainte de ora stabilită.
        </p>

        <h3>
          CAPITOLUL 4. Servicii Psihologice și Pachete 1-la-1 (Consiliere și
          Optimizare)
        </h3>
        <p>
          Prevederi specifice pentru sesiunile desfășurate online sau la cabinetul
          fizic.
        </p>
        <p>
          <strong>4.1. Formalizarea Colaborării</strong>
        </p>
        <p>
          Rezervarea și plata unei ședințe sau a unui pachet de servicii reprezintă
          intenția fermă de colaborare a Beneficiarului. Prețul serviciului este cel
          selectat în momentul programării, conform listei de servicii și pachete
          afișate. Plata confirmată constituie acceptarea tarifului aferent.
          Ulterior efectuării plății, Beneficiarul va primi pe e-mail Contractul
          Oficial de Servicii Psihologice conform normelor Colegiului Psihologilor, a
          cărui semnare digitală este obligatorie pentru începerea efectivă a
          sesiunilor de lucru.
        </p>
        <p>
          <strong>
            4.2. Limitarea Răspunderii (Disclaimer pentru Stil de Viață și
            Longevitate)
          </strong>
        </p>
        <p>
          <strong>Protocoale de Longevitate:</strong> Orice recomandare privind
          suplimentele sau protocoalele de tip „Blueprint” sau „Biohacking” are
          caracter strict orientativ și informativ. Furnizorul nu prescrie
          medicamente. Beneficiarul are responsabilitatea integrală de a verifica
          contraindicațiile cu un medic specialist sau farmacist.
        </p>
        <p>
          <strong>Condiții Medicale și Efort Fizic:</strong> Beneficiarul se obligă
          să informeze Furnizorul cu privire la orice afecțiune medicală preexistentă.
          Beneficiarul declară că este apt pentru efort fizic și exonerează
          Furnizorul de orice răspundere în caz de accidentări sau probleme de
          sănătate apărute în timpul programelor de fitness/mișcare recomandate.
        </p>
        <p>
          <strong>Absența Garanțiilor:</strong> Furnizorul nu garantează rezultate
          biologice specifice (ex: kilograme pierdute, modificări ale biomarkerilor),
          acestea depinzând în totalitate de genetica, istoricul medical și rigoarea
          Beneficiarului.
        </p>
        <p>
          <strong>4.3. Politica de Reprogramare și Încetare a Serviciilor 1-la-1</strong>
        </p>
        <p>
          <strong>Regula de 24 de ore:</strong> Beneficiarul se obligă să anunțe
          anularea sau reprogramarea unei ședințe cu cel puțin 24 de ore înainte. În
          cazul nerespectării acestui termen sau al neprezentării, ședința se
          consideră efectuată și va fi achitată/scăzută din pachet integral.
        </p>
        <p>
          <strong>Încetarea Colaborării (Preaviz):</strong> Contractul de servicii
          1-la-1 se încheie pe perioadă nedeterminată. În cazul în care Beneficiarul
          dorește încetarea colaborării pe parcursul procesului, acesta are obligația
          de a anunța Furnizorul cu cel puțin două ședințe înainte.
        </p>
        <p>
          <strong>Excepție pentru Prima Ședință:</strong> Obligația de preaviz de două
          ședințe nu se aplică în cazul în care Beneficiarul decide încetarea
          colaborării imediat după prima ședință (ședința de evaluare). În această
          situație, colaborarea încetează fără nicio altă obligație viitoare.
        </p>

        <h3>CAPITOLUL 5. Proprietate Intelectuală</h3>
        <p>
          Toate materialele prezente pe acest site și în interiorul programelor sau
          cursurilor (clipuri video, ghiduri PDF, grafice, teste, texte, structură)
          reprezintă proprietatea intelectuală exclusivă a BORCOȘ D. PAUL-CRISTIAN -
          CABINET INDIVIDUAL DE PSIHOLOGIE. Accesul oferit este personal și
          netransmisibil. Copierea, distribuirea, modificarea, revânzarea sau
          utilizarea acestor materiale în scopuri publice sau comerciale, fără acordul
          scris al autorului, este strict interzisă și atrage răspunderea civilă și
          penală conform Legii nr. 8/1996.
        </p>

        <h3>CAPITOLUL 6. Confidențialitate și Secret Profesional</h3>
        <p>
          Toate informațiile împărtășite în cadrul sesiunilor 1-la-1 sau prin
          formularele de evaluare sunt strict confidențiale, potrivit dispozițiilor
          art. 46-48 din Normele metodologice de aplicare a Legii nr. 213/2004.
        </p>
        <p>
          <strong>Limitele confidențialității:</strong> Furnizorul poate împărtăși
          informații confidențiale cu terți doar cu consimțământul scris al
          clientului, sau în situațiile excepționale justificate de lege
          (circumstanțe de iminentă vătămare fizică proprie, risc de
          automutilare/suicid, sau comiterea unei infracțiuni).
        </p>

        <h3>CAPITOLUL 7. Protecția Datelor cu Caracter Personal (GDPR)</h3>
        <p>
          <strong>Scopul prelucrării:</strong> Datele solicitate (Nume, Prenume,
          E-mail, Adresă) sunt utilizate exclusiv pentru facturarea serviciilor prin
          sistemul FGO / BT Go, procesarea securizată a plăților prin Stripe și
          livrarea accesului la programe.
        </p>
        <p>
          <strong>Stocarea datelor:</strong> Datele cu caracter personal și
          documentele profesionale vor fi păstrate în arhiva securizată a
          Furnizorului (atât online, cât și offline) pentru o perioadă de până la 10
          ani, conform reglementărilor legale în vigoare ale Colegiului Psihologilor.
        </p>
        <p>
          <strong>Drepturile utilizatorului:</strong> Conform Regulamentului (UE)
          2016/679, beneficiați de dreptul de acces, rectificare, ștergere sau
          restricționare a prelucrării datelor. Orice solicitare oficială poate fi
          trimisă la adresa contact@arhitecturasinelui.ro.
        </p>

        <div className="terms-actions">
          <Link className="btn" to={returnTo} state={returnState}>
            Am luat la cunoștință
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Terms
