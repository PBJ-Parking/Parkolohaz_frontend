// <Route path="/admin" element={<LayoutAdmin />}>
//   <Route index element={<AdminArticle />} />
//   <Route path="/admin/Rolunk" element={<Rolunk />} />
//   <Route path="/admin/ASZF" element={<ASZF />} />
//   <Route path="/admin/Adatkezeles" element={<Adatkezeles />} />
//   <Route path="/admin/Kapcsolat" element={<Kapcsolat />} />
//   <Route path="/admin/email" element={<Email />} />
//   <Route path="*" element={<NoPage />} />
// </Route>

export const admin_routes = {
  path: "/admin",
  element: "LayoutAdmin",
  children: [
    { path: "/", index: true, element: "AdminArticle" },
    { path: "/admin/Rolunk", element: "Rolunk" },
    { path: "/admin/ASZF", element: "ASZF" },
    { path: "/admin/Adatkezeles", element: "Adatkezeles" },
    { path: "/admin/Kapcsolat", element: "Kapcsolat" },
    { path: "/admin/email", element: "Email" },
  ],
};
