# Star Wars Planet Autocomplete Component

This React application allows users to search and select planets from the Star Wars universe using an autocomplete component. It utilizes the [Star Wars API (SWAPI)](https://swapi.dev/documentation) for retrieving planet data. The autocomplete component opens upon focus and closes upon blur, providing an efficient way to search for and select Star Wars planets.

## Table of Contents

- [Requirements](#requirements)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Performance Considerations](#performance-considerations)
- [Custom Hook](#custom-hook)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Requirements

To build this application, the following requirements were met:

- Utilize the [Star Wars API (SWAPI)](https://swapi.dev/documentation) for fetching planet data.
- Implement an autocomplete component that:
  - Opens upon input focus and closes upon blur.
  - Allows users to type a partial or full planet name to filter results.
  - Initiates a search with at least 2 characters.
  - Enables users to select a planet from the list.

## Features

- Autocomplete component for searching and selecting Star Wars planets.
- SWR (Stale-While-Revalidate) for request caching to improve performance.
- Efficient re-renders and request caching to minimize redundant API calls.

## Installation

To run this application locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd star-wars-planet-autocomplete
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and access the application at `http://localhost:3000`.

## Usage

- Open the application in your web browser.
- Click on the input field to focus it.
- Start typing at least 2 characters to initiate a search.
- As you type, the autocomplete component will display filtered results.
- Click on a planet name from the list to select it.

## Performance Considerations

The application aims for optimal performance by implementing the following strategies:

- **Request Caching:** SWR (Stale-While-Revalidate) is used to cache API requests, reducing redundant calls and improving response times.

- **Efficient Re-renders:** Components are designed to re-render efficiently, minimizing unnecessary updates and improving overall performance.

## Custom Hook

The application encapsulates the Star Wars API calls into a custom hook for ease of use and separation of concerns. The custom hook can be found in the `hooks` directory.

The Autocomplete component can be found in the `components` directory.

## Technologies Used

- React
- SWR (Stale-While-Revalidate)
- HTML/CSS
- JavaScript
- [Star Wars API (SWAPI)](https://swapi.dev/documentation)

## Contributing

Contributions to this project are welcome. Feel free to open issues or create pull requests for any improvements or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).