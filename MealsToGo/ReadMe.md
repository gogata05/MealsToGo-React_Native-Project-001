# MealsToGo

React Native Project 001

## Introduction

MealsToGo is application for finding restaurants and buying meals.

## Features

- Firebase
- Stripe Payment
- Google Maps
- Places API

## How to use?

- 0.Download the repository and extract it to folder
- 1.Go to functions folder
- 2.Make sure you have node 20 running or later (if later update the engine in package.json)
- 3.Run npm i
- 4.Login to firebase firebase login
- 5.Set the correct project name in firebase.json
- 6.Copy your firebase config and paste it in App.js so it connects to the right firebase app
- 7.Create a .runtimeconfig.json with
  {
  "stripe": {
  "key": "<empty>"
  },
  "google": {
  "key": "<empty>"
  }
  }
- 8.Run yarn serve in the firebase folder
- 9.Run the Expo app
- 10.Make sure env.js is set to mock mode real keys you want to test with (default to true on master).

![image](MealsToGo/assets/images/Home_authorized_users.png)
![image](MealsToGo/assets/images/Google_Maps.png)
![image](MealsToGo/assets/images/Stripe Payment.png)
![image](MealsToGo/assets/images/Settings_Page.png)
![image](MealsToGo/assets/images/Home_non-authorized users.png)
![image](MealsToGo/assets/images/Login.png)
![image](MealsToGo/assets/images/Register.png)
![image](MealsToGo/assets/images/Restaurant Details.png)
![image](MealsToGo/assets/images/Favourites_Restaurants.png)
![image](MealsToGo/assets/images/Home_authorized_users.png)
![image](MealsToGo/assets/images/Cart_Empty.png)
