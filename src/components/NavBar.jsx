import { Menubar } from "primereact/menubar";

export default function NavBar() {
    const items = [
        {
            label: "Home",
            icon: "pi pi-home",
        },
        {
            label: "Ultimos Lanzamientos",
            icon: "pi pi-envelope",
        },
        {
            label: "Populares",
            icon: "pi pi-envelope",
        },
        {
            label: "Favoritos",
            icon: "pi pi-star",
        },
        {
            label: "Buscar",
            icon: "pi pi-search",
        },
    ];

    return (
        <div className="card">
            <Menubar model={items} />
        </div>
    );
}
