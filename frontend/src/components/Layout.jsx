import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children}) {
    <div className="Flex min-h-screen bg-gray-100 text-gray-900">
        <Sidebar />
        <main className="flex-1 flex flex-col">
            <navBar />
            <div className=p-6>{children}</div>
        </main>
    </div>
    );
}
