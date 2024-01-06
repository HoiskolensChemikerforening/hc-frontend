import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { PageContainer } from "../../components/Layout";
import { P, TitleContainer, Title } from '../../components/Text'; 

export const AddComments = () => {


    return (
        <PageContainer> 
            <TitleContainer> 
                <Title>
                    Kontoret 
                </Title>
            </TitleContainer>

            <ContentContainer>
                <P>
                HC har et eget kontor ved inngangen til Realfagsbygget mellom kjemiblokkene. Kontoret har en stor sofagruppe hvor man kan 
                slå av en prat med andre Chemikere, spise lunsj eller bare slappe av.
                </P>
                <P>
                Det er mulig å kjøpe Dahls pils eller brus, kjøpe en kanne kaffe for 10 kr av “Kaffefondet”, og alt 
                salg av HC-effekter, medlemskap og fagkompendier skjer på HC-kontoret.
                </P>
                <P>
                Den ukentlige vaffeldagen med salg av vafler med tilhørende kaffe og saft avholdes også på kontoret.
                </P>
                <P>
                Kontoret kommer til å være mye åpent i fadderperioden, slik at det er bare å komme innom hvis du lurer på noe eller vil 
                slappe av litt.
                </P>
                <P>
                HC-kontoret er et naturlig møtepunkt og tilholdssted for oss på Chemie, og vi håper at også dere nye i førsteklasse vil 
                komme til å føle samme tilhørigheten til kontoret.
                </P>
            </ContentContainer>
        </PageContainer>
    )
};

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    text-align: center;
    margin: 10px;
`;