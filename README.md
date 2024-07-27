# Chatting Application

## Features

- **User Authentication**
  - Users can register and log in with a username.
  
- **User Interaction**
  - Users can search for other users.
  - Users can send and receive friend requests.
  - Users are notified of new friend requests.
  - Users can accept or decline friend requests.

- **Chat Functionalities**
  - Users can view their chat list.
  - Users can send messages and attachments in chat.
  - Users can delete a chat or unfriend a user.

- **Group Chat Features**
  - Users can create group chats with 3 to 100 members.
  - Group admins can rename the group, add members, and remove members.
  - Groups can be deleted by the admin.
  - Group members can leave the group.
  - If the group admin leaves, a new admin is assigned automatically.

- **Admin Dashboard**
  - Accessible only with a secret key.
  - Admins can view users, messages, and chats.

## Usage

1. **Register**: Create a new account with a unique username.
2. **Log In**: Access your account using your credentials.
3. **Search Users**: Find users to connect with.
4. **Send Friend Requests**: Send and receive friend requests.
5. **Chat**: Start individual chats or create group chats.
6. **Manage Groups**: Use admin privileges to manage group members and settings.
7. **Admin Dashboard**: Use the secret key to access the admin dashboard for an overview of user activities.

## Technologies Used

- **Frontend**: React.js, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Real-time Communication**: Socket.io
