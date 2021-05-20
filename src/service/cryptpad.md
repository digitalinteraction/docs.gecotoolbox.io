---
title: CryptPad
---

# Introduction

------

This help guide provides an introduction to using CryptPad as part of the gE.CO toolbox. The text has been adapted from original documentation provided by CryptPad under Creative Commons license ([CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/)). Full credit is given to CryptPad for creating the original documentation.

This help guide is in English. 

[Lire le manuel CryptPad en français](https://docs.CryptPad.fr/fr/user_guide/index.html).

[Lesen Sie das CryptPad-Handbuch auf Deutsch](https://docs.CryptPad.fr/de/user_guide/index.html).

## About this guide

CryptPad is free software. It can be installed by whoever wants to provide this service in a personal or professional capacity.

The original documentation on which this guide is based was written and maintained by the development team at XWiki SAS in Paris, France. This team administers the flagship *instance* (realisation or version) of CryptPad at [CryptPad.fr](https://cryptpad.fr), but there are many others. This documentation has been written with all of these different realisations in mind.

Please note that the original documentation was written for the most up to date version of CryptPad that was released at the time of writing. As of 12th May 2021, this was release 4.5.0. However, the gE.CO toolbox uses a slightly older version of CryptPad (currently 4.3.1). This means that some things in this guide may be different, including instructions and screenshots. In addition, this guide may not be relevant for other realisations of CryptPad elsewhere (e.g. on other websites or servers). 

This guide has been carefully edited to be relevant to users of the gE.CO toolbox. However, the original documentation on which this guide is based was written to explain all features and settings in CryptPad. The gE.CO toolbox version may not have all of these features available. Settings such as storage space, applications and custom colours/styles can vary between realisations of CryptPad, so please bear this in mind. 

If you think an edit to this guide is required, please contact the gE.CO project team at Newcastle University.

Your user account
============

CryptPad *encrypts* your data (converts it into secret code that people cannot read using normal software). This makes it so that it is readable only by you and your collaborators. For this reason **the administrators of the service cannot view, retrieve or reset your password**. Therefore it is important that you make a note of your password in a safe place separate from your CryptPad account.

CryptPad uses the combination of your username and password to identify you. Usernames are not unique on CryptPad. It is possible to create multiple accounts with the same username and different passwords.

## Account types

There are two types of accounts on the gE.CO toolbox version of CryptPad:

**Non-registered users** are identified by an avatar at the top right (it looks like a person with a coat and hat).

No personal information is necessary to use CryptPad without registering. Non-registered users have access to all applications and can share and collaborate on documents. 

However, for non-registered users, storage limited to three months of inactivity (counted per document), and file storage is unavailable for images/videos/PDFs and other files.

From user testing on the gE.CO toolbox, people may also face other difficulties in using CryptPad as a non-registered user, and some functionalities may not work as expected.

**Logged in users** are identified by an avatar (at the top right), either their profile picture if they have set one or the first letter of their display name.

Registering an account does not require any personal information, only a username and password. Additional functionality for logged in users:

-  Personal and permanent storage space for documents.
-  File storage for images/videos/PDF/etc…
-  More options to manage documents as [owner](#owners): add a [password](#access-tab), an [expiry date](#access-tab), or an [access list](https://docs.cryptpad.fr/en/user_guide/share_and_access.html#access-list).
-  Organisation of documents in [folders](#folders), [shared folders](#shared-folders), or with [tags](#tags) and [templates](#templates).
-  Creation of [teams](#teams).
-  Customisation of the [profile](#profile) page and a list of [contacts](#contacts) to [share documents](#share) and [chat](#chat) with. Notifications for interactions between contacts.

## Account management

### Registration

To register a new account, go to the registration page: **Register** at the top right of the home page.

![../_images/registration.png](https://docs.CryptPad.fr/en/_images/registration.png)

Fill out the following information:

-  **Username**: This is the name used to log in to CryptPad, it is different from the **Display name** visible by other users. The **Username** cannot be changed once the account is created.
-  **Password**: It is recommended to use a strong password. The password can be changed in user settings.

![../_images/registration-warning.png](https://docs.CryptPad.fr/en/_images/registration-warning.png)

-  **Terms of service**: Read and accept the terms of service.

Optional:

-  **Import pads from your anonymous session**: If you have created documents as a non-registered user you can import them into your account.

> IMPORTANT!
>
> CryptPad administrators cannot view, retrieve or reset your password if it is lost or forgotten.

### Logging in

To log in to CryptPad, visit the **log in** page (at the top right of the home page), and fill in the username and password used at registration.

Optional:

-  **Import pads from your anonymous session**: If you have created documents as a non-registered user you can import them into your account.

Settings
--------

The account settings are found in the user menu (avatar at the top right), displayed with a gear icon labelled **Settings**.

### Account

-  **Account name**: Username chosen at registration. This name cannot be changed. (LOGGED IN USERS ONLY)
-  **Public Signing Key**: Used by instance administrators and/or on instances that offer subscriptions. This is the only data about your account that is available to the administrators of the service. (LOGGED IN USERS ONLY)
-  **Display Name**: Name displayed to other users, for example when you collaborate on documents. To change this name enter a new name and click on **Save**. (LOGGED IN USERS ONLY)
-  **Language**: Language used in the CryptPad interface. To change the language of CryptPad pick a new language in the drop-down menu. CryptPad has been translated into English and French by the development team, and into other languages by the CryptPad user community (please see note below). Please note that translations other than English and French are likely to be incomplete and/or contain errors.
-  **Automatic Download limit**: Maximum size in megabytes (MB) for automatically loading media elements (images, videos, pdf) embedded into documents. Elements bigger than the specified size can be loaded manually. Use "-1" to always load the media elements automatically.
-  **Change your password**: Enter your current password and confirm the new password by typing it twice. (LOGGED IN USERS ONLY)
-  **Account deletion**: Option to permanently delete your account and all of its documents. **Delete your account** and confirm. (LOGGED IN USERS ONLY)

> PLEASE NOTE
>
> Partial translations into other languages may be available. Logged in users can click on their avatar and select the Home page option, Then, scroll down to the very bottom of the page to select a different language. Please note that these translations are likely to be incomplete and/or contain errors and should not be replied upon by non-English or non-French speakers. CryptPad runs a [community translation programme](https://github.com/xwiki-labs/CryptPad/blob/master/customize.dist/translations/README.md), so please consider contributing to this if you wish.

### Confidentiality

-  **Close remote sessions**: Log out of all sessions except the one from which this option is activated. (see also Remote Disconnect) (LOGGED IN USERS ONLY)
-  **Pad storage in CryptDrive**: Manages if documents you visit are automatically stored in your CryptDrive. If no one *owns* a document you add to your CryptDrive, it counts against your storage quota.
   -  **Automatic**: All the pads you visit are stored in your CryptDrive.
   -  **Manual (always ask)**: If you have not stored a pad yet, you will be asked if you want to store them in your CryptDrive.
   -  **Manual (never ask)** Pads are not stored automatically in your CryptPad. The option to store them will be hidden.
-  **Safe links**: When this setting is active, the link in your browser’s address bar does not provide access to the document unless the recipient already has it in their CryptDrive. This setting is active by default. It is highly recommended to keep it active and to use the *Share* menu to copy links to documents.

-  **Feedback**: CryptPad can send anonymised usage feedback to the server in order to improve the user experience. The content of documents is never shared. This option is disabled by default.

> PLEASE NOTE
>
> **It is highly recommended to enable the *Safe links* option.** This is because CryptPad includes the keys to decrypt your documents in their links. Anyone with access to your browsing history can potentially read your data. This includes intrusive browser extensions and browsers that sync your history across devices. Situations where your browser is visible by others, such as screen-sharing or screenshots, are also potentially risky in terms of leaking access to your documents. Enabling “safe links” prevents the keys from entering your browsing history or being displayed in your address bar whenever possible.

### Appearance

**Colour theme**: determines the theme (light or dark) used across CryptPad. By default this follows the operating system and/or browser setting, but it can also be set manually.

### CryptDrive

-  **Tips**: Help messages in the CryptPad interface. Click on **Reset** to display them again if they have been dismissed.

-  **Duplicated owned pads**: When you move your owned pads to a shared folder, a copy is kept in your CryptDrive to ensure that you retain your control over it. You can hide duplicated files. Only the shared version will be visible, unless deleted, in which case the original will be displayed in its previous location.

-  **Thumbnails**: To help navigating the CryptDrive in *grid mode*, CryptPad can create thumbnails of documents and store them in the browser. This option is turned off by default because it can slow down the browser on less powerful computers. The **Clean** button deletes all existing thumbnails.

-  **Backup**: Two types of backups are available.

   -  **Backup** only saves the keys of documents in the CryptDrive, not their content. This option is designed to save access to documents and **Restore** it in another session.
   -  **Download my CryptDrive** saves the content of all documents in the CryptDrive. When possible, this is done in a format that is readable by other software. Some applications produce files that are only readable by CryptPad.

-  **Import**: If pads have been created as a non-registered user prior to logging in, they can be imported to the CryptDrive. (LOGGED IN USERS ONLY)

-  **Delete History**: The history of the CryptDrive and notifications can be deleted to save storage space. This does not affect the history of documents, which can be deleted individually in the *properties* dialog.

### Cursor

-  **Cursor colour**: Change the colour of your cursor. This is used to identify you while collaborating on documents. It also determines the colour of your text when *colour by author* is active in Code documents.

-  **Share my cursor position**: Display or hide the exact position of your cursor to other users.

-  **Display other users’ cursor position**: Display or hide the position of other users’ cursors. This feature is in beta and may not work properly.

### Rich Text

User settings for the *Rich Text* application.

-  **Editor’s maximum width**: Switch between page mode (default) that limits the width of the text editor, and using the full width of the screen.

-  **Spellcheck**: Enable spellcheck in Rich Text documents. Spelling errors are underlined and suggested corrections are available through ``Ctrl + Right click`` on the word to correct.

-  **Comment notifications**: Disable notifications when another user replies to one of your comments.

### Code

User settings for the *Code* application.

-  **Code editor indentation (spaces)**: Choose the number of spaces for each level of indentation.

-  **Indent using tabs (instead of spaces)**: Insert tabs rather than spaces with the ``Tab`` key.

-  **Auto-close brackets**: Automatically insert a closing character ``)`` when brackets are opened with ``(`` (also works with ``[``, ``'``, ``"``).

-  **Font size in the code editor**: Set the size of text in the code editor.

-  **Spellcheck**: Underline spelling mistakes in the code editor, correction suggestions are available through ``Right click`` on the word to correct.

Support
-------

For any support queries, please email us: support@gecotoolbox.io

Notifications
-------------

(LOGGED IN USERS ONLY)

CryptPad notifies you when your contacts interact with you. Notifications are displayed by the bell next to the avatar (at the top-right). If you have unread notifications, the bell is filled and a count is displayed.

| Bell drop down menu:

-  Browse unread notifications.
-  Delete a notification with the cross button
-  **Open notifications panel**: View all notifications and notification history.

On the notifications panel page:

-  Select the type of notification to view:

   -  All (shown with three bars icon).
   -  Contact Requests (shown with a user icon)
   -  Shared with me.
   -  History (shown with a box icon).

-  Delete notifications (shown with a trash can icon).

# Security



## Passwords for documents and folders

(LOGGED IN USERS ONLY)

When you share the link to a document or shared folder through an insecure channel (for example email or SMS), someone might intercept the link and gain access to your data. To prevent this from happening, the [owners](#owners) of a document or folder can add a password.

When you share documents with your contacts and teams directly on CryptPad, communications are encrypted and we assume that you want to give them access. Therefore the password is remembered and sent with the pad when you share it. The recipient, or yourself, are **not** asked for it when they open the document.

You can add a password to a document when you [create](https://docs.cryptpad.fr/en/user_guide/apps/general.html#new-document) it.

You can also add or change the password in the [Access](#access) menu:

- From the CryptDrive: `Right click` > **Access**  (shown with a padlock icon)..
- From the document toolbar: **Access**  (shown with a padlock icon)..

## Remote Disconnect

(LOGGED IN USERS ONLY)

In some cases (loss or theft of a device, forgotten to log out of a session on a shared computer, etc.) it can be necessary to close all active CryptPad sessions. This can be done in two ways:

- User menu (avatar at the top-right) > **Settings** > **Confidentiality** > **Close remote sessions**.

This option logs out all sessions **except** the one from which it is activated.

- User menu (avatar at the top-right) > **Log out everywhere** (shown with a plug icon).

This option logs out all sessions **including** the one from which it is activated.



Drive
=====

The CryptDrive is used to store and manage documents. For logged in users it is the default landing page on CryptPad. It is also accessible from the other pages:

-  ``Click`` on the logo at the top-left.
-  User menu (avatar at the top-right) > **CryptDrive** (shown with a hard drive icon).

Display
-------

Documents in the CryptDrive can be displayed as a list or a grid (shown with the two different icons). To switch between the two, use the button at the right of the CryptDrive toolbar (under the avatar).

In grid mode, CryptPad can display thumbnails of documents. These can be turned on in the [user settings](#cryptdrive).

![../_images/drive-grid.png](https://docs.CryptPad.fr/en/_images/drive-grid.png)

*The CryptDrive in grid view.*

![../_images/drive-list.png](https://docs.CryptPad.fr/en/_images/drive-list.png)

*The CryptDrive in list view.*


Managing documents
------------------

### Folders

(LOGGED IN USERS ONLY)

There are multiple ways to create folders in the CryptDrive:

-  **+ New** in the toolbar >  **Folder**.
-  ``Right click`` >  **New folder**.
-  ``Ctrl + e`` > **Folder**.

Once a folder is created, documents can be added to it by dragging them from the CryptDrive.

To change the colour of a folder:

- ``Right click`` on the folder >  **Change colour** (shown with the colour palette icon).

To share a folder and all of its contents:

- ``Right click`` on the folder > **Share** (shown with the share icon). The folder will then be converted into a [shared folder](#shared-folders).

### Renaming

There are two ways to rename documents on CryptPad. One changes the document title for all users, the other changes it only in your CryptDrive.

To change the title of a documents for all users that have it in their CryptDrive:

#. ``Click`` on the title or the pencil icon in the toolbar of the document.
#. Type the new title.
#. Save with the tick button or ``Enter`` key.

To change the title of a document only in your CryptDrive:

#. ``Right click`` on the document in your CryptDrive > **Rename** (shown with the pencil icon).
#. Type the new name.
#. Save with the ``Enter`` key.

The flag icon indicates that the title of a document is different in your CryptDrive than for other users.

### Deleting

There are two ways of deleting a document on CryptPad:

- **Removing** a document means it stops appearing in the CryptDrive but remains in the database. The document remains in the CryptDrive of other users who have stored it. The document can be recovered in the CryptDrive using the [history](#cryptdrive-history).
- **Destroying** a document deletes it from the database permanently. The document is deleted from all CryptDrives that store it, and it cannot be recovered using the CryptDrive history (DOCUMENT OWNERS ONLY) 

> PLEASE NOTE
>
> If a document is not stored in any CryptDrive, it is **destroyed** from the database after 90 days (the length of this delay can be changed by the service administrators).

To **remove** a document from the CryptDrive.

-  Drag the document from the CryptDrive into the **Trash**.
-  ``Right click`` > **Move to trash**
-  Select the document and press the ``Del`` key.

To **remove** the document from the CryptDrive without storing it in the trash first:

- Select the document and press the ``Shift + Del`` keys.

To empty the trash:

- ``Right click`` on the **Trash** tab to the left of the CryptDrive > **Empty the trash**.
- ``Click`` on the **Trash** tab to access the trash > **Empty the trash**.

If you are an *owner* of some documents in the trash when you empty it, you are prompted to decide if you want to **remove** or **destroy** them.

To **destroy** a document without storing it in the trash first:

-  ``Right click`` on the document in the CryptDrive > **Destroy**. (DOCUMENT OWNERS ONLY) 

Once destroyed, documents may still appear in other user's CryptDrives. Once a document has been added  to someone's drive, the encrypted nature of CryptPad makes it impossible to take it back. Therefore a destroyed document may still appeared in a user's drive if they had previously stored it. However, they will not be able to open the document.

CryptDrive history
------------------

The CryptDrive history is saved and can be restored if needed. From the CryptDrive:

1. ``Click`` on the history button at the top-right (shown with an anticlockwise arrow under the avatar).
2. Use the arrows (fast backward, step backward, step forward and fast forward) to step through the history.
3. Restore the displayed version with **Restore** (shown with a tick icon), or exit the history without restoring with **Close** (shown with a cross icon).

To save storage space the CryptDrive history can be deleted in the [user settings](#settings).

> PLEASE NOTE
>
> *Shared folders* have their own history, separate from the CryptDrive history. Restoring the history of the drive does not affect shared folders, conversely the history of a shared folder can be restored without affecting the rest of the drive.

Tags
----

(LOGGED IN USERS ONLY)

Group documents in multiple categories by using tags. Your tags are not visible by other users.

The  **# Tags** tab in the CryptDrive displays all tags in use and their associated documents.

![../_images/modal-tags.png](https://docs.cryptpad.fr/en/_images/modal-tags.png)

To add or remove tags from a document:

-  From the CryptDrive: ``Right click`` on the document > **# Tags**.
-  From a document: **File** > **# Tags**.

To manage tags for multiple documents:

#. Select the documents with ``Ctrl + Click`` in the CryptDrive.
#. ``Right click`` on the documents > **# Tags**.

Only the tags assigned to all the documents are then displayed. Any tags added and/or removed are applied to all the selected documents.

Templates
---------

(LOGGED IN USERS ONLY)

Templates provide reusable starting points to create documents of a similar structure, for example invoices, letterheads, reports, and so on.

To create a template:

1. Select the **Templates** tab in the CryptDrive (the icon shows a spanner on a page).
2. **+ New** in the toolbar.

or

1. In an existing document: **File** > **Save as template** (shown with a bookmark icon).

or

1. Create a *new document*.
2. On the creation screen select |cptools new-template| **New template** (the icon shows a plus on a page).

To use a template:

-  Select the template when creating a *new document*.
-  In an existing document: **File** > **Import a template** (shown with an upload icon).
   Please note: this option **replaces** the contents of the document with the template.

# Collaboration / Social



## Profile

(LOGGED IN USERS ONLY)

Each registered user on CryptPad has a profile page accessible from the user menu:

- User menu (avatar at the top-right) > **Profile**.

### Personal profile

The following elements can be customised on the profile page:

- Avatar with **Upload a new avatar**.
- Description with **Add a description**.
- Website with **Add a link to your website**.

Sharing:

- **View my profile**: Preview the profile page as it appears to other users.
- **Share**: Copy a link to your profile.

### User profile

To see the profile of another user:

- **User list**  of a document where they are connected > `Click` on their name.
- If the user is in your list of *contacts*. User menu (avatar at the top-right) > **Contacts** > `Double click` on their name in the list.

On another user’s profile page:

- **Send a contact request**: Adds this user to your *contacts* once they have approved the request.
- **Mute**: Blocks notifications and messages from this user. They will not know that they have been muted.
- **Copy public key**: Copies the key used by instance administrators and on instances that offer subscriptions.

## Calendar

The calendar is not available in this version of CryptPad.

## Contacts

(LOGGED IN USERS)

On CryptPad, using contacts makes collaboration more secure and simple.

### Add a contact

By sharing your profile:

1. Copy the link: User menu (avatar at the top-right) > **Profile** > **Share**.
2. Paste and send through the means of your choice (preferably a secure mode of communication).

On the profile page of another user, click **Send a contact request**.

### Manage contacts

To access the Contacts page:

- User menu (avatar at the top-right) > **Contacts**.

All contacts are listed at the left of the window. For each contact, you can:

- Mute messages and notifications.
- Remove a contact.
- See if the contact is online.

### Chat with contacts

On the Contacts page, `Click` on a contact in the list to open the chat with them in the main window.

Write messages in the field at the bottom and send them by selecting the paper plane icon or `Enter`.

Load more chat history by selecting the anticlockwise icon or delete the history by selecting the eraser icon.

## Teams

(LOGGED IN USERS ONLY)

CryptPad teams are shared spaces between a group of users. A team has its own CryptDrive, chat, and a list of members with roles and permissions.

> PLEASE NOTE
>
> The number of teams a CryptPad user can join used to be limited to 3 for performance reasons. This has now been increased to 5 as we have added details to the loading screen that show how long teams take to load. This allows users to negotiate the trade-off between number of teams and increased loading time.

To create a team:

1. User menu (avatar at the top-right) > **Teams**.
2. **+ New**.

To open an existing team:

1. User menu (avatar at the top-right) > **Teams**.
2. **Teams** > **Open** button on the desired team.

### Team Drive

The team storage space is similar to the CryptDrive but shared between members of the team.

### Team members

To manage the members of a team, go to the **Members** tab.

### Invite members

To invite members to a team:

-  **Members** tab > **Invite members**.

**Contacts** tab: Select CryptPad contacts to invite them to the team. Invitees receive an invite notification and can confirm they want to join the team.

**Link** tab: Copy a link to send through the means of your choice (preferably a secure mode of communication). This link is single-use only. It becomes invalid after someone first uses it to join the team.

- **Temporary name**: Used to identify the invite link in the list of pending invitations.
- **Password**: Protect the link against potential interception. (optional)
- **Personal message**: Message that the recipient will see before they decide to accept the invitation to join the team.

### Roles and permissions

| Role    | View | Edit | Manage members | Manage team |
| ------- | ---- | ---- | -------------- | ----------- |
| Viewers | ✅    | ❌    | ❌              | ❌           |
| Members | ✅    | ✅    | ❌              | ❌           |
| Admins  | ✅    | ✅    | ✅              | ❌           |
| Owners  | ✅    | ✅    | ✅              | ✅           |

Permissions:

View: access folders and pads (read-only).

Edit: create, modify, and delete folders and pads.

Manage Members: invite and revoke members, change member roles up to Admin.

Manage Team: change team name and avatar, add or remove Owners, change team subscription, delete team.

### Administration

Each member’s role can be changed in the team roster. Team admins and owners can manage members of equal or lower role. For each member, you can:

- Promote to a higher role.
- Demote to a lower role.
- Kick from the team.

### Chat

The team chat is similar to the chat with *contacts* except shared between all members of the team.

### Administration tab

(TEAM OWNERS ONLY)

- **Public signing key**: Used to identify the team on instances that offer subscriptions.
- **Team name**: Change the name of the team.
- **Team avatar**: Import/modify an avatar for the team.
- **Download team drive**: Save the content of all documents in the CryptDrive. When possible, this is done in a format that is readable by other software. Some applications produce files that are only readable by CryptPad.
- **Team deletion**: Permanently delete the team and all of its documents.

# Share / Access

**Share** and **Access** are the two menus to manage how other users can interact with your documents on CryptPad.

- From the document toolbar: **Share** and **Access** at the center.
- From the CryptDrive: `Right click` on a document > **Share** or **Access**.

## Share

There are three ways to share a document: [Sharing with contacts](#sharing-with-contacts), [Sharing a link](#sharing-a-link), and [Embedding](#embedding). In each case, access rights can be set to authorise the recipient to edit the document, or to only view it.

### Access rights

There are 4 levels of permissions:

- **View**: Read-only without editing the document.
- **Present**: Read-only the rendered output of the document, available in the [Code / Markdown](https://docs.CryptPad.fr/en/user_guide/apps/code.html#app-code) and [Slides](https://docs.CryptPad.fr/en/user_guide/apps/slides.html#app-slides) applications.
- **Edit**: View and make changes to the document.
- **View once and self-destruct**: Read-only **one time**. Once the link is opened by a recipient, the document is deleted permanently.

> PLEASE NOTE
>
> If a document is already stored in the CryptDrive of a user with edit rights, the “edit link” is shown in the document’s properties even if the user is in View mode.

### Sharing with contacts

(LOGGED IN USERS ONLY)

This is the recommended method for sharing documents securely on CryptPad. When sharing directly with [contacts](#contacts), document links never leave the encrypted platform of CryptPad. This prevents data from being leaked to third parties.

![../_images/modal-share-contacts.png](https://docs.CryptPad.fr/en/_images/modal-share-contacts.png)

To share with one or more contacts:

- **Share** in the document toolbar > **Contacts**.
- `Right click` on the document in the CryptDrive > **Share** > **Contacts**.

Then:

1. Choose the [access rights](#access-rights).
2. Select the contacts or teams to share with.
3. **Share** button.

Note

When sharing with contacts, they receive a notification. When sharing with a team, the document is added directly to the team’s CryptDrive.

### Sharing a link

The **Link** tab provides links that can be shared through the medium of your choice. Depending on how you send the link, this method can present security risks. To add a level of security, it is recommended to add a [password](#access-tab) to your document before sharing the link.

![../_images/modal-share-link.png](https://docs.CryptPad.fr/en/_images/modal-share-link.png)

To copy the link to a document:

- From the document: **Share** in the toolbar > **Link**.
- From the CryptDrive: `Right click` on the document > **Share** > **Link**.

Then:

1. Choose the [access rights](#access-rights) and additional options:
   - **Embed mode** hides the toolbar and user list.
   - **Preview** allows to check what the link will look like before sending it.
2. **Copy** the link.
3. Send the link.



### Embedding

Embedding allows for a CryptPad document to be displayed on a web page.

![../_images/modal-share-embed.png](https://docs.CryptPad.fr/en/_images/modal-share-embed.png)

To embed a document:

- From the document: **Share** in the toolbar > **Embed**.
- From the CryptDrive: `Right click` on the document > **Share** > **Embed**.

then

1. Choose the [access rights](#access-rights).
2. **Copy** the embed code.
3. Paste the code on a web page.

### Shared folders

(LOGGED IN USERS ONLY)

Shared folders are made for sharing a set of documents at once.

To create a shared folder in the CryptDrive:

- `+ New` > **Shared folder**.
- `Ctrl + e` > **Shared folder**.
- `Right click` > **New shared folder**.

To convert an existing folder into a shared folder:

1. `Right click` on the folder > **Share**.
2. Choose the conversion options. Password. [Owned](#owners) folder.
3. `OK` or press the `Enter` key.

Folders are shared in a similar way to documents. To share a folder from the CryptDrive:

1. `Right click` on the folder > **Share**.
2. Choose the [access rights](#access-rights). **View**: Read-only without editing the contents of the folder. **Edit**: View and make changes to the folder.
3. Three tabs are available: **Contacts**: Recommended method to share securely with contacts and teams on CryptPad. **Link**: Copy a link to send through the medium of your choice. **Embed**: Copy code to include the folder on a web page.

> Note
>
> Shared folders have their own history, separate from the [CryptDrive history](#cryptdrive-history). Restoring the history of the drive does not affect shared folders, conversely the history of a shared folder can be restored without affecting the rest of the drive.

## Access

(LOGGED IN USERS ONLY)

This menu is used to restrict access to a document or shared folder:

- From the document: **Access**.

- From the CryptDrive: `Right click` on the document or shared folder > **Access**.

  

### Access tab

![../_images/modal-access-access.png](https://docs.CryptPad.fr/en/_images/modal-access-access.png)

This tab summarises all the modalities of access to the document:

- **Expiration date**: Date at which the document will be deleted. This date is set at the creation of the document and cannot be modified afterwards.

- **Password**: Displays if a password has been set. A new password can be set, or an existing password modified.

- **Owners**: List of all the document’s [owners](#owners).

- **Edit rights requests**:

  **Request edit rights**: For users with read-only access rights.

  **Mute access requests for this pad**: Hides edit rights requests for this document. Document owners

- **Access list**: Displays the [access list](#access-list) and indicates if it is enabled.

- **Destroy**: Delete the document permanently.



### Access List

(DOCUMENT OWNERS ONLY)

![../_images/modal-access-list.png](https://docs.CryptPad.fr/en/_images/modal-access-list.png)

The access list restricts access to a document. Once active, users who are not on the list are not able to access the document, even if they have it stored in their CryptDrive.

To enable the access list, tick **Enable access list**. The [owners](#owners) of the document are on the list by default and cannot be removed from it.

To add contacts or teams to the list:

1. Select them in the list of contacts on the right.
2. Add them to the list with the button.

To remove a user or team from the list use the button next to their name.



### Owners

![../_images/modal-access-owners.png](https://docs.CryptPad.fr/en/_images/modal-access-owners.png)

This tab is used to manage the ownership of the document. Owners of a document have the following permissions:

- Enable an [access list](#access-list).
- Enable a password.
- Add or remove other owners.
- Destroy the document.

The ownership of a document is set when [creating it](https://docs.CryptPad.fr/en/user_guide/apps/general.html#new-document).

> Note
>
> If a document is created without owners, no one has permissions to manage its ownership. It cannot be permanently destroyed by anyone, but can be removed from the CryptDrive and will be destroyed automatically after 90 days of inactivity.



(DOCUMENT OWNERS ONLY)

To add users or teams as owners:

1. Select them in the list of contacts on the right.
2. Add them to the list with the button.

To remove an owner, use the button next to their name.



# Applications



## General

### New document

To create a new document:

- From anywhere on CryptPad: `Ctrl+e`.
- From the CryptDrive:
  -  **New** in the toolbar.
  -  **New** at the bottom of the file list/grid.
- From a document: **File** > **New**.

![../../_images/app-creation-screen.png](https://docs.cryptpad.fr/en/_images/app-creation-screen.png)

(LOGGED IN USERS ONLY)

The creation screen offers a number of options when new documents are created.

- **Owned pad**: Create the new document as [owner](#owners). If the document is created without an owner this setting cannot be modified.
- **Expiring pad**: Specify an expiry date after which the document will be destroyed. This setting cannot be modified after the document is created.
- **Add a password**: Secure the sharing of the document with a [password](#passwords-for-documents-and-folders). This setting can be changed later in the [Access](#access) menu.
- **Template**: Use a [template](#templates) as a starting point for the document.



### Saving

Changes to documents are saved automatically. The status line in the document toolbar (under the title) confirms that changes have been saved.



### Make a copy

To duplicate a document:

- From the document: **File** > **Make a copy**.
- From the CryptDrive: `Right click` on the document > **Make a copy**.

> PLEASE NOTE
>
> Due to the integration of OnlyOffice with CryptPad's encrypted real-time collaboration, **Make a copy** is not available in Spreadsheets.



### Document history

![../../_images/history-toolbar-richtext.png](https://docs.cryptpad.fr/en/_images/history-toolbar-richtext.png)

The history toolbar

The history of documents is saved and can be restored if needed. To view and restore the history of a document:

1. **File** > **History**.
2. Use the arrows to navigate:
   - Between each edit.
   - Between each author.
   - Between each editing session (when the same group of authors was connected to the document).
3. Restore the displayed version with **Restore**, or close the history without restoring with **Close**.

To save storage space, history can be deleted in the document’s [properties](#properties) (DOCUMENT OWNERS ONLY)

> PLEASE NOTE
>
> The history functionality works slightly differently in the [Spreadsheet](#spreadsheets) application, due to the integration of OnlyOffice with CryptPad's encrypted real-time collaboration. Please refer to [spreadsheet history](https://docs.cryptpad.fr/en/user_guide/apps/sheets.html#sheets-history) for further details.

**Version Links**

To share a link to the displayed version of the history:

- **Share** in the toolbar.
- Select **Contacts**, **Link** or **Embed** similarly to when [sharing a document](#share).

Recipients will be able to view the selected version in read-only mode.

> WARNING
>
> Sharing a link to a version also gives read-only access to all versions of the document.

**Create a snapshot from history**

To create a [snapshot](#snapshots) from the displayed version of the history:

- The camera icon in the toolbar.
- In the dialog, provide a name for the snapshot.
- **New Snapshot**



### Snapshots

![../../_images/snapshots-dialog.png](https://docs.cryptpad.fr/en/_images/snapshots-dialog.png)

Snapshots are specific points in the history of a document that are named for easy reference.

To create a snapshot from the current state of the document:

- **File** > **Snapshots**
- In the dialog, provide a name for the snapshot.
- **New Snapshot**

To create a snapshot from a version in the document's history see [snapshot from history](#document-history) above.

To view and restore a snapshot:

- **File** > **Snapshots**
- In the dialog, `Click` on the snapshot in the list and **View**.
- The snapshot opens in a new window.
- **Restore** or **Close**

To delete a snapshot:

- **File** > **Snapshots**
- In the dialog, `Click` on the snapshot in the list and **Delete**.

> WARNING
>
> Snapshots are part of the document's history. If you delete the history in the [Properties](#document-properties), snapshots will be deleted as well.



### Properties

![../../_images/modal-properties.png](https://docs.cryptpad.fr/en/_images/modal-properties.png)

To access the properties menu:

- From the document: **File** > **Properties**.
- From the CryptDrive: `Right click` on the document > **Properties**.

Available data:

- Document identifier to share with instance administrators in case of an issue. (note that this does not expose the content of of the document).
- Links to edit and view (depending on your permissions).
- Dates of creation and last access.
- Size.

The document size shows the proportions used for content and for history. To save storage space, delete the document’s history with **Delete history** and confirm. Document owners



### Users and chat

Interact with users connected to the same document through the user-list  and the **Chat**.

To show/hide these panes:

- Select the person or eye icons for the user-list.
- **Chat** for the chat.



## Rich Text

The Rich Text application in CryptPad is an integration of [CKEditor](https://ckeditor.com/).

![../../_images/app-richtext-preview.png](https://docs.cryptpad.fr/en/_images/app-richtext-preview.png)

### Toolbar

**Tools**: Show/hide the text editor toolbar (shown with a spanner icon)

**Insert**: Add an image to the document. The image can be chosen in the CryptDrive or uploaded (shown with a picture icon). (LOGGED IN USERS ONLY)

### View settings

The buttons at the top of the editor control the display of text editor elements. You can:

- Show/hide the document outline.
- Show/hide the comments (a red icon when closed indicates that there are comments).
- Use the full width of the window for the text editor.
- Use reduced width "page mode" for the text editor.

To set defaults for these settings, for example to control which sections are visible when recipients visit a shared link to the document, use the **Document Settings** dialog:

**File** > **Document Settings**.

### Import/Export

**File** > **Import**

Supported formats: `.html`.

**File** > **Export**

Supported formats: `.html`, `.doc`.

To print or export a PDF:

1. **File** > **Print**.
2. Select your printer or “print to file”.

### Comments

To comment on a part of the text:

1. Select the text to comment.
2. Select the speech bubble icon, either to the right of the text or in the text editor toolbar.
3. Write the comment.
4. **Submit**.

Click on a comment to select it, then:

- **Reply**: Adds a comment as a response.
- **Resolve**: Deletes the comment after confirmation.

To notify contacts in a comment, mention them with `@` and their [display name](#account).

You receive notifications when:

- Someone replies to one of your comments.
- Someone mentions you in a comment.



## Spreadsheet

The Spreadsheet application in CryptPad is an integration of [OnlyOffice](https://www.onlyoffice.com/). To read more about the details of this integration see [What is the relationship between CryptPad and OnlyOffice?](https://docs.cryptpad.fr/en/FAQ.html#faq-oointegration).

![../../_images/app-sheets-preview.png](https://docs.cryptpad.fr/en/_images/app-sheets-preview.png)

### Documentation

This is a partial guide that explains some of the Spreadsheet features within CryptPad. The Spreadsheets application is based on [OnlyOffice's](https://www.onlyoffice.com/) Spreadsheet application, so please refer to the [OnlyOffice documentation](https://helpcenter.onlyoffice.com/en/ONLYOFFICE-Editors/ONLYOFFICE-Spreadsheet-Editor/index.aspx) for a full spreadsheet user-guide.

### Toolbars

CryptPad integrates OnlyOffice spreadsheets into the same encrypted collaboration system as the other applications. Additionally OnlyOffice provides a wide range of functions in a tabbed toolbar. This results in a double toolbar that can cause confusion:

- The topmost **CryptPad toolbar** is used for **File** operations (including import/export, history, properties, etc) as well as **Share** and **Access**.
- The **OnlyOffice toolbar** is used for all functionality within the spreadsheet document itself, as well as the collaboration modes explained in the next section.

### Undo and collaboration modes

![../../_images/app-sheets-collab-mode.png](https://docs.cryptpad.fr/en/_images/app-sheets-collab-mode.png)

OnlyOffice provides two collaborative editing modes in spreadsheets that affect how changes are synced between users and whether or not the **Undo** functionality is available.

- **Fast Mode** is enabled by default. New edits by all users are automatically synced with others as they are made. In this mode it is not possible to undo.
- **Strict Mode** allows each user to make changes independently. The modified cells are "locked" for others until the author manually saves their changes. New edits are only synced with other users after being saved. In this mode it is possible to undo changes that have not yet been saved. When a user saves their changes, others are prompted to save in order to receive the latest edits.

When `Ctrl Z` is pressed for undo, the application will automatically suggest switching to **Strict Mode** to enable the undo functionality.

To switch back to **Fast mode**, use the **Collaboration** tab in the OnlyOffice toolbar and select **Co-editing Mode** > **Fast**.

> PLEASE NOTE
>
> CryptPad remembers your choice of editing mode on each device for all documents.

### History

To access the spreadsheet history, use **File** > **History** in the CryptPad toolbar.

Due to the integration of OnlyOffice with CryptPad's encrypted real-time collaboration, history in speadsheets works differently than [in the other applications](#document-history).

![../../_images/history-toolbar-sheets.png](https://docs.cryptpad.fr/en/_images/history-toolbar-sheets.png)

The spreadsheet history toolbar

History in spreadsheets only allows to jump back to the previous version, and then move forward through individual edits.

-  previous version
-  step forward one edit
-  next version

The functionality to restore and share a version, as well as everything relating to [Snapshots](https://docs.cryptpad.fr/en/user_guide/apps/general.html#snapshots), works in the same way as in [the other applications](https://docs.cryptpad.fr/en/user_guide/apps/general.html#document-history).

### Printing

To print spreadsheets it is recommended to export using one of the formats below and to handle page layout with a desktop application such as LibreOffice Calc.

Alternatively the `.pdf` export can be used to produce file for print, results may vary depending on the layout of the document.

### Import/Export

**File** > **Import**.

Supported formats: `.bin` files exported by this application, Excel `.xslx`.

**File** > **Export**.

Supported formats: `.bin`, Excel `.xslx`, `.ods`, `.csv`, `.pdf`.



## Code / Markdown

The Code/Markdown application in CryptPad is an integration of [CodeMirror](https://codemirror.net/).

![../../_images/app-code-preview.png](https://docs.cryptpad.fr/en/_images/app-code-preview.png)

### Toolbar

**Tools**: Show/hide the text editor toolbar.

**Insert**: Add an image to the document. The image can be chosen in the CryptDrive or uploaded. (LOGGED IN USERS ONLY)

**Theme**: Set colours for the editor, detailed [below](#theme).

**Preview**: Show/hide the Markdown preview pane.

### Theme

**Color by author**: Highlight the text written by each user with their cursor color (picked in [user settings](#cursor)). When active:

-  **Hide author colors** to turn off the display of colors in this window, the colors can be turned back on and remain active for other users.
-  **Color by author** > **Clear and disable** to turn off the colors for all users and delete the data.

**Theme**: Color scheme used in the code editor pane.

**Language**: Used for syntax highlighting.

### Import/Export

**File** > **Import**.

Supported formats: Any plain text file, the file extension is used to determine the language.

**File** > **Export**.

Supported formats: `.md`, any other extension can be typed for the name of the exported file.

### Markdown

The Code application is particularly suited for writing documents in Markdown: a lightweight syntax that offers basic formatting while remaining readable. Markdown is readily converted to other formats such as HTML.

For examples of Markdown syntax in CryptPad, please see:

[**Markdown Guide: Basic Syntax**](https://cryptpad.fr/code/#/2/code/view/kmYt1-pxaMlinUl2+YQSLyZetKE2GJo9QtTlCQ8RNks/)

Additionally to basic Markdown syntax, the following features are also available:

- `[TOC]` Inserts a table of contents.
- Todo list
  - `- [ ] task` for a task to do: ☐ task.
  - `- [x] task` for a completed task: ☑ task.

As well as the following extensions:

- Diagrams with [Mermaid](https://mermaid-js.github.io/mermaid/#/).
- Mindmaps with [Markmap](https://markmap.js.org/).
- Mathematical equations with [Mathjax](https://www.mathjax.org/).

To use an extension, name it as syntax for a Markdown code block, for example:

```
​``` mermaid
   <!-- your mermaid code -->
​```
```

for detailed examples of the extensions in use please see:

[**Markdown Guide: Extensions**](https://cryptpad.fr/code/#/2/code/view/VJtytDV8tsmlGx0GlR02azrp51A8cl8ivifXf6GQ9RA/)

### Images

It is strongly advised **not** to insert external images in documents. The Markdown syntax `![description](https://site.com/image.jpg)` is supported but presents security risks. Malicious code can be hidden in images and result in data leakage.

For this reason, CryptPad makes use of `media-tag` to insert images from the CryptDrive. This syntax is more complex but it is managed automatically by the **Insert** menu.

### Lightbox

To browse through all images and diagrams in a document using the full width of the window:

1. `Double click` on an image or diagram in the Markdown preview.
2. Navigate with the arrow keys.
3. Close the light box with **x** or `Esc`.



## Slides

The Slides application in CryptPad is an integration of [CodeMirror](https://codemirror.net/).

![../../_images/app-slides-preview.png](https://docs.cryptpad.fr/en/_images/app-slides-preview.png)

### Toolbar

**Tools**: Show/hide the text editor toolbar.

**Insert**: Add an image to the document. The image can be chosen in the CryptDrive or uploaded. (LOGGED IN USERS ONLY)

**Theme**: Set colours for the editor, detailed [below](#theme-2).

**Preview**: Show/hide the slides preview pane.

**Presenter**: Launch the slide presentation in full window.

### Writing slides with Markdown

CryptPad slides are written in Markdown, a lightweight syntax that offers basic formatting while remaining readable.

[**Markdown syntax guide**](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

The main addition to basic Markdown in the Slides application is the `---` delimiter to separate slides.

### Theme

**Options**:

> - **Layout**: Toggle slide numbers, date, title, and transitions.
> - **Background Image**: Displayed on all slides.
> - **Custom CSS**: Paste CSS code to customise the presentation’s appearance.

**Text colour**, **Background colour**: Pick colours for the presentation.

**Theme**: Colour scheme used in the code editor pane.

### Import/Export

**File** > **Import**.

Supported formats: Any plain text file.

**File** > **Export**.

Supported formats: `.md`.

### Images

It is strongly advised **not** to insert external images in documents. The Markdown syntax `![description](https://site.com/image.jpg)` is supported but presents security risks. Malicious code can be embedded in images and result in data leakage.

For this reason, CryptPad makes use of `media-tag` to insert images from the CryptDrive. This syntax is more complex but it is managed automatically by the **Insert** menu.

### Lightbox

To browse through all images and diagrams in a document using the full width of the window:

1. `Double click` on an image or diagram in the Markdown preview.
2. Navigate with the arrow keys.
3. Close the light box with or `Esc`.



## Poll

The Polls application is aimed at the facilitation of decisions in small groups of people who trust each other, for example to decide on a meeting date/time.

It is not suited for polling a large number of people, or for situation where the security of the votes is paramount. To cast a vote, each user must have edit rights to the document. This enables each participant to **modify and/or delete answers from other participants**.

![../../_images/app-poll-preview.png](https://docs.cryptpad.fr/en/_images/app-poll-preview.png)

### Toolbar

**Edit**: Switch to edit mode to change the poll description and response options.

**Publish**: Save the changes to the poll description and response options.

In edit mode:

**Tools**: Show/hide the text editor toolbar.

**Insert**: Add an image to the poll description. The image can be chosen in the CryptDrive or uploaded. (LOGGED IN USERS ONLY)

### Edit mode

The poll description is written in [**Markdown**](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). Use **Insert** to add images.

Response options are added to the left of the table. To add an option:

1. Add a title to the “Option” field.
2. `Click` on or `Enter`.

To change an option, `Click` on the ✐ to the right of the title. To delete an option, `Click` on to the left of the title.

### Voting

Each vote is logged in a column of the results table. To add a vote:

1. Add a name to the column title.
2. `Click` on the cells of the options to indicate:

- ✔ Yes
- ~ Maybe
- ✖ No

1. `Click` on **Submit** at the top of the column to save the vote and add it to the total count.

Use to unlock an existing column and edit the name and votes. Use to lock the column.

To add a comment to the poll:

1. Write your comment in the field labelled “Your comment”.
2. **Send**

### Export

**File** > **Export**

Supported formats: `.csv`



## Kanban

The Kanban application in CryptPad is based on [JKanban](https://www.riccardotartaglia.it/jkanban/).

![../../_images/app-kanban-preview.png](https://docs.cryptpad.fr/en/_images/app-kanban-preview.png)

### Organisation

Move cards/columns:

- `Drag` the card/column to its desired position and `Drop`.

Remove a card/column:

- The area shown with a bin icon appears once you are dragging an element.
- `Drag` the card/column to the Delete area (shown with a bin icon) at the bottom of the screen and `Drop` the card/column.

or

-  button on the card/column to open the editor > **Delete** and confirm.

### Columns

Create a new column:

- **+** button to the right of the last columns.

Change the title of a column:

1. `Click` on the column title.
2. Type the new title.
3. `Enter`

The column title and colour can be changed in the column editor:

1. Click the pencil icon next to the column title.
2. Change the title and/or pick a colour.
3. **Close**, `Esc` or `Enter`

### Cards

Create a new card with the buttons at the bottom of each column:

- Add a card at the bottom of the column.
- Add a card at the top of the column.

Change the title of a card:

1. `Click` on the card title.
2. Type the new title.
3. `Enter`

The title of a card can also be modified in the card editor (see below).

### Card editor

Open the card editor:

- Click the pencil icon next to the card title.

In the card editor:

- Edit the card title.
- Edit the card body using [**Markdown**](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet): Italics, bold, links, lists, todo-lists, etc. are supported.
- Pick a card colour.
- Add or remove tags to the card.
- Delete the card.

### Display

Use the and icons at the top right to display:

- only card titles.
- full card contents.

The tags at the top of the board are used to filter cards:

1. `Click` on one or more tags.
2. Only cards with these tags are displayed.
3. Any new cards will automatically receive the selected tags.
4. `Click` on a selected tag to de-select it, or use **Clear filter** (at the left of the list) to de-select all tags.

### Import/Export

**File** > **Import**

Supported formats: `.json` files exported by this application.

**Files** > **Export**

Supported formats: `.json`.



## Whiteboard

The Whiteboard application in CryptPad is based on [Fabric.js](http://fabricjs.com/).

![../../_images/app-whiteboard-preview.png](https://docs.cryptpad.fr/en/_images/app-whiteboard-preview.png)

### Toolbar

**Insert**: Add an image to the document. The image can be chosen in the CryptDrive or uploaded. (LOGGED IN USERS ONLY)

### Drawing

Two modes are available:

- Paint mode: add new shapes to the drawing.
- Select mode: transform existing shapes.

Functions available in both modes:

- Undo
- Redo
- Insert a text element in the drawing

To delete everything on the canvas:

- **Clear** button in the drawing toolbar at the bottom.

### Paint mode

The width and opacity of line are set in the drawing toolbar. The preview to the right shows the size and opacity of the paintbrush.

Colour is selected in the palette in the drawing toolbar. To change a colour `Double click` on it and select a new one using the colour-picker.

## Select mode

`Click` on an element to select it, then:

- `Drag` to move.
- Transform (scale, rotate) with the selection handles.

To delete a selected element:

- `Del` key.
-  button in the drawing toolbar.

## Export

**File** > **Export**

Supported format: `.png`

To export an image to the CryptDrive, for example to use it in other documents:

**File** > **Save as image**

