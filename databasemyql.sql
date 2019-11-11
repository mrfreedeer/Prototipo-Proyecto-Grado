					
use trouce;

drop table if exists ServiceProviders;
drop table if exists Clients;
drop table if exists Categories;
drop table if exists Users;
drop table if exists Services;

create table Users (id INT AUTO_INCREMENT PRIMARY KEY, usertype INT, name varchar(30), lastname varchar(30), phone varchar(20), 
    businessname tinytext, businessdescription tinytext, address tinytext, categories mediumtext,
    email varchar(60), password varchar(40));
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
    values (0, "Shaniqua", "Johnson", "8855555", "Breaking good", "Aprende matemática con la mejor profesora, la mejor educación. Pitágoras estará orgulloso",
             "Remolque en el parque de la 14", "Educación", "white@walter", "notamethlab98"); 

insert into Users(usertype, name, lastname, phone, businessname, businessdescription, address, categories, email, password)
    values (0, "Ketchum", "Al", "9999999", "Artifícame esta", "Aprende a realizar las más hermosas piezas de arte que te puedas imaginar, y quizás llevate una de las mías si te gustan",
             "Cra 3 #12-47","Arte, Educación", "newvan@gogh", "mejorquevangogh2001"); 

insert into Users(usertype, name, lastname, phone, businessname, businessdescription, address, categories, email, password) 
    values (0, "Jorge", "Cremtáza", "54554545", "Mundos perpetuos", "Exploremos los vastos mundos que podemos crear con la escritura, para cuentas, novelas, y escribe relatos inspiradores para la literatura",
            "Parque de la escritura", "Literatura, Educación, Arte", "oli@veira", "lospremios1987");



