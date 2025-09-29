
# 0484 - Bases de dades

Apunts de [w3schools.com](https://www.w3schools.com/sql)

Les comandes fan referència a la base de dades **`botiga`**, que podeu obtenir amb els següents fitxers:

El fitxer [botiga-crea.sql](./assets/docs/botiga-crea.sql) per crear l'estructura de la base de dades, i

El fitxer [botiga-omple.sql](./assets/docs/botiga-omple.sql) per omplir-la.

---

[SQL SELECT Statement](https://www.w3schools.com/sql/sql_select.asp)

#### Sintaxi

```sql
SELECT columna1, columna2, ...
FROM nom_taula;
```
Aquí, <kbd style="background-color: lightblue">columna1, columna2, ...</kbd> són els **noms dels camps de la taula** de la qual voleu seleccionar dades.

El <kbd style="background-color: lightblue">nom_taula</kbd> representa el **nom de la taula** de la qual voleu seleccionar dades.

----

#### Selecciona TOTES les columnes

Si vols retornar totes les columnes sense especificar cada nom de columna,<br>pots utilitzar la sintaxi <kbd style="background-color: lightblue">SELECT *</kbd>:

#### Sintaxi

```sql
SELECT *
FROM Clients;
```

----

La comanda <kbd style="background-color: lightblue">SQL SELECT DISTINCT</kbd> s'utilitza per retornar **només valors diferents**.


#### Sintaxi

```sql
SELECT DISTINCT Pais
FROM Clients;
```

----

To be continued...

---

### La clàusula <kbd style="background-color: lightblue">WHERE</kbd> 

La clàusula <kbd style="background-color: lightblue">WHERE</kbd> de **SQL** s'utilitza per **filtrar registres**.

S'utilitza per extreure només els registres que compleixen una condició especificada.


#### Sintaxi

```sql
SELECT columna1, columna2, ...
FROM nom_taula
WHERE condició;
```

Aquí, <kbd style="background-color: lightblue">columna1, columna2, ...</kbd> són els **noms dels camps de la taula** de la qual voleu seleccionar dades.

El <kbd style="background-color: lightblue">nom_taula</kbd> representa el **nom de la taula** de la qual voleu seleccionar dades.

I <kbd style="background-color: lightblue">condició</kbd> 

----

 **Nota**: La clàusula <kbd style="background-color: lightblue">WHERE</kbd> no només s'utilitza en les instruccions <kbd style="background-color: lightblue">SELECT</kbd>, sinó que també s'utilitza en les instruccions <kbd style="background-color: lightblue">UPDATE</kbd>, <kbd style="background-color: lightblue">DELETE</kbd>, etc.!

----

### Camps de text vs. camps numèrics

**SQL** requereix **cometes simples** (**`'`**) al voltant dels valors de **text** (la majoria de sistemes de bases de dades també permeten **cometes dobles** (**`"`**)).

----

Tanmateix, els camps numèrics no s'han de tancar entre cometes:

#### Exemple

```sql
SELECT *
FROM Clients
WHERE IdClient=1;
```

----

### Operadors a la clàusula <kbd style="background-color: lightblue">WHERE</kbd>

Podeu utilitzar altres operadors a més de l'operador **`=`** per filtrar la cerca.

#### Exemple

```sql
SELECT *
FROM Clients
WHERE IdClient > 40;

----

### Operadors a la clàusula <kbd style="background-color: lightblue">WHERE</kbd>

|Operador|Descripció|
|----|----|
|**`=`**|Igual|
|**`>`**|Més gran que|
|**`<`**|Menor que|
|**`>=`**|Més gran o igual que|
|**`<=`**|Menor o igual que|
|**`<>`**|No és igual. **Nota**: En algunes versions de **`SQL`**, aquest operador es pot escriure com a **`!=`**|

----

### Operadors a la clàusula <kbd style="background-color: lightblue">WHERE</kbd>

|Operador|Descripció|
|----|----|
|**`BETWEEN`**|Entre un interval determinat|
|**`LIKE`**|Cerca un patró|
|**`IN`**|Per especificar diversos valors possibles per a una columna|

---

## Fi
**Gràcies!**