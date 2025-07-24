CREATE TABLE [dbo].[Event]
(
[eventID] [int] NOT NULL,
[eventName] [varchar] (100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
[eventDescription] [text] COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
[eventLocation] [varchar] (100) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
[eventDateTime] [datetime] NULL,
[attendees] [varchar] (max) COLLATE SQL_Latin1_General_CP1_CI_AS NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Event] ADD CONSTRAINT [PK__Event__2DC7BD69C99D0035] PRIMARY KEY CLUSTERED ([eventID]) ON [PRIMARY]
GO
