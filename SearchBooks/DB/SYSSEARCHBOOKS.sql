/*
Tabla de usuarios del sistema debido a que van a existir administradoes y usuarios
*/
CREATE TABLE Usuarios 
  ( 
     id INT IDENTITY(1,1) PRIMARY KEY,
	 cedula      VARCHAR(50) , 
     nombre      VARCHAR(20) , 
     apellido1   VARCHAR(20) , 
     apellido2   VARCHAR(20) , 
     contraseña VARCHAR(50) 
  );
  /*
  Es un sistema de manejo de libros por lo tanto se necesita una tabla que abstraiga los libros
  */
  CREATE TABLE Libros(
	id INT IDENTITY(1,1) PRIMARY KEY,
	titulo VARCHAR(200) ,
	autor VARCHAR(200) ,
	ano VARCHAR(50) ,
	numeroInscripcion VARCHAR(50) ,
	numeroClasificacion VARCHAR(50) ,
	orden VARCHAR(50) ,
	bib VARCHAR(50) ,
	precio VARCHAR(50) ,
	procedencia VARCHAR(50) ,
	observaciones VARCHAR(200)
  );
/*Funcion de agregar un libro a la base de datos*/
ALTER PROCEDURE AgregarLibro @titulo AS VARCHAR(200), 
                              @autor AS VARCHAR(200), 
                              @ano  AS VARCHAR(50), 
                              @numeroInscripcion  AS VARCHAR(50), 
                              @numeroClasificacion  AS VARCHAR(50), 
                              @orden AS VARCHAR(50),
							  @bib AS VARCHAR(50),
							  @precio AS VARCHAR(50),
							  @procedencia AS VARCHAR(50),
							  @observaciones AS VARCHAR(200),
							  @tipo AS CHAR,
							  @success	BIT	OUTPUT    
AS 
  BEGIN 
      BEGIN Try 
          INSERT INTO Libros 
                      (titulo, 
                       autor, 
                       ano, 
                       numeroInscripcion, 
                       numeroClasificacion, 
                       orden, 
                       bib,
					   precio,
					   procedencia,
					   observaciones,tipo) 
          VALUES      (@titulo, 
                       @autor, 
                       @ano, 
                       @numeroInscripcion, 
                       @numeroClasificacion, 
                       @orden, 
                       @bib,
					   @precio,
					   @procedencia,
					   @observaciones,
					   @tipo); 
		SET @success=1;
		SELECT @success;
      END try 
      BEGIN Catch
		SET @success=0;
		SELECT @success; 
      END Catch 
  END 
GO

CREATE PROCEDURE selectUltimo AS 
BEGIN 
	SELECT TOP 1 id FROM Libros
	ORDER BY id DESC;
END

CREATE PROCEDURE selectTodosLibros AS 
BEGIN 
	SELECT * FROM Libros
END

/*Funcion para modificar un libro*/

ALTER PROCEDURE ModificarLibro @titulo AS VARCHAR(200), 
                              @autor AS VARCHAR(200), 
                              @ano  AS VARCHAR(50), 
                              @numeroInscripcion  AS VARCHAR(50), 
                              @numeroClasificacion  AS VARCHAR(50), 
                              @orden AS VARCHAR(50),
							  @bib AS VARCHAR(50),
							  @precio AS VARCHAR(50),
							  @procedencia AS VARCHAR(50),
							  @observaciones AS VARCHAR(200),
							  @tipo AS CHAR,
							  @success	BIT	OUTPUT    
AS 
  BEGIN 
      BEGIN Try 
          UPDATE  Libros SET titulo= @titulo,
                      autor=@autor,
                       ano=@ano, 
                       numeroClasificacion=@numeroClasificacion, 
                       orden=@orden, 
                       bib=@bib,
					   precio=@precio,
					   procedencia=@procedencia,
					   observaciones=@observaciones, tipo=@tipo where numeroInscripcion=@numeroInscripcion;
		SET @success=1;
		SELECT @success;
      END try 
      BEGIN Catch
		SET @success=0;
		SELECT @success; 
      END Catch 
  END 
GO


ALTER TABLE Libros
ADD tipo CHAR NOT NULL DEFAULT 'N'; /*N= Libro normal, I= Libro de inscripcion*/



SELECT * FROM Libros where numeroInscripcion='SC000003'
EXEC ModificarLibro  'Arboles de jardín','Pañella Bonastre Juan','1972','SC000003','634.97 P199A','NULL','51468','139','Compra','Descartado','1'














SELECT * FROM Libros
EXEC selectTodosLibros

set IDENTITY_INSERT Libros ON

EXEC selectUltimo
SELECT * FROM Usuarios
EXEC AgregarLibro 'a','a','2','12','12','21','9','11','12','awda','1'

SELECT TOP 1 id FROM Libros
ORDER BY id DESC;

DBCC CHECKIDENT ('Libros', RESEED, 1)  

SELECT MAX(id) FROM Libros
DROP TABLE Libros

SELECT * FROM Libros
DELETE FROM Libros WHERE id='6000' 