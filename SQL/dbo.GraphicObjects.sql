CREATE TABLE [dbo].[GraphicObjects] (
    [GraphicObjectId] INT            IDENTITY (1, 1) NOT NULL,
    [BoardId]         INT            NOT NULL,
    [type]            NVARCHAR (MAX) NULL,
    [x]               INT            NOT NULL,
    [y]               INT            NOT NULL,
    [width]           INT            NOT NULL,
    [height]          INT            NOT NULL,
    [fill]            NVARCHAR (MAX) NULL,
    [stroke]          NVARCHAR (MAX) NULL,
    [stroke_width]    INT            NOT NULL,
    CONSTRAINT [PK_dbo.GraphicObjects] PRIMARY KEY CLUSTERED ([GraphicObjectId] ASC), 
    CONSTRAINT [FK_GraphicObjects_ToTable] FOREIGN KEY (BoardId) REFERENCES Boards(BoardId)
);

