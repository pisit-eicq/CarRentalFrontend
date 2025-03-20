import ReservationMenu from "@/components/ReservationMenu";
import style from './reservations.module.css'

export default function ReservationLayout({children}:{children:React.ReactNode}){
    return (
        <div className={style.sectionlayout}>
            <ReservationMenu/>
            {children}
        </div>
    );
}