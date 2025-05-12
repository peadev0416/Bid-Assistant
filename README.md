# Bid Assistant

Bid Assistant is an Express.js-based application designed to assist with job applications. It leverages the power of ChatGPT to streamline the process of creating and managing job bids.

## Features

- Generate tailored job applications using ChatGPT.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/peadev0416/Bid-Assistant.git
    cd Bid-Assistant
    ```

2. Create a folder named `resumes` in the root directory and store your resume file(s) inside it. For example:
    ```
    resumes/jack.txt
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and configure the required environment variables:
    ```env
    PORT=3000
    OPENAI_API_KEY=your_openai_api_key
    ```

5. Start the development server:
    ```bash
    npm start
    ```

## Usage

1. Use an external tool (e.g., Postman, Chrome extension) to send a POST request with the following parameters:
    - `name`: Your name.
    - `jobDescription`: The job description.
2. The application will generate a tailored job application based on the provided information.

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for building the application.
- **ChatGPT API**: For generating job application content.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## Acknowledgments

- OpenAI for providing the ChatGPT API.
- The open-source community for their invaluable tools and resources.
- Inspiration from job seekers worldwide.
