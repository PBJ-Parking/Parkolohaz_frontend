[
  {
    felhasznalok: {
      elnevezes: "Felhasználók",
      apik: {
        indexUrl: "api/felhasznalok",
        showUrl: "api/felhasznalok/{id}",
        storeUrl: "api/felhasznalok",
        updateUrl: "api/felhasznalok/{id}",
        destroyUrl: "api/felhasznalok/{id}",
      },
      fejlecek: [
        "azon",
        "név",
        "telefonszám",
        "cím",
        "email",
        "jelszó",
        "megrendelő típus",
        "adószám",
        "admin-e",
      ],
      adatok: {
        id: {
          tipus: number,
          modosithato: false,
          kotelezo: true,
        },
        name: {
          tipus: text,
          modosithato: true,
          kotelezo: true,
        },
        telefonszam: {
          tipus: text,
          modosithato: true,
        },
        cim: {
          tipus: text,
        },
      },
    },
  },
];
