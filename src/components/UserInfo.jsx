export function UserInfo({ user }) {
  return (
    <div className="flex items-center gap-4 pb-1">
      <h3 className="font-bold sm:text-base text-[1^px] text-DesaturatedDarkCyan">
        {user.company}
      </h3>
      <div className="flex gap-2">
        {user.new && <h6 className="bg-DesaturatedDarkCyan h6">new</h6>}
        {user.featured && (
          <h6 className="bg-VeryDarkGrayishCyan h6">Featured</h6>
        )}
      </div>
    </div>
  );
}
