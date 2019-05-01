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
     contraseña VARCHAR(50) ,
	 nombreusuario VARCHAR(50) UNIQUE NOT NULL,
	 rol CHAR NOT NULL DEFAULT 'C',
  );
  /*
  Es un sistema de manejo de libros por lo tanto se necesita una tabla que abstraiga los libros
  */
  CREATE TABLE LIBROS(
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
	observaciones VARCHAR(200),
	coleccion VARCHAR(50),
	formato VARCHAR(50),
	tipo CHAR
  );
/*Funcion de agregar un libro a la base de datos*/
CREATE PROCEDURE AgregarLibro @titulo AS VARCHAR(200), 
                              @autor AS VARCHAR(200), 
                              @ano  AS VARCHAR(50), 
                              @numeroInscripcion  AS VARCHAR(50), 
                              @numeroClasificacion  AS VARCHAR(50), 
                              @orden AS VARCHAR(50),
							  @bib AS VARCHAR(50),
							  @precio AS VARCHAR(50),
							  @procedencia AS VARCHAR(50),
							  @observaciones AS VARCHAR(200),
							  @formato AS VARCHAR(50),
							  @coleccion AS VARCHAR(50),
							  @success	BIT	OUTPUT    
AS 
  BEGIN 
      BEGIN Try 
          INSERT INTO LIBROS 
                      (titulo, 
                       autor, 
                       ano, 
                       numeroInscripcion, 
                       numeroClasificacion, 
                       orden, 
                       bib,
					   precio,
					   procedencia,
					   observaciones,coleccion,formato) 
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
					   @coleccion,
					   @formato); 
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
	SELECT * FROM LIBROS
END

/*Funcion para modificar un libro*/

CREATE PROCEDURE ModificarLibro @titulo AS VARCHAR(200), 
                              @autor AS VARCHAR(200), 
                              @ano  AS VARCHAR(50), 
                              @numeroInscripcion  AS VARCHAR(50), 
                              @numeroClasificacion  AS VARCHAR(50), 
                              @orden AS VARCHAR(50),
							  @bib AS VARCHAR(50),
							  @precio AS VARCHAR(50),
							  @procedencia AS VARCHAR(50),
							  @observaciones AS VARCHAR(200),
							  @coleccion AS VARCHAR(50),
							  @formato AS VARCHAR(50), 
							  @success	BIT	OUTPUT    
AS 
  BEGIN 
      BEGIN Try 
          UPDATE  LIBROS SET titulo= @titulo,
                      autor=@autor,
                       ano=@ano, 
                       numeroClasificacion=@numeroClasificacion, 
                       orden=@orden, 
                       bib=@bib,
					   precio=@precio,
					   procedencia=@procedencia,
					   observaciones=@observaciones,coleccion=@coleccion,formato=@formato where numeroInscripcion=@numeroInscripcion;
		SET @success=1;
		SELECT @success;
      END try 
      BEGIN Catch
		SET @success=0;
		SELECT @success; 
      END Catch 
  END 
GO




/*Funcion de agregar un usuario a la base de datos*/
ALTER PROCEDURE AgregarUsuario @cedula AS VARCHAR(200), 
                              @nombre AS VARCHAR(200), 
                              @apellido1  AS VARCHAR(50), 
                              @apellido2  AS VARCHAR(50), 
                              @contraseña  AS VARCHAR(50),
							  @nombreUsuario AS VARCHAR(200),
							  @success	BIT	OUTPUT    
AS 
  BEGIN 
      BEGIN Try 
          INSERT INTO Usuarios 
                      (nombre, 
                       apellido1, 
                       apellido2, 
                       contraseña,
					   cedula,
					   nombreusuario) 
          VALUES      (@nombre, 
                       @apellido1, 
                       @apellido2, 
                       @contraseña,
					   @cedula,
					   @nombreUsuario); 
		SET @success=1;
		SELECT @success;
      END try 
      BEGIN Catch
		SET @success=0;
		SELECT @success; 
      END Catch 
  END 
GO

/*Agregar funcionario a departamentos de base de datos InfoTEC*/
CREATE PROCEDURE AgregarfuncionarioDepartamento  
                              @cedula VARCHAR(20),
							  @idDpartamento VARCHAR(5),
							  @success	BIT	OUTPUT    
AS 
  BEGIN 
      BEGIN Try 
          INSERT INTO Persona_departamentos 
                      (IDPer, 
                       codigoDep) 
          VALUES      (@cedula, 
                       @idDpartamento); 
		SET @success=1;
		SELECT @success;
      END try 
      BEGIN Catch
		SET @success=0;
		SELECT @success; 
      END Catch 
  END 
GO

/*Funcion para modificar un usuario*/

ALTER PROCEDURE ModificarUsuario @id AS INTEGER ,
							  @cedula AS VARCHAR(200), 
                              @nombre AS VARCHAR(200), 
                              @apellido1  AS VARCHAR(50), 
                              @apellido2  AS VARCHAR(50), 
                              @contraseña  AS VARCHAR(50),
							  @nombreusuario AS VARCHAR(200),
							  @rol AS CHAR,
							  @success	BIT	OUTPUT   
AS 
  BEGIN 
      BEGIN Try 
          UPDATE  Usuarios SET nombre= @nombre,
                       apellido1=@apellido1, 
                       apellido2=@apellido2, 
                       contraseña=@contraseña ,cedula=@cedula , nombreusuario=@nombreusuario,rol=@rol where id=@id;
		SET @success=1;
		SELECT @success;
      END try 
      BEGIN Catch
		SET @success=0;
		SELECT @success; 
      END Catch 
  END 
GO


