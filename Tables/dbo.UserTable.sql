CREATE TABLE [dbo].[UserTable]
(
[userID] [int] NOT NULL,
[username] [varchar] (50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
[email] [varchar] (100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
[passwordHash] [varchar] (255) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
[profileDetails] [varchar] (max) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
[preferences] [varchar] (max) COLLATE SQL_Latin1_General_CP1_CI_AS NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserTable] ADD CONSTRAINT [PK__UserTabl__CB9A1CDFB2E393BD] PRIMARY KEY CLUSTERED ([userID]) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserTable] ADD CONSTRAINT [UQ__UserTabl__AB6E6164E38ABA15] UNIQUE NONCLUSTERED ([email]) ON [PRIMARY]
GO
