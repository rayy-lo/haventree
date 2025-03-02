# Weatherly

A simple weather application that allows users to search for a city and view a 14-day weather forecast.

---

## Setup

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 20.12.0 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (for package management)

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npm run dev
```

Create an `.env` file from `.env.example`

## Design Decisions

- Assumes that the search page will be the first page a user visits with a path of `/`
- Focused on having a simple and hybrid project structure since we only have 2 pages. In a large-sized application, I would reconsider the pages architecture because it can be difficult to share code and state across pages.
- Decided for CSR:
  - Application relies on searching for a city, which is dependent on user interaction. No need to pre-render pages on server
- Decided against a state management library. The app is small and application state is simple. The selected city is also better suited to be stored in the URL state due to the nature of the API endpoint depending on query strings.
- In a production weather app, we would create a connection with WebSockets/SSE or possibly polling for real-time updates on the forecast page but this project we will make the request when the page is loaded

## Additional Features

- CSS Reset
- Lazy Loading
- Environment variables
- Client-side routing w/ React Router
- TypeScript Support
- 404 Page for non-existing pages
- Application fallback error
- Basic ThemeProvider setup for scaling and consistent design system across codebase

## Improvements

- Include tools like Prettier and Husky to maintain consistency and high standards
- Implement a loading skeleton for the UI instead of a spinner for a better user experience and less CLS
- Instead of hard-coding english text, would use a i18n library to support different languages
- Research more on other Weather applications for better UI/UX
- Paginate the amount of results to show for city search
- Implement going back to search page with preserved state
- Add stricter typings (API responses, components...)
- Improve UX/UI by providing intuitive user
- Setup testing and add tests
