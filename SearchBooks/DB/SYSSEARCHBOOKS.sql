CREATE TABLE Usuarios 
  ( 
     id int IDENTITY(1,1) PRIMARY KEY,
	 cedula      VARCHAR(50) NOT NULL, 
     nombre      VARCHAR(20) NOT NULL, 
     apellido1   VARCHAR(20) NOT NULL, 
     apellido2   VARCHAR(20) NOT NULL, 
     contraseña VARCHAR(50) NOT NULL
  );

  CREATE TABLE Libros(
	titulo VARCHAR(200) PRIMARY KEY,
	autor VARCHAR(200) NOT NULL,
	ano INTEGER NOT NULL,
	numeroInscripcion VARCHAR(50) NOT NULL,
	numeroClasificacion VARCHAR(50) NOT NULL,
	orden VARCHAR(50) ,
	bib INTEGER NOT NULL,
	precio INTEGER NOT NULL,
	procedencia VARCHAR(50) NOT NULL,
	observaciones VARCHAR(200) NOT NULL
  );


EXEC AgregarLibro 'a','a','2','12','12','21','9','11','12','awda','1'
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
