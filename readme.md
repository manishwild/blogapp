# Blog App

This is a simple React Native blog project that demonstrates CRUD (Create, Read, Update, Delete) operations. The project uses Axios for API requests, JSON Server as a mock API, and Ngrok for exposing the local server to the internet.

## Getting Started

### Prerequisites

Make sure you have the following tools installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Ngrok](https://ngrok.com/) (for exposing the local server)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/manishwild/blogapp.git
    ```

2. Navigate to the project directory:

    ```bash
    cd react-native-blog
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Usage

1. Start the JSON Server:

    ```bash
    npm run json-server
    ```

   This will start the JSON Server and expose it through Ngrok.

2. Update the API URL:

   Open `src/api/api.js` and update the `BASE_URL` to the Ngrok URL provided in the console.

3. Run the React Native app:

    ```bash
    npm run android # or npm run ios
    ```

   This will launch the app on your connected emulator or device.

## Features

- Create a new blog post
- Retrieve a list of all blog posts
- View details of a specific blog post
- Update an existing blog post
- Delete a blog post

## Technologies Used

- React Native
- Axios
- JSON Server
- Ngrok

## Contributing

Feel free to contribute to the project by opening issues or creating pull requests. Make sure to follow the [code of conduct](CODE_OF_CONDUCT.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

