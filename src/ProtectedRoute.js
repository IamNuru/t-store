import React, { useContext, useEffect, useState } from "react"
import axios from 'axios';
import { Route, Redirect } from "react-router-dom"
import AuthContext from "./components/context/auth/Context"

const ProtectedRoute = ({ component: Component, ...rest}) => {
    const { logedin, user } = useContext(AuthContext);
    const [isAuthenticated, setIsAuthenticated] = useState(true)

    useEffect(() => {
        const getAuthUser = async () => {
          const configs = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          };
          await axios
            .get(`${process.env.REACT_APP_API_URL}/user`, configs)
            .then((res) => {
                setIsAuthenticated(true)
            })
            .catch((err) => {
                setIsAuthenticated(false)
            });
        };
        getAuthUser();
        // eslint-disable-next-line
      }, [user, logedin]);

    return (
        <Route { ...rest } render={
            props =>{
                if(user && logedin && isAuthenticated){
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