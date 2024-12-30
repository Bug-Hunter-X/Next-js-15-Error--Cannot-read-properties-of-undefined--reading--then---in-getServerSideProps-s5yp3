# Next.js 15 Error: Cannot read properties of undefined (reading 'then') in getServerSideProps

This repository demonstrates a bug in Next.js 15 where a custom `getServerSideProps` function that returns a Promise throws a `TypeError: Cannot read properties of undefined (reading 'then')` error.

## Bug Description

The bug occurs when using a custom `getServerSideProps` function that returns a Promise. The error message is `TypeError: Cannot read properties of undefined (reading 'then')`. This error prevents the application from rendering correctly.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the error in the browser console.

## Solution

The solution is to ensure that the Promise returned by `getServerSideProps` resolves to an object with the correct properties (props, redirect, etc.).

## Additional Notes

This issue seems to be related to Next.js 15's new approach to handling asynchronous operations in `getServerSideProps`. The solution involves carefully handling the Promise returned by `getServerSideProps` to ensure it resolves correctly.  Make sure the `getServerSideProps` returns the expected structure before resolving the promise.