import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import styled, {css} from "styled-components";
import { Button } from "../../components/Button"; 
import { Col, PageContainer } from "../../components/Layout";
import { H1, H2, H3, P, Title, TitleContainer} from "../../components/Text";
import { Link } from "react-router-dom";
import { fetchList, checkPermission, postRequest } from "../../utils/requests";
import AuthContext from "../../context/AuthContext";
// import { TextField, ImageUpload, DropDown, TextArea } from "../../components/Form";
import Checkbox from '@mui/material/Checkbox';
import { DatePicker, TimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dialog, DialogContent, DialogActions } from '@mui/material';
import MuiButton from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import "dayjs/locale/nb"; // Load Norwegian locale

export const CreateSocialEvent = () => {
  const [canAddSocial, setCanAddSocial] = useState(false); // brukere blir ikke sjekket dersom de kun skriver inn URL. Må fikses
  const [eventType, setEventType] = useState(""); // holds either "published" or "tentative"
  const [showModal, setShowModal] = useState(false);
  let {user} = useContext(AuthContext); // må passe på at bruker blir sjekket ordentlig slik at kun de med tilgang kan legge til events
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [committees, setCommittees] = useState([]);


// de under her er et forsøk på å legge in tidsdata riktig. Fungerer ikke enda :)
  const [eventDate, setEventDate] = useState(dayjs());
  const [eventTime, setEventTime] = useState(dayjs());
  const [registerStartDate, setRegisterStartDate] = useState(dayjs());
  const [registerStartTime, setRegisterStartTime] = useState(dayjs());
  const [registerDeadlineDate, setRegisterDeadlineDate] = useState(dayjs());
  const [registerDeadlineTime, setRegisterDeadlineTime] = useState(dayjs());
  const [deregisterDeadlineDate, setDeregisterDeadlineDate] = useState(dayjs());
  const [deregisterDeadlineTime, setDeregisterDeadlineTime] = useState(dayjs());

  //const Modal = ({ onClose, children, showCloseButton = true }) => ( // fungerer denne som den skal? 
    //<StyledModal>
      //{children}
      //{showCloseButton && (
        //<Button primary type="button" onClick={onClose} style={{ marginTop: '20px' }}>Lukk</Button>
      //)}
    //</StyledModal>
  //);
const Modal = ({ onClose, children, showCloseButton = true }) => {
  // Render dialogen i #root i stedet for i body
  const container =
    typeof window !== "undefined" ? document.getElementById("root") : undefined;

  return (
    <Dialog
      open
      onClose={() => {
        // Sørg for at ingenting i bakgrunnen har fokus
        if (typeof document !== "undefined") {
          document.activeElement?.blur?.();
        }
        onClose?.();
      }}
      aria-labelledby="modal-title"
      container={container}
    >
      <DialogContent>{children}</DialogContent>
      {showCloseButton && (
        <DialogActions>
          {/* Bruk MUI Button her for å få korrekt autofocus/fokushåndtering */}
          <MuiButton onClick={onClose} autoFocus>
            Lukk
          </MuiButton>
        </DialogActions>
      )}
    </Dialog>
  );
};


  const handleResize = (e) => { // lets the description area expand when more text
    const textarea = e.currentTarget;
    textarea.style.height = 'inherit'; // resets height so scrollHeight can be re-calculated 
    textarea.style.height = `${textarea.scrollHeight}px`; // sets new height
  };  

const handleImageChange = (e) => {
  const input = e.currentTarget;
  const file = input.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onloadend = () => setImagePreviewUrl(reader.result);
  reader.readAsDataURL(file);

  setFormData(prev => ({ ...prev, image: file }));
};

  const [formData, setFormData] = useState({ // her er det nå færre felter enn på original nettside. Det er fordi jeg
    // har fjernet noen felter som jeg tenker er unødvendige da de ikke brukes til arrangementer.
    author: user.user_id,
    committee: 0, 
    title: '',
    date: '2025-10-10T18:00:00+02:00', 
    register_startdate: '2025-10-09T19:40:00+02:00', 
    register_deadline: '2025-10-10T18:00:00+02:00',
    deregister_deadline: '2025-10-10T18:00:00+02:00',
    location: '',
    description: '',
    image: '',
    sluts: 0,
    allowed_grades: [],
    published: false,
    tentative: false,
    payment_information: '',
    price_member: 0,
    price_not_member: 0,
  });

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const combineDateTime = (date, time) => {
    return date
        .set("hour", time.hour()) // Set hours from time
        .set("minute", time.minute()) // Set minutes from time
        .set("second", 0) // Always reset seconds
        .toISOString(); // Convert to ISO format
};
    
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!eventType || isSubmitting) {
    setShowModal(true);
    return;
  }
  setIsSubmitting(true);
  try {
    const finalEventDate       = combineDateTime(eventDate, eventTime);
    const finalRegisterStart   = combineDateTime(registerStartDate, registerStartTime);
    const finalRegisterDl      = combineDateTime(registerDeadlineDate, registerDeadlineTime);
    const finalDeregisterDl    = combineDateTime(deregisterDeadlineDate, deregisterDeadlineTime);

    const fd = new FormData();
    fd.append("author",              String(formData.author));
    fd.append("committee",           String(formData.committee));
    fd.append("title",               formData.title);
    fd.append("date",                finalEventDate);
    fd.append("register_startdate",  finalRegisterStart);
    fd.append("register_deadline",   finalRegisterDl);
    fd.append("deregister_deadline", finalDeregisterDl);
    fd.append("location",            formData.location);
    fd.append("description",         formData.description);
    fd.append("published",           String(formData.published));
    fd.append("tentative",           String(formData.tentative));
    fd.append("payment_information", formData.payment_information);
    fd.append("price_member",        String(formData.price_member ?? 0));
    fd.append("price_not_member",    String(formData.price_not_member ?? 0));
    fd.append("sluts",               String(formData.sluts ?? 0)); // evt. endre "slots" til riktig backend-felt
    formData.allowed_grades.forEach((g) => {
      // Prøv uten [] først:
      fd.append("allowed_grades", String(g));

      // Hvis backend krever bracket-syntaks, bytt til:
      // fd.append("allowed_grades[]", String(g));
    });

    if (formData.image instanceof File) {
      fd.append("image", formData.image, formData.image.name);
    }

    await postRequest("arrangementer/api/sosial/opprett/", fd);
    setIsSubmittedSuccessfully(true);
  } catch (err) {
    // her kan du vise feilmelding i UI basert på err.response?.data
  } finally {
    setIsSubmitting(false);
  }
};

  // Publisert/Tentativ (utelukkende)
  const handleExclusiveCheckboxChange = (field, checked) => {
    setEventType(checked ? field : null);
    setFormData(prev => ({
      ...prev,
      published: field === "published" ? checked : false,
      tentative: field === "tentative" ? checked : false,
    }));
  };


  // Klassetrinn (flervalg)
  const handleAllowedGradeChange = (grade, checked) => {
    setFormData(prev => {
      const next = checked
        ? [...prev.allowed_grades, grade]
        : prev.allowed_grades.filter(g => g !== grade);
      return { ...prev, allowed_grades: next.sort((a,b) => a - b) };
    });
  };

