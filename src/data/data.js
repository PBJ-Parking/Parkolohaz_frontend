const lista = [
  {
    felhasznalok: {
      elnevezes: "Felhasználók",
      apik: {
        indexUrl: "api/felhasznalok",
        showUrl: "api/felhasznalok",
        storeUrl: "api/felhasznalok",
        updateUrl: "api/felhasznalok",
        destroyUrl: "api/felhasznalok",
      },
      adatok: {
        elsodleges_kulcs: ["id"],
        id: {
          tipus: "text",
          modosithato: false,
          kotelezo: true,
          fejlec: "azon",
          lathato: true,
        },
        name: {
          tipus: "text",
          modosithato: true,
          kotelezo: true,
          alapertek: "",
          regex:
            "([A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]+)s([A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]+)s?([A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]+)?",
          fejlec: "név",
          lathato: true,
        },
        telefonszam: {
          tipus: "text",
          modosithato: true,
          kotelezo: true,
          alapertek: "",
          regex: "[0-9]+",
          fejlec: "telefonszám",
          lathato: true,
        },
        cim: {
          tipus: "text",
          modosithato: true,
          kotelezo: true,
          alapertek: "",
          regex: "[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]+",
          fejlec: "cím",
          lathato: true,
        },
        email: {
          tipus: "email",
          modosithato: true,
          kotelezo: true,
          alapertek: "",
          regex: "[a-z0-9]+@[a-z0-9]+\.[a-z]{2,3}",
          fejlec: "e-mail",
          lathato: true,
        },
        email_verified_at: {
          tipus: "text",
          modosithato: false,
          kotelezo: false,
          alapertek: "",
          fejlec: "e-mail megerősítve",
          lathato: false,
        },

        password: {
          tipus: "password",
          modosithato: true,
          kotelezo: true,
          alapertek: "",
          regex: ".+",
          fejlec: "jelszó",
          lathato: false,
        },
        megrendelo_tipus: {
          tipus: "select",
          modosithato: true,
          kotelezo: true,
          lista: ["M", "C"],
          fejlec: "megrendelő típus",
          lathato: true,
        },
        adoszam: {
          tipus: "text",
          modosithato: true,
          kotelezo: true,
          alapertek: "",
          regex: "[0-9]{13}",
          fejlec: "adószám",
          lathato: true,
        },
        admin_e: {
          tipus: "select",
          modosithato: true,
          kotelezo: true,
          fejlec: "admin-e",
          lista: [0, 1],
          lathato: true,
        },
        created_at: {
          tipus: "text",
          modosithato: false,
          kotelezo: false,
          alapertek: "",
          fejlec: "létrehozva",
          lathato: false,
        },
        updated_at: {
          tipus: "text",
          modosithato: false,
          kotelezo: false,
          alapertek: "",
          fejlec: "módosítva",
          lathato: false,
        },
      },
      alapObj: {
        id: "",
        name: "",
        telefonszam: "",
        cim: "",
        email: "",
        password: "",
        megrendelo_tipus: "",
        adoszam: "",
        admin_e: 0,
      },
    },
    jarmuvek: {
      elnevezes: "Járművek",
      apik: {
        indexUrl: "api/jarmuvek",
        showUrl: "api/jarmuvek",
        storeUrl: "api/jarmuvek",
        updateUrl: "api/jarmuvek",
        destroyUrl: "api/jarmuvek",
      },
      adatok: {
        elsodleges_kulcs: ["jarmu_id"],
        jarmu_id: {
          tipus: "text",
          modosithato: false,
          kotelezo: true,
          fejlec: "azon",
          lathato: true,
        },
        rendszam: {
          tipus: "text",
          modosithato: true,
          kotelezo: true,
          alapertek: "",
          regex: "[A-Z0-9]{8}",
          fejlec: "rendszám",
          lathato: true,
        },
        felhasznalok_id: {
          tipus: "selectQuery",
          modosithato: true,
          kotelezo: true,
          alapertek: "",
          fejlec: "felhasználó id (FK)",
          uri: "api/felhasznalok_id_fk",
          lathato: true,
        },
        jarmu_tipus: {
          tipus: "selectQuery",
          modosithato: true,
          kotelezo: true,
          alapertek: "",
          fejlec: "jármű típus (FK)",
          uri: "api/jarmu_tipus_fk",
          lathato: true,
        },
        generalt_azon: {
          tipus: "select",
          modosithato: true,
          kotelezo: true,
          lista: [0, 1],
          fejlec: "generált azon",
          lathato: true,
        },
        created_at: {
          tipus: "text",
          modosithato: false,
          kotelezo: false,
          alapertek: "",
          fejlec: "létrehozva",
          lathato: false,
        },
        updated_at: {
          tipus: "text",
          modosithato: false,
          kotelezo: false,
          alapertek: "",
          fejlec: "módosítva",
          lathato: false,
        },
      },
      alapObj: {
        jarmu_id: "",
        rendszam: "",
        felhasznalok_id: "",
        jarmu_tipus: "",
        generalt_azon: 0,
      },
    },

    berlesek: {
      elnevezes: "Bérlések",
      apik: {
        indexUrl: "api/berlesek",
        showUrl: "api/berlesek",
        storeUrl: "api/postBerles",
        updateUrl: "api/berlesek",
        destroyUrl: "api/berlesek",
      },
      adatok: {
        elsodleges_kulcs: ["jarmu_id", "foglalas_datuma"],
        jarmu_id: {
          tipus: "selectQuery",
          modosithato: true,
          kotelezo: true,
          uri: "api/jarmu_id_fk",
          fejlec: "jármű id (FK)",
          lathato: true,
        },
        foglalas_datuma: {
          tipus: "text",
          modosithato: false,
          kotelezo: true,
          alapertek: "",
          fejlec: "foglalás dátuma",
          lathato: true,
        },
        foglalas_kezdet: {
          tipus: "date",
          modosithato: true,
          kotelezo: true,
          alapertek: "",
          fejlec: "foglalás kezdete",
          lathato: true,
        },
        foglalas_vege: {
          tipus: "date",
          modosithato: true,
          kotelezo: true,
          alapertek: "",
          fejlec: "foglalás vége",
          lathato: true,
        },
        ar_id: {
          tipus: "selectQuery",
          modosithato: true,
          kotelezo: true,
          fejlec: "ár id (FK)",
          uri: "api/ar_id_fk",
          lathato: true,
        },
        kedvezmeny_id: {
          tipus: "selectQuery",
          modosithato: true,
          kotelezo: true,
          fejlec: "kedvezmény id (FK)",
          uri: "api/kedvezmeny_id_fk",
          lathato: true,
        },
        hely_id: {
          tipus: "selectQuery",
          modosithato: true,
          kotelezo: true,
          fejlec: "hely id (FK)",
          uri: "api/hely_id_fk",
          lathato: true,
        },
        fizetve: {
          tipus: "select",
          modosithato: false,
          kotelezo: false,
          lista: [0, 1],
          fejlec: "fizetve",
          lathato: true,
        },
        created_at: {
          tipus: "text",
          modosithato: false,
          kotelezo: false,
          alapertek: "",
          fejlec: "létrehozva",
          lathato: false,
        },
        updated_at: {
          tipus: "text",
          modosithato: false,
          kotelezo: false,
          alapertek: "",
          fejlec: "módosítva",
          lathato: false,
        },
      },
      alapObj: {
        jarmu_id: "",
        foglalas_datuma: "",
        foglalas_kezdet: "",
        foglalas_vege: "",
        ar_id: "",
        kedvezmeny_id: "",
        hely_id: "",
        fizetve: 0,
      },
    },

    tipusok: {
      elnevezes: "Típusok",
      apik: {
        indexUrl: "api/tipusok",
        showUrl: "api/tipusok",
        storeUrl: "api/tipusok",
        updateUrl: "api/tipusok",
        destroyUrl: "api/tipusok",
      },
      adatok: {
        elsodleges_kulcs: ["id"],
        id: {
          tipus: "text",
          modosithato: false,
          kotelezo: true,
          fejlec: "azon",
          lathato: true,
        },

        elnevezes: {
          tipus: "text",
          modosithato: true,
          kotelezo: true,
          alapertek: "",
          fejlec: "elnevezés",
          lathato: true,
        },

        created_at: {
          tipus: "text",
          modosithato: false,
          kotelezo: false,
          alapertek: "",
          fejlec: "létrehozva",
          lathato: false,
        },
        updated_at: {
          tipus: "text",
          modosithato: false,
          kotelezo: false,
          alapertek: "",
          fejlec: "módosítva",
          lathato: false,
        },
      },
      alapObj: {
        id: "",
        elnevezes: "",
      },
    },

    parkolohelyek: {
      elnevezes: "Parkolohelyek",
      apik: {
        indexUrl: "api/parkolohely",
        showUrl: "api/parkolohely",
        storeUrl: "api/parkolohely",
        updateUrl: "api/parkolohely",
        destroyUrl: "api/parkolohely",
        megszuntetUrl: "api/parkolohely_megszuntet",
      },
      adatok: {
        elsodleges_kulcs: ["hely_id"],
        hely_id: {
          tipus: "text",
          modosithato: false,
          kotelezo: true,
          fejlec: "hely_id",
          lathato: true,
        },

        hely_tipusa: {
          tipus: "selectQuery",
          modosithato: true,
          kotelezo: true,
          alapertek: "",
          fejlec: "tipus id (FK)",
          uri: "api/tipus_id_fk",
          lathato: true,
        },

        statusz: {
          tipus: "select",
          modosithato: true,
          kotelezo: true,
          lista: ["s", "f", "b", "n", "m"],
          fejlec: "statusz",
          lathato: true,
        },

        emelet: {
          tipus: "number",
          modosithato: true,
          kotelezo: true,
          alapertek: 1,
          fejlec: "emelet",
          lathato: true,
          min:-5,
          max: 5
        },
        created_at: {
          tipus: "text",
          modosithato: false,
          kotelezo: false,
          alapertek: "",
          fejlec: "létrehozva",
          lathato: false,
        },
        updated_at: {
          tipus: "text",
          modosithato: false,
          kotelezo: false,
          alapertek: "",
          fejlec: "módosítva",
          lathato: false,
        },
      },
      alapObj: {
        hely_id: "",
        hely_tipusa: "",
        statusz: "s",
        emelet: 1,
      },
    },

    napiArak: {
      elnevezes: "Napi árak",
      apik: {
        indexUrl: "api/napi_arak",
        showUrl: "api/napi_arak",
        storeUrl: "api/napi_arak",
        updateUrl: "api/napi_arak",
        destroyUrl: "api/napi_arak",
      },
      adatok: {
        elsodleges_kulcs: ["ar_id"],
        ar_id: {
          tipus: "text",
          modosithato: false,
          kotelezo: true,
          fejlec: "ar_id",
          lathato: true,
        },

        megnevezes: {
          tipus: "text",
          modosithato: true,
          kotelezo: true,
          regex: "[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]+",
          alapertek: "",
          fejlec: "megnevezés",
          lathato: true,
        },

        ar: {
          tipus: "number",
          modosithato: true,
          kotelezo: true,
          alapertek: 0,
          min: 0,
          fejlec: "ár",
          lathato: true,
        },

        mikortol: {
          tipus: "date",
          modosithato: true,
          kotelezo: true,
          alapertek: "",
          fejlec: "mikortól",
          lathato: true,
        },

        tipus: {
          tipus: "selectQuery",
          modosithato: true,
          kotelezo: true,
          alapertek: "",
          fejlec: "tipus id (FK)",
          uri: "api/tipus_id_fk",
          lathato: true,
        },

        created_at: {
          tipus: "text",
          modosithato: false,
          kotelezo: false,
          alapertek: "",
          fejlec: "létrehozva",
          lathato: false,
        },
        updated_at: {
          tipus: "text",
          modosithato: false,
          kotelezo: false,
          alapertek: "",
          fejlec: "módosítva",
          lathato: false,
        },
      },
      alapObj: {
        ar_id: "",
        megnevezes: "",
        ar: 0,
        mikortol: "",
        tipus: "",
      },
    },

    kedvezmenyek: {
      elnevezes: "kedvezmenyek",
      apik: {
        indexUrl: "api/kedvezmenyek",
        showUrl: "api/kedvezmenyek",
        storeUrl: "api/kedvezmenyek",
        updateUrl: "api/kedvezmenyek",
        destroyUrl: "api/kedvezmenyek",
      },
      adatok: {
        elsodleges_kulcs: ["kedvezmeny_id"],
        kedvezmeny_id: {
          tipus: "text",
          modosithato: false,
          kotelezo: true,
          fejlec: "kedvezmeny_id",
          lathato: true,
        },

        megnevezes: {
          tipus: "text",
          modosithato: true,
          kotelezo: true,
          regex: "[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]+",
          alapertek: "",
          fejlec: "megnevezés",
          lathato: true,
        },

        hatartol: {
          tipus: "number",
          modosithato: true,
          kotelezo: true,
          min: 0,
          alapertek: "",
          fejlec: "határtól",
          lathato: true,
        },

        hatarig: {
          tipus: "number",
          modosithato: true,
          kotelezo: true,
          min: 0,
          alapertek: "",
          fejlec: "határig",
          lathato: true,
        },

        mikortol: {
          tipus: "date",
          modosithato: true,
          kotelezo: true,
          alapertek: "",
          fejlec: "mikortól",
          lathato: true,
        },

        meddig: {
          tipus: "date",
          modosithato: true,
          kotelezo: true,
          alapertek: "",
          fejlec: "meddig",
          lathato: true,
        },

        merteke: {
          tipus: "number",
          modosithato: true,
          kotelezo: true,
          min:0,
          max:100,
          alapertek: "",
          fejlec: "mértéke",
          lathato: true,
        },

        created_at: {
          tipus: "text",
          modosithato: false,
          kotelezo: false,
          alapertek: "",
          fejlec: "létrehozva",
          lathato: false,
        },
        updated_at: {
          tipus: "text",
          modosithato: false,
          kotelezo: false,
          alapertek: "",
          fejlec: "módosítva",
          lathato: false,
        },
      },
      alapObj: {
        kedvezmeny_id: "",
        megnevezes: "",
        hatartol: "",
        hatarig: "",
        mikortol: "",
        meddig: "",
        merteke: "",
      },
    },
  },
][0];

export default lista;
