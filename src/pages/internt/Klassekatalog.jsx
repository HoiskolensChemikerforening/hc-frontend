import React, { useState } from "react";
import styled from "styled-components";
import { H1, H2, P, Link, WideTitle } from "../../components/Text";
import { PageContainer } from "../../components/Layout";
import { FormContainer, TextField, DropDown, Option} from "../../components/Form";
import { Button } from "../../components/Button";

export const Klassekatalog = () => {
  const [profiles, setProfiles] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [year, setYear] = useState(1);
  const GRADES = { FORSTE: 1, ANDRE: 2, TREDJE: 3, FJERDE: 4, FEMTE: 5, FERDIG: 6 };

   // Handle search field change
   const handleSearchFieldChange = (e) => {
    setSearchField(e.target.value);
  };

   // Handle dropdown change
  const handleDropdownChange = (e) => {
   const selectedYear = e.target.value;
   setYear(GRADES[selectedYear]);
  };


  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetchProfiles();
  };

  // Fetch profiles based on year or search field
  const fetchProfiles = () => {
    let url = `/api/profiles?year=${year}`;
    if (searchField) {
      url = `/api/profiles?search=${searchField}`;
    }
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProfiles(data));
  };
  
  return(
    <OuterWrapper>
      <PageContainer>
        <WideTitle>Klassekatalog</WideTitle>
        <ContentBox>
        <KatalogForm onSubmit={handleFormSubmit}>
             <TextField width="30%"
              placeholder="Søk" 
              value={searchField} 
              onChange={handleSearchFieldChange}
            />
            <SideBySideContainer>
            {year >= GRADES.TREDJE && year <= GRADES.FERDIG && (
              <DropDown width="40%" >
              <Option value="ALLE">Alle</Option>
              <Option value="ANVENDT">Anvendt</Option>
              <Option value="BIOTEKNOLOGI">Bioteknologi</Option>
              <Option value="MATERIAL">Material</Option>
              <Option value="PROSESS">Prosess</Option>
              </DropDown>
            )}
            <DropDown width="40%" onChange={handleDropdownChange}>
              <Option value="FORSTE">Første</Option>
              <Option value="ANDRE">Andre</Option>
              <Option value="TREDJE">Tredje</Option>
              <Option value="FJERDE">Fjerde</Option>
              <Option value="FEMTE">Femte</Option>
              <Option value="FERDIG">Ferdig</Option>            
              </DropDown>
              </SideBySideContainer>
          </KatalogForm>
          <Catalogue>
            
          </Catalogue>
        </ContentBox>
      </PageContainer>
    </OuterWrapper>
  );
};

const OuterWrapper = styled.div`
  background-color: var(--gray-10);
  min-height: 100vh;
`;

const ContentBox = styled.div`
  background-color: white;
  width: 90%;
  border-radius: 10px;
  padding: 0 20px;
`;

const Catalogue = styled.div`
  display: flex;
  align-self: center;
  margin: 20px 0px;
  width: 30%;
`;

const KatalogForm = styled(FormContainer)`
  flex-direction: row;
  min-height: 40px;
  max-height: 80px;
  align-items: center;
  flex-wrap: wrap;
`; 

const SideBySideContainer = styled(KatalogForm)`
  display: flex;
  width: 100%; // Take full width on small screens
  
  @media (min-width: 768px) {
    width: auto; // Take auto width on larger screens
  }
`;