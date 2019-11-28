								
	use trouce;

	drop table if exists ServiceProviders;
	drop table if exists Clients;
	drop table if exists Categories;
	drop table if exists Users;
	drop table if exists Services;

	create table Users (id INT AUTO_INCREMENT PRIMARY KEY, usertype INT, name varchar(30), lastname varchar(30), phone varchar(20), 
	    businessname tinytext, businessdescription longtext, address tinytext, categories mediumtext,
	    email varchar(60), password varchar(40), src longtext);
	create table Categories (id INT AUTO_INCREMENT PRIMARY KEY, name varchar(30), description mediumtext);
	create table Services (id INT AUTO_INCREMENT PRIMARY KEY, userid INT, name varchar(30), description mediumtext, price INT, categories mediumtext, notes tinytext);


	insert into Categories(name, description) values ("Concierto", "En esta seccion encuentra conciertos de múltiples instrumentos como guitarra, flauta, entre otros");

	insert into Categories(name, description) values ("Educación", "Busca profesores para poder aprender eso que tanto has querido, desde temas académicos a temas prácticas");
	
	insert into Categories(name, description) values ("Matemática", "Encuentra todo lo relacionado a la matemática, ya sea profesores o cuando necesitas analizar esas series de Fourier");

	insert into Categories(name, description) values ("Literatura", "Aprende a leer y a escribir los mejores relatos de terror, suspenso, comedida, entre muchos otros géneros");

	insert into Categories(name, description) values ("Arte", "Saca ese artista que hay en ti, acuarelas, oleos, acrílicos, vinilos. ¡Podrías ser el proximo Van Gogh!");

	insert into Categories(name, description) values ("Trabajos Manuales", "Aquí encuentras todos los servicios relacionados a los trabajos manuales, como carpintería, ebanistería, de diseño, entre otros");
	
	insert into Categories(name, description) values ("Servicios empresariales", "Organizamos reuniones con potenciales inversionistas, compradores o proveedores para dar inicio a sus negocios.");
	insert into Categories(name, description) values ("Desarrollo", "Concebir y elaborar sistemas informáticos (paquetes de software), así como de implementarlos y ponerlos a punto, utilizando uno o varios lenguajes de programación");
	insert into Categories(name, description) values ("Chefs", "Para ser un cocinero se requiere amar la cocina, conocer los ingredientes, la receta adecuada y tener la disposición para preparar las comidas que tanto disfrutas.");
	insert into Categories(name, description) values ("Psicólogos", "Psicólogos que ofrecen apoyo y terapia psicológica profesional, tratamos ansiedad, depresión, duelo y fobias.");
	
	insert into Users(usertype, name, lastname, phone, businessname, businessdescription, address,categories,  email, password) 
	    values (0, "Andres", " Ospina", "3201548522", "Psy-Chat", "AHabla con un Experto desde la Comodidad de tu Casa, sin Desplazarte, Sin Cita Previa. Pregunta tantas veces como lo necesites. Si no quedas satisfecho, te Devolvemos el Dinero. 12 Millones de Respuestas. Estando lejos, muchas veces puedes sentirte sin protección, con casa pero sin hogar, sin nadie que entienda ese idioma que hablas desde lo más profundo de tu corazón y con la gran duda de saber quién podría descifrar todo lo que vives.",
		     "", "Psicólogos", "psychat@gmail.com", "psychat123");
	
	insert into Users(usertype, name, lastname, phone, businessname, businessdescription, address,categories,  email, password) 
	    values (0, "Martha", " Bustamante", "356242526", "Mabus", "Aprende todo sobre
Cocina Internacional. Aprenderás Métodos de cocción y cortes aplicables a la carne de res, aves y verduras; técnicas de preparación de los diferentes tipos de frutos de mar y muchas cosas más",
		     "", "Chefs", "mabusgo@gmail.com", "mabusgo123");

	insert into Users(usertype, name, lastname, phone, businessname, businessdescription, address,categories,  email, password) 
	    values (0, "John", "Valencia", "3175114183", "Soluciones Cust", "Administración del área de Desarrollo Web. Prospectación de clientes mediante Marketing Digital e Inbound Marketing B2B & B2C. Posicionamiento web en SEO (Google Adwords & Google Analitycs) & SEM. Publicidad de Mailing. Administración de redes sociales generando campañas, Engagement y Branding. Administración de Bases de Datos MySQL & SQL SERVER. Desarrollo de aplicaciones web.",
		     "", "Desarrollo", "johnval@gmail.com", "johnval123");	

	insert into Users(usertype, name, lastname, phone, businessname, businessdescription, address,categories,  email, password) 
	    values (0, "Miguel", "Henao", "3135151242", "Colombochileno", "Nos encargamos de la planificación y coordinación de la agenda, la cual contiene un mínimo y un máximo de reuniones, distribuidas en días estimados para el cumplimiento de la misma. Este servicio propicia encuentros con empresas legalmente constituidas, seleccionadas profesionalmente, asegurando que la contraparte responda al perfil que busca el empresario. Como resultado, se entregará un documento final, que contendrá los datos completos sobre cada reunión confirmada y agendada.",
		     "Calle 88 No.7B-66", "Servicios empresariales", "colombo0@gmail.com", "colombo123"); 
		
	

	insert into Users(usertype, name, lastname, phone, businessname, businessdescription, address,categories,  email, password) 
	    values (0, "Maria Jose", "Lopez", "3135151242", "Maria Jose Lopez", "Mi metodología de enseñanza siempre se va a basar en que el estudiante aprenda lo que quiere, que logre sus objetivos personales ya sean grandes o pequeños. La manera en la que me muevo en mis clases es en tener una buena relación Maestro- estudiante, considero que la confianza es una de las mejores maneras para que el estudiante avance y se exprese de una manera excelente. La clase se basa en unos pasos como calentamiento, respiración, ejercicios de vocalización y luego en cada clase se trabajan aspectos diferentes de la técnica vocal.",
		     "Centro Ed Grinch", "Educa	ción, Música, Arte", "mariaj40@gmail.com", "mariaj40123"); 
		
	insert into Users(usertype, name, lastname, phone, businessname, businessdescription, address, categories, email, password) 
	    values (0, "Henry", "Perez", "313456565", "Henry Perez", "Aprende matemáticas a través de clases de matemáticas dinámicas realizadas para que el estudiante aprenda de verdad. Doy clases desde todos los niveles hasta que hayas entendido bien el tema",
		     "Cra 7 #21446", "Educación, Matemática", "henryp@gmail.com", "henryp123"); 

	insert into Users(usertype, name, lastname, phone, businessname, businessdescription, address, categories, email, password)
	    values (0, "Vanessa", "Hernandez", "3144229030", "Artes prácticas", "Te enseño a realizar dibujos y pinturas desde la eleccion del canvas hasta las técnicas de pintura. Se usan oleos y acuarelas. Trabajo principalmente con retratos de aves.",
		     "Jardines de Milan Casa 15 Dosquebradas","Arte, Educación", "hnandez@gmail.com", "hnandez123"); 

	insert into Users(usertype, name, lastname, phone, businessname, businessdescription, address, categories, email, password) 
	    values (0, "Jairo", "Castrillon", "3155623654", "Ebanisteria Castrillon", "Renueva tus muebles! Ofrecemos nuestros servicios de pintura y tapicería para dejarlos como nuevos!",
		    "Parque de la escritura", "Trabajos Manuales", "castrillon@gmail.com", "castrillon123");



