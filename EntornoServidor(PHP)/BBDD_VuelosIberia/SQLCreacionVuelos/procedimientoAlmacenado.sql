USE [iberia]
GO
/****** Object:  StoredProcedure [dbo].[spPueblaTodosVuelos]    Script Date: 24/01/2023 18:26:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER   PROCEDURE [dbo].[spPueblaTodosVuelos] 
	-- Add the parameters for the stored procedure here
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	DECLARE @codigo CHAR(5);
	DECLARE @hoy DATE = DATEADD(d,7,GETDATE());
	DECLARE @i INT =0;
	DECLARE cVuelos CURSOR FOR 
		SELECT codigo FROM vuelo;
	OPEN cVuelos;
	FETCH NEXT FROM cVuelos INTO @codigo;
	WHILE @@FETCH_STATUS =0
	BEGIN
		set @i=1;
		WHILE @i < 365
		BEGIN
			INSERT INTO vuelos(codigo,fecha) VALUES 
			(@codigo,DATEADD(d,@i,@hoy));
			set @i+=1;
		END;
	FETCH NEXT FROM cVuelos INTO @codigo;
	END;
	close cVuelos;
	deallocate cVuelos;
END
go