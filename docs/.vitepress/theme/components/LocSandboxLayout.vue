<template>
  <div class="loc-sandbox-layout">
    <Content />
  </div>
</template>

<style>
.loc-sandbox-layout {
  padding: 32px 24px 96px;
  width: 100%;
}

@media (min-width: 768px) {
  .loc-sandbox-layout {
    padding: 48px 32px 128px;
  }
}

@media (min-width: 960px) {
  .loc-sandbox-layout {
    padding: 48px 32px 160px;
  }
}

.loc-sandbox-layout h1 {
  letter-spacing: -0.02em;
  line-height: 40px;
  font-size: 32px;
  position: relative;
  font-weight: 600;
  outline: none;
}
</style>
