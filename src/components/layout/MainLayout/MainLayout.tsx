import type { ReactNode } from "react";

type MainLayoutProps = {
    children: ReactNode;
};

// MainLayout ahora solo es un contenedor envoltorio, ya no maneja rutas.
function MainLayout({ children }: MainLayoutProps) {
    return (
        <main className="main-content-layout">
            {children}
        </main>
    );
}

export default MainLayout;
