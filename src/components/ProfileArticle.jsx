import { useState } from "react";
import useAuthContext from "../contexts/AuthContext";
import "../css/profileArticle.css"
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProfileArticle() {
    const { user, userUpdate } = useAuthContext();
    const { jarmu, jarmuUpdate } = useAuthContext();

    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState("");

    const UserAdatok = [
        { label: "Név", value: user.name, editable: true, valtozonev: 'name' },
        { label: "Telefonszám", value: user.telefonszam, editable: true, valtozonev: 'telefonszam' },
        { label: "Cím", value: user.cim, editable: true, valtozonev: 'cim' },
        { label: "Email", value: user.email, editable: true, valtozonev: 'email' },
        { label: "Jelszó", value: user.password, editable: true, valtozonev: 'password' },
        { label: "Adószám", value: user.adoszam, editable: true, valtozonev: 'adoszam' },
        { label: "Rendszám", value: jarmu.rendszam, editable: true, valtozonev: 'rendszam' }
    ];

    const handleEdit = (index) => {
        if (UserAdatok[index].editable) {
            setEditIndex(index);
            setEditValue(UserAdatok[index].value);
        }
    };

    const handleSave = async (index) => {
        if (UserAdatok[index].editable) {
            if (UserAdatok[index].label == "Rendszám") {
                await jarmuUpdate(UserAdatok[index].valtozonev, editValue);
                setEditIndex(null);
            } else {
                await userUpdate(UserAdatok[index].valtozonev, editValue);
                setEditIndex(null);
            }

        }
    };

    return (
        <article className="profileArticle">
            <h1>Profilom</h1>
            <div className="userNeveEsKepe">
                <h2>{user ? " " + user.name : ""}</h2>
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
