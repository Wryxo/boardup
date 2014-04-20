CREATE TABLE [dbo].[Permissions] (
    [PermissionId] INT            IDENTITY (1, 1) NOT NULL,
    [UserId]       NVARCHAR (128) NULL,
    [BoardId]      INT            NOT NULL,
    [AddObject]    BIT            NOT NULL,
    [DeleteObject] BIT            NOT NULL,
    [EditObject]   BIT            NOT NULL,
    CONSTRAINT [PK_dbo.Permissions] PRIMARY KEY CLUSTERED ([PermissionId] ASC),
	CONSTRAINT [CK_Permissions_Column] UNIQUE (UserId, BoardId), 
    CONSTRAINT [FK_Permissions_ToTable] FOREIGN KEY (BoardId) REFERENCES Boards(BoardId), 
    CONSTRAINT [FK_Permissions_ToTable_1] FOREIGN KEY (UserId) REFERENCES AspNetUsers(Id)
);

