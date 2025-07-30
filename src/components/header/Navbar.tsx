import NotificationDropdown from "./NotificationDropdown";

export default function NavBar() {
  return (
    <div className="flex w-full text-white justify-between p-2">
      <div>Dashboard</div>
      <div className="flex items-center gap-2">
        <NotificationDropdown />
      </div>
    </div>
  );
}
