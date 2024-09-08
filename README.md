# SummaryAI

**SummaryAI** is a web application that allows users to input the URL of an article and get an AI-generated summary of the content. It is built with Vite, React, and Redux Toolkit Query for efficient API management.

## ✨ Preview

![Screenshot 2024-09-08 182205](https://github.com/user-attachments/assets/2ed11eb2-f138-47bf-8273-de5d2b78725d)

## 🛠️ Technologies Used

- React: Frontend framework for building the user interface.
- Vite: Build tool for fast development.
- Redux Toolkit Query: Manages API calls and caching.
- Tailwind CSS: Utility-first CSS framework for responsive design.
- RapidAPI: Used to fetch article summaries.

## 🌱 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en) (v14 or higher)
- [npm](https://docs.npmjs.com/getting-started) or [yarn](https://www.npmjs.com/package/yarnjs?activeTab=readme)

### Installation

1. Clone the repository:

```bash
git clone git clone https://github.com/Raajesh3108/SummaryAI.git
```

2. Navigate to the project directory:

```bash
cd SummaryAI
```

3. Install dependencies:

```bash
npm install
```

4. Set up environment variables:

- You need to create a `.env` file in the root directory to store your API key. (More details in the next section)

5. Start the development server:

```bash
npm run dev
```

- Your app should now be running on `http://localhost:5173`.

## 🚀 Environment Variables

- To run the project locally, you need to configure the following environment variables in your `.env` file:

```bash
VITE_RAPID_API_ARTICLE_KEY=your_rapid_api_key_here
```

- Make sure to replace `your_rapid_api_key_here` with your actual RapidAPI key. You can obtain it from [RapidAPI](https://rapidapi.com/hub).