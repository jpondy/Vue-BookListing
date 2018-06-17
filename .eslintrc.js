module.exports = {
    extends: [
        // add more generic rulesets here, such as:
        // 'eslint:recommended',
        'plugin:vue/essential'
    ],
    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
        "quotes": ["error", "double"],
        "vue/max-attributes-per-line": [6, {
            "singleline": 6,
            "multiline": {
                "max": 1,
                "allowFirstLine": true
            }
        }]
    }
}
