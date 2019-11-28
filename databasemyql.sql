					
use trouce;

drop table if exists ServiceProviders;
drop table if exists Clients;
drop table if exists Categories;
drop table if exists Users;
drop table if exists Services;

create table Users (id INT AUTO_INCREMENT PRIMARY KEY, usertype INT, name varchar(30), lastname varchar(30), phone varchar(20), 
    businessname tinytext, businessdescription tinytext, address tinytext, categories mediumtext,
    email varchar(60), password varchar(40), src longtext);
create table Categories (id INT AUTO_INCREMENT PRIMARY KEY, name varchar(30), description mediumtext);
create table Services (id INT AUTO_INCREMENT PRIMARY KEY, userid INT, name varchar(30), description mediumtext, price INT, categories mediumtext, notes tinytext);


insert into Categories(name, description) values ("Concierto", "En esta seccion encuentra conciertos de múltiples instrumentos como guitarra, flauta, entre otros");

insert into Categories(name, description) values ("Educación", "Busca profesores para poder aprender eso que tanto has querido, desde temas académicos a temas prácticas");

insert into Categories(name, description) values ("Literatura", "Aprende a leer y a escribir los mejores relatos de terror, suspenso, comedida, entre muchos otros géneros");

insert into Categories(name, description) values ("Arte", "Saca ese artista que hay en ti, acuarelas, oleos, acrílicos, vinilos. ¡Podrías ser el proximo Van Gogh!");

insert into Users(usertype, name, lastname, phone, businessname, businessdescription, address, email, password) 
    values (0, "Ent", "Cleastwood", "123456", "Melody shot!", "Los mejores conciertos en la costa oeste de América",
             "Evergreen Av. 23rd street, apt 302", "Educación, Música, Arte", "ent@cleastwood", "theoldwest7"); 
	
insert into Users(usertype, name, lastname, phone, businessname, businessdescription, address, email, password) 
    values (0, "Henry", "Perez", "313456565", "Henry Perez", "Aprende matemáticas a través de clases de matemáticas dinámicas realizadas para que el estudiante aprenda de verdad. Doy clases desde todos los niveles hasta que hayas entendido bien el tema",
             "Cra 7 #21446", "Educación", "henryp@gmail.com", "henryp123"); 

insert into Users(usertype, name, lastname, phone, businessname, businessdescription, address, categories, email, password)
    values (0, "Vanessa", "Hernandez", "3144229030", "Artes prácticas", "Te enseño a realizar dibujos y pinturas desde la eleccion del canvas hasta las técnicas de pintura. Se usan oleos y acuarelas. Trabajo principalmente con retratos de aves.",
             "Jardines de Milan Casa 15 Dosquebradas","Arte, Educación", "hnandez@gmail.com", "hnandez123"); 

insert into Users(usertype, name, lastname, phone, businessname, businessdescription, address, categories, email, password) 
    values (0, "	", "Cremtáza", "54554545", "Mundos perpetuos", "Exploremos los vastos mundos que podemos crear con la escritura, para cuentas, novelas, y escribe relatos inspiradores para la literatura",
            "Parque de la escritura", "Literatura, Educación, Arte", "oli@veira", "lospremios1987");



