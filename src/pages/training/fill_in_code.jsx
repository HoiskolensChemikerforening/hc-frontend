import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { PageContainer } from "../../components/Layout";
import { P as baseP, TitleContainer, Title, Link as baseLink, H2 } from '../../components/Text'; 
import { Button } from "../../components/Button";
import { FaEnvelope, FaPhone, FaCamera, FaFacebook } from 'react-icons/fa'; // Importing the envelope and phone icons

export const FillIn = () => {


    return (
        <PageContainer> 
            <TitleContainer> 
                <Title>
                    Kontaktinfoen til Styret
                </Title>
            </TitleContainer>

            <InlineContainer>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfAVpnGmL3cQPR-IAnAyd-wqyI9u2RToS_KXunwrGNABlOf-g/viewform" target="_blank" rel="noopener noreferrer">
                Tilbakemeldinger til Styret
            </Link> 
            <P>
                - kom med kritikk, ros eller forslag til forbedringer angående alt som bedrives i Høiskolens Chemikerforening.
            </P>
            </InlineContainer>

            <ContactInfoContainer>
            <H2>
                Kontakt Styret
            </H2>
            <InlineContainer>
            <P>E-post:</P>
            <Link href="mailto:styret@hc.ntnu.no">styret@hc.ntnu.no</Link>
            </InlineContainer>
            <ContactInfo>
                <P><em>pHormand:</em> Kurt-Inge Midtbø,</P>
                <InlineContainer>
                    <Link href="mailto:leder@hc.ntnu.no"><FaEnvelope />leder@hc.ntnu.no</Link>
                    <P>, <FaPhone/> 97083134</P>
                </InlineContainer>
            </ContactInfo>
            <ContactInfo>
                <P><em>VicepHormand:</em> Sebastian Johan Varegg,</P>
                <InlineContainer>
                    <Link href="mailto:nestleder@hc.ntnu.no"><FaEnvelope />nestleder@hc.ntnu.no</Link>
                    <P>, <FaPhone/> 48350399</P>
                </InlineContainer>
            </ContactInfo>
            <ContactInfo>
                <P><em>Secreteuse:</em> Celine Hansen,</P>
                <InlineContainer>
                    <Link href="mailto:sekretar@hc.ntnu.no"><FaEnvelope />sekretar@hc.ntnu.no</Link>
                    <P>, <FaPhone/> 95494077</P>
                </InlineContainer>
            </ContactInfo>
            <ContactInfo>
                <P><em>Kasserer:</em> Hedda Vrangsund Mikalsen,</P>
                <InlineContainer>
                    <Link href="mailto:kasserer@hc.ntnu.no"><FaEnvelope />kasserer@hc.ntnu.no</Link>
                </InlineContainer>
            </ContactInfo>
            <ContactInfo>
                <P><em>WebsjaepH:</em> Ola Aarflot Skar,</P>
                <InlineContainer>
                    <Link href="mailto:websjef@hc.ntnu.no"><FaEnvelope />websjef@hc.ntnu.no</Link>
                </InlineContainer>
            </ContactInfo>
            <ContactInfo>
                <P><em>pHaestsjaepH:</em> Ingrid Sutterud,</P>
                <InlineContainer>
                    <Link href="mailto:festsjef@hc.ntnu.no"><FaEnvelope />festsjef@hc.ntnu.no</Link>
                </InlineContainer>
            </ContactInfo>
            <ContactInfo>
                <P><em>KjellersjaepH:</em> Cecilie Ødegaarden Gjertsen,</P>
                <InlineContainer>
                    <Link href="mailto:kjellersjef@hc.ntnu.no"><FaEnvelope />kjellersjef@hc.ntnu.no</Link>
                </InlineContainer>
            </ContactInfo>
            <ContactInfo>
                <P><em>IndustrisjaepH:</em> Hilde-Marie Hulleberg Gransjøen,</P>
                <InlineContainer>
                    <Link href="mailto:industrisjef@hc.ntnu.no"><FaEnvelope />industrisjef@hc.ntnu.no</Link>
                </InlineContainer>
            </ContactInfo>
            </ContactInfoContainer>

            <SocialMediaContainer>
                <H2>Sosiale medier</H2>
                    <SocialMedia>
                        <Link href="https://www.instagram.com/hcntnu/"><FaCamera/>Instagram</Link>
                    </SocialMedia>
                    <SocialMedia>
                        <Link href="https://www.facebook.com/HoiskolensChemikerforening"><FaFacebook/>Facebook side</Link>
                    </SocialMedia>
                    <SocialMedia>
                        <Link href="https://www.facebook.com/groups/1505975139619109"><FaFacebook/>Facebook medlemsgruppe</Link>
                    </SocialMedia>
            </SocialMediaContainer>
        </PageContainer>
    )
};

const InlineContainer = styled.div`
  display: flex;
  align-items: center; // Aligns items vertically in the center
  gap: 7px; // Adds space between the elements
  justify-content: center; // Center-align items horizontally in the flex container
`;

const Link = styled(baseLink)`
    font-size: 16px;
    line-height: 1.5; // Adjust line height as needed
    vertical-align: middle; // Aligns the link vertically in the middle
    color: #FFBF00 !important; // Using !important to override other styles
    display: flex; // To align icon with text
    align-items: center; // Center align icon with text
    gap: 5px; // Add space between icon and text
`;

const P = styled(baseP)`
  margin: 0; // Removes default margin
  line-height: 1.5; // Match line height with Link
  vertical-align: middle; // Aligns text vertically in the middle
  text-align: center; // Center-align the text
`;

const ContactInfoContainer = styled.div`
    margin: 10px;
    text-align: center; // Center-align the contact info container
`;

const ContactInfo = styled.div`
    margin: 15px;
    text-align: center; // Center-align the contact info
`;

const SocialMediaContainer = styled.div`
    margin: 15px;
    text-align: center; // Center-align the social media container
`;

const SocialMedia = styled.div`
    display: flex; 
    text-align: center; // Center-align the social media 
    justify-content: center;
`;