const handleCommitteeChange = ({ target: { value } }) => {
  setFormData((prev) => ({ ...prev, committee: parseInt(value, 10) }));
};

  // const updateAuthor = () => { må ikke sende all info? Fungerer ikke enda, men kan muligens slettes helt?
  //   if (user) {
  //     let userUrl = 'http://localhost:8000/api/profil/';
  //     userUrl += `${user.user_id}`;
  //     fetchList(userUrl, setUsertest);
  //     console.log("User id er ", user.user_id);
  //     try {
  //       // Update formData with the author information
  //       setFormData((prevFormData) => ({...prevFormData,
  //         author: {
  //           username: user.username,
  //           email: user.email,
  //           first_name: user.first_name,
  //           last_name: user.last_name,
  //           full_name: user.full_name
  //         }
  //       }));
  //     } catch (error) {
  //       console.error('Error with author information:', error);
  //     }
  //   }
  // };
  
  useEffect(() => {
    checkPermission("events.add_social", user, setCanAddSocial);
    fetchList("undergrupper/api/", setCommittees);
    //updateAuthor(); // må kun sende user_id? så denne koden kan muligens slettes
  }, [user]);

  return (
    <>
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <p>Du må velge om arrangementet ditt skal være publisert eller tentativt!</p>
      </Modal>
    )}
    {isSubmittedSuccessfully && (
      <Modal onClose={() => setIsSubmittedSuccessfully(false)}>
        Arrangementet ditt er opprettet med suksess!
      </Modal>
    )}

    <OuterWrapper>
      <TitleContainer>
        <Title>Opprett sosialt arrangement</Title>
      </TitleContainer>
      <P style={{paddingLeft:'80px'}}>Her lager du de beste arrangementene på Gløs!</P>


      <ContentBox>
        <form onSubmit={handleSubmit}>

        <FloatingLabelInputContainer>
          <StyledInput
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder=" " 
            required
          />
          <FloatingLabel htmlFor="title">Tittel</FloatingLabel>
        </FloatingLabelInputContainer>

      <CheckboxContainer>
        <CheckBox>
          <Checkbox
            checked={eventType === "published"}
            onChange={(_, checked) => handleExclusiveCheckboxChange("published", checked)}
            color="primary"
            disableRipple
            sx={{ '&.Mui-checked': { color: '#FFcb26' }, '&:hover': { backgroundColor: 'rgba(255,203,38,0.1)' } }}
          />
          <P>Publisert</P>
        </CheckBox>
        <CheckBox>
          <Checkbox
            checked={eventType === "tentative"}
            onChange={(_, checked) => handleExclusiveCheckboxChange("tentative", checked)}
            color="primary"
            disableRipple
            sx={{ '&.Mui-checked': { color: '#FFcb26' }, '&:hover': { backgroundColor: 'rgba(255,203,38,0.1)' } }}
          />
          <P>Tentativt</P>
        </CheckBox>
      </CheckboxContainer>

          <div>
            <P>Hvilken komité arrangerer?</P>
            <StyledDropDown
              id="committee"
              name="committee"
              onChange={handleCommitteeChange}
              required
            >
              <option value={null}>Velg din komité!</option>
              {committees.map((committee) => {
                return <option key={committee.id} value={committee.id}>{committee.title}</option>
              })}
            </StyledDropDown>
          </div>

          <P>Legg inn følgende datoer og klokkeslett:</P>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="nb">
          <TimeContainer>
            <div>
              <TimeBox>
              <DatePicker
                label="Dato for arrangementet"
                value={eventDate}
                onChange={(newDate) => setEventDate(newDate ? dayjs(newDate) : null)}
                slotProps={{ textField: { variant: "outlined" } }}
              />
              <TimePicker
                label="Tidspunkt for arrangementet"
                value={eventTime}
                onChange={(newTime) => {
                  const safeTime = newTime ? dayjs(newTime) : null;
                  setEventTime(safeTime);
                }}
                slotProps={{ textField: { variant: "outlined" } }}
              />
              </TimeBox>
            </div>
            <div>
              <TimeBox>
              <DatePicker
                label="Påmelding åpner"
                value={registerStartDate}
                onChange={(newDate) => {
                  const safeDate = newDate ? dayjs(newDate) : null;
                  setRegisterStartDate(safeDate);
                }}
                slotProps={{ textField: { variant: "outlined" } }}
              />
              <TimePicker
                label="Påmelding åpner (tid)"
                value={registerStartTime}
                onChange={(newTime) => {
                  const safeTime = newTime ? dayjs(newTime) : null;
                  setRegisterStartTime(safeTime);
                }}
                slotProps={{ textField: { variant: "outlined" } }}
              />
              </TimeBox>
            </div>
            <div>
              <TimeBox>
              <DatePicker
                label="Påmelding stenger"
                value={registerDeadlineDate}
                onChange={(newDate) => {
                  const safeDate = newDate ? dayjs(newDate) : null;
                  setRegisterDeadlineDate(safeDate);
                }}
                slotProps={{ textField: { variant: "outlined" } }}
              />
              <TimePicker
                label="Påmelding stenger (tid)"
                value={registerDeadlineTime}
                onChange={(newTime) => {
                  const safeTime = newTime ? dayjs(newTime) : null;
                  setRegisterDeadlineTime(safeTime);
                }}
                slotProps={{ textField: { variant: "outlined" } }}
              />
              </TimeBox>
            </div>
            <div>
              <TimeBox>
              <DatePicker
                label="Avmelding stenger"
                value={deregisterDeadlineDate}
                onChange={(newDate) => {
                  const safeDate = newDate ? dayjs(newDate) : null;
                  setDeregisterDeadlineDate(safeDate);
                }}
                slotProps={{ textField: { variant: "outlined" } }}
              />
              <TimePicker
                label="Avmelding stenger (tid)"
                value={deregisterDeadlineTime}
                onChange={(newTime) => {
                  const safeTime = newTime ? dayjs(newTime) : null;
                  setDeregisterDeadlineTime(safeTime);
                }}
                slotProps={{ textField: { variant: "outlined" } }}
              />
              </TimeBox>
            </div>
          </TimeContainer>
          </LocalizationProvider>

          <br/>
          <br/>
          <br/>

          <FloatingLabelInputContainer>
            <StyledInput
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder=" " 
              required
            />
            <FloatingLabel htmlFor="location">Sted</FloatingLabel>
        </FloatingLabelInputContainer>

          <div>
            <FloatingLabelTextAreaContainer>
              <FloatingDynamicTextArea
                id="description"
                name="description"
                value={formData.description}
                onChange={(e) => {
                  handleChange(e); 
                  handleResize(e); 
                }}
                placeholder=" "
                required
              />
              <FloatingLabel htmlFor="description">Beskrivelse av arrangementet</FloatingLabel>
            </FloatingLabelTextAreaContainer>
          </div>

          <FloatingLabelInputContainer>
            <StyledInput
              type="text"
              id="payment_information"
              name="payment_information"
              value={formData.payment_information}
              onChange={handleChange}
              placeholder=" " 
              required
            />
            <FloatingLabel htmlFor="payment_information">Betalingsinformasjon</FloatingLabel>
          </FloatingLabelInputContainer>

          <br/>
          <br/>
          <br/>

          <ImgAndSlutsContainer>
            <ImgContainer>
            <H3>Last opp et bilde</H3>
            <div>
              <input 
                type="file" 
                id="image"
                name="image"
                onChange={handleImageChange} 
                required
              />
            </div>
            <div style={{ marginTop: '10px' }}>
              {imagePreviewUrl && (
                  <img src={imagePreviewUrl} alt="Preview" style={{ width: '80%', height: 'auto' }} />
              )}
            </div>
            </ImgContainer>
            <SlutsContainer>
              <LabelNumber htmlFor="sluts">Antall plasser, sett til 0 hvis åpent arrangement</LabelNumber>
              <InputNumber
                type="number"
                id="sluts"
                name="sluts"
                value={formData.sluts}
                onChange={handleChange}
                placeholder="0" 
              />
            </SlutsContainer>
          </ImgAndSlutsContainer>

          <br/>
          <br/>
          <br/>
          
          <PriceContainer>
            <div>
              <LabelNumber htmlFor="price_member">Pris for medlemmer, sett til 0 hvis gratis</LabelNumber>
              <PriceBox>
              <InputNumber 
                type="number" 
                id="price_member" 
                name="price_member" 
                value={formData.price_member} 
                onChange={handleChange}  
                />
            </PriceBox>
            </div>
            <div>
              <LabelNumber htmlFor="price_not_member">Pris for ikke-medlemmer, sett til 0 hvis gratis</LabelNumber>
              <PriceBox>
              <InputNumber 
                type="number" 
                id="price_not_member" 
                name="price_not_member" 
                value={formData.price_not_member} 
                onChange={handleChange}  
                />
            </PriceBox>
            </div>
          </PriceContainer>
            

          <div>
          <P>Hvilke klassetrinn er dette arrangementet for?</P>
          </div>
          <CheckboxContainer>
            <CheckBox>
              <Checkbox
                checked={formData.allowed_grades.includes(1)}
                onChange={(_, checked) => handleAllowedGradeChange(1, checked)}
                color="primary"
                sx={{ '&.Mui-checked': { color: '#FFcb26' }, '&:hover': { backgroundColor: 'rgba(255,203,38,0.1)' } }}
              />
              <P>Førsteklasse</P>
            </CheckBox>
            <CheckBox>
              <Checkbox
                checked={formData.allowed_grades.includes(2)}
                onChange={(_, checked) => handleAllowedGradeChange(2, checked)}
                color="primary"
                sx={{ '&.Mui-checked': { color: '#FFcb26' }, '&:hover': { backgroundColor: 'rgba(255,203,38,0.1)' } }}
              />
              <P>Andreklasse</P>
            </CheckBox>
            <CheckBox>
              <Checkbox
                checked={formData.allowed_grades.includes(3)}
                onChange={(_, checked) => handleAllowedGradeChange(3, checked)}
                color="primary"
                sx={{ '&.Mui-checked': { color: '#FFcb26' }, '&:hover': { backgroundColor: 'rgba(255,203,38,0.1)' } }}
              />
              <P>Tredjeklasse</P>
            </CheckBox>
            <CheckBox>
              <Checkbox
                checked={formData.allowed_grades.includes(4)}
                onChange={(_, checked) => handleAllowedGradeChange(4, checked)}
                color="primary"
                sx={{ '&.Mui-checked': { color: '#FFcb26' }, '&:hover': { backgroundColor: 'rgba(255,203,38,0.1)' } }}
              />
              <P>Fjerdeklasse</P>
            </CheckBox>
            <CheckBox>
              <Checkbox
                checked={formData.allowed_grades.includes(5)}
                onChange={(_, checked) => handleAllowedGradeChange(5, checked)}
                color="primary"
                sx={{ '&.Mui-checked': { color: '#FFcb26' }, '&:hover': { backgroundColor: 'rgba(255,203,38,0.1)' } }}
              />
              <P>Femteklasse</P>
            </CheckBox>
            <CheckBox>
              <Checkbox
                checked={formData.allowed_grades.includes(6)}
                onChange={(_, checked) => handleAllowedGradeChange(6, checked)}
                color="primary"
                sx={{ '&.Mui-checked': { color: '#FFcb26' }, '&:hover': { backgroundColor: 'rgba(255,203,38,0.1)' } }}
              />
              <P>Ferdig</P>
            </CheckBox>
          </CheckboxContainer>

          <Button primary type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sender inn...' : 'Opprett arrangement!'}
          </Button>
        </form>
    </ContentBox>
    </OuterWrapper> 
    </>
  )
};

