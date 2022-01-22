import { useCallback } from "react";

export default function useIntersectionObserver(
    observer,
    loading,
    page,
    setPage
) {
    const lastShip = useCallback(
        (node) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && page < 5) {
                    setPage((prev) => prev + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [loading, page, observer, setPage]
    );
    return lastShip;
}
