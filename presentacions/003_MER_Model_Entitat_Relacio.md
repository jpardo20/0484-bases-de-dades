# DAM_MP02_003_UF01_Pres_003_MER_Model_Entitat_Relacio

## Diapositiva 1

DAM1 MP02 BDS

Model Entitat-Relació (MER)

UF01 - Introducció a les
Bases de Dades

---

## Diapositiva 2

En Edgar F. Codd al 1969 proposa el model relacional. Origen dels SGBD.

En Peter Chen el 1976 presentar el Model Entitat-Relació (MER).

És un model molt estès i potent per a la representació de les dades. Basat en la lògica i les matemàtiques.

Història

‹#› de 15

---

## Diapositiva 3

Conceptes bàsics

Se simbolitza fent ús de grafs i de taules.

Proposa l'ús de taules bidimensionals per a la representació de les dades i les seves relacions.

A principis dels setanta (70’ s), Donald D. Chamberlin i Raymond F. Boyce (investigadors d'IBM) van crear un llenguatge de consultes anomenat SEQUEL. Més tard serà SQL.

‹#› de 15

---

## Diapositiva 4

3 àmbits: realitat, conceptualització i representació

‹#› de 15

---

## Diapositiva 5

Objectes MER - Entitat

Entitat
objecte del món real, en un enunciat són els noms que es poden sots dividir en diferents parts,
el nom acostuma a ser en plural i
es representen amb un rectangle.

ENTITAT

‹#› de 15

---

## Diapositiva 6

Objectes MER - Entitat exemple

‹#› de 15

---

## Diapositiva 7

Objectes MER - Atribut

atribut

Atributs o camps
són les unitats d'informació que descriuen les propietats de les entitats,
es representen com a un oval o el·lipse.

‹#› de 15

---

## Diapositiva 8

Objectes MER - Atribut exemple

els ALUMNES de l'escola tenen com a atributs
el codi,
el nom,
el nif,
la data naixement

‹#› de 15

---

## Diapositiva 9

Relacions
És l’associació de diferents entitats. Tenen com a nom un verb
es representen mitjançant un rombe

Objectes MER - Relació

relació

‹#› de 15

---

## Diapositiva 10

Els ALUMNES estan matriculats a un CURS, 

Un CURS pot tenir cap o molts ALUMNES que estiguin matriculats.

Objectes MER - Relació exemple

‹#› de 15

---

## Diapositiva 11

Objectes MER - Clau primària

clau primària o identificador
És l'atribut o conjunt d'atributs que identifiquen de forma única i biunívoca a cada element de l'entitat,

es representen subratllant el nom de l'atribut.

clau primària

‹#› de 15

---

## Diapositiva 12

Objectes MER - Clau primària exemple

A l'entitat ALUMNES, 
l'atribut codi és la clau primària, ja que identifica, sense possibilitat de repetició, ni d'error, a un alumne en concret.

‹#› de 15

---

## Diapositiva 13

Tipus de dades
és el tipus d'informació que contindrà cada atribut

A l'entitat ALUMNES
l'atribut codi és un nombre enter i correlatiu.

Objectes MER - Tipus de dades

‹#› de 15

---

## Diapositiva 14

Domini:
és el conjunt de valors permesos per a cada atribut

A l'entitat ALUMNES,
l'atribut nom és un text de 50 caràcters.

Objectes MER - Domini

‹#› de 15

---

## Diapositiva 15

Clau secundària (externa)
és l'atribut d'una entitat que fa referència a la clau primària d'una altra entitat. Aquestes claus representen les relacions entre les taules.


A la relació que hi ha entre ALUMNES,  CURSOS i l'ALUMNE té com a clau externa l'identificador del curs

Conceptes bàsics

‹#› de 15