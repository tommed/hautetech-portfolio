<template>
  <header class="text-center border-t-4 border-pink-500">
    <h1 class="text-4xl font-bold my-6 animate__animated animate__rubberBand animate__slow animate__delay-1s">
      <icon class="text-teal-500" icon="shirt"/>
      Haute Tech.
    </h1>
    <nav class="my-4 border-y-2 border-gray-100 text-gray-600 dark:text-teal-200 dark:border-gray-800 py-4 animate__animated animate__fadeIn">
      <ul class="list-none uppercase">
        <li class="inline mx-4"><router-link to="/">Home</router-link></li>
        <li class="inline mx-4"><router-link to="/about">About</router-link></li>
        <li class="inline mx-4"><router-link to="/signup">Register Interest</router-link></li>
        <li class="inline mx-4"><router-link to="/partners">Partners</router-link></li>
      </ul>
    </nav>
  </header>
  <router-view/>
  <hr>
  <footer>
    <small>
      Copyright 2022 Haute Tech - all rights reserved.<br/>
      Open source fonts <a href="/res/fonts/YesevaOne-OFL.txt">Yeseva One</a>
      and <a href="/res/fonts/PrataOFL.txt">Prata</a> used.
    </small>
  </footer>
</template>
