import { useRouter } from "next/router"
import { useState, useEffect } from "react";
export default function Header() {
    const router = useRouter();
    const [scrolled, setScrolled] = useState({currentScrollHeight: 0});
    useEffect(() => {
        window.onscroll =()=>{
            const newScrollHeight = Math.ceil(window.scrollY / 50) *50;
            if (scrolled != newScrollHeight){
                setScrolled({currentScrollHeight: newScrollHeight})
            }
          }
    }, []);
    return (
    <>
      <div className="bg-indigo-500 w-full py-1 dark:bg-neutral-700"></div>
    </>
    )
}