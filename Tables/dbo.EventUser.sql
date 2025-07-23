CREATE TABLE [dbo].[EventUser]
(
[userID] [int] NOT NULL,
[eventID] [int] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EventUser] ADD CONSTRAINT [PK__EventUse__49466709D00751D4] PRIMARY KEY CLUSTERED ([userID], [eventID]) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EventUser] ADD CONSTRAINT [FK__EventUser__event__5AEE82B9] FOREIGN KEY ([eventID]) REFERENCES [dbo].[Event] ([eventID])
GO
ALTER TABLE [dbo].[EventUser] ADD CONSTRAINT [FK__EventUser__userI__59FA5E80] FOREIGN KEY ([userID]) REFERENCES [dbo].[UserTable] ([userID])
GO
