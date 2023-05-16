# CanineCare
# Ungureanu Elena Alexandra, grupa 1121
- [link video- prezentare proiect](https://youtu.be/2iamTN_xaII)
- [CanineCare](https://proiect-cloud-e1e7vljtt-alexaelena2000.vercel.app/)
## 1. Introducere
Aplicatia are titlul de "CanineCare" si vine in ajutorul administratorilor unui adapost de caini. Acesta poate vizualiza toti cainii disponibili pentru adoptie, odata adoptat un caine administratorul are posibilitatea de a sterge un caine din baza de date. baza de date folosita este MongoDB, aceasta este stocata pe cloud pe o instanta de Amazon Web Services. Administratorul poate adauga foarte simplu un nou caine care trebuie dat spre adoptie. Mai mult decat atat, aplicatia dispune si de un robot pe care administratorul il poate folosi in cazul in care are nevoie de mai multe informatii despre caini. Legatura cu robotul este facuta cu ajutorul API gpt3.5 oferit de la compania OpenAI.
## 2.  Descriere problemă
Aplicatia vine in ajutorul administratorilor de la centrele de adoptii de caini. Acestia au o solutie usoara prin care pot vizualiza cainii care trebuie sa fie adoptati, poti adauga noi caini care trebuie sa fie adoptati si pot sterge un caine care a fost deja adoptat. O alta functionalitate utila este integrarea cu un robot care ofera informatii utile despre caini, in asa fel incat administratorii sa poata avea o imagine de ansamblu asupra necesitatilor cainilor, de exemplu robotul poate oferi informatii despre ce tip de mancare ar trebui dat cainilor la o anumita varsta.
## 3. Descriere API 
Aplicația utilizează o bază de date MongoDB pentru stocarea cainilor ca trebuie sa fie adoptati. Baza de date este găzduită în cloud, pe o instanță AWS.

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/73e96925-f29e-4db2-8108-96eaf2bc427b)

Baza de date contine obiecte de forma { "nume":"Max","descriere":"XYZ","varsta":"2 ani"}:

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/f1baf10f-9813-410b-8146-b6c38cddfd8d)

Datele sunt preluate din baza de date si afisate in pagina principala a aplicatiei.

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/d579eb4a-fb80-4259-8e4c-f48bab3670d8)

In aplicatie:

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/328042f7-6938-459e-bb73-a5ac3e98d14f)

Pagina principala a aplicatiei contine toate datele din baza de date reprezentate drept casete cu toate informatiile afisate. Fiecare caseta contine un buton pentru a sterge cainele din baza de date dupa ce a fost adoptat. Odata apasat butonul "Sterge" se face un apel de DELETE. 
Tot in pagina principala sunt regasite 2 butoane, unul pentru a adauga un caine care trebuie dat spre adoptie si altul pentru a accesa robotul. La apasarea butonului pentru inserare se face o rutare catre pagina de adaugare caini in baza de date, la fel si pentru celalalt buton. 

[##pagina principala](https://proiect-cloud-e1e7vljtt-alexaelena2000.vercel.app/)

Pagina de inserare a datelor despre caini: 

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/381da1d0-10e0-40fe-bdbb-27932fad7ec6)

De asemenea, pentru o utilizare mai usoara a aplicatiei am adaugat un buton care il ajuta pe utilizator sa mearga in pagina principala.
cand se apasa butonul de "Adauga" se face un apel POST care trimite datele completate in baza de date.

[##pagina_insert]https://proiect-cloud-e1e7vljtt-alexaelena2000.vercel.app/insert

Pentru a deschide pagina in care avem prezent un robot este necesar ca din pagina principala sa se apese pe butonul "PawSavant", odata apasat butonul utiliatorul este redirectionat catre un chat live.
[##pagina_chat]https://proiect-cloud-e1e7vljtt-alexaelena2000.vercel.app/chat

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/ba599b50-8c58-4293-9e03-061a9c662190)

In API-ul putem gasi urmatoarele statistici de utilizare:

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/50f937e8-0b36-4af1-8ae1-539d7522ae79)

## 4. Flux de date
### Pentru pagina principala, este efectuat un request de tip GET pentru a obtine lista cu toti cainii disponibili pentru adoptie și aceasta este afisată.

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/94781be2-85be-4ef6-b927-cd593c68aab4)

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/a49f6b23-6093-4363-8b0d-a5f771971158)

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/156f4485-1a37-47a2-9cd4-07534ceb71c1)

### Pentru pagina de adaugare a unui caine care trebuie dat spre adoptie, se face un apel POST, acesta adauga in baza de date.

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/97ed1b49-026e-428d-8ee7-dc1566760d09)

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/44023eb3-23ef-4720-88fc-c5cc56fae40a)


### Pentru stergerea unui caine din baza de date dupa ce a fost adoptat, se face un apel DELETE, acesta sterge din baza de date.

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/ee7ed598-706e-4b07-be09-5ad3c0ebb34e)
![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/2245534b-f2d0-4bf0-8b24-8a50c3429ef1)

### Pentru folosirea ChatGPT, se face un apel POST.

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/818fba37-5522-4ef8-bcef-29041f255070)


## 5. Capturi ecran aplicație

### Pagina principala

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/d3ebee61-ccab-4ffd-9f2c-1b86f0ae017a)


### Pagina de inserare

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/c0d5767c-bc03-4179-bf38-467bea9627fd)

### Pagina pentru robotul PawSavant

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/62acddf4-81aa-473e-9e89-388d9d3c073e)


## 6. Referințe

- https://gurita-alexandru.gitbook.io/cloud-computing-2023-simpre/
- https://github.com/guritaalexandru/cc-next-2



