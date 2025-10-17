import Layout from "../components/Layout";

export default function Dashboard() {
    return (
        <Layout>
            {/* Section title */}
            <h1 className="text-2xl font-bold mb-4">Overview</h1>

            {/* Grid using tailwind - 1 on mobile 3 on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Each is a financial metric, will have backend data fed into it */}

                <div className="bg-white shadow rounded p-4">
                    <h3 className="text-lg font-semibold">Total Income</h3>
                    {/* Each box represents a financial metric backend later */}
                </div>

                <div className="bg-white shadow rounded p-4">
                    <h3 className="text-lg font-semibold">Total Income</h3>
                    <p className="text-2xl mt-2 text-green-600">$4,200</p>
                </div>

                <div className="bg-white shadow rounded p-4">
                    <h3 className="text-lg font-semibold">Total Expenses</h3>
                    <p className="text-2xl mt-2 text-red-600">$4,450</p>
                </div>

                <div className="bg-white shadow rounded p-4">
                    <h3 className="text-lg font-semibold">Savings</h3>
                    <p className="text-2xl mt-2 text-blue-600">$750</p>
                </div>
            </div>
        </Layout>
    );
}