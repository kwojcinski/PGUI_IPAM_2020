import React from "react";
import './Homepage.css'
import background from '../../resources/network-image.jpg'

const Homepage = () => {
  return (
      <div className='Homepage' style={{backgroundImage:`url(${background})`}}>
        <h1 className='title'> Aplikacja do ewidencji zasobów sieciowych - IPAM </h1>

        <article>
          <h3>Zakres funkcjonalny</h3>
          <p>
            Zakres funkcjonalny aplikacji powinien być rozsądny - aplikacja powinna od początku realizować jakieś
            wybrane
            przez zespół zadanie.
          </p>
        </article>

        <article>
          <h3> Zakres wymagań </h3>
          <ul>
            <li><p>Aplikacja powinna być napisana zgodnie z architekturą Single Page application.</p></li>
            <li><p>Aplikacja powinna umożliwiać użytkownikowi wczytanie oraz eksport całej bazy z/do pliku.</p></li>
            <li><p>Aplikacja powinna przechowywać bazę danych w jakiejś scentralizowanej aplikacji (dowolnie wybrany
              backend lub baza noSQL, np. Firebase)</p></li>
            <li><p>Aplikacja powinna być wygodna i intuicyjna w użyciu.</p></li>
            <li><p>Aplikacja powinna umożliwiać modyfikowanie (edycję) istniejących wpisów w wcześniej zapisanym
              projekcie.</p></li>
            <li>
              Aplikacja powinna minimalnie obejmować:
              <ol>
                <li><p>rejestrację hostów / urządzeń</p></li>
                <li><p>rejestrację urządzeń - adresów IP (ip, hostname, opis, MAC address, czy brama, własciciel,
                  urządzenie - opis, fizyczna lokalizacja opis)</p></li>
                <li><p>rejestrację sieci VLAN (id vlan, opis, związane z nim sieci)</p></li>
                <li><p>rejestrację sieci IP (sieć, maska, opis, vlan, nameservers, location, routable, public / dmz,
                  dynamicznie przydzielane IP lub statycznie)</p></li>
                <li><p>definiowanie NAT (name, device, opis, adres ip zewnętrzny, sieć wewnętrzna)</p></li>
                <li><p>fizyczne lokalizacje (gdzie, opis)</p></li>
              </ol>
            </li>
            <li><p>Aplikacja powinna przechowywać bazę danych w jakiejś scentralizowanej aplikacji (dowolnie wybrany
              backend
              lub baza noSQL, np. Firebase)</p></li>
            <li><p>Aplikacja w szczególności powinna umożliwiać wizualizację szaf serwerowych
              (np.:<i>
                <a href='https://phpipam.net/css/images/screenshots/racks.png'>https://phpipam.net/css/images/screenshots/racks.png</a>
              </i> ).</p></li>
            <li><p>Aplikacja powinna udostępniać tylko minimalną ilość danych dla każdego rodzaju przechowywanych danych
              (czasami są to trzy, cztery atrybuty!!!)</p></li>
            <li><p>W trakcie pisania sugeruję zainspirować się aplikacją:
              <i> <a href='https://demo.phpipam.net'>https://demo.phpipam.net</a> </i>
              (oczywiście wasza aplikacja powinna obejmować maksimum 5% funkcjonalności!)</p></li>
          </ul>
        </article>

        <article>
          <h3>Zawartość projektu</h3>
          <ul>
            <li><p>Dokument przedstawiający model dziedziny użytkownika oraz interfejsu przygotowany w
              formie opisowej oraz uzupełniony diagramami UML. To jest abstrakcyjny model obiektowy interfejsu.</p></li>
            <li><p>Prototyp funkcjonalnego wykonanego w dowolnie wybranym narzędziu umożliwiającym
              wykonanie statycznego prototypu interfejsu użytkownika. Wynikiem jest dokument zawierający opisane
              projekty wizualne (funkcjonalne - nie musi to być docelowy projekt graficzny) wszystkich ekranów
              realizowanych w systemie.</p></li>
            <li><p>Dokument projektu architektury. Dokument tekstowy opisujący zastosowaną technologię oraz wybrany
              wzorzec projektowy do realizacji synchronizacji stanu między komponentami.</p></li>
            <li><p>Zrealizowana aplikacja. Może być udostępniona w dowolnym serwisie umożliwiającym hostowanie (np. <a
                href="https://codesandbox.io">https://codesandbox.io</a>)</p></li>
            <li><p>Instrukcja użytkownika wykonana w formie przewodnika jak to zrobić. Instrukcja użytkownika jest
              opracowana ‘zadaniowo’. Czyli jak zrealizować konkretne zadania, które użytkownik potrzebuje wykonać.
              Instrukcja jest związana z dokumentem wymagań funkcjonalnych.</p></li>
          </ul>
        </article>
      </div>
  );
};

export default Homepage;