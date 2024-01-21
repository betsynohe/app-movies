import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import Logo from "../assets/pnglogo.png";

export default function NavBar() {
    const items = [
        {
            label: "Ultimos Lanzamientos",
            icon: "pi pi-envelope",
            className: "text-white",
        },
        {
            label: "Populares",
            icon: "pi pi-envelope",
        },
        {
            label: "Favoritos",
            icon: "pi pi-star",
        },
    ];
    const start = (
        <img alt="logo" src={Logo} height="40" className="mr-2"></img>
    );
    const end = (
        <div className="flex align-items-center gap-2">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="Buscar" />
            </span>
        </div>
    );

    return (
        <div className="card surface-500 hover:surface-ground">
            <Menubar
                className="surface-ground hover:surface-500  font-bold m-2 flex align-items-center justify-content-center"
                model={items}
                start={start}
                end={end}
            />
        </div>
    );
}
