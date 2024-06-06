import { Avatar } from "./Avatar";
import { UserInfo } from "./UserInfo";
import { UserPosition } from "./UserPosition";
import { UserJobDetails } from "./UserJobDetails";
import { UserCompetences } from "./UserCompetences";
import UserLayout from "../ui/UserLayout";

export default function User({ user }) {
  return (
    <UserLayout>
      {user.featured && (
        <div className="absolute bg-DesaturatedDarkCyan w-[5px] h-full left-0 rounded-l-md top-0" />
      )}
      <Avatar user={user} />

      <div className="flex flex-col gap-2">
        <UserInfo user={user} />
        <UserPosition user={user} />

        <div className="flex xs:flex-col gap-3.5 flex-col-reverse">
          <UserCompetences user={user} />
          <UserJobDetails user={user} />
        </div>
      </div>
    </UserLayout>
  );
}
