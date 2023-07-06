# English

## API Documentation

## Introduction

This documentation provides details on the endpoints and usage of the API. The API allows you to perform operations related to a game and retrieve game data.

## Base URL

    https://hsz7vy-3001.csb.app/

## Endpoints

### GET /game/:number

This endpoint generates a game result by simulating dice rolls.

#### Parameters

- **number** (required): The number of rolls to simulate.

#### Response

The response will contain the following properties:

- **response**: The sum of the random numbers generated.
- **data**: An array of individual random numbers generated.
- **type**: The type of the game result, either "Tài" or "Xỉu" based on the sum being even or odd.

Example Response:

    {
      "response": 15,
      "data": \[3, 2, 4, 1, 5\],
      "type": "Tài"
    }

### GET /data/:number

This endpoint retrieves the game history data.

#### Parameters

- **number** (required): The number of recent game results to retrieve.

#### Response

The response will be an array containing the specified number of recent game results.

Example Response:

    [
      {
        "response": 15,
        "data": \[3, 2, 4, 1, 5\],
        "type": "Tài"
      },
      {
        "response": 10,
        "data": \[2, 1, 3, 2, 2\],
        "type": "Xỉu"
      }
    ]

## Error Handling

The API may return the following error responses:

- **400 Bad Request**: When an invalid or missing parameter is provided. Example Response:

          {
            "message": "Please enter a valid number"
          }

- **500 Internal Server Error**: When there is an error reading or writing the data file. Example Response:

          {
            "message": "Failed to read/write data file"
          }

## Conclusion

This concludes the documentation for the API. Feel free to explore and use the available endpoints. If you have any questions or issues, please contact the API developers.

# Vietnamese

## Tài liệu API

## Giới thiệu

Tài liệu này cung cấp chi tiết về các điểm cuối và cách sử dụng của API. API cho phép bạn thực hiện các thao tác liên quan đến trò chơi và lấy dữ liệu trò chơi.

## URL Gốc

https://hsz7vy-3001.csb.app

## Các Điểm Cuối

### GET /game/:number

Điểm cuối này tạo kết quả của một trò chơi bằng cách mô phỏng việc tung xúc xắc.

#### Tham số

- **number** (bắt buộc): Số lần tung xúc xắc để mô phỏng.

#### Phản hồi

Phản hồi sẽ chứa các thuộc tính sau:

- **response**: Tổng của các số ngẫu nhiên được tạo ra.
- **data**: Một mảng chứa các số ngẫu nhiên từng cái riêng biệt được tạo ra.
- **type**: Loại kết quả trò chơi, "Tài" hoặc "Xỉu" dựa trên tổng có là chẵn hay lẻ.

Ví dụ Phản hồi:

    {
      "response": 15,
      "data": \[3, 2, 4, 1, 5\],
      "type": "Tài"
    }

### GET /data/:number

Điểm cuối này lấy dữ liệu lịch sử trò chơi.

#### Tham số

- **number** (bắt buộc): Số lượng kết quả trò chơi gần đây cần lấy.

#### Phản hồi

Phản hồi sẽ là một mảng chứa số lượng kết quả trò chơi gần đây được chỉ định bởi tham số.

Ví dụ Phản hồi:

    [
      {
        "response": 15,
        "data": \[3, 2, 4, 1, 5\],
        "type": "Tài"
      },
      {
        "response": 12,
        "data": \[6, 2, 1, 3\],
        "type": "Xỉu"
      }
    ]

## Thành công và Lỗi

API sẽ trả về các mã phản hồi HTTP và thông điệp tương ứng để chỉ ra thành công hoặc lỗi của yêu cầu. Dưới đây là danh sách một số mã phản hồi phổ biến:

- **200 OK**: Yêu cầu thành công và trả về dữ liệu.
- **400 Bad Request**: Yêu cầu không hợp lệ với tham số không đúng hoặc thiếu.
- **500 Internal Server Error**: Lỗi nội bộ xảy ra khi đọc hoặc ghi file dữ liệu.

## Tham khảo

API được xây dựng bằng Node.js và Express.js. Dưới đây là các tài liệu tham khảo chính:

- [Node.js Documentation](https://nodejs.org/)
- [Express.js Documentation](https://expressjs.com/)

## Kết luận

Đây là tài liệu chi tiết cho API. Hãy tham khảo và sử dụng các điểm cuối đã được cung cấp. Nếu bạn có bất kỳ câu hỏi hoặc vấn đề, vui lòng liên hệ với nhà phát triển API.