const OuterWrapper = styled.div`
  background-color: var(--gray-10);
  min-height: 100vh;
`;

const ContentBox = styled.div`
  background-color: white;
  width: 90%;
  border-radius: 10px;
  padding: 20px;
  margin: 0 auto;
`;

const FloatingLabelInputContainer = styled.div`
  position: relative;
  margin-top: 10px;
  margin-bottom: 25px;
`;

const FloatingLabel = styled.label`
  position: absolute;
  top: 0;
  bottom: 0; 
  left: 0;
  font-size: 16px;
  color: #999;
  transition: all 0.3s ease;
  pointer-events: none;
  transform-origin: left bottom;
`;

const FloatingLabelTextAreaContainer = styled.div`
  position: relative;
  margin-top: 10px;
  margin-bottom: 25px;
`;

const FloatingDynamicTextArea = styled.textarea`
  width: 90%;
  height: 35px;
  padding: 7px 0;
  border: 0;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  background: transparent;
  outline: none;
  resize: none;
  box-sizing: border-box;

  &:focus {
    border-bottom-color: #000;
  }

  &:focus ~ label, &:not(:placeholder-shown) ~ label {
    top: -20px;
    font-size: 12px;
    color: #333;
  }
`;

const StyledInput = styled.input`
  width: 90%;
  border: 0;
  border-bottom: 1px solid #ccc;
  outline: 0;
  font-size: 16px;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &:focus {
    border-bottom-color: #000;
  }

  &:focus ~ ${FloatingLabel}, &:not(:placeholder-shown) ~ ${FloatingLabel} {
    top: -20px;
    font-size: 12px;
    color: #333;
  }
`;

