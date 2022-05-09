module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'string-quotes': 'double',
  },
  overrides: [
    // 若项目中存在scss文件，添加以下配置
    {
      files: '**/*.scss',
      customSyntax: 'postcss-scss',
    },
  ],
}
