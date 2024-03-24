import { useState } from "react";
import useAuthContext from "../contexts/AuthContext";
import "../css/profileArticle.css"
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProfileArticle() {
    const { user, userUpdate } = useAuthContext();
    const { jarmu } = useAuthContext();

    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState("");

    const UserAdatok = [
        { label: "Telefonszám", value: user.telefonszam, editable: false },
        { label: "Cím", value: user.cim, editable: true },
        { label: "Email", value: user.email, editable: true },
        { label: "Jelszó", value: "***********", editable: true },
        { label: "Adószám", value: user.adoszam, editable: true },
        { label: "Rendszám", value: jarmu[0].rendszam, editable: true }
    ];

    const handleEdit = (index) => {
        if (UserAdatok[index].editable) {
            setEditIndex(index);
            setEditValue(UserAdatok[index].value);
        }
    };

    const handleSave = async (index) => {
        if (UserAdatok[index].editable) {
            await userUpdate(UserAdatok[index].label.toLowerCase(), editValue);
            setEditIndex(null);
        }
    };

    return (
        <article>
            <h1>Profilom</h1>
            <div className="userNeveEsKepe">
                <h2>{user ? " " + user.name : ""} <button><i className="bi bi-pencil-square"></i> Módosít</button></h2>
            </div>
            <div className="UserTovabbiAdatai">
                <ul>
                    {UserAdatok.map((elem, index) => {
                        return (
                            <div key={index}>
                                {editIndex === index ? (
                                    <>
                                        <input value={editValue} onChange={(e) => setEditValue(e.target.value)} />
                                        <button onClick={() => handleSave(index)}><i className="bi bi-check-square"></i> Mentés</button>
                                    </>
                                ) : (
                                    <>
                                        <p>{elem.label}: {elem.value}</p>
                                        <button onClick={() => handleEdit(index)}><i className="bi bi-pencil-square"></i> Módosít</button>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </ul>
            </div>
        </article>
    );
}
