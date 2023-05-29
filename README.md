# API Documentation

## Endpoints

### GET /api/index/:number

Returns the result of a dice roll for the specified number of rolls.

Parameters:

- `:number` (required): The number of dice rolls to perform.

Example:

    /api/index/5

Response:

    {
      "response": 17,
      "data": [4, 3, 2, 4, 4],
      "type": "Tài"
    }

### GET /api/data/:number

Returns the history of dice rolls for the specified number of rolls.

Parameters:

- `:number` (required): The number of history records to retrieve.

Example:

    /api/data/10

Response:

    [
      {
        "response": 17,
        "data": [4, 3, 2, 4, 4],
        "type": "Tài"
      },
      {
        "response": 12,
        "data": [2, 3, 1, 3, 3],
        "type": "Tài"
      },
      ...
    ]

## Installation

1.  Clone the repository.
2.  Install the dependencies using `npm install`.
3.  Start the server using `npm start`.

## Dependencies

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)

## License

This project is licensed under the MIT License.
