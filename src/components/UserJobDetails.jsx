export function UserJobDetails({ user }) {
  return (
    <div className="flex gap-3 pt-1 xs:border-none border-b-2 border-solid border-slate-100 pb-2.5 xs:p-0 text-DarkGrayishCyan">
      <span>{user.postedAt}</span> -<span>{user.contract}</span> -
      <span>{user.location}</span>
    </div>
  );
}
