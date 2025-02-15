import React from "react";
import styled from 'styled-components';
import { PageContainer } from "../../components/Layout";
import { P as baseP, TitleContainer, Title, Link as baseLink, H2 } from '../../components/Text';
import { FaEnvelope, FaPhone, FaCamera, FaFacebook } from 'react-icons/fa'; // Importing the envelope and phone icons


export const Kontaktinfo = () => {
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


           <TwoColumnLayout>
           <Column>
           <SectionContainer>
           <H2>
               Kontakt Styret
           </H2>
           <InlineContainer>
           <P>E-post:</P>
           <Link href="mailto:styret@hc.ntnu.no">styret@hc.ntnu.no</Link>
           </InlineContainer>
           <ContactInfo>
               <P><em>pHormand:</em> Deniz Yapici,</P>
               <InlineContainer>
                   <Link href="mailto:leder@hc.ntnu.no"><FaEnvelope />leder@hc.ntnu.no</Link>
                   <P>, <FaPhone/> 97797089</P>
               </InlineContainer>
           </ContactInfo>
           <ContactInfo>
               <P><em>VicepHormand:</em> Marko Jevtic,</P>
               <InlineContainer>
                   <Link href="mailto:nestleder@hc.ntnu.no"><FaEnvelope />nestleder@hc.ntnu.no</Link>
                   <P>, <FaPhone/> 40088169</P>
               </InlineContainer>
           </ContactInfo>
           <ContactInfo>
               <P><em>Secreteuse:</em> Mari Kiste,</P>
               <InlineContainer>
                   <Link href="mailto:sekretar@hc.ntnu.no"><FaEnvelope />sekretar@hc.ntnu.no</Link>
                   <P>, <FaPhone/> 46795005</P>
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
               <P><em>pHaestsjaepH:</em> Sumaya Elmi,</P>
               <InlineContainer>
                   <Link href="mailto:festsjef@hc.ntnu.no"><FaEnvelope />festsjef@hc.ntnu.no</Link>
               </InlineContainer>
           </ContactInfo>
           <ContactInfo>
               <P><em>KjellersjaepH:</em> Viktoria Sol Hallsdottir,</P>
               <InlineContainer>
                   <Link href="mailto:kjellersjef@hc.ntnu.no"><FaEnvelope />kjellersjef@hc.ntnu.no</Link>
               </InlineContainer>
           </ContactInfo>
           <ContactInfo>
               <P><em>IndustrisjaepH:</em> Endre Wierød Rønning,</P>
               <InlineContainer>
                   <Link href="mailto:industrisjef@hc.ntnu.no"><FaEnvelope />industrisjef@hc.ntnu.no</Link>
               </InlineContainer>
           </ContactInfo>
           </SectionContainer>
           </Column>


           <Column>
           <SectionContainer>
               <H2>Informasjon</H2>
               <InfoContainer>
                   <InfoBox>
                       <P><strong>Post/faktureringsadresse</strong></P>
                       <P>Høiskolens Chemikerforening</P>
                       <P>Fakultet for naturvitenskap</P>
                       <P>Høgskoleringen 5</P>
                       <P>N-7034 Trondheim</P>
                   </InfoBox>
                   <InfoBox>
                       <P><strong>Besøksadresse</strong></P>
                       <P>Kjemi sydfløy, rom 109</P>
                       <P>Sem Sælandsvei 10</P>
                       <P>NTNU Gløshaugen</P>
                   </InfoBox>
                   <InfoBox>
                       <P>Organisasjonsnummer: 990833761 MVA</P>
                       <P>Telefon: 735 94 186</P>
                       <P>Telefax: 735 91 410</P>
                       <P>Kontonummer: 9051.15.65226</P>
                   </InfoBox>
               </InfoContainer>
           </SectionContainer>
           <SectionContainer>
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
           </SectionContainer>
           </Column>
           </TwoColumnLayout>
           <SectionContainer>
               <H2>Komiteer og undergrupper</H2>
                   <InlineContainer>
                       <P className="last-paragraph">Du finner kontaktinformasjonen til alle våre komiteer og undergrupper på siden</P>
                       <Link href="http://localhost:3000/undergrupper" className="last-paragraph">undergrupper</Link>
                   </InlineContainer>
           </SectionContainer>
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

const SectionContainer = styled.div`
   margin: 10px;
   text-align: center; // Center-align the contact info container


   .last-paragraph {
       margin-bottom: 20px; // Adjust this value as needed
   }
`;

const ContactInfo = styled.div`
   margin: 15px;
   text-align: center; // Center-align the contact info
`;

const SocialMedia = styled.div`
   display: flex;
   text-align: center; // Center-align the social media
   justify-content: center;
`;

const InfoContainer = styled.div`
   margin: 15px;
   text-align: center; // Center-align the social media container
`;

const InfoBox = styled.div`
   margin: 15px;
   border: 1px solid black; // Adding a border line
   padding: 10px; // Adding some padding inside the box
   text-align: center; // Center-align the social media container
   border-radius: 20px;
   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); // Adding shadow
`;

const TwoColumnLayout = styled.div`
 display: flex;
 justify-content: center;
 gap: 20px; // Adjust the gap between the two columns
`;

const Column = styled.div`
 flex: 1; // Each column takes up equal space
`;

