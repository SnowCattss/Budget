import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();

    //When home page loads, redirect to /dashboard
    useEffect(() => {
        router.push("/dashboard");
    }, [router]);

    //Nothing to display because of redirect
    return null;
}