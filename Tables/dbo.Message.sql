CREATE TABLE [dbo].[Message]
(
[messageID] [int] NOT NULL,
[senderID] [int] NOT NULL,
[receiverID] [int] NOT NULL,
[messageContent] [varchar] (max) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
[timestamp] [datetime] NULL CONSTRAINT [DF__Message__timesta__52593CB8] DEFAULT (getdate())
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Message] ADD CONSTRAINT [PK__Message__4808B87330AB6927] PRIMARY KEY CLUSTERED ([messageID]) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Message] ADD CONSTRAINT [FK__Message__receive__5441852A] FOREIGN KEY ([receiverID]) REFERENCES [dbo].[UserTable] ([userID])
GO
ALTER TABLE [dbo].[Message] ADD CONSTRAINT [FK__Message__senderI__534D60F1] FOREIGN KEY ([senderID]) REFERENCES [dbo].[UserTable] ([userID])
GO
