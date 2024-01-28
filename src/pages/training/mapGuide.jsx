// Velkommen til en guide i bruk av map-funksjonen


import React, { useEffect, useState, useContext } from "react";
import axios from 'axios'; // Importing Axios for making HTTP requests
import { PageContainer } from "../../components/Layout";
import { P, TitleContainer, Title, H1 } from '../../components/Text'; 
import { Button } from "../../components/Button";
import { fetchList} from "../../utils/requests";
import AuthContext from "../../context/AuthContext";

export const MapDemo = () => {
    const [committees, setCommittees] = useState();
    let {user} = useContext(AuthContext);

    useEffect(() => {
        console.log(String(user));
        fetchList("undergrupper/api", setCommittees);
        console.log(committees)
      }, [user]);

      //const history = useHistory();


      return (
        <PageContainer>
            <H1>Helloww</H1>
            <Title>Hei</Title>
        
        </PageContainer>



      )
}