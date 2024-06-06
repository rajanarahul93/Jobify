export function UserPosition({ user }) {
  return (
    <div className="flex items-start xs:gap-1 gap-3 justify-between xs:flex-row flex-col pt-1">
      <h3 className="sm:text-lg text-base font-bold text-black">
        {user.position}
      </h3>
    </div>
  );
}
