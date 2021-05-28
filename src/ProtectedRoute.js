import React, { useContext } from "react"
import { Route, Redirect } from "react-router-dom"
import AuthContext from "./components/context/auth/Context"

const ProtectedRoute = ({ component: Component, ...rest}) => {
    const { logedin } = useContext(AuthContext);

    return (
        <Route { ...rest } render={
            props =>{
                if(logedin){
                    return <Component {...rest} {...props} />
                }else{
                    return <Redirect to={
                        {
                            pathname: "/login",
                            state:{
                                from: props.location
                            }
                        }
                    } />
                }
            }
        }>

        </Route>
    )
}
export default ProtectedRoute;