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

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/3cefa6a2-5817-4a68-b2dd-9009acb019ed)

Baza de date contine obiecte de forma { "nume":"Max","descriere":"XYZ","varsta":"2 ani"}:

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/2df2a3a7-ac73-48ba-a9c6-fdc72a2a37a6)

Datele sunt preluate din baza de date si afisate in pagina principala a aplicatiei.

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/5534d654-7201-4de4-a155-3de91293c033)

In aplicatie:

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/dea22dca-fb2b-4958-9921-cdb7bb28d0f9)

Pagina principala a aplicatiei contine toate datele din baza de date reprezentate drept casete cu toate informatiile afisate. Fiecare caseta contine un buton pentru a sterge cainele din baza de date dupa ce a fost adoptat. Odata apasat butonul "Sterge" se face un apel de DELETE. 
Tot in pagina principala sunt regasite 2 butoane, unul pentru a adauga un caine care trebuie dat spre adoptie si altul pentru a accesa robotul. La apasarea butonului pentru inserare se face o rutare catre pagina de adaugare caini in baza de date, la fel si pentru celalalt buton. 

##link din deploy pt pagina principala

Pagina de inserare a datelor despre caini: 

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/72642e21-7dc1-4b26-a2ae-4437bc113099)

De asemenea, pentru o utilizare mai usoara a aplicatiei am adaugat un buton care il ajuta pe utilizator sa mearga in pagina principala.
cand se apasa butonul de "Adauga" se face un apel POST care trimite datele completate in baza de date.

##link din deploy pt insert

Pentru a deschide pagina in care avem prezent un robot este necesar ca din pagina principala sa se apese pe butonul "PawSavant", odata apasat butonul utiliatorul este redirectionat catre un chat live.

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/0b549b50-7a30-4a01-ae47-23d13fc8f58a)

In API-ul putem gasi urmatoarele statistici de utilizare:

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/3ddbba4c-884b-4bc1-84f7-f15622319966)

## 4. Flux de date
### Pentru pagina principala, este efectuat un request de tip GET pentru a obtine lista cu toti cainii disponibili pentru adoptie și aceasta este afisată.

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/aed8dd24-7023-4cee-9ab3-d1cc91d89b1c)

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/57870369-5314-43e7-979b-e0c545094873)

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/d8b99733-b9a3-4e68-af05-dae15d350990)

### Pentru pagina de adaugare a unui caine care trebuie dat spre adoptie, se face un apel POST, acesta adauga in baza de date.

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/cd2d54fe-b1d8-4d6f-9102-1643b5675d62)

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/c8ecf94f-70c2-4613-979e-2af9be9430c1)


### Pentru stergerea unui caine din baza de date dupa ce a fost adoptat, se face un apel DELETE, acesta sterge din baza de date.

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/59bc6ed4-89ca-48a4-838b-d1b8522e2f93)

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/01eceb53-910e-45d7-8d47-db3140e3b392)

### Pentru folosirea ChatGPT, se face un apel POST.

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/ca44d504-f9f3-4a8a-9188-51a288d0cf62)


## 5. Capturi ecran aplicație

### Pagina principala

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/67bbd09a-b91f-4cb5-b66d-05af422fe2b1)


### Pagina de inserare

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/1efaeadd-ae4b-4549-b9a1-f3243f370b22)

### Pagina pentru robotul PawSavant

![image](https://github.com/alexaelena2000/proiectCloud/assets/82472489/1f85fef1-cc33-4282-8238-93f199d0c7e4)


## 6. Referințe

- https://gurita-alexandru.gitbook.io/cloud-computing-2023-simpre/
- https://github.com/guritaalexandru/cc-next-2



