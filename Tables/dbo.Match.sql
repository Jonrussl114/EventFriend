CREATE TABLE [dbo].[Match]
(
[matchID] [int] NOT NULL,
[userID] [int] NOT NULL,
[recID] [int] NOT NULL,
[compatibilityScore] [float] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Match] ADD CONSTRAINT [PK__Match__02C72A2DE59E5EAC] PRIMARY KEY CLUSTERED ([matchID]) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Match] ADD CONSTRAINT [FK__Match__recID__4F7CD00D] FOREIGN KEY ([recID]) REFERENCES [dbo].[UserTable] ([userID])
GO
ALTER TABLE [dbo].[Match] ADD CONSTRAINT [FK__Match__userID__4E88ABD4] FOREIGN KEY ([userID]) REFERENCES [dbo].[UserTable] ([userID])
GO
