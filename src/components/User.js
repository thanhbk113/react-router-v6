import { Outlet ,useSearchParams} from "react-router-dom";

const User = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('fitler') === 'active'
    return (
        <div>
             <h2>User 1</h2>
             <h2>User 2</h2>
             <h2>User 3</h2>
           <Outlet /> 
           <div>
               <button onClick={() => setSearchParams( {fitler: 'active'} )}>Active Users</button>
               <button onClick={() => setSearchParams()}>Reset Fitler</button>
            </div>    
            {
                showActiveUsers ? <h2>Showing activer user</h2> : <h2>Showing all user</h2>
            }   
        </div>
    );
};

export default User;