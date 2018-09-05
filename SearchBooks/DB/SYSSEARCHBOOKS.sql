CREATE TABLE Usuarios 
  ( 
     id int IDENTITY(1,1) PRIMARY KEY,
	 cedula      VARCHAR(50) , 
     nombre      VARCHAR(20) , 
     apellido1   VARCHAR(20) , 
     apellido2   VARCHAR(20) , 
     contraseña VARCHAR(50) 
  );
  CREATE TABLE Libros(
	id int IDENTITY(1,1),
	titulo VARCHAR(200) ,
	autor VARCHAR(200) ,
	ano INTEGER ,
	numeroInscripcion VARCHAR(50) ,
	numeroClasificacion VARCHAR(50) ,
	orden VARCHAR(50) ,
	bib INTEGER ,
	precio INTEGER ,
	procedencia VARCHAR(50) ,
	observaciones VARCHAR(200),
	CONSTRAINT pk_identlibro PRIMARY KEY(id,titulo) 
  );
CREATE PROCEDURE AgregarLibro @titulo AS VARCHAR(200), 
                              @autor AS VARCHAR(200), 
                              @ano  AS INTEGER, 
                              @numeroInscripcion  AS VARCHAR(50), 
                              @numeroClasificacion  AS VARCHAR(50), 
                              @orden AS VARCHAR(50),
							  @bib AS INTEGER,
							  @precio AS INTEGER,
							  @procedencia AS VARCHAR(50),
							  @observaciones AS VARCHAR(200),
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
					   observaciones) 
          VALUES      (@titulo, 
                       @autor, 
                       @ano, 
                       @numeroInscripcion, 
                       @numeroClasificacion, 
                       @orden, 
                       @bib,
					   @precio,
					   @procedencia,
					   @observaciones); 
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


EXEC selectUltimo
SELECT * FROM Libros
EXEC AgregarLibro 'a','a','2','12','12','21','9','11','12','awda','1'

SELECT TOP 1 id FROM Libros
ORDER BY id DESC;

DBCC CHECKIDENT ('Libros', RESEED, 1)  

