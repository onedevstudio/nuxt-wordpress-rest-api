<template>
  <span class="post-separator" />
</template>

<script>
export default {
  name: 'PostSeparator',
};
</script>

<style lang="scss">
.post-separator {
  display: block;
  width: 30%;
  background: linear-gradient(
    to left,
    currentColor calc(50% - 16px),
    transparent calc(50% - 16px),
    transparent calc(50% + 16px),
    currentColor calc(50% + 16px)
  );
  background-color: transparent !important;
  border: none;
  height: 0.1rem;
  overflow: visible;
  position: relative;
  margin: 8rem auto 0;

  &::before,
  &::after {
    background: #2f495e;
    content: '';
    display: block;
    height: 1.6rem;
    position: absolute;
    top: calc(50% - 0.8rem);
    transform: rotate(22.5deg);
    width: 0.1rem;
  }

  &::before {
    left: calc(50% - 0.5rem);
  }

  &::after {
    right: calc(50% - 0.5rem);
  }
}
</style>
