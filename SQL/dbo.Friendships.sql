CREATE TABLE [dbo].[Friendships] (
    [FriendshipId] INT            IDENTITY (1, 1) NOT NULL,
    [UserId]       NVARCHAR (128) NULL,
    [FriendId]     NVARCHAR (128) NULL,
    [Accepted]     BIT            NOT NULL,
    CONSTRAINT [PK_dbo.Friendships] PRIMARY KEY CLUSTERED ([FriendshipId] ASC), 
    CONSTRAINT [FK_Friendships_ToTable] FOREIGN KEY (UserId) REFERENCES AspNetUsers(Id), 
    CONSTRAINT [FK_Friendships_ToTable_1] FOREIGN KEY (FriendId) REFERENCES AspNetUsers(Id)
);

