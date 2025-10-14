export default function Navbar() {
    return (
        <header className="flex items-center justify-between bg-white shadow px-6 py-3">
            {/* Left side: Page title (can be dynamic based on route) */}
            <h2 className="text-lg font-semibold">Dashboard</h2>

            {/* Right side: User info (will connect this to your user account later) */}
            <div className="flex items-conter gap-3">
                {/* Placeholder user avatar, can replace later */}
                <img
                    src="/logo.png"
                    alt="user"
                    className="w-8 h-8 rounded-full border"
                />
                {/* Hello text */}
                <span className="text-sm font-medium">Welcome back</span>
            </div>
        </header>
    );
}