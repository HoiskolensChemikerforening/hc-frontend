Disse tre knappene har til felles at alle er plassert i en WidgetContainer. Derfor vil det være gunstig å plassere koden som endrer farge inni denne containeren. Hovering er ordet som brukes når musepekeren peker på ønsket komponent. For å endre egenskapene til komponenten ved hovering, kan man bruke

&:hover{

}

inni containeren. Koden sier at hvis komponenten pekes på, skal xxx skje.

Deretter må ønskede egenskaper ved hover defineres. Vi ønsker å endre bakgrunnsfargen til mørkegul. Her kan det være gunstig å bruke HEX-farger. Med ett google-søk på dette kan koden til mørkegul farge defineres som for eksempel #ebce3d. Legger dette inn i koden og får

&:hover {
    background-color: #ebce3d;
}

Videre må cursoren endres fra arrow til pointer. Dette kan implementers som under

&:hover {
    background-color: #ebce3d;
    cursor: pointer;
}

Og dermed er koden ferdig! Det kan også poengteres at hover-farge fra HC-gul til mørkegul allerede er implementert på flere steder på nettsiden. Koking av kode vil derfor også være akseptabel løsning:)