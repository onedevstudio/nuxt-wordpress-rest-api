<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    html: {
      type: String,
      required: true,
    },
  },
  computed: {
    dynamicContent() {
      return {
        template: `<${this.tag} class="dynamic-content">${this.html}</${this.tag}>`,
        props: {},
      };
    },
  },
  render(r) {
    return r('div', [r(this.dynamicContent, { props: {} })]);
  },
};
</script>

<style lang="scss">
.dynamic-content {
  font-size: 1.125rem /* 18/16 */;

  > * {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.25em;
    padding-left: 1.071429rem;
    padding-right: 1.071429rem;

    &:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.is-style-wide) {
      max-width: 58rem;
      width: calc(100% - 4rem);
    }
  }

  > .alignwide {
    max-width: 84rem;
    width: 84rem;
  }

  > .alignfull {
    margin-bottom: 10rem;
    margin-top: 10rem;
  }

  .wp-block-image.alignfull img,
  .wp-block-image.alignwide img {
    width: 100%;
  }

  .wp-block-gallery ul {
    list-style: none;
  }

  .wp-block-gallery,
  .blocks-gallery-grid {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;

    .blocks-gallery-item {
      width: calc((100% - 16px * 2) / 3);
      margin-bottom: 20px;

      figure {
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
      }
    }
  }
}
</style>
