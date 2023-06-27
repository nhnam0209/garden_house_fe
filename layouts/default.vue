<template>
  <div>
    <slot name="header">
      <navigation-bar-desktop />
    </slot>
    <slot name="content">
      <Nuxt />
    </slot>
    <slot name="footer">
      <Footer />
    </slot>
  </div>
</template>
<script lang="ts"></script>
