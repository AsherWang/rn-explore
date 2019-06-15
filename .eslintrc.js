module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'globals': {
        '$t': 'readonly',
        'i18n': 'readonly',
        'api': 'readonly',
        'gScreen': 'readonly',
    },
    'rules': {
        'react/prefer-stateless-function': [0],
        'global-require': [0],
        'no-console': [0],
        'react/jsx-filename-extension': [0],
        'class-methods-use-this': [0]
    }
};