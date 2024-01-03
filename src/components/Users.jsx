import {useSelector} from "react-redux";
import {User} from "./User";

export const Users = () => {
    const users = useSelector((state) => state.users.users)

    return (
        <div className="flex-child">
            <ul>
                {
                    users.map((user) => {
                        return <User user={user} key={user.id}/>
                    })
                }
            </ul>

        </div>
    );
};