const StyledDropDown = styled.select`
  width: 40%;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  font-size: 16px;
  color: #333 !important;
  margin-bottom: 20px;

  option {
    color: #333;
    background-color: white !important;

    &:hover {
      background-color: #FFcb26 !important; 
    }
  }
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: row; 
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center; 
  margin: 20px 0; 
`;

const TimeBox = styled.div`
  display: flex;
  flex-direction: column; 
  margin-bottom: 10px; 
  gap: 12px;
  & > input {
    margin-bottom: 5px; // Spacing between each input
  }
`;

const ImgAndSlutsContainer = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: space-between; 
  align-items: start; // Align items to the top of the container
  width: 100%; 
`;

const ImgContainer = styled.div`
  width: 50%; // Take up half of the parent container's width
  padding-right: 10px; // Optional: add padding for spacing between the two containers
  margin-top: -30px;
`;

const SlutsContainer = styled.div`
  width: 50%; // Take up half of the parent container's width
  padding-left: 10px; // Optional: add padding for spacing between the two containers
`;

const LabelNumber = styled.label`
  top: 0;
  bottom: 0; 
  left: 0;
  font-size: 16px;
  color: #999;
  pointer-events: none;
  margin-bottom: 8px;
`;

const InputNumber = styled.input`
  width: 80%;
  border: 0;
  border-bottom: 1px solid #ccc;
  outline: 0;
  font-size: 16px;
  padding: 7px 0;
  background: transparent;
`;

const PriceContainer = styled.div`
display: flex;
justify-content: space-evenly;
width: 100%;
margin-bottom: 40px;
`;

const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center; 
  margin-right: 15px; 

  P {
    margin: 0; 
    line-height: normal; 
  }

  .MuiCheckbox-root {
    padding: 9px; 
  }
`;

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fffacd;
  padding: 20px;
  z-index: 1000;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  text-align: center;
`;