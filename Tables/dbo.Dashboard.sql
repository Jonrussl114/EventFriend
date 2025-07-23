CREATE TABLE [dbo].[Dashboard]
(
[userID] [int] NOT NULL,
[upcomingEvents] [varchar] (max) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
[suggestedEvents] [varchar] (max) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
[notifications] [varchar] (max) COLLATE SQL_Latin1_General_CP1_CI_AS NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Dashboard] ADD CONSTRAINT [PK__Dashboar__CB9A1CDF79085E6C] PRIMARY KEY CLUSTERED ([userID]) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Dashboard] ADD CONSTRAINT [FK__Dashboard__userI__571DF1D5] FOREIGN KEY ([userID]) REFERENCES [dbo].[UserTable] ([userID])
GO
