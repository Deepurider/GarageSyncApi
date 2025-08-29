import { Body, Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';

@Controller('')
export class AppController {
  @Get()
  async get(@Res() res: Response) {
    res.type('html').send(html);
  }
}

export const html = `
<!-- src/static/index.html -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>🚀 API Landing Page</title>
    <style>
      body {
        font-family: 'Segoe UI', sans-serif;
        background: #f7f9fc;
        color: #333;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        margin: 0;
        flex-direction: column;
      }
      h1 {
        font-size: 2.5rem;
        color: #2b6cb0;
      }
      p {
        margin: 0.5rem 0;
      }
      .btn {
        margin-top: 20px;
        padding: 10px 16px;
        background-color: #2b6cb0;
        color: white;
        text-decoration: none;
        border-radius: 8px;
        font-size: 1rem;
      }
      .btn:hover {
        background-color: #2c5282;
      }
    </style>
  </head>
  <body>
    <h1>🚀 Welcome to Our NestJS API</h1>
    <p>You're seeing this because the API is running properly.</p>
    <p>Visit the Swagger docs for full API endpoints.</p>
    <a class="btn" href="/api/docs" target="_blank">View API Docs</a>
  </body>
</html>

`