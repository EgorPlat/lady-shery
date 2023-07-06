import { setIsMobile } from "@/store/helper"

export const checkIsMobile = () => {
    if (window.innerWidth < 760) {
        setIsMobile(true);
    } else {
        setIsMobile(false);
    }
}