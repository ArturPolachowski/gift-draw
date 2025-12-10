// i18n.js
(() => {
  const NAME_MAX = 30;
  const MESSAGE_MAX = 300;

  const currencyByLang = {
    pl: { code: "PLN", symbol: "zł" },
    en: { code: "USD", symbol: "$" },
    de: { code: "EUR", symbol: "€" },
    fr: { code: "EUR", symbol: "€" },
    es: { code: "EUR", symbol: "€" },
    it: { code: "EUR", symbol: "€" },
    pt: { code: "EUR", symbol: "€" },
    nl: { code: "EUR", symbol: "€" },
    sv: { code: "SEK", symbol: "kr" },
    cs: { code: "CZK", symbol: "Kč" },
    tr: { code: "TRY", symbol: "₺" },
    no: { code: "NOK", symbol: "kr" },
    da: { code: "DKK", symbol: "kr" },
    fi: { code: "EUR", symbol: "€" },
    hu: { code: "HUF", symbol: "Ft" },
    ro: { code: "RON", symbol: "lei" },
    uk: { code: "UAH", symbol: "₴" },
    el: { code: "EUR", symbol: "€" }
  };

  const translations = {
    pl: {
      appTitle: "Losowanie prezentów",
      subtitle: "Podaj liczbę osób, wpisz imiona i wylosuj, kto komu robi prezent.",
      step1Label: "Krok 1",
      step2Label: "Krok 2",
      step3Label: "Krok 3",
      labelCount: "Ile osób bierze udział?",
      createFields: "Utwórz pola na imiona",
      countHint: "Min. 2 osoby, max. 50. Imię: max. 30 znaków.",
      labelBudget: "Maksymalny budżet na prezent",
      budgetLabel: "Maksymalny budżet na prezent",
      budgetHint: "Opcjonalnie. Wpisz kwotę, np. 200.",
      budgetPlaceholder: "np. 200 {currency}",
      labelCustomTitle: "Tytuł wiadomości (opcjonalnie)",
      optionalTitleLabel: "Tytuł wiadomości (opcjonalnie)",
      labelCustomMessage: "Wiadomość (opcjonalnie, do 300 znaków)",
      optionalMessageLabel: "Wiadomość (opcjonalnie, do 300 znaków)",
      messageCount: "Pozostało: {left}",
      drawButton: "Wylosuj prezenty",
      clearNames: "Wyczyść imiona",
      error_needCount: "Podaj liczbę osób (co najmniej 2).",
      error_tooMany: "Maksymalnie obsługuję 50 osób.",
      error_notEnoughNameFields: "Najpierw utwórz pola na imiona (co najmniej 2 osoby).",
      error_emptyName: "Żadne imię nie może być puste.",
      error_tooLongName: 'Imię "{value}" ma więcej niż 30 znaków.',
      error_duplicateNames: "Imiona muszą być unikalne. Powtórzone: {duplicates}.",
      error_duplicateNamesList: "Imiona muszą być unikalne. Powtórzone: {list}.",
      resultTitle: "Wynik losowania:",
      sendEmail: "Wyślij e-mail",
      sharePng: "Udostępnij PNG",
      emailSubject: "Wynik losowania prezentów",
      emailBodyIntro: "Oto wynik naszego losowania prezentów:",
      budgetLine: "Maksymalny budżet: {value}",
      customTitleLine: "Tytuł: {value}",
      customMessageLine: "Wiadomość: {value}",
      namePlaceholder: "Imię osoby {index}",
      footerCredit: "Stworzone przez Artur Polachowski",
      createdBy: "Stworzone przez Artur Polachowski",
      shareSubtitle: "Podsumowanie losowania",
      copyText: "Kopiuj tekst",
      back: "Wróć",
      copiedToast: "Skopiowano do schowka"
    },

    en: {
      appTitle: "Gift Draw",
      subtitle: "Set the number of people, enter names and draw who buys a gift for whom.",
      step1Label: "Step 1",
      step2Label: "Step 2",
      step3Label: "Step 3",
      labelCount: "How many people take part?",
      createFields: "Create name fields",
      countHint: "Min. 2 people, max. 50. Name: up to 30 characters.",
      labelBudget: "Maximum gift budget",
      budgetLabel: "Maximum gift budget",
      budgetHint: "Optional. Enter an amount, e.g. 200.",
      budgetPlaceholder: "e.g. 200 {currency}",
      labelCustomTitle: "Message title (optional)",
      optionalTitleLabel: "Message title (optional)",
      labelCustomMessage: "Message (optional, up to 300 characters)",
      optionalMessageLabel: "Message (optional, up to 300 characters)",
      messageCount: "Remaining: {left}",
      drawButton: "Draw gifts",
      clearNames: "Clear names",
      error_needCount: "Enter the number of people (at least 2).",
      error_tooMany: "I can handle up to 50 people.",
      error_notEnoughNameFields: "Create the name fields first (at least 2 people).",
      error_emptyName: "No name can be empty.",
      error_tooLongName: 'The name "{value}" has more than 30 characters.',
      error_duplicateNames: "Names must be unique. Duplicates: {duplicates}.",
      error_duplicateNamesList: "Names must be unique. Duplicates: {list}.",
      resultTitle: "Draw result:",
      sendEmail: "Send e-mail",
      sharePng: "Share PNG",
      emailSubject: "Gift draw result",
      emailBodyIntro: "Here is the result of our gift draw:",
      budgetLine: "Maximum budget: {value}",
      customTitleLine: "Title: {value}",
      customMessageLine: "Message: {value}",
      namePlaceholder: "Person {index} name",
      footerCredit: "Created by Artur Polachowski",
      createdBy: "Created by Artur Polachowski",
      shareSubtitle: "Draw summary",
      copyText: "Copy text",
      back: "Back",
      copiedToast: "Copied to clipboard"
    },

    de: {
      appTitle: "Geschenk-Ziehung",
      subtitle: "Teilnehmerzahl festlegen, Namen eingeben und auslosen, wer wem ein Geschenk macht.",
      step1Label: "Schritt 1",
      step2Label: "Schritt 2",
      step3Label: "Schritt 3",
      labelCount: "Wie viele Personen machen mit?",
      createFields: "Namensfelder erstellen",
      countHint: "Min. 2 Personen, max. 50. Name: max. 30 Zeichen.",
      labelBudget: "Maximales Geschenkbudget",
      budgetLabel: "Maximales Geschenkbudget",
      budgetHint: "Optional. Betrag eingeben, z. B. 200.",
      budgetPlaceholder: "z. B. 200 {currency}",
      labelCustomTitle: "Nachrichtentitel (optional)",
      optionalTitleLabel: "Nachrichtentitel (optional)",
      labelCustomMessage: "Nachricht (optional, bis 300 Zeichen)",
      optionalMessageLabel: "Nachricht (optional, bis 300 Zeichen)",
      messageCount: "Verbleibend: {left}",
      drawButton: "Auslosen",
      clearNames: "Namen löschen",
      error_needCount: "Bitte gib die Anzahl der Personen an (mindestens 2).",
      error_tooMany: "Maximal 50 Personen werden unterstützt.",
      error_notEnoughNameFields: "Erstelle zuerst die Namensfelder (mindestens 2 Personen).",
      error_emptyName: "Kein Name darf leer sein.",
      error_tooLongName: 'Der Name "{value}" hat mehr als 30 Zeichen.',
      error_duplicateNames: "Die Namen müssen eindeutig sein. Duplikate: {duplicates}.",
      error_duplicateNamesList: "Die Namen müssen eindeutig sein. Duplikate: {list}.",
      resultTitle: "Ziehungsergebnis:",
      sendEmail: "E-Mail senden",
      sharePng: "PNG teilen",
      emailSubject: "Ergebnis der Geschenk-Ziehung",
      emailBodyIntro: "Hier ist das Ergebnis unserer Geschenk-Ziehung:",
      budgetLine: "Maximales Budget: {value}",
      customTitleLine: "Titel: {value}",
      customMessageLine: "Nachricht: {value}",
      namePlaceholder: "Name von Person {index}",
      footerCredit: "Erstellt von Artur Polachowski",
      createdBy: "Erstellt von Artur Polachowski",
      shareSubtitle: "Zusammenfassung",
      copyText: "Text kopieren",
      back: "Zurück",
      copiedToast: "In die Zwischenablage kopiert"
    },

    fr: {
      appTitle: "Tirage des cadeaux",
      subtitle: "Indique le nombre de personnes, saisis les prénoms et tire au sort qui offre à qui.",
      step1Label: "Étape 1",
      step2Label: "Étape 2",
      step3Label: "Étape 3",
      labelCount: "Combien de personnes participent ?",
      createFields: "Créer les champs de prénom",
      countHint: "Min. 2 personnes, max. 50. Prénom : 30 caractères max.",
      labelBudget: "Budget maximum du cadeau",
      budgetLabel: "Budget maximum du cadeau",
      budgetHint: "Optionnel. Saisis un montant, ex. 200.",
      budgetPlaceholder: "ex. 200 {currency}",
      labelCustomTitle: "Titre du message (optionnel)",
      optionalTitleLabel: "Titre du message (optionnel)",
      labelCustomMessage: "Message (optionnel, jusqu’à 300 caractères)",
      optionalMessageLabel: "Message (optionnel, jusqu’à 300 caractères)",
      messageCount: "Restant : {left}",
      drawButton: "Lancer le tirage",
      clearNames: "Effacer les prénoms",
      error_needCount: "Indique le nombre de personnes (au moins 2).",
      error_tooMany: "Je peux gérer jusqu’à 50 personnes.",
      error_notEnoughNameFields: "Crée d’abord les champs de prénoms (au moins 2 personnes).",
      error_emptyName: "Aucun prénom ne peut être vide.",
      error_tooLongName: 'Le prénom « {value} » dépasse 30 caractères.',
      error_duplicateNames: "Les prénoms doivent être uniques. Doublons : {duplicates}.",
      error_duplicateNamesList: "Les prénoms doivent être uniques. Doublons : {list}.",
      resultTitle: "Résultat du tirage :",
      sendEmail: "Envoyer un e-mail",
      sharePng: "Partager PNG",
      emailSubject: "Résultat du tirage des cadeaux",
      emailBodyIntro: "Voici le résultat de notre tirage des cadeaux :",
      budgetLine: "Budget maximum : {value}",
      customTitleLine: "Titre : {value}",
      customMessageLine: "Message : {value}",
      namePlaceholder: "Prénom de la personne {index}",
      footerCredit: "Créé par Artur Polachowski",
      createdBy: "Créé par Artur Polachowski",
      shareSubtitle: "Résumé du tirage",
      copyText: "Copier le texte",
      back: "Retour",
      copiedToast: "Copié dans le presse-papiers"
    },

    es: {
      appTitle: "Sorteo de regalos",
      subtitle: "Indica cuántas personas participan, escribe los nombres y sortea quién regala a quién.",
      step1Label: "Paso 1",
      step2Label: "Paso 2",
      step3Label: "Paso 3",
      labelCount: "¿Cuántas personas participan?",
      createFields: "Crear campos de nombres",
      countHint: "Mín. 2 personas, máx. 50. Nombre: hasta 30 caracteres.",
      labelBudget: "Presupuesto máximo del regalo",
      budgetLabel: "Presupuesto máximo del regalo",
      budgetHint: "Opcional. Escribe un importe, p. ej. 200.",
      budgetPlaceholder: "p. ej. 200 {currency}",
      labelCustomTitle: "Título del mensaje (opcional)",
      optionalTitleLabel: "Título del mensaje (opcional)",
      labelCustomMessage: "Mensaje (opcional, hasta 300 caracteres)",
      optionalMessageLabel: "Mensaje (opcional, hasta 300 caracteres)",
      messageCount: "Restante: {left}",
      drawButton: "Sortear regalos",
      clearNames: "Borrar nombres",
      error_needCount: "Indica el número de personas (al menos 2).",
      error_tooMany: "Puedo gestionar hasta 50 personas.",
      error_notEnoughNameFields: "Primero crea los campos de nombres (al menos 2 personas).",
      error_emptyName: "Ningún nombre puede estar vacío.",
      error_tooLongName: 'El nombre "{value}" tiene más de 30 caracteres.',
      error_duplicateNames: "Los nombres deben ser únicos. Duplicados: {duplicates}.",
      error_duplicateNamesList: "Los nombres deben ser únicos. Duplicados: {list}.",
      resultTitle: "Resultado del sorteo:",
      sendEmail: "Enviar e-mail",
      sharePng: "Compartir PNG",
      emailSubject: "Resultado del sorteo de regalos",
      emailBodyIntro: "Este es el resultado de nuestro sorteo de regalos:",
      budgetLine: "Presupuesto máximo: {value}",
      customTitleLine: "Título: {value}",
      customMessageLine: "Mensaje: {value}",
      namePlaceholder: "Nombre de la persona {index}",
      footerCredit: "Creado por Artur Polachowski",
      createdBy: "Creado por Artur Polachowski",
      shareSubtitle: "Resumen del sorteo",
      copyText: "Copiar texto",
      back: "Atrás",
      copiedToast: "Copiado al portapapeles"
    },

    it: {
      appTitle: "Estrazione dei regali",
      subtitle: "Imposta il numero di persone, inserisci i nomi e sorteggia chi fa il regalo a chi.",
      step1Label: "Passo 1",
      step2Label: "Passo 2",
      step3Label: "Passo 3",
      labelCount: "Quante persone partecipano?",
      createFields: "Crea i campi per i nomi",
      countHint: "Min. 2 persone, max 50. Nome: massimo 30 caratteri.",
      labelBudget: "Budget massimo del regalo",
      budgetLabel: "Budget massimo del regalo",
      budgetHint: "Opzionale. Inserisci un importo, es. 200.",
      budgetPlaceholder: "es. 200 {currency}",
      labelCustomTitle: "Titolo del messaggio (opzionale)",
      optionalTitleLabel: "Titolo del messaggio (opzionale)",
      labelCustomMessage: "Messaggio (opzionale, fino a 300 caratteri)",
      optionalMessageLabel: "Messaggio (opzionale, fino a 300 caratteri)",
      messageCount: "Rimanenti: {left}",
      drawButton: "Estrai i regali",
      clearNames: "Pulisci nomi",
      error_needCount: "Inserisci il numero di persone (almeno 2).",
      error_tooMany: "Posso gestire fino a 50 persone.",
      error_notEnoughNameFields: "Crea prima i campi per i nomi (almeno 2 persone).",
      error_emptyName: "Nessun nome può essere vuoto.",
      error_tooLongName: 'Il nome "{value}" supera i 30 caratteri.',
      error_duplicateNames: "I nomi devono essere unici. Duplicati: {duplicates}.",
      error_duplicateNamesList: "I nomi devono essere unici. Duplicati: {list}.",
      resultTitle: "Risultato dell’estrazione:",
      sendEmail: "Invia e-mail",
      sharePng: "Condividi PNG",
      emailSubject: "Risultato estrazione regali",
      emailBodyIntro: "Ecco il risultato della nostra estrazione dei regali:",
      budgetLine: "Budget massimo: {value}",
      customTitleLine: "Titolo: {value}",
      customMessageLine: "Messaggio: {value}",
      namePlaceholder: "Nome della persona {index}",
      footerCredit: "Creato da Artur Polachowski",
      createdBy: "Creato da Artur Polachowski",
      shareSubtitle: "Riepilogo",
      copyText: "Copia testo",
      back: "Indietro",
      copiedToast: "Copiato negli appunti"
    },

    pt: {
      appTitle: "Sorteio de presentes",
      subtitle: "Defina o número de pessoas, escreva os nomes e sorteie quem dá presente para quem.",
      step1Label: "Passo 1",
      step2Label: "Passo 2",
      step3Label: "Passo 3",
      labelCount: "Quantas pessoas participam?",
      createFields: "Criar campos de nomes",
      countHint: "Mín. 2 pessoas, máx. 50. Nome: até 30 caracteres.",
      labelBudget: "Orçamento máximo do presente",
      budgetLabel: "Orçamento máximo do presente",
      budgetHint: "Opcional. Insira um valor, ex. 200.",
      budgetPlaceholder: "ex. 200 {currency}",
      labelCustomTitle: "Título da mensagem (opcional)",
      optionalTitleLabel: "Título da mensagem (opcional)",
      labelCustomMessage: "Mensagem (opcional, até 300 caracteres)",
      optionalMessageLabel: "Mensagem (opcional, até 300 caracteres)",
      messageCount: "Restante: {left}",
      drawButton: "Sortear presentes",
      clearNames: "Limpar nomes",
      error_needCount: "Informe o número de pessoas (pelo menos 2).",
      error_tooMany: "Posso lidar com até 50 pessoas.",
      error_notEnoughNameFields: "Crie primeiro os campos de nomes (pelo menos 2 pessoas).",
      error_emptyName: "Nenhum nome pode ficar vazio.",
      error_tooLongName: 'O nome "{value}" tem mais de 30 caracteres.',
      error_duplicateNames: "Os nomes devem ser únicos. Duplicados: {duplicates}.",
      error_duplicateNamesList: "Os nomes devem ser únicos. Duplicados: {list}.",
      resultTitle: "Resultado do sorteio:",
      sendEmail: "Enviar e-mail",
      sharePng: "Compartilhar PNG",
      emailSubject: "Resultado do sorteio de presentes",
      emailBodyIntro: "Aqui está o resultado do nosso sorteio de presentes:",
      budgetLine: "Orçamento máximo: {value}",
      customTitleLine: "Título: {value}",
      customMessageLine: "Mensagem: {value}",
      namePlaceholder: "Nome da pessoa {index}",
      footerCredit: "Criado por Artur Polachowski",
      createdBy: "Criado por Artur Polachowski",
      shareSubtitle: "Resumo do sorteio",
      copyText: "Copiar texto",
      back: "Voltar",
      copiedToast: "Copiado para a área de transferência"
    },

    nl: {
      appTitle: "Cadeauloting",
      subtitle: "Stel het aantal personen in, vul de namen in en loot wie voor wie een cadeau koopt.",
      step1Label: "Stap 1",
      step2Label: "Stap 2",
      step3Label: "Stap 3",
      labelCount: "Met hoeveel personen doen jullie mee?",
      createFields: "Naamvelden maken",
      countHint: "Min. 2 personen, max. 50. Naam: max. 30 tekens.",
      labelBudget: "Maximaal cadeaubudget",
      budgetLabel: "Maximaal cadeaubudget",
      budgetHint: "Optioneel. Vul een bedrag in, bijv. 200.",
      budgetPlaceholder: "bijv. 200 {currency}",
      labelCustomTitle: "Titel van bericht (optioneel)",
      optionalTitleLabel: "Titel van bericht (optioneel)",
      labelCustomMessage: "Bericht (optioneel, tot 300 tekens)",
      optionalMessageLabel: "Bericht (optioneel, tot 300 tekens)",
      messageCount: "Resterend: {left}",
      drawButton: "Cadeaus loten",
      clearNames: "Namen wissen",
      error_needCount: "Vul het aantal personen in (minstens 2).",
      error_tooMany: "Ik kan tot 50 personen aan.",
      error_notEnoughNameFields: "Maak eerst de naamvelden (minstens 2 personen).",
      error_emptyName: "Geen enkel naamveld mag leeg zijn.",
      error_tooLongName: 'De naam "{value}" heeft meer dan 30 tekens.',
      error_duplicateNames: "Namen moeten uniek zijn. Dubbelen: {duplicates}.",
      error_duplicateNamesList: "Namen moeten uniek zijn. Dubbelen: {list}.",
      resultTitle: "Uitslag van de loting:",
      sendEmail: "E-mail versturen",
      sharePng: "PNG delen",
      emailSubject: "Uitslag cadeauloting",
      emailBodyIntro: "Dit is de uitslag van onze cadeauloting:",
      budgetLine: "Maximaal budget: {value}",
      customTitleLine: "Titel: {value}",
      customMessageLine: "Bericht: {value}",
      namePlaceholder: "Naam van persoon {index}",
      footerCredit: "Gemaakt door Artur Polachowski",
      createdBy: "Gemaakt door Artur Polachowski",
      shareSubtitle: "Samenvatting",
      copyText: "Tekst kopiëren",
      back: "Terug",
      copiedToast: "Gekopieerd naar klembord"
    },

    sv: {
      appTitle: "Presentdragning",
      subtitle: "Välj antal personer, skriv in namnen och dra vem som köper till vem.",
      step1Label: "Steg 1",
      step2Label: "Steg 2",
      step3Label: "Steg 3",
      labelCount: "Hur många personer är med?",
      createFields: "Skapa namnfält",
      countHint: "Minst 2 personer, högst 50. Namn: max 30 tecken.",
      labelBudget: "Maximal presentbudget",
      budgetLabel: "Maximal presentbudget",
      budgetHint: "Valfritt. Skriv ett belopp, t.ex. 200.",
      budgetPlaceholder: "t.ex. 200 {currency}",
      labelCustomTitle: "Meddelandetitel (valfritt)",
      optionalTitleLabel: "Meddelandetitel (valfritt)",
      labelCustomMessage: "Meddelande (valfritt, upp till 300 tecken)",
      optionalMessageLabel: "Meddelande (valfritt, upp till 300 tecken)",
      messageCount: "Kvar: {left}",
      drawButton: "Dra presenter",
      clearNames: "Rensa namn",
      error_needCount: "Ange antal personer (minst 2).",
      error_tooMany: "Jag klarar upp till 50 personer.",
      error_notEnoughNameFields: "Skapa först namnfälten (minst 2 personer).",
      error_emptyName: "Inget namn får vara tomt.",
      error_tooLongName: 'Namnet "{value}" har fler än 30 tecken.',
      error_duplicateNames: "Namnen måste vara unika. Dubbletter: {duplicates}.",
      error_duplicateNamesList: "Namnen måste vara unika. Dubbletter: {list}.",
      resultTitle: "Resultat av dragningen:",
      sendEmail: "Skicka e-post",
      sharePng: "Dela PNG",
      emailSubject: "Resultat – presentdragning",
      emailBodyIntro: "Här är resultatet av vår presentdragning:",
      budgetLine: "Maximal budget: {value}",
      customTitleLine: "Titel: {value}",
      customMessageLine: "Meddelande: {value}",
      namePlaceholder: "Namn på person {index}",
      footerCredit: "Skapad av Artur Polachowski",
      createdBy: "Skapad av Artur Polachowski",
      shareSubtitle: "Sammanfattning",
      copyText: "Kopiera text",
      back: "Tillbaka",
      copiedToast: "Kopierat"
    },

    cs: {
      appTitle: "Losování dárků",
      subtitle: "Zadej počet osob, napiš jména a vylosuj, kdo komu dává dárek.",
      step1Label: "Krok 1",
      step2Label: "Krok 2",
      step3Label: "Krok 3",
      labelCount: "Kolik osob se účastní?",
      createFields: "Vytvořit pole pro jména",
      countHint: "Min. 2 osoby, max. 50. Jméno: max. 30 znaků.",
      labelBudget: "Maximální rozpočet na dárek",
      budgetLabel: "Maximální rozpočet na dárek",
      budgetHint: "Volitelné. Zadej částku, např. 200.",
      budgetPlaceholder: "např. 200 {currency}",
      labelCustomTitle: "Nadpis zprávy (volitelné)",
      optionalTitleLabel: "Nadpis zprávy (volitelné)",
      labelCustomMessage: "Zpráva (volitelné, do 300 znaků)",
      optionalMessageLabel: "Zpráva (volitelné, do 300 znaků)",
      messageCount: "Zbývá: {left}",
      drawButton: "Vylosovat dárky",
      clearNames: "Vymazat jména",
      error_needCount: "Zadej počet osob (alespoň 2).",
      error_tooMany: "Umím pracovat až s 50 osobami.",
      error_notEnoughNameFields: "Nejdřív vytvoř pole pro jména (alespoň 2 osoby).",
      error_emptyName: "Žádné jméno nesmí být prázdné.",
      error_tooLongName: 'Jméno „{value}“ má více než 30 znaků.',
      error_duplicateNames: "Jména musí být jedinečná. Duplikáty: {duplicates}.",
      error_duplicateNamesList: "Jména musí být jedinečná. Duplikáty: {list}.",
      resultTitle: "Výsledek losování:",
      sendEmail: "Odeslat e-mail",
      sharePng: "Sdílet PNG",
      emailSubject: "Výsledek losování dárků",
      emailBodyIntro: "Toto je výsledek našeho losování dárků:",
      budgetLine: "Maximální rozpočet: {value}",
      customTitleLine: "Nadpis: {value}",
      customMessageLine: "Zpráva: {value}",
      namePlaceholder: "Jméno osoby {index}",
      footerCredit: "Vytvořil Artur Polachowski",
      createdBy: "Vytvořil Artur Polachowski",
      shareSubtitle: "Shrnutí",
      copyText: "Kopírovat text",
      back: "Zpět",
      copiedToast: "Zkopírováno"
    },

    tr: {
      appTitle: "Hediye Çekilişi",
      subtitle: "Kişi sayısını belirle, isimleri gir ve kimin kime hediye alacağını çek.",
      step1Label: "Adım 1",
      step2Label: "Adım 2",
      step3Label: "Adım 3",
      labelCount: "Kaç kişi katılıyor?",
      createFields: "İsim alanlarını oluştur",
      countHint: "Min. 2 kişi, maks. 50. İsim: en fazla 30 karakter.",
      labelBudget: "Maksimum hediye bütçesi",
      budgetLabel: "Maksimum hediye bütçesi",
      budgetHint: "İsteğe bağlı. Tutar gir, ör. 200.",
      budgetPlaceholder: "ör. 200 {currency}",
      labelCustomTitle: "Mesaj başlığı (isteğe bağlı)",
      optionalTitleLabel: "Mesaj başlığı (isteğe bağlı)",
      labelCustomMessage: "Mesaj (isteğe bağlı, 300 karaktere kadar)",
      optionalMessageLabel: "Mesaj (isteğe bağlı, 300 karaktere kadar)",
      messageCount: "Kalan: {left}",
      drawButton: "Hediye çek",
      clearNames: "İsimleri temizle",
      error_needCount: "Kişi sayısını gir (en az 2).",
      error_tooMany: "En fazla 50 kişi desteklenir.",
      error_notEnoughNameFields: "Önce isim alanlarını oluştur (en az 2 kişi).",
      error_emptyName: "Hiçbir isim boş olamaz.",
      error_tooLongName: '"{value}" 30 karakterden uzun.',
      error_duplicateNames: "İsimler benzersiz olmalı. Tekrarlar: {duplicates}.",
      error_duplicateNamesList: "İsimler benzersiz olmalı. Tekrarlar: {list}.",
      resultTitle: "Çekiliş sonucu:",
      sendEmail: "E-posta gönder",
      sharePng: "PNG paylaş",
      emailSubject: "Hediye çekilişi sonucu",
      emailBodyIntro: "Hediye çekilişimizin sonucu:",
      budgetLine: "Maksimum bütçe: {value}",
      customTitleLine: "Başlık: {value}",
      customMessageLine: "Mesaj: {value}",
      namePlaceholder: "{index}. kişinin adı",
      footerCredit: "Artur Polachowski tarafından oluşturuldu",
      createdBy: "Artur Polachowski tarafından oluşturuldu",
      shareSubtitle: "Çekiliş özeti",
      copyText: "Metni kopyala",
      back: "Geri",
      copiedToast: "Panoya kopyalandı"
    },

    no: {
      appTitle: "Gave-trekning",
      subtitle: "Velg antall deltakere, skriv inn navn og trekk hvem som gir til hvem.",
      step1Label: "Trinn 1",
      step2Label: "Trinn 2",
      step3Label: "Trinn 3",
      labelCount: "Hvor mange deltar?",
      createFields: "Opprett navnefelt",
      countHint: "Min. 2 personer, maks. 50. Navn: opptil 30 tegn.",
      labelBudget: "Maksimalt gavebudsjett",
      budgetLabel: "Maksimalt gavebudsjett",
      budgetHint: "Valgfritt. Skriv inn beløp, f.eks. 200.",
      budgetPlaceholder: "f.eks. 200 {currency}",
      labelCustomTitle: "Meldingstittel (valgfritt)",
      optionalTitleLabel: "Meldingstittel (valgfritt)",
      labelCustomMessage: "Melding (valgfritt, opptil 300 tegn)",
      optionalMessageLabel: "Melding (valgfritt, opptil 300 tegn)",
      messageCount: "Igjen: {left}",
      drawButton: "Trekk gaver",
      clearNames: "Tøm navn",
      error_needCount: "Oppgi antall personer (minst 2).",
      error_tooMany: "Jeg støtter opptil 50 personer.",
      error_notEnoughNameFields: "Opprett navnefeltene først (minst 2 personer).",
      error_emptyName: "Ingen navn kan være tomme.",
      error_tooLongName: 'Navnet "{value}" er over 30 tegn.',
      error_duplicateNames: "Navn må være unike. Duplikater: {duplicates}.",
      error_duplicateNamesList: "Navn må være unike. Duplikater: {list}.",
      resultTitle: "Resultat:",
      sendEmail: "Send e-post",
      sharePng: "Del PNG",
      emailSubject: "Resultat av gave-trekning",
      emailBodyIntro: "Her er resultatet av gave-trekningen:",
      budgetLine: "Maksimalt budsjett: {value}",
      customTitleLine: "Tittel: {value}",
      customMessageLine: "Melding: {value}",
      namePlaceholder: "Navn på person {index}",
      footerCredit: "Laget av Artur Polachowski",
      createdBy: "Laget av Artur Polachowski",
      shareSubtitle: "Oppsummering",
      copyText: "Kopier tekst",
      back: "Tilbake",
      copiedToast: "Kopiert til utklippstavlen"
    },

    da: {
      appTitle: "Gave-lodtrækning",
      subtitle: "Vælg antal deltagere, indtast navne og træk hvem der giver til hvem.",
      step1Label: "Trin 1",
      step2Label: "Trin 2",
      step3Label: "Trin 3",
      labelCount: "Hvor mange deltager?",
      createFields: "Opret navnefelter",
      countHint: "Min. 2 personer, maks. 50. Navn: op til 30 tegn.",
      labelBudget: "Maksimalt gavebudget",
      budgetLabel: "Maksimalt gavebudget",
      budgetHint: "Valgfrit. Indtast beløb, fx 200.",
      budgetPlaceholder: "fx 200 {currency}",
      labelCustomTitle: "Beskedtitel (valgfrit)",
      optionalTitleLabel: "Beskedtitel (valgfrit)",
      labelCustomMessage: "Besked (valgfrit, op til 300 tegn)",
      optionalMessageLabel: "Besked (valgfrit, op til 300 tegn)",
      messageCount: "Tilbage: {left}",
      drawButton: "Træk gaver",
      clearNames: "Ryd navne",
      error_needCount: "Angiv antal personer (mindst 2).",
      error_tooMany: "Jeg kan håndtere op til 50 personer.",
      error_notEnoughNameFields: "Opret først navnefelterne (mindst 2 personer).",
      error_emptyName: "Ingen navne må være tomme.",
      error_tooLongName: 'Navnet "{value}" er over 30 tegn.',
      error_duplicateNames: "Navne skal være unikke. Dubletter: {duplicates}.",
      error_duplicateNamesList: "Navne skal være unikke. Dubletter: {list}.",
      resultTitle: "Resultat:",
      sendEmail: "Send e-mail",
      sharePng: "Del PNG",
      emailSubject: "Resultat af gave-lodtrækning",
      emailBodyIntro: "Her er resultatet af vores gave-lodtrækning:",
      budgetLine: "Maksimalt budget: {value}",
      customTitleLine: "Titel: {value}",
      customMessageLine: "Besked: {value}",
      namePlaceholder: "Navn på person {index}",
      footerCredit: "Lavet af Artur Polachowski",
      createdBy: "Lavet af Artur Polachowski",
      shareSubtitle: "Opsummering",
      copyText: "Kopiér tekst",
      back: "Tilbage",
      copiedToast: "Kopieret til udklipsholder"
    },

    fi: {
      appTitle: "Lahja-arvonta",
      subtitle: "Valitse osallistujamäärä, syötä nimet ja arvo kuka antaa kenelle.",
      step1Label: "Vaihe 1",
      step2Label: "Vaihe 2",
      step3Label: "Vaihe 3",
      labelCount: "Kuinka monta osallistuu?",
      createFields: "Luo nimikentät",
      countHint: "Min. 2 henkilöä, maks. 50. Nimi: enintään 30 merkkiä.",
      labelBudget: "Maksimilahjabudjetti",
      budgetLabel: "Maksimilahjabudjetti",
      budgetHint: "Valinnainen. Syötä summa, esim. 200.",
      budgetPlaceholder: "esim. 200 {currency}",
      labelCustomTitle: "Viestin otsikko (valinnainen)",
      optionalTitleLabel: "Viestin otsikko (valinnainen)",
      labelCustomMessage: "Viesti (valinnainen, enintään 300 merkkiä)",
      optionalMessageLabel: "Viesti (valinnainen, enintään 300 merkkiä)",
      messageCount: "Jäljellä: {left}",
      drawButton: "Arvo lahjat",
      clearNames: "Tyhjennä nimet",
      error_needCount: "Anna henkilömäärä (vähintään 2).",
      error_tooMany: "Enintään 50 henkilöä.",
      error_notEnoughNameFields: "Luo nimikentät ensin (vähintään 2).",
      error_emptyName: "Yksikään nimi ei voi olla tyhjä.",
      error_tooLongName: '"{value}" on yli 30 merkkiä.',
      error_duplicateNames: "Nimien tulee olla uniikkeja. Duplikaatit: {duplicates}.",
      error_duplicateNamesList: "Nimien tulee olla uniikkeja. Duplikaatit: {list}.",
      resultTitle: "Arvonnan tulos:",
      sendEmail: "Lähetä sähköposti",
      sharePng: "Jaa PNG",
      emailSubject: "Lahja-arvonnan tulos",
      emailBodyIntro: "Tässä on lahja-arvontamme tulos:",
      budgetLine: "Maksimibudjetti: {value}",
      customTitleLine: "Otsikko: {value}",
      customMessageLine: "Viesti: {value}",
      namePlaceholder: "Henkilö {index} nimi",
      footerCredit: "Tekijä: Artur Polachowski",
      createdBy: "Tekijä: Artur Polachowski",
      shareSubtitle: "Yhteenveto",
      copyText: "Kopioi teksti",
      back: "Takaisin",
      copiedToast: "Kopioitu leikepöydälle"
    },

    hu: {
      appTitle: "Ajándéksorsolás",
      subtitle: "Add meg a résztvevők számát, írd be a neveket, és sorsold ki, ki kinek ad ajándékot.",
      step1Label: "1. lépés",
      step2Label: "2. lépés",
      step3Label: "3. lépés",
      labelCount: "Hányan vesznek részt?",
      createFields: "Névmezők létrehozása",
      countHint: "Min. 2 fő, max. 50. Név: max. 30 karakter.",
      labelBudget: "Maximális ajándékkeret",
      budgetLabel: "Maximális ajándékkeret",
      budgetHint: "Opcionális. Adj meg összeget, pl. 200.",
      budgetPlaceholder: "pl. 200 {currency}",
      labelCustomTitle: "Üzenet címe (opcionális)",
      optionalTitleLabel: "Üzenet címe (opcionális)",
      labelCustomMessage: "Üzenet (opcionális, 300 karakterig)",
      optionalMessageLabel: "Üzenet (opcionális, 300 karakterig)",
      messageCount: "Hátralévő: {left}",
      drawButton: "Sorsolás",
      clearNames: "Nevek törlése",
      error_needCount: "Add meg a létszámot (legalább 2).",
      error_tooMany: "Legfeljebb 50 fő támogatott.",
      error_notEnoughNameFields: "Előbb hozd létre a névmezőket (legalább 2).",
      error_emptyName: "Egyik név sem lehet üres.",
      error_tooLongName: '"{value}" több mint 30 karakter.',
      error_duplicateNames: "A nevek legyenek egyediek. Duplikátumok: {duplicates}.",
      error_duplicateNamesList: "A nevek legyenek egyediek. Duplikátumok: {list}.",
      resultTitle: "Sorsolás eredménye:",
      sendEmail: "E-mail küldése",
      sharePng: "PNG megosztása",
      emailSubject: "Ajándéksorsolás eredménye",
      emailBodyIntro: "Itt van az ajándéksorsolás eredménye:",
      budgetLine: "Maximális keret: {value}",
      customTitleLine: "Cím: {value}",
      customMessageLine: "Üzenet: {value}",
      namePlaceholder: "{index}. személy neve",
      footerCredit: "Készítette: Artur Polachowski",
      createdBy: "Készítette: Artur Polachowski",
      shareSubtitle: "Összefoglaló",
      copyText: "Szöveg másolása",
      back: "Vissza",
      copiedToast: "Vágólapra másolva"
    },

    ro: {
      appTitle: "Tragere la sorți a cadourilor",
      subtitle: "Setează numărul de persoane, introdu numele și trage la sorți cine oferă cui.",
      step1Label: "Pasul 1",
      step2Label: "Pasul 2",
      step3Label: "Pasul 3",
      labelCount: "Câte persoane participă?",
      createFields: "Creează câmpuri pentru nume",
      countHint: "Min. 2 persoane, max. 50. Nume: max. 30 caractere.",
      labelBudget: "Buget maxim pentru cadou",
      budgetLabel: "Buget maxim pentru cadou",
      budgetHint: "Opțional. Introdu o sumă, ex. 200.",
      budgetPlaceholder: "ex. 200 {currency}",
      labelCustomTitle: "Titlul mesajului (opțional)",
      optionalTitleLabel: "Titlul mesajului (opțional)",
      labelCustomMessage: "Mesaj (opțional, până la 300 caractere)",
      optionalMessageLabel: "Mesaj (opțional, până la 300 caractere)",
      messageCount: "Rămas: {left}",
      drawButton: "Trage la sorți",
      clearNames: "Șterge numele",
      error_needCount: "Introdu numărul de persoane (cel puțin 2).",
      error_tooMany: "Pot gestiona până la 50 de persoane.",
      error_notEnoughNameFields: "Creează mai întâi câmpurile (cel puțin 2).",
      error_emptyName: "Niciun nume nu poate fi gol.",
      error_tooLongName: 'Numele "{value}" are peste 30 caractere.',
      error_duplicateNames: "Numele trebuie să fie unice. Dubluri: {duplicates}.",
      error_duplicateNamesList: "Numele trebuie să fie unice. Dubluri: {list}.",
      resultTitle: "Rezultatul tragerii:",
      sendEmail: "Trimite e-mail",
      sharePng: "Distribuie PNG",
      emailSubject: "Rezultatul tragerii la sorți",
      emailBodyIntro: "Iată rezultatul tragerii la sorți a cadourilor:",
      budgetLine: "Buget maxim: {value}",
      customTitleLine: "Titlu: {value}",
      customMessageLine: "Mesaj: {value}",
      namePlaceholder: "Numele persoanei {index}",
      footerCredit: "Creat de Artur Polachowski",
      createdBy: "Creat de Artur Polachowski",
      shareSubtitle: "Rezumat",
      copyText: "Copiază textul",
      back: "Înapoi",
      copiedToast: "Copiat în clipboard"
    },

    uk: {
      appTitle: "Розіграш подарунків",
      subtitle: "Вкажіть кількість учасників, введіть імена та розіграйте, хто кому дарує.",
      step1Label: "Крок 1",
      step2Label: "Крок 2",
      step3Label: "Крок 3",
      labelCount: "Скільки людей беруть участь?",
      createFields: "Створити поля імен",
      countHint: "Мін. 2, макс. 50. Ім’я: до 30 символів.",
      labelBudget: "Максимальний бюджет подарунка",
      budgetLabel: "Максимальний бюджет подарунка",
      budgetHint: "Необов’язково. Введіть суму, напр. 200.",
      budgetPlaceholder: "напр. 200 {currency}",
      labelCustomTitle: "Заголовок (необов’язково)",
      optionalTitleLabel: "Заголовок (необов’язково)",
      labelCustomMessage: "Повідомлення (необов’язково, до 300 символів)",
      optionalMessageLabel: "Повідомлення (необов’язково, до 300 символів)",
      messageCount: "Залишилось: {left}",
      drawButton: "Розіграти",
      clearNames: "Очистити імена",
      error_needCount: "Вкажіть кількість людей (мінімум 2).",
      error_tooMany: "Підтримується до 50 людей.",
      error_notEnoughNameFields: "Спочатку створіть поля імен (мінімум 2).",
      error_emptyName: "Жодне ім’я не може бути порожнім.",
      error_tooLongName: 'Ім’я "{value}" довше 30 символів.',
      error_duplicateNames: "Імена мають бути унікальні. Повтори: {duplicates}.",
      error_duplicateNamesList: "Імена мають бути унікальні. Повтори: {list}.",
      resultTitle: "Результат розіграшу:",
      sendEmail: "Надіслати e-mail",
      sharePng: "Поділитись PNG",
      emailSubject: "Результат розіграшу подарунків",
      emailBodyIntro: "Ось результат нашого розіграшу подарунків:",
      budgetLine: "Максимальний бюджет: {value}",
      customTitleLine: "Заголовок: {value}",
      customMessageLine: "Повідомлення: {value}",
      namePlaceholder: "Ім’я учасника {index}",
      footerCredit: "Створено Artur Polachowski",
      createdBy: "Створено Artur Polachowski",
      shareSubtitle: "Підсумок",
      copyText: "Скопіювати текст",
      back: "Назад",
      copiedToast: "Скопійовано в буфер"
    },

    el: {
      appTitle: "Κλήρωση δώρων",
      subtitle: "Ορίστε τον αριθμό συμμετεχόντων, γράψτε ονόματα και κληρώστε ποιος δίνει σε ποιον.",
      step1Label: "Βήμα 1",
      step2Label: "Βήμα 2",
      step3Label: "Βήμα 3",
      labelCount: "Πόσα άτομα συμμετέχουν;",
      createFields: "Δημιουργία πεδίων ονομάτων",
      countHint: "Ελάχ. 2, μέγ. 50. Όνομα: έως 30 χαρακτήρες.",
      labelBudget: "Μέγιστος προϋπολογισμός δώρου",
      budgetLabel: "Μέγιστος προϋπολογισμός δώρου",
      budgetHint: "Προαιρετικό. Βάλτε ποσό, π.χ. 200.",
      budgetPlaceholder: "π.χ. 200 {currency}",
      labelCustomTitle: "Τίτλος μηνύματος (προαιρετικό)",
      optionalTitleLabel: "Τίτλος μηνύματος (προαιρετικό)",
      labelCustomMessage: "Μήνυμα (προαιρετικό, έως 300 χαρακτήρες)",
      optionalMessageLabel: "Μήνυμα (προαιρετικό, έως 300 χαρακτήρες)",
      messageCount: "Απομένουν: {left}",
      drawButton: "Κλήρωση",
      clearNames: "Καθαρισμός ονομάτων",
      error_needCount: "Δώστε αριθμό ατόμων (τουλάχιστον 2).",
      error_tooMany: "Υποστηρίζονται έως 50 άτομα.",
      error_notEnoughNameFields: "Δημιουργήστε πρώτα τα πεδία (τουλάχιστον 2).",
      error_emptyName: "Κανένα όνομα δεν μπορεί να είναι κενό.",
      error_tooLongName: 'Το όνομα "{value}" ξεπερνά τους 30 χαρακτήρες.',
      error_duplicateNames: "Τα ονόματα πρέπει να είναι μοναδικά. Διπλά: {duplicates}.",
      error_duplicateNamesList: "Τα ονόματα πρέπει να είναι μοναδικά. Διπλά: {list}.",
      resultTitle: "Αποτέλεσμα κλήρωσης:",
      sendEmail: "Αποστολή e-mail",
      sharePng: "Κοινοποίηση PNG",
      emailSubject: "Αποτέλεσμα κλήρωσης δώρων",
      emailBodyIntro: "Αυτό είναι το αποτέλεσμα της κλήρωσης δώρων:",
      budgetLine: "Μέγιστος προϋπολογισμός: {value}",
      customTitleLine: "Τίτλος: {value}",
      customMessageLine: "Μήνυμα: {value}",
      namePlaceholder: "Όνομα ατόμου {index}",
      footerCredit: "Δημιουργήθηκε από Artur Polachowski",
      createdBy: "Δημιουργήθηκε από Artur Polachowski",
      shareSubtitle: "Σύνοψη",
      copyText: "Αντιγραφή κειμένου",
      back: "Πίσω",
      copiedToast: "Αντιγράφηκε στο πρόχειρο"
    }
  };

  function t(lang, key, params = {}) {
    const dict = translations[lang] || translations.pl || {};
    let text = dict[key] ?? translations.pl?.[key] ?? key;
    for (const p of Object.keys(params)) {
      text = text.replace(`{${p}}`, params[p]);
    }
    return text;
  }

  function getCurrency(lang) {
    return currencyByLang[lang] || currencyByLang.en;
  }

  (function() {
    // Prosty, ale zamaskowany dekoder (ROT + Base64)
    function decodePayload(b64, rot) {
      const txt = atob(b64)
        .split("")
        .map(c => String.fromCharCode(c.charCodeAt(0) - rot))
        .join("");
      return txt;
    }
  
    // Wszystkie zaszyfrowane stringi – nic nie zdradzają
    const SECRET_PACK = {
      ex_banner_a:      { b: "ZlJlZmdxcnhkc3Nrc3RyZXMyeGhs", r: 12 },
      ex_block_a:       { b: "WkdGd2Fkb2RyMXNocWx5", r: 4 },
      ex_block_b:       { b: "Vmdkc2J3bG13MWZocnU=", r: 6 },
      ex_thanks_msg:    { b: "bmZza3J5aHZkd3pwa25td3B4ZmtjcXZ0b2Jqbm1zZ3V0YnFq", r: 9 },
      ex_bmac_btn:      { b: "bW9jdmp4dndxcGh1bA==", r: 7 },
      ex_result_thanks: { b: "d3Bxa2t4b2pyd3FnbW12ZWJt", r: 8 }
    };
  
    function injectDecoded(lang) {
      if (!window.I18N || !window.I18N.translations) return;
      const dict = window.I18N.translations[lang];
      if (!dict) return;
  
      for (const key of Object.keys(SECRET_PACK)) {
        const { b, r } = SECRET_PACK[key];
        dict[key] = decodePayload(b, r);
      }
    }
  
    // Po zbudowaniu I18N – wstrzykniemy ukryte frazy do wszystkich języków
    document.addEventListener("DOMContentLoaded", () => {
      const langs = Object.keys(window.I18N.translations || {});
      langs.forEach(injectDecoded);
    });
  })();

  window.I18N = {
    NAME_MAX,
    MESSAGE_MAX,
    currencyByLang,
    translations,
    t,
    getCurrency
  };
})();