CREATE PROCEDURE selectTodosUsuarios AS 
BEGIN 
	SELECT * FROM Usuarios
END

/*Funcion para modificar un usuario*/

CREATE PROCEDURE EliminarUsuario @id AS INTEGER ,
							  @success	BIT	OUTPUT   
AS 
  BEGIN 
      BEGIN Try 
          DELETE  FROM  Usuarios  where id=@id;
		SET @success=1;
		SELECT @success;
      END try 
      BEGIN Catch
		SET @success=0;
		SELECT @success; 
      END Catch 
  END 
GO
CREATE PROCEDURE EliminarLibro @id AS INTEGER ,
							  @success	BIT	OUTPUT   
AS 
  BEGIN 
      BEGIN Try 
          DELETE  FROM  LIBROS  where id=@id;
		SET @success=1;
		SELECT @success;
      END try 
      BEGIN Catch
		SET @success=0;
		SELECT @success; 
      END Catch 
  END 
GO
CREATE PROCEDURE InicioSesionUsuario @nombreusuario AS VARCHAR(200) ,
							  @contraseña AS VARCHAR(50),
							  @rol AS CHAR,
							  @success	BIT	OUTPUT   
AS 
  BEGIN 
         IF ((SELECT COUNT(*) FROM dbo.Usuarios AS U WHERE U.contraseña = @contraseña and U.nombreusuario=@nombreusuario and U.rol=@rol) = 1) -- ya existe el usuario
			BEGIN
				SET @success = 1 -- exito
				SELECT @success 
			END;
		ELSE
			BEGIN			
				SET @success = 0 -- error
				SELECT @success
			END;
  END 
GO




/*Con base de datos BiblioscTEC*/
ALTER PROCEDURE asignarPermiso @NOMBRE_ENCARGADO AS NCHAR(50), 
                              @ID_APLICACION  INT, 
                              @ROL  BIT, 
                              @FECHA_ASIGNACION  AS VARCHAR(50),
							  @FECHA_VENCIMIENTO AS VARCHAR(50),
							  @success	BIT	OUTPUT   
AS 
   BEGIN Try 
		DECLARE @ID_ENCARGADO INT;
		IF ((SELECT COUNT(*) FROM ENCARGADOS WHERE @NOMBRE_ENCARGADO=NOM_ENCARGADO)=0)
			BEGIN
				INSERT INTO ENCARGADOS(NOM_ENCARGADO,ESTADO)VALUES(@NOMBRE_ENCARGADO,'1')
				SET @ID_ENCARGADO=SCOPE_IDENTITY()
				INSERT INTO PERMISOS_APPS(ID_ENCARGADO,ID_APLICACION,ROL,FECHA_ASIGNACION,FECHA_VENCIMIENTO,ESTADO)
				VALUES(@ID_ENCARGADO,@ID_APLICACION,@ROL,@FECHA_ASIGNACION,@FECHA_VENCIMIENTO,'1')
				SET @success=1;
				SELECT @success;
			END
		ELSE 
			BEGIN
				SET @ID_ENCARGADO=(SELECT ID_ENCARGADO FROM ENCARGADOS WHERE @NOMBRE_ENCARGADO=NOM_ENCARGADO)
				INSERT INTO PERMISOS_APPS(ID_ENCARGADO,ID_APLICACION,ROL,FECHA_ASIGNACION,FECHA_VENCIMIENTO,ESTADO)
				VALUES(@ID_ENCARGADO,@ID_APLICACION,@ROL,@FECHA_ASIGNACION,@FECHA_VENCIMIENTO,'1')
				SET @success=1;
				SELECT @success;
			END
   END try 
   BEGIN Catch
	SET @success=0;
	SELECT @success; 
   END Catch 
GO

ALTER PROCEDURE aplicacionesSinpermiso @NOMBRE_ENCARGADO AS NCHAR(50)
AS 
   BEGIN
		IF((SELECT COUNT(ID_ENCARGADO) FROM ENCARGADOS WHERE NOM_ENCARGADO=@NOMBRE_ENCARGADO)=1)
			BEGIN 
			DECLARE @ID_ENCARGADO INT=(SELECT ID_ENCARGADO FROM ENCARGADOS WHERE NOM_ENCARGADO=@NOMBRE_ENCARGADO)
			SELECT NOM_APLICACION FROM APLICACIONES AS A INNER JOIN PERMISOS_APPS AS PA ON PA.ID_ENCARGADO!= @ID_ENCARGADO OR PA.ID_APLICACION!=A.ID_APLICACION
			END
		ELSE
			BEGIN
				SELECT NOM_APLICACION FROM APLICACIONES
			END
   END 
GO

SELECT * FROM ENCARGADOS
SELECT * FROM APLICACIONES
SELECT * FROM PERMISOS_APPS
EXEC aplicacionesSinpermiso 'Andrea'

SELECT NOM_APLICACION FROM APLICACIONES AS A INNER JOIN PERMISOS_APPS AS PA ON PA.ID_ENCARGADO!='2' OR PA.ID_APLICACION!=A.ID_APLICACION


INSERT INTO APLICACIONES(NOM_APLICACION,ID_APLICACION,DESCRIPCION)VALUES('Buscador de libros','1','Sistema para gestionar los libros de inscripción de la Biblioteca')
																		,('Cubiculos','2','Sistema de manejo de cubiculos de la biblioteca')

EXEC asignarPermiso 'Andres Fernández','1','1','2019-03-04','2020-03-04','1'


SELECT * FROM PERMISOS_APPS
SELECT * FROM ENCARGADOS
/*Test 
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
DELETE FROM Libros WHERE id='6000' */