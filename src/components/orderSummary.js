import { useNavigate } from "react-router-dom"

export const OrderSUmmary = () => {
   const navigate = useNavigate()
   
    return (
        <>
            <div>
                Order confirmed
            </div>
            <button onClick={() => navigate(-1)}>Go back</button>
        </>
    )
}