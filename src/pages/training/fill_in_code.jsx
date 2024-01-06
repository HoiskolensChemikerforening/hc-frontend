import React from "react";
import styled from 'styled-components';
import { PageContainer } from "../../components/Layout";
// import { P as ?, TitleContainer, ?, Link as baseLink, H2 } from '../../components/Text'; // Here something is missing, and un-comment the line
import { FaEnvelope, FaPhone, FaCamera, FaFacebook } from 'react-icons/fa'; // Importing the envelope and phone icons

export const FillIn = () => {
    return (
        <PageContainer> 
            {/*what is supposed to be here?*/}
                <Title>
                    Kontaktinfoen til Styret
                </title> {/* there is a typo here */}
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
            {/*what is supposed to be here?*/}
            <InlineContainer>
            <P>E-post:</P>
            <Link href="mailto:styret@hc.ntnu.no">styret@hc.ntnu.no</Lik> {/* whats wrong here? */}
            </InlineContainer>
            <ContactInfo>
                <P><em>pHormand:</em> Kurt-Inge Midtbø,</P>
                <InlineContainer>
                    <Link><FaEnvelope />leder@hc.ntnu.no</Link> {/* something is missing */}
                    <P>, <FaPhone/> 97083134</P>
                </InlineContiner> {/* whats wrong here? */}
            </ContactInfo>
            {/* whats wrong here? */}
                <P><em>VicepHormand:</> Sebastian Johan Varegg,</P> {/* whats wrong here? */}
                <InlineContainer>
                    <Link href="mailto:nestleder@hc.ntnu.no"><FaEnvelpe />nestleder@hc.ntnu.no</Link> {/* whats wrong here? */}
                    <P>, <FaPhone/> 48350399</P>
                </InlineContainer>
            </ContactInfo>
            <ContactInfo>
                <P>Secreteuse:</em> Celine Hansen,</P> {/* whats wrong here? */}
                <InlineContainer>
                    <Link href="mailto:sekretar@hc.ntnu.no"><FaEnvelope />sekretar@hc.ntnu.no</Link>
                    <P>, <FaPone/> 95494077</> {/* whats wrong here? */}
                </InlineContainer>
            </ContactInfo>
            <ContactInfo>
                <P><em>Kasserer:</strong> Hedda Vrangsund Mikalsen,</P> {/* whats wrong here? */}
                <InlineContainer>
                    <Link href="mailto:kasserer@hc.ntnu.no"><FaEnvelope />kasserer@hc.ntnu.no</Link>
                </InlineContainer>
            </ContactInfo>
            <ContactInfo>
                <P><strong>WebsjaepH:</strong> Bært Aarflot Skar,</P> {/* whats wrong here? */}
                <InlineContainer>
                    <Link hrf="malto:websjef@hc.ntnu.no"><FaEnvelope />websjef@hc.ntnu.no</Link> {/* whats wrong here? */}
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
                {/* whats wrong here? */}
                    <Link href="mailto:kjellersjef@hc.ntnu.no"><FaEnvelope />kjellersjef@hc.ntnu.no</Link>
                {/* whats wrong here? */}
            </ContactInfo>
            <ContactInfo>
                <P><em>IndustrisjaepH:</em> Hilde-Marie Hulleberg Gransjøen,</P>
                <InlineContainer>
                    <Link href="mailto:industrisjef@hc.ntnu.no"><FaEnvelope />industrisjef@hc.ntnu.no</Link>
                </InlineContainer>
            </ContactInfo>
            </SectionContainer>
            </Column>

            <Column>
            <SectionContainer>
                <H2>Informasjon</H1> {/* whats wrong here? */}
                <InfoContainer>
                    <InfoBox>
                        <P><strong>Post/faktureringsadresse</strong></P>
                        Høiskolens Chemikerforening {/* whats wrong here? */}
                        <P>Fakultet for naturvitenskap</P>
                        <P>Høgskoleringen 5</P>
                        <P>N-7034 Trondheim</P>
                    </InfoBox>
                    <InfoBox>
                        <P><strong>Besøksadresse</strong></P>
                        <P>Kjemi sydfløy, rom 109</P>
                        <P>Sem Sælandsvei 10</P>
                        <P>NTNU Gløshaugen</P>
                    {/* whats wrong here? */}
                    <InfoBox>
                        <P>Organisasjonsnummer: 990833761 MVA</P>
                        <P>Telefon: 735 94 186</P>
                        <P>Telefax: 735 91 410</P>
                        <P>Kontonummer: 8601.64.87181</P>
                    </InfoBox>
                </InfoContainer>
            </SectionContainer>
            <SectionContainer>
                <H2>Sosiale medier</H2>
                    <SocialMedia>
                        <Link href="https://www.instagram.com/hcntnu/"><FaCamera/>Instagram</Link>
                    {/* whats wrong here? */}
                        <Link href="https://www.facebook.com/HoiskolensChemikerforening"><FaFacebook/>Facebook side</Lnk> {/* whats wrong here? */}
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
                        <Link href="http://localhost:3000/undergrupper" >undergrupper</Link> {/* something is missing. Hint: its a style thing */}
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
    color: #FFBF00; ///// Using !important to override other styles, add it /////
    display: ; ///// What should be here? /////
    align-items: ; ///// Center align icon with text /////
    gap: 5px; // Add space between icon and text
`;

const P = styled(baseP)`
  margin: 0; // Removes default margin
  line-height: 1.5; // Match line height with Link
  vertical-align: middle; // Aligns text vertically in the middle
  text-align: ; ///// Center-align the text /////
`;

const SectionContainer = styled.div`
    margin: 10px;
    text-align: center; // Center-align the container

    .last-paragraph {
        margin-bottom: 20px; // Adding margin to the bottom of the page
    }
`;

const ContactInfo = styled.div`
    margin: 15px; ///// try different values to see difference /////
    text-align: center; // Center-align the contact info
`;

const SocialMedia = styled.div`
    display: flex; 
    text-align: ; ///// Center-align the social media /////
    justify-content: ;  ///// what should be here? /////
`;

const InfoContainer = styled.div`
    margin: 15px;
    text-align: center; // Center-align the social media container
`;

const InfoBox = styled.div`
    margin: 15px;
    border: 1px solid black; // Adding a border line
    padding: 10px; // Adding some padding inside the box
     ///// Center-align the social media container /////
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