import NotificationDropdown from "./NotificationDropdown";
import UserDropdown from "./UserDropdown";


export default function NavBar() {
    return (

        <div className="flex w-full it justify-between p-2">
            <div>
hi
            </div>
            <div className="flex items-center gap-2">
                <NotificationDropdown />
                <UserDropdown />
            </div>
        </div>
    )
}