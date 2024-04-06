

// <Route path="/" element={<Layout />}>
//   <Route index element={<FooldalArticle />} />
//   <Route path="/Rolunk" element={<Rolunk />} />
//   <Route path="/belepes" element={<Bejelentkezes />} />
//   <Route path="/regisztracio" element={<Regisztracio />} />
//   <Route path="/ASZF" element={<ASZF />} />
//   <Route path="/Adatkezeles" element={<Adatkezeles />} />
//   <Route path="/Kapcsolat" element={<Kapcsolat />} />
//   <Route path="/email" element={<Email />} />
// </Route>

export const vendeg_routes = {
    path: "/",
    element: "Layout",
    children: [
      { path: "/", index: true, element: "FooldalArticle" },
      { path: "/Rolunk", element: "Rolunk" },
      { path: "/belepes", element: "Bejelentkezes" },
      { path: "/regisztracio", element: "Regisztracio" },
      { path: "/ASZF", element: "ASZF" },
      { path: "/Adatkezeles", element: "Adatkezeles" },
      { path: "/Kapcsolat", element: "Kapcsolat" },
      { path: "/email", element: "Email" },
    ],
  };