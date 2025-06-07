import tseslint from 'typescript-eslint';

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "To ensure uniform UI, contributors must use a typography element. Use of standard text tags is not allowed"
    },
    fixable: "code",
    schema: [],
  },
  create(context) {
    return {
      JSXOpeningElement(node) {
        const tagName = node.name.name;

        if (typeof tagName == 'string' && ('/h[1-6]/'.test(tagName) || '/p/'.test(tagName))) {
          context.report({
            node,
            messageId: "avoidHeading",
            data: { tag: tagName }
          })
        }
      }
    }
  }
}
