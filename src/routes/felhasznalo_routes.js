// <Route path="/loggedIn" element={<LoggedIn />}>
//   <Route index element={<Article />} />
//   <Route path="/loggedIn/profil" element={<Profile />} />
//   <Route path="/loggedIn/foglalas" element={<InputProvider><FoglalasArticle /></InputProvider>} />
//   <Route path="/loggedIn/foglalasEllenorzes" element={<InputProvider><FoglalasEllenorzes /></InputProvider>} />
//   <Route path="/loggedIn/foglalasVeglegesitve" element={<FoglalasVeglegesitve />} />
//   <Route path="/loggedIn/ASZF" element={<ASZF />} />
//   <Route path="/loggedIn/Adatkezeles" element={<Adatkezeles />} />
//   <Route path="/loggedIn/Kapcsolat" element={<Kapcsolat />} />
//   <Route path="/loggedIn/email" element={<Email />} />
//   <Route path="/loggedIn/Rolunk" element={<Rolunk />} />
//   <Route path="*" element={<NoPage />} />
// </Route>

export const felhasznalo_routes = {
  path: "/",
  element: "LoggedIn",
  children: [
    { path: "/", index: true, element: "Article" },
    { path: "/profil", element: "Profile" },
    {
      element: "InputProvider",
      children: [
        { path: "/foglalas", element: "FoglalasArticle" },
        { path: "/foglalasEllenorzes", element: "FoglalasEllenorzes" },
      ],
    },
    { path: "/foglalasVeglegesitve", element: "FoglalasVeglegesitve" },
    { path: "/ASZF", element: "ASZF" },
    { path: "/Adatkezeles", element: "Adatkezeles" },
    { path: "/Kapcsolat", element: "Kapcsolat" },
    { path: "/email", element: "Email" },
    { path: "/Rolunk", element: "Rolunk" },
  ],
};
