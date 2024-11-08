# TheReactBlog

This is a simple blog management application that allows users to create, view, and delete blog posts. It uses React for the frontend, Express for the backend, Prisma as the ORM, and SQLite as the database.

## Features

- **Create Posts**: You can create new blog posts using a rich text editor (React Quill).
- **View Posts**: View the list of all posts.
- **Delete Posts**: Select multiple posts and delete them at once. A delete button is provided to toggle the delete functionality.
- **Responsive Design**: The app is fully responsive, designed for both desktop and mobile views.

## Tech Stack

- **Frontend**: React, React Quill, Tailwind CSS
- **Backend**: Express.js
- **Database**: SQLite with Prisma ORM
- **Editor**: React Quill (WYSIWYG editor)

## Setup

### Prerequisites

- Node.js
- SQLite (optional if you prefer a different database)
- Prisma

### Installation

1. **Clone the repository**:

   ```bash
   git clone github.com/IAmKushagraSharma/TheReactBlog.git
   cd TheReactBlog
   ```

2. **Install dependencies**:

   > This project was focused on react so the backend is not really something i focused on, there server.js file is the whole backed logic which provides the basic API Endpoints

   ```bash
   npm install
   ```

3. **Setup Prisma**:

   - Run the following command to generate the Prisma client:

     ```bash
     npx prisma generate
     ```

   - Make sure your database is set up properly, and run migrations to create tables:

     ```bash
     npx prisma migrate dev --name init
     ```

4. **Start the Application**:

   For the backend (Express):

   ```bash
   node server.js
   ```

   For the frontend (React):

   ```bash
   pnpm run dev
   ```

   The backend should be running on `http://localhost:5000` and the frontend should be running on `http://localhost:5173`.

## Usage

- **Creating a Post**:

  - Go to the `Create New Post` page.
  - Enter a title and description.
  - Use the rich text editor to enter content.
  - Press "Create" to add the post.

- **Viewing Posts**:

  - The posts will be displayed in a grid on the homepage.
  - Clicking on a post will display the full details.

- **Deleting Posts**:
  - On the homepage, click the delete button in the navbar to enable checkboxes.
  - Select the posts you want to delete.
  - Click the delete button again to remove the selected posts.

## API Endpoints

### 1. `GET /api/posts`

- **Description**: Fetches all the blog posts.
- **Response**: A list of posts.

### 2. `POST /api/posts`

- **Description**: Creates a new blog post.
- **Request Body**:

  ```json
  {
    "name": "Post Title",
    "description": "Post Description",
    "body": "Post Content"
  }
  ```

### 3. `POST /api/posts/delete`

- **Description**: Deletes multiple blog posts.
- **Request Body**:

  ```json
  {
    "ids": [1, 2, 3] // Array of post IDs to delete
  }
  ```

- **Response**: A success message if posts are deleted.

## Troubleshooting

- **Database Errors**:
  - Ensure that the database connection is correctly configured in `.env` file.
  - Run `npx prisma migrate dev` to sync the database schema with the Prisma models.

## Future Improvements

- Add user authentication and authorization for post creation and deletion.
- Implement pagination for the posts list.
- Enhance the rich text editor to support more complex content.

> **NOTE:** This project was created purely for fun to keep me entertained while watching _Better Call Saul_. When you're bored and have time to spare, feel free to explore and play around with this app. If you encounter any bugs (which, let's be honest, you probably will), don't hesitate to reach out or even fix them yourself! 👉👈
