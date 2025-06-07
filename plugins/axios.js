//axios nuxt config

import { defineNuxtPlugin } from "#app";
import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const api = axios.create({
    baseURL:
      process.env.NUXT_PUBLIC_API_BASE_URL || "https://api.themoviedb.org/",
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Add a request interceptor
  api.interceptors.request.use(
    (config) => {
      const tmdbToken = process.env.MOVIES_ACCESS_TOKEN;

      if (tmdbToken) {
        config.headers["Authorization"] = `Bearer ${tmdbToken}`;
      }
      //add movies auth

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Provide the axios instance to the Nuxt app
  nuxtApp.provide("axios", api);
});

// This code sets up a custom Axios instance for a Nuxt.js application, allowing you to make HTTP requests with a base URL and custom headers. It also includes request and response interceptors for additional functionality, such as adding authentication tokens or handling errors. The Axios instance is then provided to the Nuxt app for use throughout the application.
