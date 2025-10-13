import Link from "next/link";
import { useRouter } from "next/router";
import { FaHome, FaChartPie, FaCog } from "react-icons/fa";

export default function Sidebar() {
    const router = useRouter();

    const menu = [
    { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
    { name: "Budget", path: "/budget", icon: <FaChartPie /> },
    { name: "Settings", path: "/settings", icon: <FaCog /> },
    ];

    return (
        <aside className="w-64 bg-gray-900 text-gray-200 flex flex-col">
            {/* App title or logo */}
        <h1 className="text-xl font-bold px-6 py-4 border-b border-gray-700">
            Budget Compass
        </h1>

        {/* Navigation links */}
        <nav className="flex-1 p-4">
            {menu.map((item) => (
                //Link component changes page without a full reload
                <Link href={item.path} key={item.name}>
                    <div
                    //Tailwind classes control layout
                    //highlight the active route by checking router.pathname
                    className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-800 transition-colors ${
                        router.pathname === item.path ? "bg-gray-800" : ""
                    }`}
                >
                    {/* Icon (from React Icons) */}
                    {item.icon}
                    {/* Page name */}
                    <span>{item.name}</span>
                    </div>
                </Link>
            ))}
        </nav>
    </aside>
    );
}
