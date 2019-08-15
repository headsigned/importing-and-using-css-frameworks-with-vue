<template>
  <div id="app">
    <div class="section">
      <div class="container has-text-centered">
        <img alt="Vue logo" src="./assets/logo.png" />
        <br />
        <button class="button is-primary">Custom Primary Color Button</button>
        <div
          class="mixin-and-variable-example"
        >Resize the browser to see text color change using a mixin.</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mixin-and-variable-example {
  @include mobile {
    color: $danger;
  }
  @include tablet-only {
    color: $warning;
  }
  @include desktop-only {
    color: $link;
  }
  @include widescreen-only {
    color: $primary;
  }
  @include fullhd {
    color: $success;
  }
}
</style>
