CREATE TABLE [dbo].[Boards] (
    [BoardId] INT            IDENTITY (1, 1) NOT NULL,
    [UserId]  NVARCHAR (128) NULL,
    [Name]    NVARCHAR (MAX) NULL,
    CONSTRAINT [PK_dbo.Boards] PRIMARY KEY CLUSTERED ([BoardId] ASC), 
    CONSTRAINT [FK_Boards_ToTable] FOREIGN KEY (UserId) REFERENCES AspNetUsers(Id)
);