(() => {
  "use strict";

  const I18N = window.I18N;
  if (!I18N || !I18N.translations) return;

  const add = (lang, dict) => {
    I18N.translations[lang] = I18N.translations[lang] || {};
    Object.assign(I18N.translations[lang], dict);
  };

  const asciiArt = `
  ⠀⠀⠀⠀⠀⣠⣴⣶⣶⣶⣶⣤⣄⡀⠀⠀
  ⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣦
  ⠀⠀⢠⣼⣿⣿⣿⣿⣿⣿⣿⣿⣧⡄⠙⠛
  ⠀⠀⢸⣧⣤⣤⣤⣤⣤⣤⣤⣤⣼⡇⠀⠀
  ⠀⣠⡾⠟⠀⣿⣷⠀⠀⣾⣿⠀⠻⢷⣄⠀
  ⣾⠏⠀⣤⡄⠉⠁⣶⣶⠈⠉⢠⣤⠀⠹⣷
  ⠿⣶⡆⠈⠻⢶⣦⣄⣠⣴⡶⠟⠁⢰⣶⠿
  ⠀⠘⠟⠻⣶⣤⣀⣙⣋⣀⣤⣶⠟⠻⠃⠀
  ⠀⠀⠀⠀⠀⠉⠙⠛⠛⠋⠉⠀⠀⠀⠀⠀
  `;

  add("pl", {
    eg_grinch_banner:
      `Nienawidzę Świąt Bożego Narodzenia i prezentów, w tym roku nie będzie:\n` +
      asciiArt,
    eg_block_hitler: "Ten Pan nie zasłużył na prezent",
    eg_block_putin: "Zostaw Ukrainę w spokoju!",
    eg_block_arturpolachowski:
      "Widzę, że chciałeś zrobić mi prezent 🎁\n" +
      "To już samo w sobie jest niesamowite. Dziękuję!\n" +
      "Jeśli mimo wszystko chcesz mnie wesprzeć, możesz postawić mi kawkę ☕️",
    eg_bmac_button: "Postaw kawkę ☕️"
  });

  add("en", {
    eg_grinch_banner:
      `I hate Christmas and gifts, there will be none this year:\n` +
      asciiArt,
    eg_block_hitler: "This man didn't deserve a gift",
    eg_block_putin: "Leave Ukraine alone!",
    eg_block_arturpolachowski:
      "I see you wanted to get me a gift 🎁\n" +
      "That alone is amazing. Thank you!\n" +
      "If you’d still like to support me, you can buy me a coffee ☕️",
    eg_bmac_button: "Buy me a coffee ☕️"
  });

  add("de", {
    eg_grinch_banner:
      `Ich hasse Weihnachten und Geschenke, dieses Jahr gibt es keine:\n` +
      asciiArt,
    eg_block_hitler: "Dieser Mann hat kein Geschenk verdient",
    eg_block_putin: "Lass die Ukraine in Ruhe!",
    eg_block_arturpolachowski:
      "Ich sehe, du wolltest mir ein Geschenk machen 🎁\n" +
      "Allein das ist schon großartig. Danke!\n" +
      "Wenn du mich trotzdem unterstützen möchtest, kannst du mir einen Kaffee spendieren ☕️",
    eg_bmac_button: "Kaffee spendieren ☕️"
  });

  add("fr", {
    eg_grinch_banner:
      `Je déteste Noël et les cadeaux, cette année, il n’y en aura pas :\n` +
      asciiArt,
    eg_block_hitler: "Cet homme ne méritait pas de cadeau",
    eg_block_putin: "Laisse l'Ukraine tranquille !",
    eg_block_arturpolachowski:
      "Je vois que tu voulais m’offrir un cadeau 🎁\n" +
      "Rien que ça, c’est déjà incroyable. Merci !\n" +
      "Si tu veux quand même me soutenir, tu peux m’offrir un café ☕️",
    eg_bmac_button: "Offre-moi un café ☕️"
  });

  add("es", {
    eg_grinch_banner:
      `Odio la Navidad y los regalos, este año no habrá:\n` +
      asciiArt,
    eg_block_hitler: "Este hombre no merecía un regalo",
    eg_block_putin: "¡Deja a Ucrania en paz!",
    eg_block_arturpolachowski:
      "Veo que querías hacerme un regalo 🎁\n" +
      "Solo eso ya es increíble. ¡Gracias!\n" +
      "Si aun así quieres apoyarme, puedes invitarme a un café ☕️",
    eg_bmac_button: "Invítame a un café ☕️"
  });

  add("it", {
    eg_grinch_banner:
      `Odio il Natale e i regali, quest’anno niente:\n` +
      asciiArt,
    eg_block_hitler: "Quest'uomo non meritava un regalo",
    eg_block_putin: "Lascia in pace l'Ucraina!",
    eg_block_arturpolachowski:
      "Vedo che volevi farmi un regalo 🎁\n" +
      "Già questo è incredibile. Grazie!\n" +
      "Se vuoi comunque sostenermi, puoi offrirmi un caffè ☕️",
    eg_bmac_button: "Offrimi un caffè ☕️"
  });

  add("pt", {
    eg_grinch_banner:
      `Odeio o Natal e os presentes, este ano não haverá:\n` +
      asciiArt,
    eg_block_hitler: "Este homem não merecia um presente",
    eg_block_putin: "Deixe a Ucrânia em paz!",
    eg_block_arturpolachowski:
      "Vejo que você queria me dar um presente 🎁\n" +
      "Só isso já é incrível. Obrigado!\n" +
      "Se ainda quiser me apoiar, você pode me pagar um café ☕️",
    eg_bmac_button: "Paga-me um café ☕️"
  });

  add("nl", {
    eg_grinch_banner:
      `Ik haat Kerstmis en cadeaus, dit jaar geen:\n` +
      asciiArt,
    eg_block_hitler: "Deze man verdiende geen cadeau",
    eg_block_putin: "Laat Oekraïne met rust!",
    eg_block_arturpolachowski:
      "Ik zie dat je me een cadeau wilde geven 🎁\n" +
      "Dat alleen al is geweldig. Dank je!\n" +
      "Als je me toch wilt steunen, kun je me een koffie geven ☕️",
    eg_bmac_button: "Trakteer me op een koffie ☕️"
  });

  add("sv", {
    eg_grinch_banner:
      `Jag hatar julen och presenter, inga i år:\n` +
      asciiArt,
    eg_block_hitler: "Den här mannen förtjänade ingen present",
    eg_block_putin: "Lämna Ukraina i fred!",
    eg_block_arturpolachowski:
      "Jag ser att du ville ge mig en present 🎁\n" +
      "Bara det är helt fantastiskt. Tack!\n" +
      "Om du ändå vill stötta mig kan du bjuda mig på en kaffe ☕️",
    eg_bmac_button: "Bjud mig på en kaffe ☕️"
  });

  add("cs", {
    eg_grinch_banner:
      `Nesnáším Vánoce a dárky, letos žádné nebudou:\n` +
      asciiArt,
    eg_block_hitler: "Tento muž si nezasloužil dárek",
    eg_block_putin: "Nech Ukrajinu na pokoji!",
    eg_block_arturpolachowski:
      "Vidím, že jsi mi chtěl/a dát dárek 🎁\n" +
      "Už to samo o sobě je skvělé. Díky!\n" +
      "Pokud mě i tak chceš podpořit, můžeš mi koupit kávu ☕️",
    eg_bmac_button: "Kup mi kávu ☕️"
  });

  add("tr", {
    eg_grinch_banner:
      `Noel ve hediyelerden nefret ediyorum, bu yıl yok:\n` +
      asciiArt,
    eg_block_hitler: "Bu adam bir hediyeyi hak etmedi",
    eg_block_putin: "Ukrayna'yı yalnız bırak!",
    eg_block_arturpolachowski:
      "Bana bir hediye almak istediğini görüyorum 🎁\n" +
      "Bu bile harika. Teşekkürler!\n" +
      "Yine de beni desteklemek istersen bana bir kahve ısmarlayabilirsin ☕️",
    eg_bmac_button: "Bana kahve ısmarla ☕️"
  });

  add("no", {
    eg_grinch_banner:
      `Jeg hater julen og gaver, ingen i år:\n` +
      asciiArt,
    eg_block_hitler: "Denne mannen fortjente ikke en gave",
    eg_block_putin: "La Ukraina være i fred!",
    eg_block_arturpolachowski:
      "Jeg ser at du ville gi meg en gave 🎁\n" +
      "Bare det er helt fantastisk. Takk!\n" +
      "Hvis du likevel vil støtte meg, kan du spandere en kaffe ☕️",
    eg_bmac_button: "Spander en kaffe ☕️"
  });

  add("da", {
    eg_grinch_banner:
      `Jeg hader julen og gaver, ingen i år:\n` +
      asciiArt,
    eg_block_hitler: "Denne mand fortjente ikke en gave",
    eg_block_putin: "Lad Ukraine være i fred!",
    eg_block_arturpolachowski:
      "Jeg kan se, at du ville give mig en gave 🎁\n" +
      "Bare dét er helt fantastisk. Tak!\n" +
      "Hvis du stadig vil støtte mig, kan du give mig en kaffe ☕️",
    eg_bmac_button: "Giv mig en kaffe ☕️"
  });

  add("fi", {
    eg_grinch_banner:
      `Vihaan joulua ja lahjoja, ei tänä vuonna:\n` +
      asciiArt,
    eg_block_hitler: "Tämä mies ei ansainnut lahjaa",
    eg_block_putin: "Jätä Ukraina rauhaan!",
    eg_block_arturpolachowski:
      "Näen, että halusit antaa minulle lahjan 🎁\n" +
      "Sekin on jo uskomatonta. Kiitos!\n" +
      "Jos haluat silti tukea minua, voit ostaa minulle kahvin ☕️",
    eg_bmac_button: "Osta minulle kahvi ☕️"
  });

  add("hu", {
    eg_grinch_banner:
      `Utálom a karácsonyt és az ajándékokat, idén nincs:\n` +
      asciiArt,
    eg_block_hitler: "Ez a férfi nem érdemelt ajándékot",
    eg_block_putin: "Hagyd békén Ukrajnát!",
    eg_block_arturpolachowski:
      "Látom, hogy ajándékot akartál adni nekem 🎁\n" +
      "Már ez önmagában is fantasztikus. Köszönöm!\n" +
      "Ha mégis támogatnál, meghívhatsz egy kávéra ☕️",
    eg_bmac_button: "Hívj meg egy kávéra ☕️"
  });

  add("ro", {
    eg_grinch_banner:
      `Urăsc Crăciunul și cadourile, anul acesta nu vor fi:\n` +
      asciiArt,
    eg_block_hitler: "Acest om nu merita un cadou",
    eg_block_putin: "Lasă Ucraina în pace!",
    eg_block_arturpolachowski:
      "Văd că voiai să-mi faci un cadou 🎁\n" +
      "Doar asta e deja minunat. Mulțumesc!\n" +
      "Dacă totuși vrei să mă susții, poți să-mi cumperi o cafea ☕️",
    eg_bmac_button: "Cumpără-mi o cafea ☕️"
  });

  add("uk", {
    eg_grinch_banner:
      `Я ненавиджу Різдво і подарунки, цього року їх не буде:\n` +
      asciiArt,
    eg_block_hitler: "Цей пан не заслужив на подарунок",
    eg_block_putin: "Залиш Україну в спокої!",
    eg_block_arturpolachowski:
      "Я бачу, що ти хотів/хотіла зробити мені подарунок 🎁\n" +
      "Це вже неймовірно. Дякую!\n" +
      "Якщо все ж хочеш мене підтримати, можеш пригостити мене кавою ☕️",
    eg_bmac_button: "Пригости мене кавою ☕️"
  });

  add("el", {
    eg_grinch_banner:
      `Μισώ τα Χριστούγεννα και τα δώρα, φέτος δεν θα υπάρξουν:\n` +
      asciiArt,
    eg_block_hitler: "Αυτός ο άντρας δεν άξιζε δώρο",
    eg_block_putin: "Άφησε την Ουκρανία ήσυχη!",
    eg_block_arturpolachowski:
      "Βλέπω ότι ήθελες να μου κάνεις ένα δώρο 🎁\n" +
      "Αυτό από μόνο του είναι υπέροχο. Ευχαριστώ!\n" +
      "Αν θέλεις παρ’ όλα αυτά να με στηρίξεις, μπορείς να μου κεράσεις έναν καφέ ☕️",
    eg_bmac_button: "Κέρασέ μου έναν καφέ ☕️"
  });

})();