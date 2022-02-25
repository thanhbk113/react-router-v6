import { useParams } from "react-router-dom";

const UserDetail = () => {
   const { userId } = useParams()
   return (
        <div>
            <div>Detail about user {userId}</div>
        </div>
    );
};

export default UserDetail;