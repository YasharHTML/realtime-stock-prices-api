# NestJS Stock Price Polling API

This is a simple NestJS application for building a real-time stock price polling API. It regularly fetches stock prices from a data source and provides them to clients in real-time. In this example, stock prices are updated every 5 seconds.

## Prerequisites

Before you start, make sure you have the following tools and dependencies installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [NestJS](https://nestjs.com/)
- [npm](https://www.npmjs.com

## What we have

We have 2 microservices cron (stock generation) and app (realtime stock prices api).

First one just generates new stock data and sends them to postgresql.
Last one is an api to get data from pg, with a swagger docs.

Network is internal.

nginx is a reverse proxy for scaled apis

## How to run

`sudo docker compose up -d --build --remove-orphans --scale app=2`